import { PrismaClient, TruckType, CargoType, BookingStatus } from "../generated/prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding LoadLink database...");

  // ── Create demo cargo owner ──
  const ownerPassword = await bcrypt.hash("password123", 10);
  const owner = await prisma.user.upsert({
    where: { email: "owner@loadlink.ng" },
    update: {},
    create: {
      email: "owner@loadlink.ng",
      name: "Emeka Okonkwo",
      phone: "08012345678",
      password: ownerPassword,
      role: "CARGO_OWNER",
      onboardingComplete: true,
    },
  });

  // ── Create demo drivers ──
  const driverPassword = await bcrypt.hash("password123", 10);

  const driversData = [
    {
      email: "driver1@loadlink.ng",
      name: "Chukwudi Nwachukwu",
      phone: "08023456789",
      truckType: "CONTAINER" as TruckType,
      truckModel: "Mack Granite",
      truckYear: 2019,
      plateNumber: "LAG-452-KJ",
      capacityTons: 30,
      ratePerKm: 350,
      minimumCharge: 50000,
      baseState: "Lagos",
      baseCity: "Apapa",
      bio: "10 years experience in container haulage across Nigeria. Reliable and punctual.",
      yearsExperience: 10,
      avgRating: 4.8,
      totalTrips: 142,
      routes: [
        { originState: "Lagos", destState: "Abuja" },
        { originState: "Lagos", destState: "Kano" },
        { originState: "Lagos", destState: "Rivers" },
      ],
    },
    {
      email: "driver2@loadlink.ng",
      name: "Abubakar Musa",
      phone: "07034567890",
      truckType: "FLATBED" as TruckType,
      truckModel: "Volvo FH16",
      truckYear: 2021,
      plateNumber: "ABJ-103-MN",
      capacityTons: 25,
      ratePerKm: 280,
      minimumCharge: 40000,
      baseState: "FCT",
      baseCity: "Gwagwalada",
      bio: "Specialise in machinery and equipment transport. FCT-based with nationwide coverage.",
      yearsExperience: 7,
      avgRating: 4.6,
      totalTrips: 89,
      routes: [
        { originState: "FCT", destState: "Kano" },
        { originState: "FCT", destState: "Lagos" },
        { originState: "FCT", destState: "Enugu" },
        { originState: "FCT", destState: "Kaduna" },
      ],
    },
    {
      email: "driver3@loadlink.ng",
      name: "Taiwo Adeyemi",
      phone: "09045678901",
      truckType: "REFRIGERATED" as TruckType,
      truckModel: "Mercedes Actros",
      truckYear: 2022,
      plateNumber: "OYO-789-DF",
      capacityTons: 15,
      ratePerKm: 420,
      minimumCharge: 60000,
      baseState: "Oyo",
      baseCity: "Ibadan",
      bio: "Cold chain specialist. Perishables, pharmaceuticals, frozen goods. Ibadan-Lagos corridor.",
      yearsExperience: 5,
      avgRating: 4.9,
      totalTrips: 201,
      routes: [
        { originState: "Oyo", destState: "Lagos" },
        { originState: "Oyo", destState: "Ogun" },
        { originState: "Oyo", destState: "Osun" },
      ],
    },
    {
      email: "driver4@loadlink.ng",
      name: "Nneka Obi",
      phone: "08056789012",
      truckType: "VAN" as TruckType,
      truckModel: "Toyota Dyna",
      truckYear: 2020,
      plateNumber: "RIV-234-HS",
      capacityTons: 5,
      ratePerKm: 200,
      minimumCharge: 25000,
      baseState: "Rivers",
      baseCity: "Port Harcourt",
      bio: "Electronics and fragile goods specialist. PH to Aba, Owerri, Calabar routes.",
      yearsExperience: 4,
      avgRating: 4.7,
      totalTrips: 67,
      routes: [
        { originState: "Rivers", destState: "Abia" },
        { originState: "Rivers", destState: "Imo" },
        { originState: "Rivers", destState: "Cross River" },
        { originState: "Rivers", destState: "Bayelsa" },
      ],
    },
  ];

  for (const d of driversData) {
    const user = await prisma.user.upsert({
      where: { email: d.email },
      update: {},
      create: {
        email: d.email,
        name: d.name,
        phone: d.phone,
        password: driverPassword,
        role: "DRIVER",
        onboardingComplete: true,
      },
    });

    const profile = await prisma.driverProfile.upsert({
      where: { userId: user.id },
      update: {},
      create: {
        userId: user.id,
        truckType: d.truckType,
        truckModel: d.truckModel,
        truckYear: d.truckYear,
        plateNumber: d.plateNumber,
        capacityTons: d.capacityTons,
        ratePerKm: d.ratePerKm,
        minimumCharge: d.minimumCharge,
        baseState: d.baseState,
        baseCity: d.baseCity,
        bio: d.bio,
        yearsExperience: d.yearsExperience,
        avgRating: d.avgRating,
        totalTrips: d.totalTrips,
        isVerified: true,
        isAvailable: true,
      },
    });

    // Add routes
    for (const r of d.routes) {
      await prisma.route.create({
        data: {
          driverProfileId: profile.id,
          originState: r.originState,
          destState: r.destState,
        },
      });
    }
  }

  // ── Create demo cargo listings ──
  await prisma.cargoListing.createMany({
    data: [
      {
        ownerId: owner.id,
        title: "50 bags of rice — Lagos to Abuja",
        description: "50 x 50kg bags of premium rice. Needs covered truck.",
        cargoType: "GENERAL",
        weightTons: 2.5,
        originState: "Lagos",
        originCity: "Ikeja",
        destState: "FCT",
        destCity: "Wuse",
        neededBy: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        budget: 150000,
      },
      {
        ownerId: owner.id,
        title: "Industrial generator — Port Harcourt to Owerri",
        cargoType: "MACHINERY",
        weightTons: 8,
        originState: "Rivers",
        originCity: "Port Harcourt",
        destState: "Imo",
        destCity: "Owerri",
        neededBy: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        budget: 80000,
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Seed complete!");
  console.log("  Demo credentials:");
  console.log("  Cargo owner: owner@loadlink.ng / password123");
  console.log("  Driver:      driver1@loadlink.ng / password123");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());