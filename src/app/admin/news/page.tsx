'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'

const RichTextEditor = dynamic(
  () => import('@/components/admin/RichTextEditor'),
  { ssr: false }
)

interface NewsPost {
  id: string
  title: string
  content: string
  imageUrl?: string
  author?: string
  category?: string
  caption?: string
  createdAt: string
  updatedAt: string
}

const categories = [
  'Company News',
  'Financial Updates',
  'Community Events',
  'Product Announcements',
  'Industry Insights',
  'Awards & Recognition',
  'Partnerships',
  'General'
]

export default function NewsAdmin() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [caption, setCaption] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [posts, setPosts] = useState<NewsPost[]>([])
  const [error, setError] = useState('')
  const [editingPost, setEditingPost] = useState<NewsPost | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/admin/login')
      return
    }

    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/news')
        if (!response.ok) throw new Error('Failed to fetch news posts')
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching news posts:', error)
        setError('Failed to load news posts')
      }
    }

    fetchPosts()
  }, [session, status, router])

  const handleImageUpload = async (file: File) => {
    setUploadingImage(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to upload image')
      }

      const data = await response.json()
      setImageUrl(data.url)
    } catch (error) {
      console.error('Error uploading image:', error)
      setError('Failed to upload image')
    } finally {
      setUploadingImage(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleImageUpload(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const method = editingPost ? 'PUT' : 'POST'
      const url = editingPost ? `/api/news?id=${editingPost.id}` : '/api/news'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          imageUrl,
          author,
          category,
          caption,
          status: 'published',
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to ${editingPost ? 'update' : 'create'} news post`)
      }

      const updatedPost = await response.json()

      if (editingPost) {
        setPosts(posts.map(post => post.id === editingPost.id ? updatedPost : post))
        setEditingPost(null)
      } else {
        setPosts([updatedPost, ...posts])
      }

      setTitle('')
      setContent('')
      setImageUrl('')
      setAuthor('')
      setCategory('')
      setCaption('')
      router.refresh()
    } catch (error) {
      console.error(`Error ${editingPost ? 'updating' : 'creating'} news post:`, error)
      setError(`Failed to ${editingPost ? 'update' : 'create'} news post`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (post: NewsPost) => {
    setEditingPost(post)
    setTitle(post.title)
    setContent(post.content)
    setImageUrl(post.imageUrl || '')
    setAuthor(post.author || '')
    setCategory(post.category || '')
    setCaption(post.caption || '')
  }

  const handleDelete = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      const response = await fetch(`/api/news?id=${postId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete news post')
      }

      setPosts(posts.filter(post => post.id !== postId))
      router.refresh()
    } catch (error) {
      console.error('Error deleting news post:', error)
      setError('Failed to delete news post')
    }
  }

  const handleCancelEdit = () => {
    setEditingPost(null)
    setTitle('')
    setContent('')
    setImageUrl('')
    setAuthor('')
    setCategory('')
    setCaption('')
  }

  if (status === 'loading') {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage News Posts</h1>
        <button
          onClick={() => router.push('/admin')}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Return to Dashboard
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingPost ? 'Edit Post' : 'Create New Post'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <div className="mt-1 flex items-center space-x-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploadingImage}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {uploadingImage ? 'Uploading...' : 'Choose Image'}
              </button>
              {imageUrl && (
                <div className="flex items-center space-x-2">
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="h-10 w-10 object-cover rounded"
                  />
                  <span className="text-sm text-gray-500">Image uploaded</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="caption" className="block text-sm font-medium text-gray-700">
              Caption
            </label>
            <textarea
              id="caption"
              name="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <div className="mt-1">
              <RichTextEditor
                content={content}
                onChange={setContent}
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">{error}</h3>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-3">
            {editingPost && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isSubmitting ? (editingPost ? 'Updating...' : 'Creating...') : (editingPost ? 'Update Post' : 'Create Post')}
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          {posts.length === 0 ? (
            <p className="text-gray-500">No posts yet</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {posts.map((post) => (
                <li key={post.id} className="py-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">{post.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                        {post.author && ` • ${post.author}`}
                        {post.category && ` • ${post.category}`}
                      </p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => handleEdit(post)}
                        className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="inline-flex items-center px-3 py-1 border border-red-300 rounded-md text-sm font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
