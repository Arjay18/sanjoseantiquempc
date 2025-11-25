import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

// This would typically come from a CMS or API
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Web Development',
    excerpt: 'Learn the basics of web development and start building your first website.',
    date: '2025-10-15',
    slug: 'getting-started-with-web-development',
  },
  {
    id: '2',
    title: 'Modern Web Design Trends',
    excerpt: 'Explore the latest trends in web design and how to implement them.',
    date: '2025-10-14',
    slug: 'modern-web-design-trends',
  },
  {
    id: '3',
    title: 'The Future of Web Technologies',
    excerpt: 'A look into upcoming web technologies and how they will shape the future.',
    date: '2025-10-13',
    slug: 'future-of-web-technologies',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pt-16">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Latest insights, tutorials, and updates from our team
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-6 flex-1">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block mt-2 text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-base font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Read full article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}