(function () {
  const type = document.getElementById("ucType");
  const value = document.getElementById("ucValue");
  const from = document.getElementById("ucFrom");
  const to = document.getElementById("ucTo");
  const btn = document.getElementById("ucBtn");
  const res = document.getElementById("ucRes");

  const length = [
    { key: "m",  name: "Meters (m)",       toBase: (v) => v,            fromBase: (v) => v },
    { key: "km", name: "Kilometers (km)",  toBase: (v) => v * 1000,     fromBase: (v) => v / 1000 },
    { key: "mi", name: "Miles (mi)",       toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 },
    { key: "ft", name: "Feet (ft)",        toBase: (v) => v * 0.3048,   fromBase: (v) => v / 0.3048 },
    { key: "in", name: "Inches (in)",      toBase: (v) => v * 0.0254,   fromBase: (v) => v / 0.0254 }
  ];

  const weight = [
    { key: "kg", name: "Kilograms (kg)", toBase: (v) => v,             fromBase: (v) => v },
    { key: "g",  name: "Grams (g)",      toBase: (v) => v / 1000,      fromBase: (v) => v * 1000 },
    { key: "lb", name: "Pounds (lb)",    toBase: (v) => v * 0.45359237,fromBase: (v) => v / 0.45359237 },
    { key: "oz", name: "Ounces (oz)",    toBase: (v) => v * 0.028349523125, fromBase: (v) => v / 0.028349523125 }
  ];

  function currentList() {
    return type.value === "weight" ? weight : length;
  }

  function setOptions(list) {
    from.innerHTML = "";
    to.innerHTML = "";
    for (const u of list) {
      const o1 = document.createElement("option");
      o1.value = u.key; o1.textContent = u.name;
      from.appendChild(o1);

      const o2 = document.createElement("option");
      o2.value = u.key; o2.textContent = u.name;
      to.appendChild(o2);
    }
    if (list === length) { from.value = "km"; to.value = "mi"; }
    if (list === weight) { from.value = "kg"; to.value = "lb"; }
  }

  type?.addEventListener("change", () => {
    setOptions(currentList());
    UI.setResult(res, "—");
    UI.setSub(res, "");
  });

  btn?.addEventListener("click", () => {
    const v = UI.toNumber(value.value);
    const list = currentList();
    const f = list.find(x => x.key === from.value);
    const t = list.find(x => x.key === to.value);

    if (!Number.isFinite(v) || !f || !t) {
      UI.setResult(res, "—");
      UI.setSub(res, "Enter a value and select units.");
      return;
    }

    const base = f.toBase(v);
    const out = t.fromBase(base);

    UI.setResult(res, UI.formatSmart(out));
    UI.setSub(res, `${UI.formatSmart(v)} ${f.key} = ${UI.formatSmart(out)} ${t.key}`);
  });

  setOptions(currentList());
})();
