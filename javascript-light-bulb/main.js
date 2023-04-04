
const element = document.querySelector('.lightbulb.off');

function lightSwitch(event) {
  if (document.querySelector('.lightbulb.off')) {
    element.className = 'lightbulb on';
    document.querySelector('.container.off').className = 'container on';
    console.log(element);
  } else {
    element.className = 'lightbulb off';
    document.querySelector('.container.on').className = 'container off';
    console.log(element);
  }
}

element.addEventListener('click', lightSwitch);
