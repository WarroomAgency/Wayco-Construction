import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '~/data/site';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort((a, b) => +b.data.pubDate - +a.data.pubDate);
  const items = posts.map((p) => `<item><title>${esc(p.data.title)}</title><link>${site.url}/blog/${p.id}</link><guid isPermaLink="true">${site.url}/blog/${p.id}</guid><pubDate>${p.data.pubDate.toUTCString()}</pubDate><category>${esc(p.data.category)}</category><description>${esc(p.data.description)}</description></item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Wayco Construction Blog</title><link>${site.url}/blog</link><atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml"/><description>ADU, remodeling and construction guides for San Diego County.</description><language>en-us</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
