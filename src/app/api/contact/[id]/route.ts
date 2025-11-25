import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();

    const { status, response, respondedBy, respondedAt } = body;

    const updateData: any = { status };

    if (response) {
      updateData.response = response;
      updateData.respondedBy = respondedBy || 'Admin';
      updateData.respondedAt = respondedAt || new Date();
    }

    const updatedInquiry = await prisma.contactInquiry.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      inquiry: updatedInquiry,
    });
  } catch (error) {
    console.error('Error updating contact inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to update contact inquiry' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    await prisma.contactInquiry.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: 'Contact inquiry deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting contact inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to delete contact inquiry' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
