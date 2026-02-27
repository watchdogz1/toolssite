(function () {
  const $ = (id) => document.getElementById(id);

  $("vatBtn1")?.addEventListener("click", () => {
    const net = UI.toNumber($("vatNet").value);
    const pct = UI.toNumber($("vatPct1").value);
    const res = $("vatRes1");

    if (!Number.isFinite(net) || !Number.isFinite(pct)) {
      UI.setResult(res, "—");
      UI.setSub(res, "Enter values.");
      return;
    }

    const vat = net * (pct / 100);
    const gross = net + vat;

    UI.setResult(res, UI.formatMoney(gross));
    UI.setSub(res, `VAT: ${UI.formatMoney(vat)}`);
  });

  $("vatBtn2")?.addEventListener("click", () => {
    const gross = UI.toNumber($("vatGross").value);
    const pct = UI.toNumber($("vatPct2").value);
    const res = $("vatRes2");

    if (!Number.isFinite(gross) || !Number.isFinite(pct) || pct <= -100) {
      UI.setResult(res, "—");
      UI.setSub(res, "Enter valid values.");
      return;
    }

    const net = gross / (1 + pct / 100);
    const vat = gross - net;

    UI.setResult(res, UI.formatMoney(net));
    UI.setSub(res, `VAT: ${UI.formatMoney(vat)}`);
  });
})();
