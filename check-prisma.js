const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkPrisma() {
  try {
    console.log('Prisma client properties:', Object.keys(prisma));
    console.log('ContactInquiry exists:', !!prisma.contactInquiry);

    if (prisma.contactInquiry) {
      console.log('ContactInquiry methods:', Object.keys(prisma.contactInquiry));
    }
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkPrisma();
