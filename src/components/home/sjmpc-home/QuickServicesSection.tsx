"use client";

import Link from 'next/link';
import { PiggyBank, HandCoins, Laptop, MapPin, ArrowRight } from 'lucide-react';
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
    <section className="relative py-14 bg-gray-50/50">
      {/* Subtle top divider line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#006B3F]/15 to-transparent" />
      
      <SectionContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.title}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-[#006B3F]/20 transition-all duration-300"
              >
                {/* Modern subtle card hover background glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#006B3F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center h-full w-full">
                  <div className="w-16 h-16 rounded-2xl bg-[#006B3F]/8 flex items-center justify-center border border-[#006B3F]/12 shadow-sm text-[#006B3F] group-hover:bg-[#006B3F] group-hover:text-white group-hover:border-transparent group-hover:ring-4 group-hover:ring-[#D4AF37]/35 transition-all duration-300">
                    <Icon 
                      className="w-8 h-8" 
                      strokeWidth={2} 
                    />
                  </div>
                  
                  <h3 className="mt-5 text-lg font-extrabold text-[#004D2D] group-hover:text-[#006B3F] transition-colors duration-200">{s.title}</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-grow">{s.description}</p>

                  <div className="mt-6 pt-2">
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 text-[#006B3F] font-bold group-hover:text-[#004D2D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg px-3 py-1 bg-[#006B3F]/5 group-hover:bg-[#006B3F]/10"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
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
