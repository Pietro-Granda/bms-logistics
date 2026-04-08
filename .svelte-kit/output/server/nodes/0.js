import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Cad80Bdc.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/Dx5NQn3a.js","_app/immutable/chunks/DHkRY6ge.js","_app/immutable/chunks/DKW7ksYb.js","_app/immutable/chunks/DW2AtfZT.js","_app/immutable/chunks/CWSG5Izu.js","_app/immutable/chunks/DPCP0V4Z.js","_app/immutable/chunks/BO3_Nfn9.js","_app/immutable/chunks/BkFT2c5L.js","_app/immutable/chunks/BW-u2WfQ.js","_app/immutable/chunks/DmG_fpJh.js","_app/immutable/chunks/BrrX6qbW.js","_app/immutable/chunks/C4hSMEk0.js"];
export const stylesheets = ["_app/immutable/assets/0.DflFiA85.css"];
export const fonts = [];
