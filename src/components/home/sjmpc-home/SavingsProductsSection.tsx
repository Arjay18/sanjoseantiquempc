"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionContainer } from './SectionContainer';

const products = [
  {
    title: 'Regular Savings',
    description: 'Flexible savings to help you build a strong financial foundation.',
    href: '/savings-product',
    img: '/Services Showcase/Saviings Services.jpg',
  },
  {
    title: 'Educational Savings',
    description: 'Plan ahead for schooling with a goal-driven savings program.',
    href: '/savings-product',
    img: '/Services Showcase/Loan Services.jpg',
  },
  {
    title: 'Time Deposit',
    description: 'Grow your money with higher returns through fixed terms.',
    href: '/savings-product',
    img: '/Services Showcase/Member Services.jpg',
  },
  {
    title: 'Senior Citizens Savings',
    description: 'Member-friendly savings with support for senior cooperators.',
    href: '/savings-product',
    img: '/images/584711177_10236308089939119_4315614434674993906_n.jpg',
  },
];

export default function SavingsProductsSection() {
  return (
    <section className="py-14 bg-white">
      <SectionContainer>
        <div className="text-center">
          <p className="text-[var(--sjmpc-green)] font-semibold tracking-wide uppercase text-sm">Savings Products</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--sjmpc-dark-green)]">Our Savings Products</h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Choose a savings option that supports your goals—today and for the future.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-[var(--sjmpc-dark-green)]">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{p.description}</p>
                <div className="mt-4">
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 text-[var(--sjmpc-green)] font-semibold hover:text-[var(--sjmpc-dark-green)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--sjmpc-gold)] rounded"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          ))}
        </div>
      </SectionContainer>
    </section>
  );
}


