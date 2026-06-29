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
  // SAVINGS PRODUCT
  {
    name: "SAVING DEPOSIT",
    shortDescription: "Flexible savings for everyday financial goals.",
    minimumInitialDeposit: "₱100 minimum deposit",
    dividendInformation: "Dividends credited based on cooperative performance",
    keyBenefits: ["Anytime withdrawal", "Competitive interest potential", "Easy member access"],
    href: "/savings-product",
    image: "/Services Showcase/Saviings Services.jpg",
    Icon: ShieldCheck,
  },
  {
    name: "TIME DEPOSIT",
    shortDescription: "Fixed term savings designed for steadier growth.",
    minimumInitialDeposit: "₱5,000 minimum deposit",
    dividendInformation: "Interest/dividends vary by amount and term",
    keyBenefits: ["Higher returns with fixed terms", "Certificate for each account", "Planned savings horizon"],
    href: "/savings-product",
    image: "/Services Showcase/Member Services.jpg",
    Icon: Clock,
  },
  {
    name: "ULTIMA SAVINGS",
    shortDescription: "Long-term plan for long-range financial stability.",
    minimumInitialDeposit: "Based on monthly pledge amount",
    dividendInformation: "Principal and interest credited upon maturity",
    keyBenefits: ["5 or 10 year terms", "Structured monthly pledge", "Long-term confidence"],
    href: "/savings-product",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: Sparkles,
  },
  {
    name: "ALKANSYA SAVING",
    shortDescription: "A 2-year savings plan to help you grow steadily.",
    minimumInitialDeposit: "No minimum pledge amount",
    dividendInformation: "Principal and interest credited upon maturity to regular savings",
    keyBenefits: ["2-year term", "No minimum pledge", "Maturity payout to regular savings"],
    href: "/savings-product",
    image: "/images/584711177_10236308089939119_4315614434674993906_n.jpg",
    Icon: Coins,
  },

  // SPECIAL SAVINGS PRODUCT
  {
    name: "RETIREMENT SAVINGS",
    shortDescription: "A retirement plan to prepare for your next chapter.",
    minimumInitialDeposit: "₱500 initial minimum deposit",
    dividendInformation: "Principal and interest credited to regular savings upon maturity",
    keyBenefits: ["5-year retirement planning", "Clear savings term", "Community-backed security"],
    href: "/savings-product",
    image: "/images/433653723_8032419583452138_6238720083292977796_n.jpg",
    Icon: Heart,
  },
  {
    name: "BAPTISM SAVINGS",
    shortDescription: "Dedicated savings for baptism celebrations and milestones.",
    minimumInitialDeposit: "Flexible monthly deposits",
    dividendInformation: "Dividends credited based on plan terms",
    keyBenefits: ["Dedicated goal planning", "Flexible schedule", "Help fund specific events"],
    href: "/savings-product",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Gift,
  },
  {
    name: "DEBUT SAVINGS",
    shortDescription: "Savings designed for debut events and special occasions.",
    minimumInitialDeposit: "Flexible monthly deposits",
    dividendInformation: "Dividends credited based on plan terms",
    keyBenefits: ["Dedicated goal planning", "Flexible schedule", "Help fund specific events"],
    href: "/savings-product",
    image: "/images/540980295_10235369655438843_7551540348210928825_n.jpg",
    Icon: Gift,
  },
  {
    name: "ANNIVERSARY SAVINGS",
    shortDescription: "Dedicated savings for anniversaries and important family dates.",
    minimumInitialDeposit: "Flexible monthly deposits",
    dividendInformation: "Dividends credited based on plan terms",
    keyBenefits: ["Dedicated goal planning", "Flexible schedule", "Help fund specific events"],
    href: "/savings-product",
    image: "/images/583336515_1358093772463317_512346541910271086_n.jpg",
    Icon: Gift,
  },
  {
    name: "WEDDING SAVINGS",
    shortDescription: "Savings to prepare for wedding celebrations.",
    minimumInitialDeposit: "Flexible monthly deposits",
    dividendInformation: "Dividends credited based on plan terms",
    keyBenefits: ["Dedicated goal planning", "Flexible schedule", "Help fund specific events"],
    href: "/savings-product",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Gift,
  },
  {
    name: "FIESTA SAVINGS",
    shortDescription: "Savings for fiesta celebrations and community events.",
    minimumInitialDeposit: "Flexible monthly deposits",
    dividendInformation: "Dividends credited based on plan terms",
    keyBenefits: ["Dedicated goal planning", "Flexible schedule", "Help fund specific events"],
    href: "/savings-product",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Gift,
  },
  {
    name: "TRAVEL AND LEISURE SAVINGS",
    shortDescription: "Save for travel plans and leisure goals.",
    minimumInitialDeposit: "Flexible monthly deposits",
    dividendInformation: "Dividends credited based on plan terms",
    keyBenefits: ["Dedicated goal planning", "Flexible schedule", "Help fund specific events"],
    href: "/savings-product",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Gift,
  },
  {
    name: "EMERGENCY SAVINGS",
    shortDescription: "Set aside funds for unexpected needs and emergencies.",
    minimumInitialDeposit: "Flexible monthly deposits",
    dividendInformation: "Dividends credited based on plan terms",
    keyBenefits: ["Dedicated goal planning", "Flexible schedule", "Help fund specific events"],
    href: "/savings-product",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Gift,
  },
  {
    name: "CALAMITY SAVINGS",
    shortDescription: "Savings prepared for natural calamities and recovery.",
    minimumInitialDeposit: "Flexible monthly deposits",
    dividendInformation: "Dividends credited based on plan terms",
    keyBenefits: ["Dedicated goal planning", "Flexible schedule", "Help fund specific events"],
    href: "/savings-product",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Gift,
  },
];

