import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gmblog.dlld319.asia',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
