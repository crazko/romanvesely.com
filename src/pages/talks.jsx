import React from 'react';
import talks from '../data/talks.yaml';

import { Meta } from '../layout/Meta';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Time } from '../components/Time';

export default () => (
  <Content>
    <Meta title="Talks" />
    <h1>Talks</h1>
    <Container>
      {talks.parameters.talks.map(({ image, name, date, url, description }) => (
        <>
          {image && (
            <a href={url}>
              <img src={image} alt={name} />
            </a>
          )}

          <h2>
            <a href={url}>{name}</a>
          </h2>

          <Time date={date}>{date}</Time>

          <p dangerouslySetInnerHTML={{ __html: description }} />
          <p>
            <a href={url} className="link--more">
              Take a look
            </a>
          </p>
        </>
      ))}
    </Container>
  </Content>
);
