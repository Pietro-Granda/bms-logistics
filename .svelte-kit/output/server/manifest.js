export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "bms-logistics/_app",
	assets: new Set(["assets/css/style.css","assets/images/bms-logo.jpeg","assets/js/main.js"]),
	mimeTypes: {".css":"text/css",".jpeg":"image/jpeg",".js":"text/javascript"},
	_: {
		client: {start:"_app/immutable/entry/start.C3HhO-hk.js",app:"_app/immutable/entry/app.Bc3GO5dL.js",imports:["_app/immutable/entry/start.C3HhO-hk.js","_app/immutable/chunks/CjSo2vkV.js","_app/immutable/chunks/DEauqcIV.js","_app/immutable/chunks/C1LUEJrQ.js","_app/immutable/entry/app.Bc3GO5dL.js","_app/immutable/chunks/DEauqcIV.js","_app/immutable/chunks/BQJx9PA4.js","_app/immutable/chunks/7MAB3hVB.js","_app/immutable/chunks/BnfBzV_h.js","_app/immutable/chunks/lQjccWsD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/bms-logistics/","/bms-logistics/en","/bms-logistics/en/about","/bms-logistics/en/contact","/bms-logistics/en/operations","/bms-logistics/en/services","/bms-logistics/en/solutions","/bms-logistics/it","/bms-logistics/it/about","/bms-logistics/it/contact","/bms-logistics/it/operations","/bms-logistics/it/services","/bms-logistics/it/solutions","/bms-logistics/pt","/bms-logistics/pt/about","/bms-logistics/pt/contact","/bms-logistics/pt/operations","/bms-logistics/pt/services","/bms-logistics/pt/solutions"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
