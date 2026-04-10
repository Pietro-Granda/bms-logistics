import { e as escape_html, b as attr, f as bind_props } from "./root.js";
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
    $$renderer2.push(`<!--]--> <p class="form-note">${escape_html(lang === "en" ? "After validation, we open a pre-filled email in a new tab (GitHub Pages does not run server-side PHP)." : lang === "pt" ? "Depois da validacao, abrimos um email pre-preenchido em uma nova aba (GitHub Pages nao executa PHP no servidor)." : "Dopo la validazione, apriamo un'email precompilata in una nuova scheda (GitHub Pages non esegue PHP lato server).")}</p></form>`);
    bind_props($$props, { lang });
  });
}
export {
  ContactForm as C
};
