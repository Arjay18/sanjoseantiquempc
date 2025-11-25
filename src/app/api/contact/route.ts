import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { sendContactNotification } from '@/lib/notifications';

const prisma = new PrismaClient();

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message', 'inquiryType'];
    const missingFields = requiredFields.filter(field => !body[field as keyof ContactFormData]?.trim());

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: 'Missing required fields',
          fields: missingFields
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = body.phone.replace(/[\s\-\(\)]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Save contact inquiry to database
    const contactInquiry = await prisma.contactInquiry.create({
      data: {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        phone: cleanPhone,
        subject: body.subject.trim(),
        message: body.message.trim(),
        inquiryType: body.inquiryType,
        status: 'new', // new, read, responded, closed
      },
    });

    // Send notification to admin (email and SMS)
    try {
      await sendContactNotification({
        id: contactInquiry.id,
        name: contactInquiry.name,
        email: contactInquiry.email,
        phone: contactInquiry.phone,
        subject: contactInquiry.subject,
        message: contactInquiry.message,
        inquiryType: contactInquiry.inquiryType,
        createdAt: contactInquiry.createdAt,
      });
    } catch (notificationError) {
      console.error('Failed to send contact notification:', notificationError);
      // Don't fail the request if notification fails - this is expected in development without SMTP credentials
    }

    return NextResponse.json(
      {
        message: 'Contact inquiry submitted successfully',
        inquiryId: contactInquiry.id,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    console.log('GET /api/contact called');

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'all';
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    console.log('Query params:', { status, limit, offset });

    // Build where clause
    const where: any = {};
    if (status !== 'all') {
      where.status = status;
    }

    console.log('Where clause:', where);

    // Get contact inquiries
    console.log('Executing findMany...');
    const inquiries = await prisma.contactInquiry.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    });

    console.log('Find many result:', inquiries.length, 'records');

    // Get total count
    console.log('Executing count...');
    const total = await prisma.contactInquiry.count({ where });

    console.log('Total count:', total);

    return NextResponse.json({
      inquiries,
      total,
      limit,
      offset,
    });

  } catch (error) {
    console.error('Error fetching contact inquiries:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorDetails = error instanceof Error ? {
      message: error.message,
      stack: error.stack,
      name: error.name
    } : { error: 'Unknown error type' };
    console.error('Error details:', errorDetails);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}
