/* eslint-disable turbo/no-undeclared-env-vars */
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const SERVER_PORT = 3000;
// URL used for canonical links, sitemap and RSS in production builds.
// Override with SITE_URL env var (e.g. when moving to a custom domain).
const LIVE_URL = process.env.SITE_URL || 'https://vdloc.github.io';
// `astro dev` serves locally; every other command (build/preview) uses the live URL.
const isDev = process.argv.includes('dev');
const BASE_URL = isDev ? `http://localhost:${SERVER_PORT}` : LIVE_URL;

export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
  integrations: [
    sitemap(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
    
  ],
});
