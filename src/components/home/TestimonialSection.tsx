'use client';

import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import '@mantine/carousel/styles.css';

type Testimonial = {
  content: string;
  author: string;
  role: string;
  rating: number;
  loan: string;
  days: string;
  bank: string;
};

const testimonials: Testimonial[] = [
  {
    content: "I was at a point where it felt like I had exhausted all my options for securing an education loan, and that's when I turned to Students Choice for help. They got my sanction in just 14 days, and the process was smoother than I ever imagined.",
    author: 'Hans Nizam Shmiski',
    role: 'MS in Data Science, USA',
    rating: 5,
    loan: '₹42 Lakhs',
    days: '14 days',
    bank: '/assets/images/banks/Credila.png',
  },
  {
    content: 'Had a smooth experience getting my education loan sanctioned with Students Choice. All thanks to Ritu, who guided and supported me from the start to the very end. Truly student-first service.',
    author: 'Ayushi Bansal',
    role: 'MSc Finance, UK',
    rating: 5,
    loan: '₹38 Lakhs',
    days: '9 days',
    bank: '/assets/images/banks/Avanse.png',
  },
  {
    content: 'It was a great experience applying for my education loan for her further studies abroad. I was associated with Students Choice, who were extremely polite and helpful. They understood our needs and gave us the best plan.',
    author: 'Chandra Sekhar',
    role: 'MS in CS, Canada',
    rating: 5,
    loan: '₹55 Lakhs',
    days: '12 days',
    bank: '/assets/images/banks/Axis.png',
  },
  {
    content: 'The loan process was so much easier than I expected. The team handled all the paperwork and I received my sanction letter quickly, with complete transparency at every step.',
    author: 'Siddharth Rao',
    role: 'MEng, Germany',
    rating: 5,
    loan: '₹30 Lakhs',
    days: '7 days',
    bank: '/assets/images/banks/ICICI.png',
  },
  {
    content: "I'm incredibly grateful for the support I received throughout this journey. From document review to lender matching, everything was handled professionally and on time.",
    author: 'Ramandeep Kaur',
    role: 'MBA, Ireland',
    rating: 5,
    loan: '₹47 Lakhs',
    days: '11 days',
    bank: '/assets/images/banks/IDFC.png',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-[#f5b301] text-sm tracking-tight">
      {'★'.repeat(count)}<span className="text-gray-300">{'★'.repeat(5 - count)}</span>
    </span>
  );
}

export function TestimonialSection() {
  const autoplay = useRef(
    Autoplay({ delay: 2600, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full bg-white pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-center text-[32px] md:text-[44px] font-black mb-10 tracking-tight">
          What <span className="bg-gradient-to-r from-[#6E00E0] to-[#b14bf0] bg-clip-text text-transparent">Students Say</span> About Us !
        </h2>

        <div className="relative rounded-[28px] bg-gradient-to-br from-[#9b30f0] via-[#6E00E0] to-[#6a16c9] p-6 md:p-10 shadow-[0_30px_70px_rgba(110,0,224,0.30)] overflow-hidden">
          {/* concentric rings */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 w-80 h-80 rounded-full border border-white/10" />

          <Carousel
            slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
            slideGap="lg"
            withControls={false}
            emblaOptions={{ align: 'start', loop: true, dragFree: true, slidesToScroll: 1, duration: 28 }}
            plugins={[autoplay.current]}
            className="relative z-10"
          >
            {testimonials.map((t, index) => (
              <Carousel.Slide key={index} className="py-2">
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                  {/* head */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#6E00E0] to-[#6f1ed0] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {t.author.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 leading-tight truncate">{t.author}</h4>
                      <p className="text-[#6E00E0] text-xs">{t.role}</p>
                    </div>
                  </div>

                  <div className="mt-3"><Stars count={t.rating} /></div>

                  <p className="text-gray-600 text-[14px] leading-relaxed mt-3 flex-grow">
                    &quot;{t.content}&quot;
                  </p>

                  {/* footer */}
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <img src={t.bank} alt="Lender" className="h-6 w-auto object-contain mb-3" />
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-lg bg-[#f3ecff] text-[#6f1ed0] text-[11px] font-semibold px-2.5 py-1">
                        Loan Amount: {t.loan}
                      </span>
                      <span className="inline-flex items-center rounded-lg bg-[#eafff1] text-[#1f7a47] text-[11px] font-semibold px-2.5 py-1">
                        Disbursed in {t.days}
                      </span>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
