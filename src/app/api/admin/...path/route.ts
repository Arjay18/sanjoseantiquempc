import { NextResponse } from "next/server"; 
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

// Catch-all admin proxy route
export async function GET(request: Request) {
  return handleAdminProxy(request);
}

export async function POST(request: Request) {
  return handleAdminProxy(request);
}

export async function PUT(request: Request) {
  return handleAdminProxy(request);
}

export async function DELETE(request: Request) {
  return handleAdminProxy(request);
}

// Core handler
async function handleAdminProxy(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Authenticated → allow the request to proceed
  return NextResponse.next();
}
