import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

export default function AnnualReportsPage() {
  const reports = [
    {
      year: '2023',
      title: 'Annual Report 2023',
      description: 'Comprehensive overview of SJMPC\'s achievements, financial performance, and community impact for the year 2023.',
      fileSize: '2.4 MB',
      downloadUrl: '/reports/annual-report-2023.pdf',
      highlights: ['10,000+ Members Served', '₱50M+ Assets Managed', '15 Community Projects']
    },
    {
      year: '2022',
      title: 'Annual Report 2022',
      description: 'Detailed report covering our growth, member services, and cooperative initiatives throughout 2022.',
      fileSize: '2.1 MB',
      downloadUrl: '/reports/annual-report-2022.pdf',
      highlights: ['8,500 Members', '₱42M Assets', '12 New Programs']
    },
    {
      year: '2021',
      title: 'Annual Report 2021',
      description: 'Highlights of our journey, financial statements, and community development programs for 2021.',
      fileSize: '1.9 MB',
      downloadUrl: '/reports/annual-report-2021.pdf',
      highlights: ['7,200 Members', '₱35M Assets', '8 Community Initiatives']
    },
    {
      year: '2020',
      title: 'Annual Report 2020',
      description: 'Our response to challenges, member support initiatives, and resilience during the global pandemic.',
      fileSize: '2.3 MB',
      downloadUrl: '/reports/annual-report-2020.pdf',
      highlights: ['6,800 Members', '₱28M Assets', 'COVID-19 Relief Programs']
    },
    {
      year: '2019',
      title: 'Annual Report 2019',
      description: 'Celebrating milestones, expanding services, and strengthening community partnerships.',
      fileSize: '1.8 MB',
      downloadUrl: '/reports/annual-report-2019.pdf',
      highlights: ['6,000 Members', '₱22M Assets', 'New Branch Openings']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden bg-gray-900">
        <Image
          src="/slider/slide1.jpg"
          alt="Annual Reports"
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-[2000ms] ease-out"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <FadeIn delay={0.2}>
            <div className="max-w-5xl">
              <h1 className="mb-6 text-5xl font-black text-white md:text-6xl lg:text-7xl tracking-tight">
                ANNUAL REPORTS
              </h1>
              <p className="mb-8 text-xl text-gray-200 md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Transparency through comprehensive reporting - our commitment to accountability and growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-green rounded-full"></div>
                <span className="text-brand-yellow font-semibold text-lg">2023 - 2019</span>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-brand-blue rounded-full"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Introduction */}
        <FadeIn delay={0.4}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-brand-blue to-brand-green rounded-full mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-4xl font-black text-brand-blue mb-6">
              Our Commitment to Transparency
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At SJMPC, transparency is not just a value—it's our promise. Each annual report provides detailed insights
              into our financial performance, community initiatives, member growth, and cooperative achievements.
              We believe in keeping our members and stakeholders informed about our journey and impact.
            </p>
          </div>
        </FadeIn>

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
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-brand-blue text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:shadow-xl"
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

        {/* Statistics Section */}
        <FadeIn delay={1.0}>
          <div className="mt-20 bg-gradient-to-r from-brand-blue/10 via-white/50 to-brand-green/10 rounded-3xl p-12 backdrop-blur-xl border border-white/30 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-brand-blue mb-4">Our Growth Journey</h3>
              <p className="text-gray-600 text-lg">From humble beginnings to a thriving cooperative community</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-brand-blue mb-2">10,000+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-brand-green mb-2">₱50M+</div>
                <div className="text-sm text-gray-600">Total Assets</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-brand-yellow mb-2">60+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Branch Locations</div>
              </div>
            </div>
          </div>
        </FadeIn>

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
                  className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-blue/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Contact Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="mailto:info@sjmpc.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-brand-blue text-brand-blue font-semibold rounded-xl hover:bg-brand-blue hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
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
  );
}
