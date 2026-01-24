'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

// This would typically come from a CMS or API
const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-commerce Website',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    category: 'Web Development',
    imageUrl: '/portfolio/ecommerce.jpg',
  },
  {
    id: '2',
    title: 'Mobile App Design',
    description: 'UI/UX design for a fitness tracking mobile application.',
    category: 'Design',
    imageUrl: '/portfolio/mobile-app.jpg',
  },
  {
    id: '3',
    title: 'Brand Identity',
    description: 'Complete brand identity design for a tech startup.',
    category: 'Branding',
    imageUrl: '/portfolio/branding.jpg',
  },
  {
    id: '4',
    title: 'Blog Platform',
    description: 'Custom blog platform with CMS integration.',
    category: 'Web Development',
    imageUrl: '/portfolio/blog-platform.jpg',
  },
  {
    id: '5',
    title: 'Product Landing Page',
    description: 'High-converting product landing page design.',
    category: 'Design',
    imageUrl: '/portfolio/landing-page.jpg',
  },
  {
    id: '6',
    title: 'Corporate Website',
    description: 'Modern corporate website with custom animations.',
    category: 'Web Development',
    imageUrl: '/portfolio/corporate.jpg',
  },
];

const categories = ['All', 'Web Development', 'Design', 'Branding'];

interface ModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

function Modal({ item, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src={item.imageUrl}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
          {item.category}
        </span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-7xl mx-auto py-8 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Portfolio
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Check out our latest work and projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {item.description}
                </p>
                <span className="mt-4 inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}