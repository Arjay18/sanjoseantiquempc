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
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Welcome, {session?.user?.name || session?.user?.username || "User"}!</h2>
      <div className="space-y-4">
        <Link href="/loan-application" className="block bg-blue-600 text-white px-4 py-2 rounded text-center">Apply for a Loan</Link>
        <Link href="/loan-status" className="block bg-green-600 text-white px-4 py-2 rounded text-center">View Loan Status</Link>
        <Link href="/upload-document" className="block bg-gray-700 text-white px-4 py-2 rounded text-center">Upload Documents</Link>
      </div>
    </div>
  );
}
