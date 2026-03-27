import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const txnref = searchParams.get("txnref");
  const appUrl = process.env.NEXT_PUBLIC_APP_URL!;

  if (!txnref) {
    return NextResponse.redirect(`${appUrl}/dashboard?payment=error`);
  }

  const transaction = await prisma.transaction.findUnique({
    where: { transactionReference: txnref },
    include: { booking: true },
  });

  if (!transaction) {
    return NextResponse.redirect(`${appUrl}/dashboard?payment=error`);
  }

  const verified = await verifyWithInterswitch(
    txnref,
    transaction.amountKobo,
    transaction.merchantCode,
    transaction.payItemId
  );

  const bookingId = transaction.bookingId;

  if (verified?.ResponseCode === "00") {
    await prisma.$transaction([
      prisma.transaction.update({
        where: { transactionReference: txnref },
        data: {
          status: "SUCCESSFUL",
          responseCode: verified.ResponseCode,
          responseDescription: verified.ResponseDescription,
          paymentReference: verified.PaymentReference ?? null,
          channel: verified.Channel ?? null,
          completedAt: new Date(),
        },
      }),
      prisma.booking.update({
        where: { id: bookingId },
        data: { status: "PAID" },
      }),
    ]);

    return NextResponse.redirect(
      `${appUrl}/dashboard/bookings/${bookingId}?payment=success`
    );
  } else {
    await prisma.transaction.update({
      where: { transactionReference: txnref },
      data: {
        status: "FAILED",
        responseCode: verified?.ResponseCode ?? "UNKNOWN",
        responseDescription: verified?.ResponseDescription ?? "Verification failed",
      },
    });

    await prisma.booking.update({
      where: { id: bookingId },
      data: { status: "ACCEPTED" },
    });

    return NextResponse.redirect(
      `${appUrl}/dashboard/bookings/${bookingId}?payment=failed`
    );
  }
}

async function verifyWithInterswitch(
  txnref: string,
  amountKobo: number,
  merchantCode: string,
  payItemId: string
) {
  try {
    const secretKey = process.env.INTERSWITCH_SECRET_KEY!;
    const baseUrl = process.env.INTERSWITCH_BASE_URL!;

    // ✅ FIX 2: include payItemId in hash — must match initiation hash order
    const hashInput = `${txnref}${merchantCode}${payItemId}${amountKobo}${secretKey}`;
    const hash = crypto.createHash("sha512").update(hashInput).digest("hex");

    const url = new URL(`${baseUrl}/api/v2/purchases`);
    url.searchParams.set("productid", payItemId);
    url.searchParams.set("transactionreference", txnref);
    url.searchParams.set("amount", String(amountKobo));

    // ✅ FIX 1: add Basic Authorization header alongside Hash and MerchantCode
    const clientId = process.env.INTERSWITCH_CLIENT_ID!;
    const credentials = Buffer.from(`${clientId}:${secretKey}`).toString("base64");

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Basic ${credentials}`,
        Hash: hash,
        MerchantCode: merchantCode,
      },
    });

    if (!res.ok) {
      console.error("Interswitch verify failed:", res.status, await res.text());
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Interswitch verify error:", err);
    return null;
  }
}