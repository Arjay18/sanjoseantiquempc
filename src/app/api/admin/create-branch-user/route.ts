import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password, branch } = body;

    if (!username || !password || !branch) {
      return NextResponse.json({ 
        error: 'Missing required fields',
        required: ['username', 'password', 'branch']
      }, { status: 400 });
    }

    // Validate branch
    const validBranches = ['sanjose', 'miagao', 'oton', 'guimaras'];
    if (!validBranches.includes(branch.toLowerCase())) {
      return NextResponse.json({ 
        error: 'Invalid branch',
        validBranches
      }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if user exists
    const existing = await prisma.branchUser.findUnique({
      where: { username },
    });

    let user;
    if (existing) {
      user = await prisma.branchUser.update({
        where: { username },
        data: {
          password: hashedPassword,
          branch: branch.toLowerCase(),
          role: 'branch',
        },
      });
    } else {
      user = await prisma.branchUser.create({
        data: {
          username,
          password: hashedPassword,
          branch: branch.toLowerCase(),
          role: 'branch',
        },
      });
    }

    return NextResponse.json({ 
      success: true, 
      user: {
        id: user.id,
        username: user.username,
        branch: user.branch,
        role: user.role,
      }
    });
  } catch (error: any) {
    console.error('Error creating branch user:', error);
    return NextResponse.json({ 
      error: 'Failed to create branch user',
      details: error.message 
    }, { status: 500 });
  }
}

export async function GET() {
  // Return list of branch users (without passwords)
  try {
    const users = await prisma.branchUser.findMany({
      select: {
        id: true,
        username: true,
        branch: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ users });
  } catch (error: any) {
    console.error('Error listing branch users:', error);
    return NextResponse.json({ 
      error: 'Failed to list branch users',
      details: error.message 
    }, { status: 500 });
  }
}
