import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { Users, Globe, Heart, Award, ArrowRight, CheckCircle, Target, Eye, Star, Calendar, Home, TrendingUp, Camera } from 'lucide-react';
import Stats from '@/components/home/Stats';

export default function AboutPage() {
  return (
    <>
      <section className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 text-sm font-semibold mb-8 shadow-lg">
                <CheckCircle className="w-5 h-5 mr-2" />
                About SJMPC
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
                Empowering Communities Through
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Cooperative Excellence
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                For over 61 years, SJMPC has been at the forefront of cooperative banking in the Philippines,
                dedicated to providing comprehensive financial services that empower individuals and strengthen communities.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Member-Centric Approach</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We prioritize our members' needs, offering personalized financial solutions that adapt to their unique circumstances and goals.
                </p>
              </div>

              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Community Impact</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Creating lasting positive change in our communities through financial inclusion, education, and sustainable development initiatives.
                </p>
              </div>

              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Trusted Partnership</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Building financial futures together since 1963, with a legacy of trust, reliability, and community service.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Our Story Section */}
          <FadeIn direction="up" delay={0.6}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Our Story</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Beginning (1964)</h3>
                <p className="mb-4">
                  Father Antony Oomen, then Parish Priest of San Jose Parish (Cathedral), gathered twenty-eight people for the purpose of forming a Cooperative on 23 February 1964. Fifteen of them were members of the Knights of the Columbus, with the assistance of two representatives from Cooperative Administration Office (CAO). On 22 September 1964, of the same year, San Jose Credit Union was born and was formally registered. Its temporary home was at the basement of the San Jose Parish Convento. At the end of 1964, the Credit Union had 151 members, total assets of P4,392.47, and total share capital of P4, 288.00. Retired Judge Ciriaco Q. Nietes and Ms. Epifania S. Ballescas, a retired teacher were the Chairperson of the Board of Directors and Treasurer, respectively.
                </p>
                <p className="mb-8">
                  The Roman Catholic Diocese of San Jose de Antique, under the leadership of Bishop Cornelio De Wit conducted a province wide campaign and soon there were coops in every parish.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Re-registration and Growth (1975)</h3>
                <p className="mb-8">
                  On 5 May 1975, the San Jose Credit Union was re-registered with the Bureau of Cooperatives Development under a new name, the San Jose Credit Cooperative, Inc. (SJCCI). Chairperson of the Board was Mr. Jovito L. Encarnacion. The old bowling alley near the San Jose Parish Convento was converted into an office building which the Cooperative occupied for 19 years.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Multi-Purpose Era (1995)</h3>
                <p className="mb-4">
                  Business continued as usual until 1995 when SJCCI was renamed and registered with the Cooperative Development Authority (CDA) as San Jose Multi-Purpose Cooperative (SJMPC). That time the Cooperative opened its multi-purpose program for its growing members.
                </p>
                <p className="mb-8">
                  After a year at the DILG building, the Cooperative found another home at the Municipal Building where it operated its business for 10 years. Here, the Cooperative Consumer's Market was established but failed. The reason that the officers phased out the project.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Community Programs and Housing (2000)</h3>
                <p className="mb-4">
                  In 2000, SJMPC envisioned to extend its help to the youth, thus Coop Bulig Eskwela Scholars was initiated. This program provides financial assistance to qualified children or ward of deserving members of cooperative in good standing. This program started with 7 beneficiaries.
                </p>
                <p className="mb-8">
                  It was also in the same year when the Cooperative in its Ruby Jubilee Year acquired a lot with an area of 9,368 sq.m in Barangay San Fernando, San Jose de Buenavista, Antique which was named the Coop Ruby Jubilee Village. It provided housing to 62 members.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Permanent Home and Continued Growth (2007 - Present)</h3>
                <p className="mb-4">
                  In September 2007, the Cooperative was able to have its permanent home at Trade Town, Dalipe, San Jose de Buenavista through a Usufruct Agreement with the Local Government Unit of San Jose de Buenavista.
                </p>
                <p className="mb-8">
                  From 151 members in 1964, the Cooperative's membership has reached more than 10,000 members and with satellite offices in Miag-ao and Oton, Iloilo. SJMPC continues to grow and reach out to people through its many projects...
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Our Mission & Vision */}
          <FadeIn direction="up" delay={0.8}>
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Our Mission</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto rounded-full"></div>
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-6">
                  <div>
                    <h4 className="font-bold text-green-700 dark:text-green-400 text-xl mb-2">Financial Intermediary</h4>
                    <p>To provide friendly, affordable and accessible financial services towards building a financially disciplined and empowered members.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-700 dark:text-green-400 text-xl mb-2">People's Movement</h4>
                    <p>To raise the level of social and political consciousness of the members through participative governance.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-700 dark:text-green-400 text-xl mb-2">Social Development</h4>
                    <p>To instill values of honesty, openness, and care for others among members and community.</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Our Vision</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full"></div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed">
                  Responsive, dynamic, self-reliant and transparent, environment-friendly cooperative providing quality service to members and community.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Our Core Values */}
          <FadeIn direction="up" delay={1.0}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Our Core Values</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">INTEGRITY</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Upholding honesty, transparency, and ethical standards.</p>
                </div>
                <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-2">BELONGINGNESS</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Fostering a sense of community and belonging.</p>
                </div>
                <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-400 mb-2">EQUITY</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Ensuring fair treatment and equal opportunities.</p>
                </div>
                <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-800 dark:text-red-400 mb-2">LOYALTY</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Demonstrating unwavering commitment.</p>
                </div>
                <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 dark:text-purple-400 mb-2">OPENNESS</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Maintaining transparency and open communication.</p>
                </div>
                <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-400 mb-2">NOBLENESS</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Acting with dignity, honor, and moral excellence.</p>
                </div>
                <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 text-center md:col-span-2 lg:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-800 dark:text-pink-400 mb-2">GENEROSITY</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Sharing resources and giving freely to support our community.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Photo Gallery */}
          <FadeIn direction="up" delay={1.2}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-300 text-sm font-semibold mb-8 shadow-lg">
                  <Camera className="w-5 h-5 mr-2" />
                  Our Gallery
                </div>
                <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Moments That Matter</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
                  Capturing the spirit of community, growth, and cooperative excellence at SJMPC through the years.
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
                  Want to see more of our journey? Visit our social media pages for the latest updates and behind-the-scenes content.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Facebook
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <Stats />
    </>
  );
}
