import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

export default function AnnualReportsPage() {
  const reports = [
    {
      year: '2023',
      title: '57th General Assembly',
      description: 'Comprehensive report of the 57th General Assembly meeting, including key decisions, financial updates, and strategic directions.',
      fileSize: '2.4 MB',
      downloadUrl: '/Annual Reports/57thGA.pdf',
      highlights: ['Strategic Planning', 'Financial Review', 'Member Engagement']
    },
    {
      year: '2022',
      title: '56th General Assembly',
      description: 'Detailed proceedings from the 56th General Assembly, covering cooperative development and community initiatives.',
      fileSize: '2.1 MB',
      downloadUrl: '/Annual Reports/56thGA.pdf',
      highlights: ['Community Programs', 'Asset Growth', 'Member Services']
    },
    {
      year: '2021',
      title: '55th General Assembly',
      description: 'Highlights from the 55th General Assembly, focusing on resilience and adaptation during challenging times.',
      fileSize: '1.9 MB',
      downloadUrl: '/Annual Reports/GA-55th.pdf',
      highlights: ['Resilience Initiatives', 'Digital Transformation', 'Member Support']
    },
    {
      year: '2020',
      title: '54th General Assembly',
      description: 'Report on the 54th General Assembly, addressing pandemic response and future planning.',
      fileSize: '2.3 MB',
      downloadUrl: '/Annual Reports/54th-GA.pdf',
      highlights: ['Pandemic Response', 'Financial Stability', 'Community Aid']
    },
    {
      year: '2019',
      title: '53rd General Assembly',
      description: 'Proceedings of the 53rd General Assembly, celebrating achievements and setting new goals.',
      fileSize: '1.8 MB',
      downloadUrl: '/Annual Reports/53th-GA.pdf',
      highlights: ['Achievement Milestones', 'Expansion Plans', 'Partnerships']
    },
    {
      year: '2019-2020',
      title: 'Annual Report 2019-2020',
      description: 'Comprehensive annual report covering the period from 2019 to 2020, including financial statements and operations.',
      fileSize: '2.2 MB',
      downloadUrl: '/Annual Reports/2019-2020.pdf',
      highlights: ['Financial Overview', 'Operational Highlights', 'Future Outlook']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold mb-8 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Transparency & Growth
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Annual Reports
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Our Commitment to You
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Discover our comprehensive annual reports that showcase transparency, growth, and community impact.
              Access detailed financial statements, achievements, and strategic initiatives year by year.
            </p>
          </div>

        {/* Reports Grid */}
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {reports.map((report, index) => (
            <FadeIn key={report.year} delay={0.6 + index * 0.1}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
                {/* Year Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-black text-brand-blue group-hover:scale-110 transition-transform duration-300">
                    {report.year}
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {report.fileSize}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                  {report.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {report.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-brand-blue mb-3">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {report.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Download Button */}
                <a
                  href={report.downloadUrl}
                  download
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
        {/* Contact Section */}
        <FadeIn delay={1.2}>
          <div className="mt-20 text-center">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-white/30 shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-green rounded-full mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-brand-blue mb-6">Need Older Reports or Have Questions?</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                If you need access to annual reports from years prior to 2019 or have questions about our reporting,
                please don't hesitate to contact our administrative office. We're here to help and maintain transparency in all our operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl"
                >
                  Contact Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="mailto:info@sjmpc.com"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl"
                >
                  Email Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
        </div>
      </div>
    </div>
  );
}
