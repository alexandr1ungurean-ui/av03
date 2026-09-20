// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://av03.pages.dev',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // inline the (small) stylesheet to remove a render-blocking round trip
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
