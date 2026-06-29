'use client';

import React from 'react';

import HeroSection from '@/components/head-office-management-staff/HeroSection';
import CoreValues from '@/components/head-office-management-staff/CoreValues';
import DepartmentSection, { type DepartmentMember } from '@/components/head-office-management-staff/DepartmentSection';
import CommitmentSection from '@/components/head-office-management-staff/CommitmentSection';
import CallToAction from '@/components/head-office-management-staff/CallToAction';
import { ShieldCheck, Users, Calculator, Wallet, UserCheck, Landmark, Megaphone } from 'lucide-react';

const staffData: {
  mainOffice: DepartmentMember[];
  administrativeSection: DepartmentMember[];
  accountingSection: DepartmentMember[];
  tellerSection: DepartmentMember[];
  accountOfficerSection: DepartmentMember[];
  loanSection: DepartmentMember[];
  marketingAssistantSection: DepartmentMember[];
} = {
  mainOffice: [
    {
      name: 'RODELYN I. VERA CRUZ-BERTO',
      position: 'General Manager',
      image: '/Management%20and%20Staff/Main%20Office/Admin/RODELYN%20I.%20VERA%20CRUZ%20BERTO.jpg',
    },
  ],
  administrativeSection: [
    {
      name: 'PHOEBE T. SASOTA',
      position: 'Clerk',
      image: '/Management%20and%20Staff/Main%20Office/Admin/PHOEBE%20T.%20SASOTA.jpg',
    },
    {
      name: 'MERVIN A. JONELA',
      position: 'Clerk',
      image: '/Management%20and%20Staff/Main%20Office/Admin/MERVIN%20A.%20JONELA.jpg',
    },
    {
      name: 'ROCKY C. SEBAN',
      position: 'Driver/ Maintenance Clerk',
      image: '/Management%20and%20Staff/Main%20Office/Admin/ROCKY%20C.%20SEBAN.jpg',
    },
    {
      name: 'JUDELYN M. SANTILLAN',
      position: 'Clerk',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'MARILOU T. ANTONIO',
      position: 'HR',
      image: '/Management%20and%20Staff/Main%20Office/Admin/MARILOU%20T.%20ANTONIO.jpg',
    },
    {
      name: 'ARJAY D. DOMINGO',
      position: 'IT JO',
      image: '/Management%20and%20Staff/Main%20Office/Admin/ARJAY%20DOMINGO.jpg',
    },
  ],
  accountingSection: [
    {
      name: 'GERALDINE R. CATALDAVAN',
      position: 'Accountant',
      image: '/Management%20and%20Staff/Main%20Office/Accounting/geraldine%20cataldavan.png',
    },
    {
      name: 'KAREN KAYE G. JUANILLO',
      position: 'Bookkeeper',
      image: '/Management%20and%20Staff/Main%20Office/Accounting/karen%20kaye%20bacanto.png',
    },
    {
      name: 'SUNSHINE E. LABRADOR',
      position: 'Bookkeeper',
      image: '/Management%20and%20Staff/Main%20Office/Accounting/sunshine%20labrador2.png',
    },
    {
      name: 'MYCA JANE PAGUNALING',
      position: 'Accounting Clerk',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
  ],
  tellerSection: [
    {
      name: 'MICHELLE MARIE REQUIRON',
      position: 'Clerk, JO',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/michelle%20requiron.png',
    },
    {
      name: 'CRISTINE JOY P. VIRGO',
      position: 'Teller',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/Kristine%20Joy%20Virgo.png',
    },
    {
      name: 'DARYL B. BETITA',
      position: 'Teller',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/daryl%20betita.png',
    },
    {
      name: 'ERYNE MAE T. MIQUELA',
      position: 'Cashier',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/eryne%20may%20miquela1.png',
    },
    {
      name: 'GENEROSO S. UMBAT, JR.',
      position: 'Teller',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/generoso%20umbat.png',
    },
    {
      name: 'FRITZ INOT',
      position: 'Account Officer, JO',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
  ],
  accountOfficerSection: [
    {
      name: 'GLENN D. MISAJON',
      position: 'Account Officer',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/glenn%20misajon.png',
    },
    {
      name: 'LAMBERT S. LABIAO',
      position: 'Account Officer',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/lamber%20labiao.png',
    },
    {
      name: 'CHARLO C. CASIDSID',
      position: 'Account Officer',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/charlo%20casidsid.png',
    },
    {
      name: 'RAV S. CAPISTRANO',
      position: 'Account Officer',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'GERSHOM JAY P. ALENTAJAN',
      position: 'Account Officer',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
  ],
  loanSection: [
    {
      name: 'JASMIN JOY N. MAGBANUA',
      position: 'Clerk, Loan Processor',
      image: '/Management%20and%20Staff/Main%20Office/Loans/jasmine%20joy%20manbanua.png',
    },
    {
      name: 'CRISTY C. MAGBANUA',
      position: 'Clerk, Loan Monitoring',
      image: '/Management%20and%20Staff/Main%20Office/Loans/cristy%20magbanua.png',
    },
    {
      name: 'MA. RAFONCEL T. SANOY',
      position: 'OIC Loan Officer',
      image: '/Management%20and%20Staff/Main%20Office/Loans/rafoncel%20sanoy.png',
    },
    {
      name: 'WENDAI MAE ELIZALDE',
      position: 'Clerk, JO',
      image: '/Management%20and%20Staff/Main%20Office/Loans/wendai%20mae%20elizalde.png',
    },
    {
      name: 'JULIUS E. CALANOG',
      position: 'CIBI',
      image: '/Management%20and%20Staff/Main%20Office/Loans/julius%20calanog.png',
    },
  ],
  marketingAssistantSection: [
    {
      name: 'JOANN MAE T. LAZARO',
      position: 'Marketing Assistant',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'GLOREANNE P. MANA-AY',
      position: 'Marketing Assistant',
      image: '/Management%20and%20Staff/Main%20Office/Admin/GLOREANNE%20P.%20MANA-AY.jpg',
    },
    {
      name: 'NOEMI M. SITCHON',
      position: 'Marketing Assistant',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
  ],
};

export default function HeadOfficeManagementStaffPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <HeroSection />

      <CoreValues />

      <div id="team" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        {/* Main office / leadership */}
        <DepartmentSection title="Executive Leadership" members={staffData.mainOffice} badgeIcon={ShieldCheck} />

        <DepartmentSection title="Administrative Section" members={staffData.administrativeSection} badgeIcon={Users} />
        <DepartmentSection title="Accounting Section" members={staffData.accountingSection} badgeIcon={Calculator} />
        <DepartmentSection title="Teller Section" members={staffData.tellerSection} badgeIcon={Wallet} />
        <DepartmentSection title="Account Officer Section" members={staffData.accountOfficerSection} badgeIcon={UserCheck} />
        <DepartmentSection title="Loan Section" members={staffData.loanSection} badgeIcon={Landmark} />
        <DepartmentSection title="Marketing Assistant Section" members={staffData.marketingAssistantSection} badgeIcon={Megaphone} />
      </div>

      <CommitmentSection />
      <CallToAction />
    </main>
  );
}

