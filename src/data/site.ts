// Single source of truth for NAP, social, and global facts. Edit here — everything (schema, footer, contact, llms.txt) reads from it.
export const site = {
  name: 'Wayco Construction, Inc.',
  shortName: 'Wayco Construction',
  tagline: 'Design-build general contractor serving San Diego County',
  url: (import.meta.env.PUBLIC_SITE_URL || 'https://www.waycoconstruction.com').replace(/\/$/, ''),
  launched: import.meta.env.PUBLIC_LAUNCH === 'true',
  gtmId: import.meta.env.PUBLIC_GTM_ID || '',
  ga4Id: import.meta.env.PUBLIC_GA4_ID || '',
  gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION || '',
  phone: '(619) 202-1031',
  phoneHref: 'tel:+16192021031',
  phoneE164: '+16192021031',
  email: 'info@waycoconstruction.com',
  address: {
    street: '1069 Graves Ave, Suite 106',
    city: 'El Cajon',
    region: 'CA',
    zip: '92021',
    country: 'US',
  },
  geo: { lat: 32.81007, lng: -116.96053 },
  hours: [
    { days: 'Monday–Friday', opens: '07:00', closes: '15:30', label: '7:00 AM – 3:30 PM' },
  ],
  hoursNote: 'Closed weekends. Showroom visits by appointment only.',
  // TODO(client): add CSLB license number(s) + classification(s), e.g. "CSLB #000000 · Class B"
  license: { number: '', classes: '' },
  yearsExperience: '25+',
  warranty: '1-year workmanship warranty',
  google: {
    placeId: 'ChIJVVVFwUlY2YARx2pZoaG0d1Q',
    cid: '6101990404546161351',
    rating: 4.8,
    reviewCount: 23,
    mapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJVVVFwUlY2YARx2pZoaG0d1Q',
    reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJVVVFwUlY2YARx2pZoaG0d1Q',
    writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJVVVFwUlY2YARx2pZoaG0d1Q',
    shareUrl: 'https://share.google/mu4jE4g2GMjDUy5D6',
  },
  social: [
    { name: 'Facebook', url: 'https://www.facebook.com/281752983625258', handle: 'Wayco' },
    { name: 'Instagram', url: 'https://www.instagram.com/waycoconstruction/', handle: '@waycoconstruction' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/wayco-construction-inc', handle: 'Wayco Construction, Inc.' },
  ],
  // Profiles to add when the client confirms them (Houzz, Yelp, BuildZoom, YouTube, Nextdoor...) — they flow into schema sameAs + footer automatically.
  extraProfiles: [] as { name: string; url: string }[],
  ctaPrimary: 'Get a Free Consultation',
  aduPriceRange: { low: 325000, high: 379000, label: '$325,000–$379,000' },
  logo: '/images/wayco-logo.png',
  ogDefault: '/images/og-default.jpg',
  founders: ['Josh Coit'],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}`;
export const allProfiles = [
  ...site.social.map((s) => s.url),
  ...site.extraProfiles.map((s) => s.url),
  site.google.mapsUrl,
];
