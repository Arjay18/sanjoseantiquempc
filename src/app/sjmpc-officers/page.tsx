'use client';

import { Crown, Shield, Users, BookOpen, Award, Heart, FileText, Settings, Target, UserCheck } from 'lucide-react';
import Image from 'next/image';

export default function OfficersPage() {

  const officersData = {
    boardOfDirectors: [
      { name: "MERLINDA E. ALVIOR", position: "Chairperson", icon: Crown, priority: 1, color: "from-amber-500 to-yellow-600", image: "/officers/Board of Directors/merlinda alvior.png" },
      { name: "CORAZON B. MONDRAGON", position: "Vice-Chairperson", icon: UserCheck, priority: 2, color: "from-blue-500 to-blue-600", image: "/officers/Board of Directors/corazon mondragon1.png" },
      { name: "VAN IAN P. JUADA", position: "BOD Secretary", icon: FileText, priority: 3, color: "from-green-500 to-green-600", image: "/officers/Board of Directors/ivan juada1.png" },
      { name: "EMELDA F. ELIZALDE", position: "Treasurer", icon: Settings, priority: 4, color: "from-purple-500 to-purple-600", image: "/officers/Board of Directors/bod1.png" },
      { name: "MARILOU R. LLAVAN", position: "Member", icon: Heart, priority: 5, color: "from-red-500 to-pink-600", image: "/officers/Board of Directors/marilou llavan.png" },
      { name: "RAJIS F. MONTECLARO", position: "Member", icon: Award, priority: 6, color: "from-indigo-500 to-indigo-600", image: "/officers/Board of Directors/bod2 copy.png" },
      { name: "DELIA C. MONTERO", position: "Member", icon: Users, priority: 7, color: "from-teal-500 to-cyan-600", image: "/officers/Board of Directors/delia montero.png" },
      { name: "ANNA CECILIA R. PEFIANCO", position: "Member", icon: Shield, priority: 8, color: "from-orange-500 to-red-600", image: "/officers/Board of Directors/anna cecilia pefianco1.png" },
      { name: "DANIEL N. VESCATCHO. JR", position: "Member", icon: Target, priority: 9, color: "from-pink-500 to-rose-600", image: "/officers/Board of Directors/boyce vescatcho.png" },
      { name: "ANTONIO C. SALAO. JR", position: "Member", icon: Target, priority: 9, color: "from-pink-500 to-rose-600", image: "/officers/Board of Directors/alfredo ysulat.png" }
    ],
    auditCommittee: [
      { name: "BENJAMIN E. CANCAN", position: "CHAIRPERSON", icon: Shield, color: "from-blue-500 to-blue-600", image: "/officers/AudCom/cancan.png" },
      { name: "CHRISTINE MARIE G. TAMON", position: "VICE-CHAIRPERSON", icon: FileText, color: "from-green-500 to-green-600", image: "/officers/AudCom/cristine tamon1.png" },
      { name: "ARLINE M. VICTORIANO", position: "SECRETARY", icon: Users, color: "from-purple-500 to-purple-600", image: "/officers/AudCom/sarmiento.png" }
    ],
    assistantAuditCommittee: [
      { name: "NILDO N. LOGRO, JR. (MIAGAO)", position: "Assistant Member", icon: Users, color: "from-gray-500 to-gray-600", image: "/officers/ASST AUDCOM/LOGRO.png" },
      { name: "ROSALIE N. MOCON (MIAGAO)", position: "Assistant Member", icon: Users, color: "from-gray-500 to-gray-600", image: "/officers/ASST AUDCOM/mocon.png" },
      { name: "ARLENE VICTORIANO (OTON)", position: "Assistant Member", icon: Users, color: "from-gray-500 to-gray-600", image: "/officers/ASST AUDCOM/victoriano.png" },
      { name: "RASEL MONTAÑO (OTON)", position: "Assistant Member", icon: Users, color: "from-gray-500 to-gray-600", image: "/officers/ASST AUDCOM/montaño.png" },
      { name: "ROSENY C. GALIA (GUIMARAS)", position: "Assistant Member", icon: Users, color: "from-gray-500 to-gray-600", image: "/officers/ASST AUDCOM/galia.png" },
      { name: "HANNAH ROSE E. GAJARDO (GUIMARAS)", position: "Assistant Member", icon: Users, color: "from-gray-500 to-gray-600", image: "/officers/ASST AUDCOM/gajardo.png" }
    ],
    electionCommittee: [
      { name: "GREGORIO C. RUFINO", position: "Chairperson", icon: Crown, color: "from-blue-500 to-blue-600", image: "/officers/EleCom/gregorio rufino1.png" },
      { name: "VICTORIANO H. MADREDANO", position: "vice-Chairperson", icon: FileText, color: "from-green-500 to-green-600", image: "/officers/EleCom/madredano.png" },
      { name: "ANGELINE L. GRANADA", position: "Secretary", icon: Users, color: "from-purple-500 to-purple-600", image: "/officers/EleCom/angie granada1.png" }
    ],
    educationCommittee: [
      { name: "CORAZON B. MONDRAGON", position: "Chairperson", icon: Crown, color: "from-blue-500 to-blue-600", image: "/officers/Board of Directors/corazon mondragon1.png" },
      { name: "RAJIS F. MONTECLARO", position: "Secretary", icon: FileText, color: "from-green-500 to-green-600", image: "/officers/EdCom/fernandez.png" },
      { name: "TEODOLFO N. SIESA (MAIN)", position: "Member", icon: Users, color: "from-purple-500 to-purple-600", image: "/officers/EdCom/ORDIZE.png" },
      { name: "LEAH L. BARANCO (OTON)", position: "Member", icon: Users, color: "from-purple-500 to-purple-600", image: "/officers/EdCom/Ligaya Leonares.png" },
      { name: "STEPHEN N. INTAL (MIAGAO)", position: "Member", icon: UserCheck, color: "from-orange-500 to-red-600", image: "/officers/EdCom/intal.png" },
      { name: "NORIE MAY S. CABALING (GUIMARAS)", position: "Member", icon: UserCheck, color: "from-orange-500 to-red-600", image: "/officers/EdCom/educ group.png" },
      { name: "PHOEBE T. SASOTA", position: "Staff Representative", icon: UserCheck, color: "from-orange-500 to-red-600", image: "/officers/EdCom/phoebe sasota.png" }
    ],
    genderAndDevelopmentCommittee: [
      { name: "MARILOU R. LLAVAN", position: "Chairperson", icon: Crown, color: "from-blue-500 to-blue-600", image: "/officers/GAD/marilou llavan.png" },
      { name: "AMPARO PEACHY HARRIET M. SAYOMAC", position: "", icon: UserCheck, color: "from-green-500 to-green-600", image: "/officers/GAD/peachy harriet.png" },
      { name: "ERIC B. CORTEJO", position: "Secretary", icon: FileText, color: "from-purple-500 to-purple-600", image: "/officers/GAD/cortejo.png" },
      { name: "ALEX L. DOLLOLASA", position: "Member", icon: Users, color: "from-red-500 to-pink-600", image: "/officers/GAD/alex dillolasa.png" },
      { name: "ROLYN N. HARO", position: "Member", icon: Users, color: "from-indigo-500 to-indigo-600", image: "/officers/GAD/GAD group.png" },
      { name: "JUDELYN M. SANTILLAN", position: "Focal Person", icon: Award, color: "from-teal-500 to-cyan-600", image: "/officers/GAD/judelyn santillan1 copy.png" }
    ],
    socialServicesAndDevelopmentCommittee: [
      { name: "ANNA CECILIA R. PEFIANCO", position: "Chairperson", icon: Crown, color: "from-blue-500 to-blue-600", image: "/officers/Board of Directors/anna cecilia pefianco1.png" },
      { name: "RIZALDY F. FERNANDEZ", position: "Secretary", icon: FileText, color: "from-green-500 to-green-600", image: "/officers/SSDC/melocoton.png" },
      { name: "ROSEMARIE M. DELA CRUZ (OTON)", position: "Member", icon: Users, color: "from-purple-500 to-purple-600", image: "/officers/SSDC/ordize.png" },
      { name: "MA. YLLIEZA A. MOLINING", position: "Member", icon: Users, color: "from-red-500 to-pink-600", image: "/officers/SSDC/corazon mondragon1.png" },
      { name: "JENNIFER L. GAMARCHA (GUIMARAS)", position: "Member", icon: UserCheck, color: "from-orange-500 to-red-600", image: "/officers/SSDC/corazon mondragon1.png" },
      { name: "GLOREANNE P. MANA-AY", position: "MGT. STAFF REPRESENTATIVE", icon: UserCheck, color: "from-orange-500 to-red-600", image: "/officers/SSDC/corazon mondragon1.png" }
    ],
    ethicsCommittee: [
      { name: "FRENIE C. PEDROA", position: "Chairperson", icon: Crown, color: "from-blue-500 to-blue-600", image: "/officers/Ethics/frenie pedroa.png" },
      { name: "GERLIE GRACE A. LOQUINARIO", position: "Secretary", icon: FileText, color: "from-green-500 to-green-600", image: "/officers/Ethics/girlie grace loquinario.png" },
      { name: "OFELIA B. MICIANO", position: "Member", icon: Users, color: "from-purple-500 to-purple-600", image: "/officers/Ethics/ofelia miciano1.png" }
    ],
    bidsAndAwardsCommittee: [
      { name: "ALFREDO R. YSULAT", position: "Chairperson", icon: Crown, color: "from-blue-500 to-blue-600", image: "/officers/Bids and Awards/alfredo ysulat.png" },
      { name: "ERIBERTO P. VARGAS", position: "Secretary", icon: FileText, color: "from-green-500 to-green-600", image: "/officers/Bids and Awards/VARGAS.png" },
      { name: "JULITO A. PAMIROYAN", position: "Member", icon: Users, color: "from-purple-500 to-purple-600", image: "/officers/Bids and Awards/PAMIROYAN.png" },
      { name: "MERVIN A. JONELA", position: "Mgt. Staff Representative", icon: UserCheck, color: "from-orange-500 to-red-600", image: "/officers/Bids and Awards/mervin jonela.png" }
    ],
    mediationAndConciliationCommittee: [
      { name: "LEILANI C. NOLASCO", position: "Chairperson", icon: Crown, color: "from-blue-500 to-blue-600", image: "/officers/MedCon/Nolasco.png" },
      { name: "BETTY P. OTILANO", position: "Secretary", icon: FileText, color: "from-green-500 to-green-600", image: "/officers/MedCon/otilano.png" }
    ],
    creditCommittee: [
      { name: "GRACE A. AQUILLO", position: "Chairperson", icon: Crown, color: "from-blue-500 to-blue-600", image: "/officers/CreCom/grace aquillo.png" },
      { name: "CELIA G. LIM", position: "Secretary", icon: FileText, color: "from-green-500 to-green-600", image: "/officers/CreCom/lim.png" },
      { name: "LYNNIE L. SANTILLAN", position: "Member", icon: Users, color: "from-purple-500 to-purple-600", image: "/officers/CreCom/basilia aranas.png" }
    ],
    assistantCreditCommittee: [
      { name: "NILDO N. LOGRO, JR. (MIAGAO)", position: "Assistant Member", icon: Users, color: "from-gray-500 to-gray-600", image: "/officers/ASST CRECOM/LOGRO.png" },
      { name: "ROWENA M. FAILAGUTAN (MIAGAO)", position: "Assistant Member", icon: Users, color: "from-gray-500 to-gray-600", image: "/officers/ASST CRECOM/failagutan.png" },
      { name: "EMEE T. GASCON (OTON)", position: "Assistant Member", icon: Users, color: "from-gray-500 to-gray-600", image: "/officers/ASST CRECOM/Emee T. Gascon.png" },
      { name: "DAVE T. NONO (OTON)", position: "Assistant Member", icon: Users, color: "from-gray-500 to-gray-600", image: "/officers/ASST CRECOM/DAVE NONO.png" },
      { name: "ELLA GRACE G. TABINGO (GUIMARAS)", position: "Assistant Member", icon: Users, color: "from-gray-500 to-gray-600", image: "/officers/ASST CRECOM/TABINGO.png" },
      { name: "NORIE MAY S. CABALING (GUIMARAS)", position: "Assistant Member", icon: Users, color: "from-gray-500 to-gray-600", image: "/officers/ASST CRECOM/cabaling.png" }
    ],
    financeAndInvestmentCommittee: [
      { name: "DELIA C. MONTERO", position: "Chairperson", icon: Crown, color: "from-blue-500 to-blue-600", image: "/officers/FIC/delia montero.png" },
      { name: "NOLI G. VALENZUELA", position: "Vice-Chairperson", icon: FileText, color: "from-green-500 to-green-600", image: "/officers/FIC/valenzuela.png" },
      { name: "CHARLENE A. ORBINO", position: "Secretary", icon: Users, color: "from-purple-500 to-purple-600", image: "/officers/FIC/orbino.png" },
      { name: "ORPHA JOSEFIN M. GALERA", position: "Member", icon: Users, color: "from-red-500 to-pink-600", image: "/officers/FIC/eliseo canalin1.png" },
      { name: "EMELDA F. ELIZALDE", position: "Ex-Eficio", icon: Users, color: "from-red-500 to-pink-600", image: "/officers/FIC/FIC.jpg" }
    ]
  };

  const renderOfficerSection = (title: string, officers: any[]) => (
    <div className="mb-16 animate-fade-in">
      <div className="flex items-center mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent flex-1"></div>
        <h2 className="text-3xl font-bold text-gray-900 mx-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {officers.map((officer, index) => {
          const IconComponent = officer.icon;
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
              {officer.priority && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    #{officer.priority}
                  </div>
                </div>
              )}

              <div className="relative z-10">
                {/* Enhanced Image/Icon Container */}
                <div className="relative mb-6">
                  {officer.image ? (
                    <div className="relative w-36 h-36 rounded-3xl overflow-hidden shadow-2xl mx-auto ring-4 ring-white/20 group-hover:ring-white/30 transition-all duration-500 group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)]">
                      <Image
                        src={officer.image}
                        alt={officer.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 144px, 144px"
                      />
                      {/* Subtle Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${officer.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    </div>
                  ) : (
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${officer.color} text-white shadow-2xl mx-auto ring-4 ring-white/20 group-hover:ring-white/30 transition-all duration-500 group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)] group-hover:scale-110`}>
                      <IconComponent className="w-10 h-10 group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                  )}
                </div>

                {/* Enhanced Name Typography */}
                <h3 className="font-bold text-gray-900 mb-2 text-xl leading-tight text-center group-hover:text-gray-800 transition-colors duration-300">
                  {officer.name}
                </h3>

                {/* Modern Position Badge */}
                <div className="flex justify-center">
                  <span className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r ${officer.color} bg-clip-text text-transparent border border-white/30 bg-white/10 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300 group-hover:scale-105`}>
                    {officer.position}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            SJMPC Officers
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Meet the dedicated leaders and committee members who guide SJMPC's strategic direction and operations with excellence and integrity.
          </p>

          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Leadership Excellence</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Community Focused</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>Trusted Partners</span>
            </div>
          </div>
        </div>

        {/* Officers Content */}
        <div className="space-y-4">
          {renderOfficerSection("Board of Directors", officersData.boardOfDirectors)}
          {renderOfficerSection("Audit Committee", officersData.auditCommittee)}
          {renderOfficerSection("Assistant Audit Committee", officersData.assistantAuditCommittee)}
          {renderOfficerSection("Election Committee", officersData.electionCommittee)}
          {renderOfficerSection("Education Committee", officersData.educationCommittee)}
          {renderOfficerSection("Gender and Development Committee", officersData.genderAndDevelopmentCommittee)}
          {renderOfficerSection("Social Services and Development Committee", officersData.socialServicesAndDevelopmentCommittee)}
          {renderOfficerSection("Ethics Committee", officersData.ethicsCommittee)}
          {renderOfficerSection("Bids and Awards Committee", officersData.bidsAndAwardsCommittee)}
          {renderOfficerSection("Mediation and Conciliation Committee", officersData.mediationAndConciliationCommittee)}
          {renderOfficerSection("Credit Committee", officersData.creditCommittee)}
          {renderOfficerSection("Assistant Credit Committee", officersData.assistantCreditCommittee)}
          {renderOfficerSection("Finance and Investment Committee", officersData.financeAndInvestmentCommittee)}
        </div>
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
  );
}
