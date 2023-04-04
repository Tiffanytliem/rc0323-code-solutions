let numberOfClicks = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

function countClicks(event) {
  numberOfClicks++;
  $clickCount.textContent = 'Clicks: ' + numberOfClicks;

  if (numberOfClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberOfClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberOfClicks < 10) {
    $hotButton.setAttribute('class', 'hot-button tepid');
  } else if (numberOfClicks < 13) {
    $hotButton.setAttribute('class', 'hot-button warm');
  } else if (numberOfClicks < 16) {
    $hotButton.setAttribute('class', 'hot-button hot');
  } else {
    $hotButton.setAttribute('class', 'hot-button nuclear');
  }
}

$hotButton.addEventListener('click', countClicks);
