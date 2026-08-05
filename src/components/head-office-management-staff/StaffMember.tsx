"use client";

import React from 'react';
import { motion } from 'framer-motion';

export type StaffMemberProps = {
  name: string;
  position: string;
};

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? '';
  const second = parts[1]?.[0] ?? parts[0]?.[1] ?? '';
  return `${first}${second}`.toUpperCase();
}

export default function StaffMember({ name, position }: StaffMemberProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative flex h-full min-h-[138px] w-full flex-col justify-between overflow-hidden rounded-[1.05rem] border border-[#E8ECEA] bg-white/95 p-4 text-left shadow-[0_8px_24px_-16px_rgba(6,69,44,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B5D3B]/40 hover:shadow-[0_12px_30px_-16px_rgba(6,69,44,0.45)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-[1.05rem] bg-gradient-to-r from-[#0B5D3B] via-[#D4A017] to-[#0B5D3B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#0B5D3B]/15 bg-[#EAF5EE] text-sm font-black uppercase tracking-[0.16em] text-[#0B5D3B]">
          {getInitials(name)}
        </div>
        <div className="min-w-0">
          <h3 className="break-words text-sm sm:text-base font-extrabold uppercase leading-snug tracking-[0.08em] text-[#0B5D3B] transition-colors group-hover:text-[#06452C]">
            {name}
          </h3>
          <div className="mt-2 h-0.5 w-8 rounded-full bg-[#E5E7EB] transition-all duration-300 group-hover:w-12 group-hover:bg-[#D4A017]" />
        </div>
      </div>

      <p className="mt-3 text-sm sm:text-base font-semibold leading-snug text-gray-600 transition-colors group-hover:text-[#D4A017]">
        {position}
      </p>
    </motion.article>
  );
}

