export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/css/style.css","assets/images/bms-logo.jpeg","assets/js/main.js"]),
	mimeTypes: {".css":"text/css",".jpeg":"image/jpeg",".js":"text/javascript"},
	_: {
		client: {start:"_app/immutable/entry/start.HDqxgsFD.js",app:"_app/immutable/entry/app.DICjfbUc.js",imports:["_app/immutable/entry/start.HDqxgsFD.js","_app/immutable/chunks/BO3_Nfn9.js","_app/immutable/chunks/DPCP0V4Z.js","_app/immutable/chunks/Dx5NQn3a.js","_app/immutable/chunks/DHkRY6ge.js","_app/immutable/chunks/CWSG5Izu.js","_app/immutable/entry/app.DICjfbUc.js","_app/immutable/chunks/Dx5NQn3a.js","_app/immutable/chunks/DHkRY6ge.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DPCP0V4Z.js","_app/immutable/chunks/DKW7ksYb.js","_app/immutable/chunks/BrAkqjx_.js","_app/immutable/chunks/C4hSMEk0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
		prerendered_routes: new Set(["/","/en","/en/about","/en/contact","/en/operations","/en/services","/en/solutions","/it","/it/about","/it/contact","/it/operations","/it/services","/it/solutions","/pt","/pt/about","/pt/contact","/pt/operations","/pt/services","/pt/solutions"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
