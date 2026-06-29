import type { Metadata } from 'next';
import React from 'react';
import OfficersHero from '@/components/officers/OfficersHero';
import LeadershipValues from '@/components/officers/LeadershipValues';
import OfficersGrid from '@/components/officers/OfficersGrid';
import CommitteeGrid from '@/components/officers/CommitteeGrid';
import GovernanceSection from '@/components/officers/GovernanceSection';
import OfficersCTA from '@/components/officers/OfficersCTA';
import { boardOfDirectors } from '@/data/boardOfDirectors';


export const metadata: Metadata = {
  title: 'SJMPC Officers | San Jose Antique MPC',
  description:
    'Guided by integrity and dedicated to service, our officers provide visionary leadership and good governance to ensure the continued growth and success of SJMPC.',
  alternates: {
    canonical: '/sjmpc-officers',
  },
  category: 'finance',
};

export default function OfficersPage() {
  return (
    <main className="bg-[#F8F9FA]">
      <OfficersHero />
      <LeadershipValues />

      <OfficersGrid items={boardOfDirectors} />

      <CommitteeGrid />
      <GovernanceSection />
      <OfficersCTA />
    </main>
  );
}

