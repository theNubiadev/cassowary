import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const listingSchema = z.object({
  title: z.string().min(5),
  description: z.string().optional(),
  cargoType: z.enum(["GENERAL","PERISHABLE","FRAGILE","HAZARDOUS","LIVESTOCK","LIQUID","MACHINERY","ELECTRONICS"]).default("GENERAL"),
  weightTons: z.number().positive(),
  lengthMeters: z.number().positive().optional(),
  originState: z.string(),
  originCity: z.string(),
  originAddress: z.string().optional(),
  destState: z.string(),
  destCity: z.string(),
  destAddress: z.string().optional(),
  requiredTruck: z.enum(["FLATBED","REFRIGERATED","TANKER","CONTAINER","TIPPER","VAN","LOWBED","CURTAINSIDER"]).optional(),
  neededBy: z.string().transform((s) => new Date(s)),
  budget: z.number().positive().optional(),
});

// GET — list cargo listings (drivers browse open jobs)
export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const mine = searchParams.get("mine") === "true";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = Math.min(parseInt(searchParams.get("limit") || "10"), 50);

  const where = mine
    ? { ownerId: session.user.id }
    : { isActive: true };

  const [listings, total] = await Promise.all([
    prisma.cargoListing.findMany({
      where,
      include: { owner: { select: { name: true, image: true } } },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.cargoListing.count({ where }),
  ]);

  return NextResponse.json({ listings, total, page, totalPages: Math.ceil(total / limit) });
}

// POST — cargo owner creates a new listing
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.user.role !== "CARGO_OWNER") {
    return NextResponse.json({ error: "Only cargo owners can create listings" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const parsed = listingSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Validation failed", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }

    const listing = await prisma.cargoListing.create({
      data: { ownerId: session.user.id, ...parsed.data },
    });

    return NextResponse.json({ message: "Cargo listing created", listing }, { status: 201 });
  } catch (err) {
    console.error("[CARGO CREATE]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}