import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Newspaper, ArrowRight } from 'lucide-react';
import { SectionContainer } from './SectionContainer';

const latest = {
  title: 'Latest News & Announcements',
  items: [
    { category: 'Announcement', title: 'Cooperative updates for members', date: 'Jun 12, 2026', href: '/news' },
    { category: 'News', title: 'SJMPC launches new member assistance program', date: 'May 24, 2026', href: '/news' },
    { category: 'Update', title: 'Branch schedule adjustments this month', date: 'Apr 30, 2026', href: '/news' },
  ],
};

export default function NewsAndBranchSection() {
  return (
    <section className="py-14 bg-white">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm bg-white">
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[color:rgba(0,107,63,0.08)] border border-[color:rgba(0,107,63,0.20)] flex items-center justify-center flex-shrink-0">
                  <Newspaper className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--sjmpc-green)]" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--sjmpc-dark-green)]">{latest.title}</h2>
                  <p className="text-xs sm:text-sm text-gray-600">News, advisories, and announcements</p>
                </div>
              </div>

              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-[var(--sjmpc-green)] font-semibold hover:text-[var(--sjmpc-dark-green)] focus:outline-none focus:ring-2 focus:ring-[var(--sjmpc-gold)] rounded text-sm"
              >
                View All News
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="border-t border-gray-100">
              <div className="p-6 space-y-4">
                {latest.items.map((n) => (
                  <Link
                    key={n.title}
                    href={n.href}
                    className="block p-4 rounded-xl hover:bg-[color:rgba(0,107,63,0.06)] transition-colors border border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--sjmpc-gold)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-[var(--sjmpc-green)]">
                        {n.category}
                      </span>
                      <span className="text-xs text-gray-500">{n.date}</span>
                    </div>
                    <div className="mt-2 font-extrabold text-[var(--sjmpc-dark-green)]">{n.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm bg-white">
            <div className="relative h-64 sm:h-72 bg-gray-50">
              {/* Map (replaces the static image) */}
              <iframe
                title="Branch Locator Map"
                src="https://www.google.com/maps?q=Antique%20Province&output=embed"
                className="absolute inset-0 w-full h-full border-0 max-w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-extrabold text-[var(--sjmpc-dark-green)]">Branch Locator</h2>
              <p className="mt-2 text-gray-700">
                Discover SJMPC branches near you across Antique Province.
              </p>
              <div className="mt-5">
                <Link
                  href="/branches"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--sjmpc-green)] text-white font-bold hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--sjmpc-gold)]"
                >
                  View All Branches
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

