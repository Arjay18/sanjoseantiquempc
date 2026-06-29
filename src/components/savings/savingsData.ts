"use client";

import {
  ShieldCheck,
  Clock,
  Coins,
  GraduationCap,
  Baby,
  Sparkles,
  Heart,
  Gift,
} from "lucide-react";

export type SavingsProduct = {
  name: string;
  shortDescription: string;
  minimumInitialDeposit: string;
  dividendInformation: string;
  keyBenefits: string[];
  href: string;
  image: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const SAVINGS_PRODUCTS: SavingsProduct[] = [
  {
    name: "Regular Savings",
    shortDescription: "Flexible savings for everyday financial goals.",
    minimumInitialDeposit: "₱100 minimum deposit",
    dividendInformation: "Dividends credited based on cooperative performance",
    keyBenefits: [
      "Anytime withdrawal",
      "Competitive interest potential",
      "Easy member access",
    ],
    href: "/savings-product",
    image: "/Services Showcase/Saviings Services.jpg",
    Icon: ShieldCheck,
  },
  {
    name: "Time Deposit",
    shortDescription: "Fixed term savings designed for steadier growth.",
    minimumInitialDeposit: "₱5,000 minimum deposit",
    dividendInformation: "Interest/dividends vary by amount and term",
    keyBenefits: [
      "Higher returns with fixed terms",
      "Certificate for each account",
      "Planned savings horizon",
    ],
    href: "/savings-product",
    image: "/Services Showcase/Member Services.jpg",
    Icon: Clock,
  },
  {
    name: "Alkansya Savings",
    shortDescription: "A 2-year savings plan to help you grow steadily.",
    minimumInitialDeposit: "No minimum pledge amount",
    dividendInformation: "Principal and interest credited upon maturity to regular savings",
    keyBenefits: [
      "2-year term",
      "No minimum pledge",
      "Maturity payout to regular savings",
    ],
    href: "/savings-product",
    image: "/images/584711177_10236308089939119_4315614434674993906_n.jpg",
    Icon: Coins,
  },
  {
    name: "Educational Savings",
    shortDescription: "Plan tuition and academic expenses with discipline.",
    minimumInitialDeposit: "₱1,000 minimum initial deposit",
    dividendInformation: "Dividends credited according to plan terms",
    keyBenefits: [
      "Flexible plan scheduling",
      "Goal-driven saving",
      "Support for education expenses",
    ],
    href: "/savings-product",
    image: "/images/540980295_10235369655438843_7551540348210928825_n.jpg",
    Icon: GraduationCap,
  },
  {
    name: "Kiddie Savings",
    shortDescription: "Start young: savings for children with guidance.",
    minimumInitialDeposit: "₱100 minimum deposit",
    dividendInformation: "Dividends credited based on cooperative policies",
    keyBenefits: [
      "Introduces saving habits early",
      "Family-assisted account management",
      "Safe and simple saving",
    ],
    href: "/savings-product",
    image: "/images/583336515_1358093772463317_512346541910271086_n.jpg",
    Icon: Baby,
  },
  {
    name: "Ultima Savings",
    shortDescription: "Long-term plan for long-range financial stability.",
    minimumInitialDeposit: "Based on monthly pledge amount",
    dividendInformation: "Principal and interest credited upon maturity",
    keyBenefits: [
      "5 or 10 year terms",
      "Structured monthly pledge",
      "Long-term confidence",
    ],
    href: "/savings-product",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: Sparkles,
  },
  {
    name: "Retirement Savings",
    shortDescription: "A retirement plan to prepare for your next chapter.",
    minimumInitialDeposit: "₱500 initial minimum deposit",
    dividendInformation: "Principal and interest credited to regular savings upon maturity",
    keyBenefits: [
      "5-year retirement planning",
      "Clear savings term",
      "Community-backed security",
    ],
    href: "/savings-product",
    image: "/images/433653723_8032419583452138_6238720083292977796_n.jpg",
    Icon: Heart,
  },
  {
    name: "Special Purpose Savings",
    shortDescription: "Tailored savings for life goals, celebrations, and needs.",
    minimumInitialDeposit: "Flexible monthly deposits",
    dividendInformation: "Dividends credited based on plan terms",
    keyBenefits: [
      "Dedicated goal planning",
      "Flexible schedule",
      "Help fund specific events",
    ],
    href: "/savings-product",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Gift,
  },
];

