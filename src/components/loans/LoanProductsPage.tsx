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
      <LoanGrid />
      <LoanBenefits />
      <LoanCTA />
    </main>
  );
}

