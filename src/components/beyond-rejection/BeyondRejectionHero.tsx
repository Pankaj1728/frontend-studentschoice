'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { RejectionSupportButton } from '@/components/beyond-rejection/RejectionSupportButton';

const HERO_FEATURES = [
  { icon: '🔍', title: 'Expert Rejection', sub: 'Reason Analysis' },
  { icon: '💪', title: 'Stronger Profile', sub: 'Building' },
  { icon: '🏦', title: '15+ Banks & NBFCs', sub: 'To Choose From' },
  { icon: '📈', title: 'Higher Approval', sub: 'Possibility' },
  { icon: '🎧', title: 'End-to-End', sub: 'Guidance' },
];

const STUDENT_AVATARS = [
  '/assets/images/student-1.jpg',
  '/assets/images/student-2.jpg',
  '/assets/images/student-3.jpg',
  '/assets/images/student-4.jpg',
];

export function BeyondRejectionHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f1ff] via-[#fbf8ff] to-white pt-8 pb-6">
      <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#d9c2ff]/40 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 w-96 h-96 rounded-full bg-[#c4a6ff]/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 bg-white border border-[#e7d9fb] text-[#6f1ed0] text-[13px] font-semibold px-4 py-2 rounded-full shadow-sm mb-4">
              ⚡ Rejection is not the end. It&apos;s a step to get it right.
            </span>
            <h1 className="text-3xl md:text-[44px] font-black leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[#6E00E0] to-[#b14bf0] bg-clip-text text-transparent">Loan Rejected?</span>
              <br />
              <span className="text-[#15112b]">Let&apos;s Build a Stronger Comeback.</span>
            </h1>
            <p className="mt-4 text-gray-600 text-[15px] leading-relaxed max-w-xl">
              A loan rejection can happen for many reasons. We analyze the issues, strengthen your profile, and connect you with the right counselors to help you move forward with confidence.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <RejectionSupportButton />
              <Link href="/tools/loan-eligibility"
                className="inline-flex items-center bg-white border-2 border-[#6E00E0] text-[#6E00E0] font-bold px-7 py-3 rounded-xl hover:bg-[#f7f0ff] transition-colors">
                Check Free Eligibility
              </Link>
            </div>
            <div className="mt-3">
              <Link href="https://wa.me/919801821680"
                className="inline-flex items-center gap-2 bg-[#1f2937] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#111827] transition-colors text-sm">
                <span className="text-[#25d366]">●</span> Chat on WhatsApp
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-3">
                {STUDENT_AVATARS.map((src) => (
                  <img key={src} src={src} alt="Student" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Trusted by 15,000+ Students</p>
                <p className="text-xs text-gray-500">4.9/5 Rating <span className="text-yellow-400">★★★★★</span></p>
              </div>
            </div>
          </motion.div>

          {/* Right banner image — transparent, no card/rectangle */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="relative lg:-mr-8 xl:-mr-16 lg:-translate-x-2 xl:-translate-x-4"
          >
            <img
              src="/assets/images/Rejected.svg"
              alt="What after loan rejected"
              className="block w-full h-auto max-h-[400px] lg:max-h-[440px] object-contain ml-auto select-none pointer-events-none"
            />
          </motion.div>
        </div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
          className="mt-8 rounded-2xl bg-white border border-[#ece5f9] shadow-[0_18px_50px_rgba(110,0,224,0.10)] grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-[#f1ebfb] overflow-hidden"
        >
          {HERO_FEATURES.map((f) => (
            <div key={f.title} className="flex items-center gap-3 px-5 py-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#f3ecff] text-lg flex-shrink-0">{f.icon}</span>
              <div>
                <p className="text-[14px] font-extrabold text-gray-900 leading-tight">{f.title}</p>
                <p className="text-[12px] text-gray-500">{f.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
