'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLeadForm } from '@/components/lead/LeadModal';
import styles from './LenderMarquee.module.css';

type Lender = { name: string; logo?: string };

// Left column: all banks (moves UP)
const BANKS: Lender[] = [
  { name: 'Bank of Baroda', logo: '/assets/images/Bob.svg' },
  { name: 'Punjab National Bank', logo: '/assets/images/Pnb.svg' },
  { name: 'Union Bank of India', logo: '/assets/images/Union.svg' },
  { name: 'ICICI Bank', logo: '/assets/images/Icici.svg' },
  { name: 'Axis Bank', logo: '/assets/images/Axis.svg' },
  { name: 'IDFC FIRST Bank', logo: '/assets/images/Idfc.svg' },
  { name: 'YES Bank', logo: '/assets/images/Yes.svg' },
];

// Right column: all NBFCs and global lenders (moves DOWN)
// Lenders without a logo file are shown as a text wordmark until a logo is added.
const NBFCS: Lender[] = [
  { name: 'Credila', logo: '/assets/images/Credila.svg' },
  { name: 'Avanse', logo: '/assets/images/Avanse.svg' },
  { name: 'Auxilo', logo: '/assets/images/Auxilo.svg' },
  { name: 'Tata Capital', logo: '/assets/images/Tata.svg' },
  { name: 'Poonawalla Fincorp', logo: '/assets/images/Poonawalla.svg' },
  { name: 'InCred' },
  { name: 'Prodigy' },
  { name: 'Edgro' },
  { name: 'Avanse Global', logo: '/assets/images/Avanse%20Global.svg' },
];

function LenderCard({ lender, duplicate }: { lender: Lender; duplicate?: boolean }) {
  return (
    <li
      className={duplicate ? `${styles.card} ${styles.dup}` : styles.card}
      aria-hidden={duplicate ? true : undefined}
    >
      {lender.logo ? (
        <Image
          src={lender.logo}
          alt={duplicate ? '' : lender.name}
          width={130}
          height={44}
          unoptimized
          loading="eager"
          className={styles.logo}
        />
      ) : (
        <span className={styles.wordmark}>{lender.name}</span>
      )}
    </li>
  );
}

function LenderColumn({
  title,
  lenders,
  direction,
  seconds,
}: {
  title: string;
  lenders: Lender[];
  direction: 'up' | 'down';
  seconds: number;
}) {
  const trackStyle = { '--duration': `${seconds}s` } as CSSProperties;
  return (
    <div className={styles.side}>
      <span className={styles.tag}>{title}</span>
      <div className={styles.viewport}>
        <ul
          className={`${styles.track} ${direction === 'up' ? styles.up : styles.down}`}
          style={trackStyle}
          aria-label={title}
        >
          {lenders.map((l) => (
            <LenderCard key={l.name} lender={l} />
          ))}
          {lenders.map((l) => (
            <LenderCard key={`dup-${l.name}`} lender={l} duplicate />
          ))}
        </ul>
      </div>
    </div>
  );
}

export function LenderMarquee() {
  const { open } = useLeadForm();
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-24" aria-labelledby="lender-marquee-title">
      <div className={`${styles.section} max-w-6xl mx-auto`}>
        <LenderColumn title="Banks" lenders={BANKS} direction="up" seconds={28} />

        <div className={styles.center}>
          <span className={styles.badge}>
            <i className={styles.pulse} aria-hidden="true" />
            15+ banks &amp; NBFCs
          </span>
          <h2 id="lender-marquee-title" className={styles.title}>
            One Profile. <span className={styles.highlight}>Multiple Loan Offers.</span> Best Decision.
          </h2>
          <p className={styles.text}>
            At Students Choice, we help you compare, evaluate and secure the most suitable education
            loan for your study abroad journey.
          </p>
          <ol className={styles.steps}>
            <li><b>1</b>Share your profile</li>
            <li><b>2</b>We match lenders</li>
            <li><b>3</b>You pick the best</li>
          </ol>
          <div className={styles.buttons}>
            <button type="button" className={styles.primary} onClick={() => open('Compare My Loan Offers')}>
              Compare My Loan Offers →
            </button>
            <Link className={styles.secondary} href="/tools/loan-eligibility">
              Check Eligibility
            </Link>
          </div>
          <p className={styles.note}>Secured and collateral-free options · Help with every document</p>
        </div>

        <LenderColumn title="NBFCs & Global Lenders" lenders={NBFCS} direction="down" seconds={36} />
      </div>
    </section>
  );
}
