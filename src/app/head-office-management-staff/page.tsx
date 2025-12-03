'use client';

import { Crown, Shield, Users, BookOpen, Award, Heart, FileText, Settings, Target, UserCheck, Briefcase, Calculator, DollarSign, TrendingUp, Megaphone } from 'lucide-react';
import Image from 'next/image';

export default function HeadOfficeManagementStaffPage() {

  const staffData = {
    mainOffice: [
      { name: "RODELYN I. VERA CRUZ-BERTO", position: "General Manager", icon: Crown, priority: 1, color: "from-amber-500 to-yellow-600", image: "/staff/rodelvn-berto.jpg" }
    ],
    administrativeSection: [
      { name: "PHOEBE T. SASOTA", position: "Clerk", icon: FileText, color: "from-green-500 to-green-600", image: "/staff/phoebe-sasota.jpg" },
      { name: "MERVIN A. JONELA", position: "Clerk", icon: FileText, color: "from-blue-500 to-blue-600", image: "/staff/mervin-jonela.jpg" },
      { name: "ROCKY C. SEBAN", position: "Driver/ Maintenance Clerk", icon: Settings, color: "from-purple-500 to-purple-600", image: "/staff/rocky-seban.jpg" },
      { name: "JUDELYN M. SANTILLAN", position: "Clerk", icon: FileText, color: "from-yellow-500 to-yellow-600", image: "/staff/judelyn-santillan.jpg" },
      { name: "MARILOU T. ANTONIO", position: "HR", icon: UserCheck, color: "from-pink-500 to-pink-600", image: "/staff/myca-pagunaling.jpg" },
      { name: "ARJAY D. DOMINGO", position: "IT JO", icon: UserCheck, color: "from-pink-500 to-pink-600", image: "/staff/myca-pagunaling.jpg" }
    ],
    accountingSection: [
      { name: "GERALDINE R. CATALDAVAN", position: "Accountant", icon: Calculator, color: "from-yellow-500 to-yellow-600", image: "/staff/geraldine-cataldavan.jpg" },
      { name: "KAREN KAYE G. JUANILLO", position: "Bookkeeper", icon: BookOpen, color: "from-purple-500 to-purple-600", image: "/staff/karen-juanillo.jpg" },
      { name: "SUNSHINE E. LABRADOR", position: "Bookkeeper", icon: FileText, color: "from-pink-500 to-pink-600", image: "/staff/sunshine-labrador.jpg" },
      { name: "MYCA JANE PAGUNALING", position: "Accounting Clerk", icon: FileText, color: "from-pink-500 to-pink-600", image: "/staff/sunshine-labrador.jpg" }
    ],
    tellerSection: [
      { name: "MICHELLE MARIE REQUIRON", position: "Clerk, JO", icon: UserCheck, color: "from-purple-500 to-purple-600", image: "/staff/michelle-requiron.jpg" },
      { name: "CRISTINE JOY P. VIRGO", position: "Teller", icon: DollarSign, color: "from-indigo-500 to-indigo-600", image: "/staff/cristine-virgo.jpg" },
      { name: "DARYL B. BETITA", position: "Teller", icon: DollarSign, color: "from-red-500 to-red-600", image: "/staff/daryl-betita.jpg" },
      { name: "ERYNE MAE T. MIQUELA", position: "Cashier", icon: Target, color: "from-teal-500 to-teal-600", image: "/staff/eryne-miquela.jpg" },
      { name: "GENEROSO S. UMBAT, JR.", position: "Teller", icon: DollarSign, color: "from-orange-500 to-orange-600", image: "/staff/generoso-umbat.jpg" },
      { name: "FRITZ INOT", position: "Account Officer, JO", icon: Briefcase, color: "from-cyan-500 to-cyan-600", image: "/staff/fritz-inot.jpg" }
    ],
    accountOfficerSection: [
      { name: "GLENN D. MISAJON", position: "Account Officer", icon: Briefcase, color: "from-indigo-500 to-indigo-600", image: "/staff/glenn-misajon.jpg" },
      { name: "LAMBERT S. LABIAO", position: "Account Officer", icon: Briefcase, color: "from-red-500 to-red-600", image: "/staff/lambert-labiao.jpg" },
      { name: "CHARLO C. CASIDSID", position: "Account Officer", icon: Briefcase, color: "from-teal-500 to-teal-600", image: "/staff/charlo-casidsid.jpg" },
      { name: "RAV S. CAPISTRANO", position: "Account Officer", icon: Briefcase, color: "from-orange-500 to-orange-600", image: "/staff/rav-capistrano.jpg" },
      { name: "GERSHOM JAY P. ALENTAJAN", position: "Account Officer", icon: Briefcase, color: "from-orange-500 to-orange-600", image: "/staff/rav-capistrano.jpg" }
    ],
    loanSection: [
      { name: "JASMIN JOY N. MAGBANUA", position: "Clerk, Loan Processor", icon: FileText, color: "from-red-500 to-red-600", image: "/staff/jasmin-magbanua.jpg" },
      { name: "CRISTY C. MAGBANUA", position: "Clerk, Loan Monitoring", icon: TrendingUp, color: "from-teal-500 to-teal-600", image: "/staff/cristy-magbanua.jpg" },
      { name: "MA. RAFONCEL T. SANOY", position: "OIC Loan Officer", icon: Award, color: "from-orange-500 to-orange-600", image: "/staff/rafoncel-sanoy.jpg" },
      { name: "WENDAI MAE ELIZALDE", position: "Clerk, JO", icon: UserCheck, color: "from-cyan-500 to-cyan-600", image: "/staff/wendai-elizalde.jpg" },
      { name: "JULIUS E. CALANOG", position: "CIBI", icon: Shield, color: "from-lime-500 to-lime-600", image: "/staff/julius-calanog.jpg" }
    ],
    marketingAssistantSection: [
      { name: "JOANN MAE T. LAZARO", position: "Marketing Assistant", icon: Megaphone, color: "from-teal-500 to-teal-600", image: "/staff/joann-lazaro.jpg" },
      { name: "GLOREANNE P. MANA-AY", position: "Marketing Assistant", icon: Megaphone, color: "from-orange-500 to-orange-600", image: "/staff/gloreanne-mana-ay.jpg" },
      { name: "NOEMI M. SITCHON", position: "Marketing Assistant", icon: Megaphone, color: "from-cyan-500 to-cyan-600", image: "/staff/noemi-sitchon.jpg" }
    ]
  };

  const renderStaffSection = (title: string, staff: any[]) => (
    <div className="mb-16 animate-fade-in">
      <div className="flex items-center mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent flex-1"></div>
        <h2 className="text-3xl font-bold text-gray-900 mx-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {staff.map((member, index) => {
          const IconComponent = member.icon;
          return (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-3xl rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:scale-[1.02] hover:bg-white/15"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideUp 0.6s ease-out forwards'
              }}
            >
              {/* Modern Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent backdrop-blur-md"></div>

              {/* Subtle Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Priority Badge for Board Members */}
              {member.priority && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    #{member.priority}
                  </div>
                </div>
              )}

              <div className="relative z-10">
                {/* Enhanced Image/Icon Container */}
                <div className="relative mb-6">
                  {member.image ? (
                    <div className="relative w-36 h-36 rounded-3xl overflow-hidden shadow-2xl mx-auto ring-4 ring-white/20 group-hover:ring-white/30 transition-all duration-500 group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 144px, 144px"
                      />
                      {/* Subtle Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    </div>
                  ) : (
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} text-white shadow-2xl mx-auto ring-4 ring-white/20 group-hover:ring-white/30 transition-all duration-500 group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)] group-hover:scale-110`}>
                      <IconComponent className="w-10 h-10 group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                  )}
                </div>

                {/* Enhanced Name Typography */}
                <h3 className="font-bold text-gray-900 mb-2 text-xl leading-tight text-center group-hover:text-gray-800 transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Modern Position Badge */}
                <div className="flex justify-center">
                  <span className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent border border-white/30 bg-white/10 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300 group-hover:scale-105`}>
                    {member.position}
                  </span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-br from-indigo-200/20 to-pink-200/20 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-8 shadow-2xl">
            <div className="bg-white rounded-xl p-4">
              <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Head Office Management Staff
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Meet the dedicated professionals who drive our cooperative's operations and serve our community with excellence and commitment.
          </p>

          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Professional Excellence</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Community Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>Dedicated Team</span>
            </div>
          </div>
        </div>

        {/* Staff Content */}
        <div className="space-y-4">
          {renderStaffSection("Main Office", staffData.mainOffice)}
          {renderStaffSection("Administrative Section", staffData.administrativeSection)}
          {renderStaffSection("Accounting Section", staffData.accountingSection)}
          {renderStaffSection("Teller Section", staffData.tellerSection)}
          {renderStaffSection("Account Officer Section", staffData.accountOfficerSection)}
          {renderStaffSection("Loan Section", staffData.loanSection)}
          {renderStaffSection("Marketing Assistant Section", staffData.marketingAssistantSection)}
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
}
