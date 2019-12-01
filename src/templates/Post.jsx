import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Meta } from '../layout/Meta';
import { Content } from '../components/Content';
import { PostMeta } from '../components/PostMeta';
import { Perex } from '../components/Perex';
import { Sources } from '../components/Sources';

export default ({ data }) => {
  const { body, frontmatter, fields, timeToRead } = data.mdx;
  const { title, description, sources } = frontmatter;
  const { slug, date, dateLocal } = fields;

  return (
    <>
      <Meta title={title} description={description} pathname={slug} isArticle />
      <h1>{title}</h1>
      <Content>
        <PostMeta date={date} dateLocal={dateLocal} readingTime={timeToRead} />
        <Perex>{description}</Perex>

        <div className="article">
          <MDXRenderer>{body}</MDXRenderer>
        </div>

        <div className="post__signature">Roman</div>

        <div id="social" className="post__social"></div>
      </Content>

      {sources && <Sources sources={sources} />}
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
        tags
        sources
      }
      fields {
        slug
        date
        dateLocal: date(formatString: "DD. MMMM YYYY", locale: "en")
      }
      timeToRead
    }
  }
`;
