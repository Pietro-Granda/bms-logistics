import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Bd_9WsHW.js","_app/immutable/chunks/B662z_pS.js","_app/immutable/chunks/CkSvpgQX.js","_app/immutable/chunks/k_s77BbN.js","_app/immutable/chunks/DAPHyO4E.js","_app/immutable/chunks/CbO80XOj.js","_app/immutable/chunks/Bw_xuo7R.js","_app/immutable/chunks/CCveArdH.js","_app/immutable/chunks/Davx2Xl6.js","_app/immutable/chunks/l8mW3Ows.js"];
export const stylesheets = ["_app/immutable/assets/0.DflFiA85.css"];
export const fonts = [];
