import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { FaqAccordion } from '@/components/faq/FaqAccordion';
import { faqGroups, faqPageJsonLd } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'FAQs: Education Loans & Study Abroad | Students Choice',
  description:
    'Answers to common questions about education loans, loan rejection, study abroad, fees and how Students Choice works with banks and NBFCs.',
  alternates: { canonical: 'https://www.studentschoice.in/faqs' },
};

export default function FaqsPage() {
  const jsonLd = faqPageJsonLd(faqGroups.flatMap((g) => g.faqs));

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <section className="bg-gradient-to-b from-[#f1e9ff] to-white px-6 sm:px-10 lg:px-16 pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="max-w-[74ch] mx-auto text-center">
          <h1 className="text-[34px] md:text-[44px] font-bold leading-tight text-[#1b1235] mb-3">
            Frequently asked questions
          </h1>
          <p className="text-base md:text-lg text-[#5b5478]">
            Straight answers about education loans, study abroad and how we work with banks and NBFCs.
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-16 pb-14">
        <div className="max-w-[74ch] mx-auto flex flex-col gap-9">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-[22px] md:text-[26px] font-bold text-[#1b1235] mb-4">{group.title}</h2>
              <FaqAccordion faqs={group.faqs} />
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
