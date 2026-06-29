"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Coins, TrendingUp, Target } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: ShieldCheck, label: "Secure Your Future" },
  { icon: TrendingUp, label: "Earn Higher Dividends" },
  { icon: Target, label: "Reach Financial Goals" },
  { icon: Coins, label: "Trusted & Reliable" },
];

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/90">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <a href="/" className="hover:text-[#D4AF37] transition-colors">
            Home
          </a>
        </li>
        <li aria-hidden="true">&gt;</li>
        <li>
          <a href="/services" className="hover:text-[#D4AF37] transition-colors">
            Products &amp; Services
          </a>
        </li>
        <li aria-hidden="true">&gt;</li>
        <li aria-current="page" className="text-white">
          Savings Products
        </li>
      </ol>
    </nav>
  );
}

export default function SavingsHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#006B3F] via-[#004D2D] to-[#006B3F]" />
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#D4AF37]/30 blur-3xl" />
      <div className="absolute -bottom-28 -right-28 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Breadcrumb />
                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                  SAVINGS PRODUCTS
                </h1>
                <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-xl">
                  Start saving today for a secure tomorrow. Choose a savings plan that fits your goals.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {items.map((it) => (
                    <div key={it.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                        <it.icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div className="pt-1">
                        <div className="text-white font-semibold">{it.label}</div>
                        <div className="text-white/70 text-sm">Cooperative savings support</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-3xl shadow-2xl overflow-hidden bg-white/5 border border-white/10">
                <div className="relative h-[360px] sm:h-[420px]">
                  <Image
                    src="/images/597403592_1403798674673184_7189129226940101753_n.jpg"
                    alt="Savings growth concept"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#006B3F]/60 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Grow with SJMPC</div>
                      <div className="text-white/70 text-sm">Savings that build futures</div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                          Secure
                        </div>
                        <div className="text-white/70 text-sm mt-1">Trustworthy cooperative</div>
                      </div>
                      <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <Coins className="w-5 h-5 text-[#D4AF37]" />
                          Earn
                        </div>
                        <div className="text-white/70 text-sm mt-1">Dividend potential</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 -left-10 -top-10 w-40 h-40 rounded-full bg-[#D4AF37]/20 blur-2xl" />
              <div className="absolute -z-10 -bottom-10 -right-10 w-52 h-52 rounded-full bg-white/10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

