window.addEventListener('load', () => {
  const maps = document.querySelectorAll('img[usemap]');
  maps.forEach(img => {
    const init = () => {
      if (window.imageMapResize) {
        imageMapResize();
      } else {
        console.warn('imageMapResize library not found.');
      }
    };
    img.complete ? init() : img.addEventListener('load', init);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
      .then(res => res.text())
      .then(data => document.getElementById('header-container').innerHTML = data)
      .catch(err => console.error('خطا در لود هدر:', err));

  fetch('footer.html')
      .then(res => res.text())
      .then(data => document.getElementById('footer-container').innerHTML = data)
      .catch(err => console.error('خطا در لود فوتر:', err));
});