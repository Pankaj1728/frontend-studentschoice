'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';
import { useLeadForm } from '@/components/lead/LeadModal';
import { ReferFriendSection } from '@/components/home/ReferFriendSection';

export interface CountryPageProps {
  country: string;
  flag: string;
  tagline: string;
  description: string;
  heroGradient: string;          // Tailwind gradient classes for hero bg
  accentColor: string;           // hex for highlights
  stats: { value: string; label: string }[];
  highlights: { icon: string; title: string; desc: string }[];
  universities: { name: string; rank: string }[];
  requirements: string[];
  avgCost: string;
  workPermit: string;
  processingTime: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

export function CountryPage(p: CountryPageProps) {
  const { open } = useLeadForm();
  return (
    <PageShell>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className={`relative overflow-hidden pt-20 pb-32 ${p.heroGradient}`}>
        {/* BG blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-[90px] mb-6 drop-shadow-2xl leading-none"
            >
              {p.flag}
            </motion.div>

            <p className="text-white/70 uppercase tracking-[0.25em] text-sm font-semibold mb-3">
              Study in
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl mb-5">
              {p.country}
            </h1>
            <p className="text-white/85 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-10">
              {p.tagline}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                onClick={() => open('Book Free Consultation', 'study')}
                className="bg-white text-[#6E00E0] font-bold px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Book Free Consultation
              </button>
              <Link
                href="https://wa.me/919801821680"
                className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all"
              >
                💬 WhatsApp Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" className="w-full fill-white">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {p.stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center py-6 px-4 text-center hover:bg-purple-50/50 transition-colors"
            >
              <span className="text-2xl md:text-3xl font-extrabold text-[#6E00E0]">{s.value}</span>
              <span className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wide">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Overview ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-[#f4eeff] text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Why {p.country}?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Your Dream Education,<br />One Step Away
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">{p.description}</p>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: 'Avg Cost/Year', value: p.avgCost },
                { label: 'Work Permit', value: p.workPermit },
                { label: 'Processing', value: p.processingTime },
              ].map((fact) => (
                <div key={fact.label} className="bg-[#f9f5ff] rounded-xl p-4 text-center border border-[#ede8f7]">
                  <p className="font-extrabold text-[#6E00E0] text-sm">{fact.value}</p>
                  <p className="text-[11px] text-gray-500 mt-1 font-medium">{fact.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {p.highlights.map((h, i) => (
              <motion.div
                key={h.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-[0_8px_30px_rgba(110,0,224,0.10)] hover:-translate-y-1 transition-all group"
              >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{h.icon}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{h.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Universities ───────────────────────────── */}
      <section className="bg-gradient-to-br from-[#faf7ff] to-[#f0e8ff] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#6E00E0]/10 text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Top Universities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              World-Class Institutions in {p.country}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.universities.map((u, i) => (
              <motion.div
                key={u.name}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-[#ede8f7] hover:shadow-[0_12px_40px_rgba(110,0,224,0.12)] hover:-translate-y-1.5 transition-all flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6E00E0] to-[#b36af5] flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  #{i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#6E00E0] transition-colors">{u.name}</h3>
                  <p className="text-xs text-[#6E00E0] font-semibold mt-0.5">{u.rank}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#f4eeff] text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Eligibility
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Requirements to Study in {p.country}
            </h2>
          </div>
          <div className="space-y-3">
            {p.requirements.map((req, i) => (
              <motion.div
                key={req}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 hover:border-[#6E00E0]/30 hover:shadow-md transition-all"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#6E00E0] text-white text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-gray-700 font-medium">{req}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReferFriendSection />

      {/* ── CTA ────────────────────────────────────────── */}
      <section className={`${p.heroGradient} py-20`}>
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Ready to Study in {p.country}?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our experts will guide you through every step — from university selection to visa approval.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact-us?type=consultation"
              className="bg-white text-[#6E00E0] font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
            >
              Get Free Counseling
            </Link>
            <Link
              href="tel:+919801821680"
              className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              📞 Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
