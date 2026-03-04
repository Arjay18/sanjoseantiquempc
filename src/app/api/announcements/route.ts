import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// -----------------------
// CREATE SLIDER IMAGE (POST)
// -----------------------
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { image, buttonLink, isActive, order } = body;

    if (!image) {
      return NextResponse.json({ error: 'Image is required' }, { status: 400 });
    }

    const announcement = await prisma.announcement.create({
      data: {
        image,
        buttonLink: buttonLink || null,
        isActive: isActive !== undefined ? isActive : true,
        order: order || 0,
      },
    });

    return NextResponse.json(announcement, { status: 201 });
  } catch (error) {
    console.error('Error creating slider:', error);
    return NextResponse.json({ error: 'Failed to create slider' }, { status: 500 });
  }
}

// -----------------------
// GET ALL ACTIVE SLIDER IMAGES (GET)
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
    console.error('Error fetching slider images:', error);
    // Return empty array when database is unavailable
    return NextResponse.json([]);
  }
}

// -----------------------
// UPDATE SLIDER IMAGE (PUT)
// -----------------------
export async function PUT(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const body = await request.json();
    const { image, buttonLink, isActive, order } = body;

    const updateData: any = {};
    if (image !== undefined) updateData.image = image;
    if (buttonLink !== undefined) updateData.buttonLink = buttonLink;
    if (isActive !== undefined) updateData.isActive = isActive;
    if (order !== undefined) updateData.order = order;

    const announcement = await prisma.announcement.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(announcement);
  } catch (error) {
    console.error('Error updating slider:', error);
    return NextResponse.json({ error: 'Failed to update slider' }, { status: 500 });
  }
}

// -----------------------
// DELETE SLIDER IMAGE (DELETE)
// -----------------------
export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    await prisma.announcement.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Slider deleted successfully' });
  } catch (error) {
    console.error('Error deleting slider:', error);
    return NextResponse.json({ error: 'Failed to delete slider' }, { status: 500 });
  }
}
