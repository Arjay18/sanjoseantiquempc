import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const results: any = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    database_url: process.env.DATABASE_URL ? "Set" : "Not set",
    nextauth_secret: process.env.NEXTAUTH_SECRET ? "Set" : "Not set",
    nextauth_url: process.env.NEXTAUTH_URL,
    admin_username: process.env.ADMIN_USERNAME ? "Set" : "Not set",
    admin_password: process.env.ADMIN_PASSWORD ? "Set" : "Not set",
    connection: null,
    news_count: null,
    recent_posts: null,
    error: null
  };

  try {
    // Test database connection
    await prisma.$connect();
    results.connection = "✅ Connected";

    // Test news table
    const count = await prisma.newsPost.count();
    results.news_count = count;

    // Get recent posts
    const posts = await prisma.newsPost.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
      select: { id: true, title: true, status: true, createdAt: true }
    });
    results.recent_posts = posts;

  } catch (error: any) {
    results.error = error.message;
    results.connection = "❌ Failed";
  } finally {
    await prisma.$disconnect();
  }

  return NextResponse.json(results);
}
