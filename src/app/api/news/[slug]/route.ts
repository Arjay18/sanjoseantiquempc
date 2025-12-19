// /app/api/news/[slug]/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface Params {
  params: { slug: string };
}

export async function GET(
  request: Request,
  { params }: Params
) {
  try {
    const { slug } = params;

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    // Fetch the news post by slug and only published posts
    const post = await prisma.newsPost.findFirst({
      where: {
        slug,
        status: "published",
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching news post:", error);
    return NextResponse.json(
      { error: "Failed to fetch news post" },
      { status: 500 }
    );
  }
}
