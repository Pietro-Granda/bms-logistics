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
		client: {start:"_app/immutable/entry/start.CqDkzNqy.js",app:"_app/immutable/entry/app.DsleMqUT.js",imports:["_app/immutable/entry/start.CqDkzNqy.js","_app/immutable/chunks/CP24cHrs.js","_app/immutable/chunks/DLNQzOI8.js","_app/immutable/chunks/BadkUb80.js","_app/immutable/entry/app.DsleMqUT.js","_app/immutable/chunks/DLNQzOI8.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DXESjpyK.js","_app/immutable/chunks/C7dfRdk_.js","_app/immutable/chunks/CLpD8Wj_.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
