"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { 
  Wallet, FileText, CreditCard, User, Building2, Trash2, 
  AlertTriangle, CheckCircle, Clock, Upload, Package,
  Plus, Eye, Home
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

function DashboardContent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentTab = searchParams.get('tab') || 'dashboard';
  
  // Dashboard state
  const [showLoanForm, setShowLoanForm] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loadingApplications, setLoadingApplications] = useState(true);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form state
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileNames, setFileNames] = useState({
    validIDsAndSignatures: '',
    depositSlipOrEwallet: '',
    memberWithIDAndSlip: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    passbookNo: '',
    pbNo: '',
    address: '',
    email: '',
    contactNo: '',
    loanType: '',
    idType: '',
    term: '',
    amountApplied: '',
    pesosOnly: '',
    purpose: '',
    amountInWords: '',
    amountInPesos: '',
    savingsDepositRegular: '',
    savingsDepositUltima: '',
    savingsDepositAlkansya: '',
    timeDeposit: '',
    otherDeposits: '',
    branch: '',
    shareCapital: '',
    incomeMember: '',
    incomeSpouse: '',
    incomeOtherFamily: '',
    incomeBusiness: '',
    otherIncome: '',
    totalFamilyIncome: '',
    food: '',
    clothing: '',
    shelter: '',
    education: '',
    electricWaterBills: '',
    helper: '',
    loanRepayments: '',
    miscellaneousExpense: '',
    totalFamilyExpenses: '',
    netIncome: '',
    declarationAccepted: false,
    termsAccepted: false,
    validIDsAndSignatures: null,
    depositSlipOrEwallet: null,
    memberWithIDAndSlip: null,
  });

  // Sync showLoanForm with URL tab parameter
  useEffect(() => {
    if (currentTab === 'apply') {
      setShowLoanForm(true);
    } else {
      setShowLoanForm(false);
    }
  }, [currentTab]);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    } else {
      if (session.user?.email) {
        setFormData(prev => ({ ...prev, email: session.user?.email || '' }));
      }
      if (session.user?.name) {
        setFormData(prev => ({ ...prev, name: session.user?.name || '' }));
      }
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

  useEffect(() => {
    const totalIncome =
      (parseFloat(formData.incomeMember || '0') || 0) +
      (parseFloat(formData.incomeSpouse || '0') || 0) +
      (parseFloat(formData.incomeOtherFamily || '0') || 0) +
      (parseFloat(formData.incomeBusiness || '0') || 0) +
      (parseFloat(formData.otherIncome || '0') || 0);

    const totalExpenses =
      (parseFloat(formData.food || '0') || 0) +
      (parseFloat(formData.clothing || '0') || 0) +
      (parseFloat(formData.shelter || '0') || 0) +
      (parseFloat(formData.education || '0') || 0) +
      (parseFloat(formData.electricWaterBills || '0') || 0) +
      (parseFloat(formData.helper || '0') || 0) +
      (parseFloat(formData.loanRepayments || '0') || 0) +
      (parseFloat(formData.miscellaneousExpense || '0') || 0);

    const netIncome = totalIncome - totalExpenses;

    setFormData(prev => ({
      ...prev,
      totalFamilyIncome: totalIncome ? totalIncome.toFixed(2) : '',
      totalFamilyExpenses: totalExpenses ? totalExpenses.toFixed(2) : '',
      netIncome: netIncome ? netIncome.toFixed(2) : '',
    }));
  }, [
    formData.incomeMember, formData.incomeSpouse, formData.incomeOtherFamily,
    formData.incomeBusiness, formData.otherIncome, formData.food, formData.clothing,
    formData.shelter, formData.education, formData.electricWaterBills, formData.helper,
    formData.loanRepayments, formData.miscellaneousExpense
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const files = (e.target as HTMLInputElement).files;

    setFormData(prev => {
      if (name === 'passbookNo') {
        return { ...prev, passbookNo: value, pbNo: value };
      }
      if (type === 'file') {
        setFileNames(f => ({ ...f, [name]: files && files[0] ? files[0].name : '' }));
      }
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : type === 'file' ? (files?.[0] || null) : value
      };
    });
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    try {
      const validIDsAndSignatures = formData.validIDsAndSignatures ? await fileToBase64(formData.validIDsAndSignatures) : null;
      const depositSlipOrEwallet = formData.depositSlipOrEwallet ? await fileToBase64(formData.depositSlipOrEwallet) : null;
      const memberWithIDAndSlip = formData.memberWithIDAndSlip ? await fileToBase64(formData.memberWithIDAndSlip) : null;

      const payload = {
        ...formData,
        validIDsAndSignatures,
        depositSlipOrEwallet,
        memberWithIDAndSlip,
      };

      const res = await fetch('/api/loan-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData: payload }),
      });

      if (res.ok) {
        setSubmitMessage('Application submitted successfully!');
        setFormData({
          name: session?.user?.name || '',
          passbookNo: '', pbNo: '', address: '', email: session?.user?.email || '',
          contactNo: '', loanType: '', idType: '', term: '', amountApplied: '',
          pesosOnly: '', purpose: '', amountInWords: '', amountInPesos: '',
          savingsDepositRegular: '', savingsDepositUltima: '', savingsDepositAlkansya: '',
          timeDeposit: '', otherDeposits: '', branch: '', shareCapital: '',
          incomeMember: '', incomeSpouse: '', incomeOtherFamily: '', incomeBusiness: '',
          otherIncome: '', totalFamilyIncome: '', food: '', clothing: '', shelter: '',
          education: '', electricWaterBills: '', helper: '', loanRepayments: '',
          miscellaneousExpense: '', totalFamilyExpenses: '', netIncome: '',
          declarationAccepted: false, termsAccepted: false,
          validIDsAndSignatures: null, depositSlipOrEwallet: null, memberWithIDAndSlip: null,
        });
        setCurrentStep(1);
        setShowLoanForm(false);
        router.push('/dashboard?tab=loans');
        const res = await fetch("/api/loan-applications/user");
        if (res.ok) {
          const data = await res.json();
          setApplications(data);
        }
      } else {
        const data = await res.json();
        setSubmitMessage(data.error || 'Submission failed.');
      }
    } catch (err) {
      setSubmitMessage('Submission failed. Please try again.');
    }
    setIsSubmitting(false);
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

  const nextStep = () => setCurrentStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setCurrentStep(s => Math.max(s - 1, 1));

  const steps = [
    { number: 1, title: 'Personal', description: 'Personal Info', icon: User },
    { number: 2, title: 'Loan', description: 'Loan Details', icon: CreditCard },
    { number: 3, title: 'Financial', description: 'Income & Expenses', icon: Wallet },
    { number: 4, title: 'Requirements', description: 'Upload & Review', icon: FileText },
  ];

  // Calculate stats
  const pendingCount = applications.filter(a => a.status === 'pending').length;
  const approvedCount = applications.filter(a => a.status === 'approved').length;
  const rejectedCount = applications.filter(a => a.status === 'rejected').length;

  const navigateToTab = (tab: string) => {
    router.push(`/dashboard?tab=${tab}`);
  };

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

  // Render content based on current tab
  const renderContent = () => {
    // Apply for Loan tab - show just the form
    if (currentTab === 'apply') {
      return renderLoanForm();
    }

    // My Loans tab - show only applications
    if (currentTab === 'loans') {
      return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
          <div className="mb-6">
            <button 
              onClick={() => navigateToTab('dashboard')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              ← Back to Dashboard
            </button>
          </div>
          {renderApplicationsSection()}
        </div>
      );
    }

    // Upload tab - show upload section
    if (currentTab === 'upload') {
      return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
          <div className="mb-6">
            <button 
              onClick={() => navigateToTab('dashboard')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              ← Back to Dashboard
            </button>
          </div>
          {renderUploadSection()}
        </div>
      );
    }

    // Default: Dashboard view
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

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => navigateToTab('apply')}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Plus className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">New Application</h3>
                  <p className="text-blue-100 text-sm">Apply for a loan</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => navigateToTab('loans')}
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
              onClick={() => navigateToTab('upload')}
              className="group bg-white hover:bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Upload className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg text-gray-900">Upload Docs</h3>
                  <p className="text-gray-500 text-sm">Submit required files</p>
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

          {/* Loan Packages Carousel */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-600" />
              Available Loan Packages
            </h2>
            <LoanPackagesCarousel />
          </div>

          {/* My Applications Section */}
          {renderApplicationsSection(false)}
        </div>
      </>
    );
  };

  const renderApplicationsSection = (showBackButton: boolean = true) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
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
          <button
            onClick={() => navigateToTab('apply')}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            <Plus className="w-5 h-5" />
            Apply for a Loan
          </button>
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

  const renderUploadSection = () => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Upload className="w-5 h-5 text-purple-600" />
        Upload Documents
      </h2>
      <p className="text-gray-500 mb-6">Upload your required documents for loan applications</p>
      
      <div className="space-y-4">
        <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
          <label className="block text-sm font-medium text-purple-900 mb-2">
            📄 Scanned copy of 2 Valid IDs with 3 specimen signatures
          </label>
          <input 
            type="file" 
            className="w-full px-3 py-2 rounded-lg border border-purple-200" 
          />
        </div>

        <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
          <label className="block text-sm font-medium text-purple-900 mb-2">
            💳 Scanned copy of validated deposit slip or e-wallet
          </label>
          <input 
            type="file" 
            className="w-full px-3 py-2 rounded-lg border border-purple-200" 
          />
        </div>

        <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
          <label className="block text-sm font-medium text-purple-900 mb-2">
            📸 Picture of member holding ID and deposit slip
          </label>
          <input 
            type="file" 
            className="w-full px-3 py-2 rounded-lg border border-purple-200" 
          />
        </div>

        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition">
          Upload Documents
        </button>
      </div>
    </div>
  );

  const renderLoanForm = () => (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
      <div className="mb-6">
        <button 
          onClick={() => navigateToTab('dashboard')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Loan Application Form */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white p-6">
          <h2 className="text-2xl font-bold">New Loan Application</h2>
          <p className="text-blue-100 text-sm mt-1">Complete the form below to apply for a loan</p>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mt-6 px-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  currentStep > index + 1 
                    ? 'bg-green-500 text-white' 
                    : currentStep === index + 1
                    ? 'bg-white text-blue-600'
                    : 'bg-blue-500/50 text-white'
                }`}>
                  {currentStep > index + 1 ? '✓' : index + 1}
                </div>
                <span className={`text-xs mt-2 text-center hidden sm:block ${currentStep === index + 1 ? 'text-white font-medium' : 'text-blue-200'}`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {submitMessage && (
            <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
              submitMessage.includes('success') 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {submitMessage.includes('success') ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertTriangle className="w-5 h-5" />
              )}
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Passbook No.</label>
                    <input 
                      name="passbookNo" 
                      value={formData.passbookNo} 
                      onChange={handleInputChange} 
                      placeholder="Enter passbook number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="your@email.com"
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                    <input 
                      name="contactNo" 
                      value={formData.contactNo} 
                      onChange={handleInputChange} 
                      placeholder="09xx..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                    <input 
                      name="branch" 
                      value={formData.branch} 
                      onChange={handleInputChange} 
                      placeholder="e.g. San Jose"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      required 
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input 
                      name="address" 
                      value={formData.address} 
                      onChange={handleInputChange} 
                      placeholder="Enter your complete address"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      required 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Loan Details */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5 text-yellow-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Loan Details</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Loan Type</label>
                    <input 
                      name="loanType" 
                      value={formData.loanType} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Regular, Emergency"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Term (months)</label>
                    <input 
                      name="term" 
                      value={formData.term} 
                      onChange={handleInputChange} 
                      placeholder="e.g. 12, 24, 36"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount Applied (₱)</label>
                    <input 
                      name="amountApplied" 
                      value={formData.amountApplied} 
                      onChange={handleInputChange} 
                      placeholder="Enter amount"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Loan</label>
                    <input 
                      name="purpose" 
                      value={formData.purpose} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Business, Medical, Education"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition"
                      required 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Financial Information */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Wallet className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Financial Information</h3>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4 mb-4">
                  <h4 className="font-medium text-green-900 mb-3">Income Sources</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input name="incomeMember" value={formData.incomeMember} onChange={handleInputChange} placeholder="Member Income" className="px-3 py-2 rounded-lg border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100" />
                    <input name="incomeSpouse" value={formData.incomeSpouse} onChange={handleInputChange} placeholder="Spouse Income" className="px-3 py-2 rounded-lg border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100" />
                    <input name="incomeBusiness" value={formData.incomeBusiness} onChange={handleInputChange} placeholder="Business Income" className="px-3 py-2 rounded-lg border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100" />
                    <input name="otherIncome" value={formData.otherIncome} onChange={handleInputChange} placeholder="Other Income" className="px-3 py-2 rounded-lg border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100" />
                  </div>
                  <div className="mt-3 pt-3 border-t border-green-200">
                    <span className="text-sm text-green-800 font-medium">Total: ₱{formData.totalFamilyIncome || '0'}</span>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-4 mb-4">
                  <h4 className="font-medium text-red-900 mb-3">Monthly Expenses</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input name="food" value={formData.food} onChange={handleInputChange} placeholder="Food" className="px-3 py-2 rounded-lg border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-100" />
                    <input name="clothing" value={formData.clothing} onChange={handleInputChange} placeholder="Clothing" className="px-3 py-2 rounded-lg border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-100" />
                    <input name="shelter" value={formData.shelter} onChange={handleInputChange} placeholder="Shelter" className="px-3 py-2 rounded-lg border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-100" />
                    <input name="education" value={formData.education} onChange={handleInputChange} placeholder="Education" className="px-3 py-2 rounded-lg border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-100" />
                    <input name="electricWaterBills" value={formData.electricWaterBills} onChange={handleInputChange} placeholder="Electric/Water" className="px-3 py-2 rounded-lg border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-100" />
                    <input name="loanRepayments" value={formData.loanRepayments} onChange={handleInputChange} placeholder="Loan Repayments" className="px-3 py-2 rounded-lg border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-100" />
                  </div>
                  <div className="mt-3 pt-3 border-t border-red-200">
                    <span className="text-sm text-red-800 font-medium">Total: ₱{formData.totalFamilyExpenses || '0'}</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-900">Net Income</span>
                    <span className="text-lg font-bold text-blue-700">₱{formData.netIncome || '0'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Requirements */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Requirements & Documents</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                    <label className="block text-sm font-medium text-purple-900 mb-2">
                      📄 Scanned copy of 2 Valid IDs with 3 specimen signatures
                    </label>
                    <input 
                      type="file" 
                      name="validIDsAndSignatures" 
                      onChange={handleInputChange} 
                      className="w-full px-3 py-2 rounded-lg border border-purple-200" 
                    />
                    {fileNames.validIDsAndSignatures && (
                      <p className="text-xs text-purple-600 mt-1">✓ Selected: {fileNames.validIDsAndSignatures}</p>
                    )}
                  </div>

                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                    <label className="block text-sm font-medium text-purple-900 mb-2">
                      💳 Scanned copy of validated deposit slip or e-wallet
                    </label>
                    <input 
                      type="file" 
                      name="depositSlipOrEwallet" 
                      onChange={handleInputChange} 
                      className="w-full px-3 py-2 rounded-lg border border-purple-200" 
                    />
                    {fileNames.depositSlipOrEwallet && (
                      <p className="text-xs text-purple-600 mt-1">✓ Selected: {fileNames.depositSlipOrEwallet}</p>
                    )}
                  </div>

                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                    <label className="block text-sm font-medium text-purple-900 mb-2">
                      📸 Picture of member holding ID and deposit slip
                    </label>
                    <input 
                      type="file" 
                      name="memberWithIDAndSlip" 
                      onChange={handleInputChange} 
                      className="w-full px-3 py-2 rounded-lg border border-purple-200" 
                    />
                    {fileNames.memberWithIDAndSlip && (
                      <p className="text-xs text-purple-600 mt-1">✓ Selected: {fileNames.memberWithIDAndSlip}</p>
                    )}
                  </div>
                </div>

                {/* Declaration */}
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3">📋 Declaration and Consent</h4>
                  <ul className="text-sm text-blue-800 space-y-2 mb-4">
                    <li>✓ I declare that the information provided is true and correct.</li>
                    <li>✓ I authorize SJMPC to verify any information provided.</li>
                    <li>✓ I consent to the collection and processing of my personal data.</li>
                    <li>✓ I understand that false statements may result in denial.</li>
                  </ul>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        id="declarationAccepted" 
                        name="declarationAccepted" 
                        checked={formData.declarationAccepted} 
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 rounded" 
                        required 
                      />
                      <span className="text-sm text-gray-700">I have read and agree to the Declaration and Consent</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        id="termsAccepted" 
                        name="termsAccepted" 
                        checked={formData.termsAccepted} 
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 rounded" 
                        required 
                      />
                      <span className="text-sm text-gray-700">I have read and agree to the Terms and Conditions</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4 border-t border-gray-100">
              {currentStep > 1 ? (
                <button 
                  type="button" 
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition"
                >
                  ← Previous
                </button>
              ) : (
                <button 
                  type="button" 
                  onClick={() => navigateToTab('dashboard')}
                  className="px-6-gray-100 hover py-3 bg:bg-gray-200 text-gray-700 rounded-xl font-medium transition"
                >
                  Cancel
                </button>
              )}
              {currentStep < totalSteps ? (
                <button 
                  type="button" 
                  onClick={nextStep}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition"
                >
                  Next →
                </button>
              ) : (
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : '✓ Submit Application'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return renderContent();
}

// Loading fallback
function DashboardLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function UserDashboard() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardContent />
    </Suspense>
  );
}
