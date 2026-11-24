(function () {
  const links = typeof LINKS !== "undefined" ? LINKS : {};

  document.querySelectorAll("[data-link]").forEach(a => {
    const url = links[a.dataset.link];
    if (url && !url.startsWith("{{")) {
      a.href = url;
    } else {
      a.classList.add("disabled");
      a.removeAttribute("href");
    }
  });

  const header = document.querySelector("header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const revealEls = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(el => el.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .1 });

  revealEls.forEach(el => observer.observe(el));
})();
