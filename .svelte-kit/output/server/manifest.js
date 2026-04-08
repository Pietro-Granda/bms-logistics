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
		client: {start:"_app/immutable/entry/start.COjb7FNu.js",app:"_app/immutable/entry/app.patnNITg.js",imports:["_app/immutable/entry/start.COjb7FNu.js","_app/immutable/chunks/DD5AN5VC.js","_app/immutable/chunks/DCA0QHLj.js","_app/immutable/chunks/CEl1Hef-.js","_app/immutable/chunks/Bz49E0Qs.js","_app/immutable/entry/app.patnNITg.js","_app/immutable/chunks/DCA0QHLj.js","_app/immutable/chunks/BG_4ERly.js","_app/immutable/chunks/C58DHta9.js","_app/immutable/chunks/Bz49E0Qs.js","_app/immutable/chunks/D5Jz5CkP.js","_app/immutable/chunks/Cv3ajRBm.js","_app/immutable/chunks/D_4YAnl1.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/21.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/[...legacy]",
				pattern: /^(?:\/([^]*))?\/?$/,
				params: [{"name":"legacy","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/bms-logistics/","/bms-logistics/en","/bms-logistics/en/about","/bms-logistics/en/contact","/bms-logistics/en/operations","/bms-logistics/en/services","/bms-logistics/en/solutions","/bms-logistics/it","/bms-logistics/it/about","/bms-logistics/it/contact","/bms-logistics/it/operations","/bms-logistics/it/services","/bms-logistics/it/solutions","/bms-logistics/pt","/bms-logistics/pt/about","/bms-logistics/pt/contact","/bms-logistics/pt/operations","/bms-logistics/pt/services","/bms-logistics/pt/solutions"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
