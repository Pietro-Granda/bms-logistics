import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.qk2NrMIT.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DLNQzOI8.js","_app/immutable/chunks/DXESjpyK.js","_app/immutable/chunks/C_5AMZz1.js","_app/immutable/chunks/BadkUb80.js","_app/immutable/chunks/CP24cHrs.js","_app/immutable/chunks/BSM8GF5G.js","_app/immutable/chunks/ZPm0DHaK.js","_app/immutable/chunks/BBwj8C96.js","_app/immutable/chunks/COJTGvXi.js","_app/immutable/chunks/CLpD8Wj_.js"];
export const stylesheets = ["_app/immutable/assets/0.DflFiA85.css"];
export const fonts = [];
