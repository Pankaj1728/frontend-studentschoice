'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';
import { useLeadForm } from '@/components/lead/LeadModal';

/* ─── Inline line icons ──────────────────────────────────────── */
const cx = 'w-5 h-5';
const IconPhone = () => (
  <svg className={cx} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const IconPin = () => (
  <svg className={cx} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
const IconChat = () => (
  <svg className={cx} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
);
const IconMail = () => (
  <svg className={cx} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
);
const IconUser = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const IconArrow = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
const IconBolt = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);
const IconShield = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const IconLock = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
);
const IconChevron = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
);

/* ─── Contact detail rows ────────────────────────────────────── */
const DETAILS = [
  { icon: <IconPin />,   title: 'Head Office',     value: 'WZ - 113/4, Subhash Nagar, Meenakshi Garden, Ashok Nagar, New Delhi, Delhi, 110018', note: 'Visit us during business hours' },
  { icon: <IconPhone />, title: 'Phone Support',   value: '+91 980 182 1680',          note: 'Mon-Sat, 10 AM - 7 PM', href: 'tel:+919801821680' },
  { icon: <IconChat />,  title: 'WhatsApp Chat',   value: '+91 980 182 1680',          note: 'Available 24/7 for quick response', href: 'https://wa.me/919801821680' },
  { icon: <IconMail />,  title: 'Email Support',   value: 'Contact@studentschoice.in', note: 'Response within 1 business day', href: 'mailto:Contact@studentschoice.in' },
];

const BADGES = [
  { icon: <IconBolt />,   title: 'Quick Response',    sub: 'Under 5 Minutes' },
  { icon: <IconShield />, title: 'Expert Counselors', sub: '5 Year Experience' },
  { icon: <IconLock />,   title: '100% Secure',       sub: 'Your Data is Safe' },
];

const CATEGORIES = ['Education Loan', 'Admission Assistance', 'Become a Partner'];

const fieldCls =
  'w-full pl-11 pr-4 py-3 rounded-xl bg-[#f6f3fc] border border-[#ece5f9] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#6E00E0] focus:bg-white transition-colors';

export default function ContactUsPage() {
  const [booking, setBooking] = useState({
    name: '', phone: '', email: '', category: '', description: '',
  });
  const [bookingDone, setBookingDone] = useState(false);
  const { open } = useLeadForm();

  function handleBookingSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      'Hello Students Choice! I would like to book a free consultation.',
      '',
      `Name: ${booking.name}`,
      `Phone: ${booking.phone}`,
      booking.email ? `Email: ${booking.email}` : '',
      booking.category ? `Category: ${booking.category}` : '',
      booking.description ? `Message: ${booking.description}` : '',
    ].filter(Boolean);
    window.open(
      `https://wa.me/919801821680?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
      'noopener,noreferrer'
    );
    setBookingDone(true);
  }

  return (
    <PageShell>
      {/* ── Hero: Get in Touch ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-14 pb-10">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#f3ecff] blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left copy */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-[40px] leading-tight font-extrabold text-gray-900">
                Get in Touch with Students Choice
              </h1>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-gray-600 max-w-xl">
                <p>At Students Choice, we don&apos;t just help students secure education loans—we help them unlock opportunities, achieve ambitions, and build successful futures.</p>
                <p>As a trusted education financing and student advisory platform, we provide expert support for education loans, admissions guidance, financial planning, and study abroad aspirations. Our mission is to simplify the entire process and empower students to make informed decisions with confidence. Thousands of students and families trust Students Choice because of our transparent approach, personalized solutions, and commitment to delivering exceptional service at every stage of the educational journey.</p>
                <p>Whether you&apos;re exploring universities, comparing loan options, or seeking professional guidance, our experts are ready to assist you.</p>
                <p>Connect with Students Choice today and take the first step toward your academic success.</p>
              </div>
              <button onClick={() => open('Talk to Counsellor')} className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-[#8b2fe8] to-[#6d17c9] text-white font-bold px-7 py-3.5 rounded-xl shadow-[0_10px_30px_rgba(110,0,224,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(110,0,224,0.45)] transition-all">
                Talk to Counsellor <IconArrow />
              </button>
            </motion.div>

            {/* Right image */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
              className="relative">
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-[#6E00E0]/15 to-transparent blur-2xl" />
              <div className="relative rounded-[28px] overflow-hidden shadow-[0_30px_70px_rgba(110,0,224,0.22)] ring-1 ring-[#ece5f9] bg-[#f3ecff]">
                <img
                  src="/assets/images/contact-us-girl.jpg"
                  alt="Talk to a Students Choice counsellor"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>
          </div>

          {/* Contact pills bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 max-w-4xl mx-auto rounded-2xl bg-white border border-[#e7ddfa] shadow-[0_18px_50px_rgba(110,0,224,0.10)] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#efe8fb] overflow-hidden">
            {[
              { big: '+91 980 182 1680', small: 'Call Us' },
              { big: 'contact@studentschoice.in', small: 'Email Us' },
              { big: 'studentschoice', small: 'Stalk Us' },
            ].map((p) => (
              <div key={p.small} className="px-6 py-5 text-center">
                <p className="font-extrabold text-gray-900 text-[15px] md:text-base break-words">{p.big}</p>
                <p className="text-sm text-gray-400 mt-0.5">{p.small}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Connect heading ──────────────────────────────────── */}
      <section className="text-center px-4 pt-10 pb-6">
        <h2 className="text-3xl md:text-[40px] font-extrabold text-gray-900">
          Connect with{' '}
          <span className="bg-gradient-to-r from-[#6E00E0] to-[#b14bf0] bg-clip-text text-transparent">
            Students Choice
          </span>
        </h2>
        <p className="mt-2 text-gray-500 text-lg">Reach out to start your global study abroad education journey.</p>
      </section>

      {/* ── Contact Details + Booking form ───────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="grid lg:grid-cols-2 gap-7">
          {/* Contact Details card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white border border-[#ece5f9] shadow-[0_20px_55px_rgba(110,0,224,0.10)] p-7 md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#f3ecff] text-[#6E00E0]"><IconPhone /></span>
              <h3 className="text-2xl font-extrabold text-gray-900">Contact Details</h3>
            </div>
            <p className="text-gray-500 mt-3 text-[15px]">Reach out via phone, WhatsApp, email, or visit us in person.</p>

            <div className="mt-6 space-y-3.5">
              {DETAILS.map((d) => {
                const isWhatsApp = d.href?.startsWith('https://wa.me');
                const inner = (
                  <>
                    <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[#f3ecff] text-[#6E00E0]">{d.icon}</span>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900">{d.title}</p>
                      <p className="text-gray-700 text-[14px] mt-0.5 break-words">{d.value}</p>
                      <p className="text-gray-400 text-[12px] mt-1 italic">{d.note}</p>
                    </div>
                  </>
                );
                const cardCls = "flex gap-4 rounded-2xl border border-[#f0eafa] bg-[#fbf9ff] p-4 hover:border-[#d9c7f7] hover:shadow-[0_10px_24px_rgba(110,0,224,0.10)] transition-all";
                return d.href ? (
                  <a key={d.title} href={d.href}
                    target={isWhatsApp ? '_blank' : undefined}
                    rel={isWhatsApp ? 'noopener noreferrer' : undefined}
                    className={`${cardCls} cursor-pointer`}>
                    {inner}
                  </a>
                ) : (
                  <div key={d.title} className={cardCls}>{inner}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Booking form card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-white border border-[#ece5f9] shadow-[0_20px_55px_rgba(110,0,224,0.10)] p-7 md:p-8">
            <h3 className="text-2xl font-extrabold text-gray-900">Book Free Consultation</h3>
            <p className="text-gray-500 mt-1 text-[15px]">Schedule a 1-on-1 session with our expert counselors</p>

            {bookingDone ? (
              <div className="mt-6 bg-[#f3ffe9] border border-green-200 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-3">🎉</div>
                <h4 className="font-extrabold text-green-800 text-lg">Request Received!</h4>
                <p className="text-green-700 mt-2">Our counselor will reach out to you in under 5 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="mt-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Full Name<span className="text-[#6E00E0]">*</span></label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6E00E0]"><IconUser /></span>
                      <input required value={booking.name} onChange={e => setBooking({ ...booking, name: e.target.value })}
                        placeholder="e.g. Rahul Kumar" className={fieldCls} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Phone<span className="text-[#6E00E0]">*</span></label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6E00E0]"><IconPhone /></span>
                      <input required type="tel" value={booking.phone} onChange={e => setBooking({ ...booking, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210" className={fieldCls} />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Email Address<span className="text-[#6E00E0]">*</span></label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6E00E0]"><IconMail /></span>
                    <input required type="email" value={booking.email} onChange={e => setBooking({ ...booking, email: e.target.value })}
                      placeholder="e.g. rahul.kumar@gmail.com" className={fieldCls} />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Category<span className="text-[#6E00E0]">*</span></label>
                  <div className="relative">
                    <select required value={booking.category} onChange={e => setBooking({ ...booking, category: e.target.value })}
                      className={`w-full px-4 py-3 pr-11 rounded-xl bg-[#f6f3fc] border border-[#ece5f9] focus:outline-none focus:border-[#6E00E0] focus:bg-white transition-colors appearance-none ${booking.category ? 'text-gray-800' : 'text-gray-400'}`}>
                      <option value="" disabled hidden>Select a category</option>
                      {CATEGORIES.map(c => (
                        <option key={c} value={c} className="text-gray-800">{c}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"><IconChevron /></span>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Description<span className="text-[#6E00E0]">*</span></label>
                  <textarea required rows={4} value={booking.description} onChange={e => setBooking({ ...booking, description: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-xl bg-[#f6f3fc] border border-[#ece5f9] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#6E00E0] focus:bg-white transition-colors resize-none" />
                </div>

                <button type="submit"
                  className="mt-6 w-full bg-gradient-to-r from-[#8b2fe8] to-[#6d17c9] text-white font-extrabold py-3.5 rounded-xl shadow-[0_12px_30px_rgba(110,0,224,0.35)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(110,0,224,0.45)] transition-all">
                  Continue
                </button>

                <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                  {BADGES.map((b) => (
                    <div key={b.title} className="flex flex-col items-center gap-1.5">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f3ecff] text-[#6E00E0]">{b.icon}</span>
                      <span className="text-gray-800 text-[11px] font-bold leading-tight">{b.title}</span>
                      <span className="text-gray-400 text-[10px] leading-tight">{b.sub}</span>
                    </div>
                  ))}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
