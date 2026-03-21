import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const profile = await prisma.driverProfile.findUnique({
    where: { id: params.id },
    include: {
      user: { select: { id: true, name: true, email: true, phone: true, image: true, createdAt: true } },
      servicesRoutes: true,
    },
  });

  if (!profile) {
    return NextResponse.json({ error: "Driver not found" }, { status: 404 });
  }

  // Fetch recent reviews separately (avoid exposing personal booking data)
  const reviews = await prisma.review.findMany({
    where: { receiverId: profile.userId },
    include: { giver: { select: { name: true, image: true } } },
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return NextResponse.json({ ...profile, reviews });
}