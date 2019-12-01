import React from 'react';
import talks from '../data/talks.yaml';

export default () =>
  talks.parameters.talks.map(talk => (
    <>
      {talk.image && <img src={talk.image} alt={talk.name} />}

      <h2>
        <a href={talk.url}>{talk.name}</a>
      </h2>
      <ul className="post__meta">
        <li className="post__meta-item">{talk.date}</li>
      </ul>

      <p>{talk.description}</p>
      <p>
        <a href={talk.url} className="link--more">
          Take a look
        </a>
      </p>
    </>
  ));
