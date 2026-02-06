import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { password, name, email, passbookNo } = await req.json();
    if (!password || !passbookNo) {
      return NextResponse.json({ error: "Password and passbookNo are required." }, { status: 400 });
    }
    const existing = await prisma.user.findUnique({ where: { passbookNo } });
    if (existing) {
      return NextResponse.json({ error: "Passbook number already exists." }, { status: 400 });
    }
    const hashed = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        password: hashed,
        name,
        email,
        passbookNo,
        role: "branch",
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Registration failed." }, { status: 500 });
  }
}
