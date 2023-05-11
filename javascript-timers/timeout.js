const $heading = document.querySelector('h1');

function helloThere() {
  $heading.textContent = 'Hello There';
}

setTimeout(helloThere, 2000);
