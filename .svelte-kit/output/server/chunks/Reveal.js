import { a as attr_class, i as slot } from "./renderer.js";
import { o as onDestroy } from "./index-server.js";
function Reveal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    let observer;
    onDestroy(() => observer?.disconnect());
    $$renderer2.push(`<div data-reveal=""${attr_class("", void 0, { "is-visible": visible })}><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  Reveal as R
};
