'use client';

import { Button } from '@mantine/core';
import { motion } from 'framer-motion';

export function CtaBanner() {
  return (
    <section className="w-full bg-white pb-16 px-4 sm:px-6 lg:px-8 mt-12 mb-0">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-2xl bg-gradient-to-r from-[#3273F6] to-[#0D40BA] flex flex-col md:flex-row items-stretch min-h-[320px] mt-24 shadow-2xl shadow-blue-200"
          style={{ overflow: 'visible' }}
        >
          
          {/* Background circles (clipped to banner) */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            {/* Concentric rings */}
            <div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full border-[1.5px] border-white/20"></div>
            <div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border-[1.5px] border-white/20 bg-white/[0.03]"></div>
            <div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full border-[1.5px] border-white/25 bg-white/[0.04]"></div>
            <div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full border-[1.5px] border-white/30 bg-white/[0.05]"></div>
            <div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full border-[1.5px] border-white/35 bg-white/[0.06]"></div>
          </div>

          {/* Left Column: Image bursting out top */}
          <div className="relative w-full md:w-[35%] flex justify-center order-2 md:order-1" style={{ overflow: 'visible' }}>
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              src="/assets/images/student-with-backback.webp" 
              alt="Student with backpack and phone" 
              className="absolute bottom-0 z-10 w-auto object-contain object-bottom drop-shadow-[10px_0_30px_rgba(0,0,0,0.15)] pointer-events-none"
              style={{ height: '130%' }}
            />
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-[65%] flex flex-col justify-center py-10 px-8 lg:pr-20 md:pl-0 z-10 order-1 md:order-2">
            <h2 className="text-white text-[28px] md:text-[36px] font-bold leading-[1.25]">
              Don&apos;t worry, your loan can be approved faster than you think!
            </h2>
            <p className="text-white/90 mt-4 text-[16px] md:text-[18px]">
              Just share your documents and get approval in 48 hours. Simple &bull; Fast &bull; Secure.
            </p>
            <div className="mt-8 mb-4 md:mb-0">
              <Button 
                bg="white" 
                c="#1250C9" 
                radius="sm" 
                size="md" 
                className="font-bold px-6 hover:bg-gray-100 transition-colors shadow-sm"
              >
                Start Your Journey
              </Button>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
