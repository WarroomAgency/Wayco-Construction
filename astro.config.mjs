import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

const SITE = process.env.PUBLIC_SITE_URL || 'https://www.waycoconstruction.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'always',
    format: 'file',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap({
      filter: (page) => !/\/(thank-you|404|search)$/.test(page),
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  vite: { resolve: { alias: { '~': '/src' } } },
});
