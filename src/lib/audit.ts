import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function logAudit({ userId, username, action, target, details, ip }) {
  await prisma.auditLog.create({
    data: {
      userId,
      username,
      action,
      target,
      details,
      ip,
    },
  });
}
