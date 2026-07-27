'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Image as ImageIcon, 
  Newspaper, 
  Sparkles, 
  Mail, 
  Users, 
  Activity, 
  Menu, 
  X, 
  LogOut, 
  Search, 
  ChevronRight,
  Bell
} from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/administrator', icon: LayoutDashboard },
  { name: 'Loan Applications', href: '/administrator/loan-applications', icon: FileText },
  { name: 'PMES Sessions', href: '/administrator/pmes', icon: Calendar },
  { name: 'Slider Announcements', href: '/administrator/announcements', icon: ImageIcon },
  { name: 'News Articles', href: '/administrator/news', icon: Newspaper },
  { name: 'Success Stories', href: '/administrator/success-stories', icon: Sparkles },
  { name: 'Contact Inquiries', href: '/administrator/contact', icon: Mail },
  { name: 'User Management', href: '/administrator/users', icon: Users },
  { name: 'Activity Log', href: '/administrator/activity', icon: Activity },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLoginPage = pathname === '/administrator/login';

  // Render minimal layout for login screen
  if (isLoginPage) {
    return <div className="min-h-screen bg-slate-50">{children}</div>;
  }

  const handleLogout = () => {
    signOut({ callbackUrl: '/administrator/login' });
  };

  const checkActive = (itemHref: string) => {
    if (itemHref === '/administrator') {
      return pathname === '/administrator';
    }
    return pathname?.startsWith(itemHref);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* 1. Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-[#004D2D] text-white border-r border-[#003B22] shadow-xl z-20">
        {/* Brand/Logo Header */}
        <div className="h-20 flex items-center px-6 gap-3 border-b border-[#003B22] bg-[#00361F]">
          <Image
            src="/logo.png"
            alt="SJMPC Logo"
            width={38}
            height={38}
            className="rounded-lg shadow-sm"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold uppercase tracking-wider text-[#D4AF37]">SJMPC</span>
            <span className="text-xs font-semibold text-emerald-200">Admin Portal</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = checkActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all group ${
                  isActive 
                    ? 'bg-[#006B3F] text-white shadow-md border-l-4 border-[#D4AF37] pl-3' 
                    : 'text-emerald-100/80 hover:text-white hover:bg-[#005c36] pl-4'
                }`}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${
                  isActive ? 'text-[#D4AF37]' : 'text-emerald-300'
                }`} />
                <span className="truncate">{item.name}</span>
                {isActive && (
                  <ChevronRight className="w-4 h-4 ml-auto text-[#D4AF37]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout Footer Row */}
        <div className="p-4 border-t border-[#003B22] bg-[#003B22]/40">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold text-rose-200 hover:text-white hover:bg-rose-600/20 transition-all cursor-pointer group"
          >
            <LogOut className="w-5 h-5 group-hover:translate-x-0.5 transition-transform text-rose-400 group-hover:text-white" />
            <span>Logout Portal</span>
          </button>
        </div>
      </aside>

      {/* 2. Mobile Sidebar Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-30 lg:hidden"
            />

            {/* Sidebar drawer content */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-64 bg-[#004D2D] text-white flex flex-col z-40 shadow-2xl lg:hidden border-r border-[#003B22]"
            >
              <div className="h-20 flex items-center justify-between px-6 border-b border-[#003B22] bg-[#00361F]">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="SJMPC Logo"
                    width={34}
                    height={34}
                    className="rounded-lg"
                  />
                  <span className="font-bold text-sm text-[#D4AF37]">SJMPC Admin</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-[#006B3F] transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = checkActive(item.href);
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all group ${
                        isActive 
                          ? 'bg-[#006B3F] text-white border-l-4 border-[#D4AF37] pl-3' 
                          : 'text-emerald-100/80 hover:text-white hover:bg-[#005c36] pl-4'
                      }`}
                    >
                      <Icon className={`w-5 h-5 flex-shrink-0 ${
                        isActive ? 'text-[#D4AF37]' : 'text-emerald-300'
                      }`} />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="p-4 border-t border-[#003B22]">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold text-rose-200 hover:text-white hover:bg-rose-600/20 transition-all cursor-pointer"
                >
                  <LogOut className="w-5 h-5 text-rose-400" />
                  <span>Logout</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* 3. Main Workspace Container */}
      <div className="flex-1 flex flex-col lg:pl-64 min-w-0">
        {/* Top Header Bar */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            {/* Hamburger trigger for mobile sidebar */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Title / Info */}
            <div className="hidden sm:block">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Cooperative Dashboard</p>
              <p className="text-base font-extrabold text-gray-800">San Jose Multi-Purpose Cooperative</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Active session details */}
            {session?.user && (
              <div className="hidden md:flex flex-col text-right">
                <span className="text-sm font-bold text-gray-900">{session.user.name || 'Administrator'}</span>
                <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md mt-0.5">
                  {session.user.email || 'Admin User'}
                </span>
              </div>
            )}

            {/* Profile Avatar / Mock */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#006B3F] to-[#D4AF37] flex items-center justify-center text-white font-extrabold shadow-sm">
              {session?.user?.name ? session.user.name.charAt(0).toUpperCase() : 'A'}
            </div>
          </div>
        </header>

        {/* Content Wrapper */}
        <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
