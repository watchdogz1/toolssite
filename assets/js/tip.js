(function () {
  const bill = document.getElementById("tipBill");
  const pct = document.getElementById("tipPct");
  const people = document.getElementById("tipPeople");
  const btn = document.getElementById("tipBtn");
  const res = document.getElementById("tipRes");

  btn?.addEventListener("click", () => {
    const b = UI.toNumber(bill.value);
    const p = UI.toNumber(pct.value);
    const n = Math.floor(UI.toNumber(people.value));

    if (!Number.isFinite(b) || b < 0 || !Number.isFinite(p) || p < 0) {
      UI.setResult(res, "—");
      UI.setSub(res, "Enter valid values.");
      return;
    }

    const tip = b * (p / 100);
    const total = b + tip;

    UI.setResult(res, UI.formatMoney(total));
    if (Number.isFinite(n) && n > 0) {
      UI.setSub(res, `Tip: ${UI.formatMoney(tip)} • Per person: ${UI.formatMoney(total / n)}`);
    } else {
      UI.setSub(res, `Tip: ${UI.formatMoney(tip)}`);
    }
  });
})();
