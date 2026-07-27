'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Sparkles, 
  Users, 
  Calendar, 
  UserCheck, 
  FileText, 
  ArrowUpRight, 
  TrendingUp, 
  Plus, 
  Clock, 
  CheckCircle2, 
  XCircle,
  HelpCircle,
  Activity,
  ChevronRight,
  ArrowRight,
  Mail
} from 'lucide-react';

interface Stats {
  totalNews: number;
  totalSuccessStories: number;
  totalMembers: number;
  totalPMESSessions: number;
  activePMESSessions: number;
  totalRegistrations: number;
  totalLoanApplications: number;
  pendingLoanApplications: number;
  approvedLoanApplications: number;
  successRate: number;
  branchStats?: {
    sanjose: number;
    miagao: number;
    oton: number;
    guimaras: number;
  };
  recentActivity: Array<{
    id: string;
    type: 'news' | 'story' | 'user' | 'application';
    action: string;
    title: string;
    timestamp: string;
  }>;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [allApplications, setAllApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.push('/administrator/login');
      return;
    }

    // Fetch real statistics from API
    fetch('/api/administrator/stats')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching stats:', error);
        setError('Failed to load dashboard statistics. Please check your database connection.');
        setLoading(false);
      });

    // Fetch all loan applications for dashboard summary
    fetch('/api/administrator/loan-applications?status=all&page=1&limit=10')
      .then(res => res.json())
      .then(data => {
        setAllApplications(data.applications || []);
      })
      .catch(error => {
        console.error('Error fetching all loan applications:', error);
      });
  }, [session, status, router]);

  if (status === 'loading' || loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#006B3F] border-t-transparent"></div>
          <p className="text-sm font-bold text-gray-500">Loading Dashboard Data...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  if (error) {
    return (
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 rounded-3xl shadow-xl p-6 sm:p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <h1 className="text-2xl sm:text-3xl font-black">Connection Issue</h1>
          <p className="text-red-100 mt-1.5 font-medium">We encountered a problem loading dashboard statistics.</p>
        </div>

        {/* Error Card */}
        <div className="bg-white rounded-3xl border border-red-100 shadow-xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-50 rounded-2xl text-red-600">
              <XCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Database Connection Error</h3>
              <p className="text-gray-600 mt-1.5 leading-relaxed">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-red-200"
              >
                Retry Loading
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions (Fallbacks) */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-gray-950 mb-5">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/administrator/announcements"
              className="flex items-center p-4 border border-gray-100 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <div className="ml-3.5">
                <p className="text-sm font-bold text-gray-950">Slider Announcements</p>
                <p className="text-xs text-gray-500 mt-0.5">Manage homepage slider</p>
              </div>
            </Link>

            <Link
              href="/administrator/news"
              className="flex items-center p-4 border border-gray-100 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <Newspaper className="w-6 h-6" />
              </div>
              <div className="ml-3.5">
                <p className="text-sm font-bold text-gray-950">Add News Article</p>
                <p className="text-xs text-gray-500 mt-0.5">Create news content</p>
              </div>
            </Link>

            <Link
              href="/administrator/loan-applications"
              className="flex items-center p-4 border border-gray-100 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <div className="ml-3.5">
                <p className="text-sm font-bold text-gray-950">Review Loan Applications</p>
                <p className="text-xs text-gray-500 mt-0.5">Manage loan requests</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Define metric cards
  const metrics = [
    {
      name: 'Total News Articles',
      value: stats?.totalNews || 0,
      icon: Newspaper,
      href: '/administrator/news',
      colorClass: 'text-blue-600 bg-blue-50 border-blue-100/50',
      progressColor: 'bg-blue-600'
    },
    {
      name: 'Success Stories',
      value: stats?.totalSuccessStories || 0,
      icon: Sparkles,
      href: '/administrator/success-stories',
      colorClass: 'text-green-600 bg-green-50 border-green-100/50',
      progressColor: 'bg-green-600'
    },
    {
      name: 'Total Members',
      value: stats?.totalMembers || 0,
      icon: Users,
      href: '/administrator/users',
      colorClass: 'text-purple-600 bg-purple-50 border-purple-100/50',
      progressColor: 'bg-purple-600'
    },
    {
      name: 'Active PMES Sessions',
      value: stats?.activePMESSessions || 0,
      icon: Calendar,
      href: '/administrator/pmes',
      colorClass: 'text-yellow-600 bg-yellow-50 border-yellow-100/50',
      progressColor: 'bg-yellow-500'
    },
    {
      name: 'Member Registrations',
      value: stats?.totalRegistrations || 0,
      icon: UserCheck,
      href: '/administrator/users',
      colorClass: 'text-indigo-600 bg-indigo-50 border-indigo-100/50',
      progressColor: 'bg-indigo-600'
    },
    {
      name: 'Total Loan Applications',
      value: stats?.totalLoanApplications || 0,
      icon: FileText,
      href: '/administrator/loan-applications',
      colorClass: 'text-orange-600 bg-orange-50 border-orange-100/50',
      progressColor: 'bg-orange-500'
    }
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-8">
      {/* Welcome Banner Card */}
      <div className="bg-gradient-to-br from-[#004D2D] via-[#006B3F] to-[#004D2D] rounded-3xl shadow-xl p-6 sm:p-8 text-white relative overflow-hidden">
        {/* Background glow graphics */}
        <div className="absolute top-[-20%] right-[-10%] w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-[-30%] left-[20%] w-56 h-56 bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37] bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
              System Administrator
            </span>
            <h1 className="text-3xl sm:text-4xl font-black mt-3">
              Welcome back, {session.user?.name || 'Admin'}!
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base mt-2 font-medium">
              SJMPC portal overview for today, {currentDate}. Everything looks smooth!
            </p>
          </div>

          <div className="flex gap-4 sm:gap-6 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md max-w-xs md:max-w-none">
            <div className="text-center px-4">
              <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Loan Approvals</p>
              <p className="text-2xl font-black text-[#D4AF37] mt-1">
                {stats?.successRate ? `${stats.successRate}%` : '100%'}
              </p>
            </div>
            <div className="border-l border-white/10" />
            <div className="text-center px-4">
              <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Pending Loans</p>
              <p className="text-2xl font-black text-white mt-1">
                {stats?.pendingLoanApplications || 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <motion.div
              whileHover={{ y: -4 }}
              key={m.name} 
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-all duration-350"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">{m.name}</p>
                  <p className="text-3xl font-black text-gray-950 mt-2">{m.value.toLocaleString()}</p>
                </div>
                <div className={`p-3.5 rounded-2xl border ${m.colorClass} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 flex-shrink-0" />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                <Link
                  href={m.href}
                  className="text-xs font-extrabold text-[#006B3F] hover:text-[#004D2D] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Manage Data
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <div className="w-20 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div className={`h-full rounded-full ${m.progressColor}`} style={{ width: '65%' }} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Grid: Applications & Activity Logs */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 8-cols: Loan Applications Table Card */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-extrabold text-gray-950">Loan Applications</h2>
              <p className="text-xs font-semibold text-gray-500 mt-1">Review the latest 10 submissions across all branches</p>
            </div>
            <Link 
              href="/administrator/loan-applications"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-gray-100 rounded-xl text-xs font-bold text-gray-700 transition-colors cursor-pointer"
            >
              View All Applications
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            {allApplications.length === 0 ? (
              <div className="p-10 text-center text-gray-500">
                <FileText className="w-10 h-10 mx-auto text-gray-300 mb-3" />
                <p className="text-sm font-bold">No Loan Applications Found</p>
                <p className="text-xs text-gray-400 mt-1">New applications submitted by members will appear here.</p>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">Applicant</th>
                    <th className="px-6 py-4 text-left text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">Branch</th>
                    <th className="px-6 py-4 text-left text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">Type / Amount</th>
                    <th className="px-6 py-4 text-left text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-right text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {allApplications.map(app => (
                    <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-extrabold text-gray-900">{app.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">PB: {app.pbNo}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-[#006B3F] border border-emerald-100/50">
                          {app.branch}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-gray-900">{app.loanType}</div>
                        <div className="text-xs font-extrabold text-[#006B3F] mt-0.5">₱{app.loanAmount?.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${
                          app.status === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                          app.status === 'approved' ? 'bg-green-50 text-green-700 border-green-100' :
                          app.status === 'rejected' ? 'bg-red-50 text-red-700 border-red-100' : 'bg-gray-50 text-gray-700 border-gray-100'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            app.status === 'pending' ? 'bg-amber-500' :
                            app.status === 'approved' ? 'bg-green-500' :
                            app.status === 'rejected' ? 'bg-red-500' : 'bg-gray-400'
                          }`} />
                          {app.status?.charAt(0).toUpperCase() + app.status?.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <Link 
                          href={`/administrator/loan-applications/${app.id}`}
                          className="inline-flex items-center justify-center p-2 bg-slate-50 hover:bg-slate-100 text-[#006B3F] hover:text-[#004D2D] rounded-lg transition-colors border border-gray-100 cursor-pointer"
                          title="Review Application"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Right 4-cols: Activity Timeline Card */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
          <div className="p-6 border-b border-gray-50">
            <h2 className="text-xl font-extrabold text-gray-950 flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#006B3F]" />
              Recent Activity
            </h2>
            <p className="text-xs font-semibold text-gray-500 mt-1">Audit logs of the latest site operations</p>
          </div>

          <div className="p-6 flex-grow">
            {!stats?.recentActivity || stats.recentActivity.length === 0 ? (
              <div className="py-12 text-center text-gray-500">
                <Clock className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                <p className="text-xs font-bold">No Recent Activity Logs</p>
              </div>
            ) : (
              <div className="flow-root relative">
                {/* Vertical timeline line */}
                <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-slate-100 pointer-events-none" />

                <div className="-mb-8">
                  {stats.recentActivity.slice(0, 6).map((activity, idx) => {
                    const isLast = idx === Math.min(stats.recentActivity.length, 6) - 1;
                    return (
                      <div key={activity.id} className="relative pb-8">
                        <div className="relative flex items-start space-x-3">
                          {/* Timeline dot with icon */}
                          <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border shadow-sm ${
                            activity.type === 'news' ? 'bg-blue-50 border-blue-100 text-blue-600' :
                            activity.type === 'story' ? 'bg-green-50 border-green-100 text-green-600' :
                            activity.type === 'application' ? 'bg-orange-50 border-orange-100 text-orange-600' : 'bg-purple-50 border-purple-100 text-purple-600'
                          }`}>
                            {activity.type === 'news' && <Newspaper className="w-3.5 h-3.5" />}
                            {activity.type === 'story' && <Sparkles className="w-3.5 h-3.5" />}
                            {activity.type === 'application' && <FileText className="w-3.5 h-3.5" />}
                            {activity.type === 'user' && <Users className="w-3.5 h-3.5" />}
                          </div>

                          {/* Content */}
                          <div className="min-w-0 flex-1 pt-0.5">
                            <p className="text-xs font-bold text-gray-900 leading-snug">
                              {activity.action}{' '}
                              <span className="font-normal text-gray-600">
                                "{activity.title}"
                              </span>
                            </p>
                            <span className="text-[10px] text-gray-400 mt-1 flex items-center gap-1 font-medium">
                              <Clock className="w-3 h-3" />
                              {activity.timestamp}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-50/50 border-t border-gray-50 text-center">
            <Link
              href="/administrator/activity"
              className="text-xs font-extrabold text-[#006B3F] hover:text-[#004D2D] transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              View Full Audit Log
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* Quick Actions Hub Grid */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-extrabold text-gray-950 mb-5">Quick Actions Hub</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link
            href="/administrator/announcements"
            className="flex flex-col items-center justify-center p-5 border border-gray-100 rounded-2xl hover:border-[#006B3F]/30 hover:bg-[#006B3F]/5 transition-all text-center group"
          >
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-gray-950 mt-3">Slider Banner</p>
          </Link>

          <Link
            href="/administrator/news"
            className="flex flex-col items-center justify-center p-5 border border-gray-100 rounded-2xl hover:border-[#006B3F]/30 hover:bg-[#006B3F]/5 transition-all text-center group"
          >
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
              <Newspaper className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-gray-950 mt-3">Add News</p>
          </Link>

          <Link
            href="/administrator/success-stories"
            className="flex flex-col items-center justify-center p-5 border border-gray-100 rounded-2xl hover:border-[#006B3F]/30 hover:bg-[#006B3F]/5 transition-all text-center group"
          >
            <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-gray-950 mt-3">Success Story</p>
          </Link>

          <Link
            href="/administrator/pmes"
            className="flex flex-col items-center justify-center p-5 border border-gray-100 rounded-2xl hover:border-[#006B3F]/30 hover:bg-[#006B3F]/5 transition-all text-center group"
          >
            <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-gray-950 mt-3">PMES Setup</p>
          </Link>

          <Link
            href="/administrator/contact"
            className="flex flex-col items-center justify-center p-5 border border-gray-100 rounded-2xl hover:border-[#006B3F]/30 hover:bg-[#006B3F]/5 transition-all text-center group"
          >
            <div className="p-3 bg-rose-50 text-rose-600 rounded-xl group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-gray-950 mt-3">Inquiries</p>
          </Link>

          <Link
            href="/administrator/users"
            className="flex flex-col items-center justify-center p-5 border border-gray-100 rounded-2xl hover:border-[#006B3F]/30 hover:bg-[#006B3F]/5 transition-all text-center group"
          >
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-gray-950 mt-3">Manage Users</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
