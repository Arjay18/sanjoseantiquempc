import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// -----------------------
// CREATE ANNOUNCEMENT (POST)
// -----------------------
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, image, subtitle, description, buttonText, buttonLink, theme, isActive, order } = body;

    if (!title || !image) {
      return NextResponse.json({ error: 'Title and image are required' }, { status: 400 });
    }

    const announcement = await prisma.announcement.create({
      data: {
        title,
        image,
        subtitle: subtitle || null,
        description: description || null,
        buttonText: buttonText || null,
        buttonLink: buttonLink || null,
        theme: theme || 'blue',
        isActive: isActive !== undefined ? isActive : true,
        order: order || 0,
      },
    });

    return NextResponse.json(announcement, { status: 201 });
  } catch (error) {
    console.error('Error creating announcement:', error);
    return NextResponse.json({ error: 'Failed to create announcement' }, { status: 500 });
  }
}

// -----------------------
// GET ALL ACTIVE ANNOUNCEMENTS (GET)
// -----------------------
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const includeInactive = url.searchParams.get('includeInactive') === 'true';

    const where = includeInactive ? {} : { isActive: true };

    const announcements = await prisma.announcement.findMany({
      where,
      orderBy: [
        { order: 'asc' },
        { createdAt: 'desc' },
      ],
    });

    return NextResponse.json(announcements);
  } catch (error) {
    console.error('Error fetching announcements:', error);
    // Return empty array when database is unavailable
    return NextResponse.json([]);
  }
}

// -----------------------
// UPDATE ANNOUNCEMENT (PUT)
// -----------------------
export async function PUT(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Announcement ID is required' }, { status: 400 });
    }

    const body = await request.json();
    const { title, subtitle, description, image, buttonText, buttonLink, theme, isActive, order } = body;

    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (subtitle !== undefined) updateData.subtitle = subtitle;
    if (description !== undefined) updateData.description = description;
    if (image !== undefined) updateData.image = image;
    if (buttonText !== undefined) updateData.buttonText = buttonText;
    if (buttonLink !== undefined) updateData.buttonLink = buttonLink;
    if (theme !== undefined) updateData.theme = theme;
    if (isActive !== undefined) updateData.isActive = isActive;
    if (order !== undefined) updateData.order = order;

    const announcement = await prisma.announcement.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(announcement);
  } catch (error) {
    console.error('Error updating announcement:', error);
    return NextResponse.json({ error: 'Failed to update announcement' }, { status: 500 });
  }
}

// -----------------------
// DELETE ANNOUNCEMENT (DELETE)
// -----------------------
export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Announcement ID is required' }, { status: 400 });
    }

    await prisma.announcement.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    console.error('Error deleting announcement:', error);
    return NextResponse.json({ error: 'Failed to delete announcement' }, { status: 500 });
  }
}
