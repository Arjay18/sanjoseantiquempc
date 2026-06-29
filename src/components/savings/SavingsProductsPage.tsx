"use client";

import SavingsHero from "./SavingsHero";
import SavingsGrid from "./SavingsGrid";
import SavingsBenefits from "./SavingsBenefits";
import SavingsCTA from "./SavingsCTA";

export default function SavingsProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SavingsHero />
      <SavingsGrid />
      <SavingsBenefits />
      <SavingsCTA />
    </main>
  );
}

