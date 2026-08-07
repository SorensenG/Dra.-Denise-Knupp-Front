document.documentElement.classList.add("js-enabled");

const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    nav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    });
  });
}

const answers = {
  avaliacao: {
    title: "Como agendar uma avaliação?",
    text: "O agendamento deve ser feito pelo WhatsApp do consultório. Informe seu nome e a principal necessidade para receber orientação inicial sobre horários."
  },
  implante: {
    title: "Implante dentário é indicado para mim?",
    text: "A indicação depende de avaliação clínica, exames e planejamento individual. O site não realiza diagnóstico, mas o WhatsApp pode ajudar a iniciar o agendamento."
  },
  protocolo: {
    title: "O que é prótese sobre implante?",
    text: "É uma alternativa de reabilitação que pode substituir dentes ausentes com apoio em implantes. A indicação e o tipo de prótese precisam ser avaliados presencialmente."
  },
  localizacao: {
    title: "Onde fica o consultório?",
    text: "O atendimento fica na Rua Sergipe, 15, Vila Cristóvam, em Limeira, SP. Use o botão Como chegar para abrir a rota no Google Maps."
  },
  urgencia: {
    title: "Estou com dor. O que fazer?",
    text: "Em caso de dor, entre em contato pelo WhatsApp para orientação de agendamento. Se houver emergência intensa, procure atendimento odontológico ou serviço de saúde adequado."
  },
  contato: {
    title: "Vamos conversar pelo WhatsApp?",
    text: "Se a sua dúvida não apareceu aqui, o melhor próximo passo é chamar o consultório. A conversa abre um caminho seguro para orientar agendamento sem coletar dados pelo site.",
    href: "https://wa.me/5519997876346?text=Ol%C3%A1%2C%20Dra.%20Denise%21%20N%C3%A3o%20encontrei%20minha%20d%C3%BAvida%20no%20site%20e%20gostaria%20de%20conversar%20pelo%20WhatsApp.",
    cta: "Chamar no WhatsApp"
  }
};

const answerBox = document.querySelector("[data-answer-box]");
const questionButtons = document.querySelectorAll("[data-answer]");

questionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.answer;
    const answer = answers[key];
    if (!answer || !answerBox) return;

    questionButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const action = answer.href ? `<div class="answer-actions"><a class="button button-whatsapp" href="${answer.href}" target="_blank" rel="noopener">${answer.cta}</a></div>` : "";
    answerBox.innerHTML = `<strong>${answer.title}</strong><p>${answer.text}</p>${action}`;
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    const headerHeight = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
