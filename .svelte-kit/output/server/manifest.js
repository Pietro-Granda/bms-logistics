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
		client: {start:"_app/immutable/entry/start.DY3obp5W.js",app:"_app/immutable/entry/app.DDMC7KDJ.js",imports:["_app/immutable/entry/start.DY3obp5W.js","_app/immutable/chunks/BHQOfGUj.js","_app/immutable/chunks/BloXseR0.js","_app/immutable/chunks/D229U804.js","_app/immutable/entry/app.DDMC7KDJ.js","_app/immutable/chunks/BloXseR0.js","_app/immutable/chunks/BpDke59Y.js","_app/immutable/chunks/CwqZEzDW.js","_app/immutable/chunks/DYV8BFW9.js","_app/immutable/chunks/dPunk7i_.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
