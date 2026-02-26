(function () {
  const w = document.getElementById("bmiW");
  const h = document.getElementById("bmiH");
  const btn = document.getElementById("bmiBtn");
  const res = document.getElementById("bmiRes");

  function category(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obesity";
  }

  btn?.addEventListener("click", () => {
    const kg = UI.toNumber(w.value);
    const cm = UI.toNumber(h.value);

    if (!Number.isFinite(kg) || !Number.isFinite(cm) || kg <= 0 || cm <= 0) {
      UI.setResult(res, "—");
      UI.setSub(res, "Enter valid height and weight.");
      return;
    }

    const m = cm / 100;
    const bmi = kg / (m * m);
    UI.setResult(res, UI.formatSmart(bmi));
    UI.setSub(res, category(bmi));
  });
})();
