# Launch checklist

## Needed from client
- [ ] CSLB license number + classification(s) → `site.license` in `src/data/site.ts` (renders in footer + schema)
- [ ] Confirm `info@waycoconstruction.com` works (taken from current site) and which inbox gets form leads
- [ ] Confirm claims: 25+ years, 1-year warranty scope, "we call within 1 business day", ~4-week start, showroom discounts
- [ ] Confirm ADU range ($325,000–$379,000) and which model plans A–E to feature (specs: sq ft / beds / baths)
- [ ] Confirm portfolio attribution (casinos, hotels, airports, Cabrillo, Montage, etc.) and supply project facts / permission
- [ ] Replace stock imagery with original photos & real video (currently Hibu stock + public project photos)
- [ ] Confirm spelling "Rob Bledsoe" (old site: "Blesdsoe")
- [ ] Additional profiles (Houzz, Yelp, BuildZoom, YouTube, Nextdoor) → `site.extraProfiles`
- [ ] Legal review of Privacy / Terms / Cookie pages

## Accounts
- [ ] GTM container → `PUBLIC_GTM_ID` (GA4 config, Google Ads conversion, Meta pixel inside GTM; triggers on `generate_lead` / `lead_thank_you`)
- [ ] Google Search Console property + verification token → `PUBLIC_GSC_VERIFICATION`
- [ ] Netlify form notifications → Josh (Jrcoit@waycoconstruction.com) + any others; spam filtering on
- [ ] Optional: GHL webhook/zap from Netlify Forms (contact + tag + opportunity)

## Domain cutover
1. Netlify → Domain management → add `www.waycoconstruction.com`; set DNS (A/CNAME) at registrar.
2. Env vars: `PUBLIC_SITE_URL=https://www.waycoconstruction.com`, `PUBLIC_LAUNCH=true` → redeploy.
3. Verify `/robots.txt` allows crawling, `/sitemap-index.xml` resolves, `/llms.txt` loads, legacy URLs 301 (`public/_redirects`).
4. Submit sitemap in Search Console; request indexing for home, ADU, top services.
5. Claim/refresh Google Business Profile: website URL, services, photos, Q&A; keep NAP identical to `site.ts`.
6. Run Lighthouse + `python3 scripts/audit.py`; test forms end-to-end; check GA4 DebugView events.
