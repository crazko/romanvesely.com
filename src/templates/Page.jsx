import React from 'react';
import { Meta } from '../layout/Meta';
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
      <h1>{title}</h1>
      <Content>{children}</Content>
    </>
  );
};
