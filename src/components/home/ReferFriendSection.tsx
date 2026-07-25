'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

const LEAD_EMAIL = 'pankaj@studentschoice.in';

const DESTINATIONS = ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'France', 'Ireland', 'Italy', 'Spain', 'Switzerland', 'Singapore', 'UAE', 'New Zealand', 'Other'];

const IUser = () => (<svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>);
const IPhone = () => (<svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>);
const IMail = () => (<svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>);
const IGlobe = () => (<svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>);
const IChevron = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>);
const IGift = () => (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>);
const IHeart = () => (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>);
const IStar = () => (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>);
const IShield = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
const IUsers = ({ c = 'w-6 h-6' }: { c?: string }) => (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
const ISend = () => (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>);
const ILock = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>);
const IPlane = () => (<svg className="w-12 h-12 rotate-[8deg]" viewBox="0 0 24 24" fill="#6E00E0" stroke="none"><path d="M21.5 2.5 2 11l6.5 2.2L11 20l3-4.5 5.5 1.5 2-14.5z" opacity="0.85" /></svg>);
const IPencil = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>);

const empty = { yourName: '', yourPhone: '', yourEmail: '', friendName: '', friendPhone: '', friendEmail: '', destination: '', message: '' };

export function ReferFriendSection() {
  const [openModal, setOpenModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (openModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [openModal]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/' + LEAD_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Refer a Friend — New Referral',
          _template: 'table',
          _captcha: 'false',
          'Your Name': form.yourName,
          'Your Phone': form.yourPhone,
          'Your Email': form.yourEmail,
          "Friend's Name": form.friendName,
          "Friend's Phone": form.friendPhone,
          "Friend's Email": form.friendEmail,
          'Preferred Destination': form.destination,
          Message: form.message,
        }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
      setForm(empty);
    } catch {
      setStatus('error');
    }
  }

  const lbl = 'block text-[12.5px] font-semibold text-gray-700 mb-1';
  const inputIcon = 'w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl text-[13.5px] focus:outline-none focus:border-[#6E00E0] focus:ring-1 focus:ring-[#6E00E0]/40 transition-colors';
  const icon = 'absolute left-3 top-1/2 -translate-y-1/2 text-[#6E00E0]';

  const modal = (
    <AnimatePresence>
      {openModal && (
        <motion.div className="fixed inset-0 z-[9999] overflow-y-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="fixed inset-0 bg-black/55 backdrop-blur-sm" onClick={() => setOpenModal(false)} />
          <div className="relative flex min-h-full items-center justify-center px-3 sm:px-4 py-8 sm:py-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-[960px] bg-white rounded-[26px] shadow-2xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
            >
              <button onClick={() => setOpenModal(false)} aria-label="Close" className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-white shadow-md hover:bg-gray-50 flex items-center justify-center text-[#6E00E0] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>

              {/* ── Left panel ── */}
              <div className="relative flex flex-col overflow-hidden" style={{ background: 'linear-gradient(165deg, #f3ecff 0%, #faf7ff 50%, #f5eeff 100%)' }}>
                {/* paper plane */}
                <div className="absolute top-6 right-7 z-10 opacity-90"><IPlane /></div>

                <div className="px-7 md:px-8 pt-6 relative z-10">
                  <span className="inline-flex items-center gap-2 self-start bg-[#ece2fb] text-[#6E00E0] text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"><IUsers c="w-4 h-4" /> Refer &amp; Empower</span>
                  <h3 className="mt-3 text-[26px] md:text-[32px] font-black leading-[1.08] text-gray-900">
                    Refer a Friend,<br />
                    <span className="text-[#6E00E0] relative inline-block">Empower a Future!
                      <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#6E00E0] to-[#b36af5]" />
                    </span>
                  </h3>
                  <p className="mt-3 text-gray-600 text-[13.5px] leading-relaxed max-w-sm">
                    Know someone planning to study abroad? Refer them to <span className="font-bold text-[#6E00E0]">Students Choice</span> and help them take the right step towards their dreams.
                  </p>

                  <ul className="mt-5 space-y-3">
                    {[
                      { i: <IGift />, t: 'You Refer', d: 'Help your friend discover the right study abroad opportunities.' },
                      { i: <IHeart />, t: 'They Get Expert Support', d: 'Personalized guidance for admissions, loans, visa & more.' },
                      { i: <IStar />, t: 'You Get Rewarded', d: 'Exciting rewards & our heartfelt thanks when they succeed!' },
                    ].map((x) => (
                      <li key={x.t} className="flex items-start gap-3">
                        <span className="w-11 h-11 shrink-0 rounded-2xl bg-gradient-to-br from-[#9b30f0] to-[#6E00E0] text-white flex items-center justify-center shadow-md">{x.i}</span>
                        <div>
                          <p className="text-[#6E00E0] font-bold text-[14px] leading-tight">{x.t}</p>
                          <p className="text-gray-600 text-[12px] leading-snug mt-0.5">{x.d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/70 border border-[#ece2fb] px-3.5 py-2.5">
                    <span className="w-9 h-9 shrink-0 rounded-full bg-[#efe6fc] text-[#6E00E0] flex items-center justify-center"><IShield /></span>
                    <div>
                      <p className="text-[#6E00E0] font-bold text-[12.5px] leading-tight">Trusted by Thousands of Students</p>
                      <p className="text-gray-500 text-[11.5px]">Let&apos;s build more success stories, together.</p>
                    </div>
                  </div>
                </div>

                {/* bottom wave + image */}
                <div className="relative mt-5 h-[150px]">
                  <div className="absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-b from-[#7c1fe0] to-[#5a13b8]" style={{ borderTopLeftRadius: '50% 60px', borderTopRightRadius: '50% 60px' }} />
                  <img src="/assets/images/refers students.png" alt="Refer a friend" className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-[180px] w-auto object-contain object-bottom select-none pointer-events-none" />
                </div>
              </div>

              {/* ── Right form ── */}
              <div className="px-7 md:px-9 py-6">
                {status === 'done' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="text-5xl mb-3">🎉</div>
                    <h4 className="font-extrabold text-gray-900 text-xl">Referral Sent!</h4>
                    <p className="text-gray-500 mt-2">Thank you! We&apos;ll reach out to your friend soon.</p>
                    <button onClick={() => setOpenModal(false)} className="mt-6 bg-[#6E00E0] text-white font-bold px-7 py-3 rounded-xl">Close</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="text-center mb-5">
                      <div className="w-14 h-14 mx-auto rounded-full bg-[#f3ecff] text-[#6E00E0] flex items-center justify-center mb-2 shadow-sm"><IUsers /></div>
                      <h3 className="text-[24px] font-extrabold text-gray-900">Refer a Friend</h3>
                      <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#6E00E0]/50" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6E00E0]" />
                        <p className="text-gray-500 text-[13px]">Fill in the details below</p>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6E00E0]" />
                        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#6E00E0]/50" />
                      </div>
                    </div>

                    <p className="text-[#6E00E0] font-bold text-[12px] uppercase tracking-wide mb-2">Your Information</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className={lbl}>Your Full Name <span className="text-[#e23]">*</span></label>
                        <div className="relative"><span className={icon}><IUser /></span><input required value={form.yourName} onChange={(e) => setForm({ ...form, yourName: e.target.value })} placeholder="Enter your full name" className={inputIcon} /></div>
                      </div>
                      <div>
                        <label className={lbl}>Your Phone Number <span className="text-[#e23]">*</span></label>
                        <div className="relative"><span className={icon}><IPhone /></span><input required type="tel" value={form.yourPhone} onChange={(e) => setForm({ ...form, yourPhone: e.target.value })} placeholder="+91 XXXXX XXXXX" className={inputIcon} /></div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className={lbl}>Your Email ID <span className="text-[#e23]">*</span></label>
                      <div className="relative"><span className={icon}><IMail /></span><input required type="email" value={form.yourEmail} onChange={(e) => setForm({ ...form, yourEmail: e.target.value })} placeholder="Enter your email address" className={inputIcon} /></div>
                    </div>

                    <div className="border-t border-gray-100 my-4" />
                    <p className="text-[#6E00E0] font-bold text-[12px] uppercase tracking-wide mb-2">Friend&apos;s Information</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className={lbl}>Friend&apos;s Full Name <span className="text-[#e23]">*</span></label>
                        <div className="relative"><span className={icon}><IUser /></span><input required value={form.friendName} onChange={(e) => setForm({ ...form, friendName: e.target.value })} placeholder="Enter your friend's name" className={inputIcon} /></div>
                      </div>
                      <div>
                        <label className={lbl}>Friend&apos;s Phone Number <span className="text-[#e23]">*</span></label>
                        <div className="relative"><span className={icon}><IPhone /></span><input required type="tel" value={form.friendPhone} onChange={(e) => setForm({ ...form, friendPhone: e.target.value })} placeholder="+91 XXXXX XXXXX" className={inputIcon} /></div>
                      </div>
                      <div>
                        <label className={lbl}>Friend&apos;s Email ID <span className="text-[#e23]">*</span></label>
                        <div className="relative"><span className={icon}><IMail /></span><input required type="email" value={form.friendEmail} onChange={(e) => setForm({ ...form, friendEmail: e.target.value })} placeholder="Enter your friend's email" className={inputIcon} /></div>
                      </div>
                      <div>
                        <label className={lbl}>Preferred Study Destination</label>
                        <div className="relative"><span className={icon}><IGlobe /></span>
                          <select value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className={`${inputIcon} appearance-none pr-9 ${form.destination ? 'text-gray-800' : 'text-gray-400'}`}>
                            <option value="" disabled hidden>Select destination</option>
                            {DESTINATIONS.map((d) => <option key={d} value={d} className="text-gray-800">{d}</option>)}
                          </select>
                          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><IChevron /></span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className={lbl}>Message (Optional)</label>
                      <div className="relative">
                        <textarea rows={2} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Add a personal message (optional)" className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-[13.5px] focus:outline-none focus:border-[#6E00E0] focus:ring-1 focus:ring-[#6E00E0]/40 transition-colors resize-none" />
                        <span className="absolute right-3 bottom-2.5 text-gray-300"><IPencil /></span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#f6f0ff] border border-[#ece2fb] px-4 py-3">
                      <span className="w-9 h-9 shrink-0 rounded-full bg-[#efe6fc] text-[#6E00E0] flex items-center justify-center"><IGift /></span>
                      <p className="text-[12.5px] text-gray-600">Once your friend connects with us, you both win <span className="font-bold text-[#6E00E0]">exciting benefits!</span></p>
                    </div>

                    {status === 'error' && <p className="text-red-500 text-[13px] text-center mt-3">Something went wrong. Please try again.</p>}

                    <button type="submit" disabled={status === 'sending'} className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7c1fe0] to-[#5a13b8] text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_12px_30px_rgba(110,0,224,0.28)] hover:brightness-110 transition-all disabled:opacity-70">
                      <ISend /> {status === 'sending' ? 'Sending…' : 'Submit Referral'}
                    </button>
                    <p className="flex items-center justify-center gap-1.5 text-[11.5px] text-gray-400 mt-3"><ILock /> Your information is safe and will never be shared.</p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section className="w-full bg-white pb-16 px-6 sm:px-10 lg:px-16 mt-12 mb-0">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[24px] bg-gradient-to-r from-[#9b30f0] via-[#6E00E0] to-[#6a16c9] flex flex-col md:flex-row items-stretch min-h-[320px] mt-24 shadow-[0_30px_70px_rgba(110,0,224,0.30)]"
          style={{ overflow: 'visible' }}
        >
          <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 right-[20%] -translate-y-1/2 translate-x-1/2 w-[650px] h-[650px] rounded-full border-[1.5px] border-white/10" />
            <div className="absolute top-1/2 right-[20%] -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full border-[1.5px] border-white/10 bg-white/[0.02]" />
            <div className="absolute top-1/2 right-[20%] -translate-y-1/2 translate-x-1/2 w-[350px] h-[350px] rounded-full border-[1.5px] border-white/10 bg-white/[0.03]" />
            <div className="absolute top-1/2 right-[20%] -translate-y-1/2 translate-x-1/2 w-[200px] h-[200px] rounded-full border-[1.5px] border-white/10 bg-white/[0.04]" />
          </div>

          <div className="w-full md:w-[65%] flex flex-col justify-center py-10 px-8 lg:pl-20 z-10 order-1">
            <span className="inline-flex items-center gap-2 self-start bg-white/15 border border-white/20 text-white text-[12px] font-semibold px-3 py-1.5 rounded-full mb-3">
              ⭐ The path to study abroad is better together with friends &amp; family
            </span>
            <h2 className="text-white text-[28px] md:text-[38px] font-extrabold leading-[1.2]">
              Refer a Friend, Earn Rewards
            </h2>
            <p className="text-white/90 mt-4 text-[16px] md:text-[17px] max-w-xl">
              Make your friends a part of the Student&apos;s Choice community and help them fast-track their future. Know someone who needs an education loan? Just introduce them to us and we&apos;ll take care of the rest.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button onClick={() => { setStatus('idle'); setOpenModal(true); }} className="bg-white text-[#6E00E0] font-bold px-7 py-3 rounded-md hover:bg-gray-100 transition-colors shadow-sm">
                Refer a Friend
              </button>
              <span className="text-white/90 text-sm font-semibold">🎁 Earn up to ₹5,000 per successful referral</span>
            </div>
          </div>

          <div className="relative w-full md:w-[35%] flex justify-center order-2" style={{ overflow: 'visible' }}>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              src="/assets/images/refers students.png"
              alt="Refer a Friend"
              className="absolute bottom-0 z-10 w-auto object-contain object-bottom drop-shadow-[10px_0_30px_rgba(0,0,0,0.18)] pointer-events-none"
              style={{ height: '130%' }}
            />
          </div>
        </motion.div>
      </div>

      {mounted && createPortal(modal, document.body)}
    </section>
  );
}
