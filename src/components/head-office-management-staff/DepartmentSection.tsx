"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Landmark, Megaphone, Calculator, Wallet, ShieldCheck } from 'lucide-react';
import StaffMember from './StaffMember';

export type DepartmentMember = {
  image: string;
  name: string;
  position: string;
};

export type DepartmentSectionProps = {
  title: string;
  members: DepartmentMember[];
  badgeIcon?: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
};

const badgeDefaultIcon = FileText;

export default function DepartmentSection({ title, members, badgeIcon: BadgeIcon = badgeDefaultIcon }: DepartmentSectionProps) {
  return (
    <section className="mb-10 sm:mb-12" aria-labelledby={`dept-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.5 }}
        className="mt-8 rounded-[1.5rem] border border-[#E5E7EB] bg-gradient-to-br from-white via-[#FCFDFD] to-[#F5FBF7] px-4 py-5 shadow-[0_14px_44px_-24px_rgba(6,69,44,0.22)] sm:px-6 sm:py-6"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0B5D3B]/20 bg-[#0B5D3B] px-3.5 py-2 text-sm font-bold text-white shadow-sm">
              <BadgeIcon className="h-4 w-4" aria-hidden={true} />
              {title}
            </span>
          </div>
          <div className="rounded-full border border-[#E5E7EB] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6B7280]">
            Dedicated team support
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
          <span className="h-2 w-2 rounded-full bg-[#D4A017]" aria-hidden="true" />
          Strengthening service delivery across the cooperative
        </div>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ staggerChildren: 0.06 }}
        >
          {members.map((m, idx) => (
            <motion.div
              key={`${m.name}-${idx}`}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.35 }}
              className="h-full"
            >
              <StaffMember name={m.name} position={m.position} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

