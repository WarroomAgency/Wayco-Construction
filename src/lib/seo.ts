import { site, fullAddress, allProfiles } from '~/data/site';

export const abs = (path = '/') => (/^https?:/.test(path) ? path : `${site.url}${path === '/' ? '' : path}`);
export const clamp = (s: string, n: number) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…');

export const ids = {
  org: `${site.url}/#organization`,
  site: `${site.url}/#website`,
  business: `${site.url}/#localbusiness`,
};

export function localBusinessNode() {
  return {
    '@type': ['GeneralContractor', 'HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': ids.business,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: { '@type': 'ImageObject', url: abs(site.logo), width: 335, height: 180 },
    image: abs(site.ogDefault),
    description:
      'Family-owned design-build general contractor in El Cajon, CA serving San Diego County — ADUs, kitchen and bathroom remodels, whole-home renovations, custom homes, tenant improvements and commercial construction. 1-year workmanship warranty. Free consultations.',
    telephone: site.phoneE164,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.google.mapsUrl,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '15:30' },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'San Diego County, CA' },
      ...['El Cajon', 'La Mesa', 'Santee', 'Lakeside', 'Spring Valley', 'Lemon Grove', 'San Diego', 'Chula Vista', 'Poway', 'La Jolla', 'Rancho San Diego', 'Alpine'].map((n) => ({ '@type': 'City', name: n })),
    ],
    priceRange: '$$$',
    paymentAccepted: 'Check, Credit Card, Bank Transfer',
    currenciesAccepted: 'USD',
    sameAs: allProfiles,
    knowsAbout: ['ADU construction', 'Kitchen remodeling', 'Bathroom remodeling', 'Whole-home renovation', 'Design-build', 'Tenant improvement', 'Commercial construction', 'Construction management'],
    slogan: 'Design-build general contractor serving San Diego County',
    founder: { '@type': 'Person', name: 'Josh Coit', jobTitle: 'President' },
    parentOrganization: { '@id': ids.org },
    ...(site.license.number ? { identifier: { '@type': 'PropertyValue', name: 'CSLB License', value: site.license.number } } : {}),
  };
}

export function orgNode() {
  return {
    '@type': 'Organization',
    '@id': ids.org,
    name: site.name,
    url: site.url,
    logo: abs(site.logo),
    sameAs: allProfiles,
    contactPoint: [{ '@type': 'ContactPoint', telephone: site.phoneE164, contactType: 'customer service', areaServed: 'US', availableLanguage: ['English'] }],
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': ids.site,
    url: site.url,
    name: site.name,
    publisher: { '@id': ids.org },
    inLanguage: 'en-US',
    potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: `${site.url}/search?q={search_term_string}` }, 'query-input': 'required name=search_term_string' },
  };
}

export const breadcrumbNode = (crumbs: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
});

export const faqNode = (faqs: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export { fullAddress };
