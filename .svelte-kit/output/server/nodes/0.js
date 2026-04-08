import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CKRfBWYU.js","_app/immutable/chunks/CT94xqCv.js","_app/immutable/chunks/CzblwC7U.js","_app/immutable/chunks/Bb8ZMr_Y.js","_app/immutable/chunks/DzVmjPHP.js","_app/immutable/chunks/Bv03OiQt.js","_app/immutable/chunks/DirpWMtk.js","_app/immutable/chunks/BYIFrM-a.js","_app/immutable/chunks/DiNSG_eh.js","_app/immutable/chunks/BsDlnqnC.js","_app/immutable/chunks/Crc4Y2dH.js"];
export const stylesheets = ["_app/immutable/assets/0.DflFiA85.css"];
export const fonts = [];
