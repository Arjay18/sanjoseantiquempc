import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  // Get user session
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json([], { status: 401 });
  }
  // Find applications by email or name
  const email = session.user.email;
  const name = session.user.name;
  const applications = await prisma.loanApplication.findMany({
    where: {
      OR: [
        { email: email || undefined },
        { name: name || undefined },
      ],
    },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(applications);
}
