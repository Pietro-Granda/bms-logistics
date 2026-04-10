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
		client: {start:"_app/immutable/entry/start.BsLy5YyN.js",app:"_app/immutable/entry/app.uonvG5ln.js",imports:["_app/immutable/entry/start.BsLy5YyN.js","_app/immutable/chunks/rYHfybcS.js","_app/immutable/chunks/BPXR73E3.js","_app/immutable/chunks/B93q5soz.js","_app/immutable/entry/app.uonvG5ln.js","_app/immutable/chunks/BPXR73E3.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BEYggFEJ.js","_app/immutable/chunks/DW-62CI4.js","_app/immutable/chunks/B_5hj7G0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/6.js'))
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
		prerendered_routes: new Set(["/","/en","/it","/pt"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
