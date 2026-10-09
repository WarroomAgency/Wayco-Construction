# Wayco Construction — website

Astro 5 + Tailwind static site for **Wayco Construction, Inc.** (El Cajon, CA). Hosted on Netlify (staging) until the domain moves.

## Run
```bash
npm install
npm run dev        # http://localhost:4337 (or astro default)
npm run build      # astro build + Pagefind search index
python3 scripts/audit.py   # post-build SEO audit (titles, descriptions, H1s, JSON-LD, links)
```

## Where things live
| What | File |
|---|---|
| NAP, hours, social, Google IDs, license (blank), ADU price range | `src/data/site.ts` |
| Services (16) | `src/data/services-residential.ts`, `services-commercial.ts` |
| Service areas (12 city pages) | `src/data/areas.ts` |
| Projects / portfolio | `src/data/projects.ts` |
| Google reviews (verbatim) | `src/data/reviews.ts` |
| Team | `src/data/team.ts` |
| FAQs | `src/data/faqs.ts` |
| Blog | `src/content/blog/*.md` |
| Photos (key = filename w/o .webp) | `src/assets/photos/` |
| Legacy URL redirects | `public/_redirects` (regenerate: `npx tsx scripts/gen-redirects.ts`) |
| Content rules / verified facts | `docs/CONTENT-BRIEF.md` |
| Go-live steps | `docs/LAUNCH-CHECKLIST.md` |

## Environment variables (Netlify → Site settings)
See `.env.example`. **The site is `noindex` until `PUBLIC_LAUNCH=true`.**

## Tracking
Google Tag Manager + Consent Mode v2 (default denied, GPC honored). Set `PUBLIC_GTM_ID`. The site pushes these `dataLayer` events: `phone_click`, `email_click`, `cta_click`, `form_start`, `generate_lead`, `lead_thank_you`, `scroll_depth`, `review_link_click`, `social_click`, `directions_click`, `outbound_click`, `map_loaded`, `filter_projects`, `consent_update`.
Forms are Netlify Forms (`consultation`) and carry UTM/gclid/landing-page hidden fields for CRM routing.
