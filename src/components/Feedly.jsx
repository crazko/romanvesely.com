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
          <h3 className="feeds__category-title">{title}</h3>
          <ul className="feeds__list">
            {children.map(({ attributes: { title, htmlUrl, xmlUrl } }) => (
              <li key={xmlUrl}>
                <a href={xmlUrl} className="pill mr-4">
                  rss
                </a>
                {htmlUrl ? <a href={htmlUrl}>{title}</a> : title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
