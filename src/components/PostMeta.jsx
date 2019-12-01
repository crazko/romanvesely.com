import React from 'react';

export const PostMeta = ({ date, dateLocal, readingTime }) => {
  return (
    <ul className="post__meta">
      <li className="post__meta-item">
        <time dateTime={date} title={date}>
          {dateLocal}
        </time>
      </li>

      {readingTime && <li className="post__meta-item">{readingTime} min</li>}

      <li className="post__meta-item">
        <span className="disqus-comment-count" data-disqus-url="{$site['url']}/{$post|link"></span>
      </li>

      <li className="post__meta-item">
        <a href="/#0">suggest an edit</a>
      </li>
    </ul>
  );
};
