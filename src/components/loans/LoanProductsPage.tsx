"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ClipboardList, FileText, HandCoins, Landmark, Sparkles } from "lucide-react";
import LoanHero from "./LoanHero";
import LoanGrid from "./LoanGrid";
import LoanBenefits from "./LoanBenefits";
import LoanCTA from "./LoanCTA";
import { LOAN_PRODUCTS } from "./loanData";

const steps = [
  {
    title: "Choose the right loan",
    description: "Pick a loan package that matches your purpose, budget, and preferred repayment term.",
  },
  {
    title: "Prepare your documents",
    description: "Bring a valid ID, proof of income, and any supporting papers required for your selected loan.",
  },
  {
    title: "Apply and receive support",
    description: "Our team will guide you through the process so you can get approved with confidence.",
  },
];

const checklist = [
  "Valid government-issued ID",
  "Proof of income or source of funds",
  "Completed application form",
  "Co-maker or collateral, if required",
];

const featuredLoans = LOAN_PRODUCTS.slice(0, 3);

export default function LoanProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <LoanHero />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-gradient-to-br from-[#F8F9FA] via-white to-[#FFF8E8] p-8 shadow-[0_20px_60px_-25px_rgba(0,77,45,0.25)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-[#006B3F]/10 px-3 py-1 text-sm font-semibold text-[#006B3F]">
                  <HandCoins className="w-4 h-4" />
                  Simple steps to get started
                </p>
                <h2 className="mt-4 text-3xl font-extrabold text-[#004D2D]">
                  A straightforward path to the funding you need
                </h2>
                <p className="mt-3 text-gray-600 max-w-2xl">
                  We make it easier to apply by keeping the process clear, personal, and guided from start to finish.
                </p>

                <div className="mt-8 space-y-4">
                  {steps.map((step, index) => (
                    <div key={step.title} className="flex gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-black text-[#004D2D]">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#004D2D]">{step.title}</h3>
                        <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[#E5E7EB] bg-[#F8F9FA] p-8 shadow-sm">
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#004D2D] shadow-sm">
                  <ClipboardList className="w-4 h-4" />
                  What to prepare
                </p>
                <h3 className="mt-4 text-2xl font-extrabold text-[#004D2D]">
                  Be ready for a faster review
                </h3>
                <ul className="mt-6 space-y-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#006B3F]" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/loan-application"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#006B3F] px-5 py-3 font-semibold text-white transition hover:bg-[#004D2D]"
                >
                  <FileText className="h-4 w-4" />
                  Start your application
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/15 px-3 py-1 text-sm font-semibold text-[#8A6A00]">
                <Sparkles className="w-4 h-4" />
                Featured loans
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#004D2D]">
                Popular options for members
              </h2>
            </div>
            <a href="#loan-products" className="inline-flex items-center gap-2 text-sm font-semibold text-[#006B3F] hover:text-[#004D2D]">
              View all loan products
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredLoans.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 55px -20px rgba(0,77,45,0.25)" }}
                className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006B3F]/10 text-[#006B3F]">
                    <Landmark className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-[#D4AF37]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#8A6A00]">
                    Featured
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-[#004D2D]">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{product.shortDescription}</p>
                <div className="mt-4 rounded-2xl bg-[#F8F9FA] p-4 text-sm text-gray-700">
                  <div className="font-semibold text-[#004D2D]">{product.loanAmount}</div>
                  <div className="mt-1">{product.repaymentTerm}</div>
                </div>
                <a href={product.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#006B3F] hover:text-[#004D2D]">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div id="loan-products">
        <LoanGrid />
      </div>
      <LoanBenefits />
      <LoanCTA />
    </main>
  );
}

