import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { bookingId } = await req.json();
  if (!bookingId) {
    return NextResponse.json({ error: "bookingId is required" }, { status: 400 });
  }

  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: { owner: true, transaction: true },
  });

  if (!booking) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  }

  // Only the owner can pay
  if (booking.ownerId !== session.user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Only pay if ACCEPTED
  if (booking.status !== "ACCEPTED") {
    return NextResponse.json({ error: "Booking is not in a payable state" }, { status: 400 });
  }

  // If a transaction already exists and was successful, block re-payment
  if (booking.transaction?.status === "SUCCESSFUL") {
    return NextResponse.json({ error: "This booking has already been paid" }, { status: 400 });
  }

  if (!booking.owner) {
    return NextResponse.json({ error: "Booking owner not found" }, { status: 500 });
  }

  const merchantCode = process.env.INTERSWITCH_MERCHANT_CODE!;
  const payItemId = process.env.INTERSWITCH_PAY_ITEM_ID!;
  const secretKey = process.env.INTERSWITCH_SECRET_KEY!;
  const baseUrl = process.env.INTERSWITCH_BASE_URL!;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL!;

  const txRef = `TXN-${bookingId}-${Date.now()}`;
  const amountKobo = Math.round(booking.agreedAmount * 100);
  const redirectUrl = `${appUrl}/api/payments/callback`;

  // Hash: txnref + merchantCode + payItemId + amount(kobo) + secretKey
  const hashInput = `${txRef}${merchantCode}${payItemId}${amountKobo}${secretKey}`;
  const hash = crypto.createHash("sha512").update(hashInput).digest("hex");

  await prisma.transaction.upsert({
    where: { bookingId },
    update: {
      transactionReference: txRef,
      amount: booking.agreedAmount,
      amountKobo,
      status: "INITIATED",
      responseCode: null,
      responseDescription: null,
      paymentReference: null,
      completedAt: null,
    },
    create: {
      bookingId,
      merchantCode,
      payItemId,
      transactionReference: txRef,
      amount: booking.agreedAmount,
      amountKobo,
      currency: "566",
      status: "INITIATED",
    },
  });

  await prisma.booking.update({
    where: { id: bookingId },
    data: { status: "PAYMENT_PENDING" },
  });

  const params = new URLSearchParams({
    merchantcode: merchantCode,
    payItemID: payItemId,
    amount: String(amountKobo),
    transactionreference: txRef,
    hash,
    currency: "566",
    site_redirect_url: redirectUrl,
 
    cust_id: booking.owner.id,
    cust_name: booking.owner.name ?? booking.owner.email ?? "",
    cust_email: booking.owner.email ?? "",
  });

  const paymentUrl = `${baseUrl}/webpay/pay?${params.toString()}`;
  return NextResponse.json({ paymentUrl });
}