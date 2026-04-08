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
		client: {start:"_app/immutable/entry/start.CnfFvL2m.js",app:"_app/immutable/entry/app.B2lcjn6L.js",imports:["_app/immutable/entry/start.CnfFvL2m.js","_app/immutable/chunks/BYIFrM-a.js","_app/immutable/chunks/CzblwC7U.js","_app/immutable/chunks/DirpWMtk.js","_app/immutable/entry/app.B2lcjn6L.js","_app/immutable/chunks/CzblwC7U.js","_app/immutable/chunks/Bb8ZMr_Y.js","_app/immutable/chunks/CT94xqCv.js","_app/immutable/chunks/DzVmjPHP.js","_app/immutable/chunks/BCNlIE7E.js","_app/immutable/chunks/Crc4Y2dH.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
