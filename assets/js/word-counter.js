(function () {
  const text = document.getElementById("wcText");
  const w = document.getElementById("wcWords");
  const c = document.getElementById("wcChars");
  const cns = document.getElementById("wcCharsNoSpaces");
  const clearBtn = document.getElementById("wcClear");
  const copyBtn = document.getElementById("wcCopy");

  function countWords(str) {
    const trimmed = str.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }

  function update() {
    const v = text.value || "";
    w.textContent = String(countWords(v));
    c.textContent = String(v.length);
    cns.textContent = String(v.replace(/\s/g, "").length);
  }

  text?.addEventListener("input", update);
  clearBtn?.addEventListener("click", () => { text.value = ""; update(); text.focus(); });

  copyBtn?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(text.value || "");
      copyBtn.textContent = "Copied";
      setTimeout(() => (copyBtn.textContent = "Copy"), 900);
    } catch {
      copyBtn.textContent = "Copy failed";
      setTimeout(() => (copyBtn.textContent = "Copy"), 900);
    }
  });

  update();
})();
