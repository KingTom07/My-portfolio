// theme.js — dark/light switch with checkbox UI + persistence
(function () {
  const STORAGE_KEY = "theme"; // "dark" | "light"
  const root = document.documentElement;

  const toggles = () => Array.from(document.querySelectorAll("#theme-toggle"));

  function applyTheme(mode) {
    if (mode === "light") {
      root.setAttribute("data-theme", "light");
      localStorage.setItem(STORAGE_KEY, "light");
      syncUI(true);
    } else {
      root.removeAttribute("data-theme"); // dark is default
      localStorage.setItem(STORAGE_KEY, "dark");
      syncUI(false);
    }
  }

  function currentTheme() {
    return localStorage.getItem(STORAGE_KEY) || "dark";
  }

  function toggleTheme() {
    applyTheme(currentTheme() === "light" ? "dark" : "light");
  }

  function syncUI(isLight) {
    toggles().forEach((el) => {
      el.checked = isLight;
      el.setAttribute("aria-pressed", String(isLight));
      el.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    });
  }

  // Init on load
  applyTheme(currentTheme());

  // Checkbox changes
  document.addEventListener("change", (e) => {
    const input = e.target.closest("#theme-toggle");
    if (!input) return;
    applyTheme(input.checked ? "light" : "dark");
  });

  // Clicking anywhere on the label also toggles
  document.addEventListener("click", (e) => {
    const label = e.target.closest(".theme-switch");
    if (!label) return;
    // Wait a tick for the native label->checkbox toggle to occur, then sync
    setTimeout(() => {
      const checked = label.querySelector("#theme-toggle")?.checked;
      if (checked === true) applyTheme("light");
      if (checked === false) applyTheme("dark");
    }, 0);
  });

  // Keyboard shortcut: T to toggle
  window.addEventListener("keydown", (e) => {
    if ((e.key === "t" || e.key === "T") && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      toggleTheme();
    }
  });
})();
