export const runtime = "nodejs";

// /app/api/news/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

// Helper to generate URL-friendly slugs
function generateSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// -----------------------
// CREATE NEWS POST (POST)
// -----------------------
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, content, imageUrl, author, category, caption } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    let slug = generateSlug(title);
    // Ensure slug uniqueness
    let count = 1;
    while (await prisma.newsPost.findUnique({ where: { slug } })) {
      slug = `${slug}-${count}`;
      count++;
    }

    const post = await prisma.newsPost.create({
      data: {
        title,
        content,
        imageUrl,
        author,
        category,
        caption,
        slug,
        status: "published",
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error creating news post:", error);
    return NextResponse.json({ error: "Failed to create news post" }, { status: 500 });
  }
}

// -----------------------
// GET ALL PUBLISHED NEWS (GET)
// -----------------------
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get("search") || "";
    const category = url.searchParams.get("category") || "";

    let where: any = { status: "published" };

    if (category && category !== "All") {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { content: { contains: search, mode: "insensitive" } },
        { author: { contains: search, mode: "insensitive" } },
        { caption: { contains: search, mode: "insensitive" } },
      ];
    }

    const posts = await prisma.newsPost.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching news posts:", error);
    return NextResponse.json({ error: "Failed to fetch news posts" }, { status: 500 });
  }
}

// -----------------------
// UPDATE NEWS POST (PUT)
// -----------------------
export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Post ID is required" }, { status: 400 });

    const body = await request.json();
    const { title, content, imageUrl, author, category, caption, status } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    let slug = generateSlug(title);
    // Ensure slug uniqueness for other posts
    let count = 1;
    while (await prisma.newsPost.findFirst({ where: { slug, NOT: { id } } })) {
      slug = `${slug}-${count}`;
      count++;
    }

    const post = await prisma.newsPost.update({
      where: { id },
      data: { title, content, imageUrl, author, category, caption, status, slug },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error updating news post:", error);
    return NextResponse.json({ error: "Failed to update news post" }, { status: 500 });
  }
}

// -----------------------
// DELETE NEWS POST (DELETE)
// -----------------------
export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Post ID is required" }, { status: 400 });

    await prisma.newsPost.delete({ where: { id } });
    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting news post:", error);
    return NextResponse.json({ error: "Failed to delete news post" }, { status: 500 });
  }
}
