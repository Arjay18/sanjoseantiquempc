import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { Users, TrendingUp, CheckCircle, ArrowRight, Award, Shield, Target } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 w-[36rem] h-[36rem] -translate-x-1/2 bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-40 left-[-10rem] w-[30rem] h-[30rem] bg-yellow-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,0.10),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(250,204,21,0.10),transparent_35%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standout layout: 1) large title block, 2) framed image card, 3) bullet list, 4) value cards */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Title + bullets + CTAs */}
          <div className="lg:col-span-5">
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-yellow-500 shadow-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <div className="absolute -inset-1 rounded-3xl bg-white/10" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-700">About San Jose Antique MPC</div>
                  <div className="text-xs text-gray-500">Cooperative values • Financial excellence</div>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                Your Trusted Partner in
                <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 bg-clip-text text-transparent">
                  Financial Growth
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-7 leading-relaxed">
                For over <strong className="text-blue-600">61 years</strong>, we empower communities across the Philippines—combining cooperative values with modern financial solutions.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.25}>
              <div className="rounded-3xl border border-blue-100 bg-white/70 backdrop-blur p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-yellow-500 flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Built for members</div>
                    <div className="text-sm text-gray-500">What you can expect</div>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                      <CheckCircle className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <div className="font-medium text-gray-900">Member-first service</div>
                      <div className="text-sm text-gray-600">Personalized support from application to membership growth.</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-50 text-yellow-700">
                      <TrendingUp className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <div className="font-medium text-gray-900">Stable financial growth</div>
                      <div className="text-sm text-gray-600">Cooperative strength designed for sustainable progress.</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-700">
                      <Award className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <div className="font-medium text-gray-900">Trusted governance</div>
                      <div className="text-sm text-gray-600">Reliable leadership and commitment to transparency.</div>
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
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
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
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white">
                  <div className="relative">
                    <Image
                      src="/images/433653723_8032419583452138_6238720083292977796_n.jpg"
                      alt="SJMPC Annual General Assembly"
                      width={1200}
                      height={700}
                      className="w-full h-[360px] md:h-[420px] object-contain bg-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                    {/* Overlay stats */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <div className="text-sm font-semibold text-gray-600">Members</div>
                          <div className="text-2xl font-black text-blue-700">15,000+</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-600">Branches</div>
                          <div className="text-2xl font-black text-yellow-600">4</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-600">Years</div>
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
            <div className="group relative bg-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Member First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every decision we make prioritizes our members—delivering personalized solutions for your financial journey.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 border border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Building stronger communities through financial inclusion, education programs, and sustainable development initiatives.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-yellow-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Six decades of proven reliability, transparency, and commitment to help our members achieve their financial goals.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

