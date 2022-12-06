const divEl = document.querySelector('form > div');
const errorEl = document.querySelector('form div p');
const emailEl = document.querySelector('input');
const button = document.querySelector('form button');
const emailRegex = /^[a-z][a-z1-9]+@[a-z1-9]+\.[a-z]{2,}$/i;

button.addEventListener('click', (e) => {
  e.preventDefault();
  divEl.classList.remove('error');

  const email = emailEl.value;

  if(email === '') {
    errorEl.innerHTML = "Whoops! It looks like you forgot to add your email";
    divEl.classList.add('error');
    return;
  }

  if(!emailRegex.test(email)) {
    errorEl.innerHTML = 'Please provide a valid email address';
    divEl.classList.add('error');
  } else {
    divEl.classList.remove('error');
  }
})
