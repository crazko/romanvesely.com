import React from 'react';
import { Meta } from '../layout/Meta';
import { Container } from '../components/Container';
import { Content } from '../components/Content';

export default ({
  children,
  pageContext: {
    frontmatter: { slug, title },
  },
}) => {
  return (
    <>
      <Meta title={title} pathname={slug} />
      <Content>
        <Container>
          <h1>{title}</h1>
          {children}
        </Container>
      </Content>
    </>
  );
};
