'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  imageUrl?: string;
  author?: string;
  category?: string;
  caption?: string;
}

export default function NewsDetailPage() {
  const { slug } = useParams() as { slug: string };
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      setLoading(true);
      try {
        const res = await fetch(`/api/news/${slug}`);
        if (!res.ok) throw new Error('Failed to fetch news post');
        const data: NewsItem = await res.json();
        setNewsItem(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load news post');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex justify-center items-center text-xl">Loading news post...</div>;
  if (error || !newsItem) {
    return (
      <div className="min-h-screen flex justify-center items-center text-center px-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">News Post Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The news post you are looking for does not exist.'}</p>
          <Link href="/news" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Back to News</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 px-4">
      <div className="max-w-4xl mx-auto py-16">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {newsItem.imageUrl && (
            <div className="h-64 md:h-96 overflow-hidden">
              <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{newsItem.category || 'Company News'}</span>
                {newsItem.author && <span className="text-sm text-gray-500 dark:text-gray-400">• {newsItem.author}</span>}
              </div>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(newsItem.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>

            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{newsItem.title}</h1>

            {newsItem.caption && <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 italic">{newsItem.caption}</p>}

            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: newsItem.content }} />

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link href="/news" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-medium">← Back to News</Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
