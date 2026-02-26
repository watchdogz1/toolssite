(function () {
  const start = document.getElementById("ddStart");
  const end = document.getElementById("ddEnd");
  const btn = document.getElementById("ddBtn");
  const result = document.getElementById("ddResult");

  btn?.addEventListener("click", () => {
    const s = UI.parseDateISO(start?.value);
    const e = UI.parseDateISO(end?.value);

    if (!s || !e) {
      UI.setResult(result, "—");
      UI.setSub(result, "Pick both dates.");
      return;
    }

    const from = UI.startOfDay(s);
    const to = UI.startOfDay(e);

    const a = from <= to ? from : to;
    const b = from <= to ? to : from;

    const days = Math.floor((b - a) / 86400000);
    const { years, months, days: d } = UI.diffYMD(a, b);

    UI.setResult(result, `${years}y ${months}m ${d}d`);
    UI.setSub(result, `${days.toLocaleString()} total day(s).`);
  });
})();
