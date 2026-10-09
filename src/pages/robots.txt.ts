import type { APIRoute } from 'astro';
import { site } from '~/data/site';

// Staging (PUBLIC_LAUNCH != "true") blocks everything so the Netlify preview never competes with the live Hibu site.
// At launch: set PUBLIC_LAUNCH=true + PUBLIC_SITE_URL=https://www.waycoconstruction.com in Netlify and redeploy.
export const GET: APIRoute = () => {
  const body = site.launched
    ? `# Wayco Construction — crawl policy
User-agent: *
Allow: /
Disallow: /thank-you
Disallow: /search

# AI search & answer engines are welcome — we want to be cited.
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Bingbot
Allow: /

Sitemap: ${site.url}/sitemap-index.xml
`
    : `# STAGING — not for indexing\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
