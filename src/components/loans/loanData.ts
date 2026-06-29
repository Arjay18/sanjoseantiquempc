"use client";

import { Building2, Tractor, BriefcaseBusiness, GraduationCap, Home, Phone, ShieldCheck, AlertTriangle } from "lucide-react";

export type LoanProduct = {
  name: string;
  shortDescription: string;
  loanAmount: string;
  repaymentTerm: string;
  interestInformation: string;
  href: string;
  image: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const LOAN_PRODUCTS: LoanProduct[] = [
  {
    name: "Regular Loan",
    shortDescription: "A member-friendly loan package for everyday needs.",
    loanAmount: "Up to ₱100,000 (subject to approval)",
    repaymentTerm: "6 to 24 months",
    interestInformation: "Competitive interest based on cooperative policies",
    href: "/loan-packages",
    image: "/Services Showcase/Loan Services.jpg",
    Icon: ShieldCheck,
  },
  {
    name: "Business Loan",
    shortDescription: "Support for micro and small businesses to grow and expand.",
    loanAmount: "Up to ₱250,000 (subject to approval)",
    repaymentTerm: "12 to 36 months",
    interestInformation: "Affordable rates for business members",
    href: "/loan-packages",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: Building2,
  },
  {
    name: "Agricultural Loan",
    shortDescription: "Financing for farming, livestock, and agricultural activities.",
    loanAmount: "Up to ₱200,000 (subject to approval)",
    repaymentTerm: "12 to 48 months",
    interestInformation: "Interest designed for agriculture cash-flow needs",
    href: "/loan-packages",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Tractor,
  },
  {
    name: "Salary Loan",
    shortDescription: "Loans based on regular salary income with quick processing.",
    loanAmount: "Up to ₱150,000 (subject to approval)",
    repaymentTerm: "6 to 30 months",
    interestInformation: "Competitive interest for salaried members",
    href: "/loan-packages",
    image: "/images/540980295_10235369655438843_7551540348210928825_n.jpg",
    Icon: BriefcaseBusiness,
  },
  {
    name: "Educational Loan",
    shortDescription: "Financing for tuition and educational goals.",
    loanAmount: "Up to ₱120,000 (subject to approval)",
    repaymentTerm: "12 to 48 months",
    interestInformation: "Interest based on approved loan terms",
    href: "/loan-packages",
    image: "/images/583336515_1358093772463317_512346541910271086_n.jpg",
    Icon: GraduationCap,
  },
  {
    name: "Housing Loan",
    shortDescription: "Help fund your home and property improvement needs.",
    loanAmount: "Up to ₱500,000 (subject to approval)",
    repaymentTerm: "24 to 60 months",
    interestInformation: "Affordable rates for long-term housing plans",
    href: "/loan-packages",
    image: "/images/433653723_8032419583452138_6238720083292977796_n.jpg",
    Icon: Home,
  },
  {
    name: "Multi-Purpose Loan",
    shortDescription: "Flexible financing for multiple member needs.",
    loanAmount: "Up to ₱300,000 (subject to approval)",
    repaymentTerm: "12 to 48 months",
    interestInformation: "Low interest options depending on package",
    href: "/loan-packages",
    image: "/images/584711177_10236308089939119_4315614434674993906_n.jpg",
    Icon: Phone,
  },
  {
    name: "Emergency Loan",
    shortDescription: "Quick financial support during urgent and unexpected situations.",
    loanAmount: "Up to ₱100,000 (subject to approval)",
    repaymentTerm: "3 to 12 months",
    interestInformation: "Fast approval with clear repayment terms",
    href: "/loan-packages",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: AlertTriangle,
  },
];

