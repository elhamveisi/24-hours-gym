function generateMealPlan() {
    const goal = document.getElementById("goal").value;
    const mealList = document.getElementById("mealList");
    const mealPlan = document.getElementById("mealPlan");

    let meals = [];

    if (goal === "lose") {
        meals = [
            "صبحانه: جو دوسر + سفیده تخم‌مرغ + سیب",
            "میان‌وعده: خیار + چای سبز",
            "ناهار: سینه مرغ گریل + کینوا + سالاد سبز",
            "عصرانه: ماست کم‌چرب + گردو",
            "شام: سبزیجات بخارپز + تخم‌مرغ آب‌پز"
        ];
    } else if (goal === "gain") {
        meals = [
            "صبحانه: تخم‌مرغ کامل + نان سبوس‌دار + شیر",
            "میان‌وعده: موز + کره بادام‌زمینی",
            "ناهار: برنج قهوه‌ای + گوشت قرمز + سبزیجات",
            "عصرانه: اسموتی پروتئین + مغزها",
            "شام: ماکارونی سبوس‌دار + مرغ"
        ];
    } else if (goal === "maintain") {
        meals = [
            "صبحانه: تخم‌مرغ + پنیر کم‌چرب + میوه",
            "میان‌وعده: بادام + چای سبز",
            "ناهار: برنج + مرغ + سبزی",
            "عصرانه: ماست پروتئینی",
            "شام: املت سبزیجات + نان سبوس‌دار"
        ];
    }

    // پاک‌سازی و نمایش
    mealList.innerHTML = "";
    meals.forEach(meal => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = meal;
        mealList.appendChild(li);
    });

    mealPlan.classList.remove("d-none");

}