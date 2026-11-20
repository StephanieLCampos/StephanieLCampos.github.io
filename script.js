// Minimal progressive enhancements. The site works without JavaScript.
(function () {
  // Keep the footer year current.
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Highlight the nav link for the section currently in view.
  var links = document.querySelectorAll(".nav-list a[href^='#']");
  if (!("IntersectionObserver" in window) || links.length === 0) {
    return;
  }

  var byId = {};
  links.forEach(function (link) {
    byId[link.getAttribute("href").slice(1)] = link;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        links.forEach(function (link) {
          link.classList.remove("is-active");
          link.removeAttribute("aria-current");
        });
        var active = byId[entry.target.id];
        if (active) {
          active.classList.add("is-active");
          active.setAttribute("aria-current", "true");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  Object.keys(byId).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }
  });
})();
