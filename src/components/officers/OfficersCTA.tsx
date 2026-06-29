"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function OfficersCTA() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#004D2D] to-[#006B3F] shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 text-white">
              <h2 className="text-2xl font-extrabold">Join Us in Building a Stronger Antique</h2>
              <p className="mt-4 text-gray-100 leading-relaxed">
                Together, we can create more opportunities and build a brighter future for our community.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/registration"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#004D2D] ring-1 ring-white/20 transition hover:bg-[#F8F9FA]"
                >
                  Become a Member
                </a>
                <a
                  href="/online-application"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent px-6 py-3 text-sm font-bold text-white ring-2 ring-white/60 transition hover:bg-white/10"
                >
                  Apply for a Loan
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="relative min-h-[220px] lg:min-h-[280px]">
              <div aria-hidden="true" className="absolute inset-0 bg-[#004D2D]/30" />
              <Image
                src="/images/540980295_10235369655438843_7551540348210928825_n.jpg"
                alt="Smiling cooperative members"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

