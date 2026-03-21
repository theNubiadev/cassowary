import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const booking = await prisma.booking.findUnique({
    where: { id: params.id },
    include: {
      cargoListing: true,
      owner: { select: { id: true, name: true, email: true, phone: true, image: true } },
      driver: { select: { id: true, name: true, phone: true, image: true } },
      driverProfile: { include: { servicesRoutes: true } },
      transaction: true,
      review: true,
    },
  });

  if (!booking) return NextResponse.json({ error: "Booking not found" }, { status: 404 });

  // Only the owner or driver of this booking can view it
  const isAuthorized =
    booking.ownerId === session.user.id || booking.driverId === session.user.id;
  if (!isAuthorized) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  return NextResponse.json(booking);
}

const actionSchema = z.object({
  action: z.enum(["ACCEPT", "DECLINE", "CANCEL", "MARK_IN_TRANSIT", "MARK_DELIVERED"]),
  reason: z.string().optional(),
});

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = actionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  const booking = await prisma.booking.findUnique({ where: { id: params.id } });
  if (!booking) return NextResponse.json({ error: "Booking not found" }, { status: 404 });

  const { action, reason } = parsed.data;
  const isOwner = booking.ownerId === session.user.id;
  const isDriver = booking.driverId === session.user.id;

  let updateData: any = {};

  switch (action) {
    case "ACCEPT":
      if (!isDriver) return NextResponse.json({ error: "Only the driver can accept" }, { status: 403 });
      if (booking.status !== "PENDING") return NextResponse.json({ error: "Booking is not pending" }, { status: 400 });
      updateData = { status: "ACCEPTED", acceptedAt: new Date() };
      break;

    case "DECLINE":
      if (!isDriver) return NextResponse.json({ error: "Only the driver can decline" }, { status: 403 });
      if (!["PENDING"].includes(booking.status)) return NextResponse.json({ error: "Cannot decline at this stage" }, { status: 400 });
      updateData = { status: "CANCELLED", declinedAt: new Date(), declineReason: reason };
      break;

    case "CANCEL":
      if (!isOwner) return NextResponse.json({ error: "Only the cargo owner can cancel" }, { status: 403 });
      if (["PAID", "IN_TRANSIT", "DELIVERED"].includes(booking.status)) {
        return NextResponse.json({ error: "Cannot cancel after payment" }, { status: 400 });
      }
      updateData = { status: "CANCELLED" };
      break;

    case "MARK_IN_TRANSIT":
      if (!isDriver) return NextResponse.json({ error: "Only the driver can mark in transit" }, { status: 403 });
      if (booking.status !== "PAID") return NextResponse.json({ error: "Booking must be paid first" }, { status: 400 });
      updateData = { status: "IN_TRANSIT" };
      break;

    case "MARK_DELIVERED":
      if (!isDriver) return NextResponse.json({ error: "Only the driver can mark delivered" }, { status: 403 });
      if (booking.status !== "IN_TRANSIT") return NextResponse.json({ error: "Booking must be in transit" }, { status: 400 });
      updateData = { status: "DELIVERED", actualDelivery: new Date() };
      break;

    default:
      return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  }

  const updated = await prisma.booking.update({
    where: { id: params.id },
    data: updateData,
  });

  return NextResponse.json({ message: "Booking updated", booking: updated });
}