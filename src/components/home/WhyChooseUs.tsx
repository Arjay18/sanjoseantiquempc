import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" delay={0.2}>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Main Services
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              SJMPC offers comprehensive financial services designed to meet your banking needs with trust and reliability.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer delay={0.4} staggerChildren={0.2}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <StaggerItem>
              <FadeIn direction="up" delay={0.1}>
                <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700 transition-transform hover:scale-105 hover:shadow-xl">
                  <div className="mb-4 text-brand-green">
                    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                    Savings Deposit
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Secure your future with our competitive savings deposit options, offering attractive interest rates and flexible terms.
                  </p>
                </div>
              </FadeIn>
            </StaggerItem>

            {/* Card 2 */}
            <StaggerItem>
              <FadeIn direction="up" delay={0.2}>
                <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700 transition-transform hover:scale-105 hover:shadow-xl">
                  <div className="mb-4 text-brand-blue">
                    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                    Loan Products
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Access various loan products tailored to meet your personal and business financing needs with competitive rates.
                  </p>
                </div>
              </FadeIn>
            </StaggerItem>

            {/* Card 3 */}
            <StaggerItem>
              <FadeIn direction="up" delay={0.3}>
                <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700 transition-transform hover:scale-105 hover:shadow-xl">
                  <div className="mb-4 text-brand-yellow">
                    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                    Social Programs
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Participate in our community-focused social programs designed to support and uplift our members and local communities.
                  </p>
                </div>
              </FadeIn>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
