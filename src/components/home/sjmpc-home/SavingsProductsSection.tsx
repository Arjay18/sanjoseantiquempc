"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionContainer } from './SectionContainer';

const products = [
  // SAVINGS PRODUCT
  {
    title: 'SAVING DEPOSIT',
    description: 'Flexible savings for everyday financial goals.',
    href: '/savings-product',
    img: '/Services Showcase/Saviings Services.jpg',
  },
  {
    title: 'TIME DEPOSIT',
    description: 'Fixed term savings designed for steadier growth.',
    href: '/savings-product',
    img: '/Services Showcase/Member Services.jpg',
  },
  {
    title: 'ULTIMA SAVINGS',
    description: 'Long-term savings plan for long-range financial stability.',
    href: '/savings-product',
    img: '/images/597403592_1403798674673184_7189129226940101753_n.jpg',
  },
  {
    title: 'ALKANSYA SAVING',
    description: 'A 2-year savings plan to help you grow steadily.',
    href: '/savings-product',
    img: '/images/584711177_10236308089939119_4315614434674993906_n.jpg',
  },

  // SPECIAL SAVINGS PRODUCT
  {
    title: 'RETIREMENT SAVINGS',
    description: 'A retirement plan to prepare for your next chapter.',
    href: '/savings-product',
    img: '/images/433653723_8032419583452138_6238720083292977796_n.jpg',
  },
  {
    title: 'BAPTISM SAVINGS',
    description: 'Savings set aside for baptism celebrations and milestones.',
    href: '/savings-product',
    img: '/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg',
  },
  {
    title: 'DEBUT SAVINGS',
    description: 'Savings designed for debut events and special occasions.',
    href: '/savings-product',
    img: '/images/540980295_10235369655438843_7551540348210928825_n.jpg',
  },
  {
    title: 'ANNIVERSARY SAVINGS',
    description: 'Dedicated savings for anniversaries and important family dates.',
    href: '/savings-product',
    img: '/images/583336515_1358093772463317_512346541910271086_n.jpg',
  },
  {
    title: 'WEDDING SAVINGS',
    description: 'Savings to prepare for wedding celebrations.',
    href: '/savings-product',
    img: '/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg',
  },
  {
    title: 'FIESTA SAVINGS',
    description: 'Savings for fiesta celebrations and community events.',
    href: '/savings-product',
    img: '/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg',
  },
  {
    title: 'TRAVEL AND LEISURE SAVINGS',
    description: 'Save for travel plans and leisure goals.',
    href: '/savings-product',
    img: '/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg',
  },
  {
    title: 'EMERGENCY SAVINGS',
    description: 'Set aside funds for unexpected needs and emergencies.',
    href: '/savings-product',
    img: '/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg',
  },
  {
    title: 'CALAMITY SAVINGS',
    description: 'Savings prepared for natural calamities and recovery.',
    href: '/savings-product',
    img: '/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg',
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


