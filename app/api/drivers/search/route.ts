// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { Prisma } from "@prisma/client";

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);

//   const origin = searchParams.get("origin");       // state
//   const destination = searchParams.get("destination"); // state
//   const truckType = searchParams.get("truckType");
//   const minCapacity = searchParams.get("minCapacity");
//   const maxRate = searchParams.get("maxRate");
//   const page = parseInt(searchParams.get("page") || "1");
//   const limit = Math.min(parseInt(searchParams.get("limit") || "12"), 50);
//   const skip = (page - 1) * limit;

//   // Build where clause
//   const where: Prisma.DriverProfileWhereInput = {
//     isAvailable: true,
//     ...(truckType && { truckType: truckType as any }),
//     ...(minCapacity && { capacityTons: { gte: parseFloat(minCapacity) } }),
//     ...(maxRate && { ratePerKm: { lte: parseFloat(maxRate) } }),
//     // Filter by routes if origin/destination provided
//     ...(origin || destination
//       ? {
//           servicesRoutes: {
//             some: {
//               ...(origin && { originState: { contains: origin, mode: "insensitive" } }),
//               ...(destination && { destState: { contains: destination, mode: "insensitive" } }),
//             },
//           },
//         }
//       : {}),
//   };

//   const [drivers, total] = await Promise.all([
//     prisma.driverProfile.findMany({
//       where,
//       include: {
//         user: { select: { id: true, name: true, email: true, phone: true, image: true } },
//         servicesRoutes: true,
//       },
//       orderBy: [{ avgRating: "desc" }, { totalTrips: "desc" }],
//       skip,
//       take: limit,
//     }),
//     prisma.driverProfile.count({ where }),
//   ]);

//   return NextResponse.json({
//     drivers,
//     pagination: {
//       total,
//       page,
//       limit,
//       totalPages: Math.ceil(total / limit),
//       hasMore: skip + limit < total,
//     },
//   });
// }



// app/api/drivers/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const origin      = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const truckType   = searchParams.get("truckType");
  const minCapacity = searchParams.get("minCapacity");
  const maxRate     = searchParams.get("maxRate");
  const page        = Math.max(1, parseInt(searchParams.get("page")  ?? "1"));
  const limit       = Math.min(50, parseInt(searchParams.get("limit") ?? "12"));
  const skip        = (page - 1) * limit;

  // Inline type replaces Prisma.DriverProfileWhereInput
  const where = {
    isAvailable: true,
    ...(truckType   && { truckType:     truckType as any }),
    ...(minCapacity && { capacityTons:  { gte: parseFloat(minCapacity) } }),
    ...(maxRate     && { ratePerKm:     { lte: parseFloat(maxRate) } }),
    ...(origin || destination
      ? {
          servicesRoutes: {
            some: {
              ...(origin      && { originState: { contains: origin,      mode: "insensitive" as const } }),
              ...(destination && { destState:   { contains: destination, mode: "insensitive" as const } }),
            },
          },
        }
      : {}),
  };

  const [drivers, total] = await Promise.all([
    prisma.driverProfile.findMany({
      where,
      include: {
        user:           { select: { id: true, name: true, email: true, phone: true, image: true } },
        servicesRoutes: true,
      },
      orderBy: [{ avgRating: "desc" }, { totalTrips: "desc" }],
      skip,
      take: limit,
    }),
    prisma.driverProfile.count({ where }),
  ]);

  return NextResponse.json({
    drivers,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore:    skip + limit < total,
    },
  });
}