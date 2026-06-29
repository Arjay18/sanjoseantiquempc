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
    name: "PROVIDENTIAL LOAN",
    shortDescription: "Financial assistance designed to support providential member needs.",
    loanAmount: "Up to ₱100,000 (subject to approval)",
    repaymentTerm: "6 to 24 months",
    interestInformation: "Competitive interest based on cooperative policies",
    href: "/loan-packages",
    image: "/Services Showcase/Loan Services.jpg",
    Icon: ShieldCheck,
  },
  {
    name: "EDUCATIONAL LOAN",
    shortDescription: "Financing for tuition and educational goals.",
    loanAmount: "Up to ₱120,000 (subject to approval)",
    repaymentTerm: "12 to 48 months",
    interestInformation: "Interest based on approved loan terms",
    href: "/loan-packages",
    image: "/images/583336515_1358093772463317_512346541910271086_n.jpg",
    Icon: GraduationCap,
  },
  {
    name: "REAL STATE LOAN",
    shortDescription: "Support for real estate needs and property-related investments.",
    loanAmount: "Up to ₱500,000 (subject to approval)",
    repaymentTerm: "24 to 60 months",
    interestInformation: "Affordable rates for long-term property plans",
    href: "/loan-packages",
    image: "/images/433653723_8032419583452138_6238720083292977796_n.jpg",
    Icon: Home,
  },
  {
    name: "PENSION LOAN",
    shortDescription: "Loans aligned with pension income to provide additional financial flexibility.",
    loanAmount: "Up to ₱150,000 (subject to approval)",
    repaymentTerm: "6 to 30 months",
    interestInformation: "Competitive interest for members with pension income",
    href: "/loan-packages",
    image: "/images/540980295_10235369655438843_7551540348210928825_n.jpg",
    Icon: BriefcaseBusiness,
  },
  {
    name: "SALARY LOAN",
    shortDescription: "Loans based on regular salary income with quick processing.",
    loanAmount: "Up to ₱150,000 (subject to approval)",
    repaymentTerm: "6 to 30 months",
    interestInformation: "Competitive interest for salaried members",
    href: "/loan-packages",
    image: "/images/540980295_10235369655438843_7551540348210928825_n.jpg",
    Icon: BriefcaseBusiness,
  },
  {
    name: "OFW LOAN",
    shortDescription: "Support for overseas Filipino workers to address family and personal needs.",
    loanAmount: "Up to ₱200,000 (subject to approval)",
    repaymentTerm: "12 to 48 months",
    interestInformation: "Interest based on approved loan terms",
    href: "/loan-packages",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: Phone,
  },
  {
    name: "MICRO-ENTREPRISE LOAN",
    shortDescription: "Financing for micro-enterprise initiatives to help your business grow.",
    loanAmount: "Up to ₱250,000 (subject to approval)",
    repaymentTerm: "12 to 36 months",
    interestInformation: "Affordable rates for business members",
    href: "/loan-packages",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: Building2,
  },
  {
    name: "AGRICULTURAL LOAN",
    shortDescription: "Financing for farming, livestock, and agricultural activities.",
    loanAmount: "Up to ₱200,000 (subject to approval)",
    repaymentTerm: "12 to 48 months",
    interestInformation: "Interest designed for agriculture cash-flow needs",
    href: "/loan-packages",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Tractor,
  },
  {
    name: "PETTY CASH LOAN",
    shortDescription: "Small, practical financing for urgent day-to-day expenses.",
    loanAmount: "Up to ₱100,000 (subject to approval)",
    repaymentTerm: "3 to 12 months",
    interestInformation: "Fast approval with clear repayment terms",
    href: "/loan-packages",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: AlertTriangle,
  },
  {
    name: "RICE LOAN",
    shortDescription: "Support for rice production and related agricultural activities.",
    loanAmount: "Up to ₱200,000 (subject to approval)",
    repaymentTerm: "12 to 48 months",
    interestInformation: "Interest designed for agriculture cash-flow needs",
    href: "/loan-packages",
    image: "/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg",
    Icon: Tractor,
  },
  {
    name: "MEDICAL LABORATORY LOAN",
    shortDescription: "Financing to support medical laboratory needs and services.",
    loanAmount: "Up to ₱120,000 (subject to approval)",
    repaymentTerm: "12 to 48 months",
    interestInformation: "Interest based on approved loan terms",
    href: "/loan-packages",
    image: "/images/433653723_8032419583452138_6238720083292977796_n.jpg",
    Icon: ShieldCheck,
  },
  {
    name: "CALAMITY LOAN",
    shortDescription: "Financial support for recovery from natural calamities.",
    loanAmount: "Up to ₱100,000 (subject to approval)",
    repaymentTerm: "3 to 12 months",
    interestInformation: "Fast approval with clear repayment terms",
    href: "/loan-packages",
    image: "/images/597403592_1403798674673184_7189129226940101753_n.jpg",
    Icon: AlertTriangle,
  },
];

