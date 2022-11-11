let inputFocus = document.querySelector('form input:first-child');
inputFocus.value = 'Jonathan ';
inputFocus.focus();

const submit = document.querySelector('form button');
const firstNameEl = document.querySelector('[name="First name"]');
const lastNameEl = document.querySelector('[name="Last name"]');
const emailEl = document.querySelector('[name=email]');
const passwordEl = document.querySelector('[name=password]');
const formEl = document.querySelector('main form');

function showError(element, errorMsg) {
  element.classList.add('error');
  let newEl = document.createElement('p');
  newEl.classList.add('error');
  if(errorMsg) newEl.innerHTML = `${errorMsg} <i class="error-icon"></i>`;
  formEl.insertBefore(newEl, element.nextSibling);
  element.setAttribute('placeholder', '');
}

function clearErrors() {
  firstNameEl.removeAttribute('data-error');
  firstNameEl.setAttribute('placeholder','First Name');

  lastNameEl.removeAttribute('data-error');
  lastNameEl.setAttribute('placeholder', 'Last Name');

  emailEl.removeAttribute('data-error');
  emailEl.setAttribute('placeholder', 'Email');

  passwordEl.removeAttribute('data-error');
  passwordEl.setAttribute('placeholder', 'Password');

  const errorEls = formEl.querySelectorAll('p.error');
  errorEls.forEach(el => el.remove());
  [firstNameEl, lastNameEl, emailEl, passwordEl].forEach(el => {
    el.classList.remove('error');
  })
}

function validateNames(element) {
  const value = element.value;
  let errors = [];
  if(!value) { // test if data added.
    errors.push(element.name + ' can not be empty');
  } else {
    const names = value.trim().split(' ');
    names.forEach(name => {
      if(/(?=[^a-z])/ig.test(name)) { // test characters.
        errors.push('Please use a-z and A-Z letters only')
      }
      if(!/[a-z]{2,}/i.test(value)) { // test if length is good
        errors.push('Please write more than 1 letter character');
      }
    })
  }
  if(errors.length > 0) showError(element, errors.join('. '));
}

function validateForm() {
  const email = emailEl.value;
  const emailRegex = /[a-z1-9]+@[a-z1-9]+\.[a-z]{2,}/i;
  const password = passwordEl.value;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
  validateNames(firstNameEl);
  validateNames(lastNameEl);
  // validate Email
  if(!email) {
    showError(emailEl, 'Email can not be empty');
  }else if(!emailRegex.test(email)) {
    showError(emailEl, 'Looks like this is not an email');
  }
  // validate Password
  if(!password) {
    showError(passwordEl, 'Password can not be empty');
  } else if(!passwordRegex.test(password)) {
    showError(passwordEl, 'Please use a strong password. 8 characters with 1 number, 1 special character, an upper and a lower character.');
  }
}

const submitHandler = (e) => {
  e.preventDefault();
  clearErrors();
  validateForm();
  // Then data can be sent to serve with API like: fetch('POST', {data})
}

submit.addEventListener('click', submitHandler);
