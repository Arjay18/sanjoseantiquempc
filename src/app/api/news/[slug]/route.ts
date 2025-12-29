import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET single news post by slug
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const paramsData = await params;
    const { slug } = paramsData;

    const newsPost = await prisma.newsPost.findUnique({
      where: { slug },
    });

    if (!newsPost) {
      return NextResponse.json({ error: "News post not found" }, { status: 404 });
    }

    return NextResponse.json(newsPost);
  } catch (error) {
    console.error("Error fetching news post:", error);
    return NextResponse.json({ error: "Failed to fetch news post" }, { status: 500 });
  }
}
