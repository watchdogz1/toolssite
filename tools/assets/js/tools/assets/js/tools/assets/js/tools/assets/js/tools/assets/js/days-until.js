(function () {
  const target = document.getElementById("duTarget");
  const btn = document.getElementById("duBtn");
  const result = document.getElementById("duResult");

  btn?.addEventListener("click", () => {
    const t = UI.parseDateISO(target?.value);
    if (!t) {
      UI.setResult(result, "—");
      UI.setSub(result, "Pick a target date.");
      return;
    }

    const today = UI.startOfDay(new Date());
    const to = UI.startOfDay(t);
    const diffDays = Math.floor((to - today) / 86400000);

    UI.setResult(result, diffDays.toLocaleString());
    UI.setSub(result, diffDays >= 0 ? "Days from today." : "That date is in the past.");
  });
})();
