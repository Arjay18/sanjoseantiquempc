'use client';

import { useState, useEffect } from 'react';
import { ClockIcon, MapPinIcon, Calendar, Users, BookOpen, Award, Target, CheckCircle, ArrowRight, Play, Download, Star } from 'lucide-react';

const scheduleData = [
  {
    office: 'SAN JOSE - MAIN OFFICE',
    location: 'Tradetown Funda-Dalipe, San Jose, Antique',
    schedule: [
      'Monday - Friday: 8:00 AM to 4:00 PM',
      'Saturday: 9:00 AM'
    ],
    capacity: 50,
    registered: 32
  },
  {
    office: 'MIAGAO OFFICE',
    location: 'Peñaranda St. Brgy, Baybay Norte, Miagao, Iloilo',
    schedule: [
      'Monday: 1:00 PM',
      'Saturday: 9:00 AM'
    ],
    capacity: 30,
    registered: 18
  },
  {
    office: 'OTON OFFICE',
    location: 'M.H Del Pilar St. Pob South, Oton, Iloilo',
    schedule: [
      'Monday, Wednesday and Friday: 1:30 PM',
      'Saturday: 9:30 AM'
    ],
    capacity: 35,
    registered: 22
  },
  {
    office: 'GUIMARAS OFFICE',
    location: 'Alejandro Heights, San Miguel Jordan, Guimaras',
    schedule: [
      'Saturday: 9:00 AM'
    ],
    capacity: 25,
    registered: 15
  }
];

const seminarTopics = [
  {
    title: "Cooperative Principles & Values",
    description: "Understanding the seven cooperative principles and core values that guide SJMPC",
    duration: "45 minutes",
    icon: "🤝"
  },
  {
    title: "Membership Benefits & Responsibilities",
    description: "Learn about the comprehensive benefits and responsibilities of being a member",
    duration: "30 minutes",
    icon: "🎁"
  },
  {
    title: "Financial Products & Services",
    description: "Overview of savings, loans, and other financial services available to members",
    duration: "45 minutes",
    icon: "💰"
  },
  {
    title: "Governance & Participation",
    description: "How members participate in cooperative governance and decision-making",
    duration: "30 minutes",
    icon: "🏛️"
  },
  {
    title: "Q&A Session",
    description: "Open forum for questions and clarifications about membership",
    duration: "30 minutes",
    icon: "❓"
  }
];

const upcomingSessions = [
  {
    date: "2024-12-15",
    time: "9:00 AM",
    branch: "SAN JOSE - MAIN OFFICE",
    capacity: 50,
    registered: 32,
    status: "available"
  },
  {
    date: "2024-12-16",
    time: "1:00 PM",
    branch: "MIAGAO OFFICE",
    capacity: 30,
    registered: 18,
    status: "available"
  },
  {
    date: "2024-12-18",
    time: "9:30 AM",
    branch: "OTON OFFICE",
    capacity: 35,
    registered: 22,
    status: "available"
  },
  {
    date: "2024-12-21",
    time: "9:00 AM",
    branch: "GUIMARAS OFFICE",
    capacity: 25,
    registered: 15,
    status: "available"
  }
];

export default function PreMembershipSeminar() {
  const [activeTab, setActiveTab] = useState('schedule');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { label: "Members Enrolled", value: "2,847", icon: Users, color: "from-blue-500 to-blue-600" },
    { label: "Seminars Conducted", value: "156", icon: Award, color: "from-green-500 to-green-600" },
    { label: "Average Rating", value: "4.8/5", icon: Star, color: "from-yellow-500 to-orange-600" },
    { label: "Success Rate", value: "94%", icon: Target, color: "from-purple-500 to-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/50 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 rounded-2xl mb-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-2">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Pre-Membership Education Seminar
              </span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            PMES Schedule
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our Pre-Membership Education Seminar to learn about cooperative principles,
            membership benefits, and start your journey as an SJMPC member.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/30 hover:bg-white/70 transition-all duration-300 group">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'schedule', label: 'Branch Schedule', icon: '📅' },
            { id: 'topics', label: 'Seminar Topics', icon: '📚' },
            { id: 'upcoming', label: 'Upcoming Sessions', icon: '⏰' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 hover:shadow-md'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'schedule' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
                Branch Locations & Schedule
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find your nearest SJMPC branch and check our PMES schedule. All seminars are free and open to the public.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {scheduleData.map((branch, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 hover:bg-white/70 transition-all duration-300 group">
                  {/* Office Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPinIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {branch.office}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {branch.location}
                      </p>

                      {/* Capacity Indicator */}
                      <div className="flex items-center space-x-4">
                        <div className="text-sm text-gray-600">
                          {branch.registered}/{branch.capacity} registered
                        </div>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(branch.registered / branch.capacity) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 mb-4">
                      <ClockIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-lg font-semibold text-gray-900">Schedule</span>
                    </div>

                    <div className="space-y-2 pl-8">
                      {branch.schedule.map((time, timeIndex) => (
                        <div
                          key={timeIndex}
                          className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg hover:from-blue-100 hover:to-green-100 transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-2xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group">
                      Register for Seminar
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'topics' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Seminar Topics
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive PMES covers essential topics to help you understand cooperative membership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seminarTopics.map((topic, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 hover:bg-white/70 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{topic.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {topic.title}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-4">
                      {topic.duration}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-center">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Why Attend Section */}
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/30 mt-16">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Why Attend PMES?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Learn the Basics</h4>
                  <p className="text-gray-600 text-sm">Understand cooperative principles and how they benefit members</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Meet the Community</h4>
                  <p className="text-gray-600 text-sm">Connect with fellow members and cooperative leaders</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Start Your Journey</h4>
                  <p className="text-gray-600 text-sm">Begin your membership application process with confidence</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Upcoming Sessions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Reserve your spot in our upcoming PMES sessions. Limited seats available per session.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 hover:bg-white/70 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{session.branch}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(session.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{session.time}</div>
                      <div className={`text-sm px-2 py-1 rounded-full ${
                        session.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {session.status}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Registration Progress</span>
                      <span>{session.registered}/{session.capacity}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(session.registered / session.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group">
                    Reserve Seat
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 text-white rounded-3xl p-12 mt-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-6">Ready to Join SJMPC?</h3>
            <p className="mb-10 text-xl opacity-90 font-light leading-relaxed max-w-2xl mx-auto">
              Attend our PMES and discover how cooperative membership can benefit you and your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1">
                <span className="relative z-10">Find Nearest Branch</span>
                <div className="absolute inset-0 bg-gray-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                <span className="relative z-10">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
