import TopInformationBar from "@/components/home/sjmpc-home/TopInformationBar";
import HeroSection from "@/components/home/sjmpc-home/HeroSection";
import ModernHomeSlider from "@/components/home/ModernHomeSlider";

import QuickServicesSection from "@/components/home/sjmpc-home/QuickServicesSection";
import StatisticsSection from "@/components/home/sjmpc-home/StatisticsSection";
import SavingsProductsSection from "@/components/home/sjmpc-home/SavingsProductsSection";
import LoanApplicationProcessSection from "@/components/home/sjmpc-home/LoanApplicationProcessSection";
import NewsAndBranchSection from "@/components/home/sjmpc-home/NewsAndBranchSection";
import FinalCallToActionSection from "@/components/home/sjmpc-home/FinalCallToActionSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopInformationBar />
      <div className="pt-11">
        <HeroSection />
        <QuickServicesSection />
        <StatisticsSection />
        <SavingsProductsSection />
        <LoanApplicationProcessSection />
        <NewsAndBranchSection />
        <FinalCallToActionSection />
      </div>
    </main>
  );
}
