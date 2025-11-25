const { PrismaClient } = require('@prisma/client');

async function testContact() {
  const prisma = new PrismaClient();

  try {
    console.log('Testing contact inquiry...');

    const result = await prisma.contactInquiry.findMany();
    console.log('Find many result:', result);

  } catch (error) {
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
  } finally {
    await prisma.$disconnect();
  }
}

testContact();
