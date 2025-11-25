'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface SuccessStory {
  id: string;
  title: string;
  memberName: string;
  category: string;
  videoFile?: string;
  thumbnail?: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function SuccessStoriesAdmin() {
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingStory, setEditingStory] = useState<SuccessStory | null>(null);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchSuccessStories();
  }, []);

  const fetchSuccessStories = async () => {
    try {
      const response = await fetch('/api/success-stories');
      if (response.ok) {
        const data = await response.json();
        setSuccessStories(data);
      }
    } catch (error) {
      console.error('Error fetching success stories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this success story?')) return;

    try {
      const response = await fetch(`/api/success-stories/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSuccessStories(successStories.filter(story => story.id !== id));
      }
    } catch (error) {
      console.error('Error deleting success story:', error);
    }
  };

  const handlePublish = async (id: string) => {
    try {
      const response = await fetch(`/api/success-stories/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'published' }),
      });

      if (response.ok) {
        setSuccessStories(successStories.map(story =>
          story.id === id ? { ...story, status: 'published' } : story
        ));
      }
    } catch (error) {
      console.error('Error publishing success story:', error);
    }
  };

  const openEditForm = (story: SuccessStory) => {
    setEditingStory(story);
    setShowForm(true);
  };

  const closeForm = () => {
    setEditingStory(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Success Stories Management</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => router.push('/admin')}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Return to Dashboard
          </button>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Recent Story
          </button>
        </div>
      </div>

      {/* Form Section */}
      {showForm && (
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingStory ? 'Edit Success Story' : 'Add Recent Success Story'}
          </h2>
          <SuccessStoryForm
            story={editingStory}
            onSave={() => {
              fetchSuccessStories();
              closeForm();
            }}
            onCancel={closeForm}
          />
        </div>
      )}

      {/* List Section */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {successStories.map((story) => (
            <li key={story.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{story.title}</h3>
                      <p className="text-sm text-gray-600">by {story.memberName}</p>
                      <p className="text-sm text-gray-500 mt-1">{story.category}</p>
                      <div className="mt-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          story.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {story.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {story.status !== 'published' && (
                    <button
                      onClick={() => handlePublish(story.id)}
                      className="text-green-600 hover:text-green-900 text-sm font-medium"
                    >
                      Publish
                    </button>
                  )}
                  <button
                    onClick={() => openEditForm(story)}
                    className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(story.id)}
                    className="text-red-600 hover:text-red-900 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SuccessStoryForm({
  story,
  onSave,
  onCancel
}: {
  story: SuccessStory | null;
  onSave: () => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    title: story?.title || '',
    memberName: story?.memberName || '',
    category: story?.category || '',
    videoFile: story?.videoFile || '',
    thumbnail: story?.thumbnail || '',
    description: story?.description || '',
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = story ? `/api/success-stories/${story.id}` : '/api/success-stories';
      const method = story ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSave();
        if (!story) {
          // Reset form for new story
          setFormData({
            title: '',
            memberName: '',
            category: '',
            videoFile: '',
            thumbnail: '',
            description: '',
          });
        }
      }
    } catch (error) {
      console.error('Error saving success story:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Member Name</label>
          <input
            type="text"
            value={formData.memberName}
            onChange={(e) => setFormData({ ...formData, memberName: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        >
          <option value="">Select Category</option>
          <option value="Business Loan Success">Business Loan Success</option>
          <option value="Agricultural Loan Success">Agricultural Loan Success</option>
          <option value="Savings Program Success">Savings Program Success</option>
          <option value="Housing Loan Success">Housing Loan Success</option>
          <option value="Community Development">Community Development</option>
          <option value="Insurance Success">Insurance Success</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">YouTube Video URL</label>
        <input
          type="url"
          value={formData.videoFile}
          onChange={(e) => setFormData({ ...formData, videoFile: e.target.value })}
          placeholder="https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
        <p className="mt-1 text-sm text-gray-500">
          Enter the full YouTube video URL (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Thumbnail URL (Optional)</label>
        <input
          type="url"
          value={formData.thumbnail}
          onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
          placeholder="https://example.com/thumbnail.jpg"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        <p className="mt-1 text-sm text-gray-500">
          Enter a URL for the video thumbnail image. If left empty, a default thumbnail will be used.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? 'Publishing...' : 'Publish'}
        </button>
      </div>
    </form>
  );
}
