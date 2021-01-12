import React from 'react';
import { graphql, Link } from 'gatsby';
import { Meta } from '../layout/Meta';
import { Container } from '../components/Container';
import { Content } from '../components/Content';

export default ({
  data: {
    allMdx: { edges },
  },
}) => {
  const posts = normalizePosts(edges);

  return (
    <Content>
      <Meta />
      <Container>
        <p className="perex" style={{ color: 'var(--text-emphasized)' }}>
          Hi there! I'm Roman, a software engineer from Slovakia. I enjoy tinkering with the web, discovering new
          things, and an active lifestyle. I work for <a href="https://www.eleveo.com/">Elevēo</a>.
        </p>
        <p className="text-right">
          Read more <Link to="/about">about me</Link> or check <Link to="/now">what I'm doing now</Link>.
        </p>
        <h1>Content</h1>
        {Object.keys(posts)
          .sort()
          .reverse()
          .map(year => (
            <section key={year}>
              <h2>{year}</h2>
              {posts[year].map(({ fields: { date, dateLocal, slug }, frontmatter: { title, label } }) => (
                <article className="note" key={title}>
                  <div className="note__header">
                    <Link to={`/${slug}`}>{title}</Link>
                    {label && <span className="pill ml-4">{label}</span>}
                  </div>
                  <time dateTime={date} title={date} className="meta">
                    {dateLocal}
                  </time>
                </article>
              ))}
            </section>
          ))}
      </Container>
    </Content>
  );
};

const normalizePosts = edges =>
  edges.reduce((posts, edge) => {
    const date = edge.node.fields.date;
    const year = new Date(date).getFullYear();
    const yearPosts = posts[year] || [];

    yearPosts.push(edge.node);

    return { ...posts, [year]: yearPosts };
  }, {});

export const pageQuery = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }, sort: { fields: fields___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            label
          }
          fields {
            date
            dateLocal: date(formatString: "DD. MMMM", locale: "en")
            slug
          }
        }
      }
    }
  }
`;
