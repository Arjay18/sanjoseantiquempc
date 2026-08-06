'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  MapPin,
  Clock,
  Calendar,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  FileText,
  Star,
  GraduationCap,
  Handshake,
  Landmark,
  ShieldCheck,
  Coins,
  BarChart3,
  MessageCircleQuestion,
} from 'lucide-react';

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
const COLORS = {
  green: '#006B3F',
  darkGreen: '#004D2D',
  gold: '#D4AF37',
  lightGreen: '#EAF5EE',
};

interface PMESSession {
  id: string;
  branch: string;
  date: string;
  time: string;
  capacity: number;
  registered: number;
  status: string;
}

// ─────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────
const scheduleData = [
  {
    office: 'San Jose – Main Office',
    location: 'Tradetown Funda-Dalipe, San Jose, Antique',
    schedule: ['Monday – Friday: 8:00 AM – 4:00 PM', 'Saturday: 9:00 AM'],
    color: COLORS.green,
  },
  {
    office: 'Miagao Branch',
    location: 'Peñaranda St. Brgy. Baybay Norte, Miagao, Iloilo',
    schedule: ['Monday: 1:00 PM', 'Saturday: 9:00 AM'],
    color: COLORS.darkGreen,
  },
  {
    office: 'Oton Branch',
    location: 'M.H. Del Pilar St. Pob. South, Oton, Iloilo',
    schedule: ['Monday, Wednesday & Friday: 1:30 PM', 'Saturday: 9:30 AM'],
    color: COLORS.green,
  },
  {
    office: 'Guimaras Branch',
    location: 'Alejandro Heights, San Miguel Jordan, Guimaras',
    schedule: ['Saturday: 9:00 AM'],
    color: COLORS.darkGreen,
  },
];

const seminarTopics = [
  {
    icon: Handshake,
    title: 'Cooperative Principles & Values',
    description:
      'Understand the seven cooperative principles and core values that guide SJMPC as a community-first organization.',
    duration: '45 min',
  },
  {
    icon: Users,
    title: 'Membership Benefits & Responsibilities',
    description:
      'Learn about the comprehensive benefits and responsibilities that come with being a valued SJMPC member.',
    duration: '30 min',
  },
  {
    icon: Coins,
    title: 'Financial Products & Services',
    description:
      'An in-depth overview of savings packages, loan products, and other financial services available to members.',
    duration: '45 min',
  },
  {
    icon: Landmark,
    title: 'Governance & Participation',
    description:
      'Discover how members actively participate in cooperative governance, elections, and decision-making processes.',
    duration: '30 min',
  },
  {
    icon: BarChart3,
    title: 'Financial Literacy',
    description:
      'Equip yourself with practical financial literacy skills to maximize the benefits of cooperative membership.',
    duration: '30 min',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Open Q&A Forum',
    description:
      'An interactive open forum for questions, clarifications, and direct conversations with cooperative leaders.',
    duration: '30 min',
  },
];

const membershipRequirements = [
  'Completely filled-out Membership Application Form',
  'Two (2) valid government-issued IDs (photocopy)',
  'One (1) 1×1 and one (1) 2×2 recent ID photo',
  'Proof of income (pay slip, certificate of employment, or business permit)',
  'Barangay Clearance or Residency Certificate',
  'Membership fee and initial share capital contribution',
];

const membershipJourney = [
  { step: '01', title: 'Attend PMES', desc: 'Complete the Pre-Membership Education Seminar at your preferred branch.' },
  { step: '02', title: 'Submit Requirements', desc: 'Prepare and submit the required documents at the branch.' },
  { step: '03', title: 'Pay Initial Fees', desc: 'Settle the membership fee and initial share capital.' },
  { step: '04', title: 'Become a Member', desc: 'Receive your membership ID and start enjoying SJMPC benefits.' },
];

const faqs = [
  {
    q: 'Is the PMES free of charge?',
    a: 'Yes! The Pre-Membership Education Seminar is completely free and open to anyone interested in becoming an SJMPC member.',
  },
  {
    q: 'How long does the PMES take?',
    a: 'The seminar typically lasts 3 to 4 hours, covering all essential topics on cooperative membership.',
  },
  {
    q: 'Can I attend PMES at any branch?',
    a: 'Yes. You may attend at whichever branch is most convenient for you, regardless of which branch you plan to register in.',
  },
  {
    q: 'Do I need to register in advance?',
    a: 'Walk-ins are welcome, but we encourage pre-registration to ensure a seat, especially on Saturdays.',
  },
  {
    q: 'What happens after I complete PMES?',
    a: 'After PMES completion, you can immediately proceed to fill out the Membership Application Form and submit your requirements.',
  },
  {
    q: 'Can family members attend together?',
    a: "Absolutely! Family members are encouraged to attend together to better understand the cooperative's services and benefits."
  },
];

const stats = [
  { label: 'Members Enrolled', value: '2,847+', icon: Users },
  { label: 'Seminars Conducted', value: '156+', icon: Award },
  { label: 'Average Rating', value: '4.8 / 5', icon: Star },
  { label: 'Satisfaction Rate', value: '94%', icon: ShieldCheck },
];

// ─────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

// ─────────────────────────────────────────────
// Subcomponents
// ─────────────────────────────────────────────
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 mb-4">
      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
      <span className="text-xs font-bold tracking-[0.2em] text-[#006B3F] uppercase">{text}</span>
    </div>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-px w-12 bg-[#D4AF37]/50" />
      <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
      <div className="h-px w-12 bg-[#D4AF37]/50" />
    </div>
  );
}

// ─────────────────────────────────────────────
// FAQ Accordion Item
// ─────────────────────────────────────────────
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      className="border border-[#E5E7EB] rounded-2xl overflow-hidden bg-white hover:border-[#006B3F]/30 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left px-6 py-5 gap-4 group"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#004D2D] group-hover:text-[#006B3F] transition-colors text-sm sm:text-base">
          {q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EAF5EE] flex items-center justify-center text-[#006B3F]">
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[#4B5563] leading-relaxed text-sm sm:text-base border-t border-[#F3F4F6] pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────
export default function OnlinePMES() {
  const [upcomingSessions, setUpcomingSessions] = useState<PMESSession[]>([]);
  const [loadingSessions, setLoadingSessions] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/administrator/pmes');
        if (res.ok) setUpcomingSessions(await res.json());
      } catch {
        // silently ignore
      } finally {
        setLoadingSessions(false);
      }
    })();
  }, []);

  return (
    <main className="min-h-screen bg-brand-soft overflow-x-hidden">

{/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-dark via-brand-medium to-brand-dark">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hero Section/About us Hero Section.png"
            alt="Pre-Membership Education Seminar"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/90 to-brand-medium/80" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Gold shimmer stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-white"
            >
              {/* Breadcrumb */}
              <motion.nav variants={fadeUp} className="flex items-center gap-2 text-xs text-white/60 mb-8 font-medium">
                <a href="/" className="hover:text-[#D4AF37] transition-colors">Home</a>
                <span>›</span>
                <span className="text-white/90">Online PMES</span>
              </motion.nav>

              {/* Badge */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 rounded-full px-4 py-1.5 mb-6">
                <GraduationCap className="w-4 h-4 text-brand-gold" />
                <span className="text-xs font-bold tracking-[0.18em] text-brand-gold uppercase">Pre-Membership Education Seminar</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              >
                Your Journey to{' '}
                <span className="text-[#D4AF37] block sm:inline">Cooperative</span>{' '}
                Membership Starts Here
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-white/80 leading-relaxed max-w-lg mb-10"
              >
                Attend our free Pre-Membership Education Seminar and discover how becoming an SJMPC member can transform
                your financial future and strengthen your community.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a
                  href="#schedules"
                  className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-7 py-4 rounded-xl font-bold text-sm hover:brightness-105 transition-all shadow-lg shadow-brand-gold/25 hover:-translate-y-0.5"
                >
                  View Schedules
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#requirements"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-7 py-4 rounded-xl font-bold text-sm hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4" />
                  Requirements
                </a>
              </motion.div>

              {/* Quick stats row */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/10">
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-black text-brand-gold">{s.value}</span>
                    <span className="text-xs text-white/60 font-medium mt-0.5">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#D4AF37]" />
                  Regular PMES Schedules
                </h2>
                <div className="space-y-4">
                  {scheduleData.map((branch, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.35 + i * 0.09 }}
                      className="bg-white/8 hover:bg-white/15 border border-white/10 rounded-2xl p-4 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MapPin className="w-4 h-4 text-brand-gold" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-white text-sm group-hover:text-[#D4AF37] transition-colors">{branch.office}</p>
                          <p className="text-white/55 text-xs mt-0.5 truncate">{branch.location}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {branch.schedule.map((s, j) => (
                              <span key={j} className="inline-flex items-center gap-1 text-xs bg-white/10 text-white/80 rounded-full px-2.5 py-0.5">
                                <Clock className="w-3 h-3 text-[#D4AF37]" />
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 text-center">
                  <p className="text-white/60 text-xs">All sessions are free of charge and open to the public.</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-[#D4AF37] text-[#004D2D] font-black text-xs px-4 py-2 rounded-full shadow-lg shadow-[#D4AF37]/30"
              >
                FREE SEMINAR
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L1440 80L1440 30C1200 80 720 0 0 60L0 80Z" fill="#F8F9FA" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHY ATTEND PMES
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <SectionLabel text="Why Attend PMES" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-[#004D2D] mb-4">
            Everything You Need to Know Before Joining
          </motion.h2>
          <GoldDivider />
          <motion.p variants={fadeUp} className="text-[#6B7280] text-lg max-w-2xl mx-auto mt-4">
            PMES is your essential first step to cooperative membership — empowering you with knowledge and confidence.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              icon: BookOpen,
              title: 'Learn the Fundamentals',
              desc: 'Gain a deep understanding of cooperative principles, ethics, and how SJMPC operates for its members.',
            },
            {
              icon: Users,
              title: 'Connect with the Community',
              desc: 'Meet fellow aspiring members and cooperative leaders in an open, welcoming environment.',
            },
            {
              icon: CheckCircle,
              title: 'Start Your Journey',
              desc: 'Complete PMES and proceed immediately to your membership application with full confidence.',
            },
            {
              icon: Coins,
              title: 'Discover Financial Benefits',
              desc: 'Explore savings programs, affordable loans, and financial tools designed for every Antiqueño.',
            },
            {
              icon: ShieldCheck,
              title: 'Understand Your Rights',
              desc: 'Know your rights as a member and how governance protects your interests and investments.',
            },
            {
              icon: Award,
              title: "It's Completely Free",
              desc: 'Attending PMES costs nothing. No fees, no obligations — just knowledge that opens doors.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              className="group bg-white rounded-2xl border border-[#E5E7EB] p-7 hover:border-[#006B3F]/30 hover:shadow-xl hover:shadow-[#006B3F]/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EAF5EE] flex items-center justify-center mb-5 group-hover:bg-[#006B3F] transition-colors duration-300">
                <item.icon className="w-6 h-6 text-[#006B3F] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-[#004D2D] text-lg mb-2 group-hover:text-[#006B3F] transition-colors">{item.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          BRANCH SCHEDULES
      ═══════════════════════════════════════════════ */}
      <section id="schedules" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp} className="flex justify-center">
              <SectionLabel text="Branch Schedules" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-[#004D2D] mb-4">
              Find Your Nearest SJMPC Branch
            </motion.h2>
            <GoldDivider />
            <motion.p variants={fadeUp} className="text-[#6B7280] text-lg max-w-2xl mx-auto mt-4">
              All PMES sessions are free of charge. Simply walk in during scheduled hours or contact your preferred branch to confirm.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {scheduleData.map((branch, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="group relative bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#006B3F]/30 hover:shadow-xl hover:shadow-[#006B3F]/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#006B3F] to-[#D4AF37]" />
                <div className="p-7">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF5EE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#006B3F] transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-[#006B3F] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#004D2D] text-lg leading-tight group-hover:text-[#006B3F] transition-colors">
                        {branch.office}
                      </h3>
                      <p className="text-[#6B7280] text-sm mt-1">{branch.location}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#006B3F] font-semibold text-sm mb-2">
                      <Clock className="w-4 h-4" />
                      <span>PMES Schedule</span>
                    </div>
                    {branch.schedule.map((s, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-3 bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl px-4 py-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0" />
                        <span className="text-[#374151] text-sm font-medium">{s}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#F3F4F6] flex items-center justify-between">
                    <span className="text-xs text-[#9CA3AF]">Walk-ins welcome · Free admission</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#006B3F] bg-[#EAF5EE] px-3 py-1 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      Open to public
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MEMBERSHIP JOURNEY
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-[#004D2D] via-[#006B3F] to-[#005533] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">Your Path to Membership</span>
              </div>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Your Membership Journey
            </motion.h2>
            <GoldDivider />
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
              From attending PMES to becoming a full-fledged member — here's what to expect.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {membershipJourney.map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-all duration-300 group"
              >
                {/* Step connector line */}
                {i < membershipJourney.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[#D4AF37]/40 z-10" />
                )}
                <div className="text-5xl font-black text-[#D4AF37]/20 mb-4 leading-none">{step.step}</div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#D4AF37] transition-colors">{step.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHAT YOU WILL LEARN
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp} className="flex justify-center">
              <SectionLabel text="Seminar Curriculum" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-[#004D2D] mb-4">
              What You Will Learn
            </motion.h2>
            <GoldDivider />
            <motion.p variants={fadeUp} className="text-[#6B7280] text-lg max-w-2xl mx-auto mt-4">
              Our structured seminar covers everything you need to know to make an informed decision about cooperative membership.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {seminarTopics.map((topic, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="group bg-white border border-[#E5E7EB] rounded-2xl p-7 hover:border-[#006B3F]/30 hover:shadow-xl hover:shadow-[#006B3F]/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF5EE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#006B3F] transition-colors duration-300">
                    <topic.icon className="w-6 h-6 text-[#006B3F] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#004D2D] text-base leading-tight group-hover:text-[#006B3F] transition-colors">
                      {topic.title}
                    </h3>
                    <span className="inline-block mt-1.5 text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-2.5 py-0.5">
                      {topic.duration}
                    </span>
                  </div>
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed">{topic.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MEMBERSHIP REQUIREMENTS
      ═══════════════════════════════════════════════ */}
      <section id="requirements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <SectionLabel text="Membership Requirements" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-[#004D2D] mb-4">
                What to Bring After PMES
              </motion.h2>
              <GoldDivider />
              <motion.p variants={fadeUp} className="text-[#6B7280] text-base leading-relaxed mt-4 mb-8">
                Once you have attended the seminar, you may proceed to submit the following requirements to complete your
                membership registration at any SJMPC branch.
              </motion.p>

              <motion.div variants={staggerContainer} className="space-y-3">
                {membershipRequirements.map((req, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl px-4 py-3.5 hover:border-[#006B3F]/20 hover:bg-[#EAF5EE]/50 transition-colors duration-200"
                  >
                    <CheckCircle className="w-5 h-5 text-[#006B3F] flex-shrink-0 mt-0.5" />
                    <span className="text-[#374151] text-sm font-medium">{req}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Contact card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="space-y-6"
            >
              {/* Contact card */}
              <div className="bg-gradient-to-br from-[#004D2D] to-[#006B3F] rounded-3xl p-8 text-white shadow-2xl shadow-[#006B3F]/25 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#D4AF37]/15 blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <h3 className="font-bold text-lg">Need Help? Contact Us</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Our staff are happy to answer your questions about PMES schedules, requirements, and the membership process.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:+639173081505"
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors group"
                    >
                      <Phone className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-sm font-medium">+63 917-308-1505</span>
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                      href="mailto:sanjosempc@yahoo.com"
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors group"
                    >
                      <Mail className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-sm font-medium">sanjosempc@yahoo.com</span>
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Note card */}
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#004D2D] text-sm mb-1">Important Reminder</h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      Requirements may vary. We encourage you to contact your preferred branch before visiting to confirm
                      the complete list of documents needed.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          UPCOMING SESSIONS
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp} className="flex justify-center">
              <SectionLabel text="Upcoming Sessions" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-[#004D2D] mb-4">
              Reserve Your Seat
            </motion.h2>
            <GoldDivider />
            <motion.p variants={fadeUp} className="text-[#6B7280] text-lg max-w-2xl mx-auto mt-4">
              Limited slots per session. Reserve early to secure your spot in our upcoming PMES.
            </motion.p>
          </motion.div>

          {loadingSessions ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <div className="w-10 h-10 rounded-full border-4 border-[#006B3F]/20 border-t-[#006B3F] animate-spin" />
              <p className="text-[#6B7280] text-sm">Loading upcoming sessions…</p>
            </div>
          ) : upcomingSessions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-16 bg-white border border-[#E5E7EB] rounded-2xl"
            >
              <Calendar className="w-14 h-14 text-[#D4AF37] mx-auto mb-4 opacity-60" />
              <h3 className="font-bold text-[#004D2D] text-xl mb-2">No Upcoming Sessions Listed</h3>
              <p className="text-[#6B7280] text-sm max-w-sm mx-auto">
                Please check back soon or contact your nearest branch for the latest schedule.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6"
            >
              {upcomingSessions.map((session, i) => {
                const pct = Math.round((session.registered / session.capacity) * 100);
                const isFull = session.registered >= session.capacity;
                return (
                  <motion.div
                    key={session.id}
                    custom={i}
                    variants={fadeUp}
                    className="bg-white border border-[#E5E7EB] rounded-2xl p-7 hover:border-[#006B3F]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-[#006B3F]" />
                        </div>
                        <div>
                          <p className="font-bold text-[#004D2D]">{session.branch}</p>
                          <p className="text-[#6B7280] text-xs mt-0.5">
                            {new Date(session.date).toLocaleDateString('en-PH', {
                              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                            })} · {session.time}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          isFull ? 'bg-red-100 text-red-700' : 'bg-[#EAF5EE] text-[#006B3F]'
                        }`}
                      >
                        {isFull ? 'Full' : 'Available'}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-5">
                      <div className="flex items-center justify-between text-xs text-[#6B7280] mb-1.5">
                        <span>Slots Filled</span>
                        <span className="font-semibold">{session.registered} / {session.capacity}</span>
                      </div>
                      <div className="h-2 rounded-full bg-[#F3F4F6] overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isFull ? 'bg-red-400' : 'bg-gradient-to-r from-[#006B3F] to-[#D4AF37]'
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                        isFull
                          ? 'bg-[#F3F4F6] text-[#9CA3AF] cursor-not-allowed'
                          : 'bg-[#006B3F] text-white hover:bg-[#004D2D] hover:shadow-lg hover:shadow-[#006B3F]/20 hover:-translate-y-0.5'
                      }`}
                    >
                      {isFull ? 'Fully Booked' : 'Reserve a Seat'}
                      {!isFull && <ArrowRight className="w-4 h-4" />}
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp} className="flex justify-center">
              <SectionLabel text="Frequently Asked Questions" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-[#004D2D] mb-4">
              Got Questions? We Have Answers.
            </motion.h2>
            <GoldDivider />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="relative bg-gradient-to-br from-[#004D2D] via-[#006B3F] to-[#005533] rounded-3xl overflow-hidden shadow-2xl shadow-[#006B3F]/25"
          >
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }} />
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70" />

            <div className="relative z-10 px-8 py-14 md:px-14 text-center">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span className="text-xs font-bold tracking-[0.18em] text-[#D4AF37] uppercase">Join the Cooperative</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Ready to Start Your SJMPC Journey?
              </h2>
              <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Attend a free PMES at your nearest branch and take the first step toward a stronger financial future with
                San Jose Antique Multi-Purpose Cooperative.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#schedules"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#004D2D] px-8 py-4 rounded-xl font-bold hover:brightness-105 transition-all shadow-lg shadow-[#D4AF37]/30 hover:-translate-y-0.5"
                >
                  View Schedules
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  Contact a Branch
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
