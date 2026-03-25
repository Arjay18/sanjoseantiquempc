"use client";
import { useState, useEffect } from 'react';

interface LoanApplication {
  id: string;
  name: string;
  pbNo: string;
  [key: string]: any;
}

interface VerificationModalProps {
  application: LoanApplication | null;
  onClose: () => void;
}

export default function VerificationModal({ application, onClose }: VerificationModalProps) {
  if (!application) return null;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'single'>('grid');
  
  const documents = [
    { key: 'idFile', label: 'Valid ID', icon: '📄', color: 'blue' },
    { key: 'depositSlipOrEwallet', label: 'Deposit Slip / E-wallet', icon: '💳', color: 'green' },
    { key: 'memberWithIDAndSlip', label: 'Member Photo with ID', icon: '📸', color: 'purple' },
  ];
  
  const availableDocs = documents.filter(doc => application[doc.key as keyof LoanApplication]);
  
  useEffect(() => {
    setCurrentImageIndex(0);
    setViewMode('grid');
  }, [application]);
  
  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? availableDocs.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === availableDocs.length - 1 ? 0 : prev + 1));
  };
  
  const getFileType = (file: string | undefined) => {
    if (!file) return '';
    if (file.startsWith('data:image/')) return 'image';
    if (file.startsWith('data:application/pdf')) return 'pdf';
    return 'unknown';
  };
  
  const renderDocument = (doc: typeof documents[0], isActive: boolean = false) => {
    const file = application[doc.key as keyof LoanApplication] as string | undefined;
    if (!file) return null;
    
    const fileType = getFileType(file);
    const fileExt = file.split(';')[0].split('/')[1] || 'file';
    
    const colorClasses: Record<string, string> = {
      blue: 'border-green-200 bg-green-50',
      green: 'border-green-200 bg-green-50',
      purple: 'border-purple-200 bg-purple-50',
    };
    
    return (
      <div className={`p-4 rounded-xl border-2 ${colorClasses[doc.color]} ${isActive ? 'ring-2 ring-offset-2 ring-green-500' : ''}`}>
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
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Verification Documents</h2>
              <p className="text-green-100 text-sm">Applicant: {application.name} | PB#: {application.pbNo}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-white/20 rounded-lg p-1 flex">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition ${viewMode === 'grid' ? 'bg-white text-green-600' : 'text-white/80 hover:text-white'}`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('single')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition ${viewMode === 'single' ? 'bg-white text-green-600' : 'text-white/80 hover:text-white'}`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              {documents.map((doc) => (
                <div key={doc.key}>
                  {application[doc.key as keyof LoanApplication] && renderDocument(doc, false)}
                </div>
              ))}
            </div>
          ) : (
            <div className="relative">
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
              
              <div className="max-w-2xl mx-auto">
                {renderDocument(availableDocs[currentImageIndex], true)}
                
                {availableDocs.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {availableDocs.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition ${idx === currentImageIndex ? 'bg-green-600' : 'bg-gray-300'}`}
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
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
