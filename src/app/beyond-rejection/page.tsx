import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { EduLoanBankMarquee } from '@/components/education-loan/EduLoanBankMarquee';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { RejectionSupportButton } from '@/components/beyond-rejection/RejectionSupportButton';

export const metadata: Metadata = {
  title: "Beyond Rejection | Student's Choice",
  description:
    'Rejected for an education loan? We analyze the reasons, strengthen your profile, and connect you with the right lenders for a confident comeback.',
};

/* ─── Inline icons ───────────────────────────────────────────── */
const Arrow = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
const si = 'w-7 h-7';
const IconSearch = () => (
  <svg className={si} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
);
const IconProfile = () => (
  <svg className={si} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /><path d="M4 21v-2a4 4 0 0 1 4-4h2" /><polyline points="17 11 19 13 23 9" /></svg>
);
const IconDoc = () => (
  <svg className={si} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" /></svg>
);
const IconBank = () => (
  <svg className={si} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-6 9 6" /><path d="M4 9v11h16V9" /><line x1="8" y1="13" x2="8" y2="17" /><line x1="12" y1="13" x2="12" y2="17" /><line x1="16" y1="13" x2="16" y2="17" /><line x1="3" y1="20" x2="21" y2="20" /></svg>
);
const IconHandshake = () => (
  <svg className={si} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17 8.5 14.5a2 2 0 0 1 2.83-2.83L13 13.34" /><path d="m14 16 2 2a2 2 0 0 0 2.83-2.83l-4.6-4.6a2 2 0 0 0-1.42-.58H9.5L7 12.5" /><path d="m3 10 3-3 4 4" /><path d="m21 10-3-3-2.5 2.5" /></svg>
);

/* ─── Data ───────────────────────────────────────────────────── */
const HERO_FEATURES = [
  { icon: '🔍', title: 'Expert Rejection', sub: 'Reason Analysis' },
  { icon: '💪', title: 'Stronger Profile', sub: 'Building' },
  { icon: '🏦', title: '15+ Banks & NBFCs', sub: 'To Choose From' },
  { icon: '📈', title: 'Higher Approval', sub: 'Possibility' },
  { icon: '🎧', title: 'End-to-End', sub: 'Guidance' },
];

const FUTURE_STEPS = [
  { icon: '💡', title: 'Understand', desc: 'We identify the exact reason behind your loan rejection.' },
  { icon: '🛡️', title: 'Improve', desc: 'We strengthen your profile and resolve weak areas.' },
  { icon: '✅', title: 'Approve', desc: 'We connect you with the right lenders to improve approval chances.' },
];

const HELP_STEPS = [
  { icon: <IconSearch />,    title: 'Detailed Rejection Analysis', desc: 'We identify the exact reason behind the rejection.' },
  { icon: <IconProfile />,   title: 'Profile Strengthening',       desc: 'We help improve weak areas in your application.' },
  { icon: <IconDoc />,       title: 'Documentation Review',        desc: 'Our experts ensure your documents meet lender requirements.' },
  { icon: <IconBank />,      title: 'Lender Matching',             desc: 'We connect you with lenders that best fit your profile.' },
  { icon: <IconHandshake />, title: 'Approval Support',            desc: 'Complete assistance until loan disbursement.' },
];

const COMMON_QUESTIONS = [
  { q: 'Can I really get approved after rejection?', a: "Yes! Many students get approved after working with us. A rejection often means wrong lender choice or presentation issues, not that you don't qualify at all." },
  { q: 'How long does the reapplication process take?', a: 'Most students can restart in 7 to 21 days depending on document readiness, lender response time, and profile corrections. Urgent cases can be prioritized.' },
  { q: 'Do you charge for rejection support?', a: 'Initial case review is free. If you choose end-to-end support, we share transparent pricing before any paid engagement begins.' },
  { q: 'What if I get rejected again?', a: 'We do a second-level review and switch strategy quickly, including lender remapping and stronger documentation logic to reduce repeat rejection risk.' },
  { q: 'Will this affect my credit score?', a: 'Multiple hard inquiries in a short window can impact score slightly. We minimize unnecessary applications by choosing the right lender path first.' },
];

export default function BeyondRejectionPage() {
  return (
    <PageShell>
      {/* ═══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f1ff] via-[#fbf8ff] to-white pt-12 pb-10">
        <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#d9c2ff]/40 blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-0 w-96 h-96 rounded-full bg-[#c4a6ff]/30 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left copy */}
            <div>
              <span className="inline-flex items-center gap-2 bg-white border border-[#e7d9fb] text-[#6f1ed0] text-[13px] font-semibold px-4 py-2 rounded-full shadow-sm mb-6">
                ⚡ Rejection is not the end. It&apos;s a step to get it right.
              </span>
              <h1 className="text-4xl md:text-[52px] font-black leading-[1.08] tracking-tight">
                <span className="bg-gradient-to-r from-[#6E00E0] to-[#b14bf0] bg-clip-text text-transparent">Loan Rejected?</span>
                <br />
                <span className="text-[#15112b]">Let&apos;s Build a Stronger Comeback.</span>
              </h1>
              <p className="mt-5 text-gray-600 text-[16px] leading-relaxed max-w-xl">
                A loan rejection can happen for many reasons. We analyze the issues, strengthen your profile, and connect you with the right counselors to help you move forward with confidence.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <RejectionSupportButton />
                <Link href="/tools/loan-eligibility"
                  className="inline-flex items-center bg-white border-2 border-[#6E00E0] text-[#6E00E0] font-bold px-7 py-3 rounded-xl hover:bg-[#f7f0ff] transition-colors">
                  Check Free Eligibility
                </Link>
              </div>
              <div className="mt-4">
                <Link href="https://wa.me/919801821680"
                  className="inline-flex items-center gap-2 bg-[#1f2937] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#111827] transition-colors text-sm">
                  <span className="text-[#25d366]">●</span> Chat on WhatsApp
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[
                    '/assets/images/student-1.jpg',
                    '/assets/images/student-2.jpg',
                    '/assets/images/student-3.jpg',
                    '/assets/images/student-4.jpg',
                  ].map((src) => (
                    <img key={src} src={src} alt="Student" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Trusted by 15,000+ Students</p>
                  <p className="text-xs text-gray-500">4.9/5 Rating <span className="text-yellow-400">★★★★★</span></p>
                </div>
              </div>
            </div>

            {/* Right banner image — transparent, no card/rectangle */}
            <div className="relative lg:-mr-8 xl:-mr-16 lg:-translate-x-10 xl:-translate-x-16">
              <img
                src="/assets/images/Rejected.svg"
                alt="What after loan rejected"
                className="block w-full h-auto select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Feature pills */}
          <div className="mt-12 rounded-2xl bg-white border border-[#ece5f9] shadow-[0_18px_50px_rgba(110,0,224,0.10)] grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-[#f1ebfb] overflow-hidden">
            {HERO_FEATURES.map((f) => (
              <div key={f.title} className="flex items-center gap-3 px-5 py-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#f3ecff] text-lg flex-shrink-0">{f.icon}</span>
                <div>
                  <p className="text-[14px] font-extrabold text-gray-900 leading-tight">{f.title}</p>
                  <p className="text-[12px] text-gray-500">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ A Rejection Doesn't Define Your Future ═════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-[40px] font-black leading-tight">
              <span className="bg-gradient-to-r from-[#6E00E0] to-[#b14bf0] bg-clip-text text-transparent">A Rejection Doesn&apos;t</span>
              <br />
              <span className="text-[#15112b]">Define Your Future</span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Many students receive loan rejections because of reasons that can often be resolved.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The key is understanding what went wrong and taking the right corrective steps.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Students Choice, we don&apos;t simply reapply applications. We help students build stronger profiles, improve documentation, choose suitable lenders, and maximize approval opportunities.
            </p>
            <p className="mt-5 font-bold text-[#6E00E0]">
              Because every educational dream deserves another chance.
            </p>
          </div>

          {/* 3-step flow */}
          <div className="flex items-stretch justify-center gap-2 md:gap-3">
            {FUTURE_STEPS.map((s, i) => (
              <div key={s.title} className="flex items-center gap-2 md:gap-3">
                <div className="w-28 md:w-40 rounded-2xl border border-[#ece5f9] bg-white p-4 md:p-5 text-center shadow-[0_12px_30px_rgba(110,0,224,0.08)]">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#f3ecff] text-2xl mb-3">{s.icon}</span>
                  <h3 className="font-extrabold text-gray-900 text-[15px]">{s.title}</h3>
                  <p className="text-[11px] text-gray-500 mt-1.5 leading-snug">{s.desc}</p>
                </div>
                {i < FUTURE_STEPS.length - 1 && <span className="text-[#c4a6ff]"><Arrow /></span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Bank logos ═════════════════════════════════════════ */}
      <EduLoanBankMarquee />

      {/* ═══ How Students Choice Helps ══════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-[28px] border border-[#ece5f9] bg-gradient-to-br from-white to-[#faf6ff] p-7 md:p-12 shadow-[0_20px_55px_rgba(110,0,224,0.10)]">
          <h2 className="text-center text-2xl md:text-[34px] font-black text-[#15112b] mb-12">
            How <span className="bg-gradient-to-r from-[#6E00E0] to-[#b14bf0] bg-clip-text text-transparent">Students Choice</span> Helps After Loan Rejection
          </h2>

          <div className="relative grid gap-8 md:grid-cols-5 md:gap-4">
            <div className="pointer-events-none hidden md:block absolute left-[9%] right-[9%] top-8 h-[2px] bg-gradient-to-r from-[#6E00E0] via-[#b14bf0] to-[#6E00E0] opacity-40" />
            {HELP_STEPS.map((step, idx) => (
              <div key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#8b2fe8] to-[#6d17c9] text-white shadow-[0_14px_30px_rgba(110,0,224,0.40)] ring-2 ring-white">
                  {step.icon}
                </div>
                <h3 className="font-extrabold text-gray-900 text-[15px] mb-2 leading-tight">{step.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{step.desc}</p>
                {idx < HELP_STEPS.length - 1 && (
                  <span className="md:hidden block text-[#c4a6ff] mt-6 mx-auto w-6 rotate-90"><Arrow /></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Get Your Case Reviewed by Experts ══════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-[#e9defc] bg-gradient-to-br from-[#ffffff] via-[#faf6ff] to-[#f3ebff] p-7 md:p-10 shadow-[0_16px_40px_rgba(110,0,224,0.1)]">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 items-start">
            <div>
              <span className="inline-block bg-[#6E00E0]/10 text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Beyond Rejection</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">Get Your Case Reviewed by Experts</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">Share your details and we&apos;ll provide a free assessment of your rejection case and next steps.</p>
              <div className="space-y-3">
                {['100% Confidential Review', 'Response within 24 hours', 'No obligation consultation'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] text-white text-xs font-bold">✓</span>
                    <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#ebe4fb] bg-white/80 p-5">
                <p className="text-gray-700 leading-relaxed">From first rejection to final approval, our experts walk with you at every step. You get a clear, personalized action plan so you can reapply with confidence instead of guesswork.</p>
                <div className="mt-4 grid sm:grid-cols-3 gap-3">
                  <div className="rounded-xl bg-[#f5efff] border border-[#e6d9fb] p-3 text-center"><div className="text-2xl mb-1">🧠</div><p className="text-xs font-semibold text-[#5e2ab4]">Expert Diagnosis</p></div>
                  <div className="rounded-xl bg-[#eef9ff] border border-[#d6efff] p-3 text-center"><div className="text-2xl mb-1">📋</div><p className="text-xs font-semibold text-[#1b5f8a]">Action Checklist</p></div>
                  <div className="rounded-xl bg-[#edfff4] border border-[#d5f5e3] p-3 text-center"><div className="text-2xl mb-1">🚀</div><p className="text-xs font-semibold text-[#1f7a47]">Comeback Roadmap</p></div>
                </div>
              </div>
            </div>

            <form className="grid sm:grid-cols-2 gap-4 rounded-2xl border border-[#ebe4fb] bg-white/90 p-5 md:p-6">
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-gray-700 block mb-1.5">Student Name *</label>
                <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6E00E0] transition-colors" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1.5">Phone Number *</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6E00E0] transition-colors" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1.5">Country *</label>
                <input type="text" placeholder="Study destination" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6E00E0] transition-colors" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1.5">University *</label>
                <input type="text" placeholder="University name" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6E00E0] transition-colors" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1.5">Rejected By *</label>
                <input type="text" placeholder="Bank/NBFC name" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6E00E0] transition-colors" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-gray-700 block mb-1.5">Loan Amount *</label>
                <input type="text" placeholder="Amount needed (in ₹)" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6E00E0] transition-colors" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-gray-700 block mb-1.5">Message</label>
                <textarea rows={4} placeholder="Brief description of your situation" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6E00E0] transition-colors resize-none" />
              </div>
              <div className="sm:col-span-2">
                <button type="button" className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#6E00E0] to-[#6f1ed0] text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_12px_30px_rgba(110,0,224,0.28)] hover:brightness-110 transition-all">Review My Case</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ Testimonials ═══════════════════════════════════════ */}
      <TestimonialSection />

      {/* ═══ FAQ ════════════════════════════════════════════════ */}
      <section className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e9ddff] bg-[#f7f2ff] px-4 py-1.5 text-[#6f1ed0] text-xs md:text-sm font-semibold">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
              Quick Answers
            </span>
          </div>
          <h2 className="text-[34px] md:text-[40px] font-bold text-[#2D0B5A]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {COMMON_QUESTIONS.map((item, idx) => (
            <details key={item.q}
              className="group rounded-2xl border border-[#eadfff] bg-white shadow-[0_8px_22px_rgba(110,0,224,0.08)] open:shadow-[0_12px_30px_rgba(111,30,208,0.12)] transition-all"
              open={idx === 0}>
              <summary className="list-none cursor-pointer py-5 px-5 md:px-6 hover:bg-[#faf7ff] transition-colors rounded-2xl">
                <div className="flex items-center gap-4">
                  <h3 className="flex-1 text-[17px] md:text-[19px] font-medium text-gray-900">{item.q}</h3>
                  <svg className="w-5 h-5 shrink-0 text-[#6f1ed0] transition-transform duration-300 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </summary>
              <div className="px-5 md:px-6 pt-1 pb-6 text-[15px] text-gray-600 leading-relaxed border-t border-[#f0e8ff] bg-[#fdfbff]">{item.a}</div>
            </details>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
