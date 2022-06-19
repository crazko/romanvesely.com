import React from 'react';
import { Time } from '../components/Time';
import { CommentCount } from 'gatsby-plugin-disqus';
import { MetaList } from '../components/MetaList';

export const PostMeta = ({ canonicalURL, date, dateLocal, readingTime, githubEdit, disqusConfig }) => (
  <MetaList>
    <a href={canonicalURL} className="text-secondary text-border-none u-url">
      <Time date={date}>
        <span role="img" aria-label="publish date">
          📅
        </span>{' '}
        {dateLocal}
      </Time>
    </a>

    <>
      <span role="img" aria-label="reading time">
        ⏳
      </span>{' '}
      {readingTime} min
    </>

    <>
      <span role="img" aria-label="comments count">
        💬
      </span>{' '}
      <CommentCount config={disqusConfig} />
    </>

    <>
      <span role="img" aria-label="modify">
        ✏
      </span>{' '}
      <a href={githubEdit}>suggest an edit</a>
    </>
  </MetaList>
);
