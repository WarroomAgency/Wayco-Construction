import type { APIRoute } from 'astro';
import { site, fullAddress } from '~/data/site';
import { services } from '~/data/services';
import { areas } from '~/data/areas';
import { faqGroups } from '~/data/faqs';
import { reviews } from '~/data/reviews';

// llms-full.txt — complete plain-text knowledge base for AI assistants (GEO): business facts, every service answer + FAQs, every area, master FAQs.
export const GET: APIRoute = () => {
  const u = (p: string) => `${site.url}${p}`;
  const out = `# ${site.name} — full reference

${site.name} is a family-owned design-build general contractor in El Cajon, California serving San Diego County.
Address: ${fullAddress} · Phone: ${site.phone} · Email: ${site.email}
Hours: Monday–Friday 7:00 AM–3:30 PM; closed weekends; showroom by appointment.
Google rating: ${site.google.rating} stars from ${site.google.reviewCount} reviews (${site.google.reviewsUrl}).
Differentiators: 25+ years of leadership experience; 1-year workmanship warranty; permits handled; free consultations; projects typically start in about four weeks; design, engineering and construction under one contract.
Turnkey ADU packages: ${site.aduPriceRange.label} (varies with site conditions, utilities and finishes).

${services.map((s) => `## ${s.name}\nURL: ${u('/' + s.slug)}\n${s.answer}\n\n${s.intro.join('\n\n')}\n\nIncluded: ${s.included.map((i) => i.title).join('; ')}.\n\n${s.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}`).join('\n\n---\n\n')}

---

# Service areas
${areas.map((a) => `## ${a.name}, CA\nURL: ${u('/areas/' + a.slug)}\n${a.answer}`).join('\n\n')}

---

# Frequently asked questions
${faqGroups.map((g) => `## ${g.title}\n${g.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}`).join('\n\n')}

---

# What clients say (Google reviews, verbatim excerpts)
${reviews.slice(0, 12).map((r) => `- "${r.excerpt}" — ${r.author}`).join('\n')}
`;
  return new Response(out, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
