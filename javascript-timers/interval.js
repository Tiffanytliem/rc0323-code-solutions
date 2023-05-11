const $countdownDisplay = document.querySelector('.countdown-display');

let count = 4;
const countID = null;

function countDown() {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countID);
  }
}

setInterval(countDown, 1000);
