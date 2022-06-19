import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Meta } from '../layout/Meta';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { PostMeta } from '../components/PostMeta';
import { Discussion } from '../components/Discussion';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export default ({ data }) => {
  const { url } = useSiteMetadata();
  const { body, excerpt, frontmatter, fields, timeToRead } = data.mdx;
  const { title } = frontmatter;
  const { githubEdit, slug, date, dateLocal } = fields;

  const disqusConfig = {
    url: `${url}/${slug}`,
  };

  return (
    <Content>
      <Meta title={title} description={excerpt} pathname={slug} image={`assets/posts/${slug}.png`} isArticle />

      <Container>
        <article className="article h-entry">
          <header>
            <h1 className="p-name">{title}</h1>
            <PostMeta
              canonicalURL={`${url}/${slug}`}
              date={date}
              dateLocal={dateLocal}
              readingTime={timeToRead}
              disqusConfig={disqusConfig}
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

        <Discussion disqusConfig={disqusConfig} />
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
