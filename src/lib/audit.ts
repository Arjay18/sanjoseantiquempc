
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface LogAuditArgs {
  userId: string;
  username: string;
  action: string;
  target: string;
  details?: string;
  ip?: string;
}

export async function logAudit({ userId, username, action, target, details, ip }: LogAuditArgs) {
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
