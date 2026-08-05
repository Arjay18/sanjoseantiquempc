"use client";

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
      className="h-full w-full rounded-[1.25rem] border border-[#E8ECEA] bg-white p-5 shadow-[0_10px_30px_-18px_rgba(6,69,44,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0B5D3B]/40 hover:shadow-[0_16px_40px_-18px_rgba(6,69,44,0.45)]"
      aria-label={committee.name}
    >
      <div className="">
        <div className="pb-2">
          <h3 className="text-base font-extrabold uppercase tracking-[0.12em] text-[#004D2D] sm:text-lg">{committee.name.toUpperCase()}</h3>
          <div className="mt-2 h-0.5 w-12 bg-[#D4AF37]" aria-hidden="true" />
        </div>

        <div className="pt-2">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {chair && (
              <div className="rounded-lg bg-[#F8F9FA] px-3 py-2">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#004D2D]">{chair.name}</p>
                  <p className="text-xs font-semibold text-[#D4AF37]">{chair.position || 'Chairperson'}</p>
                </div>
              </div>
            )}

            {secretary && (
              <div className="rounded-lg bg-[#F8F9FA] px-3 py-2">
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
                  <div key={`${m.name}-${m.imageSrc}`} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2">
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

