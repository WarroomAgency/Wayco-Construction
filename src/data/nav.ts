import { residential, commercial, process } from './services';
export const mainNav = {
  groups: [
    { title: 'Residential', links: residential.map((s) => ({ name: s.name, href: `/${s.slug}` })) },
    { title: 'Commercial', links: commercial.map((s) => ({ name: s.name, href: `/${s.slug}` })) },
    { title: 'How We Build', links: process.map((s) => ({ name: s.name, href: `/${s.slug}` })) },
  ],
  about: [
    { name: 'About Wayco', href: '/about' },
    { name: 'Meet the Team', href: '/meet-the-team' },
    { name: 'Google Reviews', href: '/reviews' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Blog & Guides', href: '/blog' },
  ],
};
