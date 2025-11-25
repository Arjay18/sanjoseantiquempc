'use client';

import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

const steps = [
  {
    id: 1,
    title: "Attend PMES Seminar",
    description: "Complete the mandatory PRE-Membership Education Seminar (PMES) to understand cooperative principles and SJMPC's values.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    details: ["Mandatory attendance", "Learn cooperative principles", "Understand SJMPC values", "Free seminar sessions"]
  },
  {
    id: 2,
    title: "Submit Application Form",
    description: "Fill out the official SJMPC membership application form with accurate personal and contact information.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    details: ["Duly filled out form", "Accurate information", "Complete all sections", "Sign and date"]
  },
  {
    id: 3,
    title: "Submit ID Pictures",
    description: "Provide recent passport-sized photographs for your membership records and identification purposes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    details: ["2x2 ID picture (1 pc)", "1x1 ID picture (1 pc)", "Recent photographs", "White background preferred"]
  },
  {
    id: 4,
    title: "Valid ID Photocopy",
    description: "Submit a clear photocopy of any government-issued valid identification card for verification purposes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    details: ["1 photocopy of valid ID", "Government-issued ID", "Clear and readable", "Notarized if required"]
  },
  {
    id: 5,
    title: "Make Initial Payment",
    description: "Complete the minimum payment of ₱1,000 broken down into membership fees, contributions, and initial deposits.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    details: ["Total: ₱1,000 minimum", "Membership fee: ₱100", "ID fee: ₱50", "GAAN Contribution: ₱250", "Share Capital: ₱500", "Savings: ₱100"]
  }
];

export default function HowToBecomeMember() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Join Our Community
            </div>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">How to Become a Member</h2>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Your Journey to
              <span className="block text-blue-600">SJMPC Membership</span>
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Becoming a member of SJMPC is a straightforward process that opens doors to comprehensive financial services and community benefits. Follow these simple steps to join our cooperative family.
            </p>
          </div>
        </FadeIn>

        {/* Steps Grid */}
        <StaggerContainer delay={0.6} staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <StaggerItem key={step.id}>
                <FadeIn direction="up" delay={index * 0.1}>
                  <div className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </div>
                      ))}
                    </div>

                    {/* Connector Line (except for last items in each row) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-blue-600"></div>
                    )}
                  </div>
                </FadeIn>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Call to Action */}
        <FadeIn direction="up" delay={0.8}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 md:p-16 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join SJMPC?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Take the first step towards financial empowerment and community belonging. Our membership team is here to guide you through the process.
              </p>

              {/* Requirements Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                  <div className="text-3xl font-bold text-Blue mb-2">₱1,000</div>
                  <div className="text-blue-200 text-sm">Minimum Initial Payment</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                  <div className="text-3xl font-bold text-Blue mb-2">PMES</div>
                  <div className="text-blue-200 text-sm">Mandatory Seminar</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                  <div className="text-3xl font-bold text-Blue mb-2">24/7</div>
                  <div className="text-blue-200 text-sm">Support Available</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/online-application"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  suppressHydrationWarning={true}
                >
                  Apply Online Now
                  <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
                  suppressHydrationWarning={true}
                >
                  Contact Membership Team
                  <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
