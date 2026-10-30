// Single source of truth for FAQ content: used by the /faqs page, the homepage
// FAQ section and the FAQPage JSON-LD, so the answers never go out of sync.

// An answer is a list of segments: plain text, a link, or a placeholder that is
// shown visibly marked on the page and left out of the JSON-LD.
export type FaqSegment = string | { text: string; href: string } | { placeholder: string };

export type Faq = { question: string; answer: FaqSegment[] };

export type FaqGroup = { title: string; faqs: Faq[] };

const FEE_MODEL_PLACEHOLDER = {
  placeholder: 'PLACEHOLDER: fee model to be confirmed by Students Choice.',
};

export const faqGroups: FaqGroup[] = [
  {
    title: 'General',
    faqs: [
      {
        question: 'What does Students Choice do?',
        answer: [
          'We help students plan studying abroad: choosing a country and university, applying for admission, arranging an education loan through our bank and NBFC partners, and preparing for the visa process. We are a consultancy and loan facilitator, not a lender.',
        ],
      },
      {
        question: 'Do I have to pay to talk to an advisor?',
        answer: ['Your first counselling call is free. ', FEE_MODEL_PLACEHOLDER],
      },
      {
        question: 'How soon will someone contact me?',
        answer: [
          'We aim to reply within 24 hours on working days (Mon–Sat, 10 am – 7 pm). WhatsApp is usually the quickest way to reach us.',
        ],
      },
    ],
  },
  {
    title: 'Education loans',
    faqs: [
      {
        question: 'Which banks and NBFCs do you work with?',
        answer: [
          'We work with 15+ lending partners, including Bank of Baroda, ICICI, Axis, Credila, Avanse, Auxilo, InCred, Tata Capital, Poonawalla, IDFC FIRST, Prodigy, Union Bank, PNB, YES Bank and Edgro. Which lenders suit you depends on your country, university, course and profile.',
        ],
      },
      {
        question: 'What is the difference between a collateral-free and a secured loan?',
        answer: [
          'A collateral-free (unsecured) loan does not need you to pledge property, but the amount is usually capped and the rate is often higher. A secured loan is backed by property or another security, which can allow a higher amount and a lower rate. The right choice depends on your course, university and the co-applicant’s profile.',
        ],
      },
      {
        question: 'Which documents will I need?',
        answer: [
          'Usually: your admission or offer letter, KYC of the student and co-applicant, income and bank statements of the co-applicant, academic records and test scores. Lenders may ask for more, and we share the exact list for your lender.',
        ],
      },
      {
        question: 'How long does approval take?',
        answer: [
          'It depends on the lender, the loan amount and how complete your documents are. We help you submit complete applications to avoid delays, but timelines and approval are decided by the lender.',
        ],
      },
      {
        question: 'Can you guarantee loan approval or a particular interest rate?',
        answer: [
          'No. Approval, loan amount, interest rate and fees are decided by the lender based on your profile. Rates shown on our site are indicative.',
        ],
      },
      {
        question: 'My loan was rejected. Can you help?',
        answer: [
          'Yes, we can review the reason for the rejection, suggest fixes such as documents or a change of co-applicant, and match you with lenders that may suit your profile. We cannot promise a different outcome. Share your case on our ',
          { text: 'Beyond Rejection', href: '/beyond-rejection' },
          ' page.',
        ],
      },
    ],
  },
  {
    title: 'Study abroad',
    faqs: [
      {
        question: 'Which countries can you help with?',
        answer: [
          'USA, UK, Canada, Australia, Germany, France, Ireland, Italy, Spain, Switzerland, UAE and New Zealand.',
        ],
      },
      {
        question: 'Do you guarantee admission or a visa?',
        answer: [
          'No. Universities decide admissions and immigration authorities decide visas. We help you prepare strong applications and understand the requirements. Rules change often, so always confirm on official websites.',
        ],
      },
      {
        question: 'Which intake should I apply for?',
        answer: [
          'It depends on the country and course, and our country pages list the main intakes. Apply early: some countries limit the number of study permits or places.',
        ],
      },
    ],
  },
  {
    title: 'Partners and your data',
    faqs: [
      {
        question: 'How does the partner programme work?',
        answer: [
          'Partners refer students to us, track their referrals and earn commission on successful cases. Commission rates and terms are shared when your application is approved. See the ',
          { text: 'partner page', href: '/partner' },
          '.',
        ],
      },
      {
        question: 'How do you use my personal information?',
        answer: [
          'Only to respond to your enquiry, advise you and, with your consent, share your details with the lenders and universities you choose to apply to. Read our ',
          { text: 'Privacy Policy', href: '/privacy' },
          ' for details.',
        ],
      },
    ],
  },
];

export const homeFaqs: Faq[] = [
  {
    question: 'What is the first step to study abroad?',
    answer: [
      'Start by understanding your profile: academic background, budget and career goals. Based on this, you can shortlist countries and universities. We help you start in the right direction so you don’t waste time or money.',
    ],
  },
  {
    question: 'How do I choose the right university and course?',
    answer: [
      'We look at your academic record, career goals and budget to build a personalised list of universities and courses, with insight on rankings, faculty and post-study opportunities.',
    ],
  },
  {
    question: 'What is the process for securing an education loan?',
    answer: [
      'Share your admission and co-applicant details. We compare suitable banks and NBFCs, help you with documents and track your application until the lender decides and disburses.',
    ],
  },
  {
    question: 'Do I need to take IELTS, TOEFL or other tests?',
    answer: [
      'Most universities ask for an English test such as IELTS, TOEFL or PTE. Depending on the course and country, you may also need the GRE or GMAT. We guide you on test preparation and possible waivers.',
    ],
  },
  {
    question: 'What support do you provide after I arrive?',
    answer: [
      'Help with accommodation, forex cards, opening a bank account (such as a UK bank account or a blocked account for Germany) and settling in during your first weeks.',
    ],
  },
  {
    question: 'Is your service free for students?',
    answer: ['Your first counselling call is free. ', FEE_MODEL_PLACEHOLDER],
  },
  {
    question: 'How much can I borrow without collateral?',
    answer: [
      'Many lenders offer collateral-free loans of up to about ₹75 lakh for eligible students and universities. The actual amount depends on your university, course and co-applicant’s profile.',
    ],
  },
  {
    question: 'Can you guarantee my loan approval?',
    answer: [
      'No. Lenders decide approval, amount and interest rate. We improve your chances by matching you with suitable lenders and helping you submit a complete application.',
    ],
  },
];

export function faqAnswerText(answer: FaqSegment[]): string {
  return answer
    .map((s) => (typeof s === 'string' ? s : 'href' in s ? s.text : ''))
    .join('')
    .trim();
}

export function faqPageJsonLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: faqAnswerText(f.answer) },
    })),
  };
}
