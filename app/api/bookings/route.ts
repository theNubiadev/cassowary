import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const bookingSchema = z.object({
  cargoListingId: z.string().min(1, "cargoListingId is required"),
  driverProfileId: z.string().min(1, "driverProfileId is required"),
  agreedAmount: z.number().positive("agreedAmount must be a positive number"),
  pickupDate: z
    .string()
    .refine((s) => !isNaN(Date.parse(s)), {
      message: 'Invalid date format. Use YYYY-MM-DD — e.g. "2026-04-15"',
    })
    .transform((s) => new Date(s)),
  notes: z.string().optional(),
});

// ── GET — list bookings for the logged-in user ─────────────────────────────
// Drivers see bookings where they are the driver
// Cargo owners see bookings where they are the owner
// Query params:
//   ?status=PENDING|ACCEPTED|PAID|IN_TRANSIT|DELIVERED|CANCELLED
//   ?page=1
//   ?limit=10
export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
  const limit = Math.min(parseInt(searchParams.get("limit") || "10"), 50);

  const where =
    session.user.role === "DRIVER"
      ? {
          driverId: session.user.id,
          ...(status ? { status: status as any } : {}),
        }
      : {
          ownerId: session.user.id,
          ...(status ? { status: status as any } : {}),
        };

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where,
      include: {
        cargoListing: {
          select: {
            id: true,
            title: true,
            cargoType: true,
            weightTons: true,
            originState: true,
            originCity: true,
            destState: true,
            destCity: true,
            neededBy: true,
          },
        },
        owner: { select: { id: true, name: true, email: true, phone: true, image: true } },
        driver: { select: { id: true, name: true, phone: true, image: true } },
        driverProfile: {
          select: {
            id: true,
            truckType: true,
            truckModel: true,
            capacityTons: true,
            ratePerKm: true,
            plateNumber: true,
          },
        },
        transaction: {
          select: {
            status: true,
            amount: true,
            paymentReference: true,
            channel: true,
            completedAt: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.booking.count({ where }),
  ]);

  return NextResponse.json({
    bookings,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore: page * limit < total,
    },
  });
}

// ── POST — cargo owner creates a booking request ───────────────────────────
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.user.role !== "CARGO_OWNER") {
    return NextResponse.json(
      { error: "Only cargo owners can create bookings" },
      { status: 403 }
    );
  }

  try {
    const body = await req.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { cargoListingId, driverProfileId, agreedAmount, pickupDate, notes } =
      parsed.data;

    // Verify the cargo listing belongs to this owner and is still active
    const listing = await prisma.cargoListing.findFirst({
      where: { id: cargoListingId, ownerId: session.user.id, isActive: true },
    });
    if (!listing) {
      return NextResponse.json(
        { error: "Cargo listing not found or not active" },
        { status: 404 }
      );
    }

    // Verify driver exists and is currently available
    const driverProfile = await prisma.driverProfile.findFirst({
      where: { id: driverProfileId, isAvailable: true },
    });
    if (!driverProfile) {
      return NextResponse.json(
        { error: "Driver not found or not available" },
        { status: 404 }
      );
    }

    // Prevent duplicate active bookings for the same driver + cargo
    const existingBooking = await prisma.booking.findFirst({
      where: {
        cargoListingId,
        driverProfileId,
        status: { in: ["PENDING", "ACCEPTED", "PAYMENT_PENDING", "PAID"] },
      },
    });
    if (existingBooking) {
      return NextResponse.json(
        { error: "A booking already exists for this driver and cargo" },
        { status: 409 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        cargoListingId,
        driverProfileId,
        ownerId: session.user.id,
        driverId: driverProfile.userId,
        agreedAmount,
        pickupDate,
        notes,
        status: "PENDING",
      },
      include: {
        cargoListing: {
          select: {
            title: true,
            originState: true,
            originCity: true,
            destState: true,
            destCity: true,
          },
        },
        driverProfile: {
          select: {
            truckType: true,
            truckModel: true,
            plateNumber: true,
          },
        },
        driver: { select: { name: true, phone: true } },
      },
    });

    return NextResponse.json(
      { message: "Booking created successfully", booking },
      { status: 201 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[BOOKING CREATE]", err);
    return NextResponse.json(
      {
        error: "Internal server error",
        ...(process.env.NODE_ENV === "development" && { detail: message }),
      },
      { status: 500 }
    );
  }
}