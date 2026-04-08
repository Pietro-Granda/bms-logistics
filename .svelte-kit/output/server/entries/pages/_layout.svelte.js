import { a as attr_class, b as attr, c as attr_style, e as escape_html, d as derived, s as stringify, f as bind_props } from "../../chunks/renderer.js";
import { p as page } from "../../chunks/index2.js";
import { b as base } from "../../chunks/server.js";
import "../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "clsx";
import { o as onDestroy } from "../../chunks/index-server.js";
import "@sveltejs/kit/internal";
import "../../chunks/utils.js";
import "../../chunks/exports.js";
import "../../chunks/state.svelte.js";
import "../../chunks/client.js";
function langFromPath(pathname) {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/pt")) return "pt";
  return "it";
}
function hrefFor(lang, page2) {
  if (page2 === "home") return lang === "it" ? "/" : `/${lang}`;
  return `${lang === "it" ? "/it" : `/${lang}`}/${page2}`;
}
function hrefWithBase(base2, lang, page2) {
  const path = hrefFor(lang, page2);
  if (!base2) return path;
  if (path === "/") return `${base2}/`;
  return `${base2}${path}`;
}
function pageKeyFromPathname(pathname) {
  const path = pathname.split("?")[0].split("#")[0];
  if (path === "/" || path === "/it") return "home";
  if (path === "/en") return "home";
  if (path === "/pt") return "home";
  const parts = path.split("/").filter(Boolean);
  const last = parts.at(-1) || "";
  const lang = langFromPath(path);
  const itMap = {
    "chi-siamo": "about",
    about: "about",
    servizi: "services",
    services: "services",
    soluzioni: "solutions",
    solutions: "solutions",
    operativita: "operations",
    operations: "operations",
    contatti: "contact",
    contact: "contact"
  };
  const defaultMap = {
    about: "about",
    services: "services",
    solutions: "solutions",
    operations: "operations",
    contact: "contact"
  };
  return (lang === "it" ? itMap[last] : defaultMap[last]) || "home";
}
const ui = {
  it: {
    skip: "Vai al contenuto",
    navAria: "Navigazione principale",
    langAria: "Seleziona lingua",
    navToggleOpen: "Apri navigazione",
    navToggleClose: "Chiudi navigazione",
    nav: {
      home: "Home",
      about: "Chi siamo",
      services: "Servizi",
      solutions: "Soluzioni",
      operations: "Operativita",
      contact: "Contatti",
      cta: "Richiedi un preventivo"
    },
    footer: {
      navigate: "Naviga",
      core: "Servizi chiave",
      contact: "Contatti",
      rights: "Tutti i diritti riservati.",
      strap: "Architettura statica pronta per GitHub Pages."
    },
    whatsapp: "Chatta con BMS Logistics su WhatsApp"
  },
  en: {
    skip: "Skip to content",
    navAria: "Primary navigation",
    langAria: "Select language",
    navToggleOpen: "Open navigation",
    navToggleClose: "Close navigation",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      solutions: "Solutions",
      operations: "Operations",
      contact: "Contact",
      cta: "Request a Quote"
    },
    footer: {
      navigate: "Navigate",
      core: "Core Services",
      contact: "Contact",
      rights: "All rights reserved.",
      strap: "Static architecture ready for GitHub Pages."
    },
    whatsapp: "Chat with BMS Logistics on WhatsApp"
  },
  pt: {
    skip: "Ir para o conteudo",
    navAria: "Navegacao principal",
    langAria: "Selecionar idioma",
    navToggleOpen: "Abrir navegacao",
    navToggleClose: "Fechar navegacao",
    nav: {
      home: "Home",
      about: "Quem somos",
      services: "Servicos",
      solutions: "Solucoes",
      operations: "Operacoes",
      contact: "Contato",
      cta: "Solicitar proposta"
    },
    footer: {
      navigate: "Navegacao",
      core: "Servicos principais",
      contact: "Contato",
      rights: "Todos os direitos reservados.",
      strap: "Arquitetura estatica pronta para GitHub Pages."
    },
    whatsapp: "Conversar com a BMS Logistics no WhatsApp"
  }
};
function SiteHeader($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const lang = derived(() => langFromPath(page.url.pathname));
    const current = derived(() => pageKeyFromPathname(page.url.pathname));
    let navOpen = false;
    let scrolled = false;
    $$renderer2.push(`<header${attr_class("site-header", void 0, {
      "is-scrolled": (
        // Close mobile nav when navigating to a new route.
        scrolled
      )
    })}><div class="container header-bar"><a class="brand"${attr("href", hrefWithBase(base, lang(), "home"))} aria-label="BMS Logistics"><img class="brand-logo"${attr("src", `${stringify(base)}/assets/images/bms-logo.jpeg`)} alt="BMS Logistics"/></a> <div class="header-tools"><div class="language-switcher" role="group"${attr("aria-label", ui[lang()].langAria)}><a${attr_class("language-switcher__button", void 0, { "is-active": lang() === "it" })}${attr("href", hrefWithBase(base, "it", current()))}${attr("aria-current", lang() === "it" ? "page" : void 0)}>IT</a> <a${attr_class("language-switcher__button", void 0, { "is-active": lang() === "en" })}${attr("href", hrefWithBase(base, "en", current()))}${attr("aria-current", lang() === "en" ? "page" : void 0)}>EN</a> <a${attr_class("language-switcher__button", void 0, { "is-active": lang() === "pt" })}${attr("href", hrefWithBase(base, "pt", current()))}${attr("aria-current", lang() === "pt" ? "page" : void 0)}>PT</a></div> <button class="nav-toggle" type="button"${attr("aria-expanded", navOpen)} aria-controls="site-navigation"${attr("aria-label", ui[lang()].navToggleOpen)}><span></span> <span></span> <span></span></button></div> <nav${attr_class("site-nav svelte-a8kxe2", void 0, { "is-open": navOpen })} id="site-navigation"${attr("aria-label", ui[lang()].navAria)} data-nav=""${attr_style("", {
      opacity: page.url.pathname.length ? void 0 : void 0
    })}><a${attr("href", hrefWithBase(base, lang(), "home"))}${attr_class("", void 0, { "is-current": current() === "home" })}>${escape_html(ui[lang()].nav.home)}</a> <a${attr("href", hrefWithBase(base, lang(), "about"))}${attr_class("", void 0, { "is-current": current() === "about" })}>${escape_html(ui[lang()].nav.about)}</a> <a${attr("href", hrefWithBase(base, lang(), "services"))}${attr_class("", void 0, { "is-current": current() === "services" })}>${escape_html(ui[lang()].nav.services)}</a> <a${attr("href", hrefWithBase(base, lang(), "solutions"))}${attr_class("", void 0, { "is-current": current() === "solutions" })}>${escape_html(ui[lang()].nav.solutions)}</a> <a${attr("href", hrefWithBase(base, lang(), "operations"))}${attr_class("", void 0, { "is-current": current() === "operations" })}>${escape_html(ui[lang()].nav.operations)}</a> <a${attr("href", hrefWithBase(base, lang(), "contact"))}${attr_class("", void 0, { "is-current": current() === "contact" })}>${escape_html(ui[lang()].nav.contact)}</a> <a class="button button--small button--accent nav-cta"${attr("href", hrefWithBase(base, lang(), "contact"))}>${escape_html(ui[lang()].nav.cta)}</a></nav></div></header>`);
  });
}
function SiteFooter($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const lang = langFromPath(page.url.pathname);
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="site-footer"><div class="container footer-grid"><div class="footer-brand"><a class="brand brand--footer"${attr("href", hrefWithBase(base, lang, "home"))} aria-label="BMS Logistics"><img class="brand-logo"${attr("src", `${stringify(base)}/assets/images/bms-logo.jpeg`)} alt="BMS Logistics"/></a> <p>`);
    if (lang === "it") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`BMS Logistics costruisce operazioni di trasporto, magazzino e ultimo miglio con una struttura
					commerciale e operativa piu solida.`);
    } else if (lang === "en") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`BMS Logistics builds transport, warehousing and final-mile operations with a sharper commercial and
					operational structure.`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`A BMS Logistics estrutura operacoes de transporte, armazenagem e last mile com uma base comercial e
					operacional mais forte.`);
    }
    $$renderer2.push(`<!--]--></p></div> <div><h2 class="footer-title">${escape_html(ui[lang].footer.navigate)}</h2> <div class="footer-links"><a${attr("href", hrefWithBase(base, lang, "about"))}>${escape_html(ui[lang].nav.about)}</a> <a${attr("href", hrefWithBase(base, lang, "services"))}>${escape_html(ui[lang].nav.services)}</a> <a${attr("href", hrefWithBase(base, lang, "solutions"))}>${escape_html(ui[lang].nav.solutions)}</a> <a${attr("href", hrefWithBase(base, lang, "operations"))}>${escape_html(ui[lang].nav.operations)}</a> <a${attr("href", hrefWithBase(base, lang, "contact"))}>${escape_html(ui[lang].nav.contact)}</a></div></div> <div><h2 class="footer-title">${escape_html(ui[lang].footer.core)}</h2> <div class="footer-links"><span>Last mile delivery</span> <span>${escape_html(lang === "en" ? "Transport" : lang === "pt" ? "Transporte" : "Trasporto")}</span> <span>${escape_html(lang === "en" ? "Warehousing" : lang === "pt" ? "Armazenagem" : "Magazzino")}</span> <span>${escape_html(lang === "en" ? "Routing and tracking" : lang === "pt" ? "Roteirizacao e tracking" : "Routing e tracking")}</span></div></div> <div><h2 class="footer-title">${escape_html(ui[lang].footer.contact)}</h2> <div class="footer-links"><a href="tel:+393493306316">+39 349 330 6316</a> <a href="mailto:info@bmslogistics.it">info@bmslogistics.it</a> <a href="mailto:supporto@bmslogistics.it">supporto@bmslogistics.it</a> <span>`);
    if (lang === "en") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`Monza Hub, Bernate Hub, Bolzano office`);
    } else if (lang === "pt") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`Hub de Monza, hub de Bernate, escritorio de Bolzano`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`Hub di Monza, hub di Bernate, ufficio di Bolzano`);
    }
    $$renderer2.push(`<!--]--></span></div></div></div> <div class="container footer-bottom"><p>© ${escape_html(year)} BMS Logistics. ${escape_html(ui[lang].footer.rights)}</p> <p>${escape_html(ui[lang].footer.strap)}</p></div></footer>`);
  });
}
function WhatsAppLink($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let lang = $$props["lang"];
    $$renderer2.push(`<a class="floating-whatsapp" href="https://wa.me/393493306316" target="_blank" rel="noreferrer"${attr("aria-label", ui[lang].whatsapp)}>WhatsApp</a>`);
    bind_props($$props, { lang });
  });
}
function RevealsController($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    onDestroy(() => {
    });
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    const lang = derived(() => langFromPath(page.url.pathname));
    const skipText = derived(() => lang() === "en" ? "Skip to content" : lang() === "pt" ? "Ir para o conteudo" : "Vai al contenuto");
    $$renderer2.push(`<a class="skip-link" href="#main-content">${escape_html(skipText())}</a> `);
    SiteHeader($$renderer2);
    $$renderer2.push(`<!----> `);
    RevealsController($$renderer2);
    $$renderer2.push(`<!----> <main id="main-content">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> `);
    SiteFooter($$renderer2);
    $$renderer2.push(`<!----> `);
    WhatsAppLink($$renderer2, { lang: lang() });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
