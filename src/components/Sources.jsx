import React from 'react';

export const Sources = ({ sources }) => (
  <section className="post__sources">
    <div className="content">
      <h3>Sources</h3>
      <ul className="post__sources-list">
        {sources.map(([link, title]) => (
          <li key={link}>
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
