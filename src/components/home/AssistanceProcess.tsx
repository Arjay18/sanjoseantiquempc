'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

const processSteps = [
  {
    title: 'Request Assistance',
    description: 'Send your concerns and documentation using our member assistance channel.',
    points: ['Fill out the request form', 'Attach necessary documents', 'Submit for review'],
  },
  {
    title: 'Evaluation & Verification',
    description: 'Our team checks completeness and verifies eligibility based on cooperative guidelines.',
    points: ['Review submission', 'Verify required details', 'Request clarifications if needed'],
  },
  {
    title: 'Resolution & Support',
    description: 'We coordinate the appropriate action and provide updates until your case is resolved.',
    points: ['Provide updates', 'Coordinate next steps', 'Close and document outcome'],
  },
];

export default function AssistanceProcess() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 12a7 7 0 1114 0c0 2.21-.75 3.5-2.02 4.5-.76.59-1.48 1.39-1.48 2.5V20H10v-.5c0-1.11-.72-1.91-1.48-2.5C7.75 15.5 7 14.21 7 12z" />
              </svg>
              Member Assistance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Assistance Request Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A clear, step-by-step flow to help you get the support you need from SJMPC.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <FadeIn direction="up" delay={0.4}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-blue-100 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-500/10" />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5l2 2h8a2 2 0 012 2v10a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">How we help members</h3>
                    <p className="text-gray-600 text-sm">Fast response, clear evaluation, proper support.</p>
                  </div>
                </div>

                <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
                  <Image
                    src="/Assistances/Member Assistances.jpg"
                    alt="Member assistance"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="space-y-6">
              {processSteps.map((step, idx) => (
                <div
                  key={step.title}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>

                      <ul className="space-y-2">
                        {step.points.map((p) => (
                          <li key={p} className="flex items-start text-gray-700 text-sm">
                            <span className="mt-1 mr-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-50 text-green-600">
                              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                              </svg>
                            </span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

