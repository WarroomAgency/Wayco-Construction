#!/usr/bin/env node
// Optional: refresh review count + rating from the Google Places API (New). Requires GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in the environment.
// The Places API returns at most 5 reviews, so the curated full set lives in src/data/reviews.ts; this script prints the live rating/count so you can update src/data/site.ts.
const key = process.env.GOOGLE_PLACES_API_KEY, id = process.env.GOOGLE_PLACE_ID || 'ChIJVVVFwUlY2YARx2pZoaG0d1Q';
if (!key) { console.error('Set GOOGLE_PLACES_API_KEY to use this script.'); process.exit(1); }
const r = await fetch(`https://places.googleapis.com/v1/places/${id}`, { headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews' } });
if (!r.ok) { console.error(await r.text()); process.exit(1); }
const p = await r.json();
console.log(`Rating ${p.rating} from ${p.userRatingCount} reviews`);
console.log('Update site.google.rating / reviewCount in src/data/site.ts. Latest reviews returned by Google:');
for (const v of p.reviews ?? []) console.log(`- ${v.authorAttribution?.displayName} (${v.rating}★, ${v.relativePublishTimeDescription}): ${v.text?.text?.slice(0, 120)}…`);
