'use client';

import { motion } from 'framer-motion';
import { useLeadForm } from '@/components/lead/LeadModal';

const cards = [
  {
    title: 'Students',
    description: "We'll guide you to your dream course — from university selection to visa and beyond.",
    features: [
      'Course & University Selection',
      'Scholarships & Education Loan',
      'Visa & Documentation Support',
      'Pre-Departure Assistance',
    ],
    buttonText: 'Sign up',
    href: '/contact-us',
    image: '/assets/images/Students.svg',
    tag: 'For Students',
    icon: '🎓',
    color: 'from-[#6E00E0] to-[#6c1cb8]',
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
    href: '/partner',
    image: '/assets/images/Consultants%20%26%20Agents.svg',
    tag: 'For Consultants / Agents',
    icon: '🤝',
    color: 'from-[#6c1cb8] to-[#4f0fa3]',
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
    buttonText: 'Become a Partner',
    href: '/partner',
    image: '/assets/images/Institutions%20%26%20Universities.svg',
    tag: 'For Institutions',
    icon: '🏛️',
    color: 'from-[#4f0fa3] to-[#3b0d8a]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function JourneySection() {
  const { open } = useLeadForm();
  return (
    <section className="w-full relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(135deg, #faf7ff 0%, #f3ebff 50%, #fdf8ff 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#6E00E0]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#6c1cb8]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#f3ebff] text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Who We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Start Your Journey{' '}
            <span className="text-[#6E00E0]">With Students Choice</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Whether you&apos;re a student, consultant, or institution — we have the right solution and support for your success.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(110,0,224,0.10)] border border-[#ede8f7] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <span>{card.icon}</span>
                    {card.tag}
                  </span>
                </div>

                {/* Number */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                  <span className="text-white font-black text-lg">{idx + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-[#6E00E0] transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-5">
                  {card.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-3 mb-7 flex-grow">
                  {card.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-gray-700 text-[15px]">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                        <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => open(`${card.title} — ${card.buttonText}`)}
                  className={`self-start inline-flex items-center gap-2 bg-gradient-to-r ${card.color} text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                >
                  {card.buttonText}
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Bottom accent line */}
              <div className={`h-1 w-full bg-gradient-to-r ${card.color}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
