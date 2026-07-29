"use client";

import {
  Building2,
  Tractor,
  BriefcaseBusiness,
  GraduationCap,
  Home,
  Phone,
  ShieldCheck,
  AlertTriangle,
  Stethoscope,
  Coins,
  Banknote,
} from "lucide-react";

export type LoanProduct = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  shortDescription: string;
  loanAmount: string;
  repaymentTerm: string;
  interestInformation: string;
  keyBenefits: string[];
  href: string;
  image: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const LOAN_PRODUCTS: LoanProduct[] = [
  // 1. PROVIDENTIAL LOAN
  {
    id: "providential-loan",
    name: "PROVIDENTIAL LOAN",
    category: "Personal & Providential",
    tagline: "Financial Assistance for Essential Member Needs",
    shortDescription: "Flexible personal financial support designed to help SJMPC members cover providential expenses, family emergencies, or unexpected obligations.",
    loanAmount: "Up to ₱100,000 (subject to approval)",
    repaymentTerm: "6 to 24 months term",
    interestInformation: "Competitive interest based on cooperative policies",
    keyBenefits: [
      "Flexible repayment terms from 6 to 24 months",
      "Fast application review & friendly member service",
      "No hidden fees or unexpected penalty charges",
      "Available for all active cooperative members",
    ],
    href: "/loan-application",
    image: "/Services Showcase/Loan Services.jpg",
    Icon: ShieldCheck,
  },

  // 2. EDUCATIONAL LOAN
  {
    id: "educational-loan",
    name: "EDUCATIONAL LOAN",
    category: "Education & Tuition",
    tagline: "Accessible Financing for Tuition & Schooling Goals",
    shortDescription: "Invest in your family's future with low-interest educational financing designed to cover school tuition fees, books, laptops, and academic expenses.",
    loanAmount: "Up to ₱120,000 (subject to approval)",
    repaymentTerm: "12 to 48 months term",
    interestInformation: "Affordable interest rates tailored for student & parent members",
    keyBenefits: [
      "Structured terms up to 48 months for comfortable payments",
      "Covers tuition fees, books, and educational devices",
      "Fast turnaround time before enrollment deadlines",
      "Helps parents secure quality education for children",
    ],
    href: "/loan-application",
    image: "/images/583336515_1358093772463317_512346541910271086_n.jpg",
    Icon: GraduationCap,
  },

  // 3. REAL ESTATE LOAN
  {
    id: "real-estate-loan",
    name: "REAL ESTATE LOAN",
    category: "Property & Housing",
    tagline: "Support for Real Estate Purchase & Home Improvement",
    shortDescription: "Turn your property dreams into reality. Get substantial loan funding for lot acquisition, home construction, renovation, or real estate investment.",
    loanAmount: "Up to ₱500,000 (subject to approval)",
    repaymentTerm: "24 to 60 months term",
    interestInformation: "Affordable rates tailored for long-term property investments",
    keyBenefits: [
      "Substantial capital up to ₱500,000 for property projects",
      "Long-term repayment window up to 5 years (60 months)",
      "Low interest rates backed by cooperative security",
      "Ideal for land purchase, building, or major renovation",
    ],
    href: "/loan-application",
    image: "/images/433653723_8032419583452138_6238720083292977796_n.jpg",
    Icon: Home,
  },

  // 4. PENSION LOAN
  {
    id: "pension-loan",
    name: "PENSION LOAN",
    category: "Pensioner Support",
    tagline: "Financial Flexibility Aligned with Pension Income",
    shortDescription: "Tailored for retired members receiving regular pension benefits (SSS, GSIS, etc.). Get instant funds with hassle-free repayment schedules matched to your pension dates.",
    loanAmount: "Up to ₱150,000 (subject to approval)",
    repaymentTerm: "6 to 30 months term",
    interestInformation: "Competitive interest specialized for senior & pensioner members",
    keyBenefits: [
      "Easy approval process aligned with monthly pension deposits",
      "Flexible terms from 6 up to 30 months",
      "Provides extra financial safety for medical or family needs",
      "Honors senior members with dedicated service",
    ],
    href: "/loan-application",
    image: "/images/540980295_10235369655438843_7551540348210928825_n.jpg",
    Icon: BriefcaseBusiness,
  },

  // 5. SALARY LOAN
  {
    id: "salary-loan",
    name: "SALARY LOAN",
    category: "Income & Salary",
    tagline: "Quick Financial Boost Based on Regular Salary",
    shortDescription: "Designed for employed members needing quick liquidity for personal projects, bill consolidation, or family occasions, backed by regular employment income.",
    loanAmount: "Up to ₱150,000 (subject to approval)",
    repaymentTerm: "6 to 30 months term",
    interestInformation: "Competitive interest with fast payroll-aligned terms",
    keyBenefits: [
      "Streamlined application & fast approval for employed members",
      "Manageable monthly installments deducted seamlessly",
      "Flexible loan amounts up to ₱150,000",
      "Transparent cooperative terms without hidden charges",
    ],
    href: "/loan-application",
    image: "/images/540980295_10235369655438843_7551540348210928825_n.jpg",
    Icon: Banknote,
  },

  // 6. OFW LOAN
  {
    id: "ofw-loan",
    name: "OFW LOAN",
    category: "Overseas & Global",
    tagline: "Dedicated Financing for Overseas Filipino Workers",
    shortDescription: "Empower your family back home while working abroad. Specially designed financing for OFWs to fund business projects, family emergencies, or travel preparations.",
    loanAmount: "Up to ₱200,000 (subject to approval)",
    repaymentTerm: "12 to 48 months term",
    interestInformation: "Flexible payment schedules tailored for overseas remittances",
    keyBenefits: [
      "Customized terms accommodating overseas remittance cycles",
      "Higher loan ceiling up to ₱200,000",
      "Accessible through representative or family co-maker",
      "Supports household stability & long-term family investments",
    ],
    href: "/loan-application",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: Phone,
  },

  // 7. MICRO-ENTERPRISE LOAN
  {
    id: "micro-enterprise-loan",
    name: "MICRO-ENTERPRISE LOAN",
    category: "Business & Enterprise",
    tagline: "Capital Support to Grow Micro & Small Businesses",
    shortDescription: "Fuel your business growth! Obtain working capital for inventory restocking, equipment acquisition, store expansion, or enterprise operational needs.",
    loanAmount: "Up to ₱250,000 (subject to approval)",
    repaymentTerm: "12 to 36 months term",
    interestInformation: "Business-friendly rates designed to foster entrepreneur success",
    keyBenefits: [
      "Substantial enterprise capital up to ₱250,000",
      "Flexible 1 to 3 year repayment horizons",
      "Promotes local Antique business growth & livelihoods",
      "Guidance & support from cooperative financial advisors",
    ],
    href: "/loan-application",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: Building2,
  },

  // 8. AGRICULTURAL LOAN
  {
    id: "agricultural-loan",
    name: "AGRICULTURAL LOAN",
    category: "Agriculture & Farming",
    tagline: "Funding for Crops, Livestock & Farm Equipment",
    shortDescription: "Empowering local farmers and agricultural producers. Access seasonal financing for seeds, fertilizers, livestock feeds, machinery, and farm improvements.",
    loanAmount: "Up to ₱200,000 (subject to approval)",
    repaymentTerm: "12 to 48 months term",
    interestInformation: "Aligned with seasonal harvest cycles & agricultural cash flows",
    keyBenefits: [
      "Harvest-aligned payment structures matching farming cycles",
      "Covers seeds, fertilizers, machinery, and livestock",
      "Low interest supporting Antique agricultural communities",
      "Reliable financial partner for local farmers",
    ],
    href: "/loan-application",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Tractor,
  },

  // 9. PETTY CASH LOAN
  {
    id: "petty-cash-loan",
    name: "PETTY CASH LOAN",
    category: "Fast Cash & Urgent",
    tagline: "Quick Small-Scale Cash for Immediate Day-to-Day Needs",
    shortDescription: "A fast, hassle-free small loan designed to resolve urgent cash crunches, minor household repairs, or immediate utility bills with minimal paperwork.",
    loanAmount: "Up to ₱100,000 (subject to approval)",
    repaymentTerm: "3 to 12 months term",
    interestInformation: "Fast-track approval with clear short-term repayment",
    keyBenefits: [
      "Express processing & rapid disbursement",
      "Short 3 to 12 month repayment options",
      "Minimal documentary requirements",
      "Perfect safety net for sudden cash requirements",
    ],
    href: "/loan-application",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: Coins,
  },

  // 10. RICE LOAN
  {
    id: "rice-loan",
    name: "RICE LOAN",
    category: "Agricultural Production",
    tagline: "Specialized Financing for Rice Farmers & Supplies",
    shortDescription: "Targeted agricultural funding specifically tailored for rice farmers in Antique to cover planting season inputs, irrigation, and harvesting labor.",
    loanAmount: "Up to ₱200,000 (subject to approval)",
    repaymentTerm: "12 to 48 months term",
    interestInformation: "Specialized interest designed for rice cropping seasons",
    keyBenefits: [
      "Cropping cycle repayment schedule tailored for rice farmers",
      "Covers land preparation, seeds, fertilizers, and harvesting",
      "Cooperative commitment to rural agricultural prosperity",
      "Flexible terms supporting sustainable farming",
    ],
    href: "/loan-application",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Tractor,
  },

  // 11. MEDICAL LABORATORY LOAN
  {
    id: "medical-laboratory-loan",
    name: "MEDICAL LABORATORY LOAN",
    category: "Health & Medical",
    tagline: "Financial Assistance for Medical & Laboratory Needs",
    shortDescription: "Ensure health issues are addressed promptly. Get compassionate financing for medical laboratory tests, hospital bills, treatments, and health procedures.",
    loanAmount: "Up to ₱120,000 (subject to approval)",
    repaymentTerm: "12 to 48 months term",
    interestInformation: "Compassionate interest terms for healthcare needs",
    keyBenefits: [
      "Priority processing for urgent medical situations",
      "Covers laboratory tests, procedures, and medical expenses",
      "Flexible payment terms up to 48 months",
      "Protects family health without financial distress",
    ],
    href: "/loan-application",
    image: "/images/433653723_8032419583452138_6238720083292977796_n.jpg",
    Icon: Stethoscope,
  },

  // 12. CALAMITY LOAN
  {
    id: "calamity-loan",
    name: "CALAMITY LOAN",
    category: "Disaster Recovery",
    tagline: "Emergency Relief Financing for Typhoon & Calamity Recovery",
    shortDescription: "Quick financial relief for members affected by natural disasters, typhoons, or floods to rebuild damaged homes, restore livelihoods, and recover smoothly.",
    loanAmount: "Up to ₱100,000 (subject to approval)",
    repaymentTerm: "3 to 12 months term",
    interestInformation: "Low-interest emergency relief rate for affected members",
    keyBenefits: [
      "Express approval during declared disaster situations",
      "Low interest rate designed for disaster assistance",
      "Funds home repair, property restoration, and family needs",
      "Backed by SJMPC community solidarity & support",
    ],
    href: "/loan-application",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: AlertTriangle,
  },
];


