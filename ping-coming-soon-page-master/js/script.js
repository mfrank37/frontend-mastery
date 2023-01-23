const form = document.querySelector('form');
const divEl = form.querySelector('div');
const errorEl = divEl.querySelector('p');
const emailEl = form.querySelector('input');
const button = form.querySelector('button');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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
  }
})
