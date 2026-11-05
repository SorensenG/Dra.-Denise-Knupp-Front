document.documentElement.classList.add("js");

const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

function closeMenu() {
  if (!menuToggle || !nav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("nav-open", willOpen);
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const selector = anchor.getAttribute("href");
    if (!selector || selector === "#") return;
    const target = document.querySelector(selector);
    if (!target) return;
    event.preventDefault();
    const headerHeight = header?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

const faqButtons = document.querySelectorAll("[data-faq] button[aria-controls]");
faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    if (!answer) return;
    const willOpen = button.getAttribute("aria-expanded") !== "true";

    faqButtons.forEach((otherButton) => {
      const otherAnswer = document.getElementById(otherButton.getAttribute("aria-controls"));
      otherButton.setAttribute("aria-expanded", "false");
      if (otherAnswer) otherAnswer.hidden = true;
    });

    button.setAttribute("aria-expanded", String(willOpen));
    answer.hidden = !willOpen;
  });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px" });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("[data-track]").forEach((link) => {
  link.addEventListener("click", () => {
    const name = link.dataset.track;
    if (!name || typeof window.va !== "function") return;
    window.va("event", { name });
  });
});

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = String(new Date().getFullYear());
});
