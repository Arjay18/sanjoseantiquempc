'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
  status: 'new' | 'responded' | 'closed';
  respondedBy?: string;
  respondedAt?: string;
  response?: string;
  createdAt: string;
  updatedAt: string;
}

export default function ContactAdminPage() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null);
  const [response, setResponse] = useState('');
  const [isResponding, setIsResponding] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await fetch('/api/contact');
      if (response.ok) {
        const data = await response.json();
        setInquiries(data.inquiries);
        setError(null);
      } else {
        const errorMessage = `Failed to fetch inquiries: ${response.statusText}`;
        console.error(errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      const errorMessage = `Failed to fetch inquiries: ${error instanceof Error ? error.message : 'Unknown error'}`;
      console.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (inquiryId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/contact/${inquiryId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchInquiries(); // Refresh the list
      } else {
        console.error('Failed to update status:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleRespond = async () => {
    if (!selectedInquiry || !response.trim()) return;

    setIsResponding(true);
    try {
      const responseData = await fetch(`/api/contact/${selectedInquiry.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'responded',
          response: response.trim(),
          respondedBy: 'Admin', // You can get this from auth context
          respondedAt: new Date().toISOString(),
        }),
      });

      if (responseData.ok) {
        setSelectedInquiry(null);
        setResponse('');
        fetchInquiries();
      } else {
        console.error('Failed to send response:', responseData.statusText);
      }
    } catch (error) {
      console.error('Failed to send response:', error);
    } finally {
      setIsResponding(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-red-100 text-red-800';
      case 'responded':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getInquiryTypeLabel = (type: string) => {
    const types = {
      general: 'General Inquiry',
      membership: 'Membership Information',
      loans: 'Loan Services',
      savings: 'Savings & Deposits',
      insurance: 'Insurance Products',
      complaint: 'Complaint/Feedback',
      other: 'Other'
    };
    return types[type as keyof typeof types] || type;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Contact Inquiries</h1>
            <p className="mt-2 text-gray-600">Manage and respond to contact form submissions</p>
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/admin"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Inquiries List */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                All Inquiries ({inquiries.length})
              </h2>
            </div>
            <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
              {inquiries.length === 0 ? (
                <div className="px-6 py-8 text-center text-gray-500">
                  No contact inquiries yet.
                </div>
              ) : (
                inquiries.map((inquiry) => (
                  <div
                    key={inquiry.id}
                    className={`px-6 py-4 hover:bg-gray-50 cursor-pointer ${
                      selectedInquiry?.id === inquiry.id ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => setSelectedInquiry(inquiry)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-sm font-medium text-gray-900">
                            {inquiry.name}
                          </h3>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(inquiry.status)}`}>
                            {inquiry.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{inquiry.subject}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>{getInquiryTypeLabel(inquiry.inquiryType)}</span>
                          <span>{format(new Date(inquiry.createdAt), 'MMM dd, yyyy HH:mm')}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <select
                          value={inquiry.status}
                          onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs border border-gray-300 rounded px-2 py-1"
                        >
                          <option value="new">New</option>
                          <option value="responded">Responded</option>
                          <option value="closed">Closed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Inquiry Details */}
        <div className="lg:col-span-1">
          {selectedInquiry ? (
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Inquiry Details</h2>
              </div>
              <div className="px-6 py-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedInquiry.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedInquiry.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedInquiry.phone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <p className="mt-1 text-sm text-gray-900">{getInquiryTypeLabel(selectedInquiry.inquiryType)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedInquiry.subject}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{selectedInquiry.message}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Submitted</label>
                  <p className="mt-1 text-sm text-gray-900">
                    {format(new Date(selectedInquiry.createdAt), 'MMM dd, yyyy HH:mm')}
                  </p>
                </div>

                {selectedInquiry.status === 'responded' && selectedInquiry.response && (
                  <div className="border-t pt-4">
                    <label className="block text-sm font-medium text-gray-700">Response</label>
                    <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{selectedInquiry.response}</p>
                    {selectedInquiry.respondedAt && (
                      <p className="mt-1 text-xs text-gray-500">
                        Responded on {format(new Date(selectedInquiry.respondedAt), 'MMM dd, yyyy HH:mm')}
                        {selectedInquiry.respondedBy && ` by ${selectedInquiry.respondedBy}`}
                      </p>
                    )}
                  </div>
                )}

                {selectedInquiry.status !== 'responded' && (
                  <div className="border-t pt-4 space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Your Response</label>
                    <textarea
                      value={response}
                      onChange={(e) => setResponse(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Type your response here..."
                    />
                    <button
                      onClick={handleRespond}
                      disabled={isResponding || !response.trim()}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isResponding ? 'Sending...' : 'Send Response'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Inquiry Details</h2>
              </div>
              <div className="px-6 py-8 text-center text-gray-500">
                Select an inquiry to view details and respond.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
