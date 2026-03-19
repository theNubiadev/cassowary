import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Example: seed states
  for (const state of [
    "Lagos",
    "Ogun",
    "Oyo",
    "Kano",
  ]) {
    await prisma.state.create({
      data: { name: state },
    });
  }

  // Example: seed truck types
  const truckTypes = [
    "FLATBED",
    "REFRIGERATED",
    "TANKER",
  ];

  for (const type of truckTypes) {
    await prisma.truckType.create({
      data: { name: type },
    });
  }

  console.log("🌱 Seed complete");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });