'use client';

import { Accordion } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconMessageCircleQuestion } from '@tabler/icons-react';

const faqs = [
  {
    question: "What is the first step to study abroad?",
    answer: "The first step is understanding your profile your academic background, budget, and career goals. Based on this, you can shortlist countries and universities. At Students Choice, we help you start with the right direction so you don't waste time or money."
  },
  {
    question: "How do I choose the right university and course?",
    answer: "We assess your academic credentials, career aspirations, and financial plan to curate a personalized list of universities and courses. Our experts provide insights on global rankings, faculty, and post-study opportunities to help you make an informed choice."
  },
  {
    question: "What is the process for securing an education loan?",
    answer: "Our loan experts will evaluate your financial needs and connect you with top banking and NBFC partners. We guide you through the documentation, interest rates, and loan terms to ensure a smooth and hassle-free sanction process."
  },
  {
    question: "Do I need to take IELTS, TOEFL, or other standardized tests?",
    answer: "Most international universities require an English proficiency test such as IELTS, TOEFL, or PTE. Depending on the course and country, you might also need GRE or GMAT. We offer comprehensive counseling on test preparations and waiver possibilities."
  },
  {
    question: "What kind of post-arrival support do you provide?",
    answer: "We offer end-to-end support including accommodation assistance, Forex cards, setting up bank accounts (like UK Bank Account or Block Account in Germany), and navigating the initial settling-in phase in your new country."
  }
];

export function FaqSection() {
  return (
    <section className="w-full bg-white pt-20 pb-10 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-[#6E00E0]/8 blur-3xl"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[900px] mx-auto relative z-10"
      >
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e9ddff] bg-[#f7f2ff] px-4 py-1.5 text-[#6f1ed0] text-xs md:text-sm font-semibold">
            <IconMessageCircleQuestion size={16} />
            Quick Answers
          </span>
        </div>
        <h2 className="text-center text-[34px] md:text-[40px] font-bold text-[#2D0B5A] mb-12">
          Frequently Asked Questions
        </h2>
        
        <Accordion 
          defaultValue={faqs[0].question}
          transitionDuration={280}
          chevronPosition="right"
          classNames={{
            item: 'border border-[#eadfff] rounded-2xl bg-white mb-3 overflow-hidden shadow-[0_8px_22px_rgba(110,0,224,0.08)]',
            control: 'py-5 px-5 hover:bg-[#faf7ff] transition-colors duration-200',
            label: 'text-[17px] md:text-[19px] font-medium text-gray-900',
            content: 'text-[15px] pt-1 pb-6 px-5 text-gray-600 leading-relaxed border-t border-[#f0e8ff] bg-[#fdfbff]',
            chevron: 'text-[#6E00E0] w-5 h-5'
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <Accordion.Item value={faq.question}>
                <Accordion.Control>{faq.question}</Accordion.Control>
                <Accordion.Panel>{faq.answer}</Accordion.Panel>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
