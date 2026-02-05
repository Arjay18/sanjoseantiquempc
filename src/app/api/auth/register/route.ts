import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { passbookNo, memberCategory, username, password, name, email, branch } = await req.json();
    if (!passbookNo || !username || !password || !branch) {
      return NextResponse.json({ error: "Passbook Number, username, password, and branch are required." }, { status: 400 });
    }
    const existing = await prisma.user.findUnique({ where: { username } });
    if (existing) {
      return NextResponse.json({ error: "Username already exists." }, { status: 400 });
    }
    const existingPassbook = await prisma.user.findUnique({ where: { passbookNo } });
    if (existingPassbook) {
      return NextResponse.json({ error: "Passbook Number already exists." }, { status: 400 });
    }
    const hashed = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        passbookNo,
        memberCategory,
        username,
        password: hashed,
        name,
        email,
        branch,
        role: "branch",
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Registration failed." }, { status: 500 });
  }
}
