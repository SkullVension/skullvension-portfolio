// Project filtering on the Projects page
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card[data-type]");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      cards.forEach(function (card) {
        if (filter === "all" || card.dataset.type === filter) {
          card.removeAttribute("data-hidden");
        } else {
          card.setAttribute("data-hidden", "true");
        }
      });
    });
  });
});
