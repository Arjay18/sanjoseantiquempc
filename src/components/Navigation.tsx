'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Desktop dropdown states
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [onlineDropdownOpen, setOnlineDropdownOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [branchesDropdownOpen, setBranchesDropdownOpen] = useState(false);

  // Mobile dropdown states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileNewsOpen, setMobileNewsOpen] = useState(false);
  const [mobileOnlineOpen, setMobileOnlineOpen] = useState(false);
  const [mobileBranchesOpen, setMobileBranchesOpen] = useState(false);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Hide navigation on branch pages
  if (pathname?.startsWith('/branch/')) {
    return null;
  }

  const menuItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      dropdown: [
        { name: 'SJMPC Officers', href: '/sjmpc-officers' },
        { name: 'Head Office Management & Staff', href: '/head-office-management-staff' },
        {
          name: 'Branches',
          href: '/branches',
          dropdown: [
            { name: 'Miagao Branch', href: '/miagao-branch' },
            { name: 'Oton Branch', href: '/oton-branch' },
            { name: 'Guimaras Branch', href: '/guimaras-branch' },
          ]
        },
      ]
    },
    {
      name: 'Product and Services',
      href: '/services',
      dropdown: [
        { name: 'Loan Packages', href: '/loan-packages' },
        { name: 'Savings Product', href: '/savings-product' },
        { name: 'Brochures', href: '/brochures' },
        { name: 'Downloadable Forms', href: '/downloadable-forms' },
      ]
    },
    {
      name: 'News',
      href: '/news',
      dropdown: [
        { name: 'Annual Reports', href: '/annual-reports' },
        { name: 'Awards', href: '/awards' },
      ]
    },
    {
      name: 'Online PMES',
      href: '/online-pmes',
    },

    { name: 'Contact', href: '/contact' },
    {
      name: 'Coop Login',
      href: pathname === '/not-found' ? '/not-found' : '/login',
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="flex justify-between items-center h-16">
          {/* Ensure Coop Login cannot navigate away from 404 */}
          {pathname === '/not-found' && (
            <style>{`a[href="/login"], a[href="/login?from=not-found"], a[href="/login?from=not-found"]{pointer-events:none !important;}`}</style>
          )}
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="SJMPC Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[19px] sm:text-[19px] font-bold text-gray-900 hover:text-green-600 transition-colors whitespace-nowrap">
                  San Jose Multi-Purpose Cooperative
                </span>
                <span className="font-cursive text-[12px] sm:text-[13px] text-green-700 italic mt-0.5">
                  I BELONG
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {menuItems.map((item) => (
              item.name === 'Coop Login' ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-bold text-white bg-green-600 rounded-md shadow hover:bg-green-700 transition-colors flex items-center focus:outline-none"
                  style={{ marginLeft: '8px' }}
                >
                  {item.name}
                </Link>
              ) : item.dropdown ? (
                <div key={item.name} className="relative"
                  onMouseEnter={() => {
                    if (item.name === 'About Us') {
                      setAboutDropdownOpen(true);
                      setDropdownOpen(false);
                      setOnlineDropdownOpen(false);
                      setNewsDropdownOpen(false);
                    } else if (item.name === 'Product and Services') {
                      setDropdownOpen(true);
                      setAboutDropdownOpen(false);
                      setOnlineDropdownOpen(false);
                      setNewsDropdownOpen(false);
                    } else if (item.name === 'Online PMES') {
                      setOnlineDropdownOpen(true);
                      setAboutDropdownOpen(false);
                      setDropdownOpen(false);
                      setNewsDropdownOpen(false);
                    } else if (item.name === 'News') {
                      setNewsDropdownOpen(true);
                      setAboutDropdownOpen(false);
                      setDropdownOpen(false);
                      setOnlineDropdownOpen(false);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.name === 'About Us') {
                      setAboutDropdownOpen(false);
                      setBranchesDropdownOpen(false);
                    } else if (item.name === 'Product and Services') setDropdownOpen(false);
                    else if (item.name === 'News') setNewsDropdownOpen(false);

                  }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                  >
                    {item.name}
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </Link>
                  {((item.name === 'About Us' && aboutDropdownOpen) ||
                    (item.name === 'Product and Services' && dropdownOpen) ||
                    (item.name === 'News' && newsDropdownOpen)) && (

                    <div className="absolute left-0 -mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-50">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          subItem.dropdown ? (
                            <div key={subItem.name} className="relative">
                              <button
                                onMouseEnter={() => setBranchesDropdownOpen(true)}
                                onMouseLeave={() => setBranchesDropdownOpen(false)}
                                className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                              >
                                {subItem.name}
                                <ChevronRightIcon className="ml-1 h-4 w-4" />
                              </button>
                              {branchesDropdownOpen && (
                                <div
                                  className="absolute left-full top-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50"
                                  onMouseEnter={() => setBranchesDropdownOpen(true)}
                                  onMouseLeave={() => setBranchesDropdownOpen(false)}
                                >
                                  <div className="py-2">
                                    {subItem.dropdown.map((branchItem) => (
                                      <Link
                                        key={branchItem.name}
                                        href={branchItem.href}
                                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                                      >
                                        {branchItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors flex items-center ${
                    pathname === item.href
                      ? 'text-green-600 bg-green-50 rounded-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 active:bg-gray-200 cursor-pointer touch-manipulation"
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile menu */}
      <div className={`lg:hidden fixed top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-50 transform transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="py-2">
            {menuItems.map((item) => {
              let isOpen = false;
              let toggleOpen = () => {};
              if (item.name === 'About Us') {
                isOpen = mobileAboutOpen;
                toggleOpen = () => setMobileAboutOpen(!mobileAboutOpen);
              } else if (item.name === 'Product and Services') {
                isOpen = mobileServicesOpen;
                toggleOpen = () => setMobileServicesOpen(!mobileServicesOpen);
              } else if (item.name === 'News') {
                isOpen = mobileNewsOpen;
                toggleOpen = () => setMobileNewsOpen(!mobileNewsOpen);
              } else if (item.name === 'Online PMES') {
                isOpen = mobileOnlineOpen;
                toggleOpen = () => setMobileOnlineOpen(!mobileOnlineOpen);
              }

              if (item.name === 'Coop Login') {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-4 text-base font-bold text-white bg-green-600 rounded-md shadow hover:bg-green-700 transition-colors border-b border-gray-100 last:border-b-0"
                    style={{ marginLeft: '8px' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              }

              return item.dropdown ? (
                <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 px-6 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={toggleOpen}
                      className="px-6 py-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors active:bg-gray-200 touch-manipulation"
                      aria-expanded={isOpen}
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <ChevronDownIcon className={`h-6 w-6 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                  </div>

                  {/* Mobile dropdown */}
                  {isOpen && (
                    <div className="bg-gray-50">
                      {item.dropdown.map((subItem) => (
                        subItem.dropdown ? (
                          <div key={subItem.name}>
                            <button
                              onClick={() => setMobileBranchesOpen(!mobileBranchesOpen)}
                              className="flex items-center justify-between w-full px-8 py-4 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors active:bg-gray-200 touch-manipulation"
                            >
                              {subItem.name}
                              <ChevronDownIcon className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${
                                mobileBranchesOpen ? 'rotate-180' : ''
                              }`} />
                            </button>

                            {/* Branches sub-menu */}
                            {mobileBranchesOpen && (
                              <div className="bg-white border-l-2 border-green-500 ml-8 animate-fadeIn">
                                {subItem.dropdown.map((branchItem) => (
                                  <Link
                                    key={branchItem.name}
                                    href={branchItem.href}
                                    className="block px-6 py-3 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setMobileBranchesOpen(false);
                                    }}
                                  >
                                    {branchItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-8 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-6 py-4 text-base font-medium transition-colors border-b border-gray-100 last:border-b-0 ${
                    pathname === item.href
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-900 hover:bg-gray-50 hover:text-green-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
