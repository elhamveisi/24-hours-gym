document.addEventListener("DOMContentLoaded", function () {
    const errorText = document.getElementById('errorText');
    let flickerOn = true;
  
    setInterval(() => {
      flickerOn = !flickerOn;
      if (errorText) {
        errorText.style.opacity = flickerOn ? '1' : '0.4';
      }
    }, 250);
  });
  