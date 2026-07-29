"use client";

import {
  ShieldCheck,
  Clock,
  Coins,
  Sparkles,
  Heart,
  Gift,
  Plane,
  AlertTriangle,
  Home,
  Church,
  Calendar,
  GraduationCap,
  Award,
} from "lucide-react";

export type SavingsProduct = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  shortDescription: string;
  minimumInitialDeposit: string;
  dividendInformation: string;
  keyBenefits: string[];
  href: string;
  image: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const SAVINGS_PRODUCTS: SavingsProduct[] = [
  // 1. SAVING DEPOSIT
  {
    id: "saving-deposit",
    name: "SAVING DEPOSIT",
    category: "Essential Savings",
    tagline: "Member Requirement & Daily Liquid Savings",
    shortDescription: "A mandatory requirement for all SJMPC members with a low ₱500.00 maintaining balance. Accessible anytime with flexible deposits and withdrawals to build your financial foundation.",
    minimumInitialDeposit: "₱500 maintaining balance / ₱100 minimum deposit",
    dividendInformation: "Dividends credited based on annual cooperative earnings & performance",
    keyBenefits: [
      "Liquid account with anytime withdrawal access",
      "Qualifies member for cooperative loans & services",
      "Earns competitive interest on maintaining balance",
      "No locking period or restriction on deposits",
    ],
    href: "/online-application",
    image: "/Services Showcase/Saviings Services.jpg",
    Icon: ShieldCheck,
  },

  // 2. TIME DEPOSIT
  {
    id: "time-deposit",
    name: "TIME DEPOSIT",
    category: "High-Yield Term",
    tagline: "Fixed Term Savings for Steadier Growth",
    shortDescription: "Certificate-backed high interest savings account for members looking to lock in higher returns over a set term. Higher deposit amounts and longer terms yield maximum dividends.",
    minimumInitialDeposit: "₱5,000.00 minimum initial deposit",
    dividendInformation: "Guaranteed higher interest rates scaled by deposit tier & duration",
    keyBenefits: [
      "Official certificate issued for every account opened",
      "Tiered interest structure for maximum capital growth",
      "Flexible term horizons from 3 months to multi-year",
      "Protected, low-risk cooperative investment",
    ],
    href: "/online-application",
    image: "/Services Showcase/Member Services.jpg",
    Icon: Clock,
  },

  // 3. ULTIMA SAVINGS
  {
    id: "ultima-savings",
    name: "ULTIMA SAVINGS",
    category: "Long-Term Wealth",
    tagline: "5 to 10 Year Disciplined Monthly Savings Plan",
    shortDescription: "Structured monthly savings pledge over 5 or 10 years designed for long-range financial security and wealth building. Complete principal and compound interest are paid out upon maturity.",
    minimumInitialDeposit: "Based on chosen monthly pledge commitment",
    dividendInformation: "Principal & accumulated interest credited directly to regular savings at maturity",
    keyBenefits: [
      "Flexible 5-year or 10-year term options",
      "Encourages disciplined monthly savings habits",
      "Compounding interest potential for long-term goals",
      "Ideal for home buying, business startup, or legacy funds",
    ],
    href: "/online-application",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: Sparkles,
  },

  // 4. ALKANSYA SAVING
  {
    id: "alkansya-saving",
    name: "ALKANSYA SAVING",
    category: "2-Year Term Plan",
    tagline: "Hassle-Free 2-Year Savings Without Minimum Pledges",
    shortDescription: "A regular savings account featuring a fixed 2-year term with no minimum monthly pledge requirement. Deposit whenever you can, and enjoy a full lump-sum payout upon maturity.",
    minimumInitialDeposit: "No minimum pledge amount required",
    dividendInformation: "Full principal and earned interest credited to regular savings upon maturity",
    keyBenefits: [
      "Fixed 2-year maturity horizon",
      "Complete freedom on deposit amounts and frequency",
      "Automatic transfer to regular savings at maturity",
      "Great for short-to-medium range personal milestones",
    ],
    href: "/online-application",
    image: "/images/584711177_10236308089939119_4315614434674993906_n.jpg",
    Icon: Coins,
  },

  // 5. RETIREMENT SAVINGS
  {
    id: "retirement-savings",
    name: "RETIREMENT SAVINGS",
    category: "Future & Retirement",
    tagline: "Secure Financial Peace of Mind for Your Post-Work Years",
    shortDescription: "A dedicated 5-year savings program for SJMPC members starting with as low as ₱500. Prepare comfortably for retirement while earning competitive returns safely.",
    minimumInitialDeposit: "₱500.00 initial minimum deposit",
    dividendInformation: "Principal and interest earnings credited upon 5-year maturity",
    keyBenefits: [
      "5-year goal-oriented retirement planning",
      "Low ₱500 initial deposit to get started easily",
      "Cooperative safety ensuring funds are protected",
      "Builds a reliable nest egg for post-career comfort",
    ],
    href: "/online-application",
    image: "/images/433653723_8032419583452138_6238720083292977796_n.jpg",
    Icon: Heart,
  },

  // 6. BAPTISM SAVINGS
  {
    id: "baptism-savings",
    name: "BAPTISM SAVINGS",
    category: "Special Milestone",
    tagline: "Dedicated Savings for your Child's Sacred Welcome",
    shortDescription: "Plan ahead for baptismal ceremonies, receptions, and godparent celebrations with a flexible monthly savings plan tailored for young parents.",
    minimumInitialDeposit: "Flexible monthly deposit schedule",
    dividendInformation: "Dividends credited based on savings plan terms & maturity",
    keyBenefits: [
      "Purpose-built fund for family celebrations",
      "Customizable deposit amounts according to budget",
      "Stress-free event financing without taking loans",
      "Payout safely transferred at maturity",
    ],
    href: "/online-application",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Gift,
  },

  // 7. DEBUT SAVINGS
  {
    id: "debut-savings",
    name: "DEBUT SAVINGS",
    category: "Special Milestone",
    tagline: "Fund an Unforgettable 18th Birthday Celebration",
    shortDescription: "Save systematically for your daughter's or loved one's 18th debut celebration. Ensure venue, attire, and party arrangements are fully covered.",
    minimumInitialDeposit: "Flexible monthly deposit schedule",
    dividendInformation: "Dividends & principal credited upon plan maturity",
    keyBenefits: [
      "Multi-year accumulation path leading to the 18th birthday",
      "Avoid last-minute financial strain for big events",
      "Earn dividends while saving for milestone parties",
      "Flexible contributions adjusted to household income",
    ],
    href: "/online-application",
    image: "/images/540980295_10235369655438843_7551540348210928825_n.jpg",
    Icon: Gift,
  },

  // 8. ANNIVERSARY SAVINGS
  {
    id: "anniversary-savings",
    name: "ANNIVERSARY SAVINGS",
    category: "Special Milestone",
    tagline: "Celebrate Life's Greatest Milestones Stress-Free",
    shortDescription: "Set aside funds for wedding anniversaries, cooperative milestones, and family jubilees with dedicated recurring savings.",
    minimumInitialDeposit: "Flexible monthly deposit schedule",
    dividendInformation: "Dividends & earnings credited upon maturity",
    keyBenefits: [
      "Targeted goal setting for marital or company anniversaries",
      "Flexible contribution terms",
      "Guaranteed payout ready when the anniversary date arrives",
      "Interest earning power superior to standard accounts",
    ],
    href: "/online-application",
    image: "/images/583336515_1358093772463317_512346541910271086_n.jpg",
    Icon: Calendar,
  },

  // 9. WEDDING SAVINGS
  {
    id: "wedding-savings",
    name: "WEDDING SAVINGS",
    category: "Special Milestone",
    tagline: "Prepare for Your Dream Nuptials & New Beginnings",
    shortDescription: "Build a solid financial foundation for your wedding day and marital life with a dedicated couple's savings plan.",
    minimumInitialDeposit: "Flexible monthly deposit schedule",
    dividendInformation: "Principal and interest credited upon plan maturity",
    keyBenefits: [
      "Helps couples plan future nuptials with confidence",
      "Structured path to cover catering, venue, and attire",
      "Cooperative dividends augment total wedding savings",
      "Safe, transparent account tracking",
    ],
    href: "/online-application",
    image: "/Services Showcase/LOAN and Savings/ChatGPT Image Jul 11, 2026, 10_05_20 AM.png",
    Icon: Heart,
  },

  // 10. FIESTA SAVINGS
  {
    id: "fiesta-savings",
    name: "FIESTA SAVINGS",
    category: "Community & Culture",
    tagline: "Be Fiesta-Ready Every Year Without Financial Stress",
    shortDescription: "Save in advance for annual town, barangay, and patron saint fiesta celebrations so your household is ready to welcome family and guests.",
    minimumInitialDeposit: "Flexible monthly deposit schedule",
    dividendInformation: "Annual payout timed ahead of fiesta season",
    keyBenefits: [
      "Prevents holiday debt by saving months ahead",
      "Automatic maturity timing before local fiesta dates",
      "Flexible monthly contributions",
      "Dedicated fund for food, decor, and family gatherings",
    ],
    href: "/online-application",
    image: "/Services Showcase/LOAN and Savings/ChatGPT Image Jul 11, 2026, 10_05_43 AM.png",
    Icon: Award,
  },

  // 11. TRAVEL AND LEISURE SAVINGS
  {
    id: "travel-savings",
    name: "TRAVEL AND LEISURE SAVINGS",
    category: "Life & Vacation",
    tagline: "Turn Your Dream Vacations & Trips Into Reality",
    shortDescription: "A dedicated vacation fund designed to help you save for domestic and international travel, family getaways, and leisure pursuits.",
    minimumInitialDeposit: "Flexible monthly deposit schedule",
    dividendInformation: "Dividends & principal credited upon plan maturity",
    keyBenefits: [
      "Goal-driven travel fund for hassle-free vacations",
      "Disciplined savings path prevents credit card debt",
      "Cooperative earnings help boost total trip budget",
      "Flexible deposit frequency",
    ],
    href: "/online-application",
    image: "/Services Showcase/LOAN and Savings/ChatGPT Image Jul 11, 2026, 10_05_50 AM.png",
    Icon: Plane,
  },

  // 12. EMERGENCY SAVINGS
  {
    id: "emergency-savings",
    name: "EMERGENCY SAVINGS",
    category: "Financial Safety Net",
    tagline: "Build a Secure Safety Cushion for Unforeseen Life Events",
    shortDescription: "Prepare for unexpected medical bills, home repairs, or sudden income disruptions with a dedicated emergency fund.",
    minimumInitialDeposit: "Flexible monthly deposit schedule",
    dividendInformation: "Competitive interest credited with quick liquidity upon need",
    keyBenefits: [
      "Provides vital peace of mind for you and your family",
      "Disciplined emergency reserve separate from daily cash",
      "Cooperative protection ensuring security of funds",
      "Supports financial resilience against life surprises",
    ],
    href: "/online-application",
    image: "/Services Showcase/LOAN and Savings/ChatGPT Image Jul 11, 2026, 10_05_56 AM.png",
    Icon: ShieldCheck,
  },

  // 13. CALAMITY SAVINGS
  {
    id: "calamity-savings",
    name: "CALAMITY SAVINGS",
    category: "Disaster Preparedness",
    tagline: "Emergency Recovery Shield for Natural Disasters",
    shortDescription: "Specialized savings plan tailored for typhoon, flood, earthquake, and disaster recovery so you have instant financial backing when nature strikes.",
    minimumInitialDeposit: "Flexible monthly deposit schedule",
    dividendInformation: "Dividends credited continuously with emergency withdrawal protocols",
    keyBenefits: [
      "Essential climate & disaster resilience safeguard",
      "Immediate assistance and liquidity during declared calamities",
      "Protects family property and recovery needs",
      "Backed by SJMPC community solidarity",
    ],
    href: "/online-application",
    image: "/Services Showcase/LOAN and Savings/ChatGPT Image Jul 11, 2026, 10_06_01 AM.png",
    Icon: AlertTriangle,
  },
];


