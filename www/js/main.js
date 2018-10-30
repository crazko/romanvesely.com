(function(doc){
  var moreButton = doc.getElementById('more');
  var moreText = doc.getElementById('more-hidden');

  moreButton.addEventListener('click', function(e) {
    if (moreText.className === '') {
      this.innerHTML = 'more';
      moreText.className = 'hidden';
    } else {
      this.innerHTML = 'less';
      moreText.className = '';
    }

    e.preventDefault();
  });
})(document);
