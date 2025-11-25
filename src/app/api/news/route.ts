import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma from '@/lib/prisma'
import { authOptions } from '../auth/[...nextauth]/auth'

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, content, imageUrl, author, category, caption } = body

    const slug = generateSlug(title)

    const post = await prisma.newsPost.create({
      data: {
        title,
        content,
        imageUrl,
        author,
        category,
        caption,
        slug,
        status: 'published',
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error creating news post:', error)
    return NextResponse.json(
      { error: 'Failed to create news post' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const posts = await prisma.newsPost.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        status: 'published',
      },
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching news posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch news posts' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 })
    }

    const body = await request.json()
    const { title, content, imageUrl, author, category, caption, status } = body

    const slug = generateSlug(title)

    const post = await prisma.newsPost.update({
      where: { id },
      data: {
        title,
        content,
        imageUrl,
        author,
        category,
        caption,
        status,
        slug,
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error updating news post:', error)
    return NextResponse.json({ error: 'Failed to update news post' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 })
    }

    await prisma.newsPost.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting news post:', error);
    return NextResponse.json({ error: 'Failed to delete news post' }, { status: 500 });
  }
}
