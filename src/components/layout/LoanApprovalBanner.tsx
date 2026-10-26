'use client';

import { motion } from 'framer-motion';
import { useLeadForm } from '@/components/lead/LeadModal';

const IconArrow = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export function LoanApprovalBanner() {
  const { open } = useLeadForm();
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 pt-16 pb-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full rounded-[24px] bg-gradient-to-r from-[#9b30f0] via-[#6E00E0] to-[#6a16c9] flex flex-col md:flex-row items-stretch min-h-[300px]"
          style={{ overflow: 'visible' }}
        >
          <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 w-[620px] h-[620px] rounded-full border border-white/20" />
            <div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full border border-white/20 bg-white/[0.03]" />
            <div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full border border-white/25 bg-white/[0.04]" />
            <div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 w-[190px] h-[190px] rounded-full border border-white/30 bg-white/[0.05]" />
          </div>

          <div className="relative w-full md:w-[35%] flex justify-center order-2 md:order-1" style={{ overflow: 'visible' }}>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              src="/assets/images/student-with-backback.webp"
              alt="Student with backpack and phone"
              className="absolute bottom-0 z-10 w-auto object-contain object-bottom drop-shadow-[10px_0_30px_rgba(0,0,0,0.18)] pointer-events-none"
              style={{ height: '128%' }}
            />
          </div>

          <div className="w-full md:w-[65%] flex flex-col justify-center py-10 px-8 lg:pr-20 md:pl-0 z-10 order-1 md:order-2">
            <h2 className="text-white text-[28px] md:text-[38px] font-extrabold leading-[1.2]">
              Don&apos;t worry, your loan can be approved faster than you think
            </h2>
            <p className="text-white/90 mt-4 text-[16px] md:text-[18px]">
              Just share your documents and get the approval in 48 hours.
            </p>
            <div className="mt-8">
              <button onClick={() => open('Start your journey')} className="inline-flex items-center gap-2 bg-white text-[#7a1fd6] font-bold px-7 py-3.5 rounded-xl shadow-sm hover:bg-[#f4eeff] transition-colors">
                Start your journey <IconArrow />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
