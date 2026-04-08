import { i as ssr_context, a as attr_class, j as slot } from "./root.js";
import "clsx";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
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
