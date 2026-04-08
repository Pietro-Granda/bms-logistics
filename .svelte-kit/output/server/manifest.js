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
		client: {start:"_app/immutable/entry/start.CGDbZN3b.js",app:"_app/immutable/entry/app.CT1DFcU8.js",imports:["_app/immutable/entry/start.CGDbZN3b.js","_app/immutable/chunks/CCveArdH.js","_app/immutable/chunks/CkSvpgQX.js","_app/immutable/chunks/Bw_xuo7R.js","_app/immutable/entry/app.CT1DFcU8.js","_app/immutable/chunks/CkSvpgQX.js","_app/immutable/chunks/k_s77BbN.js","_app/immutable/chunks/B662z_pS.js","_app/immutable/chunks/DAPHyO4E.js","_app/immutable/chunks/CQpsQFiR.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
