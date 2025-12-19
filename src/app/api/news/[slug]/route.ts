import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    const post = await prisma.newsPost.findFirst({
      where: {
        slug,
        status: 'published', // Only allow published posts
      },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching news post:', error);
    return NextResponse.json({ error: 'Failed to fetch news post' }, { status: 500 });
  }
}
