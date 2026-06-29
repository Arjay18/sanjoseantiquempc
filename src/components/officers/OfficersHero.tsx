"use client";

import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import TopInformationBar from '@/components/home/sjmpc-home/TopInformationBar';

const green = '#006B3F';

export default function OfficersHero() {
  return (
    <header className="relative pt-28 sm:pt-32">
      <TopInformationBar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium text-gray-700">Home</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="font-medium text-gray-700">About Us</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="font-medium text-gray-700">SJMPC Officers</span>
            </nav>

            <p className="mt-6 text-xs font-semibold tracking-widest text-[#004D2D]">OUR LEADERSHIP</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#004D2D] sm:text-5xl">
              SJMPC Officers
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Guided by integrity and dedicated to service, our officers provide visionary leadership and good governance to ensure the continued growth and success of SJMPC.
            </p>
            <div
              className="mt-6 h-px w-40 bg-gradient-to-r from-[#D4AF37] via-[#006B3F] to-transparent"
              aria-hidden="true"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* NOTE: uses existing officer/coop imagery. Replace src as needed. */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-[320px] sm:h-[380px] lg:h-[420px]"
              >
                <Image
                  src="/images/433653723_8032419583452138_6238720083292977796_n.jpg"
                  alt="SJMPC main office and leadership"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-[#006B3F]/10 via-transparent to-[#D4AF37]/10"
                />
              </motion.div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[#D4AF37]/20 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-[#006B3F]/20 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}

