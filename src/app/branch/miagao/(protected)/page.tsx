'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface LoanApplication { id: string; name: string; pbNo: string; contactNo: string; loanAmount: number; loanType: string; status: string; createdAt: string; reviewedBy?: string; reviewedAt?: string; }

export default function MiagaoBranchDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [applications, setApplications] = useState<LoanApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (status === 'loading') return;
    if (!session || session.user?.role !== 'branch' || (session.user as any)?.branch !== 'miagao') {
      router.replace('/branch/miagao/login');
      return;
    }
    setIsAuthenticated(true);
    fetch('/api/admin/loan-applications')
      .then(res => res.json())
      .then(data => { setApplications(data.applications || []); setLoading(false); })
      .catch(() => { setError('Failed to load loan applications'); setLoading(false); });
  }, [session, status, router]);

  if (status === 'loading' || !isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Miagao Branch Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {session?.user?.name ?? ''}</p>
            </div>
            <button onClick={async () => await signOut({ callbackUrl: '/admin/login' })} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
