/* Mascarenhas Rent a Car e Motos — interações da página */

(function () {
  "use strict";

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

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1080) closeNav();
  });
})();
