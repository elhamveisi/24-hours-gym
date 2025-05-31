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
