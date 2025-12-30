import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";

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
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, content, imageUrl, author, category, caption, status = "published" } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    const slug = generateSlug(title);

    // Check if slug already exists
    const existingPost = await prisma.newsPost.findUnique({
      where: { slug },
    });

    if (existingPost) {
      return NextResponse.json({ error: "A post with this title already exists" }, { status: 400 });
    }

    const newsPost = await prisma.newsPost.create({
      data: {
        title,
        content,
        imageUrl,
        author,
        category,
        caption,
        slug,
        status,
      },
    });

    return NextResponse.json(newsPost, { status: 201 });
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

    let where: any = {
      status: "published",
    };

    // Filter by category
    if (category && category !== "All") {
      where.category = category;
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      where.OR = [
        { title: { contains: searchLower, mode: "insensitive" } },
        { content: { contains: searchLower, mode: "insensitive" } },
        { author: { contains: searchLower, mode: "insensitive" } },
        { caption: { contains: searchLower, mode: "insensitive" } },
      ];
    }

    const posts = await prisma.newsPost.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
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
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
    }

    const { title, content, imageUrl, author, category, caption, status } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    let updateData: any = {
      title,
      content,
      imageUrl,
      author,
      category,
      caption,
      status,
    };

    // Only update slug if title changed
    const existingPost = await prisma.newsPost.findUnique({
      where: { id },
    });

    if (!existingPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (existingPost.title !== title) {
      const newSlug = generateSlug(title);
      // Check if new slug conflicts
      const slugConflict = await prisma.newsPost.findUnique({
        where: { slug: newSlug },
      });
      if (slugConflict && slugConflict.id !== id) {
        return NextResponse.json({ error: "A post with this title already exists" }, { status: 400 });
      }
      updateData.slug = newSlug;
    }

    const updatedPost = await prisma.newsPost.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("Error updating news post:", error);
    return NextResponse.json({ error: "Failed to update news post" }, { status: 500 });
  }
}

// -----------------------
// DELETE NEWS POST (DELETE)
// -----------------------
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
    }

    await prisma.newsPost.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting news post:", error);
    return NextResponse.json({ error: "Failed to delete news post" }, { status: 500 });
  }
}
