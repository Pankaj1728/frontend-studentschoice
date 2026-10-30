'use client';

import { useState, useEffect, useRef } from 'react';
import { IconBrandWhatsapp, IconStarFilled } from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion';
import { useLeadForm } from '@/components/lead/LeadModal';

const HERO_STATS = [
  { key: 'students', end: 50000, format: (n: number) => `${n.toLocaleString('en-IN')}+`, label: 'Students guided' },
  { key: 'sanctioned', end: 5000, format: (n: number) => `₹${n.toLocaleString('en-IN')} Cr+`, label: 'Loans sanctioned' },
  { key: 'partners', end: 15, format: (n: number) => `${n}+`, label: 'Bank & NBFC partners' },
] as const;

function useCountUp(target: number, durationMs: number, enabled: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled, target, durationMs]);
  return value;
}

function HeroStatsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [started, setStarted] = useState(false);
  useEffect(() => { if (inView) setStarted(true); }, [inView]);

  const v0 = useCountUp(HERO_STATS[0].end, 1600, started);
  const v1 = useCountUp(HERO_STATS[1].end, 1800, started);
  const v2 = useCountUp(HERO_STATS[2].end, 1400, started);
  const values = [v0, v1, v2];

  return (
    <div ref={ref} className="relative mt-8">
      <div className="relative flex items-stretch divide-x divide-[#e6d9fb]">
        {HERO_STATS.map((stat, i) => (
          <div key={stat.key} className="px-4 sm:px-6 first:pl-0 sm:first:pl-2 text-center">
            <div className="text-[#5b0fd6] font-extrabold text-xl sm:text-[25px] xl:text-[28px] tabular-nums leading-none tracking-tight">
              {stat.format(values[i])}
            </div>
            <div className="mt-1.5 text-[12px] sm:text-[13px] xl:text-[14px] font-medium text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  const { open } = useLeadForm();

  return (
    <section className="relative w-full bg-white overflow-hidden pt-10 pb-12">
      <div className="pointer-events-none absolute -top-24 -left-20 w-72 h-72 rounded-full bg-[#6E00E0]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-36 right-0 w-80 h-80 rounded-full bg-fuchsia-200/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-12 items-center min-h-[500px]">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col z-10"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <IconStarFilled className="text-amber-500" size={15} />
              <span className="text-[#15112b] font-semibold text-[14px] md:text-[15px]">
                Your Ambition, Our Expertise, Global Success
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[#6a0fe0] text-[32px] sm:text-[40px] lg:text-[42px] xl:text-[48px] font-black leading-[1.1] tracking-tight mb-5">
              Get Guided by
              <br />
              India&apos;s Trusted Study
              <br />
              Abroad Experts
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-7 max-w-lg">
              From choosing the right university to securing your education loan, we support you at every step of your journey.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button onClick={() => open('Book Free Consultation — Hero')} className="inline-flex items-center justify-center font-medium text-[16px] px-8 h-12 rounded-full text-white bg-[#520dd8] hover:bg-[#8c52ff] hover:scale-[1.03] transition-all duration-300 shadow-[0_12px_30px_rgba(82,13,216,0.35)]">
                Book Free Consultation
              </button>
              <a
                href="https://wa.me/919801821680?text=Hello%20Students%20Choice!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center font-bold text-[16px] px-8 h-12 rounded-full text-white bg-[#25D366] hover:bg-[#1faa55] hover:scale-[1.03] transition-all duration-300 shadow-[0_12px_30px_rgba(37,211,102,0.35)]"
              >
                <IconBrandWhatsapp size={22} /> WhatsApp
              </a>
            </div>

            {/* Stats row */}
            <HeroStatsRow />
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative flex justify-center items-center"
          >
            <div className="relative z-10 w-full flex justify-center items-center">
                <img
                src="/assets/images/hero-banner.svg"
                alt="Student Study Abroad Consultancy"
                className="w-full max-w-[820px] lg:scale-[1.28] lg:-mr-10 h-auto object-contain animate-float drop-shadow-2xl"
                draggable="false"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
