import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CgWoTz4N.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BPXR73E3.js","_app/immutable/chunks/BEYggFEJ.js","_app/immutable/chunks/Cr8EqAO_.js","_app/immutable/chunks/B93q5soz.js","_app/immutable/chunks/rYHfybcS.js","_app/immutable/chunks/CJSufUXw.js","_app/immutable/chunks/BFTyUCyI.js","_app/immutable/chunks/BiXCxucP.js","_app/immutable/chunks/Z2hdQuod.js","_app/immutable/chunks/B_5hj7G0.js"];
export const stylesheets = ["_app/immutable/assets/0.DflFiA85.css"];
export const fonts = [];
