import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const profileSchema = z.object({
  truckType: z.enum(["FLATBED","REFRIGERATED","TANKER","CONTAINER","TIPPER","VAN","LOWBED","CURTAINSIDER"]),
  truckModel: z.string().min(2),
  truckYear: z.number().int().min(2000).max(new Date().getFullYear() + 1),
  plateNumber: z.string().min(5),
  capacityTons: z.number().positive(),
  lengthMeters: z.number().positive().optional(),
  ratePerKm: z.number().positive(),
  minimumCharge: z.number().positive(),
  baseState: z.string(),
  baseCity: z.string(),
  bio: z.string().optional(),
  yearsExperience: z.number().int().min(0).optional(),
  licenseNumber: z.string().optional(),
  routes: z.array(z.object({
    originState: z.string(),
    originCity: z.string().optional(),
    destState: z.string(),
    destCity: z.string().optional(),
    estimatedDays: z.number().int().min(1).optional(),
  })).min(1, "Add at least one route"),
});

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const profile = await prisma.driverProfile.findUnique({
    where: { userId: session.user.id },
    include: { servicesRoutes: true, user: { select: { name: true, email: true, phone: true, image: true } } },
  });

  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  return NextResponse.json(profile);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.user.role !== "DRIVER") {
    return NextResponse.json({ error: "Only drivers can create a driver profile" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const parsed = profileSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { routes, ...profileData } = parsed.data;

    // Check plate number uniqueness
    const existingPlate = await prisma.driverProfile.findUnique({
      where: { plateNumber: profileData.plateNumber },
    });
    if (existingPlate) {
      return NextResponse.json({ error: "Plate number already registered" }, { status: 409 });
    }

    const profile = await prisma.$transaction(async (tx) => {
      // const p = await tx.driverProfile.create({
      //   data: { userId: session.user.id, ...profileData },

      // });

      const p = await tx.driverProfile.create({
      data: { userId: session.user.id, ...profileData },
    });
      await tx.route.createMany({
        data: routes.map((r) => ({ ...r, driverProfileId: p.id })),
      });
      // Mark onboarding complete
      await tx.user.update({
        where: { id: session.user.id },
        data: { onboardingComplete: true },
      });
      return p;
    });

    return NextResponse.json({ message: "Driver profile created", profile }, { status: 201 });
  } catch (err) {
    console.error("[DRIVER PROFILE CREATE]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const parsed = profileSchema.partial().safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Validation failed", details: parsed.error.flatten() }, { status: 400 });
    }

    const { routes, ...profileData } = parsed.data;

    const profile = await prisma.$transaction(async (tx) => {
      const p = await tx.driverProfile.update({
        where: { userId: session.user.id },
        data: profileData,
      });
      if (routes && routes.length > 0) {
        await tx.route.deleteMany({ where: { driverProfileId: p.id } });
        await tx.route.createMany({
          data: routes.map((r) => ({ ...r, driverProfileId: p.id })),
        });
      }
      return p;
    });

    return NextResponse.json({ message: "Profile updated", profile });
  } catch (err) {
    console.error("[DRIVER PROFILE UPDATE]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}