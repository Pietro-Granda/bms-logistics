import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.FR6jjnFt.js","_app/immutable/chunks/CwqZEzDW.js","_app/immutable/chunks/BloXseR0.js","_app/immutable/chunks/BpDke59Y.js","_app/immutable/chunks/DYV8BFW9.js","_app/immutable/chunks/DfUhG79T.js","_app/immutable/chunks/D229U804.js","_app/immutable/chunks/BHQOfGUj.js","_app/immutable/chunks/CHYoXQST.js","_app/immutable/chunks/Bn3DsepE.js","_app/immutable/chunks/D3TQRayr.js"];
export const stylesheets = ["_app/immutable/assets/0.DflFiA85.css"];
export const fonts = [];
