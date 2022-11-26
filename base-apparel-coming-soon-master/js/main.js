const form = document.querySelector('form');
const button = form.querySelector('form button');
const emailEl = form.querySelector('input');
const errorEl = form.querySelector('p');

const emailRegex = /^[a-z][a-z1-9]+@[a-z1-9]+\.[a-z]{2,}$/i;

button.addEventListener('click', (e) => {
  e.preventDefault();

  const email = emailEl.value;

  if(!email) {
    form.classList.add('error');
    errorEl.innerHTML = "The `input` field is empty";
    return;
  }
  
  if(!emailRegex.test(email)) {
    form.classList.add('error');
    errorEl.innerHTML = "The email address is not formatted correctly";
  } else {
    form.classList.remove('error');
    // Then email can be sent to serve with API like: fetch('POST', {email})
  }
});
