"use client";
// Attachment preview modal for images and PDFs
interface AttachmentPreviewModalProps {
  application: LoanApplication | null;
  onClose: () => void;
}

function AttachmentPreviewModal({ application, onClose }: AttachmentPreviewModalProps) {
  if (!application) return null;
  const renderPreview = (file: string | undefined, label: string) => {
    if (!file) return null;
    if (file.startsWith('data:image/')) {
      return (
        <div>
          <div className="font-semibold mb-1">{label}</div>
          <img src={file} alt={label} className="max-h-96 w-auto border rounded shadow" style={{ maxWidth: '100%' }} />
        </div>
      );
    } else if (file.startsWith('data:application/pdf')) {
      return (
        <div>
          <div className="font-semibold mb-1">{label}</div>
          <object data={file} type="application/pdf" width="100%" height="400px">
            <a href={file} target="_blank" rel="noopener noreferrer">View {label}</a>
          </object>
        </div>
      );
    } else if (file.startsWith('data:')) {
      return (
        <div>
          <div className="font-semibold mb-1">{label}</div>
          <a href={file} download className="text-blue-600 underline">Download {label}</a>
        </div>
      );
    } else {
      return (
        <div>
          <div className="font-semibold mb-1">{label}</div>
          <object data={`data:application/pdf;base64,${file}`} type="application/pdf" width="100%" height="400px">
            <a href={`data:application/pdf;base64,${file}`} target="_blank" rel="noopener noreferrer">View {label}</a>
          </object>
        </div>
      );
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close preview"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-4">Verification Attachments</h2>
        <div className="space-y-4">
          {renderPreview(application.idFile, 'Valid ID')}
          {renderPreview(application.depositSlipOrEwallet, 'Deposit Slip/E-wallet')}
          {renderPreview(application.memberWithIDAndSlip, 'Member Photo')}
          {!application.idFile && !application.depositSlipOrEwallet && !application.memberWithIDAndSlip && (
            <div className="text-gray-500">No attachments uploaded.</div>
          )}
        </div>
      </div>
    </div>
  );
}
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
  idFile?: string;
  depositSlipOrEwallet?: string;
  memberWithIDAndSlip?: string;
}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* ...existing code for statistics cards... */}
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
          {/* ...repeat for other statistics cards... */}
        </div>

        {/* Applications Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Loan Applications</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage loan applications for Miagao branch</p>
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
                      {/* Attachments links */}
                      {application.idFile && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => setPreviewModalApp(application)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                          >
                            Verification
                          </button>
                          <button
                            onClick={() => handleDelete(application.id, application.name)}
                            className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))
                        </li>
              ))
        </div>
        {previewModalApp && (
          <AttachmentPreviewModal application={previewModalApp} onClose={() => setPreviewModalApp(null)} />
              ))
  const rejectedApplications = branchApplications.filter(app => app.status === 'rejected');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Miagao Branch Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {session?.user?.name ?? ''}</p>
            </div>
            <button onClick={handleSignOut} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">Sign Out</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage loan applications for Miagao branch</p>
          </div>
              </ul>
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
                      ))
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm inline-flex items-center"
                      >
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        PDF
                      </a>
                      {/* Attachments links */}
                      {application.idFile && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => setPreviewModalApp(application)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                          >
                            Verification
                          </button>
                          <button
                            onClick={() => handleDelete(application.id, application.name)}
                            className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            )}
          </ul>
        </div>
      </div>
    </div>
    {previewModalApp && (
      <AttachmentPreviewModal application={previewModalApp} onClose={() => setPreviewModalApp(null)} />
    )}
  );
}

