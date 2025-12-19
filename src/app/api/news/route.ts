import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

// Generate URL-friendly slug
async function generateUniqueSlug(title: string) {
  let slug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  let uniqueSlug = slug;
  let count = 1;

  while (await prisma.newsPost.findUnique({ where: { slug: uniqueSlug } })) {
    uniqueSlug = `${slug}-${count}`;
    count++;
  }

  return uniqueSlug;
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
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    const slug = await generateUniqueSlug(title);

    const post = await prisma.newsPost.create({
      data: { title, content, imageUrl, author, category, caption, slug, status: "published" },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error creating news post:", error);
    return NextResponse.json({ error: "Failed to create news post" }, { status: 500 });
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
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    // Generate slug only if title changed
    let slug = body.slug;
    const existingPost = await prisma.newsPost.findUnique({ where: { id } });
    if (existingPost && existingPost.title !== title) {
      slug = await generateUniqueSlug(title);
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
// GET ALL PUBLISHED NEWS (GET)
// -----------------------
export async function GET() {
  try {
    const posts = await prisma.newsPost.findMany({
      orderBy: { createdAt: "desc" },
      where: { status: "published" },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching news posts:", error);
    return NextResponse.json({ error: "Failed to fetch news posts" }, { status: 500 });
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
