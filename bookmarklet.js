(function() {
  // get link title
  var title = document.getElementsByTagName('title')[0].innerHTML;
  title = encodeURIComponent(title);

  // get optional text selection
  // var selection = '';
  // if (window.getSelection) {
  //     selection = window.getSelection().toString();
  // } else if (document.selection && document.selection.type != 'Control') {
  //     selection = document.selection.createRange().text;
  // }
  // selection = encodeURIComponent(selection);

  // generate share URL
  var url = 'https://romanvesely.com/save/?title=' + title + '&url=' + encodeURIComponent(document.location.href);

  // open popup window to sharing form
  var opts = 'resizable,scrollbars,status=0,toolbar=0,menubar=0,titlebar=0,width=550,height=700,location=0';
  window.open(url, 'Bookmark this page', opts);
})();
