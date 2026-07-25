'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLeadForm } from '@/components/lead/LeadModal';

const ArrowRight = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

/* ─── Tab Data ─────────────────────────────────────────────────── */
const tabData = [
  {
    id: 'university',
    label: 'University Selection',
    badge: '⭐  Smart Counseling. Better Choices. Brighter Future.',
    title: 'Get Your Perfect',
    highlight: 'University Shortlist',
    titleEnd: 'in Minutes',
    description:
      'We analyze your academic profile, budget, and career goals to create a personalized shortlist of universities that best match your future — no guesswork, only smart decisions.',
    buttonText: 'Create Your Shortlist',
    buttonIcon: '📋',
    image: '/assets/images/University.svg',
    stats: { count: '1000+ Students', sub: 'Already Shortlisted' },
    features: [
      {
        icon: '🎓',
        title: 'Personalized for You',
        desc: 'Tailored to your profile and aspirations',
      },
      {
        icon: '⏱️',
        title: 'Save Time & Effort',
        desc: 'Get the best matches instantly',
      },
      {
        icon: '🛡️',
        title: 'Better Decisions',
        desc: 'Shortlist universities that fit your goals',
      },
    ],
  },
  {
    id: 'loan',
    label: 'Education Loan',
    badge: '🛡️  Expert Guidance. Better Options. Bright Future.',
    title: 'Secure Your',
    highlight: 'Education Loan',
    titleEnd: 'with Confidence',
    description:
      'Get connected with the right lenders based on your profile. Compare offers, find the best options, and apply with confidence — with expert guidance at every step.',
    buttonText: 'Apply Now',
    buttonIcon: '→',
    image: '/assets/images/Education.svg',
    stats: { count: '15,000+ Students', sub: 'Trusted Our Guidance' },
    features: [
      {
        icon: '🛡️',
        title: 'Trusted Lenders',
        desc: 'Verified and reliable partners',
      },
      {
        icon: '⇄',
        title: 'Compare & Choose',
        desc: 'Multiple offers, one smart choice',
      },
      {
        icon: '📄',
        title: 'Easy Application',
        desc: 'Simple process, maximum support',
      },
      {
        icon: '🎧',
        title: 'Expert Support',
        desc: 'Guidance at every step',
      },
    ],
    whatsapp: true,
  },
  {
    id: 'insurance',
    label: 'Insurance',
    badge: '🛡️  Health Covered. Journey Secured.',
    title: 'Secure Your',
    highlight: 'Health Coverage',
    titleEnd: 'Before You Fly',
    description:
      'Get comprehensive health insurance plans designed for international students. We compare top plans and help you get the best coverage at the lowest cost.',
    buttonText: 'Explore Plans',
    buttonIcon: '→',
    image: '/assets/images/Insurance.svg',
    stats: { count: 'Trusted by 10,000+ Students', sub: 'Your Health, Our Priority' },
    features: [
      {
        icon: '➕',
        title: 'Wide Coverage',
        desc: 'Protection for illness, accidents & more',
      },
      {
        icon: '💼',
        title: 'Affordable Plans',
        desc: 'Compare & save on premium',
      },
      {
        icon: '🌐',
        title: 'Global Support',
        desc: 'Cashless treatment in 100+ countries',
      },
      {
        icon: '🎧',
        title: '24/7 Assistance',
        desc: 'Dedicated support anytime, anywhere',
      },
    ],
  },
];

/* ─── Component ─────────────────────────────────────────────────── */
export function PlatformTabsSection() {
  const { open } = useLeadForm();
  const [activeTab, setActiveTab] = useState('university');
  const active = tabData.find((t) => t.id === activeTab) || tabData[0];
  const isUniversity = active.id === 'university';

  return (
    <section className="w-full bg-white pt-3 pb-8 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <p className="text-[17px] md:text-[20px] font-bold text-[#6E00E0] mb-1">
            Your All-in One Platform for Studying Abroad
          </p>
          <h2 className="text-[30px] md:text-[42px] font-extrabold text-[#1a0040] leading-tight">
            Plan, and Apply with Student&apos;s Choice
          </h2>
        </motion.div>

        {/* ── Tab Pills ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-5"
        >
          <div className="inline-flex bg-[#f5f0ff] rounded-full p-1.5 gap-1 shadow-sm">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-7 py-2.5 rounded-full text-[14px] md:text-[15px] font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#7c3aed] text-white shadow-md'
                    : 'text-[#7c3aed] hover:bg-purple-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Card ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="relative w-full rounded-[32px] overflow-hidden bg-[#f5f0ff] shadow-lg"
            style={{ minHeight: 320 }}
          >
            <div
              className={`flex flex-col ${
                isUniversity ? 'lg:flex-row' : 'lg:flex-row'
              } items-stretch`}
            >

              {/* ── Left: Text Content ── */}
              <div className="flex flex-col justify-center gap-4 p-6 md:p-8 lg:p-10 w-full lg:w-[55%]">
                {/* Badge */}
                <span className="inline-flex items-center gap-2 self-start bg-[#ede9fe] text-[#7c3aed] text-[13px] font-semibold px-4 py-1.5 rounded-full">
                  {active.badge}
                </span>

                {/* Title */}
                <h3 className="text-[28px] md:text-[34px] font-extrabold text-[#1a0040] leading-[1.15] tracking-tight">
                  {active.title}{' '}
                  <span className="text-[#7c3aed]">{active.highlight}</span>
                  {active.titleEnd && (
                    <>
                      <br />
                      {active.titleEnd}
                    </>
                  )}
                </h3>

                {/* Divider */}
                <div className="w-12 h-1 bg-[#7c3aed] rounded-full" />

                {/* Description */}
                <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed">
                  {active.description}
                </p>

                {/* Features (mobile only — desktop shows the middle cards) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2 lg:hidden">
                  {active.features?.map((f, i) => (
                    <div key={i} className="flex flex-col items-start gap-1">
                      <div className="w-10 h-10 rounded-xl bg-[#ede9fe] flex items-center justify-center text-[18px] mb-1">
                        {f.icon}
                      </div>
                      <p className="text-[13px] font-bold text-[#1a0040]">{f.title}</p>
                      <p className="text-[12px] text-gray-500 leading-snug">{f.desc}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    onClick={() => open(active.buttonText)}
                    className="inline-flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-[15px] px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
                  >
                    {active.buttonText}
                    <ArrowRight />
                  </button>
                  {(active as typeof tabData[1]).whatsapp && (
                    <a
                      href="https://wa.me/919801821680?text=Hello%20Students%20Choice!%20I%20want%20to%20know%20more%20about%20education%20loans."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1faa55] text-white font-semibold text-[15px] px-7 py-3.5 rounded-full shadow-sm transition-all hover:scale-105 active:scale-95"
                    >
                      Chat on WhatsApp
                    </a>
                  )}
                </div>
              </div>

              {/* ── Middle: Feature Cards (all tabs) ── */}
              {(
                <div className="hidden lg:flex flex-col justify-center gap-4 py-10 px-4 w-[25%]">
                  {active.features?.map((f, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-4 shadow-sm flex items-start gap-3 relative"
                    >
                      {i < active.features!.length - 1 && (
                        <div className="absolute left-[27px] -bottom-5 h-5 w-[2px] bg-gray-200 z-0" />
                      )}
                      <div className="w-10 h-10 rounded-xl bg-[#ede9fe] flex items-center justify-center text-[18px] shrink-0 z-10">
                        {f.icon}
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#1a0040]">{f.title}</p>
                        <p className="text-[12px] text-gray-500 leading-snug">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ── Right: Image ── */}
              <div
                className={`relative w-full ${
                  isUniversity ? 'lg:w-[45%]' : 'lg:w-[45%]'
                } min-h-[280px] lg:min-h-[360px]`}
              >
                <Image
                  src={active.image}
                  alt={active.label}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />

                {/* Stats Badge */}
                <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#ede9fe] flex items-center justify-center text-[20px]">
                    {active.id === 'insurance' ? '🛡️' : '👥'}
                  </div>
                  <div>
                    <p className="text-[13px] font-extrabold text-[#7c3aed] leading-tight">
                      {active.stats.count}
                    </p>
                    <p className="text-[11px] text-gray-500">{active.stats.sub}</p>
                    <div className="flex gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="text-[#f59e0b] text-[12px]">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
