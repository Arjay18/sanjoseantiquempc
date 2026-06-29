"use client";

import Link from 'next/link';
import { Building2, LocateFixed, PiggyBank, HandCoins, Laptop, MapPin, Wallet, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionContainer } from './SectionContainer';

const services = [
  {
    title: 'Savings Products',
    description: 'Secure, flexible savings designed for your goals.',
    href: '/savings-product',
    icon: PiggyBank,
  },
  {
    title: 'Loan Packages',
    description: 'Accessible credit with transparent, member-first terms.',
    href: '/loan-packages',
    icon: HandCoins,
  },
  {
    title: 'Online Application',
    description: 'Apply anytime—fast, easy, and reliable.',
    href: '/online-application',
    icon: Laptop,
  },
  {
    title: 'Branch Locator',
    description: 'Find the nearest SJMPC branch across Antique.',
    href: '/branches',
    icon: MapPin,
  },
];

export default function QuickServicesSection() {
  return (
    <section className="py-12 bg-[var(--sjmpc-section-gray)]">
      <SectionContainer>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="pointer-events-none hidden lg:block absolute inset-x-0 -top-6 h-1 bg-gradient-to-r from-transparent via-[#006B3F]/20 to-transparent" />
          {services.map((s) => {
            const Icon = s.icon;
            const isOrange = s.title === 'Savings Products' || s.title === 'Online Application';
            const isDarkGreen = s.title === 'Loan Packages' || s.title === 'Branch Locator';

            return (
              <motion.div
                key={s.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group rounded-2xl border border-gray-100 overflow-hidden"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center shadow-sm transition-colors ${
                    isOrange 
                      ? 'bg-orange-500 border-orange-600' 
                      : isDarkGreen 
                        ? 'bg-[#004D2D] border-[#004D2D]' 
                        : 'bg-white border-[#006B3F]'
                  }`}>
                    <Icon 
                      className={`w-9 h-9 transition-colors ${(isOrange || isDarkGreen) ? 'text-white' : 'text-[#006B3F]'}`} 
                      strokeWidth={2} 
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-[var(--sjmpc-dark-green)]">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{s.description}</p>

                  <div className="mt-6">
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 text-[var(--sjmpc-green)] font-semibold hover:text-[var(--sjmpc-dark-green)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--sjmpc-gold)] rounded"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
