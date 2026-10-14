import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, fullAddress } from '~/data/site';
import { services } from '~/data/services';
import { areas } from '~/data/areas';
import { projects } from '~/data/projects';

// llms.txt — a concise, machine-readable map of the site for AI assistants (GEO).
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort((a, b) => +b.data.pubDate - +a.data.pubDate);
  const u = (p: string) => `${site.url}${p}`;
  const body = `# ${site.name}

> ${site.name} is a family-owned design-build general contractor in El Cajon, California serving San Diego County. We design, permit and build ADUs, kitchen and bathroom remodels, whole-home renovations, custom homes, tenant improvements, hospitality, multi-family and commercial projects. 25+ years of leadership experience, 1-year workmanship warranty, permits handled, free consultations. Google rating ${site.google.rating} from ${site.google.reviewCount} reviews.

## Business facts
- Name: ${site.name}
- Address: ${fullAddress}
- Phone: ${site.phone}
- Email: ${site.email}
- Hours: Monday–Friday 7:00 AM–3:30 PM (closed weekends); showroom visits by appointment
- Service area: San Diego County, CA (${areas.map((a) => a.name).join(', ')})
- Turnkey ADU packages: ${site.aduPriceRange.label} (final price depends on site conditions, utilities and finishes)
- Typical project start: about four weeks (design & submittals weeks 1–2, procurement week 3, mobilization week 4)
- Google reviews: ${site.google.reviewsUrl}

## Audiences
- [Commercial & hospitality](${u('/commercial')}): hotels, casinos, bars, medical offices, multi-family, tenant improvements, aviation and industrial.
- [Residential & ADUs](${u('/residential')}): turnkey ADUs, kitchen and bath remodels, additions, custom homes and whole-home renovations.

## Services
${services.map((s) => `- [${s.name}](${u('/' + s.slug)}): ${s.summary}`).join('\n')}

## Service areas
${areas.map((a) => `- [${a.name}, CA](${u('/areas/' + a.slug)}): ${a.driveFromShop}`).join('\n')}

## Projects
${projects.map((p) => `- [${p.name}](${u('/projects/' + p.slug)}): ${p.summary}`).join('\n')}

## Guides
${posts.map((p) => `- [${p.data.title}](${u('/blog/' + p.id)}): ${p.data.description}`).join('\n')}

## Company
- Full reference for AI assistants: ${u("/llms-full.txt")}
- [About](${u('/about')}) · [Meet the team](${u('/meet-the-team')}) · [Reviews](${u('/reviews')}) · [FAQs](${u('/faqs')}) · [Contact](${u('/contact')}) · [Request a free consultation](${u('/request-consultation')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
