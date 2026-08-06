"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PiggyBank } from "lucide-react";

export default function SavingsCTA() {
  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20">
<div className="absolute inset-0 bg-gradient-to-r from-[#0B5D3B] to-[#06452C]" />
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#D4A017]/25 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-white text-3xl sm:text-4xl font-extrabold">Start Your Savings Journey Today!</h2>
              <p className="mt-3 text-white/90 max-w-xl">
                Visit any SJMPC branch or open your savings account today.
              </p>
            </div>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-6"
            >
              <div className="hidden sm:flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 border border-white/15">
<PiggyBank className="w-10 h-10 text-[#D4A017]" aria-hidden="true" />
              </div>

              <Link
                href="/registration"
className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#06452C] font-extrabold px-8 py-4 hover:bg-[#F8F9FA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
              >
                Open an Account
              </Link>
            </motion.div>

            {/* Decorative image element (optional) */}
            <div className="absolute bottom-0 right-0 w-40 h-40 opacity-80">
              <Image src="/file.svg" alt="" width={160} height={160} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

