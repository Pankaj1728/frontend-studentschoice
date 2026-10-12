'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IconSparkles, IconShieldCheck, IconBrandWhatsapp } from '@tabler/icons-react';

const APPROVAL_BADGES = [
  { name: 'Priya Sharma', amount: '₹85 Lakh', bank: 'ICICI Bank', flag: 'https://flagcdn.com/w40/au.png', country: 'Australia' },
  { name: 'Rahul Verma', amount: '₹70 Lakh', bank: 'Axis Bank', flag: 'https://flagcdn.com/w40/us.png', country: 'USA' },
  { name: 'Sneha Iyer', amount: '₹60 Lakh', bank: 'Credila', flag: 'https://flagcdn.com/w40/gb.png', country: 'UK' },
  { name: 'Arjun Singh', amount: '₹55 Lakh', bank: 'HDFC Credila', flag: 'https://flagcdn.com/w40/ca.png', country: 'Canada' },
];

const TRUST_CHIPS = ['100% Free Guidance', 'Collateral-Free Options', 'Fast Approvals', '15+ Lender Partners'];

/* const COUNTRY_FLAGS = [
  { flag: 'https://flagcdn.com/w80/gb.png', label: 'UK' },
  { flag: 'https://flagcdn.com/w80/de.png', label: 'Germany' },
  { flag: 'https://flagcdn.com/w80/us.png', label: 'USA' },
  { flag: 'https://flagcdn.com/w80/au.png', label: 'Australia' },
  { flag: 'https://flagcdn.com/w80/ca.png', label: 'Canada' },
]; */

export function EduLoanHero() {
  const [badgeIndex, setBadgeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % APPROVAL_BADGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const badge = APPROVAL_BADGES[badgeIndex];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#faf7ff] via-white to-[#f3ebff] pt-8 pb-10">
      {/* BG Orbs */}
      <div className="pointer-events-none absolute -top-28 -left-24 w-96 h-96 rounded-full bg-[#6E00E0]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-0 w-80 h-80 rounded-full bg-fuchsia-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#6E00E0]/05 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[500px]">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-[55%] flex flex-col z-10 pt-2"
          >
            {/* Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 self-start bg-white/80 backdrop-blur border border-[#e6d9ff] rounded-full pl-1.5 pr-4 py-1.5 mb-5 shadow-[0_6px_18px_rgba(110,0,224,0.12)]"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#6E00E0] to-[#a855f7] text-white shadow-sm">
                <IconSparkles size={15} />
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E00E0] to-[#a855f7] font-extrabold text-[13px] uppercase tracking-[0.14em]">
                Fund Your Future with Confidence
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl lg:text-[48px] font-extrabold text-[#6E00E0] leading-[1.1] mb-4"
            >
              The Smarter Way to
              <br />
              <span className="text-[#1f1147]">Finance Your</span>
              <br />
              Global Education
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="text-gray-600 text-base md:text-lg font-medium mb-6 max-w-xl leading-relaxed"
            >
              From public banks to private lenders and NBFCs, we help you unlock
              the right education loan with expert guidance, faster action, and
              complete peace of mind.
            </motion.p>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {TRUST_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#f3ebff] border border-[#e6d9ff] text-[#6f1ed0] text-xs font-semibold px-3.5 py-1.5"
                >
                  <IconShieldCheck size={13} />
                  {chip}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                href="/contact-us?type=consultation"
                id="edu-loan-apply-btn"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#6E00E0] to-[#6f1ed0] text-white font-bold px-8 py-3.5 rounded-full shadow-[0_12px_30px_rgba(110,0,224,0.35)] hover:brightness-110 hover:scale-105 transition-all"
              >
                Apply for Education Loan
              </Link>
              <Link
                href="/tools/loan-eligibility"
                id="edu-loan-eligibility-btn"
                className="inline-flex items-center justify-center border-2 border-[#6E00E0] text-[#6E00E0] font-bold px-8 py-3.5 rounded-full hover:bg-[#f3ebff] transition-all"
              >
                Check My Eligibility →
              </Link>
            </motion.div>

            {/* Rotating Approval Badge */}
            <div className="relative self-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, y: 10, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.85 }}
                  transition={{ duration: 0.45 }}
                  className="bg-white border-2 border-[#6E00E0] rounded-full pl-5 pr-4 py-2 flex items-center gap-4 shadow-xl min-w-[280px]"
                >
                  <img src={badge.flag} alt={badge.country} className="w-9 h-6 rounded object-cover border border-gray-100" />
                  <div className="flex flex-col">
                    <span className="text-[#6E00E0] font-extrabold text-[14px]">{badge.name}</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-black text-[17px] text-gray-900">{badge.amount}</span>
                      <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-tight">✓ Approved</span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs text-gray-400 font-medium">{badge.bank}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-[45%] relative flex justify-center items-center min-h-[440px]"
          >
            {/* Floating country flags — commented out, restore to re-enable
            <div className="absolute top-4 right-0 flex flex-col gap-3 z-20">
              {COUNTRY_FLAGS.slice(0, 4).map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
                  className="w-14 h-10 rounded-xl overflow-hidden shadow-lg border-2 border-white"
                >
                  <img src={c.flag} alt={c.label} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
            */}
            {/* Glow orb behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-[#6E00E0]/15 blur-3xl" />
            </div>

            {/* Hero Image */}
            <div className="relative z-10 w-full max-w-[540px]">
              <div className="absolute inset-8 rounded-[50%] bg-gradient-to-br from-[#6E00E0]/20 to-fuchsia-300/20 blur-2xl" />
              <img
                src="/assets/images/Girl.png"
                alt="Student applying for Education Loan"
                className="relative w-full h-auto object-contain drop-shadow-2xl animate-float"
                draggable="false"
              />
            </div>

            {/* Live support floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="hidden md:flex absolute bottom-16 left-0 z-20 rounded-2xl bg-white/95 border border-[#eadfff] px-4 py-3 shadow-[0_10px_24px_rgba(110,0,224,0.15)] items-center gap-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <p className="text-[#6E00E0] text-xs font-bold uppercase tracking-wide">Expert Available</p>
                <p className="text-gray-700 text-sm font-semibold">Free Loan Guidance</p>
              </div>
            </motion.div>

            {/* WhatsApp button — commented out, restore to re-enable
            <motion.a
              href="https://wa.me/919801821680"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="hidden md:flex absolute top-6 left-4 z-20 items-center gap-2 bg-[#1fc65f] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg hover:bg-[#16b454] transition-colors"
            >
              <IconBrandWhatsapp size={18} />
              WhatsApp
            </motion.a>
            */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
