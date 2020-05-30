import React from 'react';
import { graphql } from 'gatsby';

import { Meta } from '../layout/Meta';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Log } from '../components/Log';
import { Perex } from '../components/Perex';

const title = 'Learning Log';

export default ({
  data: {
    allMdx: { edges },
  },
}) => {
  const logs = normalizeLogs(edges);

  return (
    <Content>
      <Meta title={title} />
      <Container>
        <h1>{title}</h1>
        <Perex>
          Collection of interesting news, resources, tips or&nbsp;issues and their solutions that caught my attention.
        </Perex>
      </Container>
      <div className="logs" style={{ counterReset: `log ${logs.length + 1}` }}>
        {logs.map((log, i) => (
          <Log key={i}>{log}</Log>
        ))}
      </div>
    </Content>
  );
};

const normalizeLogs = edges => edges.map(log => log.node.body);

export const pageQuery = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/src/log/" } }, sort: { fields: fileAbsolutePath, order: DESC }) {
      edges {
        node {
          body
        }
      }
    }
  }
`;
