"use client";

import { ShieldCheck, Users, Landmark, BadgeCheck } from 'lucide-react';
import { SectionContainer } from './SectionContainer';

const stats = [
  { value: '61+', label: 'Years of Service Since 1963', icon: ShieldCheck },
  { value: '15,000+', label: 'Active Members and Growing', icon: Users },
  { value: '4', label: 'Branches Across Antique', icon: Landmark },
  { value: 'Trusted', label: 'Secure, Reliable, Member-Focused', icon: BadgeCheck },
];

export default function StatisticsSection() {
  return (
    <section className="bg-[#004D2D] text-white py-14">
      <SectionContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-[color:rgba(255,255,255,0.04)] p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div className="text-3xl font-extrabold">{s.value}</div>
                </div>
                <div className="mt-3 text-sm sm:text-base text-white/90 font-semibold leading-relaxed">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
