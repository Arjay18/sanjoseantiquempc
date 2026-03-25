"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { 
  Wallet, FileText, CreditCard, User, Building2, Trash2,
  AlertTriangle, CheckCircle, Clock, Package,
  Plus, Eye, Home, Calculator, X, Calendar
} from "lucide-react";
import LoanPackagesCarousel from "../../components/LoanPackagesCarousel";

type Application = {
  id: string;
  createdAt: string;
  loanType: string;
  loanAmount: number;
  status: string;
  branch: string;
};

export default function UserDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // Dashboard state
  const [applications, setApplications] = useState<Application[]>([]);
  const [loadingApplications, setLoadingApplications] = useState(true);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Calculator State
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcAmount, setCalcAmount] = useState('');
  const [calcTerm, setCalcTerm] = useState('');
  const [calcResult, setCalcResult] = useState<string | null>(null);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    } else {
    }
  }, [session, status, router]);

  useEffect(() => {
    async function fetchApplications() {
      if (!session) return;
      setLoadingApplications(true);
      try {
        const res = await fetch("/api/loan-applications/user");
        if (res.ok) {
          const data = await res.json();
          setApplications(data);
        }
      } catch (err) {
        console.error('Error fetching applications:', err);
      }
      setLoadingApplications(false);
    }
    fetchApplications();
  }, [session]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const principal = parseFloat(calcAmount);
    const months = parseFloat(calcTerm);
    
    if (principal && months) {
      // Simple estimation logic (Adjust rate as per cooperative policy, e.g., 1.5% per month)
      // Formula: (Principal / Term) + (Principal * InterestRate)
      const interestRate = 0.015; // 1.5% per month
      const monthlyPrincipal = principal / months;
      const monthlyInterest = principal * interestRate;
      const totalMonthly = monthlyPrincipal + monthlyInterest;
      
      setCalcResult(totalMonthly.toLocaleString('en-PH', { 
        style: 'currency', 
        currency: 'PHP' 
      }));
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this loan application? This action cannot be undone.')) {
      return;
    }
    setActionMessage(null);
    try {
      const res = await fetch(`/api/loan-applications/user/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setApplications(applications.filter(app => app.id !== id));
        setActionMessage({ type: 'success', text: 'Application deleted successfully!' });
      } else {
        const data = await res.json();
        setActionMessage({ type: 'error', text: data.error || 'Failed to delete application' });
      }
    } catch (err) {
      setActionMessage({ type: 'error', text: 'Failed to delete application' });
    }
  };

  // Calculate stats
  const pendingCount = applications.filter(a => a.status === 'pending').length;
  const approvedCount = applications.filter(a => a.status === 'approved').length;
  const rejectedCount = applications.filter(a => a.status === 'rejected').length;

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const renderApplicationsSection = (showTitle: boolean = true) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {showTitle && (
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              My Loan Applications
            </h2>
            <p className="text-gray-500 text-sm mt-1">Manage and track your submitted applications</p>
          </div>
          {applications.length > 0 && (
            <div className="text-sm text-gray-500">
              Showing {applications.length} application{applications.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>
      )}

      {loadingApplications ? (
        <div className="p-12 text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-500 mt-3">Loading applications...</p>
        </div>
      ) : applications.length === 0 ? (
        <div className="p-12 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Applications Yet</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            You haven't submitted any loan applications. Start your first application today!
          </p>
          <Link
            href="/loan-application"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            <Plus className="w-5 h-5" />
            Apply for a Loan
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Loan Type</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Branch</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app: Application, index) => (
                <tr 
                  key={app.id} 
                  className={`border-t border-gray-100 hover:bg-gray-50 transition ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                >
                  <td className="p-4 text-sm text-gray-600">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-sm font-medium text-gray-900">{app.loanType}</td>
                  <td className="p-4 text-sm font-semibold text-green-600">₱{app.loanAmount?.toLocaleString()}</td>
                  <td className="p-4 text-sm text-gray-600 capitalize">{app.branch}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                      app.status === 'approved' ? 'bg-green-100 text-green-700' :
                      app.status === 'rejected' ? 'bg-red-100 text-red-700' :
                      app.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {app.status === 'approved' && <CheckCircle className="w-3 h-3" />}
                      {app.status === 'rejected' && <AlertTriangle className="w-3 h-3" />}
                      {app.status === 'pending' && <Clock className="w-3 h-3" />}
                      {app.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDelete(app.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Delete application"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Welcome back, {session?.user?.name?.split(' ')[0] || "Member"}! 👋
                </h1>
                <p className="text-blue-100 text-lg">Manage your loans and track applications all in one place</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 -mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Applications</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{applications.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Pending</p>
                  <p className="text-3xl font-bold text-yellow-600 mt-1">{pendingCount}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Approved</p>
                  <p className="text-3xl font-bold text-green-600 mt-1">{approvedCount}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Rejected</p>
                  <p className="text-3xl font-bold text-red-600 mt-1">{rejectedCount}</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 flex flex-col gap-8">
          {/* Action Messages */}
          {actionMessage && (
            <div className={`p-4 rounded-xl border flex items-center gap-3 ${
              actionMessage.type === 'success' 
                ? 'bg-green-50 text-green-800 border-green-200' 
                : 'bg-red-50 text-red-800 border-red-200'
            }`}>
              {actionMessage.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertTriangle className="w-5 h-5" />
              )}
              {actionMessage.text}
            </div>
          )}

          {/* Loan Calculator Modal */}
          {showCalculator && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 flex justify-between items-center text-white">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    <h3 className="font-bold">Quick Loan Calculator</h3>
                  </div>
                  <button onClick={() => setShowCalculator(false)} className="hover:bg-white/20 p-1 rounded-full transition">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6">
                  <form onSubmit={handleCalculate} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (₱)</label>
                      <input type="number" value={calcAmount} onChange={e => setCalcAmount(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 50000" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Term (Months)</label>
                      <input type="number" value={calcTerm} onChange={e => setCalcTerm(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 12" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-blue-200">
                      Calculate Repayment
                    </button>
                  </form>
                  
                  {calcResult && (
                    <div className="mt-6 bg-green-50 rounded-xl p-4 border border-green-100 text-center">
                      <p className="text-gray-500 text-sm mb-1">Estimated Monthly Payment</p>
                      <p className="text-3xl font-bold text-green-700">{calcResult}</p>
                      <p className="text-xs text-gray-400 mt-2">*Estimation only. Final computation may vary.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/loan-application"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Plus className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">New Loan</h3>
                  <p className="text-blue-100 text-sm">Apply for a loan</p>
                </div>
              </div>
            </Link>

            <button
              onClick={() => document.getElementById('applications-table')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white hover:bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg text-gray-900">View Status</h3>
                  <p className="text-gray-500 text-sm">Track applications</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setShowCalculator(true)}
              className="group bg-white hover:bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg text-gray-900">Calculator</h3>
                  <p className="text-gray-500 text-sm">Estimate payments</p>
                </div>
              </div>
            </button>

            <Link
              href="/loan-packages"
              className="group bg-white hover:bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg text-gray-900">Loan Packages</h3>
                  <p className="text-gray-500 text-sm">View available loans</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Recent Activity Section */}
          {applications.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Recent Activity
                </h2>
                <button onClick={() => document.getElementById('applications-table')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-blue-600 font-medium hover:underline">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {applications.slice(0, 3).map((app) => (
                  <div key={app.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        app.status === 'approved' ? 'bg-green-100 text-green-600' :
                        app.status === 'rejected' ? 'bg-red-100 text-red-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {app.status === 'approved' ? <CheckCircle className="w-5 h-5" /> : 
                         app.status === 'rejected' ? <AlertTriangle className="w-5 h-5" /> : 
                         <Clock className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{app.loanType} Application</h4>
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                          <Calendar className="w-3 h-3" /> {new Date(app.createdAt).toLocaleDateString()}
                          <span className="text-gray-300">|</span>
                          <span className="font-medium text-gray-700">₱{app.loanAmount.toLocaleString()}</span>
                        </p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      app.status === 'approved' ? 'bg-green-100 text-green-700' :
                      app.status === 'rejected' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {app.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Loan Packages Carousel */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-600" />
              Available Loan Packages
            </h2>
            <LoanPackagesCarousel />
          </div>

          {/* My Applications Section */}
          <div id="applications-table">
            {renderApplicationsSection()}
          </div>
        </div>
      </>
    );
}
