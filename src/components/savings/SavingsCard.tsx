"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { SavingsProduct } from "./savingsData";

export default function SavingsCard({ product }: { product: SavingsProduct }) {
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
<div className="w-12 h-12 rounded-2xl bg-[#0B5D3B] text-white flex items-center justify-center shadow-sm">
            <product.Icon className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-extrabold text-[#06452C] leading-tight">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{product.shortDescription}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="rounded-xl bg-[#F8F9FA] border border-[#E5EBE6] p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Minimum Initial Deposit</div>
            <div className="text-sm font-bold text-[#06452C]">{product.minimumInitialDeposit}</div>
          </div>
          <div className="rounded-xl bg-[#F8F9FA] border border-[#E5EBE6] p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Dividend Information</div>
            <div className="text-sm font-bold text-[#06452C]">{product.dividendInformation}</div>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {product.keyBenefits.slice(0, 3).map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-[#0B5D3B] mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <Link
            href={product.href}
            className="inline-flex items-center gap-2 text-[#0B5D3B] font-bold hover:text-[#06452C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A017] rounded-lg"
          >
            Learn More
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

