import { FadeIn } from '@/components/animations/FadeIn';
import { SectionContainer } from '@/components/home/sjmpc-home/SectionContainer';
import { ArrowRight, Download } from 'lucide-react';
import PageHero from '@/components/PageHero';

export default function AnnualReportsPage() {
  const reports = [
    {
      year: '2023',
      title: '57th General Assembly',
      description:
        'Comprehensive report of the 57th General Assembly meeting, including key decisions, financial updates, and strategic directions.',
      fileSize: '2.4 MB',
      downloadUrl: '/Annual Reports/57thGA.pdf',
      highlights: ['Strategic Planning', 'Financial Review', 'Member Engagement'],
    },
    {
      year: '2022',
      title: '56th General Assembly',
      description:
        'Detailed proceedings from the 56th General Assembly, covering cooperative development and community initiatives.',
      fileSize: '2.1 MB',
      downloadUrl: '/Annual Reports/56thGA.pdf',
      highlights: ['Community Programs', 'Asset Growth', 'Member Services'],
    },
    {
      year: '2021',
      title: '55th General Assembly',
      description:
        'Highlights from the 55th General Assembly, focusing on resilience and adaptation during challenging times.',
      fileSize: '1.9 MB',
      downloadUrl: '/Annual Reports/GA-55th.pdf',
      highlights: ['Resilience Initiatives', 'Digital Transformation', 'Member Support'],
    },
    {
      year: '2020',
      title: '54th General Assembly',
      description:
        'Report on the 54th General Assembly, addressing pandemic response and future planning.',
      fileSize: '2.3 MB',
      downloadUrl: '/Annual Reports/54th-GA.pdf',
      highlights: ['Pandemic Response', 'Financial Stability', 'Community Aid'],
    },
    {
      year: '2019',
      title: '53rd General Assembly',
      description:
        'Proceedings of the 53rd General Assembly, celebrating achievements and setting new goals.',
      fileSize: '1.8 MB',
      downloadUrl: '/Annual Reports/53th-GA.pdf',
      highlights: ['Achievement Milestones', 'Expansion Plans', 'Partnerships'],
    },
    {
      year: '2019-2020',
      title: 'Annual Report 2019-2020',
      description:
        'Comprehensive annual report covering the period from 2019 to 2020, including financial statements and operations.',
      fileSize: '2.2 MB',
      downloadUrl: '/Annual Reports/2019-2020.pdf',
      highlights: ['Financial Overview', 'Operational Highlights', 'Future Outlook'],
    },
  ];

return (
    <main className="min-h-screen bg-[#F8FAF6]">
      {/* Hero Section */}
      <PageHero
        image="/Hero Section/About us Hero Section.png"
        imageAlt="Annual Reports"
        title="ANNUAL REPORTS"
        subtitle="Discover our annual reports that showcase transparency, growth, and community impact. Access detailed financial statements, achievements, and strategic initiatives year by year."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Annual Reports" },
        ]}
      />

<section className="py-14 md:py-20">
        <SectionContainer>
          {/* Reports Grid */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {reports.map((report, index) => (
              <FadeIn key={report.year} delay={0.1 + index * 0.08}>
                <article className="bg-white border border-gray-100 rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="text-3xl font-black text-[#006B3F] group-hover:translate-y-[-1px] transition-transform duration-300">
                        {report.year}
                      </div>
                      <div className="mt-1 text-sm text-gray-500">{report.fileSize}</div>
                    </div>

                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#006B3F]/10 border border-[#006B3F]/15 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.45)]" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3 leading-tight">
                    {report.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {report.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[#006B3F] mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {report.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#006B3F]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={report.downloadUrl}
                    download
                    className="inline-flex items-center justify-center w-full px-5 py-3 bg-[#006B3F] text-white font-semibold rounded-2xl hover:bg-[#005f36] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    aria-label={`Download ${report.title} PDF`}
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Download PDF
                  </a>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Contact Section */}
          <FadeIn delay={0.6}>
            <div className="mt-12 md:mt-20">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#006B3F] text-white flex items-center justify-center shadow-sm mb-6">
                    <span className="inline-flex w-9 h-9">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                        <path d="M8 12h.01M12 12h.01M16 12h.01" />
                        <path d="M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-[#006B3F] mb-4">
                    Need Older Reports or Have Questions?
                  </h3>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                    If you need access to annual reports from years prior to 2019 or have questions about our reporting,
                    please contact our administrative office. We’re here to help and maintain transparency in all our operations.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xl">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-7 py-4 bg-[#006B3F] text-white font-semibold rounded-2xl hover:bg-[#005f36] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    >
                      Contact Us
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>

                    <a
                      href="mailto:info@sjmpc.com"
                      className="inline-flex items-center justify-center px-7 py-4 bg-[#006B3F] text-white font-semibold rounded-2xl hover:bg-[#005f36] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    >
                      Email Us
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </SectionContainer>
      </section>
    </main>
  );
}

