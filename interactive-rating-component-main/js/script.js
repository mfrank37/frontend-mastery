const onSubmit = () => {
  let rated;
  try {
    rated = document.querySelector('.selected').innerHTML;
  } catch (e) {
    return;
  }
  const hide = document.querySelector('.rating-state');
  const reveal = document.querySelector('.thank-you-state');
  reveal.querySelector('.message .rated').innerHTML = rated;
  hide.classList.add('hide');
  reveal.classList.remove('hide');
}

const handleSelectRate = ({target}) => {
  try {
    document.querySelector('.selected').classList.remove('selected');
  } catch(e) {

  }
  target.classList.add('selected');
}

window.onload = () => {
  document.querySelectorAll('.rate').forEach(el => {
    el.addEventListener('click', handleSelectRate);
  })
  document.querySelector('input.btn.submit').addEventListener('click', onSubmit);
}
