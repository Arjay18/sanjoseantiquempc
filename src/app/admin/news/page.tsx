'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('@/components/admin/RichTextEditor'), { ssr: false });

interface NewsPost {
  id: string;
  title: string;
  content: string;
  slug: string;
  imageUrl?: string;
  author?: string;
  category?: string;
  caption?: string;
  createdAt: string;
  updatedAt: string;
}

const categories = [
  'Company News',
  'Financial Updates',
  'Community Events',
  'Product Announcements',
  'Industry Insights',
  'Awards & Recognition',
  'Partnerships',
  'General',
];

export default function NewsAdmin() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [caption, setCaption] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [error, setError] = useState('');
  const [editingPost, setEditingPost] = useState<NewsPost | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Fetch posts for admin
  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      router.push('/admin/login');
      return;
    }

    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/news');
        if (!res.ok) throw new Error('Failed to fetch news posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load news posts');
      }
    };

    fetchPosts();
  }, [session, status, router]);

  // Upload image
  const handleImageUpload = async (file: File) => {
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Failed to upload image');

      const data = await res.json();
      setImageUrl(data.url);
    } catch (err) {
      console.error(err);
      setError('Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageUpload(file);
  };

  // Submit new or edited post
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const method = editingPost ? 'PUT' : 'POST';
      const url = editingPost ? `/api/news?id=${editingPost.id}` : '/api/news';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, imageUrl, author, category, caption, status: 'published' }),
      });

      if (!res.ok) throw new Error(`Failed to ${editingPost ? 'update' : 'create'} post`);

      const updatedPost = await res.json();

      if (editingPost) {
        setPosts(posts.map(p => (p.id === editingPost.id ? updatedPost : p)));
        setEditingPost(null);
      } else {
        setPosts([updatedPost, ...posts]);
      }

      // Reset form
      setTitle(''); setContent(''); setImageUrl(''); setAuthor(''); setCategory(''); setCaption('');
    } catch (err) {
      console.error(err);
      setError(`Failed to ${editingPost ? 'update' : 'create'} post`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (post: NewsPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setContent(post.content);
    setImageUrl(post.imageUrl || '');
    setAuthor(post.author || '');
    setCategory(post.category || '');
    setCaption(post.caption || '');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const res = await fetch(`/api/news?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete post');

      setPosts(posts.filter(p => p.id !== id));
    } catch (err) {
      console.error(err);
      setError('Failed to delete post');
    }
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
    setTitle(''); setContent(''); setImageUrl(''); setAuthor(''); setCategory(''); setCaption('');
  };

  if (status === 'loading') return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (!session) return null;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage News Posts</h1>
        <button
          onClick={() => router.push('/admin')}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Dashboard
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold">{editingPost ? 'Edit Post' : 'Create New Post'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              className="mt-1 w-full border rounded px-2 py-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Image</label>
            <div className="flex items-center space-x-4 mt-1">
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*"/>
              <button type="button" onClick={() => fileInputRef.current?.click()} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                {uploadingImage ? 'Uploading...' : 'Choose Image'}
              </button>
              {imageUrl && <img src={imageUrl} alt="Preview" className="h-12 w-12 object-cover rounded"/>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Author</label>
            <input type="text" value={author} onChange={e => setAuthor(e.target.value)} className="mt-1 w-full border rounded px-2 py-1"/>
          </div>

          <div>
            <label className="block text-sm font-medium">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)} className="mt-1 w-full border rounded px-2 py-1">
              <option value="">Select a category</option>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Caption</label>
            <textarea value={caption} onChange={e => setCaption(e.target.value)} rows={2} className="mt-1 w-full border rounded px-2 py-1"/>
          </div>

          <div>
            <label className="block text-sm font-medium">Content</label>
            <div className="mt-1">
              <RichTextEditor content={content} onChange={setContent} />
            </div>
          </div>

          {error && <p className="text-red-600">{error}</p>}

          <div className="flex space-x-3 justify-end">
            {editingPost && <button type="button" onClick={handleCancelEdit} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Cancel</button>}
            <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              {isSubmitting ? (editingPost ? 'Updating...' : 'Creating...') : (editingPost ? 'Update Post' : 'Create Post')}
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {posts.map(post => (
              <li key={post.id} className="py-3 flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{post.title}</h3>
                  <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()} {post.author && `• ${post.author}`} {post.category && `• ${post.category}`}</p>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => handleEdit(post)} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">Edit</button>
                  <button onClick={() => handleDelete(post.id)} className="px-2 py-1 bg-red-200 text-red-700 rounded hover:bg-red-300">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
