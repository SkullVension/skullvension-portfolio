document.addEventListener("DOMContentLoaded", function () {
  var revealTargets = document.querySelectorAll(
    ".section-title, .stat-item, .ql-card, .featured-card, .project-card, " +
    ".filter-row, .bot-full-card, .bot-soon-card, .bots-stat, .bot-card, " +
    ".server-showcase, .tech-item, .skill-category, .about-stat, " +
    ".achievement-card, .build-card, .interest-card, .tool-pill, " +
    ".contact-card, .availability-block, .info-card"
  );

  if ("IntersectionObserver" in window) {
    revealTargets.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = ((i % 6) * 60) + "ms";
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  }

  var topBtn = document.createElement("button");
  topBtn.className = "back-to-top";
  topBtn.type = "button";
  topBtn.setAttribute("aria-label", "Back to top");
  topBtn.innerHTML = "&uarr;";
  document.body.appendChild(topBtn);

  window.addEventListener(
    "scroll",
    function () {
      topBtn.classList.toggle("visible", window.scrollY > 400);
    },
    { passive: true }
  );

  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  var typed = "";
  var raining = false;
  document.addEventListener("keydown", function (e) {
    if (!e.key || e.key.length !== 1) return;
    typed = (typed + e.key.toLowerCase()).slice(-5);
    if (typed === "skull" && !raining) {
      raining = true;
      dropSkulls();
      setTimeout(function () {
        raining = false;
      }, 6000);
    }
  });

  function dropSkulls() {
    for (var i = 0; i < 30; i++) {
      setTimeout(function () {
        var skull = document.createElement("div");
        skull.className = "skull-drop";
        skull.textContent = "\u{1F480}";
        skull.style.left = Math.random() * 100 + "vw";
        skull.style.fontSize = 18 + Math.random() * 22 + "px";
        skull.style.animationDuration = 2.5 + Math.random() * 2 + "s";
        skull.style.setProperty("--spin", Math.round(Math.random() * 720 - 360) + "deg");
        document.body.appendChild(skull);
        setTimeout(function () {
          skull.remove();
        }, 5000);
      }, i * 120);
    }
  }
});
