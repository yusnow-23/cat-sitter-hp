export const initNavigation = () => {
  const header = document.querySelector(".js-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    });
  }

  // Highlight current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".global-nav a");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath && currentPath !== "/") {
      link.classList.add("is-current");
    } else if (currentPath === "/" && href === "/") {
      link.classList.add("is-current");
    }
  });
};
