import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';

const prisma = new PrismaClient();

async function createNews() {
  // Get arguments from command line
  const args = process.argv.slice(2);
  if (args.length < 5) {
    console.log('Usage: node create-test-news.js "<title>" "<content>" "<author>" "<category>" "<imageUrl>" [caption]');
    console.log('Example: node create-test-news.js "New Update" "<p>Content</p>" "Admin" "News" "/image.jpg" "Caption"');
    process.exit(1);
  }

  const [title, content, author, category, imageUrl, caption] = args;

  try {
    console.log('Creating news post...');

    const slug = slugify(title, { lower: true, strict: true });

    const newsPost = await prisma.newsPost.create({
      data: {
        title,
        content,
        imageUrl,
        author,
        category,
        caption: caption || '',
        slug,
        status: 'published',
      },
    });

    console.log('✅ News post created successfully!');
    console.log('Title:', newsPost.title);
    console.log('Slug:', newsPost.slug);
    console.log('ID:', newsPost.id);
    console.log('Created At:', newsPost.createdAt);

  } catch (error) {
    console.error('❌ Error creating news post:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createNews();
