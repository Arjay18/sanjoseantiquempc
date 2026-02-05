"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

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

  return (
    <section className="bg-white rounded-lg shadow p-8">
      <div className="mb-6">
        <p className="text-gray-600">Access your loan services and account features below.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex flex-col items-center">
          <span className="text-blue-700 font-semibold mb-2">Apply for a Loan</span>
          <Link href="/loan-application" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full text-center mt-2">Start Application</Link>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-col items-center">
          <span className="text-green-700 font-semibold mb-2">View Loan Status</span>
          <Link href="/loan-status" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full text-center mt-2">Check Status</Link>
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 flex flex-col items-center">
          <span className="text-gray-700 font-semibold mb-2">Upload Documents</span>
          <Link href="/upload-document" className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded w-full text-center mt-2">Upload</Link>
        </div>
      </div>
    </section>
  );
}
