import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

import { defineConfig } from 'astro/config';

import { data } from './src/data';
import { remarkReadingTime, remarkGithubEdit } from './src/utils/remark.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],

  markdown: {
    remarkPlugins: [remarkReadingTime, remarkGithubEdit],
    syntaxHighlight: 'prism',
  },

  site: data.url,
});
