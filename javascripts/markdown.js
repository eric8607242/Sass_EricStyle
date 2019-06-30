window.onload = function run() {
  var text = document.getElementById('j-markdown').value,
      target = document.getElementById('c-article__content'),
      converter = new showdown.Converter(),
      html = converter.makeHtml(text);

  var elem =  document.getElementById('j-markdown');
    elem.parentNode.removeChild(elem);
    
    target.innerHTML = html;
}
