import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Meta } from '../layout/Meta';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { PostMeta } from '../components/PostMeta';
import { Perex } from '../components/Perex';
import { Sources } from '../components/Sources';
import { Discussion } from '../components/Discussion';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export default ({ data }) => {
  const { url } = useSiteMetadata();
  const { body, frontmatter, fields, timeToRead } = data.mdx;
  const { title, description, sources } = frontmatter;
  const { githubEdit, slug, date, dateLocal } = fields;

  const disqusConfig = {
    url: `${url}/${slug}`,
  };

  return (
    <Content>
      <Meta title={title} description={description} pathname={slug} image={`assets/posts/${slug}.png`} isArticle />

      <Container>
        <article className="article">
          <header>
            <h1>{title}</h1>
            <PostMeta
              date={date}
              dateLocal={dateLocal}
              readingTime={timeToRead}
              disqusConfig={disqusConfig}
              githubEdit={githubEdit}
            />
          </header>
          <Perex>{description}</Perex>
          <MDXRenderer>{body}</MDXRenderer>
          <footer>
            <div className="post__signature">Roman</div>
          </footer>
        </article>

        <Discussion disqusConfig={disqusConfig} />
      </Container>

      {sources && <Sources sources={sources} />}
    </Content>
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
