export const initHamburgerMenu = () => {
  const hamburger = document.querySelector(".js-hamburger");
  const nav = document.querySelector(".global-nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      nav.classList.toggle("is-active");
    });

    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        nav.classList.remove("is-active");
      });
    });
  }
};
