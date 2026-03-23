import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET — fetch current user's profile
export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      image: true,
      role: true,
      onboardingComplete: true,
      createdAt: true,
      driverProfile: {
        select: {
          id: true,
          truckType: true,
          truckModel: true,
          capacityTons: true,
          ratePerKm: true,
          baseState: true,
          baseCity: true,
          isAvailable: true,
          isVerified: true,
          avgRating: true,
          totalTrips: true,
        },
      },
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

const updateSchema = z.object({
  name: z.string().min(2).optional(),
  phone: z.string().min(11).optional(),
  image: z.string().url().optional(),
});

// PUT — update current user's basic profile
export async function PUT(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const updated = await prisma.user.update({
    where: { id: session.user.id },
    data: parsed.data,
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      image: true,
      role: true,
    },
  });

  return NextResponse.json({ message: "Profile updated", user: updated });
}