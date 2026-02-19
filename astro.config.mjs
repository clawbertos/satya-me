// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://clawbertos.github.io/satya-me/',
	base: '/satya-me',
	integrations: [mdx(), sitemap()],
});
