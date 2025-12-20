export const runtime = "nodejs";

// /app/api/news/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { promises as fs } from "fs";
import path from "path";
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
  return NextResponse.json({ message: "To add news manually, edit the public/news.json file directly." }, { status: 200 });
}

// -----------------------
// GET ALL PUBLISHED NEWS (GET)
// -----------------------
export async function GET(request: Request) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'news.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    let posts = JSON.parse(fileContents);

    const url = new URL(request.url);
    const search = url.searchParams.get("search") || "";
    const category = url.searchParams.get("category") || "";

    // Filter published posts
    posts = posts.filter((post: any) => post.status === "published");

    // Filter by category
    if (category && category !== "All") {
      posts = posts.filter((post: any) => post.category === category);
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      posts = posts.filter((post: any) =>
        post.title.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower) ||
        post.author.toLowerCase().includes(searchLower) ||
        post.caption.toLowerCase().includes(searchLower)
      );
    }

    // Sort by createdAt desc
    posts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

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
  return NextResponse.json({ message: "To update news manually, edit the public/news.json file directly." }, { status: 200 });
}

// -----------------------
// DELETE NEWS POST (DELETE)
// -----------------------
export async function DELETE(request: Request) {
  return NextResponse.json({ message: "To delete news manually, edit the public/news.json file directly." }, { status: 200 });
}
