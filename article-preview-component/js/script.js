function resetTooltip() {
  if(!window.showTooltip) return;
  const author = document.querySelector('.author');
  author.classList.toggle('in-tooltip');
  author.querySelector('div').remove();
  const img = document.createElement('img');
  img.src = 'images/avatar-michelle.jpg'; img.alt = 'Avatar Michelle';
  const div = document.createElement('div');
  div.className = 'details';
  div.innerHTML = `
    <b>Michelle Appleton</b>
    <span>28 Jun 2020</span>
  `;
  author.insertBefore(img, author.lastElementChild);
  author.insertBefore(div, author.lastElementChild);
  window.showTooltip = false;
}

function toggleTooltip(state) {
  if(window.innerWidth > 768) return;
  
  if(window.showTooltip) {
    resetTooltip();
  } else {
    const author = document.querySelector('.author');
    author.classList.toggle('in-tooltip');
    author.querySelector('img').remove();
    author.querySelector('div').remove();
    const div = document.createElement('div');
    div.innerHTML = `
      SHARE
      <a class="fb" href="https://facebook.com"></a>
      <a class="tw" href="https://twitter.com"></a>
      <a class="pi" href="https://pinterest.com"></a>
    `;
    author.insertBefore(div, author.lastElementChild);
    window.showTooltip = true;
  }
}

window.showTooltip = false;
window.addEventListener('resize', resetTooltip);
window.addEventListener('load', () => {
  let shareButton = document.querySelector('button.share');
  shareButton.addEventListener('click', toggleTooltip);
  shareButton.addEventListener('focusout', resetTooltip);
});
