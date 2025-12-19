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
  const params = useParams();
  const slug = params.slug as string;
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const res = await fetch(`/api/news/slug?slug=${slug}`);
        if (!res.ok) throw new Error('Failed to fetch news post');
        const data = await res.json();
        setNewsItem(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load news post');
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchNewsItem();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex justify-center items-center">Loading news post...</div>;
  if (error || !newsItem)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-extrabold mb-2">News Post Not Found</h1>
        <p className="text-gray-500 mb-4">{error || 'The news post you are looking for does not exist.'}</p>
        <Link href="/news" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Back to News</Link>
      </div>
    );

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {newsItem.imageUrl && <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full h-64 object-cover" />}
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-blue-600">{newsItem.category || 'General'}</span>
                {newsItem.author && <span className="text-sm text-gray-500">• By {newsItem.author}</span>}
              </div>
              <time className="text-sm text-gray-500">
                {new Date(newsItem.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>

            <h1 className="text-4xl font-extrabold mb-6">{newsItem.title}</h1>
            {newsItem.caption && <p className="text-xl text-gray-600 italic mb-6">{newsItem.caption}</p>}

            <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content }} />

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link href="/news" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                ← Back to News
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
