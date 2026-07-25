'use client';

import { motion } from 'framer-motion';
import { useLeadForm } from '@/components/lead/LeadModal';

const steps = [
  {
    number: "1",
    title: "Connect with Our Experts",
    description: "Speak with our experienced advisors to get personalized guidance and clarity on the best loan solutions for your profile."
  },
  {
    number: "2",
    title: "Documentation & Application",
    description: "Prepare and submit all required documents with our support to ensure a smooth and error-free application process."
  },
  {
    number: "3",
    title: "Compare and choose Best Loan Offer",
    description: "We help you compare multiple lenders and secure the most suitable loan with competitive interest rates and flexible terms."
  },
  {
    number: "4",
    title: "Approval & Disbursement",
    description: "Receive your loan sanction and ensure timely disbursement of funds directly to your university."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: idx * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }
  })
};

export function LoanSupportSection() {
  const { open } = useLeadForm();
  return (
    <section className="w-full bg-white pt-6 pb-14 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[28px] md:text-[34px] font-bold text-[#6E00E0] mb-10"
        >
          End-to-End Overseas Education Loan Support
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-[52%] flex flex-col gap-6 lg:gap-0 lg:pr-3 relative"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.55 }}
                className="flex items-start gap-6 group relative lg:sticky"
                style={{ top: `calc(6.25rem + ${idx * 1.75}rem)`, zIndex: idx + 1 }}
              >
                <div className="w-8 shrink-0 pt-1.5 relative z-10">
                  <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-[#ded0ff] text-[22px] md:text-[26px] font-bold text-[#6E00E0] leading-none shadow-[0_6px_16px_rgba(110,0,224,0.18)]">
                    {step.number}
                  </span>
                </div>

                <div className="flex-1 bg-[#F5F5F5] rounded-[24px] p-5 md:p-6 shadow-[0_8px_20px_rgba(110,0,224,0.08)] border border-[#ebe1ff] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#6E00E0] via-[#a855f7] to-[#6E00E0]"></div>
                  <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-[#6E00E0]/8 blur-2xl pointer-events-none"></div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#6E00E0] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] md:text-[15px] text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => open('Free Expert Consultation')}
                      className="inline-flex items-center gap-2 rounded-full bg-[#6E00E0] px-5 py-2.5 text-[13px] md:text-sm font-semibold text-white shadow-[0_8px_18px_rgba(110,0,224,0.35)] transition-all duration-300 hover:bg-[#6f1ed0] hover:-translate-y-0.5"
                    >
                      Free Expert Consultation
                      <span aria-hidden="true" className="text-base leading-none">↗</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[48%] relative flex justify-center items-end min-h-[440px]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[560px] aspect-square rounded-full filter blur-[130px] opacity-20 -z-10"
              style={{ background: 'radial-gradient(circle, #9b30f0 0%, #6E00E0 55%, transparent 80%)' }}></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] aspect-square -z-10 animate-pulse"
              style={{ background: 'linear-gradient(140deg, #b36af5 0%, #6E00E0 55%, #4f0fa3 100%)', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%' }}></div>

            <div className="absolute top-[12%] right-[14%] w-24 h-24 rounded-full border-[6px] border-[#b36af5]/30 -z-10"></div>

            <div className="absolute bottom-[16%] left-[10%] w-16 h-16 rounded-full -z-10 opacity-70 blur-[2px]"
              style={{ background: 'linear-gradient(135deg, #9b30f0, #6E00E0)' }}></div>

            <div className="relative z-10 w-full max-w-[380px] lg:-translate-x-2">
              <img
                src="/assets/images/End-to-End%20Overseas%20Education%20Loan%20Support.svg"
                alt="End-to-End Overseas Education Loan Support"
                className="w-full h-auto drop-shadow-2xl object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
