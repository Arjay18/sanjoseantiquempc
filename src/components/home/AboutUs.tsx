import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { Users, Globe, Heart, Award, ArrowRight, CheckCircle, TrendingUp, Shield, Target } from 'lucide-react';

export default function AboutUs() {
  return (
    <>
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <FadeIn direction="left" delay={0.2}>
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  About SJMPC
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  Your Trusted Partner in
                  <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 bg-clip-text text-transparent">
                    Financial Growth
                  </span>
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  For over <strong className="text-blue-600">61 years</strong>, San Jose Multi-Purpose Cooperative has been empowering communities across the Philippines. We combine traditional cooperative values with modern financial solutions to help our members achieve their dreams.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5 border border-blue-200">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-sm font-semibold text-gray-600">Members</span>
                    </div>
                    <div className="text-3xl font-black text-blue-600">15,000+</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-5 border border-yellow-200">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-5 h-5 text-yellow-600 mr-2" />
                      <span className="text-sm font-semibold text-gray-600">Assets</span>
                    </div>
                    <div className="text-3xl font-black text-yellow-600">₱1.2B+</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/about"
                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Discover Our Story
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Right Content - Image Grid */}
            <FadeIn direction="right" delay={0.3}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/logo.png"
                    alt="SJMPC Cooperative"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-gray-600">Established</div>
                        <div className="text-2xl font-black text-blue-600">1963</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-600">Branches</div>
                        <div className="text-2xl font-black text-yellow-600">4</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-600">Years</div>
                        <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">61+</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 shadow-xl animate-pulse">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-4 shadow-xl" style={{ animationDelay: '1s' }}>
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Features Grid */}
          <FadeIn direction="up" delay={0.5}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <div className="absolute top-6 right-6 text-6xl font-black text-blue-100">01</div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Member First</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every decision we make puts our members' interests at the forefront, ensuring personalized solutions for your financial journey.
                  </p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl">
                <div className="absolute top-6 right-6 text-6xl font-black text-yellow-100">02</div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Community Driven</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building stronger communities through financial inclusion, education programs, and sustainable development initiatives.
                  </p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <div className="absolute top-6 right-6 text-6xl font-black text-blue-100">03</div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-yellow-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Six decades of proven reliability, transparency, and commitment to helping our members achieve their financial goals.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
