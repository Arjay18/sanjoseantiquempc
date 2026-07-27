import Image from 'next/image';
import Link from 'next/link';
import { PiggyBank, Calculator } from 'lucide-react';
import { SectionContainer } from './SectionContainer';


export default function FinalCallToActionSection() {
  return (
    <section className="relative py-14">
      <div className="absolute inset-0">
        <Image
          src="/images/597403592_1403798674673184_7189129226940101753_n.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[color:rgba(0,77,45,0.80)]" />
      </div>

      <SectionContainer>
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 sm:px-10 py-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Start Your Financial Journey Today!</h2>
            <p className="mt-3 text-white/90 max-w-2xl">
              Join thousands of Antiqueños who trust SJMPC as their partner in building a better future.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/registration"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-[var(--sjmpc-green)] font-extrabold shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:bg-[color:rgba(255,255,255,0.92)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--sjmpc-gold)]"
              >
                <Calculator className="w-5 h-5" />
                Become a Member
              </Link>

              <Link
                href="/online-application"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[var(--sjmpc-green)] text-white font-extrabold shadow-lg shadow-black/15 hover:-translate-y-0.5 hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--sjmpc-gold)]"
              >
                <PiggyBank className="w-5 h-5" />
                Apply for Loan Online
              </Link>
            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
}

