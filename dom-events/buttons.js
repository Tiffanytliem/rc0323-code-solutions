function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

const $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

const $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

const $dblclickButton = document.querySelector('.double-click-button');
$dblclickButton.addEventListener('dblclick', handleDoubleClick, false);
