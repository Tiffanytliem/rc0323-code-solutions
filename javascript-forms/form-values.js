const $contactForm = document.getElementById('contact-form');

function submit(event) {
  event.preventDefault();
  const info = {};
  info.name = $contactForm.elements.name.value;
  info.email = $contactForm.elements.email.value;
  info.message = $contactForm.elements.message.value;
  console.log(info);
  document.getElementById('contact-form').reset();
}

$contactForm.addEventListener('submit', submit);
