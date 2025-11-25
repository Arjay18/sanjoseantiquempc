const { PrismaClient } = require('@prisma/client');

async function testAPI() {
  const prisma = new PrismaClient();

  try {
    console.log('Testing API route execution...');

    const testData = {
      name: 'Test',
      email: 'test@test.com',
      phone: '1234567890',
      subject: 'Test',
      message: 'Test',
      inquiryType: 'general'
    };

    console.log('Test data:', testData);

    const result = await prisma.contactInquiry.create({
      data: {
        name: testData.name,
        email: testData.email,
        phone: testData.phone,
        subject: testData.subject,
        message: testData.message,
        inquiryType: testData.inquiryType,
        status: 'new'
      }
    });

    console.log('Create result:', result);

  } catch (error) {
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
  } finally {
    await prisma.$disconnect();
  }
}

testAPI();
