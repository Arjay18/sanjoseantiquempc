import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { Users, Globe, Heart, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Stats from './Stats';

export default function AboutUs() {
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

          <FadeIn direction="up" delay={0.6}>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/about"
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Learn More About Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/contact"
                  className="group relative border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    Get in Touch
                    <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <Stats />
    </>
  );
}
