// const createShare = () => {
//   if (navigator.share === undefined) {
//     return;
//   }

//   const button = document.createElement('button');
//   button.classList.add('post__social-button');
//   button.innerText = 'Share';
//   button.addEventListener('click', () => {
//     navigator
//       .share({
//         title: document.title,
//         url: window.location.href,
//       })
//       .then(() => console.log('Successful share'))
//       .catch(error => console.log('Error sharing:', error));
//   });

//   const text = document.createElement('span');
//   text.classList.add('post__social-share-text');
//   text.innerText = ' & spread the word!';

//   buttons.appendChild(button);
//   buttons.appendChild(text);
// };
