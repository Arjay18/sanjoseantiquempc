'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { useState } from 'react';

export default function AwardsPage() {
  const [selectedAward, setSelectedAward] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const awards = [
    {
      year: '2017',
      title: 'Nominee for Most Outstanding Cooperative',
      organization: 'Cooperative Development Authority',
      description: 'Nominated for excellence in cooperative operations and member service delivery.',
      category: 'Excellence Award',
      image: '/Awards/Nominee for most outstanding cooperative 2027.png'
    },
    {
      year: '2019',
      title: 'Most Outstanding Primary Cooperative',
      organization: 'Cooperative Development Authority',
      description: 'Recognized as the most outstanding primary cooperative for exceptional performance and community impact.',
      category: 'Excellence Award',
      image: '/Awards/Most Outstanding primary  cooperative 2019.png'
    },
    {
      year: '2018',
      title: 'Most Outstanding Cooperative',
      organization: 'Cooperative Development Authority',
      description: 'Awarded for outstanding cooperative management and member services.',
      category: 'Excellence Award',
      image: '/Awards/Most outrstanding cooperative 2018.png'
    },
    {
      year: '2016',
      title: 'Nominee for Most Outstanding Regional Cooperative',
      organization: 'Cooperative Development Authority',
      description: 'Nominated for regional excellence in cooperative operations and community development.',
      category: 'Regional Excellence',
      image: '/Awards/Nominee for most outstanding regional cooperative 2016.png'
    },
    {
      year: '2014',
      title: 'Most Outstanding Cooperative',
      organization: 'Cooperative Development Authority',
      description: 'Recognized for outstanding performance in cooperative banking and community service.',
      category: 'Excellence Award',
      image: '/Awards/2014 most outstanding cooperative.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold mb-8 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Excellence & Recognition
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              OUR AWARDS
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Celebrating Excellence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Discover our comprehensive collection of awards and recognitions that showcase our commitment to excellence,
              innovation, and community impact through years of dedicated service and achievement.
            </p>
          </div>

        {/* Awards Gallery Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <FadeIn key={award.year} delay={0.6 + index * 0.1}>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                {/* Award Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-3xl font-black text-white mb-1">{award.year}</div>
                    <div className="px-3 py-1 bg-yellow-500 text-yellow-900 text-sm font-semibold rounded-full inline-block">
                      {award.category}
                    </div>
                  </div>
                </div>

                {/* Award Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-sm text-orange-600 font-semibold mb-3">
                    {award.organization}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {award.description}
                  </p>

                  {/* View Details Button */}
                  <button
                    onClick={() => {
                      setSelectedAward(award);
                      setIsModalOpen(true);
                    }}
                    className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Certificate
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Achievement Stats */}
        <FadeIn delay={1.4}>
          <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-gray-800 mb-4">Our Achievement Highlights</h3>
              <p className="text-gray-600 text-lg">A testament to our commitment and success</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-yellow-500 mb-2">15+</div>
                <div className="text-sm text-gray-600">Awards Received</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500 mb-2">10</div>
                <div className="text-sm text-gray-600">Years of Recognition</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-red-500 mb-2">8</div>
                <div className="text-sm text-gray-600">Award Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-500 mb-2">100%</div>
                <div className="text-sm text-gray-600">Member Satisfaction</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn delay={1.6}>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-red-400/10 rounded-3xl p-12 border border-yellow-200/30">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-6">Proud of Our Achievements</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                These awards motivate us to continue striving for excellence in everything we do.
                We remain committed to our mission of empowering our community through quality financial services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Learn More About Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Get in Touch
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
        </div>
      </div>

      {/* Certificate Modal */}
      {isModalOpen && selectedAward && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => {
                setIsModalOpen(false);
                setSelectedAward(null);
              }}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Award Image */}
            <div className="relative h-[70vh] bg-gray-100">
              <Image
                src={selectedAward.image}
                alt={selectedAward.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Award Details */}
            <div className="p-8 bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-black text-yellow-500">{selectedAward.year}</div>
                <div className="px-4 py-2 bg-yellow-500 text-yellow-900 text-sm font-semibold rounded-full">
                  {selectedAward.category}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedAward.title}</h3>
              <p className="text-lg text-orange-600 font-semibold mb-4">{selectedAward.organization}</p>
              <p className="text-gray-600 leading-relaxed">{selectedAward.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
