'use client';

import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useLeadForm } from '@/components/lead/LeadModal';

export function WhyTrustSection() {
  const { open } = useLeadForm();
  return (
    <section className="w-full bg-white py-10 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Column: Image Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[600px] animate-float">
            <img
              src="/assets/images/student-trust.png"
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
          className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pl-10"
        >
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#6E00E0] leading-[1.2] mb-8">
            Why 50000+ students trust Student&apos;s Choice?
          </h2>

          <div className="space-y-4 mb-10">
            <p className="text-[18px] md:text-[20px] text-[#6E00E0]/80 leading-relaxed max-w-[550px]">
              Because we provide expert personalized guidance, a curated network of leading educational and financial partners, and a seamless process to make your academic dreams a reality.
            </p>
          </div>

          <Button
            variant="gradient"
            gradient={{ from: '#6E00E0', to: '#be9eff' }}
            size="lg"
            radius="xl"
            onClick={() => open('Explore — Video Reviews')}
            rightSection={<IconArrowRight size={18} />}
            className="px-10 h-14 font-semibold text-base shadow-lg hover:shadow-purple-200 transition-all hover:-translate-y-0.5"
          >
            Explore
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
