'use client';

import { motion } from 'framer-motion';
import { useLeadForm } from '@/components/lead/LeadModal';

const leftBanks = [
  { name: 'Bank of Baroda',       logo: '/assets/images/Bob.svg' },
  { name: 'Yes Bank',             logo: '/assets/images/Yes.svg' },
  { name: 'Punjab National Bank', logo: '/assets/images/Pnb.svg' },
  { name: 'ICICI Bank',           logo: '/assets/images/Icici.svg' },
  { name: 'Union Bank of India',  logo: '/assets/images/Union.svg' },
  { name: 'IDFC First Bank',      logo: '/assets/images/Idfc.svg' },
];

const rightBanks = [
  { name: 'Credila',            logo: '/assets/images/Credila.svg' },
  { name: 'Avanse',             logo: '/assets/images/Avanse.svg' },
  { name: 'Axis Bank',          logo: '/assets/images/Axis.svg' },
  { name: 'Tata Capital',       logo: '/assets/images/Tata.svg' },
  { name: 'Poonawalla Fincorp', logo: '/assets/images/Poonawalla.svg' },
  { name: 'Auxilo',             logo: '/assets/images/Auxilo.svg' },
];

function BankCard({ bank }: { bank: { name: string; logo: string } }) {
  return (
    <div className="bg-white rounded-2xl px-6 py-3 h-24 md:h-[100px] flex items-center justify-center shadow-[0_8px_24px_rgba(91,23,168,0.15)]">
      <img src={bank.logo} alt={bank.name} className="max-h-14 md:max-h-16 max-w-[88%] w-auto object-contain" />
    </div>
  );
}

const IconArrow = () => (
  <svg className="w-5 h-5" viewBox="0 0 28 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="24" y2="12" /><polyline points="17 5 24 12 17 19" />
  </svg>
);

export function LoanOptionsSection() {
  const { open } = useLeadForm();
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto rounded-[40px] p-8 md:p-10 relative overflow-hidden shadow-2xl"
        style={{
          background:
            'radial-gradient(ellipse 85% 95% at 50% 50%, #f4ecfd 0%, #e0c9f8 28%, #b377ef 60%, #8a2be2 100%)',
        }}
      >
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-25 pointer-events-none"
          style={{ backgroundImage: 'url(/assets/images/Map.png)' }}
        />

        <div className="relative grid grid-cols-2 lg:grid-cols-[210px_1fr_210px] gap-6 md:gap-8 items-center">

          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-5 lg:hidden">
              {leftBanks.map((bank) => <BankCard key={bank.name} bank={bank} />)}
            </div>
            <div className="hidden lg:block h-[430px] overflow-hidden">
              <div className="flex flex-col gap-5 animate-logo-scroll-up will-change-transform">
                {[...leftBanks, ...leftBanks].map((bank, idx) => <BankCard key={`l-${idx}`} bank={bank} />)}
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 order-1 lg:order-2 text-center flex flex-col items-center justify-center px-2 py-2">
            <h2 className="text-[28px] md:text-[42px] leading-[1.15] mb-5">
              <span className="font-semibold text-black">One Profile. </span>
              <span className="font-extrabold text-[#5b1ba8]">Multiple Loan</span>
              <br />
              <span className="font-semibold text-black">Offers. </span>
              <span className="font-extrabold text-[#5b1ba8]">Best Decision.</span>
            </h2>
            <p className="text-black/85 text-[15px] md:text-[18px] leading-relaxed max-w-[470px] mb-8">
              At Students Choice, we help you compare, evaluate, and secure the most suitable education loan for your study abroad journey.
            </p>
            <button onClick={() => open('Start your journey')} className="inline-flex items-center gap-3 bg-white text-[#6d28d9] font-extrabold text-[15px] md:text-base px-8 py-3.5 rounded-xl border border-[#d9c3f5] shadow-[0_8px_22px_rgba(91,23,168,0.18)] hover:bg-[#f6efff] hover:-translate-y-0.5 transition-all">
              Start your journey <IconArrow />
            </button>
          </div>

          <div className="order-3">
            <div className="grid grid-cols-1 gap-5 lg:hidden">
              {rightBanks.map((bank) => <BankCard key={bank.name} bank={bank} />)}
            </div>
            <div className="hidden lg:block h-[430px] overflow-hidden">
              <div className="flex flex-col gap-5 animate-logo-scroll-down will-change-transform">
                {[...rightBanks, ...rightBanks].map((bank, idx) => <BankCard key={`r-${idx}`} bank={bank} />)}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
