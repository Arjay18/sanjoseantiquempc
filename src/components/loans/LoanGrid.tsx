"use client";

import { motion } from "framer-motion";
import LoanCard from "./LoanCard";
import { LOAN_PRODUCTS } from "./loanData";

export default function LoanGrid() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] shadow-sm text-[var(--sjmpc-dark-green)] font-semibold tracking-wide uppercase text-sm">
            Our Loan Products
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#004D2D]">
            Financing that supports your goals
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Choose a loan package designed for affordability, flexibility, and trusted service.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOAN_PRODUCTS.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
            >
              <LoanCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

