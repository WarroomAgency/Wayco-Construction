export type Faq = { q: string; a: string };

export type ServiceCategory = 'residential' | 'commercial' | 'process';

export type Service = {
  slug: string;                 // URL: /{slug}
  name: string;                 // Nav / card label, e.g. "Kitchen Remodeling"
  category: ServiceCategory;
  summary: string;              // 1 sentence for cards (≤ 140 chars)
  seoTitle: string;             // ≤ 60 chars, no brand suffix (layout appends " | Wayco Construction")
  metaDescription: string;      // 140–158 chars
  h1: string;
  eyebrow: string;              // small label above H1
  heroPhoto: string;            // key from src/assets/photos (filename without .webp)
  answer: string;               // AEO "direct answer" paragraph, 45–70 words, plain text, answers "what is it / who does it / where"
  intro: string[];              // 2–3 paragraphs, plain text
  included: { title: string; text: string }[];       // 6–8 items
  whyWayco: { title: string; text: string }[];       // 3–4 items
  process: { title: string; text: string }[];        // 4–6 steps specific to this service
  costFactors?: { title: string; text: string }[];   // 4–5 factors that drive cost (NO invented prices)
  idealFor: string[];           // 4–6 bullets
  faqs: Faq[];                  // 5–6 questions, answers 40–90 words
  gallery: string[];            // photo keys (4–8)
  relatedServices: string[];    // slugs
  relatedProjects: string[];    // project slugs
  schemaServiceType: string;
  keywords: string[];
  oldSlugs?: string[];          // legacy Hibu URLs that 301 here
};

export type Area = {
  slug: string;                 // URL: /areas/{slug}
  name: string;                 // "La Mesa"
  county: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;               // AEO direct answer 45–70 words
  intro: string[];              // 2 paragraphs
  neighborhoods: string[];
  housingNotes: string;         // paragraph on local housing stock / typical projects (hedged, no stats)
  topServices: string[];        // service slugs, ordered
  localFaqs: Faq[];             // 4 Q&As
  driveFromShop: string;        // e.g. "About 10 minutes from our El Cajon office"
  nearby: string[];             // area slugs
  geo?: { lat: number; lng: number };
  heroPhoto: string;
};

export type Project = {
  slug: string;
  name: string;
  category: 'adu' | 'kitchen' | 'bathroom' | 'multi-family' | 'hospitality' | 'gaming' | 'healthcare' | 'aviation' | 'retail' | 'historic' | 'exterior' | 'industrial';
  sector: 'residential' | 'commercial';
  location?: string;
  summary: string;
  description: string[];
  scope: string[];
  hero: string;
  gallery: string[];
  services: string[];           // service slugs
  featured?: boolean;
};
