((window, document) => {
  const createButtons = () => {
    const buttons = document.createElement('div');
    buttons.id = 'buttons';
    social.appendChild(buttons);
  };

  const createShare = () => {
    if (navigator.share === undefined) {
      return;
    }

    const button = document.createElement('button');
    button.classList.add('post__social-button');
    button.innerText = 'Share';
    button.addEventListener('click', () => {
      navigator
        .share({
          title: document.title,
          url: window.location.href
        })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing:', error));
    });

    const text = document.createElement('span');
    text.classList.add('post__social-share-text');
    text.innerText = ' & spread the word!';

    buttons.appendChild(button);
    buttons.appendChild(text);
  };

  const createDiscussionButton = () => {
    const button = document.createElement('button');
    button.classList.add('post__social-button');
    button.innerText = 'Add a comment';
    button.addEventListener('click', () => {
      loadDiscussion(button);
    });

    buttons.appendChild(button);

    return button;
  };

  const loadDiscussion = button => {
    const thread = document.createElement('div');
    thread.id = 'disqus_thread';
    social.appendChild(thread);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `//${disqusCode}.disqus.com/embed.js`;
    script.setAttribute('data-timestamp', +new Date());

    (document.head || document.body).appendChild(script);

    buttons.removeChild(button);
  };

  try {
    const social = document.getElementById('social');
    createButtons();
    createShare();

    const discussionButton = createDiscussionButton();

    // Open when linked directly
    if (window.location.hash.substr(0, 9) === '#comment-') {
      loadDiscussion(discussionButton);
    }

    // Loads comments immediately when it's needed
    if (window.IntersectionObserver) {
      const discussionButtonObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              loadDiscussion(discussionButton);
              observer.disconnect();
            }
          });
        },
        {
          threshold: 0.5
        }
      );

      discussionButtonObserver.observe(discussionButton);
    }
  } catch (error) {
    // console.log(error);
  }
})(window, document);
