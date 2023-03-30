import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import oembed from 'remark-oembed';
import remarkEmbedder from '@remark-embedder/core';
import oembedTransformer from '@remark-embedder/transformer-oembed';

import { defineConfig } from 'astro/config';

import { data } from './src/data';
import { remarkReadingTime, remarkDate, remarkGithubEdit } from './src/utils/remark.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],

  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      remarkDate,
      remarkGithubEdit,
      // [remarkEmbedder, { transformers: [oembedTransformer] }]
      //   oembed,
    ],
    syntaxHighlight: 'prism',
  },

  site: data.url,
});
