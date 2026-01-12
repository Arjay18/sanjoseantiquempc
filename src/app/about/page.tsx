import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { Users, Globe, Heart, Award, CheckCircle, Target, Eye, Star, Camera } from 'lucide-react';
import Stats from '@/components/home/Stats';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Cooperative Theme */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-teal-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-teal-900/20 overflow-hidden">
        {/* Cooperative circles pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-40 right-40 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-200/20 via-orange-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" delay={0.2}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg mb-6 border-2 border-orange-200 dark:border-orange-700">
              <Users className="w-5 h-5 mr-2 text-orange-600" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">COOPERATIVE SPIRIT</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Building Communities
              <span className="block bg-gradient-to-r from-orange-600 via-amber-600 to-teal-600 bg-clip-text text-transparent">
                Together Since 1963
              </span>
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              A member-owned cooperative dedicated to financial empowerment, social development, and community prosperity.
              <span className="block mt-2 font-semibold text-orange-700 dark:text-orange-400">By the people, for the people.</span>
            </p>

            {/* Cooperative Stats in circular badges */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex flex-col items-center justify-center text-white shadow-lg">
                  <div className="text-2xl font-black">15K+</div>
                  <div className="text-xs font-semibold">Members</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-md">
                  <Users className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex flex-col items-center justify-center text-white shadow-lg">
                  <div className="text-2xl font-black">61+</div>
                  <div className="text-xs font-semibold">Years</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-md">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex flex-col items-center justify-center text-white shadow-lg">
                  <div className="text-xl font-black">₱1.2B+</div>
                  <div className="text-xs font-semibold">Assets</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center shadow-md">
                  <Target className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex flex-col items-center justify-center text-white shadow-lg">
                  <div className="text-2xl font-black">4</div>
                  <div className="text-xs font-semibold">Branches</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center shadow-md">
                  <Globe className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            {/* Cooperative Principles Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 dark:border-orange-700">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-200 mb-3">Member Ownership</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Owned and controlled by our members, ensuring decisions reflect community needs and values.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-teal-200 dark:border-teal-700">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-teal-900 dark:text-teal-200 mb-3">Community First</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Committed to the economic and social well-being of our members and the wider community.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 dark:border-amber-700">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-3">Democratic Control</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  One member, one vote - ensuring equal voice in shaping our cooperative's future.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn direction="up" delay={0.6}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/10 to-teal-500/10 rounded-full mb-4">
              <Award className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-sm font-semibold text-orange-700 dark:text-orange-400">OUR COOPERATIVE JOURNEY</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A journey of growth, resilience, and community service spanning over six decades
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Timeline Entry - 1964 */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl p-8 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-md">1964</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">The Beginning</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Father Antony Oomen gathered twenty-eight people to form a Cooperative on 23 February 1964. On 22 September 1964, San Jose Credit Union was born and formally registered with 151 members, total assets of ₱4,392.47, and share capital of ₱4,288.00.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  The Roman Catholic Diocese of San Jose de Antique, under Bishop Cornelio De Wit, conducted a province-wide campaign, establishing cooperatives in every parish.
                </p>
              </div>

              {/* Timeline Entry - 1975 */}
              <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-2xl p-8 shadow-lg border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-md">1975</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">Re-registration & Growth</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  On 5 May 1975, the San Jose Credit Union was re-registered as San Jose Credit Cooperative, Inc. (SJCCI). The old bowling alley near the San Jose Parish Convento was converted into an office building, which the Cooperative occupied for 19 years.
                </p>
              </div>

              {/* Timeline Entry - 1995 */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl p-8 shadow-lg border-l-4 border-amber-500">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-md">1995</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">Multi-Purpose Era</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  SJCCI was renamed and registered with the Cooperative Development Authority (CDA) as San Jose Multi-Purpose Cooperative (SJMPC), opening its multi-purpose program for growing members and relocating to the Municipal Building.
                </p>
              </div>

              {/* Timeline Entry - 2000 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-md">2000</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">Community Programs & Housing</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  SJMPC initiated the Coop Bulig Eskwela Scholars program, starting with 7 beneficiaries to provide financial assistance for education.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  In its Ruby Jubilee Year, the Cooperative acquired 9,368 sq.m in Barangay San Fernando for the Coop Ruby Jubilee Village, providing housing to 62 members.
                </p>
              </div>

              {/* Timeline Entry - 2007-Present */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 shadow-lg border-l-4 border-orange-600">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-md">2007</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">Permanent Home & Expansion</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  In September 2007, the Cooperative established its permanent home at Trade Town, Dalipe, San Jose de Buenavista through a Usufruct Agreement.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  From 151 members in 1964, SJMPC's membership reached over 15,000 members with satellite offices in Miag-ao, Oton, and Guimaras.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn direction="up" delay={0.8}>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-3xl p-10 shadow-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-orange-900 dark:text-orange-200 ml-4">Our Mission</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-2 text-sm">1</span>
                    Financial Intermediary
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm ml-10">Provide friendly, affordable and accessible financial services towards building financially disciplined and empowered members.</p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-2 text-sm">2</span>
                    People's Movement
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm ml-10">Raise the level of social and political consciousness through participative governance.</p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-2 text-sm">3</span>
                    Social Development
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm ml-10">Instill values of honesty, openness, and care for others among members and community.</p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-teal-100 to-green-100 dark:from-teal-900/30 dark:to-green-900/30 rounded-3xl p-10 shadow-xl border-2 border-teal-300 dark:border-teal-700">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-teal-900 dark:text-teal-200 ml-4">Our Vision</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Responsive, dynamic, self-reliant and transparent, environment-friendly cooperative providing quality service to members and community.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-amber-50/50 to-transparent dark:from-amber-900/10">
        <FadeIn direction="up" delay={1.0}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full mb-4">
              <Star className="w-5 h-5 text-amber-600 mr-2" />
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">COOPERATIVE VALUES</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I-BELONG - The values that unite and guide us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/20 rounded-2xl p-6 shadow-lg text-center border-2 border-orange-200 dark:border-orange-700 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-orange-800 dark:text-orange-300 mb-2 text-lg">INTEGRITY</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Honesty and ethical standards</p>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-teal-50 dark:from-teal-900/30 dark:to-teal-800/20 rounded-2xl p-6 shadow-lg text-center border-2 border-teal-200 dark:border-teal-700 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-teal-800 dark:text-teal-300 mb-2 text-lg">BELONGINGNESS</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Community and unity</p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20 rounded-2xl p-6 shadow-lg text-center border-2 border-amber-200 dark:border-amber-700 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-amber-800 dark:text-amber-300 mb-2 text-lg">EQUITY</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Fair treatment for all</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20 rounded-2xl p-6 shadow-lg text-center border-2 border-green-200 dark:border-green-700 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-green-800 dark:text-green-300 mb-2 text-lg">LOYALTY</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Unwavering commitment</p>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-teal-50 dark:from-teal-900/30 dark:to-teal-800/20 rounded-2xl p-6 shadow-lg text-center border-2 border-teal-200 dark:border-teal-700 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-teal-800 dark:text-teal-300 mb-2 text-lg">OPENNESS</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Transparent communication</p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20 rounded-2xl p-6 shadow-lg text-center border-2 border-amber-200 dark:border-amber-700 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-amber-800 dark:text-amber-300 mb-2 text-lg">NOBLENESS</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Dignity and moral excellence</p>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/20 rounded-2xl p-6 shadow-lg text-center border-2 border-orange-200 dark:border-orange-700 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-orange-800 dark:text-orange-300 mb-2 text-lg">GENEROSITY</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Freely giving to community</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Photo Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn direction="up" delay={1.2}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mb-4">
              <Camera className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-sm font-semibold text-purple-600">OUR GALLERY</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Moments That Matter</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Capturing the spirit of community, growth, and cooperative excellence through the years
            </p>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center"
                    alt="SJMPC Annual General Assembly"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Annual General Assembly</h3>
                      <p className="text-sm opacity-90">Celebrating another year of growth and achievements</p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=center"
                    alt="SJMPC Community Outreach"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Community Outreach</h3>
                      <p className="text-sm opacity-90">Supporting local communities and sustainable development</p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center"
                    alt="SJMPC Youth Programs"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Youth Programs</h3>
                      <p className="text-sm opacity-90">Investing in the future through education and scholarships</p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=center"
                    alt="SJMPC Financial Services"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Financial Services</h3>
                      <p className="text-sm opacity-90">Providing accessible banking solutions to our members</p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop&crop=center"
                    alt="SJMPC Team Building"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Team Building</h3>
                      <p className="text-sm opacity-90">Strengthening bonds and fostering collaboration</p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center"
                    alt="SJMPC Awards and Recognition"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Awards & Recognition</h3>
                      <p className="text-sm opacity-90">Celebrating excellence and community impact</p>
                    </div>
                  </div>
                </div>
              </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Want to see more? Visit our social media pages for the latest updates.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="#" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                Facebook
              </Link>
              <Link href="#" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                Instagram
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
      <Stats />
    </>
  );
}
