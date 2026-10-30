import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.studentschoice.in';

const ROUTES = [
  '',
  '/about-us',
  '/contact-us',
  '/education-loan',
  '/beyond-rejection',
  '/partner',
  '/faqs',
  '/study-abroad/usa',
  '/study-abroad/uk',
  '/study-abroad/canada',
  '/study-abroad/australia',
  '/study-abroad/germany',
  '/study-abroad/france',
  '/study-abroad/ireland',
  '/study-abroad/italy',
  '/study-abroad/spain',
  '/study-abroad/switzerland',
  '/study-abroad/uae',
  '/study-abroad/new-zealand',
  '/study-abroad/singapore',
  '/study-abroad/india',
  '/tools/loan-eligibility',
  '/tools/emi-calculator',
  '/tools/currency-converter',
  '/tools/inr-usd-calculator',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
