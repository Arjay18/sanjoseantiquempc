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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="relative text-center mb-10">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
            News & Updates
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest announcements, financial updates, community events, and insights.
          </p>
        </div>

        {/* Controls */}
        <div className="grid md:grid-cols-3 gap-4 items-start mb-8">
          <div className="md:col-span-1">
            <label className="sr-only" htmlFor="news-search">Search</label>
            <div className="relative">
              <input
                id="news-search"
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex justify-center md:justify-start flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-white/70 text-slate-700 border-slate-200 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-14">
            <p className="text-gray-500 text-lg">
              {searchQuery || selectedCategory !== 'All'
                ? 'No posts match your criteria.'
                : 'No news posts available.'}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map(item => (
              <article
                key={item.id}
                className="group bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {item.imageUrl ? (
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
                  </div>
                ) : (
                  <div className="relative h-52 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                    <div className="text-slate-500 font-semibold">No image</div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 mb-3 text-sm">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                      {item.category || 'General'}
                    </span>
                    {item.author ? (
                      <span className="text-slate-500">• {item.author}</span>
                    ) : (
                      <span />
                    )}
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h2>

                  {item.caption && (
                    <p className="text-gray-600 italic mb-3 line-clamp-2">
                      {item.caption}
                    </p>
                  )}

                  <p className="text-gray-600 mb-5 line-clamp-3">
                    {getExcerpt(item.content)}
                  </p>

                  <Link
                    href={`/news/${item.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-600"
                  >
                    Read more
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 border border-blue-100">
                      <span aria-hidden="true">→</span>
                    </span>
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
