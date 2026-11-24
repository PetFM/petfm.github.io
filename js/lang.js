(function () {
  const STORAGE_KEY = "petfm-lang";
  const SUPPORTED = ["sk", "en"];
  const root = document.documentElement;

  function syncButtons() {
    document.querySelectorAll(".seg button").forEach(btn => {
      btn.setAttribute("aria-pressed", btn.dataset.l === root.lang);
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    root.lang = lang;
    syncButtons();
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) root.lang = saved;
  } catch (e) {}

  document.addEventListener("DOMContentLoaded", () => {
    syncButtons();
    document.querySelectorAll(".seg button").forEach(btn => {
      btn.addEventListener("click", () => setLang(btn.dataset.l));
    });
  });
})();
