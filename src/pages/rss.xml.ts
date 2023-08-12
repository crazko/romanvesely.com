import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import MarkdownItFootnote from 'markdown-it-footnote';
import MarkdownItReplaceLink from 'markdown-it-replace-link';

import { data } from '../data';
import { getSlug } from '../utils/utils';

const parser = new MarkdownIt({
  html: true,
  linkfy: true, // TODO: Not all links are recognized
})
  .use(MarkdownItFootnote)
  .use(MarkdownItReplaceLink, {
    processHTML: true,
    replaceLink: (link: string) => (link.startsWith('/') ? `${data.url}${link}` : link),
  });

const descriptionParser = new MarkdownIt();

export async function get(context) {
  const posts = await getCollection('posts');

  return rss({
    title: 'Roman Veselý: Notes',
    description: data.description,
    site: context.site,
    items: posts
      .sort((a, b) => (a.slug > b.slug ? -1 : 1))
      .map((post, i) => {
        const slug = getSlug(post.slug);

        return {
          author: `${data.email} (${data.name})`,
          content: sanitizeHtml(parser.render(post.body), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
            allowedAttributes: false,
          }),
          title: post.data.title,
          pubDate: post.data.publishedDate,
          description:
            sanitizeHtml(descriptionParser.render(post.body), {
              allowedTags: [],
            }).slice(0, 200) + '...',
          guid: `${context.site}${slug}`,
          link: `${context.site}${slug}`,
        };
      }),
    customData: ['<language>en-us</language>', `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`].join(''),
  });
}
