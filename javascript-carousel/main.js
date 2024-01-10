const $left = document.querySelector('.fa-chevron-left');
const $right = document.querySelector('.fa-chevron-right');
const $buttons = document.querySelector('.buttons');
const $icons = $buttons.querySelectorAll('i');
const $arrows = document.querySelector('.arrows');
const $images = $arrows.querySelectorAll('img');
let currentImg = 0;
let intervalID = null;

intervalID = setInterval(cycle, 3000);

$left.addEventListener('click', left);
$right.addEventListener('click', right);
$buttons.addEventListener('click', button);

function left(event) {
  clearInterval(intervalID);
  intervalID = null;
  currentImg--;
  if (currentImg < 0) {
    currentImg = 4;
  }
  for (let i = 0; i < $images.length; i++) {
    $images[j].className = 'hidden';
    $icons[j].classList.remove('fa-solid');
    $icons[j].classList.add('fa-regular');
  }
  $images[currentImg].className = '';
  $icons[currentImg].classList.remove('fa-regular');
  $icons[currentImg].classList.add('fa-solid');

  intervalID = setInterval(cycle, 3000);
}

function right(event) {
  clearInterval(intervalID);
  intervalID = null;
  currentImg++;
  if (currentImg === 5) {
    currentImg = 0;
  }
  for (let i = 0; i < $images.length; i++) {
    $images[i].className = 'hidden';
    $icons[i].classList.remove('fa-solid');
    $icons[i].classList.add('fa-regular');
  }
  $images[currentImg].className = '';
  $icons[currentImg].classList.remove('fa-regular');
  $icons[currentImg].classList.add('fa-solid');

  intervalID = setInterval(cycle, 3000);
}

function cycle(event) {
  currentImg++;
  if (currentImg === 5) {
    currentImg = 0;
  }
  for (let i = 0; i < $images.length; i++) {
    $images[i].className = 'hidden';
    $icons[i].classList.remove('fa-solid');
    $icons[i].classList.add('fa-regular');
  }
  $images[currentImg].className = '';
  $icons[currentImg].classList.remove('fa-regular');
  $icons[currentImg].classList.add('fa-solid');
}

function button(event) {
  clearInterval(intervalID);
  intervalID = null;
  if (event.target.tagName === 'I') {
    for (let i = 0; i < $icons.length; i++) {
      if (event.target.className === $icons[i].className) {
        currentImg = i;
        $images[i].className = '';
        $icons[i].classList.remove('fa-regular');
        $icons[i].classList.add('fa-solid');
      } else {
        $images[i].className = 'hidden';
        $icons[i].classList.remove('fa-solid');
        $icons[i].classList.add('fa-regular');
      }
    }
  }
  intervalID = setInterval(cycle, 3000);
}
