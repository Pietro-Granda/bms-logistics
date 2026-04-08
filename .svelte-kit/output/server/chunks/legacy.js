import { b as base } from "./server.js";
import "./url.js";
import "@sveltejs/kit/internal/server";
import "./root.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function between(haystack, start, end) {
  const i = haystack.indexOf(start);
  if (i === -1) return "";
  const j = haystack.indexOf(end, i + start.length);
  if (j === -1) return "";
  return haystack.slice(i + start.length, j);
}
function element(haystack, startNeedle, endNeedle) {
  const i = haystack.indexOf(startNeedle);
  if (i === -1) return "";
  const j = haystack.indexOf(endNeedle, i);
  if (j === -1) return "";
  return haystack.slice(i, j + endNeedle.length);
}
function rewriteLinks(html2, { lang }) {
  const assetPrefix = `${base}/assets/`;
  let out = html2.replaceAll('href="assets/', `href="${assetPrefix}`).replaceAll("href='assets/", `href='${assetPrefix}`).replaceAll('src="assets/', `src="${assetPrefix}`).replaceAll("src='assets/", `src='${assetPrefix}`).replaceAll('href="../assets/', `href="${assetPrefix}`).replaceAll("href='../assets/", `href='${assetPrefix}`).replaceAll('src="../assets/', `src="${assetPrefix}`).replaceAll("src='../assets/", `src='${assetPrefix}`);
  const langPrefix = lang === "it" ? "/it" : `/${lang}`;
  const langHome = lang === "it" ? "/" : `/${lang}`;
  const replacements = [
    ['href="../index.html"', `href="${base}/"`],
    ['href="index.html"', `href="${base}${langHome}"`],
    ['href="about.html"', `href="${base}${langPrefix}/about"`],
    ['href="services.html"', `href="${base}${langPrefix}/services"`],
    ['href="solutions.html"', `href="${base}${langPrefix}/solutions"`],
    ['href="operations.html"', `href="${base}${langPrefix}/operations"`],
    ['href="contact.html"', `href="${base}${langPrefix}/contact"`],
    // Cross-language links with ../
    ['href="../it/index.html"', `href="${base}/"`],
    ['href="../en/index.html"', `href="${base}/en"`],
    ['href="../pt/index.html"', `href="${base}/pt"`],
    ['href="../it/about.html"', `href="${base}/it/about"`],
    ['href="../en/about.html"', `href="${base}/en/about"`],
    ['href="../pt/about.html"', `href="${base}/pt/about"`],
    ['href="../it/services.html"', `href="${base}/it/services"`],
    ['href="../en/services.html"', `href="${base}/en/services"`],
    ['href="../pt/services.html"', `href="${base}/pt/services"`],
    ['href="../it/solutions.html"', `href="${base}/it/solutions"`],
    ['href="../en/solutions.html"', `href="${base}/en/solutions"`],
    ['href="../pt/solutions.html"', `href="${base}/pt/solutions"`],
    ['href="../it/operations.html"', `href="${base}/it/operations"`],
    ['href="../en/operations.html"', `href="${base}/en/operations"`],
    ['href="../pt/operations.html"', `href="${base}/pt/operations"`],
    ['href="../it/contact.html"', `href="${base}/it/contact"`],
    ['href="../en/contact.html"', `href="${base}/en/contact"`],
    ['href="../pt/contact.html"', `href="${base}/pt/contact"`],
    ['href="it/about.html"', `href="${base}/it/about"`],
    ['href="it/services.html"', `href="${base}/it/services"`],
    ['href="it/solutions.html"', `href="${base}/it/solutions"`],
    ['href="it/operations.html"', `href="${base}/it/operations"`],
    ['href="it/contact.html"', `href="${base}/it/contact"`],
    ['href="en/index.html"', `href="${base}/en"`],
    ['href="en/about.html"', `href="${base}/en/about"`],
    ['href="en/services.html"', `href="${base}/en/services"`],
    ['href="en/solutions.html"', `href="${base}/en/solutions"`],
    ['href="en/operations.html"', `href="${base}/en/operations"`],
    ['href="en/contact.html"', `href="${base}/en/contact"`],
    ['href="pt/index.html"', `href="${base}/pt"`],
    ['href="pt/about.html"', `href="${base}/pt/about"`],
    ['href="pt/services.html"', `href="${base}/pt/services"`],
    ['href="pt/solutions.html"', `href="${base}/pt/solutions"`],
    ['href="pt/operations.html"', `href="${base}/pt/operations"`],
    ['href="pt/contact.html"', `href="${base}/pt/contact"`],
    ['action="../api/contact.php"', 'action=""']
  ];
  for (const [from, to] of replacements) out = out.replaceAll(from, to);
  return out;
}
function extractLegacyPage(raw, opts) {
  const header = between(raw, '<header class="site-header">', "</header>");
  const main = between(raw, '<main id="main-content">', "</main>");
  const footer = between(raw, '<footer class="site-footer">', "</footer>");
  const whatsapp = element(raw, '<a class="floating-whatsapp"', "</a>");
  return {
    header: rewriteLinks(header, opts),
    main: rewriteLinks(main, opts),
    footer: rewriteLinks(footer, opts),
    whatsapp: rewriteLinks(whatsapp, opts)
  };
}
export {
  extractLegacyPage as e,
  html as h
};
