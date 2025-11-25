'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ReactElement } from 'react';

interface BranchInfo {
  name: string;
  address: string;
  phone: string;
  landline: string;
  facebook: string;
}

const branches: BranchInfo[] = [
  {
    name: 'Main Office',
    address: 'Tradetown Funda-Dalipe, San Jose, Antique',
    phone: '0917-308-1505',
    landline: '(036)540-8209',
    facebook: 'sanjosempc@yahoo.com'
  },
  {
    name: 'Miagao Branch',
    address: 'Peñaranda St. Brgy, Baybay Norte, Miagao, Iloilo',
    phone: '0917-3081-505',
    landline: '(033)513-8925',
    facebook: 'facebook.com/SJMPCMiagao'
  },
  {
    name: 'Oton Branch',
    address: 'M.H Del Pilar St. Pob South, Oton, Iloilo',
    phone: '0998-577-2173 / 0939-344-5574',
    landline: '(033)510-8564',
    facebook: 'facebook.com/sanjosecoop.oton'
  },
  {
    name: 'Guimaras Branch',
    address: 'Alejandro Heights, San Miguel Jordan, Guimaras',
    phone: '0968-885-4434 / 0909-156-7857',
    landline: '(033)322-5149',
    facebook: 'facebook.com/sanjosempc.guimaras'
  }
];

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Product and Services', href: '/services' },
    { name: 'News', href: '/news' },
    { name: 'Online Application', href: '/online-application' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Loan Packages', href: '/loan-packages' },
    { name: 'Savings Product', href: '/savings-product' },
    { name: 'Brochures', href: '/brochures' },
    { name: 'Downloadable Forms', href: '/downloadable-forms' },
  ],
  company: [
    { name: 'SJMPC Officers', href: '/sjmpc-officers' },
    { name: 'Head Office Management Staff', href: '/head-office-management-staff' },
    { name: 'Miagao Branch', href: '/miagao-branch' },
    { name: 'Oton Branch', href: '/oton-branch' },
    { name: 'Guimaras Branch', href: '/guimaras-branch' },
  ],
  resources: [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/portfolio/Logo.jpg"
                alt="SJMPC Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">SJMPC</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              San Jose Multi-Purpose Cooperative - Empowering communities through financial services and cooperative excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/sanjosempc" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="mailto:sanjosempc@yahoo.com"
                 className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Branches</h3>
            <div className="space-y-3">
              {branches.map((branch) => (
                <div key={branch.name} className="text-sm">
                  <p className="font-medium text-white mb-1">{branch.name}</p>
                  <p className="text-gray-400 text-xs leading-tight mb-1">{branch.address}</p>
                  <p className="text-gray-400 text-xs">📞 {branch.phone}</p>
                  <p className="text-gray-400 text-xs">📞 {branch.landline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} San Jose Multi-Purpose Cooperative. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
