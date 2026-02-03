  // Helper to render file preview or download link
  function renderAttachment(file: any, label: string) {
    if (!file) return <span className="text-gray-400">No file uploaded</span>;
    if (typeof file === 'string' && file.startsWith('http')) {
      return <a href={file} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">View {label}</a>;
    }
    if (typeof file === 'string' && file.startsWith('data:image/')) {
      return <img src={file} alt={label} className="max-w-xs max-h-64 border border-gray-300 rounded my-2" />;
    }
    if (typeof file === 'string' && file.startsWith('data:application/pdf')) {
      return <a href={file} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">View PDF</a>;
    }
    if (file && file.name && file.type && file.type.startsWith('image/')) {
      // File object (not string)
      return <span>{file.name}</span>;
    }
    return <span className="text-gray-400">File uploaded but not accessible</span>;
  }
      {/* Attachments Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Attachments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Scanned copy of 2 Valid IDs with 3 specimen signatures</label>
            {renderAttachment(application.validIDsAndSignatures, 'Valid IDs and Signatures')}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Scanned copy of validated deposit slip or screenshot of verified e-wallet account</label>
            {renderAttachment(application.depositSlipOrEwallet, 'Deposit Slip or E-wallet')}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Picture of Member Borrower holding valid ID and validated deposit slip</label>
            {renderAttachment(application.memberWithIDAndSlip, 'Member with ID and Slip')}
          </div>
        </div>
      </div>
'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface LoanApplication {
  id: string;
  name: string;
  pbNo: string;
  contactNo: string;
  address: string;
  loanType: string;
  idType: string;
  idFile?: string;
  loanAmount: number;
  term: number;
  purpose: string;
  promissoryNoteAmount?: number;
  promissoryNoteTerm?: string;
  promissoryNotePaymentSchedule?: string;
  promissoryNoteStartingOn?: string;
  makerName1?: string;
  makerName2?: string;
  coMakerName1?: string;
  coMakerName2?: string;
  witnessName1?: string;
  witnessName2?: string;
  assignmentAmount?: number;
  regularSavings?: string;
  ultimaSavings?: string;
  alkansyaSavings?: string;
  timeDeposit?: string;
  otherDeposits?: string;
  assignmentPbNo?: string;
  shareCapital?: string;
  signatureDate?: string;
  assignmentMaker1?: string;
  assignmentMaker2?: string;
  assignmentCoMaker1?: string;
  assignmentCoMaker2?: string;
  assignmentWitness1?: string;
  assignmentWitness2?: string;
  makerSpouseName?: string;
  assignmentCoMakerName1?: string;
  assignmentCoMakerName2?: string;
  assignmentWitnessName1?: string;
  assignmentWitnessName2?: string;
  memberIncome?: number;
  spouseIncome?: number;
  otherIncome?: number;
  businessIncome?: number;
  foodExpense?: number;
  clothingExpense?: number;
  shelterExpense?: number;
  educationExpense?: number;
  electricWaterExpense?: number;
  helperExpense?: number;
  loanRepaymentExpense?: number;
  miscellaneousExpense?: number;
  netIncome?: number;
  committeeApproved?: number;
  committeeReduced?: number;
  receivedBy?: string;
  checkedBy?: string;
  approvedBy?: string;
  referenceNo?: string;
  loanTypeDisclosure?: string;
  loanAmountDisclosure?: number;
  charges?: number;
  netProceeds?: number;
  effectiveInterestRate?: number;
  nominalInterestRate?: number;
  penalty?: number;
  interestRate?: number;
  voucherNo?: string;
  mop?: string;
  processor?: string;
  status: 'pending' | 'approved' | 'rejected';
  reviewedBy?: string;
  reviewedAt?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export default function LoanApplicationDetailPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const [application, setApplication] = useState<LoanApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.push('/administrator/login');
      return;
    }

    fetchApplication();
  }, [session, status, params.id]);

  const fetchApplication = async () => {
    try {
      // Request debug info from the API to surface session data for troubleshooting
      const response = await fetch(`/api/administrator/loan-applications/${params.id}?debug=1`, { credentials: 'same-origin' });
      if (response.ok) {
        const data = await response.json();
        setApplication(data);
        setNotes(data.notes || '');
      } else {
        let msg = '';
        try {
          const body = await response.json();
          msg = body?.error || JSON.stringify(body);
        } catch (e) {
          msg = await response.text().catch(() => 'No response body');
        }
        console.error(`Failed fetching application ${params.id}:`, response.status, msg);
        alert(`Failed to load application (status ${response.status}): ${msg}`);
        router.push('/administrator/loan-applications');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching application:', error);
      setLoading(false);
    }
  };

  const updateStatus = async (newStatus: 'approved' | 'rejected') => {
    if (!application) return;

    setUpdating(true);
    try {
      const response = await fetch(`/api/administrator/loan-applications/${application.id}`, {
        method: 'PUT',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus, notes }),
      });

      if (response.ok) {
        await fetchApplication(); // Refresh data
      }
    } catch (error) {
      console.error('Error updating application:', error);
    } finally {
      setUpdating(false);
    }
  };

  const deleteApplication = async () => {
    if (!application) return;
    
    if (!confirm('Are you sure you want to delete this loan application? This action cannot be undone.')) {
      return;
    }

    setUpdating(true);
    try {
      const response = await fetch(`/api/administrator/loan-applications/${application.id}`, {
        method: 'DELETE',
        credentials: 'same-origin',
      });

      if (response.ok) {
        alert('Loan application deleted successfully');
        router.push('/administrator/loan-applications');
      } else {
        const data = await response.json();
        alert(`Failed to delete application: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('Failed to delete application');
    } finally {
      setUpdating(false);
    }
  };

  const downloadApplication = async () => {
    if (!application) return;

    try {
      // Map application data to formData format expected by fill-pdf API
      const formData = {
        name: application.name,
        pbNo: application.pbNo,
        contactNo: application.contactNo,
        address: application.address,
        loanType: application.loanType,
        loanAmount: application.loanAmount.toString(),
        term: application.term.toString(),
        purpose: application.purpose,
        idType: application.idType,
        promissoryNoteAmount: application.promissoryNoteAmount?.toString() || '',
        promissoryNoteTerm: application.promissoryNoteTerm || '',
        promissoryNotePaymentSchedule: application.promissoryNotePaymentSchedule || '',
        promissoryNoteStartingOn: application.promissoryNoteStartingOn || '',
        assignmentAmount: application.assignmentAmount?.toString() || '',
        assignmentPbNo: application.assignmentPbNo || '',
        regularSavings: application.regularSavings || '',
        ultimaSavings: application.ultimaSavings || '',
        alkansyaSavings: application.alkansyaSavings || '',
        timeDeposit: application.timeDeposit || '',
        otherDeposits: application.otherDeposits || '',
        shareCapital: application.shareCapital || '',
        signatureDate: application.signatureDate || '',
        makerName1: application.makerName1 || '',
        makerName2: application.makerName2 || '',
        coMakerName1: application.coMakerName1 || '',
        coMakerName2: application.coMakerName2 || '',
        witnessName1: application.witnessName1 || '',
        witnessName2: application.witnessName2 || '',
        assignmentMaker1: application.assignmentMaker1 || '',
        assignmentMaker2: application.assignmentMaker2 || '',
        assignmentCoMaker1: application.assignmentCoMaker1 || '',
        assignmentCoMaker2: application.assignmentCoMaker2 || '',
        assignmentWitness1: application.assignmentWitness1 || '',
        assignmentWitness2: application.assignmentWitness2 || '',
        makerSpouseName: application.makerSpouseName || '',
        assignmentCoMakerName1: application.assignmentCoMakerName1 || '',
        assignmentCoMakerName2: application.assignmentCoMakerName2 || '',
        assignmentWitnessName1: application.assignmentWitnessName1 || '',
        assignmentWitnessName2: application.assignmentWitnessName2 || '',
        memberIncome: application.memberIncome?.toString() || '',
        spouseIncome: application.spouseIncome?.toString() || '',
        otherIncome: application.otherIncome?.toString() || '',
        businessIncome: application.businessIncome?.toString() || '',
        foodExpense: application.foodExpense?.toString() || '',
        clothingExpense: application.clothingExpense?.toString() || '',
        shelterExpense: application.shelterExpense?.toString() || '',
        educationExpense: application.educationExpense?.toString() || '',
        electricWaterExpense: application.electricWaterExpense?.toString() || '',
        helperExpense: application.helperExpense?.toString() || '',
        loanRepaymentExpense: application.loanRepaymentExpense?.toString() || '',
        miscellaneousExpense: application.miscellaneousExpense?.toString() || '',
        netIncome: application.netIncome?.toString() || '',
        committeeApproved: application.committeeApproved?.toString() || '',
        committeeReduced: application.committeeReduced?.toString() || '',
        receivedBy: application.receivedBy || '',
        checkedBy: application.checkedBy || '',
        approvedBy: application.approvedBy || '',
        referenceNo: application.referenceNo || '',
        loanTypeDisclosure: application.loanTypeDisclosure || '',
        loanAmountDisclosure: application.loanAmountDisclosure?.toString() || '',
        charges: application.charges?.toString() || '',
        netProceeds: application.netProceeds?.toString() || '',
        effectiveInterestRate: application.effectiveInterestRate?.toString() || '',
        nominalInterestRate: application.nominalInterestRate?.toString() || '',
        penalty: application.penalty?.toString() || '',
        interestRate: application.interestRate?.toString() || '',
        voucherNo: application.voucherNo || '',
        mop: application.mop || '',
        processor: application.processor || '',
      };

      const response = await fetch('/api/fill-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `loan-application-${application.name.replace(/\s+/g, '-')}-${application.id.slice(-8)}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        alert('Failed to generate PDF. Please try again.');
      }
    } catch (error) {
      console.error('Error downloading application:', error);
      alert('An error occurred while downloading the application.');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!session || !application) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Loan Application Details</h1>
            <p className="text-gray-600">Review application #{application.id.slice(-8)}</p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={`/api/administrator/loan-applications/${application.id}/pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              View PDF
            </a>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
            </span>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <p className="mt-1 text-sm text-gray-900">{application.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">PB Number</label>
            <p className="mt-1 text-sm text-gray-900">{application.pbNo}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <p className="mt-1 text-sm text-gray-900">{application.contactNo}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Loan Type</label>
            <p className="mt-1 text-sm text-gray-900">{application.loanType}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <p className="mt-1 text-sm text-gray-900">{application.address}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">ID Type</label>
            <p className="mt-1 text-sm text-gray-900">{application.idType}</p>
          </div>
          {application.idFile && (
            <div>
              <label className="block text-sm font-medium text-gray-700">ID File</label>
              <div className="mt-1">
                {application.idFile.startsWith('http') ? (
                  <a href={application.idFile} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    View ID File
                  </a>
                ) : application.idFile.startsWith('data:') ? (
                  <div>
                    {application.idFile.includes('data:image/') ? (
                      <img
                        src={application.idFile}
                        alt="Uploaded ID"
                        className="max-w-full h-auto max-h-64 border border-gray-300 rounded"
                      />
                    ) : (
                      <a
                        href={application.idFile}
                        download="id-file"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Download ID File
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">File uploaded but not accessible for viewing</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Loan Details */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Loan Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Loan Amount</label>
            <p className="mt-1 text-sm text-gray-900">₱{application.loanAmount.toLocaleString()}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Term</label>
            <p className="mt-1 text-sm text-gray-900">{application.term} months</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Purpose</label>
            <p className="mt-1 text-sm text-gray-900">{application.purpose}</p>
          </div>
        </div>
      </div>

      {/* Income and Expenses */}
      {application.memberIncome && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Income and Expenses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-medium text-gray-900 mb-3">Income Sources</h3>
              <div className="space-y-2">
                {application.memberIncome && <div className="flex justify-between"><span>Member Income:</span><span>₱{application.memberIncome.toLocaleString()}</span></div>}
                {application.spouseIncome && <div className="flex justify-between"><span>Spouse Income:</span><span>₱{application.spouseIncome.toLocaleString()}</span></div>}
                {application.otherIncome && <div className="flex justify-between"><span>Other Income:</span><span>₱{application.otherIncome.toLocaleString()}</span></div>}
                {application.businessIncome && <div className="flex justify-between"><span>Business Income:</span><span>₱{application.businessIncome.toLocaleString()}</span></div>}
                {application.netIncome && <div className="flex justify-between font-medium"><span>Net Income:</span><span>₱{application.netIncome.toLocaleString()}</span></div>}
              </div>
            </div>
            <div>
              <h3 className="text-md font-medium text-gray-900 mb-3">Monthly Expenses</h3>
              <div className="space-y-2">
                {application.foodExpense && <div className="flex justify-between"><span>Food:</span><span>₱{application.foodExpense.toLocaleString()}</span></div>}
                {application.shelterExpense && <div className="flex justify-between"><span>Shelter:</span><span>₱{application.shelterExpense.toLocaleString()}</span></div>}
                {application.educationExpense && <div className="flex justify-between"><span>Education:</span><span>₱{application.educationExpense.toLocaleString()}</span></div>}
                {application.loanRepaymentExpense && <div className="flex justify-between"><span>Loan Repayment:</span><span>₱{application.loanRepaymentExpense.toLocaleString()}</span></div>}
                {application.miscellaneousExpense && <div className="flex justify-between"><span>Miscellaneous:</span><span>₱{application.miscellaneousExpense.toLocaleString()}</span></div>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signatories */}
      {(application.makerName1 || application.coMakerName1 || application.witnessName1) && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Signatories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Maker</label>
              <p className="mt-1 text-sm text-gray-900">{application.makerName1 || 'N/A'}</p>
              {application.makerName2 && <p className="mt-1 text-sm text-gray-900">{application.makerName2}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Co-Maker</label>
              <p className="mt-1 text-sm text-gray-900">{application.coMakerName1 || 'N/A'}</p>
              {application.coMakerName2 && <p className="mt-1 text-sm text-gray-900">{application.coMakerName2}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Witness</label>
              <p className="mt-1 text-sm text-gray-900">{application.witnessName1 || 'N/A'}</p>
              {application.witnessName2 && <p className="mt-1 text-sm text-gray-900">{application.witnessName2}</p>}
            </div>
          </div>
        </div>
      )}

      {/* Review Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Review Application</h2>

        {application.status === 'pending' ? (
          <div className="space-y-4">
            {session?.user?.role === 'branch' ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Review Notes</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add any notes or comments about this application..."
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => updateStatus('approved')}
                    disabled={updating}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
                  >
                    {updating ? 'Processing...' : 'Approve Application'}
                  </button>
                  <button
                    onClick={() => updateStatus('rejected')}
                    disabled={updating}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
                  >
                    {updating ? 'Processing...' : 'Reject Application'}
                  </button>
                  <button
                    onClick={deleteApplication}
                    disabled={updating}
                    className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 disabled:opacity-50 transition-colors"
                  >
                    {updating ? 'Processing...' : 'Delete Application'}
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Administrator View:</strong> You have read-only access. Only branch users can approve or reject loan applications.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Review Notes</label>
              <p className="mt-1 text-sm text-gray-900">{application.notes || 'No notes provided'}</p>
            </div>

            {application.reviewedBy && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Reviewed By</label>
                  <p className="mt-1 text-sm text-gray-900">{application.reviewedBy}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Reviewed At</label>
                  <p className="mt-1 text-sm text-gray-900">
                    {application.reviewedAt ? new Date(application.reviewedAt).toLocaleString() : 'N/A'}
                  </p>
                </div>
              </div>
            )}
            
            {session?.user?.role === 'branch' && (
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={deleteApplication}
                  disabled={updating}
                  className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 disabled:opacity-50 transition-colors"
                >
                  {updating ? 'Processing...' : 'Delete Application'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Download Application Button */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => router.push('/administrator/loan-applications')}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          ← Back to Applications
        </button>
        <button
          onClick={downloadApplication}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Download Application PDF
        </button>
      </div>
    </div>
  );
}
