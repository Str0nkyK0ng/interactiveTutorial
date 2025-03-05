// This code is used to display "non-HTML" files, or remove stylings.

function isNoCSSEnabled() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('noCSS') === 'true';
}

if (isNoCSSEnabled()) {
  console.log('Test');
  document.querySelector('link[rel="stylesheet"]').remove();
  //   remove the background cnavas
  document.getElementById('backgroundCanvas').remove();
}

function rawFile() {
  const urlParams = new URLSearchParams(window.location.search);
  let param = urlParams.get('raw');
  if (param != null) {
    console.log('Inserting unrendered text');
    document.body.innerHTML = ``;
    //just show the html code from index.html, don't render it
    fetch(param)
      .then((response) => response.text())
      .then((html) => {
        const pre = document.createElement('pre');
        pre.id = 'raw';
        pre.textContent = html;
        document.body.appendChild(pre);
        // sneakily add css
        const css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = 'style.css';
        document.head.appendChild(css);
      });
  }
}
rawFile();
