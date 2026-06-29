"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import type { Committee } from '@/data/committees';

export default function CommitteeCard({ committee }: { committee: Committee }) {
  const chair = committee.chairperson;
  const secretary = committee.secretary;
  const others = committee.members ?? [];

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="h-full rounded-2xl bg-white shadow-sm ring-1 ring-transparent transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
      aria-label={committee.name}
    >
      <div className="rounded-2xl">
        <div className="rounded-t-2xl bg-gradient-to-r from-[#004D2D] to-[#006B3F] px-6 py-4">
          <h3 className="text-base font-extrabold tracking-wide text-white">{committee.name.toUpperCase()}</h3>
          <div className="mt-2 h-px w-16 bg-[#D4AF37]" aria-hidden="true" />
        </div>

        <div className="px-5 py-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {chair && (
              <div className="flex items-center gap-4 rounded-xl bg-[#F8F9FA] p-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <div className="absolute -inset-1 rounded-full border-2 border-[#D4AF37]" aria-hidden="true" />
                  <Image
                    src={chair.imageSrc}
                    alt={`${chair.name} portrait`}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#004D2D]">{chair.name}</p>
                  <p className="text-xs font-semibold text-[#D4AF37]">{chair.position || 'Chairperson'}</p>
                </div>
              </div>
            )}

            {secretary && (
              <div className="flex items-center gap-4 rounded-xl bg-[#F8F9FA] p-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <div className="absolute -inset-1 rounded-full border-2 border-[#D4AF37]" aria-hidden="true" />
                  <Image
                    src={secretary.imageSrc}
                    alt={`${secretary.name} portrait`}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#004D2D]">{secretary.name}</p>
                  <p className="text-xs font-semibold text-[#D4AF37]">{secretary.position || 'Secretary'}</p>
                </div>
              </div>
            )}
          </div>

          {others.length > 0 && (
            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Additional Officers
              </div>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {others.slice(0, 4).map((m) => (
                  <div key={`${m.name}-${m.imageSrc}`} className="flex items-center gap-3 rounded-xl bg-white ring-1 ring-[#E5E7EB] p-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <div className="absolute -inset-1 rounded-full border-2 border-[#D4AF37]" aria-hidden="true" />
                      <Image
                        src={m.imageSrc}
                        alt={`${m.name} portrait`}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-[#004D2D]">{m.name}</p>
                      <p className="truncate text-xs font-semibold text-[#D4AF37]">{m.position || 'Member'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

