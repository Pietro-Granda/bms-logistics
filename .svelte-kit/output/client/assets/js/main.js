const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const currentPage =
  document.querySelector('meta[name="bms-page"]')?.getAttribute("content") ||
  body?.dataset.page ||
  "home";

function refreshCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

function updateNavToggleLabel() {
  if (!navToggle) return;

  const openLabel = navToggle.dataset.labelOpen || "Open navigation";
  const closeLabel = navToggle.dataset.labelClose || "Close navigation";

  navToggle.setAttribute(
    "aria-label",
    body.classList.contains("nav-open") ? closeLabel : openLabel
  );
}

function setNavState(open) {
  if (!navToggle) return;

  body.classList.toggle("nav-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  updateNavToggleLabel();
}

document.querySelectorAll("[data-nav-link]").forEach((link) => {
  if (link.dataset.navLink === currentPage) {
    link.classList.add("is-current");
    link.setAttribute("aria-current", "page");
  }
});

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    setNavState(!body.classList.contains("nav-open"));
  });

  document.addEventListener("click", (event) => {
    if (!body.classList.contains("nav-open")) return;
    if (nav.contains(event.target) || navToggle.contains(event.target)) return;
    setNavState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setNavState(false);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavState(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 960) setNavState(false);
  });
}

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

let revealObserver;

function initializeReveals() {
  const revealElements = document.querySelectorAll("[data-reveal]");

  if (revealObserver) revealObserver.disconnect();

  if ("IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
}

function initializeContactForm() {
  const contactForm = document.querySelector("[data-contact-form]");
  if (!contactForm) return;

  const feedback = contactForm.querySelector("[data-form-feedback]");
  const fields = Array.from(contactForm.querySelectorAll("[data-validate]"));
  const submitButton = contactForm.querySelector("[type='submit']");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phonePattern = /^[+()0-9\s-]{7,}$/;

  const interpolate = (template, replacements = {}) => {
    return Object.entries(replacements).reduce((text, [key, value]) => {
      return text.replaceAll(`{${key}}`, String(value));
    }, template || "");
  };

  const getMessage = (key, replacements = {}) => {
    return interpolate(contactForm.dataset[key] || "", replacements);
  };

  const setFeedback = (state, message) => {
    if (!feedback || !message) return;
    feedback.classList.add("is-visible");
    feedback.dataset.state = state;
    feedback.textContent = message;
  };

  const getWrapper = (field) => field.closest(".field");

  const setFieldState = (field, message) => {
    const wrapper = getWrapper(field);
    const messageNode = wrapper?.querySelector(".field-message");
    const hasValue = field.type === "checkbox" ? field.checked : field.value.trim() !== "";

    if (!wrapper) return !message;

    wrapper.classList.toggle("has-error", Boolean(message));
    wrapper.classList.toggle("is-valid", !message && hasValue);
    field.setAttribute("aria-invalid", message ? "true" : "false");

    if (messageNode) messageNode.textContent = message || "";
    return !message;
  };

  const validateField = (field) => {
    const label = field.dataset.label || "This field";
    const value = field.type === "checkbox" ? field.checked : field.value.trim();
    let message = "";

    if (field.hasAttribute("required")) {
      if (field.type === "checkbox" && !field.checked) {
        message = getMessage("messageConsent");
      } else if (field.type !== "checkbox" && !value) {
        message = getMessage("messageRequired", { label });
      }
    }

    if (!message && value) {
      if (field.type === "email" && !emailPattern.test(String(value))) {
        message = getMessage("messageEmail");
      } else if (field.dataset.validate === "phone" && !phonePattern.test(String(value))) {
        message = getMessage("messagePhone");
      } else if (field.dataset.minlength && String(value).length < Number(field.dataset.minlength)) {
        message = getMessage("messageMinlength", {
          label,
          min: field.dataset.minlength
        });
      }
    }

    return setFieldState(field, message);
  };

  fields.forEach((field) => {
    const maybeValidate = () => {
      const wrapper = getWrapper(field);
      if (wrapper?.classList.contains("has-error")) validateField(field);
    };

    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", maybeValidate);

    if (field.type === "checkbox" || field.tagName === "SELECT") {
      field.addEventListener("change", () => validateField(field));
    }
  });

  const currentUrl = new URL(window.location.href);
  const serverStatus = currentUrl.searchParams.get("contact_status");
  if (serverStatus) {
    if (serverStatus === "success") {
      setFeedback("success", contactForm.dataset.feedbackServerSuccess || getMessage("feedbackSuccess"));
      contactForm.reset();
      fields.forEach((field) => setFieldState(field, ""));
    } else if (serverStatus === "validation") {
      setFeedback("error", contactForm.dataset.feedbackServerValidation || getMessage("feedbackInvalid"));
    } else {
      setFeedback("error", contactForm.dataset.feedbackServerError || getMessage("feedbackInvalid"));
    }

    currentUrl.searchParams.delete("contact_status");
    window.history.replaceState({}, "", currentUrl.toString());
  }

  contactForm.addEventListener("submit", (event) => {
    const isValid = fields.map(validateField).every(Boolean);

    if (!isValid) {
      event.preventDefault();
      setFeedback("error", getMessage("feedbackInvalid"));
      return;
    }

    const hasServer =
      typeof contactForm.action === "string" &&
      contactForm.action.trim() !== "" &&
      !contactForm.action.includes("api/contact.php");

    if (!hasServer) {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const subject = `BMS Logistics - ${String(formData.get("company") || "Richiesta")}`;
      const bodyLines = [
        `Nome: ${String(formData.get("full_name") || "")}`,
        `Azienda: ${String(formData.get("company") || "")}`,
        `Email: ${String(formData.get("email") || "")}`,
        `Telefono: ${String(formData.get("phone") || "")}`,
        `Servizio: ${String(formData.get("service") || "")}`,
        `Volume: ${String(formData.get("volume") || "")}`,
        "",
        String(formData.get("message") || "")
      ];
      const mailto = `mailto:info@bmslogistics.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        bodyLines.join("\n")
      )}`;

      setFeedback(
        "success",
        contactForm.dataset.feedbackServerSuccess ||
          "Richiesta pronta: si aprira il tuo client email per inviarla."
      );

      window.location.href = mailto;
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.dataset.originalLabel = submitButton.dataset.originalLabel || submitButton.textContent;
      submitButton.textContent = contactForm.dataset.feedbackSending || submitButton.textContent;
    }

    if (feedback && contactForm.dataset.feedbackSending) {
      setFeedback("pending", contactForm.dataset.feedbackSending);
    }
  });
}

refreshCurrentYear();
updateNavToggleLabel();
updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
initializeReveals();
initializeContactForm();
