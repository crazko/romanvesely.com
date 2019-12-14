import React from 'react';
import { Time } from '../components/Time';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export const PostMeta = ({ date, dateLocal, readingTime, slug, githubEdit }) => {
  const { url } = useSiteMetadata();

  return (
    <ul className="post__meta">
      <li className="post__meta-item">
        <Time date={date}>{dateLocal}</Time>
      </li>

      {readingTime && <li className="post__meta-item">{readingTime} min</li>}

      <li className="post__meta-item">
        <span className="disqus-comment-count" data-disqus-url={`${url}/${slug}`}></span>
      </li>

      <li className="post__meta-item">
        <a href={githubEdit}>suggest an edit</a>
      </li>
    </ul>
  );
};
