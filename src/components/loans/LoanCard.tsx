"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2, Wallet, ShieldCheck } from "lucide-react";
import type { LoanProduct } from "./loanData";

export default function LoanCard({ product }: { product: LoanProduct }) {
  return (
    <motion.article
      whileHover={{ y: -8, boxShadow: "0 20px 55px -20px rgba(0,77,45,0.25)" }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-[#E5E7EB] h-full"
    >
      <div className="p-5">
        <div className="relative h-36 rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        </div>

        <div className="mt-4 flex items-start gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[var(--sjmpc-green)] text-white flex items-center justify-center shadow-sm">
            <product.Icon className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-extrabold text-[#004D2D] leading-tight">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{product.shortDescription}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Loan Amount</div>
            <div className="text-sm font-bold text-[#004D2D]">{product.loanAmount}</div>
          </div>
          <div className="rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Repayment Term</div>
            <div className="text-sm font-bold text-[#004D2D]">{product.repaymentTerm}</div>
          </div>
          <div className="rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Interest</div>
            <div className="text-sm font-bold text-[#004D2D]">{product.interestInformation}</div>
          </div>
        </div>

        <div className="mt-5">
          <Link
            href={product.href}
            className="inline-flex items-center gap-2 text-[var(--sjmpc-green)] font-bold hover:text-[#004D2D] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--sjmpc-gold)] rounded-lg"
          >
            Learn More
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

