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
    <section className="mb-16" aria-labelledby={`dept-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.5 }}
        className="mt-10"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-full">
            <div className="h-px bg-[#E5E7EB]" aria-hidden="true" />
            <div className="absolute left-0 -top-3">
              <span className="inline-flex items-center gap-2 bg-[#0B5D3B] text-white rounded-full px-4 py-2 text-sm font-bold shadow-sm border border-[#0B5D3B]">
                <BadgeIcon className="h-4 w-4" aria-hidden={true} />
                {title}
              </span>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10"
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
              <StaffMember image={m.image} name={m.name} position={m.position} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

