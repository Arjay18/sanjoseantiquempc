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
      name: "ROSANNA G. JABILE",
      position: "Branch Manager",
      image: "/staff/rosanna-jabile.jpg"
    }
  ],
  branchStaff: [
    { name: "JESSA LILAH G. MANDE", position: "Bookkeeper - Accounting", image: "" },
    { name: "JULIE G. SABAN", position: "Administrative Assistant", image: "/staff/julie-saban.jpg" },
    { name: "JO-ANNE A. NERECINA", position: "Collection and Recovery Supervisor", image: "/staff/joanne-nerecina.jpg" },
    { name: "MARY ANN P. ALONSAGAY", position: "Account Specialist", image: "/staff/mary-alonsagay.jpg" },
    { name: "REX M. DE CASTRO", position: "Acting CI/BI", image: "/staff/rex-decastro.jpg" },
    { name: "IRENEO C. PORTILLO JR.", position: "Account Specialist", image: "" },
    { name: "DARYL D. BALADIANG", position: "Driver/Maintenance Clerk", image: "/staff/daryl-baladiang.jpg" },
    { name: "KIM L. RODEROS", position: "Account Specialist", image: "" },
    { name: "MA. HAZEL F. NAIG", position: "Loan Processor", image: "" },
    { name: "CRISANEL MARIE B. DOMINGO", position: "Teller - Treasury & Cash Section", image: "" },
    { name: "LYKA MARIE TE MACABEBE", position: "Collection and Recovery Assistant", image: "" },
    { name: "GIZIEL VARIACION", position: "Teller - Treasury & Cash Section", image: "" }
  ]
};

function OtonHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#EFF9F0] pt-20 sm:pt-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_50%),radial-gradient(circle_at_top_right,rgba(11,93,59,0.10),transparent_50%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-10 items-center">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.26em] text-[#0B5D3B]">OUR BRANCHES</p>
            <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#06452C]">
              Oton
              <span className="block text-[#0B5D3B]">Branch Office</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#374151]">
              Meet the dedicated team serving our Oton community with excellence, trust, and commitment.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#team"
                className="inline-flex items-center justify-center rounded-xl bg-[#D4A017] px-6 py-4 text-sm font-bold text-[#06452C] shadow-lg shadow-[#D4A017]/20 transition duration-200 hover:brightness-105"
              >
                Meet Our Team
              </a>
              <a
                href="#team"
                className="inline-flex items-center justify-center rounded-xl border border-[#0B5D3B] bg-white px-6 py-4 text-sm font-bold text-[#0B5D3B] transition duration-200 hover:bg-[#F3F9F3]"
              >
                Explore Departments
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Leadership', value: 'Trusted decision-making' },
                { label: 'Support', value: 'Member-first service' },
                { label: 'Growth', value: 'Community impact' },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-[#D4A017]/20 bg-white/90 p-4 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B5D3B]">{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[320px] sm:h-[380px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-[#E5E7EB]"
            >
              <Image
                src="/images/oton-branch-building.jpg"
                alt="SJMP Cooperative Oton Branch Building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#06452C]/75 via-[#0B5D3B]/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/80 bg-white/85 p-5 shadow-2xl backdrop-blur-sm sm:left-auto sm:w-[calc(100%-4rem)] lg:w-[20rem] lg:right-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0B5D3B]">Oton Highlights</p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl bg-[#F3F9F3] p-3">
                    <p className="text-sm font-semibold text-[#06452C]">Member-centered leadership</p>
                  </div>
                  <div className="rounded-2xl bg-[#F3F9F3] p-3">
                    <p className="text-sm font-semibold text-[#06452C]">Operational excellence</p>
                  </div>
                  <div className="rounded-2xl bg-[#F3F9F3] p-3">
                    <p className="text-sm font-semibold text-[#06452C]">Trusted local support</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div aria-hidden="true" className="pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[#D4A017]/20 blur-2xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-[#006B3F]/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OtonBranchPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <OtonHeroSection />

      <div id="team" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <section className="mt-4 rounded-[2rem] border border-[#E5E7EB] bg-gradient-to-br from-white via-[#FCFDFD] to-[#F6FBF8] px-6 py-8 shadow-[0_18px_55px_-28px_rgba(6,69,44,0.35)] sm:px-8 sm:py-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.26em] text-[#0B5D3B]">Meet the Team</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#06452C]">
                Dedicated professionals behind every member service.
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#6B7280]">
                Our branch team is committed to delivering responsive support, accurate service, and local cooperative care to every member.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Member-focused', 'Service-driven', 'Community-first'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold text-[#0B5D3B] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <DepartmentSection title="Branch Management" members={staffData.branchManager} badgeIcon={Crown} />
        <DepartmentSection title="Branch Staff" members={staffData.branchStaff} badgeIcon={Users} />
      </div>

      <CommitmentSection />
      <CallToAction />
    </main>
  );
}
