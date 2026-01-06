const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log('Testing database connection...');

    // Test connection
    await prisma.$connect();
    console.log('✅ Database connected successfully!');

    // Check if users exist
    const users = await prisma.user.findMany();
    console.log(`Found ${users.length} users in database:`);

    users.forEach(user => {
      console.log(`- ${user.username} (${user.branch})`);
    });

    // Test password verification for one user
    if (users.length > 0) {
      const bcrypt = require('bcryptjs');
      const testUser = users[0];
      const password = testUser.branch + '123'; // e.g., 'miagao123'

      console.log(`\nTesting password verification for ${testUser.username}...`);
      const isValid = await bcrypt.compare(password, testUser.password);
      console.log(`Password '${password}' is ${isValid ? 'VALID' : 'INVALID'}`);
    }

  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
