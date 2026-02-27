window.UI = {
  toNumber(value) {
    if (value == null) return NaN;
    const v = String(value).trim().replace(",", ".");
    return v === "" ? NaN : Number(v);
  },
  formatSmart(n) {
    if (!Number.isFinite(n)) return "—";
    const abs = Math.abs(n);
    const decimals = abs >= 100 ? 2 : abs >= 10 ? 3 : 4;
    return n.toFixed(decimals).replace(/\.?0+$/,"");
  },
  formatMoney(n) {
    if (!Number.isFinite(n)) return "—";
    return n.toFixed(2).replace(/\.?0+$/,"");
  },
  setResult(containerEl, text) {
    const valueEl = containerEl?.querySelector?.(".result-value");
    if (valueEl) valueEl.textContent = text;
  },
  setSub(containerEl, text) {
    const subEl = containerEl?.querySelector?.(".result-sub");
    if (subEl) subEl.textContent = text || "";
  },
  parseDateISO(value) {
    if (!value) return null;
    const d = new Date(value + "T00:00:00");
    return Number.isNaN(d.getTime()) ? null : d;
  },
  startOfDay(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  },
  diffYMD(from, to) {
    let years = to.getFullYear() - from.getFullYear();
    let months = to.getMonth() - from.getMonth();
    let days = to.getDate() - from.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonthDays = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
      days += prevMonthDays;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    return { years, months, days };
  }
};
