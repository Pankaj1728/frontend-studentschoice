'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLeadForm } from '@/components/lead/LeadModal';
import { PageShell } from '@/components/layout/PageShell';
import { WhyUSATopChoiceSection } from './WhyUSATopChoiceSection';
import { USAPopularUniversitiesSection } from './USAPopularUniversitiesSection';
import { RequirementsSection } from './RequirementsSection';
import { DestinationsSection } from '@/components/home/DestinationsSection';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { ReferFriendSection } from '@/components/home/ReferFriendSection';
import { JourneySection } from '@/components/home/JourneySection';
import { FaqSection } from '@/components/home/FaqSection';

export interface StudyUSAPageProps {
  country: string;
  tagline: string;
  heroImage: string;
  introParagraphs: string[];
  stats: { value: string; label: string }[];
  quickInsights: { key: string; value: string }[];
  highlights: { icon: string; title: string; desc: string }[];
  universities: { name: string; rank: string }[];
  requirements: string[];
  avgCost: string;
  workPermit: string;
  processingTime: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function StudyUSAPage(p: StudyUSAPageProps) {
  const { open } = useLeadForm();
  return (
    <PageShell>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative pt-10 pb-6 px-3 md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1400px] mx-auto rounded-[28px] overflow-hidden relative min-h-[240px] md:min-h-[300px] flex items-center shadow-2xl transition-all hover:shadow-purple-500/30"
          style={{
            backgroundImage: `url('/assets/images/USA%20Banner.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10 px-5 md:px-8 lg:px-10 w-full">
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-4xl font-black text-white mb-3 drop-shadow-lg leading-tight tracking-tight">
                {p.tagline}
              </h1>
              <p className="text-white/85 text-sm md:text-base font-semibold mb-6 max-w-lg leading-relaxed drop-shadow-md">
                Discover top-ranked universities, explore scholarships, understand tuition costs, and plan your complete {p.country} journey with expert guidance from Students Choice.
              </p>

              <button type="button" onClick={() => open(`Explore ${p.country} University`)}
                className="inline-flex items-center bg-white text-[#6E00E0] font-extrabold px-6 py-2.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-sm md:text-base group"
              >
                Explore {p.country} University
                <span className="ml-2 group-hover:translate-x-1 transition-transform text-lg">→</span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Intro ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-4 md:pt-6 pb-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-medium"
        >
          {p.introParagraphs.map((para, i) => (
            <p key={i}>
              {para}
            </p>
          ))}
        </motion.div>
      </section>

      {/* ── Quick Insights ─────────────────────────────── */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf7ff] via-white to-[#f3eeff]" />
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#6E00E0]/6 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6E00E0] to-[#a855f7] flex items-center justify-center text-lg shadow-md shadow-purple-200">
              ✨
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6E00E0] mb-0.5">At a Glance</p>
              <h2 className="text-2xl font-extrabold text-gray-900">
                Quick Insights About Studying in the{' '}
                <span className="bg-gradient-to-r from-[#6E00E0] to-[#6c47ff] bg-clip-text text-transparent">{p.country}</span>
              </h2>
            </div>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">

            {/* LEFT — Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl overflow-hidden border border-purple-100 shadow-lg shadow-purple-500/5"
            >
              {/* Header */}
              <div className="grid grid-cols-2 bg-gradient-to-r from-[#6E00E0] to-[#6c47ff] px-6 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-white/80">Key Insight</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/80 text-right">Details</p>
              </div>

              {/* Rows */}
              <div className="bg-white divide-y divide-purple-50/60">
                {p.quickInsights.map((item, i) => {
                  const icons = ['🏛️', '🌍', '👥', '📅', '💵', '📝', '💼', '🎓'];
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className={`grid grid-cols-2 items-center px-6 py-4 group hover:bg-[#faf7ff] transition-colors duration-200 ${i % 2 === 0 ? 'bg-white' : 'bg-[#fdfbff]'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg flex-shrink-0">{icons[i % icons.length]}</span>
                        <span className="text-sm font-semibold text-[#6b21a8] group-hover:text-[#6E00E0] transition-colors">{item.key}</span>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-[#f4eeff] text-[#7c3aed] text-sm font-extrabold px-3 py-1 rounded-lg group-hover:bg-[#6E00E0] group-hover:text-white transition-all duration-200">
                          {item.value}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer note */}
              <div className="bg-gradient-to-r from-[#6E00E0]/5 to-[#6c47ff]/5 px-6 py-3 border-t border-purple-100">
                <p className="text-[11px] text-gray-400 font-medium">* Values are indicative and may vary. Verify with institutions directly.</p>
              </div>
            </motion.div>

            {/* RIGHT — Side Panel */}
            <div className="flex flex-col gap-5">

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#6E00E0] to-[#6c47ff] p-6 text-white shadow-xl shadow-purple-500/20"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Ready to move?</p>
                <h3 className="text-xl font-extrabold leading-snug mb-3">Start Your {p.country} Study Journey Today</h3>
                <p className="text-sm text-white/70 mb-5 leading-relaxed">Get personalised guidance from our expert consultants — completely free.</p>
                <button type="button" onClick={() => open('Book Free Consultation')}
                  className="inline-flex items-center gap-2 bg-white text-[#6E00E0] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-yellow-50 hover:scale-105 transition-all shadow-md"
                >
                  Book Free Consultation
                  <span className="text-base">→</span>
                </button>
              </motion.div>

              {/* Why USA trust list */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl bg-white border border-purple-100 shadow-md shadow-purple-500/5 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#6E00E0] mb-4">Why Students Choose {p.country}</p>
                <ul className="space-y-2.5">
                  {[
                    { icon: '🏆', text: 'Home to MIT, Harvard, Stanford' },
                    { icon: '🚀', text: '3-year OPT for STEM graduates' },
                    { icon: '🌐', text: '1M+ international students' },
                    { icon: '💡', text: 'World\'s #1 innovation hub' },
                    { icon: '🤝', text: 'Diverse, multicultural campuses' },
                  ].map((pt, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <span className="w-7 h-7 rounded-lg bg-[#f4eeff] flex items-center justify-center text-base flex-shrink-0">{pt.icon}</span>
                      {pt.text}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Did you know */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-2xl bg-gradient-to-br from-[#fdf4ff] to-[#f0e8ff] border border-purple-100 p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">💡</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6E00E0]">Did You Know?</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  The USA hosts over <strong>1 million international students</strong> annually and Indian students are the <strong>#2 largest group</strong>, with over 200,000 students studying across American universities.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Highlights Grid ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#f4eeff] text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Why {p.country}?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Unparalleled Academic Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {p.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{h.icon}</span>
              <h3 className="font-bold text-gray-900 text-base mb-2">{h.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Why USA Top Choice ──────────────────────────── */}
      <WhyUSATopChoiceSection />

      {/* ── Top Universities ───────────────────────────── */}
      <section className="bg-gradient-to-br from-[#faf7ff] to-[#f0e8ff] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#6E00E0]/10 text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Top Universities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              World-Class Institutions in the {p.country}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.universities.map((u, i) => (
              <motion.div
                key={u.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 border border-[#ede8f7] hover:shadow-xl hover:-translate-y-1.5 transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6E00E0] to-[#b36af5] flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  #{i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#6E00E0] transition-colors">{u.name}</h3>
                  <p className="text-xs text-[#6E00E0] font-semibold mt-1 uppercase tracking-wider">{u.rank}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USA Popular Universities ────────────────────────────── */}
      <USAPopularUniversitiesSection />

      {/* ── Requirements ───────────────────────────────── */}
      <RequirementsSection
        requirements={p.requirements}
        avgCost={p.avgCost}
        workPermit={p.workPermit}
        processingTime={p.processingTime}
      />

      {/* ── Destinations & Global Sections ────────────────────────────── */}
      <DestinationsSection />
      <TestimonialSection />
      <ReferFriendSection />
      <JourneySection />
      <FaqSection />

    </PageShell>
  );
}
