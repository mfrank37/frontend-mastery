function resetTooltip() {
  if(!window.showTooltip) return;
  const address = document.querySelector('address');
  address.classList.toggle('in-tooltip');
  address.querySelector('div.share-links').remove();
  const img = document.createElement('img');
  img.src = 'images/avatar-michelle.jpg'; img.alt = 'Avatar Michelle';
  const div = document.createElement('div');
  div.className = 'details';
  div.innerHTML = `
    <strong class="author">Michelle Appleton</strong>
    <time datetime="2020-06-28">28 Jun 2020</time>
  `;
  address.insertBefore(img, address.lastElementChild);
  address.insertBefore(div, address.lastElementChild);
  window.showTooltip = false;
}

function toggleTooltip() {
  if(window.innerWidth > 768) return;
  
  if(window.showTooltip) {
    resetTooltip();
  } else {
    const address = document.querySelector('address');
    address.classList.toggle('in-tooltip');
    address.querySelector('img').remove();
    address.querySelector('.details').remove();
    const div = document.createElement('div');
    div.className = 'share-links';
    div.innerHTML = `
      SHARE
      <a class="fb" href="https://facebook.com" aria-label="Share to Facebook" title="Share to Facebook"></a>
      <a class="tw" href="https://twitter.com" aria-label="Share to Twitter" title="Share to Twitter"></a>
      <a class="pi" href="https://pinterest.com" aria-label="Share to Pinterest" title="Share to Pinterest"></a>
    `;
    address.insertBefore(div, address.lastElementChild);
    window.showTooltip = true;
  }
}

window.showTooltip = false;
window.addEventListener('resize', resetTooltip);
window.addEventListener('load', () => {
  let shareButton = document.querySelector('.share');
  shareButton.addEventListener('click', toggleTooltip);
  shareButton.addEventListener('focusout', resetTooltip);
});
