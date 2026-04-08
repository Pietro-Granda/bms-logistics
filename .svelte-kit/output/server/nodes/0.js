import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C8I_Wxvm.js","_app/immutable/chunks/7MAB3hVB.js","_app/immutable/chunks/DEauqcIV.js","_app/immutable/chunks/BQJx9PA4.js","_app/immutable/chunks/BnfBzV_h.js","_app/immutable/chunks/B2SFVT_4.js","_app/immutable/chunks/C1LUEJrQ.js","_app/immutable/chunks/CjSo2vkV.js","_app/immutable/chunks/DOoqCTbO.js","_app/immutable/chunks/az2kn82a.js"];
export const stylesheets = ["_app/immutable/assets/0.DflFiA85.css"];
export const fonts = [];
