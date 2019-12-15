import React from 'react';
import { Time } from '../components/Time';
import { CommentCount } from 'gatsby-plugin-disqus';

export const PostMeta = ({ date, dateLocal, readingTime, githubEdit, disqusConfig }) => {
  return (
    <ul className="post__meta">
      <li className="post__meta-item">
        <Time date={date}>{dateLocal}</Time>
      </li>

      {readingTime && <li className="post__meta-item">{readingTime} min</li>}

      <li className="post__meta-item">
        <CommentCount config={disqusConfig} />
      </li>

      <li className="post__meta-item">
        <a href={githubEdit}>suggest an edit</a>
      </li>
    </ul>
  );
};
