"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { 
  Plus, Edit, Trash2, Eye, EyeOff, 
  Image, Save, X, ArrowLeft, Upload, ExternalLink
} from "lucide-react";

type Announcement = {
  id: string;
  image: string;
  buttonLink: string | null;
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
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    image: '',
    buttonLink: '',
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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setMessage({ type: 'error', text: 'Invalid file type. Allowed: JPG, PNG, GIF, WebP' });
      return;
    }

    // Validate file size (max 20MB)
    if (file.size > 20 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'File too large. Maximum size is 20MB' });
      return;
    }

    setUploading(true);
    setMessage(null);

    try {
      const uploadData = new FormData();
      uploadData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      });

      if (res.ok) {
        const data = await res.json();
        setFormData((prev: typeof formData) => ({ ...prev, image: data.url }));
        setMessage({ type: 'success', text: 'Image uploaded successfully!' });
      } else {
        const data = await res.json();
        setMessage({ type: 'error', text: data.error || 'Failed to upload image' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error uploading file' });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!formData.image) {
      setMessage({ type: 'error', text: 'Please upload an image' });
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
        setMessage({ type: 'success', text: editingId ? 'Slider updated!' : 'Slider created!' });
        resetForm();
        fetchAnnouncements();
      } else {
        const data = await res.json();
        setMessage({ type: 'error', text: data.error || 'Failed to save slider' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save slider' });
    }
  };

  const handleEdit = (announcement: Announcement) => {
    setFormData({
      image: announcement.image,
      buttonLink: announcement.buttonLink || '',
      isActive: announcement.isActive,
      order: announcement.order,
    });
    setEditingId(announcement.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this slider?')) return;

    try {
      const res = await fetch(`/api/announcements?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setMessage({ type: 'success', text: 'Slider deleted!' });
        fetchAnnouncements();
      } else {
        setMessage({ type: 'error', text: 'Failed to delete slider' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete slider' });
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
      console.error('Error toggling slider:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      image: '',
      buttonLink: '',
      isActive: true,
      order: 0,
    });
    setEditingId(null);
    setShowForm(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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
              <h1 className="text-2xl font-bold">Homepage Slider</h1>
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
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingId ? 'Edit Slider Image' : 'Add Slider Image'}
                </h2>
                <button onClick={resetForm} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slider Image *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="image-upload"
                      disabled={uploading}
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {uploading ? (
                        <div className="flex flex-col items-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mb-2"></div>
                          <span className="text-gray-500">Uploading...</span>
                        </div>
                      ) : formData.image ? (
                        <div className="flex flex-col items-center">
                          <img src={formData.image} alt="Slider Preview" className="max-h-48 rounded-lg mb-2" />
                          <span className="text-blue-600 text-sm">Click to change image</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Upload className="w-12 h-12 text-gray-400 mb-3" />
                          <span className="text-gray-600 font-medium">Click to upload image</span>
                          <span className="text-gray-400 text-sm mt-1">JPG, PNG, GIF, WebP (max 20MB)</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Optional Link */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Link (optional)
                  </label>
                  <div className="relative">
                    <ExternalLink className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={formData.buttonLink}
                      onChange={(e) => setFormData({ ...formData, buttonLink: e.target.value })}
                      placeholder="/services or https://example.com"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Where to go when someone clicks the slider</p>
                </div>

                {/* Order */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0"
                  />
                  <p className="text-xs text-gray-500 mt-1">Lower numbers appear first</p>
                </div>

                {/* Active Toggle */}
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm text-gray-700">Show on homepage</span>
                  </label>
                </div>

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
                    {editingId ? 'Update' : 'Save'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Sliders List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">All Slider Images</h2>
            <p className="text-sm text-gray-500">{announcements.length} image(s)</p>
          </div>

          {announcements.length === 0 ? (
            <div className="p-12 text-center">
              <Image className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Slider Images Yet</h3>
              <p className="text-gray-500 mb-4">Upload your first image to display on the homepage slider</p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Plus className="w-5 h-5" />
                Upload Image
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="relative group rounded-lg overflow-hidden bg-gray-100">
                  {/* Image */}
                  <div className="aspect-video">
                    <img 
                      src={announcement.image} 
                      alt={`Slider image ${announcement.order}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleToggleActive(announcement.id, announcement.isActive)}
                      className={`p-2 rounded-lg transition ${
                        announcement.isActive 
                          ? 'bg-green-600 text-white hover:bg-green-700' 
                          : 'bg-gray-600 text-white hover:bg-gray-700'
                      }`}
                      title={announcement.isActive ? 'Active - Click to deactivate' : 'Inactive - Click to activate'}
                    >
                      {announcement.isActive ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                    </button>

                    <button
                      onClick={() => handleEdit(announcement)}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      <Edit className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => handleDelete(announcement.id)}
                      className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-2 left-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      announcement.isActive 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-600 text-white'
                    }`}>
                      {announcement.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>

                  {/* Order Badge */}
                  <div className="absolute top-2 right-2">
                    <span className="text-xs px-2 py-1 rounded bg-black/50 text-white">
                      Order: {announcement.order}
                    </span>
                  </div>

                  {/* Link */}
                  {announcement.buttonLink && (
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-xs px-2 py-1 rounded bg-black/50 text-white truncate block">
                        → {announcement.buttonLink}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
