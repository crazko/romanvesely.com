import React from 'react';
import projects from '../data/projects.yaml';
import { Meta } from '../layout/Meta';
import { Container } from '../components/Container';
import { Content } from '../components/Content';

export default () => (
  <Content>
    <Meta title="Playground" />
    <Container>
      <h1>Playground</h1>
      {projects.parameters.projects.trivial.map(({ image, name, url, title, description, repository }) => (
        <>
          {image && (
            <a href={url}>
              <img src={image} alt={name} />
            </a>
          )}

          <h2>
            <a href={url}>{name}</a>
          </h2>
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          {repository && (
            <p>
              <a href={repository}>Look inside</a>
            </p>
          )}
        </>
      ))}
    </Container>
  </Content>
);
