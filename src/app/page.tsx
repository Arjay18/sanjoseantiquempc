import HeroSection from "@/components/home/sjmpc-home/HeroSection";
import QuickServicesSection from "@/components/home/sjmpc-home/QuickServicesSection";
import StatisticsSection from "@/components/home/sjmpc-home/StatisticsSection";
import SavingsProductsSection from "@/components/home/sjmpc-home/SavingsProductsSection";
import LoanApplicationProcessSection from "@/components/home/sjmpc-home/LoanApplicationProcessSection";
import NewsAndBranchSection from "@/components/home/sjmpc-home/NewsAndBranchSection";
import FinalCallToActionSection from "@/components/home/sjmpc-home/FinalCallToActionSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <QuickServicesSection />
      <StatisticsSection />
      <SavingsProductsSection />
      <LoanApplicationProcessSection />
      <NewsAndBranchSection />
      <FinalCallToActionSection />
    </div>
  );
}
