import { h as head } from "../../chunks/root.js";
import { r as raw } from "../../chunks/index.js";
import { e as extractLegacyPage, h as html } from "../../chunks/legacy.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const page = extractLegacyPage(raw, { lang: "it" });
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<meta name="bms-page" content="home"/>`);
    });
    $$renderer2.push(`${html(page.header)} <main id="main-content">${html(page.main)}</main> ${html(page.footer)} ${html(page.whatsapp)}`);
  });
}
export {
  _page as default
};
