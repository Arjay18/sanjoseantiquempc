'use client';

import { Crown, Shield, Users, BookOpen, Award, Heart, FileText, Settings, Target, UserCheck, Briefcase, Calculator, DollarSign, TrendingUp, Megaphone } from 'lucide-react';
import Image from 'next/image';

export default function OtonBranchPage() {

  const staffData = {
    branchManager: [
      { name: "ROSANNA G. JABILE", position: "Branch Manager", icon: Crown, priority: 1, color: "from-amber-500 to-yellow-600", image: "/staff/rosanna-jabile.jpg" }
    ],
    branchStaff: [
      { name: "GRETA P. SERANDON", position: "Bookkeeper", icon: BookOpen, color: "from-green-500 to-green-600", image: "/staff/greta-serandon.jpg" },
      { name: "JULIE G. SABAN", position: "Clerk, Admin", icon: FileText, color: "from-blue-500 to-blue-600", image: "/staff/julie-saban.jpg" },
      { name: "KATHLINE ZYRA M. SANDUCAL", position: "Clerk, Loan Monitoring", icon: TrendingUp, color: "from-purple-500 to-purple-600", image: "/staff/kathline-sanducal.jpg" },
      { name: "MICHAEL GLENN L. MILITANTE", position: "Acting CIBI", icon: Shield, color: "from-yellow-500 to-yellow-600", image: "/staff/michael-militante.jpg" },
      { name: "REX M. DE CASTRO", position: "Account Officer", icon: Briefcase, color: "from-pink-500 to-pink-600", image: "/staff/rex-decastro.jpg" },
      { name: "DARYL D. BALADIANG", position: "Driver Maintenance Clerk", icon: Settings, color: "from-indigo-500 to-indigo-600", image: "/staff/daryl-baladiang.jpg" },
      { name: "JESSA LILAH G. MANDE", position: "Teller", icon: DollarSign, color: "from-red-500 to-red-600", image: "/staff/jessa-mande.jpg" },
      { name: "MARY ANN P. ALONSAGAY", position: "Account Officer", icon: Briefcase, color: "from-teal-500 to-teal-600", image: "/staff/mary-alonsagay.jpg" },
      { name: "JOANNE A. NERECINA", position: "Clerk", icon: UserCheck, color: "from-orange-500 to-orange-600", image: "/staff/joanne-nerecina.jpg" },
      { name: "ROLANDO ANGELO T. BARILLO II", position: "Marketing Assistant (JO)", icon: Megaphone, color: "from-cyan-500 to-cyan-600", image: "/staff/rolando-barillo.jpg" },
      { name: "JANREY S. RECAPLAZA", position: "Marketing Assistant (JO)", icon: Megaphone, color: "from-lime-500 to-lime-600", image: "/staff/janrey-recaplaza.jpg" },
      { name: "KEN JOHN H. UBALDO", position: "Account Officer (JO)", icon: Briefcase, color: "from-emerald-500 to-emerald-600", image: "/staff/ken-ubaldo.jpg" }
    ]
  };

  const renderStaffSection = (title: string, staff: any[]) => {
    // Special layout for Branch Manager with building image
    if (title === "Branch Manager") {
      return (
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent flex-1"></div>
            <h2 className="text-3xl font-bold text-gray-900 mx-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent flex-1"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Branch Manager Card */}
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

                  {/* Priority Badge for Branch Manager */}
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

            {/* Oton Branch Building Image */}
            <div className="group relative bg-white/10 backdrop-blur-3xl rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:scale-[1.02] hover:bg-white/15 animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent backdrop-blur-md"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="relative w-full h-48 rounded-3xl overflow-hidden mb-6 shadow-2xl group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/images/oton-branch-building.jpg"
                    alt="SJMP Cooperative Oton Branch Building"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <h3 className="font-bold text-gray-900 mb-2 text-xl leading-tight group-hover:text-gray-800 transition-colors duration-300">
                  Oton Branch Office
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Serving the Oton community with excellence and dedication.
                </p>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-br from-indigo-200/20 to-pink-200/20 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default layout for other sections
    return (
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
  };

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
            Oton Branch Office
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Meet the dedicated team serving our Oton community with excellence and commitment.
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
          {renderStaffSection("Branch Manager", staffData.branchManager)}
          {renderStaffSection("Branch Staff", staffData.branchStaff)}
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
