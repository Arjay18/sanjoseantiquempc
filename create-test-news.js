const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createTestNews() {
  try {
    console.log('Creating test news post...');

    const newsPost = await prisma.newsPost.create({
      data: {
        title: 'Welcome to SJMPC News',
        content: '<p>This is our first news post! We are excited to share updates about our cooperative and community initiatives.</p><p>SJMPC has been serving the community since 1963, providing financial services and support to our members.</p>',
        imageUrl: '/portfolio/Logo.jpg',
        author: 'SJMPC Admin',
        category: 'Company News',
        caption: 'Exciting updates from your trusted cooperative',
        slug: 'welcome-to-sjmpc-news',
        status: 'published',
      },
    });

    console.log('✅ Test news post created successfully!');
    console.log('Title:', newsPost.title);
    console.log('Slug:', newsPost.slug);
    console.log('ID:', newsPost.id);

  } catch (error) {
    console.error('❌ Error creating test news post:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestNews();
