"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Percent, Wrench } from "lucide-react";

const items = [
  { icon: Percent, label: "Low Interest Rates" },
  { icon: Clock, label: "Flexible Terms" },
  { icon: Wrench, label: "Fast Approval" },
  { icon: ShieldCheck, label: "Personalized Service" },
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
        <li aria-hidden="true" aria-label="separator">
          <span aria-hidden="true">&gt;</span>
        </li>
        <li>
          <a href="/services" className="hover:text-[#D4AF37] transition-colors">
            Products &amp; Services
          </a>
        </li>
        <li aria-hidden="true" aria-label="separator">
          <span aria-hidden="true">&gt;</span>
        </li>
        <li aria-current="page" className="text-white">
          Loan Packages
        </li>
      </ol>
    </nav>
  );
}


export default function LoanHero() {
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
                  LOAN PRODUCTS
                </h1>
                <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-xl">
                  Affordable loans that help you achieve your goals and build a better future.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {items.map((it) => (
                    <div key={it.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                        <it.icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div className="pt-1">
                        <div className="text-white font-semibold">{it.label}</div>
                        <div className="text-white/70 text-sm">Member-first support</div>
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
                    src="/images/584711177_10236308089939119_4315614434674993906_n.jpg"
                    alt="Loan services concept"
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
                      <div className="text-white font-bold">Loans made for you</div>
                      <div className="text-white/70 text-sm">Fast, affordable, trusted</div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                          Reliable
                        </div>
                        <div className="text-white/70 text-sm mt-1">Cooperative service</div>
                      </div>
                      <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <Percent className="w-5 h-5 text-[#D4AF37]" />
                          Affordable
                        </div>
                        <div className="text-white/70 text-sm mt-1">Low interest options</div>
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

