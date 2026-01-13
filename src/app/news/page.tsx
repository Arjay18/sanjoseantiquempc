'use client';

import { useState, useEffect } from 'react';
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

const categories = [
  'All',
  'Company News',
  'Financial Updates',
  'Community Events',
  'Product Announcements',
  'Industry Insights',
  'Awards & Recognition',
  'Partnerships',
  'General',
];

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/news', { cache: 'no-store' });
        if (!response.ok) {
          let errorMessage = 'Failed to fetch news posts';
          try {
            const errData = await response.json();
            errorMessage = errData.error || errorMessage;
          } catch {
            // If response is not JSON (e.g., HTML error page), use status text
            errorMessage = response.statusText || errorMessage;
          }
          throw new Error(errorMessage);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Invalid response format from server');
        }

        const data: NewsItem[] = await response.json();
        setNewsItems(data);
        setFilteredItems(data);
      } catch (err: any) {
        console.error('Error fetching news:', err.message);
        setError(err.message || 'Failed to load news posts');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Filter posts
  useEffect(() => {
    let filtered = [...newsItems];
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        item =>
          item.title.toLowerCase().includes(q) ||
          item.content.toLowerCase().includes(q) ||
          (item.author && item.author.toLowerCase().includes(q)) ||
          (item.caption && item.caption.toLowerCase().includes(q))
      );
    }
    setFilteredItems(filtered);
  }, [selectedCategory, searchQuery, newsItems]);

  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getExcerpt = (content: string, maxLength = 150) => {
    const text = stripHtml(content);
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  if (loading) return <div className="min-h-screen flex justify-center items-center">Loading news posts...</div>;
  if (error) return <div className="min-h-screen flex justify-center items-center text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Latest News</h1>
          <p className="text-gray-600 dark:text-gray-300">Stay updated with our latest announcements and insights</p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          />
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            {searchQuery || selectedCategory !== 'All' ? 'No posts match your criteria.' : 'No news posts available.'}
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map(item => (
              <article key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                {item.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
                    <span className="font-medium text-blue-600">{item.category || 'General'}</span>
                    {item.author && <span>• {item.author}</span>}
                  </div>
                  <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h2>
                  {item.caption && <p className="text-gray-600 dark:text-gray-300 italic mb-2">{item.caption}</p>}
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{getExcerpt(item.content)}</p>
                  <Link href={`/news/${item.slug}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-medium">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
