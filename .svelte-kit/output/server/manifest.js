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
		client: {start:"_app/immutable/entry/start.Bx3lGiRw.js",app:"_app/immutable/entry/app.a2N_qzZH.js",imports:["_app/immutable/entry/start.Bx3lGiRw.js","_app/immutable/chunks/CO0Gzm7d.js","_app/immutable/chunks/Cgm38Fyv.js","_app/immutable/chunks/eN0AU0yB.js","_app/immutable/chunks/CGa-3mlF.js","_app/immutable/entry/app.a2N_qzZH.js","_app/immutable/chunks/Cgm38Fyv.js","_app/immutable/chunks/BaqY7G0L.js","_app/immutable/chunks/DNdwAvvE.js","_app/immutable/chunks/CGa-3mlF.js","_app/immutable/chunks/DUOsRypa.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/en","/en/about","/en/contact","/en/operations","/en/services","/en/solutions","/it","/it/about","/it/contact","/it/operations","/it/services","/it/solutions","/pt","/pt/about","/pt/contact","/pt/operations","/pt/services","/pt/solutions"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
