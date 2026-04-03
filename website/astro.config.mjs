import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://systemsecurity-uiuc.github.io',
  base: '/safeiot-website',
});

