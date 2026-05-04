import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Singleton pattern for Prisma
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET() {
  try {
    const evaluations = await prisma.evaluation.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(evaluations);
  } catch (error) {
    console.error('Error fetching evaluations:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields based on your form
    const { activity, venue, date, ratings, comments, name, gender, time } = body;
    
    if (!activity || !venue || !ratings) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create the evaluation record
    // Note: You will need to add an 'Evaluation' model to your schema.prisma first
    const evaluation = await prisma.evaluation.create({
      data: {
        name: name || "Anonymous",
        gender: gender,
        activity: activity,
        venue: venue,
        date: date,
        time: time,
        // Storing ratings as a JSON object or individual columns
        q1: ratings.q1,
        q2: ratings.q2,
        q3: ratings.q3,
        q4: ratings.q4,
        q5: ratings.q5,
        q6: ratings.q6,
        q7: ratings.q7,
        q8: ratings.q8,
        q9: ratings.q9,
        comments: comments,
      },
    });

    return NextResponse.json({ message: 'Evaluation submitted successfully', id: evaluation.id }, { status: 201 });
  } catch (error) {
    console.error('Error saving evaluation:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}