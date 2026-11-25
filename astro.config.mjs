// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://socoocapk.org',
  integrations: [sitemap()],
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  build: { inlineStylesheets: 'auto' },
  image: { layout: 'constrained' },
});
