import type { Metadata } from 'next';
import { StudyUSAPage } from '@/components/study-abroad/StudyUSAPage';

export const metadata: Metadata = {
  title: "Study in USA | Student's Choice",
  description: 'Explore top universities in the USA, requirements, costs, and how Student\'s Choice can help you study in America.',
};

export default function USAPage() {
  return (
    <StudyUSAPage
      country="USA"
      tagline="Your Smart Path to Study in the USA"
      heroImage="/assets/images/studyabroadcountry/USA.webp"
      introParagraphs={[
        "The USA continues to be one of the most preferred destinations for international students because of its academic excellence, flexible education system, advanced research opportunities, and strong career pathways. From globally recognised universities to innovation-driven learning environments, students gain access to world-class education and international exposure.",
        "Studying in the USA is more than earning a degree — it's an opportunity to build industry-ready skills, connect with global professionals, and prepare for long-term career growth across diverse sectors."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "4,000+" },
        { key: "Globally Ranked Universities", value: "180+" },
        { key: "International Student Community", value: "1M+" },
        { key: "Main Intakes", value: "Fall / Spring / Summer*" },
        { key: "Average Tuition Fees", value: "$15,000 – $55,000+ / year" },
        { key: "Typical IELTS Range", value: "6.0 – 7.5*" },
        { key: "Part-Time Work Opportunity", value: "Up to 20 hrs/week*" },
        { key: "Post-Study Work Route", value: "OPT / STEM OPT extensions*" }
      ]}
      stats={[
        { value: '1M+', label: 'International Students' },
        { value: '4,000+', label: 'Universities' },
        { value: '3 Years', label: 'OPT Work Permit' },
        { value: '#1', label: 'Global Rank' },
      ]}
      highlights={[
        { icon: '🏛️', title: 'World\'s Best Universities', desc: 'MIT, Harvard, Stanford and 50+ globally ranked institutions.' },
        { icon: '🔬', title: 'Research & Innovation', desc: 'Cutting-edge labs and research grants across all disciplines.' },
        { icon: '💼', title: 'OPT Work Permit', desc: 'Up to 3 years of post-study work for STEM graduates.' },
        { icon: '🌍', title: 'Diverse Campus Life', desc: 'Vibrant multicultural environment with students from 190+ countries.' },
      ]}
      universities={[
        { name: 'Massachusetts Institute of Technology', rank: 'QS World Rank #1' },
        { name: 'Harvard University', rank: 'QS World Rank #4' },
        { name: 'Stanford University', rank: 'QS World Rank #5' },
        { name: 'University of California, Berkeley', rank: 'QS World Rank #10' },
        { name: 'Columbia University', rank: 'QS World Rank #22' },
        { name: 'New York University', rank: 'QS World Rank #38' },
      ]}
      requirements={[
        'Bachelor\'s degree or 12th grade pass with minimum 60% marks',
        'IELTS 6.5+ or TOEFL 80+ for English proficiency',
        'GRE / GMAT scores (program dependent)',
        'F-1 Student Visa with financial proof',
        'Statement of Purpose (SOP) and Letters of Recommendation',
        'Sufficient funds: approx. ₹25–50 Lakh per year',
      ]}
      avgCost="₹30–50 L/yr"
      workPermit="3 Yrs OPT"
      processingTime="2–4 Months"
    />
  );
}
