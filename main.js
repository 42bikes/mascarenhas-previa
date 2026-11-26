/* Mascarenhas Rent a Car e Motos — interações da página */

(function () {
  "use strict";

  function toArray(list) {
    return Array.prototype.slice.call(list);
  }

  /* ---------- menu ---------- */

  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav");

  function closeNav() {
    if (!header) return;
    header.classList.remove("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  if (nav) {
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  /* ---------- progresso de leitura ---------- */

  var readBar = document.getElementById("read-bar");
  var progressFrame = null;

  function paintProgress() {
    progressFrame = null;
    if (!readBar) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    readBar.style.transform = "scaleX(" + ratio + ")";
  }

  function queueProgress() {
    if (progressFrame === null) progressFrame = requestAnimationFrame(paintProgress);
  }

  window.addEventListener("scroll", queueProgress, { passive: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1080) closeNav();
    queueProgress();
  });
  paintProgress();

  /* ---------- movimento reduzido ---------- */

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Acende o .is-in quando o elemento aparece na tela; sem animação
     (ou sem IntersectionObserver) acende na hora. */
  function onVisible(elements, options) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, options);
    elements.forEach(function (el) { io.observe(el); });
  }

  /* ---------- reveal em cascata ---------- */

  var revealables = toArray(document.querySelectorAll(".reveal"));
  var counters = new Map();

  revealables.forEach(function (el) {
    var step = Math.min(counters.get(el.parentElement) || 0, 6);
    counters.set(el.parentElement, step + 1);
    el.style.setProperty("--i", step);
  });

  onVisible(revealables, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

  /* ---------- estrada que se desenha ---------- */

  var road = document.querySelector(".road-band");
  if (road) onVisible([road], { threshold: 0.45 });

  /* ---------- títulos em máscara (uma linha por vez) ----------
     O h2 é quebrado em .ln > .ln-in para as linhas subirem da máscara.
     O i18n troca o textContent do h2 inteiro; quando isso acontece o h2
     não tem mais .ln, então o texto do DOM é lido como a fonte nova. */

  var headings = toArray(document.querySelectorAll("main h2"));
  var headingText = new Map();

  function splitHeading(el) {
    var words = headingText.get(el).split(" ");
    var lines = [];
    var top = -Infinity;

    /* 1a passada: uma palavra por span, só para descobrir onde a linha quebra */
    el.textContent = "";
    words.forEach(function (word, i) {
      var probe = document.createElement("span");
      probe.textContent = word;
      el.appendChild(probe);
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
      var y = Math.round(probe.offsetTop);
      if (Math.abs(y - top) > 3) {
        lines.push([]);
        top = y;
      }
      lines[lines.length - 1].push(word);
    });

    /* 2a passada: remonta como linhas mascaradas */
    el.textContent = "";
    lines.forEach(function (lineWords, i) {
      var line = document.createElement("span");
      var inner = document.createElement("span");
      line.className = "ln";
      line.style.setProperty("--i", i);
      inner.className = "ln-in";
      inner.textContent = lineWords.join(" ");
      line.appendChild(inner);
      el.appendChild(line);
      if (i < lines.length - 1) el.appendChild(document.createTextNode(" "));
    });
  }

  function refreshHeadings() {
    headings.forEach(function (el) {
      if (!el.querySelector(".ln")) {
        headingText.set(el, el.textContent.replace(/\s+/g, " ").trim());
      }
      var revealed = el.classList.contains("is-in");
      splitHeading(el);
      if (revealed) el.classList.add("is-in", "is-settled");
    });
  }

  if (headings.length) {
    refreshHeadings();
    onVisible(headings, { rootMargin: "0px 0px -12% 0px", threshold: 0.2 });

    document.addEventListener("languagechange", refreshHeadings);

    var headingTimer;
    window.addEventListener("resize", function () {
      clearTimeout(headingTimer);
      headingTimer = setTimeout(refreshHeadings, 240);
    });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refreshHeadings);
  }
})();
