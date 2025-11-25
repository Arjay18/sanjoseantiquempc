const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testContactAPI() {
  try {
    console.log('Testing contact inquiry creation...');

    const result = await prisma.contactInquiry.create({
      data: {
        name: 'Test API',
        email: 'testapi@test.com',
        phone: '1234567890',
        subject: 'API Test',
        message: 'Testing contact API',
        inquiryType: 'general'
      }
    });

    console.log('Success:', result);

  } catch (error) {
    console.error('Error:', error.message);
    console.error('Full error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testContactAPI();
