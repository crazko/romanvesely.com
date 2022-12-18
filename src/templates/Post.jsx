import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Meta } from '../layout/Meta';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { PostMeta } from '../components/PostMeta';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export default ({ data }) => {
  const { url } = useSiteMetadata();
  const { body, excerpt, frontmatter, fields, timeToRead } = data.mdx;
  const { title } = frontmatter;
  const { githubEdit, slug, date, dateLocal } = fields;

  return (
    <Content>
      <Meta title={title} description={excerpt} pathname={slug} image={`assets/posts/${slug}.png`} isArticle />

      <Container>
        <article className="article">
          <header>
            <h1 className="p-name">{title}</h1>
            <PostMeta
              canonicalURL={`${url}/${slug}`}
              date={date}
              dateLocal={dateLocal}
              readingTime={timeToRead}
              githubEdit={githubEdit}
            />
          </header>
          <div className="e-content">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
          <footer>
            <div className="post__signature">Roman</div>
          </footer>
        </article>
      </Container>
    </Content>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        tags
      }
      fields {
        slug
        date: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
        dateLocal: date(formatString: "DD. MMMM YYYY", locale: "en")
        githubEdit
      }
      timeToRead
    }
  }
`;
