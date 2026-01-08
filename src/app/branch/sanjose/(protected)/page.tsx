'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SanJoseBranchDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (status === 'loading') return;
    if (!session || session.user?.role !== 'branch' || (session.user as any)?.branch !== 'sanjose') {
      router.replace('/branch/sanjose/login');
      return;
    }
    setIsAuthenticated(true);
  }, [session, status, router]);

  if (status === 'loading' || !isAuthenticated) {
    return <div className="flex items-center justify-center min-h-screen">Verifying authentication...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">San Jose Branch Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {session?.user?.name ?? ''}</p>
            </div>
            <button onClick={async () => await signOut({ callbackUrl: '/admin/login' })} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
