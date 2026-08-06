"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, TrendingUp, Sparkles, Users } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Member-Focused",
    description: "Programs built around the needs of SJMPC members and their families.",
  },
  {
    icon: Lock,
    title: "Secure & Safe",
    description: "Trustworthy processes and cooperative governance you can rely on.",
  },
  {
    icon: TrendingUp,
    title: "Higher Dividends",
    description: "Savings designed to help you earn and grow over time.",
  },
  {
    icon: ShieldCheck,
    title: "Easy & Convenient",
    description: "Visit our branches or open an account with guidance from our team.",
  },
];

export default function SavingsBenefits() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
<h2 className="text-3xl sm:text-4xl font-extrabold text-[#06452C]">Why save with SJMPC</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Clean, responsible, and community-first savings that help build a secure tomorrow.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 h-full group hover:shadow-xl transition-shadow"
            >
<div className="w-12 h-12 rounded-2xl bg-[#0B5D3B]/10 text-[#0B5D3B] flex items-center justify-center border border-[#0B5D3B]/20">
                <b.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-[#06452C]">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

