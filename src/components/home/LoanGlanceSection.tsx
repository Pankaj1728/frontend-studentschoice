'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const GLANCE_ITEMS = [
  { title: 'Up to ₹75 Lakh', sub: 'Without collateral*' },
  { title: 'Up to ₹1.5 Cr', sub: 'With collateral*' },
  { title: '15+ Lenders', sub: 'Compared for your profile' },
  { title: 'Rejected Before?', sub: 'We help you reapply →', href: '/beyond-rejection' },
];

const cardClass =
  'block h-full rounded-[22px] border border-[#e6dcfb] bg-white px-7 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9b2f7] hover:shadow-[0_14px_34px_rgba(110,0,224,0.12)]';

export function LoanGlanceSection() {
  return (
    <section className="w-full bg-white pt-6 pb-10 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[28px] md:text-[38px] font-bold text-[#520dd8] tracking-tight leading-tight">
            Education Loan at a Glance
          </h2>
          <p className="mt-3 text-gray-600 text-[15px] md:text-[17px]">
            Indicative figures. The lender decides the final amount, interest rate and terms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GLANCE_ITEMS.map((item, i) => {
            const content = (
              <>
                <div className="text-[#6a0fe0] font-semibold text-[24px] md:text-[28px] leading-tight tracking-tight">
                  {item.title}
                </div>
                <div className="mt-1.5 text-gray-600 text-[15px] md:text-[16px]">{item.sub}</div>
              </>
            );
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                {item.href ? (
                  <Link href={item.href} className={cardClass}>{content}</Link>
                ) : (
                  <div className={cardClass}>{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
