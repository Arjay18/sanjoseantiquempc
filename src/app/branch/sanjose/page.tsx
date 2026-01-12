'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface LoanApplication {
  id: string;
  name: string;
  pbNo: string;
  contactNo: string;
  loanAmount: number;
  loanType: string;
  status: string;
  createdAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
}

export default function SanJoseBranchDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [applications, setApplications] = useState<LoanApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Strict authentication check - redirect immediately if not authenticated
  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.replace('/branch/sanjose/login');
      return;
    }

    if ((session.user as any)?.role !== 'branch' || (session.user as any)?.branch !== 'sanjose') {
      router.replace('/branch/sanjose/login');
      return;
    }

    setIsAuthenticated(true);

    // Fetch data only if authenticated
    fetch('/api/administrator/loan-applications')
      .then(res => res.json())
      .then(data => {
        setApplications(data.applications || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching applications:', error);
        setError('Failed to load loan applications');
        setLoading(false);
      });
  }, [session, status, router]);

  // Continuous session monitoring - check every 3 seconds
  useEffect(() => {
    if (!isAuthenticated) return;

    const checkSession = () => {
      if (!session || (session.user as any)?.role !== 'branch' || (session.user as any)?.branch !== 'sanjose') {
        console.log('Session check failed, redirecting...');
        setIsAuthenticated(false);
        router.replace('/branch/sanjose/login');
      }
    };

    const interval = setInterval(checkSession, 3000);
    return () => clearInterval(interval);
  }, [session, router, isAuthenticated]);

  // Handle page visibility changes (tab switching, back button)
  useEffect(() => {
    if (!isAuthenticated) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Re-check authentication when page becomes visible
        if (!session || (session.user as any)?.role !== 'branch' || (session.user as any)?.branch !== 'sanjose') {
          console.log('Visibility check failed, redirecting...');
          setIsAuthenticated(false);
          router.replace('/branch/sanjose/login');
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [session, router, isAuthenticated]);

  // Handle browser back/forward navigation
  useEffect(() => {
    if (!isAuthenticated) return;

    const handlePopState = (event: PopStateEvent) => {
      // Always redirect to login if trying to navigate back
      console.log('Back button detected, redirecting...');
      router.replace('/branch/sanjose/login');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [router, isAuthenticated]);

  // Prevent caching
  useEffect(() => {
    // Clear browser history to prevent back button
    if (typeof window !== 'undefined' && isAuthenticated) {
      window.history.replaceState(null, '', window.location.href);
    }
  }, [isAuthenticated]);

  const handleSignOut = async () => {
    localStorage.clear();
    sessionStorage.clear();

    // Sign out and redirect
    await signOut({ callbackUrl: '/administrator/login' });
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/administrator/loan-applications/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        // Refresh the applications list
        const data = await fetch('/api/administrator/loan-applications').then(res => res.json());
        setApplications(data.applications || []);
      } else {
        alert('Failed to update application status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('An error occurred while updating the status');
    }
  };

  const handleDelete = async (id: string, applicantName: string) => {
    if (!confirm(`Are you sure you want to delete the loan application for ${applicantName}? This action cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/administrator/loan-applications/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Loan application deleted successfully');
        // Refresh the applications list
        const data = await fetch('/api/administrator/loan-applications').then(res => res.json());
        setApplications(data.applications || []);
      } else {
        const data = await response.json();
        alert(`Failed to delete application: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('An error occurred while deleting the application');
    }
  };

  // CRITICAL: Don't render ANY content if not authenticated
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Filter applications for San Jose branch only
  const branchApplications = applications.filter(app => (app as any).branch === 'sanjose');
  const pendingApplications = branchApplications.filter(app => app.status === 'pending');
  const approvedApplications = branchApplications.filter(app => app.status === 'approved');
  const rejectedApplications = branchApplications.filter(app => app.status === 'rejected');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">San Jose Branch Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {session?.user?.name}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Applications</dt>
                    <dd className="text-lg font-medium text-gray-900">{branchApplications.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Pending</dt>
                    <dd className="text-lg font-medium text-gray-900">{pendingApplications.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Approved</dt>
                    <dd className="text-lg font-medium text-gray-900">{approvedApplications.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Rejected</dt>
                    <dd className="text-lg font-medium text-gray-900">{rejectedApplications.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Loan Applications</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage loan applications for San Jose branch</p>
          </div>
          <ul className="divide-y divide-gray-200">
            {applications.length === 0 ? (
              <li className="px-4 py-4 text-center text-gray-500">No applications found</li>
            ) : (
              applications.map((application) => (
                <li key={application.id} className="px-4 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{application.name}</p>
                          <p className="text-sm text-gray-500">PB#: {application.pbNo} | {application.contactNo}</p>
                          <p className="text-sm text-gray-500">
                            {application.loanType} - ₱{application.loanAmount.toLocaleString()}
                          </p>
                        </div>
                        <div className="ml-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            application.status === 'approved' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {application.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {application.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleStatusUpdate(application.id, 'approved')}
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleStatusUpdate(application.id, 'rejected')}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                          >
                            Reject
                          </button>
                        </>
                      )}
                      <a
                        href={`/api/administrator/loan-applications/${application.id}/pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm inline-flex items-center"
                      >
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        PDF
                      </a>
                      <button
                        onClick={() => handleDelete(application.id, application.name)}
                        className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
