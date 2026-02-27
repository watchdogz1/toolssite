(function () {
  const amt = document.getElementById("loanAmt");
  const rate = document.getElementById("loanRate");
  const months = document.getElementById("loanMonths");
  const btn = document.getElementById("loanBtn");
  const res = document.getElementById("loanRes");

  btn?.addEventListener("click", () => {
    const P = UI.toNumber(amt.value);
    const annual = UI.toNumber(rate.value);
    const n = Math.floor(UI.toNumber(months.value));

    if (!Number.isFinite(P) || P <= 0 || !Number.isFinite(annual) || annual < 0 || !Number.isFinite(n) || n <= 0) {
      UI.setResult(res, "—");
      UI.setSub(res, "Enter valid values.");
      return;
    }

    const r = (annual / 100) / 12;
    let payment;

    if (r === 0) {
      payment = P / n;
    } else {
      const pow = Math.pow(1 + r, n);
      payment = P * (r * pow) / (pow - 1);
    }

    const totalPaid = payment * n;
    const totalInterest = totalPaid - P;

    UI.setResult(res, UI.formatMoney(payment));
    UI.setSub(res, `Total paid: ${UI.formatMoney(totalPaid)} • Interest: ${UI.formatMoney(totalInterest)}`);
  });
})();
