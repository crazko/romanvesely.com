import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Meta } from '../layout/Meta';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { PostMeta } from '../components/PostMeta';
import { Perex } from '../components/Perex';
import { Sources } from '../components/Sources';

// import comments from '../assets/js/comments';

export default ({ data }) => {
  const { body, frontmatter, fields, timeToRead } = data.mdx;
  const { title, description, sources } = frontmatter;
  const { githubEdit, slug, date, dateLocal } = fields;

  return (
    <>
      <Meta title={title} description={description} pathname={slug} isArticle />
      <Content>
        <h1>{title}</h1>
        <Container>
          <PostMeta date={date} dateLocal={dateLocal} readingTime={timeToRead} slug={slug} githubEdit={githubEdit} />
          <Perex>{description}</Perex>

          <div className="article">
            <MDXRenderer>{body}</MDXRenderer>
          </div>

          <div className="post__signature">Roman</div>

          <div id="social" className="post__social"></div>
        </Container>
      </Content>

      {sources && <Sources sources={sources} />}
      {/* <script dangerouslySetInnerHTML={{ __html: comments }} /> */}
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
        githubEdit
      }
      timeToRead
    }
  }
`;
