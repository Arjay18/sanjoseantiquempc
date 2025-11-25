interface BlogPost {
  title: string;
  date: string;
  content: string;
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// This would typically come from a CMS or API
const getBlogPost = (slug: string): BlogPost | null => {
  const posts: Record<string, BlogPost> = {
    'getting-started-with-web-development': {
      title: 'Getting Started with Web Development',
      date: '2025-10-15',
      content: `
        <h2>Introduction to Web Development</h2>
        <p>Web development is an exciting field that combines creativity with technical skills. In this article, we'll explore the basics of web development and guide you through your first steps in building websites.</p>
        
        <h3>The Essential Technologies</h3>
        <p>To get started with web development, you'll need to understand three core technologies:</p>
        <ul>
          <li>HTML - The structure of web pages</li>
          <li>CSS - The styling and layout</li>
          <li>JavaScript - The interactivity and behavior</li>
        </ul>

        <h3>Setting Up Your Development Environment</h3>
        <p>Before you start coding, you'll need some essential tools:</p>
        <ul>
          <li>A code editor (like VS Code)</li>
          <li>A modern web browser</li>
          <li>Basic understanding of the command line</li>
        </ul>
      `,
    },
    'modern-web-design-trends': {
      title: 'Modern Web Design Trends',
      date: '2025-10-14',
      content: `
        <h2>Web Design Trends in 2025</h2>
        <p>The web design landscape is constantly evolving. Here are some of the most prominent trends we're seeing this year.</p>

        <h3>Minimalist Design</h3>
        <p>Clean, simple designs continue to dominate the web, with a focus on:</p>
        <ul>
          <li>Whitespace utilization</li>
          <li>Typography-driven layouts</li>
          <li>Subtle animations</li>
        </ul>

        <h3>Dark Mode</h3>
        <p>Dark mode is no longer just a preference - it's becoming a standard feature in modern web design.</p>
      `,
    },
    'future-of-web-technologies': {
      title: 'The Future of Web Technologies',
      date: '2025-10-13',
      content: `
        <h2>What's Next for the Web?</h2>
        <p>The web platform continues to evolve at a rapid pace. Let's explore some technologies that will shape the future.</p>

        <h3>Web Assembly</h3>
        <p>WebAssembly is enabling high-performance applications on the web, opening new possibilities for:</p>
        <ul>
          <li>Browser-based gaming</li>
          <li>Complex calculations</li>
          <li>Desktop-quality applications</li>
        </ul>

        <h3>Progressive Web Apps</h3>
        <p>PWAs continue to bridge the gap between web and native applications, offering the best of both worlds.</p>
      `,
    },
  };

  return posts[slug] || null;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Post not found
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <article className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {post.title}
          </h1>
          <time className="mt-4 block text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        <div 
          className="prose prose-lg dark:prose-invert mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}