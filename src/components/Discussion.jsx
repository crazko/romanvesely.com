import React, { useState, useEffect, useRef } from 'react';

const isRuntime = () => typeof window !== `undefined`;

export const Discussion = ({ target }) => {
  const discussionButton = useRef();
  const [discussionStarted, setDiscussionStarted] = useState(null);

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

  const loadDiscussion = async () => {
    const wm = await fetch(`https://webmention.io/api/mentions.jf2?target=${target}`).then(response => response.json());

    const data = { likes: [], replies: [], mentions: [] };

    wm.children.forEach(entry => {
      switch (entry['wm-property']) {
        case 'like-of':
          data.likes.push(entry);
          break;

        case 'mention-of':
          data.mentions.push(entry);
          break;

        case 'in-reply-to':
          data.replies.push(entry);

          break;

        default:
          break;
      }
    });

    setDiscussionStarted(data);
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
        {discussionStarted && (
          <div>
            <h3>Likes</h3>
            <ul className="wm wm--likes">
              {discussionStarted.likes.map(entry => (
                <li key={entry['wm-id']}>
                  <a href={entry.author.url}>
                    <img title={entry.author.name} src={entry.author.photo} />
                  </a>
                </li>
              ))}
            </ul>
            <h3>Replies</h3>
            <ul className="wm">
              {discussionStarted.replies.map(entry => (
                <li key={entry['wm-id']}>
                  <a href={entry.author.url}>
                    <img title={entry.author.name} src={entry.author.photo} />
                  </a>
                  <div dangerouslySetInnerHTML={{ __html: entry.content.html }}></div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  );
};
