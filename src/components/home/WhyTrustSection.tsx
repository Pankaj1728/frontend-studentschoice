'use client';

import { motion } from 'framer-motion';

const TRUST_POINTS = [
  {
    title: 'Honest First Advice',
    desc: 'Your first counselling call is free, and we tell you what really fits your profile.',
  },
  {
    title: '15+ Lenders in One Place',
    desc: 'One profile, multiple offers, so you compare rates and terms before you decide.',
  },
  {
    title: 'Help After a Rejection',
    desc: 'Rejected before? We find the reason and help you reapply with a stronger file.',
  },
  {
    title: 'With You Until Disbursement',
    desc: 'From shortlist to loan disbursement and pre-departure, one team stays with you.',
  },
];

export function WhyTrustSection() {
  return (
    <section className="w-full bg-white py-10 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

        {/* Left Column: Image Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[42%] flex justify-center items-center"
        >
          <div className="relative w-full max-w-[460px] animate-float">
            <img
              src="/assets/images/student-trust.webp"
              alt="Global Landmarks"
              className="w-full h-auto drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-blue-400 opacity-10 blur-[80px] -z-10 rounded-full"></div>
          </div>
        </motion.div>

        {/* Right Column: Content Area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[58%] flex flex-col items-start text-left"
        >
          <h2 className="text-[28px] md:text-[38px] font-bold text-[#520dd8] tracking-tight leading-tight mb-6">
            Why Students Trust Students Choice
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4 w-full">
            {TRUST_POINTS.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="flex flex-col rounded-[20px] border border-[#e6dcfb] bg-white px-6 py-5 transition-[border-color,box-shadow] duration-300 hover:border-[#c9b2f7] hover:shadow-[0_14px_34px_rgba(110,0,224,0.12)]"
              >
                <h3 className="text-[#1a0040] font-semibold text-[17px] md:text-[18px] leading-snug">{point.title}</h3>
                <p className="mt-2 text-gray-600 text-[14px] md:text-[15px] leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
