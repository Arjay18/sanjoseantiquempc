import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { Users, Globe, Heart, Award, CheckCircle, Target, Eye, Star, Camera } from 'lucide-react';
import Stats from '@/components/home/Stats';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" delay={0.2}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg mb-6">
              <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">ABOUT SJMPC</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Empowering Communities
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Since 1963
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              For over 61 years, SJMPC has been at the forefront of cooperative banking in the Philippines,
              dedicated to providing comprehensive financial services that empower individuals and strengthen communities.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">61+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">₱1.2B+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Assets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Branches</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Member-Centric</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Personalized financial solutions that adapt to your unique circumstances and goals.
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-purple-500">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community Impact</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Creating lasting positive change through financial inclusion and development initiatives.
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Trusted Partnership</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  A legacy of trust, reliability, and community service since 1963.
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-4">
              <Award className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-600">OUR HISTORY</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A journey of growth, resilience, and community service spanning over six decades
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Timeline Entry - 1964 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-lg">1964</div>
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
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-lg">1975</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">Re-registration & Growth</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  On 5 May 1975, the San Jose Credit Union was re-registered as San Jose Credit Cooperative, Inc. (SJCCI). The old bowling alley near the San Jose Parish Convento was converted into an office building, which the Cooperative occupied for 19 years.
                </p>
              </div>

              {/* Timeline Entry - 1995 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-lg">1995</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">Multi-Purpose Era</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  SJCCI was renamed and registered with the Cooperative Development Authority (CDA) as San Jose Multi-Purpose Cooperative (SJMPC), opening its multi-purpose program for growing members and relocating to the Municipal Building.
                </p>
              </div>

              {/* Timeline Entry - 2000 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-lg">2000</div>
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
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg">2007</div>
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
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white ml-4">Our Mission</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">Financial Intermediary</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Provide friendly, affordable and accessible financial services towards building financially disciplined and empowered members.</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">People's Movement</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Raise the level of social and political consciousness through participative governance.</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">Social Development</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Instill values of honesty, openness, and care for others among members and community.</p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white ml-4">Our Vision</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Responsive, dynamic, self-reliant and transparent, environment-friendly cooperative providing quality service to members and community.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn direction="up" delay={1.0}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full mb-4">
              <Star className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="text-sm font-semibold text-yellow-600">OUR PRINCIPLES</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The guiding principles that shape our culture and service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center border-t-4 border-green-500">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">INTEGRITY</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Honesty and ethical standards</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center border-t-4 border-blue-500">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">BELONGINGNESS</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Community and unity</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center border-t-4 border-yellow-500">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-yellow-700 dark:text-yellow-400 mb-2">EQUITY</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Fair treatment for all</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center border-t-4 border-red-500">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">LOYALTY</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Unwavering commitment</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center border-t-4 border-purple-500">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-2">OPENNESS</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Transparent communication</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center border-t-4 border-indigo-500">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">NOBLENESS</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Dignity and moral excellence</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center border-t-4 border-pink-500">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-pink-700 dark:text-pink-400 mb-2">GENEROSITY</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Freely giving to community</p>
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
