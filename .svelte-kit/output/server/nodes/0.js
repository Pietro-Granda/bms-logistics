import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.UPN8Q5QS.js","_app/immutable/chunks/C58DHta9.js","_app/immutable/chunks/DCA0QHLj.js","_app/immutable/chunks/BG_4ERly.js","_app/immutable/chunks/D5Jz5CkP.js","_app/immutable/chunks/FdCfbK91.js","_app/immutable/chunks/CEl1Hef-.js","_app/immutable/chunks/Bz49E0Qs.js","_app/immutable/chunks/DD5AN5VC.js","_app/immutable/chunks/D5UaAccV.js","_app/immutable/chunks/C5yjHN_j.js","_app/immutable/chunks/CF8tFpnV.js","_app/immutable/chunks/DWU8hRQP.js","_app/immutable/chunks/D_4YAnl1.js"];
export const stylesheets = ["_app/immutable/assets/0.DflFiA85.css"];
export const fonts = [];
