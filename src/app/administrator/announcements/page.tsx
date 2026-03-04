"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { 
  Plus, Edit, Trash2, Eye, EyeOff, 
  Image, Save, X, ArrowLeft 
} from "lucide-react";

type Announcement = {
  id: string;
  image: string;
  link: string | null;
  isActive: boolean;
  order: number;
  createdAt: string;
};

export default function AnnouncementsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [formData, setFormData] = useState({
    image: '',
    link: '',
    isActive: true,
    order: 0,
  });

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/administrator/login");
    } else {
      fetchAnnouncements();
    }
  }, [session, status, router]);

  const fetchAnnouncements = async () => {
    try {
      const res = await fetch('/api/announcements?includeInactive=true');
      if (res.ok) {
        const data = await res.json();
        setAnnouncements(data);
      }
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!formData.image) {
      setMessage({ type: 'error', text: 'Image URL is required' });
      return;
    }

    try {
      const url = editingId 
        ? `/api/announcements?id=${editingId}` 
        : '/api/announcements';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage({ type: 'success', text: editingId ? 'Announcement updated!' : 'Announcement created!' });
        resetForm();
        fetchAnnouncements();
      } else {
        const data = await res.json();
        setMessage({ type: 'error', text: data.error || 'Failed to save announcement' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save announcement' });
    }
  };

  const handleEdit = (announcement: Announcement) => {
    setFormData({
      image: announcement.image,
      link: announcement.link || '',
      isActive: announcement.isActive,
      order: announcement.order,
    });
    setEditingId(announcement.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return;

    try {
      const res = await fetch(`/api/announcements?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setMessage({ type: 'success', text: 'Announcement deleted!' });
        fetchAnnouncements();
      } else {
        setMessage({ type: 'error', text: 'Failed to delete announcement' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete announcement' });
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/announcements?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !currentStatus }),
      });
      if (res.ok) {
        fetchAnnouncements();
      }
    } catch (error) {
      console.error('Error toggling announcement:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      image: '',
      link: '',
      isActive: true,
      order: 0,
    });
    setEditingId(null);
    setShowForm(false);
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.push('/administrator')}
              className="p-2 hover:bg-white/10 rounded-lg transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold">Slider Images</h1>
              <p className="text-blue-200 text-sm">Manage homepage slider images</p>
            </div>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            <Plus className="w-5 h-5" />
            Add Image
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            message.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {message.type === 'success' ? <Save className="w-5 h-5" /> : <X className="w-5 h-5" />}
            {message.text}
          </div>
        )}

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingId ? 'Edit Image' : 'Add Slider Image'}
                </h2>
                <button onClick={resetForm} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL *</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://example.com/slider-image.jpg"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Enter the URL of the image</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Link (optional)</label>
                  <input
                    type="text"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    placeholder="/contact"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Where to go when clicked</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                    <input
                      type="number"
                      value={formData.order}
                      onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-center pt-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isActive}
                        onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-sm text-gray-700">Active</span>
                    </label>
                  </div>
                </div>

                {/* Preview */}
                {formData.image && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-2">Preview:</p>
                    <img 
                      src={formData.image} 
                      alt="Preview" 
                      className="w-full h-32 object-cover rounded-lg" 
                    />
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    {editingId ? 'Update' : 'Add Image'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Announcements List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">All Slider Images</h2>
            <p className="text-sm text-gray-500">{announcements.length} image(s)</p>
          </div>

          {announcements.length === 0 ? (
            <div className="p-12 text-center">
              <Image className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Images Yet</h3>
              <p className="text-gray-500 mb-4">Add images to display on the homepage slider</p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Plus className="w-5 h-5" />
                Add Image
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="p-4 flex items-center gap-4 hover:bg-gray-50">
                  {/* Image Preview */}
                  <div className="w-24 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                    <img 
                      src={announcement.image} 
                      alt="Slider" 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 truncate">
                      {announcement.link ? `Links to: ${announcement.link}` : 'No link'}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-500">Order: {announcement.order}</span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleActive(announcement.id, announcement.isActive)}
                      className={`p-2 rounded-lg transition ${
                        announcement.isActive 
                          ? 'text-green-600 hover:bg-green-50' 
                          : 'text-gray-400 hover:bg-gray-100'
                      }`}
                      title={announcement.isActive ? 'Active - Click to deactivate' : 'Inactive - Click to activate'}
                    >
                      {announcement.isActive ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                    </button>

                    <button
                      onClick={() => handleEdit(announcement)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                    >
                      <Edit className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => handleDelete(announcement.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
