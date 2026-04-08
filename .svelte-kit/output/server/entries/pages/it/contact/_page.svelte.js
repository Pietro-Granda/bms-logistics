import { e as escape_html, b as attr, f as bind_props, h as head } from "../../../../chunks/renderer.js";
import { R as Reveal } from "../../../../chunks/Reveal.js";
function ContactForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let lang = $$props["lang"];
    let full_name = "";
    let company = "";
    let email = "";
    let phone = "";
    let service = "";
    let volume = "";
    let message = "";
    let consent = false;
    $$renderer2.push(`<form novalidate=""><div class="field-grid"><div class="field"><label for="full-name">${escape_html(lang === "en" ? "Full name" : lang === "pt" ? "Nome completo" : "Nome e cognome")}</label> <input id="full-name"${attr("value", full_name)} type="text" autocomplete="name" required=""/> <p class="field-message" aria-live="polite"></p></div> <div class="field"><label for="company">${escape_html(lang === "en" ? "Company" : lang === "pt" ? "Empresa" : "Azienda")}</label> <input id="company"${attr("value", company)} type="text" autocomplete="organization" required=""/> <p class="field-message" aria-live="polite"></p></div> <div class="field"><label for="email">${escape_html(lang === "en" ? "Business email" : lang === "pt" ? "Email corporativo" : "Email aziendale")}</label> <input id="email"${attr("value", email)} type="email" autocomplete="email" required=""/> <p class="field-message" aria-live="polite"></p></div> <div class="field"><label for="phone">${escape_html(lang === "en" ? "Phone number" : lang === "pt" ? "Telefone" : "Numero di telefono")}</label> <input id="phone"${attr("value", phone)} type="tel" autocomplete="tel" required=""/> <p class="field-message" aria-live="polite"></p></div> <div class="field"><label for="service">${escape_html(lang === "en" ? "Service interest" : lang === "pt" ? "Servico de interesse" : "Interesse di servizio")}</label> `);
    $$renderer2.select({ id: "service", value: service, required: true }, ($$renderer3) => {
      $$renderer3.option({ value: "" }, ($$renderer4) => {
        $$renderer4.push(`${escape_html(lang === "en" ? "Select a service" : lang === "pt" ? "Selecione um servico" : "Seleziona un servizio")}`);
      });
      $$renderer3.option({ value: "last-mile" }, ($$renderer4) => {
        $$renderer4.push(`Last mile delivery`);
      });
      $$renderer3.option({ value: "transport" }, ($$renderer4) => {
        $$renderer4.push(`${escape_html(lang === "en" ? "Transport" : lang === "pt" ? "Transporte" : "Trasporto")}`);
      });
      $$renderer3.option({ value: "warehousing" }, ($$renderer4) => {
        $$renderer4.push(`${escape_html(lang === "en" ? "Warehousing" : lang === "pt" ? "Armazenagem" : "Magazzino")}`);
      });
      $$renderer3.option({ value: "routing-tracking" }, ($$renderer4) => {
        $$renderer4.push(`${escape_html(lang === "en" ? "Routing and tracking" : lang === "pt" ? "Roteirizacao e tracking" : "Routing e tracking")}`);
      });
      $$renderer3.option({ value: "custom-solution" }, ($$renderer4) => {
        $$renderer4.push(`${escape_html(lang === "en" ? "Custom solution" : lang === "pt" ? "Solucao personalizada" : "Soluzione personalizzata")}`);
      });
    });
    $$renderer2.push(` <p class="field-message" aria-live="polite"></p></div> <div class="field"><label for="volume">${escape_html(lang === "en" ? "Monthly logistics volume" : lang === "pt" ? "Volume logistico mensal" : "Volume logistico mensile")}</label> `);
    $$renderer2.select({ id: "volume", value: volume, required: true }, ($$renderer3) => {
      $$renderer3.option({ value: "" }, ($$renderer4) => {
        $$renderer4.push(`${escape_html(lang === "en" ? "Select volume" : lang === "pt" ? "Selecione o volume" : "Seleziona il volume")}`);
      });
      $$renderer3.option({ value: "pilot" }, ($$renderer4) => {
        $$renderer4.push(`${escape_html(lang === "en" ? "Pilot or project-based" : lang === "pt" ? "Piloto ou projeto pontual" : "Pilot o progetto singolo")}`);
      });
      $$renderer3.option({ value: "small" }, ($$renderer4) => {
        $$renderer4.push(`${escape_html(lang === "en" ? "Regular low volume" : lang === "pt" ? "Volume regular baixo" : "Volume regolare contenuto")}`);
      });
      $$renderer3.option({ value: "medium" }, ($$renderer4) => {
        $$renderer4.push(`${escape_html(lang === "en" ? "Structured recurring volume" : lang === "pt" ? "Volume recorrente estruturado" : "Volume ricorrente strutturato")}`);
      });
      $$renderer3.option({ value: "high" }, ($$renderer4) => {
        $$renderer4.push(`${escape_html(lang === "en" ? "High volume or multi-site need" : lang === "pt" ? "Alto volume ou operacao multi-site" : "Alto volume o esigenza multi-sito")}`);
      });
    });
    $$renderer2.push(` <p class="field-message" aria-live="polite"></p></div> <div class="field field--full"><label for="message">${escape_html(lang === "en" ? "Project details" : lang === "pt" ? "Detalhes do projeto" : "Dettagli del progetto")}</label> <textarea id="message" rows="6" required=""${attr("placeholder", lang === "en" ? "Describe routes, geography, warehousing needs, expected delivery model or operational challenge." : lang === "pt" ? "Descreva rotas, geografia, necessidades de armazenagem, modelo de entrega ou desafio operacional." : "Descrivi rotte, geografia, esigenze di magazzino, modello di consegna atteso o sfida operativa.")}>`);
    const $$body = escape_html(message);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea> <p class="field-message" aria-live="polite"></p></div> <div class="field field--full"><label class="checkbox-row" for="consent"><input id="consent"${attr("checked", consent, true)} name="consent" type="checkbox" required=""/> <span>${escape_html(lang === "en" ? "I confirm that the information provided can be used to respond to this logistics request." : lang === "pt" ? "Confirmo que as informacoes fornecidas podem ser usadas para responder a esta solicitacao logistica." : "Confermo che le informazioni fornite possono essere utilizzate per rispondere a questa richiesta logistica.")}</span></label> <p class="field-message" aria-live="polite"></p></div></div> <button class="button button--accent" type="submit">${escape_html(lang === "en" ? "Send Request" : lang === "pt" ? "Enviar solicitacao" : "Invia richiesta")}</button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></form>`);
    bind_props($$props, { lang });
  });
}
function _page($$renderer) {
  head("10s3rq7", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Contatti | BMS Logistics Preventivi, supporto e WhatsApp</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Contatta BMS Logistics per trasporto, magazzino, routing e supporto last mile. Richiedi un preventivo, scrivi al team via email, telefono o WhatsApp e consulta la mappa operativa."/>`);
  });
  $$renderer.push(`<section class="page-hero"><div class="container hero-grid">`);
  Reveal($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<div><nav class="breadcrumbs" aria-label="Percorso"><a href="/">Home</a> <span class="separator" aria-hidden="true"></span> <span>Contatti</span></nav> <span class="eyebrow">Contatta BMS Logistics</span> <h1>Avvia una conversazione logistica costruita su esigenze operative reali.</h1> <p>Usa il modulo qui sotto per richiedere un preventivo, discutere l'ambito del servizio o iniziare una
					conversazione di partnership logistica. Per un contatto immediato, raggiungi il team direttamente via
					telefono, email o WhatsApp.</p></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Reveal($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<aside class="hero-panel"><span class="panel-kicker">Accesso rapido</span> <h2>Canali diretti per contatto commerciale e operativo.</h2> <ul class="hero-panel-list"><li><strong>Telefono</strong><span>+39 349 330 6316</span></li> <li><strong>Email</strong><span>info@bmslogistics.it</span></li> <li><strong>WhatsApp</strong><span>Canale diretto a risposta rapida</span></li></ul></aside>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></section> <section class="section"><div class="container contact-layout">`);
  Reveal($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<aside class="contact-panel"><span class="eyebrow">Contatto diretto</span> <h2>Raggiungi il canale giusto per preventivi, supporto o allineamento operativo.</h2> <div class="contact-list"><div class="contact-item"><span>Linea commerciale</span><a href="tel:+393493306316">+39 349 330 6316</a></div> <div class="contact-item"><span>WhatsApp</span><a href="https://wa.me/393493306316" target="_blank" rel="noreferrer">Apri chat WhatsApp</a></div> <div class="contact-item"><span>Email commerciale</span><a href="mailto:gustavo@bmslogistics.it">gustavo@bmslogistics.it</a></div> <div class="contact-item"><span>Email principale</span><a href="mailto:info@bmslogistics.it">info@bmslogistics.it</a></div> <div class="contact-item"><span>Email supporto</span><a href="mailto:supporto@bmslogistics.it">supporto@bmslogistics.it</a></div> <div class="contact-item"><span>PEC</span><a href="mailto:bmslogistics@pec-mail.it">bmslogistics@pec-mail.it</a></div> <div class="contact-item"><span>Partita IVA</span><p>03295030211</p></div> <div class="contact-item"><span>Ufficio amministrativo</span><p>Via Copernico 4, 39100 Bolzano, Italia</p></div> <div class="contact-item"><span>Hub operativi</span><p>Hub di Monza e Hub di Bernate Ticino</p></div></div></aside>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Reveal($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="form-card"><span class="eyebrow">Modulo richiesta</span> <h2>Raccontaci di cosa ha bisogno la tua operazione.</h2> `);
      ContactForm($$renderer2, { lang: "it" });
      $$renderer2.push(`<!----> <p class="form-note">Dopo la validazione, si apre una mail precompilata (GitHub Pages non supporta PHP).</p></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></section> <section class="section section--alt"><div class="container network-layout">`);
  Reveal($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="section-intro"><span class="eyebrow">Mappa e presenza</span> <h2 class="section-title">Una mappa reale per il punto amministrativo e una vista strutturata dei nodi operativi BMS.</h2> <p class="section-copy">L'ufficio amministrativo di Bolzano e il riferimento principale per i contatti. Il diagramma operativo
					continua a mostrare come la struttura si estende anche verso Monza e Bernate Ticino.</p></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Reveal($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="map-layout"><div class="map-embed"><iframe title="Mappa ufficio BMS Logistics Bolzano" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Via%20Copernico%204%2C%2039100%20Bolzano%2C%20Italy&amp;output=embed"></iframe></div> <div class="location-grid"><article class="location-card"><small>Ufficio amministrativo</small> <strong>Bolzano</strong> <p>Via Copernico 4, 39100 Bolzano, Italia.</p> <a href="https://www.google.com/maps/search/?api=1&amp;query=Via+Copernico+4%2C+39100+Bolzano%2C+Italy" target="_blank" rel="noreferrer">Apri in Google Maps</a></article> <article class="location-card"><small>Hub operativo</small> <strong>Monza Brianza</strong> <p>Presidio operativo per staging, dispatch e rilascio rotte.</p></article> <article class="location-card"><small>Hub operativo</small> <strong>Bernate Ticino</strong> <p>Supporto warehouse e continuita per la catena logistica.</p></article></div> <div class="network-board" aria-label="Mappa contatti BMS Logistics"><span class="network-line line--1" aria-hidden="true"></span> <span class="network-line line--2" aria-hidden="true"></span> <article class="network-node node--bolzano"><small>Ufficio</small><strong>Bolzano</strong><p>Ufficio amministrativo e contatto centrale.</p></article> <article class="network-node node--monza"><small>Hub</small><strong>Monza</strong><p>Nodo operativo per dispatch e rilascio rotte.</p></article> <article class="network-node node--bernate"><small>Hub</small><strong>Bernate Ticino</strong><p>Supporto di magazzino e continuita per la catena.</p></article></div></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></section>`);
}
export {
  _page as default
};
