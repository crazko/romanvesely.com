import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import rehypeFigure from 'rehype-figure';

import { defineConfig } from 'astro/config';

import { data } from './src/data';
import { remarkReadingTime, remarkGithubEdit, remarkAddSignature } from './src/utils/remark.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],

  markdown: {
    remarkPlugins: [remarkReadingTime, remarkGithubEdit, remarkAddSignature],
    rehypePlugins: [rehypeFigure],
    syntaxHighlight: 'prism',
  },

  site: data.url,
});
