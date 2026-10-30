import Link from 'next/link';
import type { Faq, FaqSegment } from '@/data/faqs';

function Answer({ segments }: { segments: FaqSegment[] }) {
  return (
    <p className="px-[18px] pb-4 text-[15px] leading-relaxed text-[#5b5478]">
      {segments.map((s, i) => {
        if (typeof s === 'string') return s;
        if ('href' in s) {
          return (
            <Link key={i} href={s.href} className="text-[#6e00e0] font-medium underline underline-offset-2 hover:text-[#5206c2]">
              {s.text}
            </Link>
          );
        }
        return (
          <mark key={i} className="rounded bg-[#fff3c4] px-1 text-[#7a4b00] font-semibold">
            [{s.placeholder}]
          </mark>
        );
      })}
    </p>
  );
}

// Native <details>/<summary>: keyboard accessible, and every answer is in the server-rendered HTML.
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-[14px] border-[1.5px] border-[#ebe4fb] bg-white"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[14px] px-[18px] py-[14px] text-[16px] md:text-[17px] font-semibold text-[#1b1235] hover:bg-[#faf7ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e00e0] [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span aria-hidden="true" className="shrink-0 text-[22px] leading-none font-medium text-[#6e00e0]">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">–</span>
            </span>
          </summary>
          <Answer segments={faq.answer} />
        </details>
      ))}
    </div>
  );
}
