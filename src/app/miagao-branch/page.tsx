'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Crown, Users } from 'lucide-react';

import DepartmentSection, { type DepartmentMember } from '@/components/head-office-management-staff/DepartmentSection';
import CommitmentSection from '@/components/head-office-management-staff/CommitmentSection';
import CallToAction from '@/components/head-office-management-staff/CallToAction';

const staffData: {
  branchManager: DepartmentMember[];
  branchStaff: DepartmentMember[];
} = {
  branchManager: [
    {
      name: "RAYMUND V. HUELAR",
      position: "Branch Manager",
      image: "/staff/raymund-huelar.jpg"
    }
  ],
  branchStaff: [
    { name: "RHEA ANN MARIEL S. CONDESA", position: "Bookkeeper", image: "/staff/rhea-condesa.jpg" },
    { name: "RAMAH H. EGIDA", position: "Clerk, Loan Processor", image: "/staff/ramah-egida.jpg" },
    { name: "JERMIE M. GARCESA", position: "CIBI", image: "/staff/jermie-garcsea.jpg" },
    { name: "ROMMEL JULINE N. AREVALO", position: "Driver, Maintenance Clerk", image: "/staff/rommel-arevalo.jpg" },
    { name: "JOHANNA MAE G. CEÑIZA", position: "Clerk, Loan Monitoring", image: "/staff/johanna-ceniza.jpg" },
    { name: "D'ARTAGNAN N. TAJONERA, JR.", position: "IT", image: "/staff/dartagnan-tajonea.jpg" },
    { name: "ANJANETTE C. CAPITLE", position: "Teller", image: "/staff/anjanette-capitle.jpg" },
    { name: "LESLEE RICHANN RENDON", position: "Clerk", image: "/staff/leslee-rendon.jpg" },
    { name: "RJ JAN M. FABILLO", position: "Account Officer", image: "/staff/rj-fabillo.jpg" },
    { name: "BABY ANGEL A. GAMOS", position: "Clerk", image: "/staff/baby-gamos.jpg" },
    { name: "ALMA MARIE V. MESAYRA", position: "Marketing Assistant", image: "/staff/alma-mesayra.jpg" },
    { name: "ALBERT M. MOLEJONA", position: "Account Officer (JO)", image: "/staff/albert-molejona.jpg" },
    { name: "KLENT CONTEMPLACION", position: "Account Officer (JO)", image: "/staff/klent-contemplacion.jpg" }
  ]
};

function MiagaoHeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(135deg, rgba(11,93,59,0.08), rgba(11,93,59,0) 55%), linear-gradient(180deg, rgba(234,245,238,0.65), rgba(255,255,255,0.95))',
        }}
      />
      <div className="absolute -right-20 top-10 h-[260px] w-[260px] rounded-full bg-[#D4A017]/15 blur-2xl" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <p className="text-xs sm:text-sm font-semibold tracking-[0.26em] text-[#0B5D3B]">
                OUR BRANCHES
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Miagao
                <span className="block text-[#0B5D3B]">Branch Office</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#6B7280] max-w-xl leading-relaxed">
                Meet the dedicated team serving our Miagao community with excellence, trust, and commitment.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="mt-8"
              >
                <a
                  href="#team"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:ring-offset-2 bg-[#D4A017] text-[#06452C] hover:brightness-105 shadow-sm"
                >
                  Meet Our Team
                </a>
              </motion.div>

              {/* Gold accent decoration */}
              <div
                aria-hidden="true"
                className="absolute -left-8 -top-6 h-24 w-24 rounded-full border-[3px] border-[#D4A017] opacity-60"
              />
            </motion.div>

            {/* Mobile floating elements */}
            <div aria-hidden="true" className="absolute -bottom-10 -left-5 h-16 w-16 rounded-2xl bg-[#0B5D3B]/10 blur-sm" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[320px] sm:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB]"
            >
              <Image
                src="/images/miagao-branch-building.jpg"
                alt="SJMP Cooperative Miagao Branch Building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#06452C]/70 via-[#0B5D3B]/25 to-transparent"
              />
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4A017]/20 blur-2xl" />

              {/* Floating animated details */}
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-6 top-8 h-3 w-3 rounded-full bg-[#D4A017] opacity-70"
              />
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute right-10 bottom-14 h-2 w-2 rounded-full bg-[#EAF5EE] opacity-80"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MiagaoBranchPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <MiagaoHeroSection />

      <div id="team" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <DepartmentSection title="Branch Management" members={staffData.branchManager} badgeIcon={Crown} />
        <DepartmentSection title="Branch Staff" members={staffData.branchStaff} badgeIcon={Users} />
      </div>

      <CommitmentSection />
      <CallToAction />
    </main>
  );
}
