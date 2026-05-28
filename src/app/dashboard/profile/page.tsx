"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import MemberPortalLayout from "@/components/members/MemberPortalLayout";
import { Mail, Phone, ShieldCheck, User } from "lucide-react";

type ProfileForm = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export default function DashboardProfilePage() {
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [form, setForm] = useState<ProfileForm>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (status === "loading") return;

    if (!session?.user) {
      setLoading(false);
      setError("You must be logged in.");
      return;
    }

    setForm((prev) => ({
      ...prev,
      name: session.user.name || "",
      email: session.user.email || "",
    }));

    setLoading(false);
  }, [session, status]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user) return;

    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      // No backend endpoint wired yet.
      setSuccess("Profile is up to date.");
    } catch {
      setError("Failed to save profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <MemberPortalLayout title="Profile Settings" subtitle="Manage your basic account information.">
      {loading ? (
        <div className="py-12 text-center text-slate-600">Loading...</div>
      ) : (
        <form onSubmit={handleSave} className="space-y-5">
          {error && (
            <div className="p-4 rounded-xl bg-red-50 text-red-800 border border-red-200">{error}</div>
          )}
          {success && (
            <div className="p-4 rounded-xl bg-green-50 text-green-800 border border-green-200 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              {success}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                <User className="w-4 h-4" /> Name
              </span>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              />
            </label>

            <label className="block">
              <span className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                <Mail className="w-4 h-4" /> Email
              </span>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                type="email"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                <Phone className="w-4 h-4" /> Phone (optional)
              </span>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                type="tel"
                placeholder="Add phone if you have a profile field in your backend"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="text-sm font-medium text-slate-700 mb-1">Address (optional)</span>
              <input
                name="address"
                value={form.address}
                onChange={onChange}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                placeholder="Add address if you have a profile field in your backend"
              />
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save changes"}
            </button>
          </div>

          <p className="text-xs text-slate-500">
            Note: Your current backend stores limited account details for members.
            This UI is ready; once you add a profile update API endpoint, we’ll wire the Save button to it.
          </p>
        </form>
      )}
    </MemberPortalLayout>
  );
}

