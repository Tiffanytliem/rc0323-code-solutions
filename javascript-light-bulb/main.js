
const element = document.querySelector('.lightbulb');

function lightSwitch(event) {
  if (document.querySelector('.lightbulb.off')) {
    element.className = 'lightbulb on';
    document.querySelector('.container.off').className = 'container on';
  } else {
    element.className = 'lightbulb off';
    document.querySelector('.container.on').className = 'container off';
  }
}

element.addEventListener('click', lightSwitch);
