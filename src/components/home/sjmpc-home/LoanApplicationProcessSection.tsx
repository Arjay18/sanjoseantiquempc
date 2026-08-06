"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, GanttChart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionContainer } from './SectionContainer';

const steps = [
  {
    title: 'Submit Application',
    description: 'Provide your details and the documents required to start.',
    icon: FileText,
  },
  {
    title: 'Evaluation',
    description: 'Our team reviews eligibility and ensures everything is complete.',
    icon: GanttChart,
  },
  {
    title: 'Approval & Release',
    description: 'Get approved and receive the funds for your goals.',
    icon: CheckCircle2,
  },
];

export default function LoanApplicationProcessSection() {
  return (
    <section className="py-20 bg-brand-soft overflow-hidden">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-brand-medium font-bold tracking-widest uppercase text-sm">Loan Application Process</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-brand-dark leading-tight">
              Apply for your loan in 3 <span className="text-brand-gold">simple steps</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-lg leading-relaxed">
              We've streamlined our process to ensure you get the financial assistance you need as quickly as possible.
            </p>

            <div className="mt-10 space-y-8 relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-medium/20 via-brand-medium/40 to-transparent hidden sm:block" />

              {steps.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="flex gap-6 relative group"
                  >
                    <div className="flex-shrink-0 z-10">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-medium flex items-center justify-center shadow-md group-hover:bg-brand-medium group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6 text-brand-medium group-hover:text-white" />
                      </div>
                      <div className="absolute -left-1 top-0 opacity-10 text-4xl font-black select-none pointer-events-none text-brand-medium">
                        0{idx + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-brand-dark">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-gray-600 leading-relaxed text-sm sm:text-base">
                        {s.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/online-application"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-medium text-white font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand-medium/20 active:scale-95"
              >
                Start Application
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2 text-brand-dark font-bold italic">
                <span className="w-8 h-0.5 bg-brand-gold" />
                Fast. Easy. Reliable.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-gold/12 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-medium/10 rounded-full blur-3xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <div className="relative h-[500px]">
                <Image
                  src="/Supporting Images/Loan Application Process.png"
                  alt="Loan Application Process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Floating Info Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold flex items-center justify-center text-white shadow-md">
                      <GanttChart className="w-6 h-6 text-brand-dark" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-brand-dark uppercase tracking-wider">Quick Processing</div>
                      <div className="text-xs text-gray-600">Most applications are reviewed within 24-48 hours.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
