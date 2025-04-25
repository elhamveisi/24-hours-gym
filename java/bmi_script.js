
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bmiForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    if (!weight || !height) {
      alert("لطفاً وزن و قد را وارد کنید.");
      return;
    }

    const bmi = weight / (height * height);
    let message = "";
    let cssClass = "";

    if (bmi < 18.5) {
      message = `BMI شما: ${bmi.toFixed(1)} - کم‌وزن`;
      cssClass = "danger";
    } else if (bmi >= 18.5 && bmi < 25) {
      message = `BMI شما: ${bmi.toFixed(1)} - نرمال`;
      cssClass = "normal";
    } else {
      message = `BMI شما: ${bmi.toFixed(1)} - اضافه‌وزن`;
      cssClass = "danger";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = message;
    resultDiv.className = `result mt-4 text-center ${cssClass}`;
  });
});
