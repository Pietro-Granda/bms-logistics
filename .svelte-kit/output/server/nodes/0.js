import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.tSkfYh20.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DD-yQKK6.js","_app/immutable/chunks/Dg-C80AX.js","_app/immutable/chunks/9E8xsBkx.js","_app/immutable/chunks/BIfUGEb1.js","_app/immutable/chunks/DD1dROoB.js","_app/immutable/chunks/hDDJQWct.js","_app/immutable/chunks/VG7nEb0_.js","_app/immutable/chunks/DAklzJm-.js","_app/immutable/chunks/C4HiGtA0.js","_app/immutable/chunks/-AfuX1iP.js","_app/immutable/chunks/DpJn1qst.js"];
export const stylesheets = ["_app/immutable/assets/0.DflFiA85.css"];
export const fonts = [];
