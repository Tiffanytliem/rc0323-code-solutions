let count = 3;

function countDown() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}

const intervalID = setInterval(countDown, 1000);
