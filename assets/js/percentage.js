(function () {
  const $ = (id) => document.getElementById(id);

  function pctOf(x, y) { return (x / 100) * y; }

  $("p1btn")?.addEventListener("click", () => {
    const x = UI.toNumber($("p1x").value);
    const y = UI.toNumber($("p1y").value);
    const out = pctOf(x, y);
    UI.setResult($("p1result"), Number.isFinite(out) ? UI.formatSmart(out) : "—");
  });

  $("p2btn")?.addEventListener("click", () => {
    const orig = UI.toNumber($("p2orig").value);
    const pct = UI.toNumber($("p2pct").value);
    const out = orig * (1 + pct / 100);
    UI.setResult($("p2result"), Number.isFinite(out) ? UI.formatSmart(out) : "—");
  });

  $("p3btn")?.addEventListener("click", () => {
    const orig = UI.toNumber($("p3orig").value);
    const pct = UI.toNumber($("p3pct").value);
    const out = orig * (1 - pct / 100);
    UI.setResult($("p3result"), Number.isFinite(out) ? UI.formatSmart(out) : "—");
  });
})();
