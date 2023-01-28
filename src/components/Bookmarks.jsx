import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Item = ({ title, url }) => {
  const source = new URL(url);
  const { hostname } = source;

  return (
    <a href={url} className="bookmark__link u-bookmark-of h-cite" target="_blank" rel="noopener noreferrer">
      <span className="bookmark__title p-name">{title}</span>
      <span className="bookmark__url">
        <span className="bookmark__by">by</span>
        {hostname}
      </span>
    </a>
  );
};

export const Bookmarks = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/src/bookmarks/" } }
        sort: { fields: fileAbsolutePath, order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            url
          }
        }
      }
    }
  `);

  return (
    <ul className="bookmarks h-feed">
      {data.allMdx.nodes.map(({ frontmatter: { url, title } }) => (
        <li key={url} className="bookmark h-entry">
          <Item title={title} url={url}></Item>
        </li>
      ))}
    </ul>
  );
};
