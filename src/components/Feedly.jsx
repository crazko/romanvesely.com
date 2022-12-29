import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Feedly = () => {
  const data = useStaticQuery(graphql`
    {
      feedlyXml(name: { eq: "body" }) {
        xmlChildren {
          attributes {
            title
          }
          children {
            attributes {
              htmlUrl
              xmlUrl
              title
            }
          }
        }
      }
    }
  `);

  return (
    <div className="feeds" id="what-do-i-read">
      {data.feedlyXml.xmlChildren.map(({ attributes: { title }, children }) => (
        <div className="feeds__category" key={title}>
          <h2 className="feeds__category-title">{title}</h2>
          <ul className="feeds__list">
            {children.map(({ attributes: { title, htmlUrl, xmlUrl } }) => (
              <li className="feeds__item" key={xmlUrl}>
                <a href={xmlUrl} className="feeds__item-rss pill mr-4">
                  rss
                </a>
                <span className="feeds__item-title">{htmlUrl ? <a href={htmlUrl}>{title}</a> : title}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
