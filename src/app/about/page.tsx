import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import Stats from '@/components/home/Stats';
import {
  Users,
  Globe,
  Heart,
  Award,
  CheckCircle,
  Target,
  Eye,
  Star,
  Camera,
  ArrowRight,
  Shield,
  TrendingUp,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Modern Hero / About Intro */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 w-[36rem] h-[36rem] -translate-x-1/2 bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-40 left-[-10rem] w-[30rem] h-[30rem] bg-yellow-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,0.10),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(250,204,21,0.10),transparent_35%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Title + bullets + CTA */}
            <div className="lg:col-span-5">
              <FadeIn direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-yellow-500 shadow-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <div className="absolute -inset-1 rounded-3xl bg-white/10" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-700 dark:text-blue-300">About San Jose Antique MPC</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Cooperative values • Financial excellence</div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
                  Your Trusted Partner in
                  <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 bg-clip-text text-transparent">
                    Financial Growth
                  </span>
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-7 leading-relaxed">
                  For over <strong className="text-blue-600 dark:text-blue-300">61 years</strong>, we empower communities across the Philippines—combining cooperative values with modern financial solutions.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.25}>
                <div className="rounded-3xl border border-blue-100 dark:border-blue-900/40 bg-white/70 dark:bg-white/[0.04] backdrop-blur p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-yellow-500 flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">Built for members</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">What you can expect</div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
                        <CheckCircle className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">Member-first service</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Personalized support from application to membership growth.</div>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-50 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-200">
                        <TrendingUp className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">Stable financial growth</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Cooperative strength designed for sustainable progress.</div>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-200">
                        <Award className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">Trusted governance</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Reliable leadership and commitment to transparency.</div>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      href="/about"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Discover Our Story
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Image card + overlay stats */}
            <div className="lg:col-span-7">
              <FadeIn direction="right" delay={0.2}>
                <div className="relative h-full">
                  <div className="absolute -inset-[2px] bg-gradient-to-b from-blue-600/20 to-yellow-500/10 rounded-3xl" />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white dark:bg-white/[0.04]">
                    <div className="relative">
                      <Image
                        src="/images/433653723_8032419583452138_6238720083292977796_n.jpg"
                        alt="SJMPC Annual General Assembly"
                        width={1200}
                        height={700}
                        className="w-full h-[360px] md:h-[420px] object-contain bg-white dark:bg-transparent"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                      {/* Overlay stats */}
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                        <div className="grid grid-cols-3 gap-3">
                          <div>
                            <div className="text-sm font-semibold text-gray-600 dark:text-gray-200">Members</div>
                            <div className="text-2xl font-black text-blue-700 dark:text-blue-300">15,000+</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-600 dark:text-gray-200">Branches</div>
                            <div className="text-2xl font-black text-yellow-600 dark:text-yellow-300">4</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-600 dark:text-gray-200">Years</div>
                            <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">61+</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative badges */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-xl flex items-center justify-center animate-pulse">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-xl flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Value cards */}
          <FadeIn direction="up" delay={0.35}>
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              <div className="group relative bg-white dark:bg-white/[0.04] rounded-2xl p-8 border border-blue-100 dark:border-blue-900/40 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Member First</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Every decision we make prioritizes our members—delivering personalized solutions for your financial journey.
                </p>
              </div>

              <div className="group relative bg-white dark:bg-white/[0.04] rounded-2xl p-8 border border-yellow-100 dark:border-yellow-900/40 hover:border-yellow-300 dark:hover:border-yellow-800 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Community Driven</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Building stronger communities through financial inclusion, education programs, and sustainable development initiatives.
                </p>
              </div>

              <div className="group relative bg-white dark:bg-white/[0.04] rounded-2xl p-8 border border-blue-100 dark:border-blue-900/40 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-yellow-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Trusted Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Six decades of proven reliability, transparency, and commitment to help our members achieve their financial goals.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Story Section (Improved) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn direction="up" delay={0.6}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/10 to-teal-500/10 rounded-full mb-4 border border-orange-200/60 dark:border-orange-700/40">
              <Award className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-sm font-semibold text-orange-700 dark:text-orange-400">OUR COOPERATIVE JOURNEY</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Our Story, <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 bg-clip-text text-transparent">In Motion</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From a small circle of founders to a multi-branch cooperative—built on service, resilience, and member empowerment.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-orange-400/60 via-teal-400/40 to-transparent" />

              <div className="space-y-8 md:space-y-10">
                {/* 1964 */}
                <div className="relative grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5 md:text-right">
                    <div className="inline-flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                        <span className="text-white font-black">64</span>
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-orange-700 dark:text-orange-300">1964</div>
                        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">The Beginning</div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-orange-500 shadow-[0_0_0_6px_rgba(249,115,22,0.15)]" />
                  </div>

                  <div className="md:col-span-5">
                    <div className="rounded-2xl p-7 border border-orange-200/70 dark:border-orange-900/40 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/10 shadow-sm">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Father Antony Oomen gathered twenty-eight people to form a Cooperative on 23 February 1964.
                        On 22 September 1964, San Jose Credit Union was born and formally registered with 151 members,
                        total assets of <span className="font-semibold">₱4,392.47</span>, and share capital of <span className="font-semibold">₱4,288.00</span>.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                        The Roman Catholic Diocese of San Jose de Antique, under Bishop Cornelio De Wit, conducted a province-wide campaign,
                        establishing cooperatives in every parish.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1975 */}
                <div className="relative grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5 md:text-right">
                    <div className="inline-flex items-center gap-3 md:justify-end">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md">
                        <span className="text-white font-black">75</span>
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-teal-700 dark:text-teal-300">1975</div>
                        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">Re-registration & Growth</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-teal-500 shadow-[0_0_0_6px_rgba(20,184,166,0.15)]" />
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-2xl p-7 border border-teal-200/70 dark:border-teal-900/40 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/10 shadow-sm">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        On 5 May 1975, the San Jose Credit Union was re-registered as San Jose Credit Cooperative, Inc. (SJCCI).
                        The old bowling alley near the San Jose Parish Convento was converted into an office building,
                        which the Cooperative occupied for 19 years.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1995 */}
                <div className="relative grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5 md:text-right">
                    <div className="inline-flex items-center gap-3 md:justify-end">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md">
                        <span className="text-white font-black">95</span>
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-amber-700 dark:text-amber-300">1995</div>
                        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">Multi-Purpose Era</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-amber-500 shadow-[0_0_0_6px_rgba(245,158,11,0.15)]" />
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-2xl p-7 border border-amber-200/70 dark:border-amber-900/40 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/10 shadow-sm">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        SJCCI was renamed and registered with the Cooperative Development Authority (CDA) as San Jose Multi-Purpose Cooperative (SJMPC),
                        opening its multi-purpose program for growing members and relocating to the Municipal Building.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2000 */}
                <div className="relative grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5 md:text-right">
                    <div className="inline-flex items-center gap-3 md:justify-end">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md">
                        <span className="text-white font-black">00</span>
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-green-700 dark:text-green-300">2000</div>
                        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">Community Programs & Housing</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_0_6px_rgba(34,197,94,0.15)]" />
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-2xl p-7 border border-green-200/70 dark:border-green-900/40 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 shadow-sm">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        SJMPC initiated the Coop Bulig Eskwela Scholars program, starting with 7 beneficiaries to provide financial assistance for education.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                        In its Ruby Jubilee Year, the Cooperative acquired 9,368 sq.m in Barangay San Fernando for the Coop Ruby Jubilee Village,
                        providing housing to 62 members.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2007 */}
                <div className="relative grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5 md:text-right">
                    <div className="inline-flex items-center gap-3 md:justify-end">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center shadow-md">
                        <span className="text-white font-black">07</span>
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-orange-700 dark:text-orange-300">2007</div>
                        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">Permanent Home & Expansion</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-orange-600 shadow-[0_0_0_6px_rgba(234,88,12,0.15)]" />
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-2xl p-7 border border-orange-200/70 dark:border-orange-900/40 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/10 shadow-sm">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        In September 2007, the Cooperative established its permanent home at Trade Town, Dalipe,
                        San Jose de Buenavista through a Usufruct Agreement.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                        From 151 members in 1964, SJMPC's membership reached over 15,000 members with satellite offices in Miag-ao, Oton, and Guimaras.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>


      {/* Mission & Vision Section (Improved) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn direction="up" delay={0.8}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/10 to-teal-500/10 rounded-full mb-4 border border-orange-200/60 dark:border-orange-700/40">
              <Target className="w-4 h-4 text-orange-600 dark:text-orange-300 mr-2" />
              <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">MISSION & VISION</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-3">Guiding Principles</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Clear purpose today—strong direction tomorrow—so every member benefits from cooperative excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="relative overflow-hidden rounded-3xl border border-orange-200/70 dark:border-orange-900/40 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/10 p-10 shadow-lg">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-black text-orange-900 dark:text-orange-200">Our Mission</h3>
                    <p className="text-sm text-orange-800 dark:text-orange-300">What we do, and why it matters</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="group flex gap-4 rounded-2xl p-4 bg-white/60 dark:bg-white/[0.03] border border-orange-100/60 dark:border-orange-900/20 hover:shadow-md transition-all">
                    <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-bold text-orange-900 dark:text-orange-200">Financial Intermediary</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        Provide friendly, affordable, and accessible financial services that build disciplined and empowered members.
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-4 rounded-2xl p-4 bg-white/60 dark:bg-white/[0.03] border border-orange-100/60 dark:border-orange-900/20 hover:shadow-md transition-all">
                    <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-bold text-orange-900 dark:text-orange-200">People's Movement</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        Raise social and political consciousness through participative governance and shared decision-making.
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-4 rounded-2xl p-4 bg-white/60 dark:bg-white/[0.03] border border-orange-100/60 dark:border-orange-900/20 hover:shadow-md transition-all">
                    <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-bold text-orange-900 dark:text-orange-200">Social Development</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        Instill values of honesty, openness, and care for others among members and the wider community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden rounded-3xl border border-teal-200/70 dark:border-teal-900/40 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/10 p-10 shadow-lg">
              <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-black text-teal-900 dark:text-teal-200">Our Vision</h3>
                    <p className="text-sm text-teal-800 dark:text-teal-300">The future we’re building</p>
                  </div>
                </div>

                <div className="rounded-2xl p-6 bg-white/60 dark:bg-white/[0.03] border border-teal-100/60 dark:border-teal-900/20">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Responsive, dynamic, self-reliant, and transparent—an environment-friendly cooperative delivering quality service to members and the community.
                  </p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-500 mt-2" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100">Service Excellence</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Quality at every touchpoint</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-2" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100">Member Empowerment</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Growth through cooperative values</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">I-BELONG - The values that unite and guide us</p>
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
                src="/images/433653723_8032419583452138_6238720083292977796_n.jpg"
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
                src="/images/540980295_10235369655438843_7551540348210928825_n.jpg"
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
                src="/images/583336515_1358093772463317_512346541910271086_n.jpg"
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
                src="/images/584711177_10236308089939119_4315614434674993906_n.jpg"
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
                src="/images/597403592_1403798674673184_7189129226940101753_n.jpg"
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
                src="/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg"
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
            <p className="text-gray-600 dark:text-gray-300 mb-6">Want to see more? Visit our social media pages for the latest updates.</p>
            <div className="flex justify-center gap-4">
              <Link
                href="#"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
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

