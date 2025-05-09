
<!-- اسکریپت‌های لازم -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- اسکریپت برای ارسال نظر -->

    document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let text = e.target.querySelector('textarea').value;
    let stars = Array.from(e.target.querySelectorAll('.stars i')).filter(i => i.classList.contains('fas')).length;
    alert(`نظر شما: "${text}" \nامتیاز شما: ${stars} ستاره`);
});

    // ساعت زنده
    function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('fa-IR', { hour12: false });
    document.getElementById('clock').textContent = time;
}
    setInterval(updateClock, 1000);
    updateClock();



    // جاوااسکریپت برای درج هدر
    window.onload = function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header-container').innerHTML = data);
}

