import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

import { data } from '../data';
import { getSlug } from '../utils/utils';

const parser = new MarkdownIt({
  html: true,
  linkfy: true,
});

const descriptionParser = new MarkdownIt();

export async function GET(context) {
  const logs = await getCollection('log');

  return rss({
    title: 'Roman Veselý: Learning Log',
    description: 'Collection of interesting news, resources, tips or issues and their solutions.',
    site: `${context.site}/log.xml`,
    items: logs
      .sort((a, b) => (a.slug > b.slug ? -1 : 1))
      .map((log) => {
        return {
          author: `${data.email} (${data.name})`,
          content: sanitizeHtml(parser.render(log.body), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
          }),
          title: log.slug,
          pubDate: log.data.publishedDate ?? new Date('2023-04-01'),
          description:
            sanitizeHtml(descriptionParser.render(log.body), {
              allowedTags: [],
            }).slice(0, 200) + '...',
          guid: `${context.site}log/${log.slug}`,
          link: `${context.site}log/${log.slug}`,
        };
      }),
    customData: ['<language>en-us</language>', `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`].join(''),
  });
}
