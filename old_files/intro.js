/* intro.js — typewriter intro with Enter-to-continue only */

(function () {
  const el = document.getElementById("typewriter");
  const yearSpans = document.querySelectorAll("#year");
  if (!el) return;

  // Footer year
  yearSpans.forEach((s) => (s.textContent = new Date().getFullYear()));

  // Phrases
  const phrases = [
    "Hello, I am Tom Sammon.",
    "Teacher, and Developer.",
    "I build cool portfolios !!"
  ];

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const typeSpeed = prefersReduced ? 0 : 45;
  const deleteSpeed = prefersReduced ? 0 : 28;
  const holdTime = prefersReduced ? 0 : 900;
  const loop = true;

  let i = 0, j = 0, deleting = false, navigating = false;

  function setText(t) {
    el.innerHTML = "";
    const span = document.createElement("span");
    span.textContent = t;
    span.className = "typewriter-text";
    el.appendChild(span);

    const caret = document.createElement("span");
    caret.className = "typewriter-caret";
    caret.setAttribute("aria-hidden", "true");
    el.appendChild(caret);
  }

  function tick() {
    const phrase = phrases[i];
    const visible = phrase.slice(0, j);
    setText(visible);

    if (!deleting && j === phrase.length) {
      if (!loop && i === phrases.length - 1) return;
      setTimeout(() => {
        deleting = true;
        requestAnimationFrame(step);
      }, holdTime);
      return;
    }

    if (deleting && j === 0) {
      deleting = false;
      i = (i + 1) % phrases.length;
    }

    const delay = deleting ? deleteSpeed : typeSpeed;
    if (delay === 0) {
      j = deleting ? 0 : phrase.length;
      requestAnimationFrame(step);
    } else {
      setTimeout(step, delay);
    }
  }

  function step() {
    j += deleting ? -1 : 1;
    tick();
  }

  // Start animation
  setText("");
  if (typeSpeed === 0 && deleteSpeed === 0) {
    setText(phrases[0]);
  } else {
    j = 1;
    tick();
  }

  // Navigate on Enter/Space
  function navigate() {
    if (navigating) return;
    navigating = true;
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "home.html";
    }, 150);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate();
    }
  });
})();
