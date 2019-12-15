import React, { useState, useEffect, useRef } from 'react';
import { Disqus } from 'gatsby-plugin-disqus';

import { isRuntime } from '../utils/runtime';

export const Discussion = ({ disqusConfig }) => {
  const discussionButton = useRef();
  const [discussionStarted, setDiscussionStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadDiscussion();
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(discussionButton.current);

    return () => observer.disconnect();
  }, []);

  const loadDiscussion = () => {
    setDiscussionStarted(true);
  };

  return (
    isRuntime && (
      <div id="social" className="post__social">
        <div id="buttons">
          {!discussionStarted && (
            <button className="post__social-button" onClick={loadDiscussion} ref={discussionButton}>
              Add a comment
            </button>
          )}
        </div>
        {discussionStarted && <Disqus config={disqusConfig} />}
      </div>
    )
  );
};
