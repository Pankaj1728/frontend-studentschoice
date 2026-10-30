'use client';

import { motion } from 'framer-motion';
import { useLeadForm } from '@/components/lead/LeadModal';

const cards = [
  {
    title: 'Students',
    description: "We'll guide you to your dream course, from university selection to visa and beyond.",
    features: [
      'Course & University Selection',
      'Scholarships & Education Loan',
      'Visa & Documentation Support',
      'Pre-Departure Assistance',
    ],
    buttonText: 'Book Free Consultation',
    image: '/assets/images/Students.svg',
  },
  {
    title: 'Consultants & Agents',
    description: 'Partner with us and get access to 1000+ universities and high-quality student leads.',
    features: [
      'High-Quality Leads',
      'Attractive Commission',
      'Fast Application Process',
      'Dedicated Partner Support',
    ],
    buttonText: 'Become a Partner',
    image: '/assets/images/Consultants%20%26%20Agents.svg',
  },
  {
    title: 'Institutions & Universities',
    description: 'Expand your global reach and recruit the right students by partnering with us.',
    features: [
      'Access to Qualified Students',
      'Global Visibility & Promotion',
      'End-to-End Application Support',
      'Long-Term Partnership Growth',
    ],
    buttonText: 'Partner With Us',
    image: '/assets/images/Institutions%20%26%20Universities.svg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function JourneySection() {
  const { open } = useLeadForm();
  return (
    <section className="w-full bg-white py-10 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-[#6E00E0] text-base md:text-lg font-semibold mb-2">Who We Serve</p>
          <h2 className="text-3xl md:text-[40px] font-bold text-[#2a0a5e] mb-3 leading-tight">
            Start Your Journey With Students Choice
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Whether you&apos;re a student, consultant or institution, we have the right support for you.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="group bg-white rounded-3xl overflow-hidden border border-[#e9e4f2] shadow-[0_6px_24px_rgba(42,10,94,0.06)] hover:shadow-[0_12px_32px_rgba(110,0,224,0.12)] transition-shadow duration-300 flex flex-col"
            >
              <div className="h-44 lg:h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#2a0a5e] mb-2">{card.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-4">{card.description}</p>

                <ul className="space-y-2.5 mb-6 flex-grow">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-800 text-[15px]">
                      <svg className="w-4 h-4 flex-shrink-0 text-[#16a34a]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="4 10.5 8.5 15 16 5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => open(`${card.title} — ${card.buttonText}`)}
                  className="self-start inline-flex items-center bg-gradient-to-r from-[#6E00E0] to-[#8b3dff] text-white font-bold text-[15px] px-7 py-3.5 rounded-full shadow-[0_8px_20px_rgba(110,0,224,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(110,0,224,0.35)] transition-all duration-300"
                >
                  {card.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
