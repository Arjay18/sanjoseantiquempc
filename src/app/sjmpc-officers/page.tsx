'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function OfficersPage() {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const boardMembers = [
    {
      name: "MERLINDA E. ALVIOR",
      role: "Chairperson",
      priority: 1,
      color: "from-blue-500 to-blue-600",
      image: "/sjmpc Officers/Board Of Directors/merlinda alvior.png",
      description: "Leading the cooperative with vision and dedication.",
      tenure: "2018 - Present",
      qualifications: ["MBA in Cooperative Management", "Certified Cooperative Director"],
      email: "chairperson@sjmpc.com",
      phone: "+63 123 456 7890"
    },
    {
      name: "ANNA CECILIA R. PEFIANCO",
      role: "Vice-Chairperson",
      priority: 2,
      color: "from-purple-500 to-purple-600",
      image: "/sjmpc Officers/Board Of Directors/anna cecilia pefianco1.png",
      description: "Supporting strategic initiatives and member engagement.",
      tenure: "2019 - Present",
      qualifications: ["BS Business Administration", "Community Development Specialist"],
      email: "vice-chair@sjmpc.com"
    },
    {
      name: "VAN IAN P. JUADA",
      role: "BOD Secretary",
      priority: 3,
      color: "from-indigo-500 to-indigo-600",
      description: "Ensuring accurate records and transparent governance.",
      tenure: "2020 - Present",
      qualifications: ["LLB Law", "Corporate Secretary Certification"],
      email: "secretary@sjmpc.com"
    },
    {
      name: "EMELDA F. ELIZALDE",
      role: "Treasurer",
      priority: 4,
      color: "from-pink-500 to-pink-600",
      description: "Managing financial resources with integrity.",
      tenure: "2017 - Present",
      qualifications: ["CPA", "Financial Management Expert"],
      email: "treasurer@sjmpc.com"
    },
    {
      name: "CORAZON B. MONDRAGON",
      role: "Member",
      priority: 5,
      color: "from-green-500 to-green-600",
      image: "/sjmpc Officers/Board Of Directors/corazon mondragon1.png",
      description: "Contributing expertise in community development.",
      tenure: "2016 - Present",
      qualifications: ["MS Social Work", "Community Organizer"],
      email: "corazon.mondragon@sjmpc.com"
    },
    {
      name: "MARILOU R. LLAVAN",
      role: "Member",
      priority: 6,
      color: "from-yellow-500 to-yellow-600",
      image: "/sjmpc Officers/Board Of Directors/marilou llavan.png",
      description: "Advocating for gender equality and empowerment.",
      tenure: "2015 - Present",
      qualifications: ["BS Gender Studies", "Women's Rights Advocate"],
      email: "marilou.llavan@sjmpc.com"
    }
  ];

  const openModal = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <div className="bg-white rounded-full p-4">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Board of Directors
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders who guide SJMPC's strategic direction, ensuring operational excellence
            and fostering sustainable growth for our cooperative community.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-white/20">
              <p className="text-gray-700 font-medium">
                <span className="text-blue-600 font-bold">6</span> Dedicated Leaders •
                <span className="text-purple-600 font-bold ml-2">2024</span> Term
              </p>
            </div>
          </div>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {boardMembers
            .sort((a, b) => a.priority - b.priority)
            .map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/30 hover:border-white/50 transform hover:scale-[1.02] hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(member)}
            >
              {/* Priority Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  #{member.priority}
                </div>
              </div>

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative p-8">
                <div className="text-center">
                  {/* Avatar */}
                  {member.image ? (
                    <div className="relative mx-auto mb-6 w-32 h-32 overflow-hidden shadow-2xl ring-4 ring-white/30 group-hover:ring-white/50 transition-all duration-500 group-hover:scale-110">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        sizes="128px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-r ${member.color} mx-auto mb-6 flex items-center justify-center text-white font-bold shadow-2xl w-32 h-32 text-4xl ring-4 ring-white/30 group-hover:ring-white/50 transition-all duration-500 group-hover:scale-110`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}

                  {/* Name and Role */}
                  <h3 className="font-bold text-gray-900 mb-2 text-2xl leading-tight group-hover:text-blue-900 transition-colors duration-300">
                    {member.name}
                  </h3>

                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                      {member.role}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-base leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300 line-clamp-3">
                    {member.description}
                  </p>

                  {/* Qualifications */}
                  {member.qualifications && (
                    <div className="mb-6">
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.qualifications.slice(0, 2).map((qual, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                            {qual}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tenure */}
                  {member.tenure && (
                    <div className="mb-6">
                      <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-blue-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200/50">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {member.tenure}
                      </div>
                    </div>
                  )}

                  {/* Contact Actions */}
                  <div className="flex justify-center space-x-3 mb-6">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="group/btn p-3 bg-white/60 backdrop-blur-sm rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-white/30 hover:border-blue-200/50"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Email ${member.name}`}
                      >
                        <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="group/btn p-3 bg-white/60 backdrop-blur-sm rounded-full text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-white/30 hover:border-green-200/50"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Call ${member.name}`}
                      >
                        <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* View Details Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="inline-flex items-center text-sm text-blue-600 bg-blue-50/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/30">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Profile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership Excellence</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-sm text-gray-600">Board Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">Years Combined</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Committed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Modal */}
        {isModalOpen && selectedMember && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    {selectedMember.image ? (
                      <div className="relative w-20 h-20 overflow-hidden shadow-xl ring-4 ring-white/30">
                        <Image
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          fill
                          className="object-contain"
                          sizes="80px"
                        />
                      </div>
                    ) : (
                      <div className={`bg-gradient-to-r ${selectedMember.color} flex items-center justify-center text-white font-bold shadow-xl w-20 h-20 text-2xl ring-4 ring-white/30`}>
                        {selectedMember.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{selectedMember.name}</h2>
                      <p className="text-xl text-blue-600 font-semibold">{selectedMember.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedMember.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Tenure</h3>
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-200/50">
                        <p className="text-green-700 font-semibold">{selectedMember.tenure}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
                      <div className="space-y-2">
                        {selectedMember.email && (
                          <a
                            href={`mailto:${selectedMember.email}`}
                            className="flex items-center space-x-3 bg-blue-50 p-3 rounded-xl hover:bg-blue-100 transition-colors border border-blue-200/50"
                          >
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-blue-700">{selectedMember.email}</span>
                          </a>
                        )}
                        {selectedMember.phone && (
                          <a
                            href={`tel:${selectedMember.phone}`}
                            className="flex items-center space-x-3 bg-green-50 p-3 rounded-xl hover:bg-green-100 transition-colors border border-green-200/50"
                          >
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-green-700">{selectedMember.phone}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {selectedMember.qualifications && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Qualifications</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.qualifications.map((qual: string, idx: number) => (
                          <span key={idx} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-blue-200/50">
                            {qual}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
