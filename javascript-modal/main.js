const openModal = document.querySelector('.button-open');
const closeModal = document.querySelector('.button-no');

function display(event) {
  document.querySelector('.modal').className = 'modal show';
}

function hide(event) {
  document.querySelector('.modal').className = 'modal hide';
}
openModal.addEventListener('click', display);
closeModal.addEventListener('click', hide);
