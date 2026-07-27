'use client';

import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown, 
  HelpCircle, 
  ExternalLink,
  MessageSquare,
  Building,
  ArrowRight,
  Info
} from 'lucide-react';

interface Branch {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapQuery: string;
  tel: string;
}

const branches: Branch[] = [
  {
    name: 'San Jose Main Office',
    address: 'Tradetown Funda-Dalipe, San Jose, Antique',
    phone: '(036) 540-8209',
    email: 'sanjosempc@yahoo.com',
    hours: 'Mon-Fri: 8:00 AM - 4:00 PM, Sat: 9:00 AM - 12:00 PM',
    mapQuery: 'San Jose Multi-Purpose Cooperative, San Jose, Antique',
    tel: 'tel:+63365408209'
  },
  {
    name: 'Miagao Branch',
    address: 'Peñaranda St. Brgy, Baybay Norte, Miagao, Iloilo',
    phone: '(033) 513-8925',
    email: 'sanjosempc@yahoo.com',
    hours: 'Mon: 1:00 PM, Sat: 9:00 AM',
    mapQuery: 'San Jose Multi-Purpose Cooperative, Miagao, Iloilo',
    tel: 'tel:+63335138925'
  },
  {
    name: 'Oton Branch',
    address: 'M.H Del Pilar St. Pob South, Oton, Iloilo',
    phone: '(033) 510-8564',
    email: 'sanjosempc@yahoo.com',
    hours: 'Mon, Wed, Fri: 1:30 PM, Sat: 9:30 AM',
    mapQuery: 'San Jose Multi-Purpose Cooperative, Oton, Iloilo',
    tel: 'tel:+63335108564'
  },
  {
    name: 'Guimaras Branch',
    address: 'Alejandro Heights, San Miguel Jordan, Guimaras',
    phone: '(033) 322-5149',
    email: 'sanjosempc@yahoo.com',
    hours: 'Sat: 9:00 AM',
    mapQuery: 'San Jose Multi-Purpose Cooperative, Jordan, Guimaras',
    tel: 'tel:+63333225149'
  }
];

const faqs = [
  {
    question: "How do I become a member of SJMPC?",
    answer: "To become a member, you need to attend our Pre-Membership Education Seminar (PMES) – which you can take online via our website – submit required identification documents, and pay the initial membership fee and deposit at any branch."
  },
  {
    question: "What are the requirements to apply for a loan?",
    answer: "Basic requirements include a fully completed loan application form, proof of steady income (e.g., payslips, tax certificates, or business permits), valid government-issued photo IDs, and being a member in good standing."
  },
  {
    question: "Can I manage my savings account online?",
    answer: "You can apply for savings products and monitor your inquiries online. Full online transaction capability is being rolled out; currently, deposit and withdrawal transactions are completed securely at our physical branches."
  },
  {
    question: "How long is the loan processing period?",
    answer: "Our standard processing time is 3 to 5 business days after you submit all completed documents. This varies slightly depending on the specific loan package, collateral evaluation, and approval levels."
  },
  {
    question: "Who can I contact for support outside business hours?",
    answer: "You can email us at sanjosempc@yahoo.com or submit a message through the contact form on this page. Our team reviews submissions daily and will get back to you promptly on the next business day."
  }
];

export default function ContactPage() {
  const [activeBranchIdx, setActiveBranchIdx] = useState(0);
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  // Sync form branch selection updates back to explorer tabs
  const handleFormBranchChange = (branchName: string) => {
    const idx = branches.findIndex(b => b.name === branchName);
    if (idx !== -1) {
      setActiveBranchIdx(idx);
    }
  };

  const currentBranch = branches[activeBranchIdx];

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden relative font-sans text-gray-900 pb-20">
      {/* Premium background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#006B3F]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute top-[40%] left-[20%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-12 sm:pt-24 sm:pb-16 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006B3F]/10 text-[#006B3F] text-xs sm:text-sm font-extrabold tracking-wide uppercase mb-6"
        >
          <Building className="w-4 h-4" />
          Get In Touch
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tight text-gray-950 mb-6 leading-[1.15]"
        >
          Contact SJMPC
          <span className="block mt-2 bg-gradient-to-r from-[#006B3F] via-[#004D2D] to-[#D4AF37] bg-clip-text text-transparent">
            We're Here to Help You Grow
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Reach out to any of our local offices across Antique, Iloilo, and Guimaras, 
          or drop us a line below. Our dedicated support team is ready to assist you.
        </motion.p>
      </section>

      {/* Main Content Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Branch Explorer Hub */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#004D2D] mb-5 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#006B3F]" />
                Branch Locations
              </h3>

              {/* Branch Selector Tabs */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {branches.map((b, idx) => {
                  const isSelected = activeBranchIdx === idx;
                  return (
                    <button
                      key={b.name}
                      onClick={() => setActiveBranchIdx(idx)}
                      className="relative px-3 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[50px] cursor-pointer outline-none select-none border border-transparent overflow-hidden"
                    >
                      {/* Active indicator background */}
                      {isSelected ? (
                        <motion.div
                          layoutId="activeBranchTab"
                          className="absolute inset-0 bg-gradient-to-r from-[#006B3F] to-[#004D2D]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      ) : null}

                      <span className={`relative z-10 transition-colors duration-200 ${
                        isSelected ? 'text-white' : 'text-gray-600 hover:text-gray-900 bg-gray-50 border border-gray-100 w-full h-full rounded-xl flex items-center justify-center hover:bg-gray-100/80'
                      }`}>
                        {b.name.replace(' Branch', '').replace(' Office', '')}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Branch Detail Info Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBranch.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-bold text-gray-950 border-b border-gray-50 pb-2">
                    {currentBranch.name}
                  </h4>

                  <div className="space-y-3.5 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#006B3F] mt-0.5 flex-shrink-0" />
                      <p className="leading-relaxed">{currentBranch.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#006B3F] flex-shrink-0" />
                      <a href={currentBranch.tel} className="hover:text-[#006B3F] font-semibold transition-colors">
                        {currentBranch.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#006B3F] flex-shrink-0" />
                      <a href={`mailto:${currentBranch.email}`} className="hover:text-[#006B3F] font-semibold transition-colors">
                        {currentBranch.email}
                      </a>
                    </div>

                    <div className="flex items-start gap-3 pt-2 border-t border-gray-50">
                      <Clock className="w-5 h-5 text-[#006B3F] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">Operating Hours</p>
                        <p className="text-xs text-gray-600 mt-0.5">{currentBranch.hours}</p>
                      </div>
                    </div>
                  </div>

                  {/* Branch Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-50">
                    <a
                      href={currentBranch.tel}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm text-center"
                    >
                      <Phone className="w-4 h-4 text-[#006B3F]" />
                      Call Branch
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentBranch.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-gray-850 text-xs font-bold text-white transition-colors shadow-md text-center"
                    >
                      Directions
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden p-2">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden">
                <iframe
                  title={`Map location of ${currentBranch.name}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(currentBranch.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm 
              selectedBranch={currentBranch.name} 
              onBranchChange={handleFormBranchChange} 
            />
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 mt-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-950 flex items-center justify-center gap-2 mb-3">
            <HelpCircle className="w-8 h-8 text-[#006B3F]" />
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Got queries? Save time by scanning these common questions and answers about our cooperative services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaqIdx === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-gray-900 cursor-pointer outline-none select-none"
                >
                  <span className="text-sm sm:text-base hover:text-[#006B3F] transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
