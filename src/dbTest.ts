import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("Connected to DB!");

    // Create a user (plain-text password here is for testing only)
    const user = await prisma.user.create({
      data: {
        email: "someone@example.com",
        password: "plain-text-password", // Always hash in production!
      },
    });
    console.log("Created user:", user);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
