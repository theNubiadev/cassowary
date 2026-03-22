import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.user.role !== "DRIVER") {
    return NextResponse.json({ error: "Only drivers can update availability" }, { status: 403 });
  }

  try {
    const { isAvailable } = await req.json();

    if (typeof isAvailable !== "boolean") {
      return NextResponse.json({ error: "isAvailable must be a boolean" }, { status: 400 });
    }

    const profile = await prisma.driverProfile.update({
      where: { userId: session.user.id },
      data: { isAvailable },
      select: { id: true, isAvailable: true },
    });

    return NextResponse.json({
      message: `You are now ${isAvailable ? "available" : "unavailable"} for bookings`,
      isAvailable: profile.isAvailable,
    });
  } catch (err) {
    console.error("[DRIVER AVAILABILITY]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}