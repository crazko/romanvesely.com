import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const Log = ({ children, id }) => {
  const data = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/log/" } }) {
        edges {
          node {
            body
            fileAbsolutePath
          }
        }
      }
    }
  `);

  if (children) {
    return (
      <div className="log">
        <MDXRenderer>{children}</MDXRenderer>
      </div>
    );
  }

  if (id) {
    const edge = data.allMdx.edges.find(edge => edge.node.fileAbsolutePath.endsWith(`${id}.md`));

    if (!edge) {
      throw Error(`Log entry "${id}" not found`);
    }

    return <Log>{edge.node.body}</Log>;
  }

  return null;
};
