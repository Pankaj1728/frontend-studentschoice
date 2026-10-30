import Link from 'next/link';
import { FaqAccordion } from '@/components/faq/FaqAccordion';
import { homeFaqs } from '@/data/faqs';

export function FaqSection() {
  return (
    <section className="w-full bg-white py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-[820px] mx-auto">
        <h2 className="text-center text-[32px] md:text-[40px] font-bold text-[#2D0B5A] mb-8">
          Frequently Asked Questions
        </h2>

        <FaqAccordion faqs={homeFaqs} />

        <div className="text-center mt-6">
          <Link href="/faqs" className="text-[#6e00e0] text-base md:text-lg font-medium underline underline-offset-4 hover:text-[#5206c2]">
            See all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
