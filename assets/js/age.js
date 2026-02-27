(function () {
  const birth = document.getElementById("birth");
  const asof = document.getElementById("asof");
  const btn = document.getElementById("ageBtn");
  const result = document.getElementById("ageResult");

  btn?.addEventListener("click", () => {
    const b = UI.parseDateISO(birth?.value);
    const a = UI.parseDateISO(asof?.value) || new Date();

    if (!b) {
      UI.setResult(result, "—");
      UI.setSub(result, "Please pick a birth date.");
      return;
    }

    const from = UI.startOfDay(b);
    const to = UI.startOfDay(a);

    if (to < from) {
      UI.setResult(result, "—");
      UI.setSub(result, "The “as of” date must be after the birth date.");
      return;
    }

    const { years, months, days } = UI.diffYMD(from, to);
    UI.setResult(result, `${years}y ${months}m ${days}d`);

    const totalDays = Math.floor((to - from) / 86400000);
    UI.setSub(result, `That’s about ${totalDays.toLocaleString()} days.`);
  });
})();
