export const initFaqAccordion = () => {
  const items = document.querySelectorAll("details.faq-item");
  items.forEach((item) => {
    const summary = item.querySelector("summary");
    if (summary) {
      summary.addEventListener("click", () => {
        // Toggle class for CSS animation customization if needed
        item.classList.toggle("is-open");
      });
    }
  });
};
