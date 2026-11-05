'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LeadModal.module.css';

const LEAD_EMAIL = 'pankaj@studentschoice.in';
const WHATSAPP_URL = 'https://wa.me/919801821680';

export type LeadType = 'loan' | 'study';

type LeadContextValue = {
  open: (ctaLabel?: string, type?: LeadType) => void;
};

const LeadContext = createContext<LeadContextValue | null>(null);

export function useLeadForm() {
  const ctx = useContext(LeadContext);
  if (!ctx) return { open: () => {} };
  return ctx;
}

const DESTINATIONS = ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland', 'France', 'Other'];

// The next three intakes (January, May, September) after the current month, plus "Not sure yet"
function upcomingIntakes(now = new Date()) {
  const names = ['Jan', 'May', 'Sep'];
  const months = [0, 4, 8];
  const out: string[] = [];
  let year = now.getFullYear();
  let month = now.getMonth();
  while (out.length < 3) {
    const i = months.findIndex((m) => m > month);
    if (i === -1) {
      year += 1;
      month = -1;
      continue;
    }
    out.push(`${names[i]} ${year}`);
    month = months[i];
  }
  return [...out, 'Not sure yet'];
}

type Question = { key: string; label: string; summary: string; field: string; options: string[] };

function questions(type: LeadType): Question[] {
  if (type === 'loan') {
    return [
      { key: 'amount', label: 'Loan Amount', summary: 'Loan amount', field: 'Loan Amount', options: ['Up to ₹10 Lakh', '₹10–25 Lakh', '₹25–50 Lakh', '₹50 Lakh–1 Cr', 'Above ₹1 Cr'] },
      { key: 'destination', label: 'Preferred Destination', summary: 'Destination', field: 'Preferred Destination', options: DESTINATIONS },
      { key: 'admission', label: 'Admission Status', summary: 'Admission', field: 'Admission Status', options: ['Admission confirmed', 'Applied, waiting', 'Not applied yet'] },
    ];
  }
  return [
    { key: 'destination', label: 'Preferred Destination', summary: 'Destination', field: 'Preferred Destination', options: DESTINATIONS },
    { key: 'level', label: 'Course Level', summary: 'Course level', field: 'Course Level', options: ['Bachelor’s (UG)', 'Master’s (PG)', 'MBA', 'PhD', 'Diploma'] },
    { key: 'intake', label: 'Intake', summary: 'Intake', field: 'Intake', options: upcomingIntakes() },
    { key: 'english', label: 'English Test', summary: 'English test', field: 'English Test', options: ['IELTS', 'TOEFL', 'PTE', 'Duolingo', 'Not yet'] },
  ];
}

const COPY = {
  loan: {
    sideH: 'Get the right education loan, faster',
    points: ['Compare 15+ banks & NBFCs', 'Collateral-free options', 'Help with every document'],
    sub: 'Tell us a little about you and we’ll call you back.',
    submit: 'Get My Loan Options →',
    step2: 'Loan details',
    kind: 'education loan',
    formType: 'education_loan',
    subject: 'New Lead — Education Loan Consultation',
  },
  study: {
    sideH: 'Find your best-fit university',
    points: ['Free university shortlist', 'Admission & visa guidance', 'Scholarship & loan support'],
    sub: 'Tell us about your plans and an expert will call you back.',
    submit: 'Get Free Counselling →',
    step2: 'University details',
    kind: 'study abroad',
    formType: 'study_abroad',
    subject: 'New Lead — Study Abroad Consultation',
  },
} as const;

const CONSENT_TEXT =
  'I agree that Students Choice and its lending and university partners may contact me by phone, WhatsApp, SMS and email about my enquiry. I have read the Privacy Policy.';

const PHONE_RE = /^[6-9]\d{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyDetails = { name: '', phone: '', email: '', city: '' };
type Details = typeof emptyDetails;

type Done = { firstName: string; maskedPhone: string; kind: string; rows: [string, string][]; waHref: string };

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<LeadType>('loan');
  const [step, setStep] = useState<1 | 2>(1);
  const [ctaLabel, setCtaLabel] = useState('Website');
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [consent, setConsent] = useState(false);
  const [invalid, setInvalid] = useState<Set<string>>(new Set());
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<Done | null>(null);

  const boxRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const copy = COPY[type];
  const qs = questions(type);

  const open = useCallback((label?: string, t: LeadType = 'loan') => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setCtaLabel(label || 'Website');
    setType(t);
    setStep(1);
    setDetails(emptyDetails);
    setChoices({});
    setConsent(false);
    setInvalid(new Set());
    setError1('');
    setError2('');
    setSending(false);
    setDone(null);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    const t = triggerRef.current;
    if (t && document.contains(t)) setTimeout(() => t.focus(), 0);
  }, []);

  // lock page scroll and move focus into the popup
  useEffect(() => {
    if (!isOpen) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = 'hidden';
    const id = setTimeout(() => nameRef.current?.focus(), 30);
    return () => {
      html.style.overflow = prev;
      clearTimeout(id);
    };
  }, [isOpen]);

  // Esc closes; Tab and Shift+Tab stay inside the popup
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key !== 'Tab' || !boxRef.current) return;
      const items = Array.from(
        boxRef.current.querySelectorAll<HTMLElement>('button, a[href], input:not([type="hidden"])'),
      ).filter((el) => el.offsetParent !== null && !(el as HTMLButtonElement).disabled);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  useEffect(() => {
    if (done) doneRef.current?.focus();
  }, [done]);

  const clearErrors = () => {
    setInvalid(new Set());
    setError1('');
    setError2('');
  };

  const phoneDigits = details.phone.replace(/\D/g, '');

  function validStep1() {
    clearErrors();
    const bad = new Set<string>();
    if (!details.name.trim()) bad.add('name');
    if (!PHONE_RE.test(phoneDigits)) bad.add('phone');
    if (!EMAIL_RE.test(details.email.trim())) bad.add('email');
    if (!details.city.trim()) bad.add('city');
    if (bad.size) {
      setInvalid(bad);
      setError1('Please check the highlighted details. Phone needs a 10-digit Indian mobile number.');
      const first = ['name', 'phone', 'email', 'city'].find((k) => bad.has(k));
      boxRef.current?.querySelector<HTMLInputElement>(`input[name="${first}"]`)?.focus();
      return false;
    }
    return true;
  }

  function validStep2() {
    clearErrors();
    const bad = new Set(qs.filter((q) => !choices[q.key]).map((q) => q.key));
    if (!bad.size && consent) return true;
    setInvalid(bad);
    if (bad.size) {
      setError2('Please choose one option in each question.');
      const first = qs.find((q) => bad.has(q.key));
      boxRef.current?.querySelector<HTMLInputElement>(`input[name="${first?.key}"]`)?.focus();
    } else {
      setError2('Please tick the consent box so we can contact you.');
      boxRef.current?.querySelector<HTMLInputElement>('input[name="consent"]')?.focus();
    }
    return false;
  }

  function goNext() {
    if (!validStep1()) return;
    setStep(2);
    setTimeout(() => boxRef.current?.querySelector<HTMLInputElement>('fieldset[data-step="2"] input')?.focus(), 0);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step === 1) {
      goNext();
      return;
    }
    if (!validStep2()) return;

    const name = details.name.trim();
    const city = details.city.trim();
    const phone = `+91${phoneDigits}`;
    const utm: Record<string, string> = {};
    new URLSearchParams(window.location.search).forEach((v, k) => {
      if (k.toLowerCase().startsWith('utm_')) utm[k] = v;
    });

    // FormSubmit emails these fields as a table; existing field names are kept so leads look the same
    const payload: Record<string, string> = {
      _subject: copy.subject,
      _template: 'table',
      _captcha: 'false',
      Source: ctaLabel,
      'Form Type': copy.formType,
      'Full Name': name,
      Phone: phone,
      Email: details.email.trim(),
      City: city,
      ...Object.fromEntries(qs.map((q) => [q.field, choices[q.key]])),
      Consent: 'true',
      'Consent Text': CONSENT_TEXT,
      'Consent At': new Date().toISOString(),
      'Page URL': window.location.href,
      ...utm,
    };

    setSending(true);
    try {
      const res = await fetch('https://formsubmit.co/ajax/' + LEAD_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Lead submit failed: ${res.status}`);
      const waText = `Hi Students Choice, I just booked a free ${copy.kind} consultation. Name: ${name}, City: ${city}.`;
      setDone({
        firstName: name.split(/\s+/)[0],
        maskedPhone: `+91 ${phoneDigits.slice(0, 2)}XXX XX${phoneDigits.slice(-3)}`,
        kind: copy.kind,
        rows: [['City', city], ...qs.map((q): [string, string] => [q.summary, choices[q.key]])],
        waHref: `${WHATSAPP_URL}?text=${encodeURIComponent(waText)}`,
      });
    } catch (err) {
      console.error(err);
      setError2('Something went wrong. Please try again or WhatsApp us.');
    } finally {
      setSending(false);
    }
  }

  const setDetail = (k: keyof Details) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails((d) => ({ ...d, [k]: e.target.value }));
  };

  const switchTab = (t: LeadType) => {
    clearErrors();
    setType(t);
  };

  return (
    <LeadContext.Provider value={{ open }}>
      {children}

      {isOpen && (
        <div className={styles.lp}>
          <div className={styles.bg} onClick={close} />
          <div ref={boxRef} className={styles.box} role="dialog" aria-modal="true" aria-labelledby="lpTitle">
            <aside className={styles.side}>
              <span className={styles.brand}>STUDENTS CHOICE</span>
              <h3 className={styles.sideH}>{copy.sideH}</h3>
              <ul className={styles.sideList}>
                {copy.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Image
                className={styles.sideImg}
                src="/assets/images/student-cutout.webp"
                alt=""
                width={760}
                height={871}
                sizes="310px"
              />
            </aside>

            <div className={styles.main}>
              <button className={styles.x} type="button" onClick={close} aria-label="Close">✕</button>

              {done ? (
                <div ref={doneRef} className={styles.done} tabIndex={-1}>
                  <div className={styles.tick} aria-hidden="true">✓</div>
                  <h3 id="lpTitle" className={styles.h}>Thank you{done.firstName ? `, ${done.firstName}` : ''}!</h3>
                  <p className={styles.sub}>
                    We’ve received your {done.kind} request. Our expert will call you on {done.maskedPhone}.
                  </p>
                  <ul className={styles.summary}>
                    {done.rows.map(([k, v]) => (
                      <li key={k}><span>{k}</span><b>{v}</b></li>
                    ))}
                  </ul>
                  <div className={styles.actions}>
                    <a className={styles.btn} href={done.waHref} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                    <button className={`${styles.btn} ${styles.ghost}`} type="button" onClick={close}>Close</button>
                  </div>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit}>
                  <h3 id="lpTitle" className={styles.h}>Book Free Consultation</h3>
                  <p className={styles.sub}>{copy.sub}</p>

                  <div className={styles.tabs} role="group" aria-label="What do you need help with?">
                    <button type="button" className={styles.tab} aria-pressed={type === 'loan'} onClick={() => switchTab('loan')}>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18" /></svg>
                      Education Loan
                    </button>
                    <button type="button" className={styles.tab} aria-pressed={type === 'study'} onClick={() => switchTab('study')}>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3 2 9 2 12 0v-5" /></svg>
                      Study Abroad
                    </button>
                  </div>

                  <div className={styles.progress} aria-hidden="true">
                    <span className={styles.stepLabel}>
                      {step === 1 ? 'Step 1 of 2 · Your details' : `Step 2 of 2 · ${copy.step2}`}
                    </span>
                    <div className={styles.bar}><i style={{ width: step === 1 ? '50%' : '100%' }} /></div>
                  </div>

                  {step === 1 ? (
                    <fieldset className={styles.step} data-step="1">
                      <legend className={styles.srOnly}>Your details</legend>
                      <div className={styles.grid}>
                        <label className={`${styles.f} ${styles.full}`}>
                          <span>Student Name <i className={styles.req}>*</i></span>
                          <input ref={nameRef} name="name" type="text" autoComplete="name" placeholder="Enter full name" value={details.name} onChange={setDetail('name')} aria-invalid={invalid.has('name') || undefined} />
                        </label>
                        <label className={styles.f}>
                          <span>Phone Number <i className={styles.req}>*</i></span>
                          <span className={`${styles.preWrap} ${invalid.has('phone') ? styles.bad : ''}`}>
                            <b className={styles.pre}>+91</b>
                            <input name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="98765 43210" maxLength={11} value={details.phone} onChange={setDetail('phone')} aria-invalid={invalid.has('phone') || undefined} />
                          </span>
                        </label>
                        <label className={styles.f}>
                          <span>Email Address <i className={styles.req}>*</i></span>
                          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" value={details.email} onChange={setDetail('email')} aria-invalid={invalid.has('email') || undefined} />
                        </label>
                        <label className={`${styles.f} ${styles.full}`}>
                          <span>Your City <i className={styles.req}>*</i></span>
                          <input name="city" type="text" autoComplete="address-level2" placeholder="e.g. Patna" value={details.city} onChange={setDetail('city')} aria-invalid={invalid.has('city') || undefined} />
                        </label>
                      </div>
                      {error1 && <p className={styles.err} role="alert">{error1}</p>}
                      <button className={styles.btn} type="button" onClick={goNext}>Next →</button>
                    </fieldset>
                  ) : (
                    <>
                      <fieldset className={styles.step} data-step="2">
                        <legend className={styles.srOnly}>{copy.step2}</legend>
                        {qs.map((q) => (
                          <div key={`${type}-${q.key}`} className={styles.q}>
                            <span className={styles.ql} id={`lp-q-${q.key}`}>{q.label} <i className={styles.req}>*</i></span>
                            <div className={`${styles.chips} ${invalid.has(q.key) ? styles.bad : ''}`} role="radiogroup" aria-labelledby={`lp-q-${q.key}`}>
                              {q.options.map((opt) => (
                                <label key={opt} className={styles.chip}>
                                  <input
                                    type="radio"
                                    name={q.key}
                                    value={opt}
                                    checked={choices[q.key] === opt}
                                    onChange={() => {
                                      setChoices((c) => ({ ...c, [q.key]: opt }));
                                      setInvalid((s) => {
                                        const n = new Set(s);
                                        n.delete(q.key);
                                        return n;
                                      });
                                    }}
                                  />
                                  <span>{opt}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                      </fieldset>

                      <label className={styles.consent}>
                        <input type="checkbox" name="consent" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                        <span>
                          I agree that Students Choice and its lending and university partners may contact me by phone, WhatsApp, SMS and email about my enquiry. I have read the{' '}
                          <Link href="/privacy" onClick={close}>Privacy Policy</Link>.
                        </span>
                      </label>
                      {error2 && <p className={styles.err} role="alert">{error2}</p>}
                      <div className={styles.actions}>
                        <button className={`${styles.btn} ${styles.ghost}`} type="button" onClick={() => { clearErrors(); setStep(1); }}>← Back</button>
                        <button className={styles.btn} type="submit" disabled={sending}>{sending ? 'Sending…' : copy.submit}</button>
                      </div>
                    </>
                  )}

                  <div className={styles.trust}>
                    <span>🔒 Data kept private</span>
                    <span>✓ 100% free consultation</span>
                    <span>⚡ Quick call back</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </LeadContext.Provider>
  );
}
