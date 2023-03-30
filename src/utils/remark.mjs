import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export const remarkReadingTime = () => {
  return (tree, file) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    file.data.astro.frontmatter.readingTime = readingTime.text;
  };
};

export const remarkDate = () => {
  return (tree, file) => {
    const { history } = file;
    const re = /(\d{4})\/(\d{4}-\d{2}-\d{2})-([\w|-]*)/g;

    const matches = re.exec(history[0]);
    if (matches) {
      const date = matches[2];

      file.data.astro.frontmatter.date = date;
    }
  };
};

export const remarkGithubEdit = () => {
  return (tree, file) => {
    const { history, cwd } = file;

    file.data.astro.frontmatter.githubEdit = `https://github.com/crazko/romanvesely.com/tree/master${history[0].replace(
      cwd,
      ''
    )}`;
  };
};
