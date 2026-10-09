# Wayco Construction — Content Brief (source of truth for all copy)

## Who they are (VERIFIED facts — only use these)
- **Wayco Construction, Inc.** — family-owned, locally operated design-build general contractor, **El Cajon, CA** (1069 Graves Ave, Suite 106, El Cajon, CA 92021). Phone (619) 202-1031. Email info@waycoconstruction.com.
- Hours Mon–Fri 7:00 AM–3:30 PM. Closed weekends. **Showroom visits by appointment only**; showroom customers get **discounts on materials**.
- **25+ years of experience** (leadership team). President **Josh Coit**. Operations Manager Frank Coit (40+ years in construction: design-build, construction management, value engineering). Assistant PM / Account Manager Billie Carlton. Superintendents Rob Bledsoe and Dave Orr. Office: Justin Mowery.
- **1-year workmanship warranty. Free consultations. They handle ALL required permitting.**
- Typical project start: **within ~4 weeks** — weeks 1–2 design & submittals, week 3 material procurement & deliveries, week 4 mobilize on site.
- Service area: **San Diego County and nearby areas** (Google listing) — El Cajon HQ.
- **Google rating 4.8 from 23 reviews.** Reviewers praise communication, professionalism, craftsmanship, clear schedules, fair pricing, warranty response, and kitchens/bathrooms/major remodels/ADU-adjacent whole-home work. A fire-rebuild client (home destroyed Dec 2022, moved back in April 2024) and a La Jolla medical-office build-out client both left glowing reviews.
- Services offered: Design & planning (floor plans, interior design, project planning, site planning); New construction (ADUs, apartments, casinos, custom homes, hotels, multi-family); Project management (construction management, design-build, quality control, value engineering); Renovation & remodeling (apartments, bathrooms, casinos, exteriors, home additions, hotels, kitchens, multi-family, pools, tenant improvements, whole-home); Specialty construction (carports, decks, garages, metal buildings, patios, pools).
- Commercial portfolio: casinos (Pauma, The Point, Shoalwater Bay), hotels (Marriott, Residence Inn, SpringHill Suites, Holiday Inn, Montage Healdsburg), bars/lounges, airports/hangars (Medford, San Diego Intl), a historic monument (Cabrillo), healthcare (La Jolla dermatology/plastic-surgery office), retail, multi-family, pre-engineered metal buildings.
- Residential portfolio: ADUs, kitchens, bathrooms, whole-home remodels, decks/pergolas, fire rebuild.
- Material/showroom partners shown on site: MSI, Bedrosians Tile & Stone, Daltile, InnoCraft Cabinetry, VersaTube Building Systems, American Buildings Company, Associated Subcontractors Alliance.
- **ADU offer:** turnkey ground-up ADU packages. 1,200 sq ft, 2 bed / 1 bath flagship. Included: city/county pre-approved design plans, full engineering, complete construction, appliances & fixtures, move-in-ready. **Price range for packages: $325,000–$379,000** (site conditions, utilities, finishes can move the final number). Also five model plans A–E.

## DO NOT INVENT
- No license numbers, no awards, no statistics (e.g. "500 projects"), no dollar figures except the ADU range above, no named staff credentials beyond the above, no phone/addresses besides those above, no claims of "#1" or "best", no review quotes (the real ones live in src/data/reviews.json — you may reference themes only), no specific permit fees or exact timelines beyond the 4-week start and generic ranges ("typically several months"). Hedge anything regulatory ("check with your city or county", "California ADU law" in general terms only — e.g. California law generally allows ADUs on residential lots, and local rules vary).
- Don't claim they build outside San Diego County for residential. Commercial portfolio may include other states; just describe, don't promise.
- If a fact isn't above, write around it.

## Voice
Premium, confident, plain-spoken. A contractor who respects the homeowner's time and money. Short sentences. No hype words ("world-class", "unparalleled", "elevate", "seamless", "dream"). Warm but professional. First-person plural ("we"). Specifics over adjectives. Mention communication, clear schedules, permits handled, 1-year warranty, free consultation, single point of contact — those are real differentiators.

## AEO / GEO writing rules
- Every page opens its body with an **answer-first paragraph** (45–70 words) that directly answers "what is this / who does it / where" — written so an AI assistant could quote it verbatim.
- Use question-style H2/H3 where natural ("How long does an ADU take in San Diego?").
- FAQ answers 40–90 words, self-contained (no "as mentioned above"), start with the direct answer.
- Mention "San Diego County" + the specific city naturally, not stuffed. One primary keyword per page, secondary terms woven in.
- Entities to reinforce: Wayco Construction, El Cajon, San Diego County, design-build, general contractor, 1-year workmanship warranty, free consultation, permits handled.
- No fluff, no repetition between pages. Every page's `intro`, `included`, `process`, FAQs must be unique to that page.
- Plain text only in data fields (no markdown, no HTML), except blog posts (MDX/markdown).

## Photo keys
All photos live in `src/assets/photos/*.webp`. A photo "key" is the filename without `.webp`. Only use keys that exist (run `ls src/assets/photos`). Good keys by topic:
- ADUs: `elliot-adu-gallery-02..06`, `walker-adu-gallery-01..05`, `model-{a..e}-adu-gallery-0N`, `hero-adu-construction` (stock-ish exterior), `adu-gallery`…
- Kitchens: `additional-photos-remodel-gallery-01..25,57,59,60,61,67,68`, `405-cabinets-kitchen-remodel-gallery-01..06`, `riggins-kitchen-remodel-gallery-01..02`, `inc-hero-kitchen-remodeling`, `inc-kitchen-remodeling-hero-1-ref360501`
- Bathrooms: `bathroom-remodel-gallery-01..06`, `hero-bathroom-remodeling`
- Exterior/outdoor: `hero-deck-construction`, `hero-pool-construction`, `hero-pool-renovation`, `hero-carport-construction`, `hero-garage-construction`, `hero-exterior-improvements`, `hero-home-addition`, `hero-whole-home-renovation`, `hero-home-renovation-remodeling`, `inc-hero-design-build`, `content-new-construction03`
- Commercial: `casino-pauma-gallery-01..09`, `the-point-casino-gallery-*`, `humphry-s-pool-bar-gallery-*`, `residence-inn-cupertino-gallery-*`, `springhill-suites-gallery-*`, `marriott-gallery-*`, `montage-healdsburg-gallery-*`, `medford-airport-gallery-*`, `san-diego-international-gallery-*`, `retail-gallery-*`, `hero-tenant-improvement`, `inc-hero-hotel-construction`, `hero-hotel-renovation`, `hero-casino-renovation`, `inc-hero-casino-construction`, `inc-hero-multifamily-new-construction`, `inc-hero-multifamily-renovations`, `hero-apartment-renovation`, `hero-metal-building-construction`
- Process: `inc-hero-design-and-planning`, `content-design-and-planning03`, `inc-hero-construction-management-services`, `inc-hero-project-planning-services`, `inc-hero-site-planning-services`, `inc-hero-value-engineering`, `inc-hero-quality-control-services`, `inc-hero-interior-design`
(Run `ls src/assets/photos` to confirm exact names before using one.)

## Service slugs (final URLs are /{slug})
Residential: `adu-construction`, `kitchen-remodeling`, `bathroom-remodeling`, `whole-home-renovation`, `home-additions`, `custom-home-construction`, `exterior-improvements`, `outdoor-living` (decks, patios, pools, pool renovation), `garages-carports-metal-buildings`
Commercial: `commercial-construction`, `tenant-improvement`, `hospitality-and-gaming`, `multi-family-construction`
Process: `design-build`, `design-and-planning`, `construction-management`

## Project slugs (for relatedProjects)
elliot-adu, walker-adu, adu-model-plans, riggins-kitchen-remodel, custom-cabinet-kitchen-remodel, kitchen-remodel-portfolio, bathroom-remodel-portfolio, multi-family-projects, pauma-casino, the-point-casino, shoalwater-bay-casino, humphreys-pool-bar, bar-and-lounge-build-outs, hotel-projects, airport-hangars, medical-office-la-jolla, cabrillo-national-monument, retail-projects, metal-building-projects

## Area slugs (/areas/{slug})
el-cajon, la-mesa, santee, lakeside, spring-valley, lemon-grove, san-diego, chula-vista, poway, la-jolla, rancho-san-diego, alpine
