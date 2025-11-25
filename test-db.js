const { PrismaClient } = require('@prisma/client');

async function testDB() {
  const prisma = new PrismaClient();

  try {
    console.log('Testing database connection...');

    // Try to find contact inquiries
    const inquiries = await prisma.contactInquiry.findMany();
    console.log('Contact inquiries found:', inquiries.length);

    // Try to create a test inquiry
    const testInquiry = await prisma.contactInquiry.create({
      data: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '9171234567',
        subject: 'Test Subject',
        message: 'Test message',
        inquiryType: 'general',
        status: 'new'
      }
    });

    console.log('Test inquiry created:', testInquiry.id);

    // Clean up
    await prisma.contactInquiry.delete({
      where: { id: testInquiry.id }
    });

    console.log('Test completed successfully');

  } catch (error) {
    console.error('Database error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testDB();
