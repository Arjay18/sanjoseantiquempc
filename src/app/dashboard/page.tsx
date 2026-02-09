"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import LoanPackagesCarousel from "../../components/LoanPackagesCarousel";

export default function UserDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">Loading...</div>;
  }

  // Example: You can fetch user stats, recent activity, or loan summary here in the future
  // For now, we'll show a personalized greeting and a mock account summary

    return (
      <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto mt-8 mb-12 flex flex-col gap-10">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-1">Welcome, {session?.user?.name || "Member"}!</h2>
          <p className="text-gray-600">Access your loan services, account features, and recent activity below.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-8 py-6 flex flex-col items-center min-w-[240px] shadow-sm">
          <span className="text-xs text-gray-500 mb-1">Account Type</span>
          <span className="font-semibold text-blue-700 mb-2 capitalize">{session?.user?.role || "member"}</span>
          <span className="text-xs text-gray-500 mb-1">Email</span>
          <span className="text-gray-700">{session?.user?.email}</span>
        </div>
      </div>

      {/* Loan Packages Carousel */}
      <div className="w-full flex justify-center">
        <LoanPackagesCarousel />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 flex flex-col items-center shadow-md">
          <span className="text-blue-700 font-semibold mb-2 text-lg">Apply for a Loan</span>
          <Link href="/loan-application" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full text-center mt-2 font-medium transition">Start Application</Link>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 flex flex-col items-center shadow-md">
          <span className="text-green-700 font-semibold mb-2 text-lg">View Loan Status</span>
          <Link href="/loan-status" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full text-center mt-2 font-medium transition">Check Status</Link>
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-xl p-8 flex flex-col items-center shadow-md">
          <span className="text-gray-700 font-semibold mb-2 text-lg">Upload Documents</span>
          <Link href="/upload-document" className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded w-full text-center mt-2 font-medium transition">Upload</Link>
        </div>
      </div>

      {/* Recent Activity Section (placeholder) */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Recent Activity</h3>
        <ul className="text-gray-600 text-sm space-y-2">
          <li>No recent activity yet. Your latest actions will appear here.</li>
        </ul>
      </div>
    </section>
  );
}
