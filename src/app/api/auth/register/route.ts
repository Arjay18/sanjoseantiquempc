import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { username, password, name, email, branch, passbookNo } = await req.json();
    if (!username || !password || !branch || !passbookNo) {
      return NextResponse.json({ error: "Username, password, branch, and passbookNo are required." }, { status: 400 });
    }
    const existing = await prisma.user.findUnique({ where: { username } });
    if (existing) {
      return NextResponse.json({ error: "Username already exists." }, { status: 400 });
    }
    const hashed = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        username,
        password: hashed,
        name,
        email,
        branch,
        passbookNo,
        role: "branch",
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Registration failed." }, { status: 500 });
  }
}
