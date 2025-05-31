document.addEventListener('DOMContentLoaded', () => {
  // زمان انتظار به میلی‌ثانیه (اینجا: 3000 میلی‌ثانیه = 3 ثانیه)
  const loadingDuration = 3000;

  setTimeout(() => {
    // آدرس مقصد (تغییر بده به صفحه مورد نظر)
    window.location.href = "index.html";
  }, loadingDuration);
});
