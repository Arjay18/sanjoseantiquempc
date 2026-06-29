import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import TopInformationBar from "@/components/home/sjmpc-home/TopInformationBar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <TopInformationBar />
      <div className="pt-11">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <FadeIn direction="up">
            <div>
              <p className="text-green-200 tracking-wide font-medium">About Us</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
                San Jose Antique Multi-Purpose Cooperative
              </h1>
              <p className="mt-6 text-green-100 leading-relaxed text-lg">
                Empowering communities since 1963 through trusted financial services,
                inclusive growth, and member-first development programs.
              </p>

              <div className="mt-8 flex gap-4">
                <Link href="/register" className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Become a Member
                </Link>
                <Link href="/contact" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative h-[400px]">
              <Image
                src="/images/433653723_8032419583452138_6238720083292977796_n.jpg"
                alt="SJMPC Cooperative Building"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-green-800 font-bold text-xl">Our Mission</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To provide accessible financial services that uplift members and strengthen communities through sustainable cooperative practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-green-800 font-bold text-xl">Our Vision</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A progressive and responsive cooperative that fosters sustainable growth, financial stability, and shared prosperity for all members.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-green-800 font-bold text-xl">Core Values</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Integrity, Service, Unity, Accountability, and Community Empowerment are the pillars of our cooperative identity.
            </p>
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-12">
            Our History
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { year: "1963", text: "Founded by local community leaders to provide mutual financial support." },
              { year: "1980", text: "Expanded savings and loan services to meet growing member needs." },
              { year: "2005", text: "Modernized operations and digitized member transactions for efficiency." },
              { year: "2024", text: "Growing multi-branch expansion across Antique and neighboring regions." },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="bg-green-50 p-8 rounded-xl border border-green-100 h-full">
                  <h3 className="text-green-800 font-bold text-2xl">
                    {item.year}
                  </h3>
                  <p className="mt-4 text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>



      {/* STATISTICS BAR */}
      <section className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold">61+</h3>
            <p className="text-green-200 mt-1 uppercase text-sm tracking-wider">Years of Service</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">15,000+</h3>
            <p className="text-green-200 mt-1 uppercase text-sm tracking-wider">Members</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">20+</h3>
            <p className="text-green-200 mt-1 uppercase text-sm tracking-wider">Branches</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="text-green-200 mt-1 uppercase text-sm tracking-wider">Member Focused</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-green-800 to-green-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Join Our Growing Cooperative Community
          </h2>
          <p className="mt-6 text-xl text-green-100">
            Become part of a trusted institution serving Antique since 1963. 
            Experience growth and stability with SJMPC.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/register" className="bg-white text-green-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-transform hover:-translate-y-1">
              Become a Member
            </Link>
            <Link href="/loans" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              Apply for a Loan
            </Link>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
