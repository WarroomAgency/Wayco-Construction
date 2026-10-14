import { residential, commercial, process } from './services';

export const mainNav = {
  commercial: {
    title: 'Commercial',
    href: '/commercial',
    groups: [
      { title: 'Commercial services', links: commercial.map((s) => ({ name: s.name, href: `/${s.slug}` })) },
      { title: 'How we build', links: process.map((s) => ({ name: s.name, href: `/${s.slug}` })) },
    ],
  },
  residential: {
    title: 'Residential & ADUs',
    href: '/residential',
    groups: [{ title: 'Residential services', links: residential.map((s) => ({ name: s.name, href: `/${s.slug}` })) }],
  },
  work: [
    { name: 'All projects', href: '/projects' },
    { name: 'Hospitality & gaming', href: '/projects/pauma-casino' },
    { name: 'Hotels', href: '/projects/hotel-projects' },
    { name: 'Aviation & industrial', href: '/projects/airport-hangars' },
    { name: 'Healthcare & retail', href: '/projects/medical-office-la-jolla' },
    { name: 'ADUs', href: '/projects/elliot-adu' },
    { name: 'Kitchens & baths', href: '/projects/kitchen-remodel-portfolio' },
  ],
  company: [
    { name: 'About Wayco', href: '/about' },
    { name: 'Meet the team', href: '/meet-the-team' },
    { name: 'Google reviews', href: '/reviews' },
    { name: 'Areas we serve', href: '/serving-area' },
    { name: 'FAQs', href: '/faqs' },
  ],
};
