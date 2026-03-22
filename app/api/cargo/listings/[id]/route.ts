import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET — fetch a single cargo listing
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const listing = await prisma.cargoListing.findUnique({
    where: { id: params.id },
    include: {
      owner: { select: { id: true, name: true, phone: true, image: true } },
      bookings: {
        where: { status: { in: ["PENDING", "ACCEPTED", "PAYMENT_PENDING", "PAID", "IN_TRANSIT"] } },
        select: { id: true, status: true },
      },
    },
  });

  if (!listing) {
    return NextResponse.json({ error: "Listing not found" }, { status: 404 });
  }

  return NextResponse.json(listing);
}

const updateSchema = z.object({
  title: z.string().min(5).optional(),
  description: z.string().optional(),
  cargoType: z.enum(["GENERAL","PERISHABLE","FRAGILE","HAZARDOUS","LIVESTOCK","LIQUID","MACHINERY","ELECTRONICS"]).optional(),
  weightTons: z.number().positive().optional(),
  originState: z.string().optional(),
  originCity: z.string().optional(),
  originAddress: z.string().optional(),
  destState: z.string().optional(),
  destCity: z.string().optional(),
  destAddress: z.string().optional(),
  requiredTruck: z.enum(["FLATBED","REFRIGERATED","TANKER","CONTAINER","TIPPER","VAN","LOWBED","CURTAINSIDER"]).optional(),
  neededBy: z.string().transform((s) => new Date(s)).optional(),
  budget: z.number().positive().optional(),
  isActive: z.boolean().optional(),
});

// PATCH — edit or deactivate a cargo listing
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Confirm the listing belongs to this owner
  const existing = await prisma.cargoListing.findUnique({
    where: { id: params.id },
    select: { ownerId: true },
  });

  if (!existing) {
    return NextResponse.json({ error: "Listing not found" }, { status: 404 });
  }
  if (existing.ownerId !== session.user.id) {
    return NextResponse.json({ error: "Forbidden — not your listing" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const updated = await prisma.cargoListing.update({
    where: { id: params.id },
    data: parsed.data,
  });

  return NextResponse.json({ message: "Listing updated", listing: updated });
}

// DELETE — soft delete by deactivating
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const existing = await prisma.cargoListing.findUnique({
    where: { id: params.id },
    select: { ownerId: true },
  });

  if (!existing) {
    return NextResponse.json({ error: "Listing not found" }, { status: 404 });
  }
  if (existing.ownerId !== session.user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await prisma.cargoListing.update({
    where: { id: params.id },
    data: { isActive: false },
  });

  return NextResponse.json({ message: "Listing deactivated" });
}