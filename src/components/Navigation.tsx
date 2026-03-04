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
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
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
      name: 'Online Application',
      href: '/online-application',
      dropdown: [
        { name: 'Online PMES', href: '/online-pmes' },
      ]
    },
    { name: 'Contact', href: '/contact' },
    {
      name: 'Coop Login',
      href: '/login',
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="SJMPC Logo"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-800 transition-all">
                  SJMPC
                </span>
                <p className="text-[10px] text-gray-400 -mt-1 tracking-wider">COOPERATIVE</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {menuItems.map((item) => (
              item.name === 'Coop Login' ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="ml-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
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
                    } else if (item.name === 'Online Application') {
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
                    else if (item.name === 'Online Application') setOnlineDropdownOpen(false);
                    else if (item.name === 'News') setNewsDropdownOpen(false);
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-all duration-200 hover:bg-blue-50 rounded-lg"
                  >
                    {item.name}
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </Link>
                  {((item.name === 'About Us' && aboutDropdownOpen) ||
                    (item.name === 'Product and Services' && dropdownOpen) ||
                    (item.name === 'Online Application' && onlineDropdownOpen) ||
                    (item.name === 'News' && newsDropdownOpen)) && (
                    <div className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-50 animate-fadeIn">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          subItem.dropdown ? (
                            <div key={subItem.name} className="relative">
                              <button
                                onMouseEnter={() => setBranchesDropdownOpen(true)}
                                onMouseLeave={() => setBranchesDropdownOpen(false)}
                                className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
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
                                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
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
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
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
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 flex items-center hover:bg-blue-50 rounded-lg ${
                    pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600'
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
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <div className="fixed top-16 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-fadeIn" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile menu */}
      <div className={`lg:hidden fixed top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-2xl z-50 transform transition-all duration-300 ease-in-out ${
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
              } else if (item.name === 'Online Application') {
                isOpen = mobileOnlineOpen;
                toggleOpen = () => setMobileOnlineOpen(!mobileOnlineOpen);
              }

              if (item.name === 'Coop Login') {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block mx-4 my-3 px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              }

              return item.dropdown ? (
                <div key={item.name} className="border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 px-6 py-4 text-base font-medium text-gray-900 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={toggleOpen}
                      className="px-6 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
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
                    <div className="bg-gradient-to-b from-gray-50 to-white">
                      {item.dropdown.map((subItem) => (
                        subItem.dropdown ? (
                          <div key={subItem.name}>
                            <button
                              onClick={() => setMobileBranchesOpen(!mobileBranchesOpen)}
                              className="flex items-center justify-between w-full px-8 py-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {subItem.name}
                              <ChevronDownIcon className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${
                                mobileBranchesOpen ? 'rotate-180' : ''
                              }`} />
                            </button>

                            {/* Branches sub-menu */}
                            {mobileBranchesOpen && (
                              <div className="bg-white border-l-4 border-blue-500 ml-8">
                                {subItem.dropdown.map((branchItem) => (
                                  <Link
                                    key={branchItem.name}
                                    href={branchItem.href}
                                    className="block px-6 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
                            className="block px-8 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
                  className={`block px-6 py-4 text-base font-medium transition-colors border-b border-gray-100 ${
                    pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-900 hover:bg-blue-50 hover:text-blue-600'
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
