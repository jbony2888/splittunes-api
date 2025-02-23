// repositories/user.repository.ts

import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

export async function createUser(
  email: string,
  hashedPassword: string,
  name?: string
): Promise<User> {
  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
}

export async function getUserById(id: number): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
}

export async function updateUserStripeAccountId(
  userId: number,
  stripeAccountId: string
): Promise<User> {
  return prisma.user.update({
    where: { id: userId },
    data: { stripeAccountId },
  });
}
