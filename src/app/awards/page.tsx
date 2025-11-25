import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

export default function AwardsPage() {
  const awards = [
    {
      year: '2023',
      title: 'Best Cooperative of the Year',
      organization: 'Cooperative Development Authority',
      description: 'Recognized for outstanding performance in member services and community development initiatives.',
      category: 'Excellence Award',
      image: '/awards/trophy1.jpg' // Placeholder, replace with actual image
    },
    {
      year: '2022',
      title: 'Financial Inclusion Champion',
      organization: 'Bangko Sentral ng Pilipinas',
      description: 'Awarded for innovative financial products that improved access to banking services for underserved communities.',
      category: 'Innovation Award',
      image: '/awards/trophy2.jpg'
    },
    {
      year: '2021',
      title: 'Community Impact Award',
      organization: 'Local Government of Iloilo',
      description: 'Honored for significant contributions to local economic development and poverty alleviation programs.',
      category: 'Community Service',
      image: '/awards/trophy3.jpg'
    },
    {
      year: '2020',
      title: 'Resilience Award',
      organization: 'Philippine Cooperative Center',
      description: 'Acknowledged for effective management and member support during the COVID-19 pandemic.',
      category: 'Resilience Award',
      image: '/awards/trophy4.jpg'
    },
    {
      year: '2019',
      title: 'Outstanding Microfinance Institution',
      organization: 'Microfinance Council of the Philippines',
      description: 'Recognized for excellence in microfinance operations and sustainable lending practices.',
      category: 'Financial Services',
      image: '/awards/trophy5.jpg'
    },
    {
      year: '2018',
      title: 'Best SME Partner',
      organization: 'Department of Trade and Industry',
      description: 'Awarded for supporting small and medium enterprises through accessible financing solutions.',
      category: 'Business Partnership',
      image: '/awards/trophy6.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <FadeIn delay={0.2}>
            <div className="max-w-4xl">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full mb-6 shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h1 className="mb-6 text-5xl font-black text-white md:text-6xl tracking-tight">
                OUR AWARDS
              </h1>
              <p className="mb-8 text-xl text-white/90 md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Celebrating excellence, innovation, and community impact through recognition and achievement
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Introduction */}
        <FadeIn delay={0.4}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-800 mb-6">
              Recognition of Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SJMPC's commitment to excellence has been recognized by various organizations and institutions.
              These awards reflect our dedication to serving our members, supporting our community, and maintaining
              the highest standards in cooperative banking and financial services.
            </p>
          </div>
        </FadeIn>

        {/* Awards Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-red-500 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {awards.map((award, index) => (
              <FadeIn key={award.year} delay={0.6 + index * 0.2}>
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Award Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-2xl font-black text-gray-800">{award.year}</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                              {award.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{award.title}</h3>
                          <p className="text-sm text-orange-600 font-semibold mb-3">{award.organization}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg z-10"></div>

                  {/* Spacer for alternating layout */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              </FadeIn>
            ))}
          </div>
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
  );
}
