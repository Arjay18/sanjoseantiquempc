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
      name: 'Rodelyn I. Vera Cruz',
      position: 'Chief Executive Officer',
      image: '/Management%20and%20Staff/Main%20Office/Admin/RODELYN%20I.%20VERA%20CRUZ%20BERTO.jpg',
    },
    {
      name: 'Geraldine R. Cataldavan',
      position: 'Department Head',
      image: '/Management%20and%20Staff/Main%20Office/Accounting/geraldine%20cataldavan.png',
    },
    {
      name: 'Sunshine E. Labrador',
      position: 'Department Head',
      image: '/Management%20and%20Staff/Main%20Office/Accounting/sunshine%20labrador2.png',
    },
    {
      name: 'Rav S. Capistrano',
      position: 'Department Head',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
  ],
  administrativeSection: [
    {
      name: 'Mervin A. Jonela',
      position: 'Administrative Assistant',
      image: '/Management%20and%20Staff/Main%20Office/Admin/MERVIN%20A.%20JONELA.jpg',
    },
    {
      name: 'Phoebe T. Sasota',
      position: 'Administrative Assistant',
      image: '/Management%20and%20Staff/Main%20Office/Admin/PHOEBE%20T.%20SASOTA.jpg',
    },
    {
      name: 'Judelyn M. Santillan',
      position: 'Administrative Assistant',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'Marilou T. Antonio',
      position: 'Administrative Assistant - Designate HR',
      image: '/Management%20and%20Staff/Main%20Office/Admin/MARILOU%20T.%20ANTONIO.jpg',
    },
    {
      name: 'Arjay D. Domingo',
      position: 'IT System Administrator',
      image: '/Management%20and%20Staff/Main%20Office/Admin/ARJAY%20DOMINGO.jpg',
    },
    {
      name: 'Rocky C. Seban',
      position: 'Driver/Maintenance Clerk',
      image: '/Management%20and%20Staff/Main%20Office/Admin/ROCKY%20C.%20SEBAN.jpg',
    },
  ],
  accountingSection: [
    {
      name: 'Karen Kaye J. Bacanto',
      position: 'Bookkeeper - Accounting Section',
      image: '/Management%20and%20Staff/Main%20Office/Accounting/karen%20kaye%20bacanto.png',
    },
    {
      name: 'Myca Jane S. Pagunaling',
      position: 'Bookkeeper - Office of FA Dept.',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
  ],
  tellerSection: [
    {
      name: 'Greta P. Serandon',
      position: 'Cash & Treasury Supervisor - Cash & Treasury Section',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'Generoso S. Umbat Jr.',
      position: 'Teller - Cash & Treasury Section',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/generoso%20umbat.png',
    },
    {
      name: 'Cristine Joy P. Virgo',
      position: 'Teller - Cash & Treasury Section',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/Kristine%20Joy%20Virgo.png',
    },
    {
      name: 'Sheila Marie M. Sadje',
      position: 'Teller - Cash & Treasury Section',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'Michelle Marie M. Requiron',
      position: 'Loan Monitoring/Alternate Teller',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/michelle%20requiron.png',
    },
  ],
  accountOfficerSection: [
    {
      name: 'Julius E. Calanog',
      position: 'CI/BI',
      image: '/Management%20and%20Staff/Main%20Office/Loans/julius%20calanog.png',
    },
    {
      name: 'Lambert S. Labiao',
      position: 'Account Specialist',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/lamber%20labiao.png',
    },
    {
      name: 'Jessryl T. Talidong',
      position: 'Account Specialist',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'Gershom Jay P. Alentajan',
      position: 'Account Specialist',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'Charlo C. Casidsid',
      position: 'Collection & Recovery Supervisor',
      image: '/Management%20and%20Staff/Main%20Office/Cash%20Section/charlo%20casidsid.png',
    },
  ],
  loanSection: [
    {
      name: 'Ma. Rafoncel T. Sanoy',
      position: 'OIC - Branch Manager',
      image: '/Management%20and%20Staff/Main%20Office/Loans/rafoncel%20sanoy.png',
    },
    {
      name: 'Jasmin Joy N. Magbanua',
      position: 'OIC - Loan & Credit Management Supervisor',
      image: '/Management%20and%20Staff/Main%20Office/Loans/jasmine%20joy%20manbanua.png',
    },
    {
      name: 'Cristy C. Magbanua',
      position: 'Collection & Recovery Assistant',
      image: '/Management%20and%20Staff/Main%20Office/Loans/cristy%20magbanua.png',
    },
    {
      name: 'Ryan Christian D. Samillano',
      position: 'Collection & Recovery Assistant',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'Myra D. Legario',
      position: 'Collection & Recovery Assistant',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'Jealyn D. Fernando',
      position: 'Collection & Recovery Assistant',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'Wendai Mae A.Elizalde',
      position: 'Loan Processor',
      image: '/Management%20and%20Staff/Main%20Office/Loans/wendai%20mae%20elizalde.png',
    },
    {
      name: 'Lara Divina J. Papango',
      position: 'Loan Processor',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
  ],
  marketingAssistantSection: [
    {
      name: 'Noemi S. Fedelicio',
      position: 'Marketing Assistant - Admin. Assistant: Office of CIC',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'Gloreanne P. Mana-ay',
      position: 'Marketing Assistant',
      image: '/Management%20and%20Staff/Main%20Office/Admin/GLOREANNE%20P.%20MANA-AY.jpg',
    },
    {
      name: 'Joann Mae T. Lazaro',
      position: 'Marketing Assistant',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
    {
      name: 'Jerome Alagos Cajurao',
      position: 'Admin Assistant - Office of RDP Dept.',
      image: '/Management%20and%20Staff/placeholder.svg',
    },
  ],
};

export default function HeadOfficeManagementStaffPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <HeroSection />

      <CoreValues />

      <div id="team" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
        <section className="mt-4 rounded-[2rem] border border-[#E5E7EB] bg-gradient-to-br from-white via-[#FCFDFD] to-[#F6FBF8] px-6 py-8 shadow-[0_18px_55px_-28px_rgba(6,69,44,0.35)] sm:px-8 sm:py-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.26em] text-[#0B5D3B]">Meet the Team</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#06452C]">Dedicated professionals behind every member service.</h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#6B7280]">
                From leadership to frontline support, our staff works together to deliver responsive service, trustworthy guidance, and meaningful community impact.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Member-focused', 'Service-driven', 'Community-first'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold text-[#0B5D3B] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

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

