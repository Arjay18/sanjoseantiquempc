"use client";
// Attachment preview modal for images and PDFs
interface AttachmentPreviewModalProps {
  application: LoanApplication | null;
  onClose: () => void;
}

function AttachmentPreviewModal({ application, onClose }: AttachmentPreviewModalProps) {
  if (!application) return null;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'single'>('grid');
  
  // Get all available documents
  const documents = [
    { key: 'idFile', label: 'Valid ID', icon: '📄', color: 'blue' },
    { key: 'depositSlipOrEwallet', label: 'Deposit Slip / E-wallet', icon: '💳', color: 'green' },
    { key: 'memberWithIDAndSlip', label: 'Member Photo with ID', icon: '📸', color: 'purple' },
  ];
  
  const availableDocs = documents.filter(doc => application[doc.key as keyof LoanApplication]);
  
  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? availableDocs.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === availableDocs.length - 1 ? 0 : prev + 1));
  };
  
  const getFileExtension = (file: string | undefined) => {
    if (!file) return '';
    if (file.startsWith('data:image/')) return 'image';
    if (file.startsWith('data:application/pdf')) return 'pdf';
    return 'unknown';
  };
  
  const renderDocument = (doc: typeof documents[0], isActive: boolean = false) => {
    const file = application[doc.key as keyof LoanApplication] as string | undefined;
    if (!file) return null;
    
    const fileType = getFileExtension(file);
    const fileExt = file.split(';')[0].split('/')[1] || 'file';
    
    const colorClasses = {
      blue: 'border-blue-200 bg-blue-50',
      green: 'border-green-200 bg-green-50',
      purple: 'border-purple-200 bg-purple-50',
    };
    
    return (
      <div className={`p-4 rounded-xl border-2 ${colorClasses[doc.color as keyof typeof colorClasses]} ${isActive ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{doc.icon}</span>
            <span className="font-bold text-gray-800">{doc.label}</span>
          </div>
          <span className="text-xs font-medium px-2 py-1 bg-white rounded-full text-gray-500 uppercase">{fileExt}</span>
        </div>
        
        {fileType === 'image' && (
          <div className="relative">
            <img 
              src={file} 
              alt={doc.label} 
              className="w-full h-auto max-h-80 object-contain rounded-lg border shadow-sm" 
            />
            <a 
              href={file} 
              download={`${doc.label.replace(/\s+/g, '-')}-${application.pbNo}.jpg`}
              className="absolute bottom-2 right-2 bg-white/90 hover:bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
          </div>
        )}
        
        {fileType === 'pdf' && (
          <div className="bg-white rounded-lg p-4">
            <object data={file} type="application/pdf" width="100%" height="300px" className="rounded">
              <div className="flex flex-col items-center justify-center py-8">
                <svg className="w-16 h-16 text-red-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 mb-2">PDF Document</p>
                <a href={file} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Open in new tab
                </a>
              </div>
            </object>
          </div>
        )}
      </div>
    );
  };
  
  // Reset state when modal opens with new application
  useEffect(() => {
    setCurrentImageIndex(0);
    setViewMode('grid');
  }, [application]);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Verification Documents</h2>
              <p className="text-blue-100 text-sm">Applicant: {application.name} | PB#: {application.pbNo}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {/* View Toggle */}
            <div className="bg-white/20 rounded-lg p-1 flex">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition ${viewMode === 'grid' ? 'bg-white text-blue-600' : 'text-white/80 hover:text-white'}`}
              >
                <svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('single')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition ${viewMode === 'single' ? 'bg-white text-blue-600' : 'text-white/80 hover:text-white'}`}
              >
                <svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
            
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition"
              aria-label="Close preview"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {availableDocs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <svg className="w-20 h-20 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 text-lg">No documents uploaded</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc, idx) => (
                <div key={doc.key}>
                  {application[doc.key as keyof LoanApplication] && renderDocument(doc, false)}
                </div>
              ))}
            </div>
          ) : (
            <div className="relative">
              {/* Navigation */}
              {availableDocs.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 p-3 rounded-full"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 p-3 rounded-full"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Single Document View */}
              <div className="max-w-2xl mx-auto">
                {renderDocument(availableDocs[currentImageIndex], true)}
                
                {/* Indicators */}
                {availableDocs.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {availableDocs.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition ${idx === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                )}
                
                <p className="text-center text-gray-500 text-sm mt-2">
                  {currentImageIndex + 1} of {availableDocs.length} documents
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-gray-100 px-6 py-3 flex items-center justify-between border-t">
          <div className="text-sm text-gray-600">
            <span className="font-medium">{availableDocs.length}</span> document(s) available for verification
          </div>
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
        

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaBuilding, FaClock, FaUserCheck, FaUserTimes, FaHourglassHalf } from 'react-icons/fa';
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
  createdAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  idFile?: string;
  depositSlipOrEwallet?: string;
  memberWithIDAndSlip?: string;
}

export default function SanJoseBranchDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [applications, setApplications] = useState<LoanApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [previewModalApp, setPreviewModalApp] = useState<LoanApplication | null>(null);
  const [dateTime, setDateTime] = useState(getFormattedDateTime());
  // Live date/time update
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getFormattedDateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
    console.log('San Jose branch - Session details:', {
      userRole: (session.user as any)?.role,
      userBranch: (session.user as any)?.branch,
      expectedBranch: 'sanjose'
    });

    fetch('/api/administrator/loan-applications')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched applications:', data.applications?.length || 0);
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

    // Sign out and redirect to San Jose branch login
    await signOut({ callbackUrl: '/branch/sanjose/login' });
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/administrator/loan-applications/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Refresh the applications list
        const refreshData = await fetch('/api/administrator/loan-applications').then(res => res.json());
        setApplications(refreshData.applications || []);
        alert(`Application ${newStatus === 'approved' ? 'approved' : 'rejected'} successfully!`);
      } else {
        console.error('Update failed:', data);
        alert(`Failed to update application status: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('An error occurred while updating the status. Please try again.');
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

  // Filter applications for San Jose branch only (case-insensitive, handle undefined/null - default to sanjose)
  const branchApplications = applications.filter(app => {
    const appBranch = (app as any)?.branch;
    // Include applications with no branch (default), or branch explicitly set to sanjose
    return !appBranch || appBranch === 'sanjose' || appBranch === 'San Jose' || appBranch === 'SANJOSE' || appBranch.toLowerCase() === 'sanjose';
  });
  const pendingApplications = branchApplications.filter(app => app.status === 'pending');
  const approvedApplications = branchApplications.filter(app => app.status === 'approved');
  const rejectedApplications = branchApplications.filter(app => app.status === 'rejected');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      {/* Modern Header */}
      <header className="bg-white shadow-lg sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-blue-700 text-white shadow-lg">
              <FaBuilding className="h-8 w-8" />
            </span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">San Jose Branch Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome, <span className="font-semibold text-blue-700">{session?.user?.name}</span></p>
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
        {/* Stats Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border-b-4 border-blue-600 animate-fade-in">
            <FaBuilding className="h-8 w-8 text-blue-600" />
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase">Total Applications</div>
              <div className="text-3xl font-bold text-gray-900">{branchApplications.length}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border-b-4 border-yellow-400 animate-fade-in">
            <FaHourglassHalf className="h-8 w-8 text-yellow-400" />
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase">Pending</div>
              <div className="text-3xl font-bold text-gray-900">{pendingApplications.length}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border-b-4 border-green-500 animate-fade-in">
            <FaUserCheck className="h-8 w-8 text-green-500" />
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase">Approved</div>
              <div className="text-3xl font-bold text-gray-900">{approvedApplications.length}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border-b-4 border-red-500 animate-fade-in">
            <FaUserTimes className="h-8 w-8 text-red-500" />
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase">Rejected</div>
              <div className="text-3xl font-bold text-gray-900">{rejectedApplications.length}</div>
            </div>
          </div>
        </section>

        {/* Applications Table */}
        <section className="bg-white shadow-lg rounded-xl overflow-hidden animate-fade-in">
          <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Loan Applications</h3>
              <p className="text-sm text-gray-500">Manage loan applications for San Jose branch</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
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
                    <tr key={application.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{application.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">PB#: {application.pbNo}<br />{application.contactNo}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{application.loanType} <br />₱{application.loanAmount.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow ${
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
                                title="Approve application"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleStatusUpdate(application.id, 'rejected')}
                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-semibold shadow transition-colors"
                                title="Reject application"
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
                            title="Download PDF"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            PDF
                          </a>
                          {(application.idFile || application.depositSlipOrEwallet || application.memberWithIDAndSlip) && (
                            <>
                              <button
                                onClick={() => setPreviewModalApp(application)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold shadow transition-colors"
                                title="View verification attachments"
                              >
                                Verification
                              </button>
                              <button
                                onClick={() => handleDelete(application.id, application.name)}
                                className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded text-xs font-semibold shadow transition-colors"
                                title="Delete application"
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
          <AttachmentPreviewModal application={previewModalApp} onClose={() => setPreviewModalApp(null)} />
        )}
      </main>
    </div>
  );
}
