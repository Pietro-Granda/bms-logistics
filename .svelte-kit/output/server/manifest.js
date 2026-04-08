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
		client: {start:"_app/immutable/entry/start.CJ_gQwJy.js",app:"_app/immutable/entry/app.C78h82Ch.js",imports:["_app/immutable/entry/start.CJ_gQwJy.js","_app/immutable/chunks/ChUVaHUu.js","_app/immutable/chunks/DCA0QHLj.js","_app/immutable/chunks/V8rDMmr0.js","_app/immutable/chunks/Bz49E0Qs.js","_app/immutable/entry/app.C78h82Ch.js","_app/immutable/chunks/DCA0QHLj.js","_app/immutable/chunks/BG_4ERly.js","_app/immutable/chunks/C58DHta9.js","_app/immutable/chunks/Bz49E0Qs.js","_app/immutable/chunks/D5Jz5CkP.js","_app/immutable/chunks/Cv3ajRBm.js","_app/immutable/chunks/D_4YAnl1.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
