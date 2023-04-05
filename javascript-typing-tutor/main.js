let counter = 1;
let element = document.querySelector('.char1');
let character = element.textContent;
let selector = 'char' + counter;

function check(event) {
  console.log(event);
  if (event.key === character) {
    element.className = selector + ' correct';
    counter++;
    selector = 'char' + counter;
    element = document.querySelector(`[class= ${selector}]`);
    element.className += ' type';
    character = element.textContent;
    window.addEventListener('keydown', check);
  } else {
    element.className = selector + ' incorrect';
    window.addEventListener('keydown', check);
  }
}

window.addEventListener('keydown', check);
