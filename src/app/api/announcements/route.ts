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

    console.log('Creating announcement:', { image, buttonLink, isActive, order });

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

    console.log('Announcement created successfully:', announcement);
    return NextResponse.json(announcement, { status: 201 });
  } catch (error: any) {
    console.error('Error creating slider:', error);
    console.error('Error code:', error?.code);
    console.error('Error message:', error?.message);
    
    // Check for specific Prisma errors
    if (error?.code === 'P1001') {
      return NextResponse.json({ 
        error: 'Database connection failed', 
        details: 'Could not reach the database server. Please check your connection.',
        code: error?.code
      }, { status: 503 });
    }
    
    if (error?.code === 'P2025') {
      return NextResponse.json({ 
        error: 'Database table not found', 
        details: 'The announcements table does not exist. Please run prisma db push.',
        code: error?.code
      }, { status: 500 });
    }
    
    return NextResponse.json({ 
      error: 'Failed to create slider', 
      details: error?.message || 'Unknown error',
      code: error?.code
    }, { status: 500 });
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

    console.log('Fetching announcements, includeInactive:', includeInactive);

    const announcements = await prisma.announcement.findMany({
      where,
      orderBy: [
        { order: 'asc' },
        { createdAt: 'desc' },
      ],
    });

    console.log('Found announcements:', announcements.length);
    return NextResponse.json(announcements);
  } catch (error: any) {
    console.error('Error fetching slider images:', error);
    console.error('Error code:', error?.code);
    
    // If database is unavailable, still return empty array but log the error
    if (error?.code === 'P1001') {
      console.warn('Database unavailable, returning empty array');
      return NextResponse.json([]);
    }
    
    // If table doesn't exist
    if (error?.code === 'P2025') {
      console.warn('Table does not exist, returning empty array');
      return NextResponse.json([]);
    }
    
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
  } catch (error: any) {
    console.error('Error updating slider:', error);
    
    if (error?.code === 'P1001') {
      return NextResponse.json({ error: 'Database connection failed' }, { status: 503 });
    }
    
    return NextResponse.json({ error: 'Failed to update slider', details: error?.message }, { status: 500 });
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
  } catch (error: any) {
    console.error('Error deleting slider:', error);
    
    if (error?.code === 'P1001') {
      return NextResponse.json({ error: 'Database connection failed' }, { status: 503 });
    }
    
    return NextResponse.json({ error: 'Failed to delete slider', details: error?.message }, { status: 500 });
  }
}
