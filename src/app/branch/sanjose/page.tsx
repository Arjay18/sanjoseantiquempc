"use client";

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaBuilding, FaClock, FaUserCheck, FaUserTimes, FaHourglassHalf } from 'react-icons/fa';
import VerificationModal from '@/components/VerificationModal';

function getFormattedDateTime() {
  const now = new Date();
  return now.toLocaleString('en-PH', {
    dateStyle: 'full',
    timeStyle: 'short',
    hour12: true,
    timeZone: 'Asia/Manila',
  });
}

interface LoanApplication {
  id: string;
  name: string;
  pbNo: string;
  contactNo: string;
  loanAmount: number;
  loanType: string;
  status: string;
  branch?: string;
  createdAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  idFile?: string;
  depositSlipOrEwallet?: string;
  memberWithIDAndSlip?: string;
}

interface UserSession {
  role?: string;
  branch?: string;
  name?: string;
}

export default function SanJoseBranchDashboard() {
  const { data: session, status } = useSession();
  const user = session?.user as UserSession | undefined;
  const router = useRouter();
  const [applications, setApplications] = useState<LoanApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [previewModalApp, setPreviewModalApp] = useState<LoanApplication | null>(null);
  const [dateTime, setDateTime] = useState(getFormattedDateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getFormattedDateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.replace('/branch/sanjose/login');
      return;
    }

    if (user?.role !== 'branch' || user?.branch !== 'sanjose') {
      router.replace('/branch/sanjose/login');
      return;
    }

    setIsAuthenticated(true);

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

  useEffect(() => {
    if (!isAuthenticated) return;

    const checkSession = () => {
      if (!session || user?.role !== 'branch' || user?.branch !== 'sanjose') {
        setIsAuthenticated(false);
        router.replace('/branch/sanjose/login');
      }
    };

    const interval = setInterval(checkSession, 3000);
    return () => clearInterval(interval);
  }, [session, router, isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        if (!session || user?.role !== 'branch' || user?.branch !== 'sanjose') {
          setIsAuthenticated(false);
          router.replace('/branch/sanjose/login');
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [session, router, isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const handlePopState = (event: PopStateEvent) => {
      router.replace('/branch/sanjose/login');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [router, isAuthenticated]);

  useEffect(() => {
    if (typeof window !== 'undefined' && isAuthenticated) {
      window.history.replaceState(null, '', window.location.href);
    }
  }, [isAuthenticated]);

  const handleSignOut = async () => {
    localStorage.clear();
    sessionStorage.clear();
    await signOut({ callbackUrl: '/branch/sanjose/login' });
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    console.log('handleStatusUpdate called with:', id, newStatus);
    alert(`Processing ${newStatus} for application ${id}...`);
    try {
      const response = await fetch(`/api/administrator/loan-applications/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      
      if (response.ok) {
        const refreshData = await fetch('/api/administrator/loan-applications').then(res => res.json());
        setApplications(refreshData.applications || []);
        alert(`Application ${newStatus === 'approved' ? 'approved' : 'rejected'} successfully!`);
      } else {
        alert(`Failed: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Check console for details.');
    }
  };

  const handleDelete = async (id: string, applicantName: string) => {
    if (!confirm(`Are you sure you want to delete the loan application for ${applicantName}? This action cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/administrator/loan-applications/${id}`, { method: 'DELETE' });

      if (response.ok) {
        alert('Loan application deleted successfully');
        const data = await fetch('/api/administrator/loan-applications').then(res => res.json());
        setApplications(data.applications || []);
      } else {
        const data = await response.json();
        alert(`Failed to delete application: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      alert('An error occurred while deleting the application');
    }
  };

  if (status === 'loading' || !isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const branchApplications = applications.filter(app => {
    const appBranch = app.branch?.toLowerCase().trim();
    return !appBranch || appBranch === 'sanjose';
  });
  const pendingApplications = branchApplications.filter(app => app.status === 'pending');
  const approvedApplications = branchApplications.filter(app => app.status === 'approved');
  const rejectedApplications = branchApplications.filter(app => app.status === 'rejected');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200">
      <header className="bg-white shadow-lg sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-green-700 text-white shadow-lg">
              <FaBuilding className="h-8 w-8" />
            </span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">San Jose Branch Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome, <span className="font-semibold text-green-700">{session?.user?.name}</span></p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="flex items-center gap-2 text-gray-500 text-sm"><FaClock /> {dateTime}</span>
            <button
              onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border-b-4 border-green-600">
            <FaBuilding className="h-8 w-8 text-green-600" />
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase">Total Applications</div>
              <div className="text-3xl font-bold text-gray-900">{branchApplications.length}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border-b-4 border-yellow-400">
            <FaHourglassHalf className="h-8 w-8 text-yellow-400" />
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase">Pending</div>
              <div className="text-3xl font-bold text-gray-900">{pendingApplications.length}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border-b-4 border-green-500">
            <FaUserCheck className="h-8 w-8 text-green-500" />
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase">Approved</div>
              <div className="text-3xl font-bold text-gray-900">{approvedApplications.length}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border-b-4 border-red-500">
            <FaUserTimes className="h-8 w-8 text-red-500" />
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase">Rejected</div>
              <div className="text-3xl font-bold text-gray-900">{rejectedApplications.length}</div>
            </div>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900">Loan Applications</h3>
            <p className="text-sm text-gray-500">Manage loan applications for San Jose branch</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Applicant</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">PB# / Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Loan Type / Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {branchApplications.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-400 text-lg">No applications found</td>
                  </tr>
                ) : (
                  branchApplications.map((application, idx) => (
                    <tr key={application.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{application.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">PB#: {application.pbNo}<br />{application.contactNo}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{application.loanType} <br />₱{application.loanAmount.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          application.status === 'approved' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {application.status === 'pending' && (
                            <>
                              <button
                                onClick={() => handleStatusUpdate(application.id, 'approved')}
                                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-semibold shadow transition-colors"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleStatusUpdate(application.id, 'rejected')}
                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-semibold shadow transition-colors"
                              >
                                Reject
                              </button>
                            </>
                          )}
                          <a
                            href={`/api/administrator/loan-applications/${application.id}/pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs font-semibold shadow flex items-center gap-1 transition-colors"
                          >
                            PDF
                          </a>
                          {(application.idFile || application.depositSlipOrEwallet || application.memberWithIDAndSlip) && (
                            <>
                              <button
                                onClick={() => setPreviewModalApp(application)}
                                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-semibold shadow transition-colors"
                              >
                                Verification
                              </button>
                              <button
                                onClick={() => handleDelete(application.id, application.name)}
                                className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded text-xs font-semibold shadow transition-colors"
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
        {previewModalApp && (
          <VerificationModal application={previewModalApp} onClose={() => setPreviewModalApp(null)} />
        )}
      </main>
    </div>
  );
}
