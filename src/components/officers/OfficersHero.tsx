"use client";

import React from 'react';
import { ChevronRight, Handshake, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import TopInformationBar from '@/components/home/sjmpc-home/TopInformationBar';

const highlights = [
  {
    title: 'Governance',
    description: 'Steady leadership anchored on accountability and transparency.',
    icon: ShieldCheck,
  },
  {
    title: 'Service',
    description: 'Committed to serving members with care, fairness, and dedication.',
    icon: Handshake,
  },
  {
    title: 'Community',
    description: 'Working together to strengthen families and local development.',
    icon: Users,
  },
];

export default function OfficersHero() {
  return (
    <header className="relative overflow-hidden bg-[linear-gradient(135deg,_#f5fbf7_0%,_#ffffff_50%,_#f0f8f3_100%)] pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,107,63,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.12),transparent_35%)]" />
      <TopInformationBar />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium text-gray-700">Home</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="font-medium text-gray-700">About Us</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="font-medium text-gray-700">SJMPC Officers</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#004D2D] shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
              Our Leadership
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#004D2D] sm:text-5xl lg:text-6xl">
              SJMPC Officers
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Guided by integrity and dedicated to service, our officers provide visionary leadership and good governance to ensure the continued growth and success of SJMPC.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="rounded-2xl border border-emerald-100 bg-white/90 px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-[#006B3F]">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 h-px w-40 bg-gradient-to-r from-[#D4AF37] via-[#006B3F] to-transparent" aria-hidden="true" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-[0_25px_80px_-30px_rgba(0,77,45,0.35)] backdrop-blur">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-[320px] overflow-hidden rounded-[1.5rem] sm:h-[380px] lg:h-[430px]"
              >
                <Image
                  src="/images/433653723_8032419583452138_6238720083292977796_n.jpg"
                  alt="SJMPC main office and leadership"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#006B3F]/15 via-transparent to-[#D4AF37]/20" />
              </motion.div>
            </div>

            <div aria-hidden="true" className="pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[#D4AF37]/20 blur-2xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-[#006B3F]/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </header>
  );
}

