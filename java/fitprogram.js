function goToStep(stepNumber) {
  const steps = document.querySelectorAll('.form-step');
  steps.forEach(step => step.classList.remove('active'));
  document.getElementById('step' + stepNumber).classList.add('active');
}

function selectGender(gender) {
  alert("فرم با موفقیت تکمیل شد!\nجنسیت انتخاب‌شده: " + (gender === 'male' ? 'مرد' : 'زن'));
}
