"use client";

import LoanHero from "./LoanHero";
import LoanGrid from "./LoanGrid";
import LoanBenefits from "./LoanBenefits";
import LoanCTA from "./LoanCTA";

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

