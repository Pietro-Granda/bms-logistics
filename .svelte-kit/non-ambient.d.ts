
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/en" | "/en/about" | "/en/contact" | "/en/operations" | "/en/services" | "/en/solutions" | "/it" | "/it/about" | "/it/contact" | "/it/operations" | "/it/services" | "/it/solutions" | "/pt" | "/pt/about" | "/pt/contact" | "/pt/operations" | "/pt/services" | "/pt/solutions" | "/[...legacy]";
		RouteParams(): {
			"/[...legacy]": { legacy: string }
		};
		LayoutParams(): {
			"/": { legacy?: string };
			"/en": Record<string, never>;
			"/en/about": Record<string, never>;
			"/en/contact": Record<string, never>;
			"/en/operations": Record<string, never>;
			"/en/services": Record<string, never>;
			"/en/solutions": Record<string, never>;
			"/it": Record<string, never>;
			"/it/about": Record<string, never>;
			"/it/contact": Record<string, never>;
			"/it/operations": Record<string, never>;
			"/it/services": Record<string, never>;
			"/it/solutions": Record<string, never>;
			"/pt": Record<string, never>;
			"/pt/about": Record<string, never>;
			"/pt/contact": Record<string, never>;
			"/pt/operations": Record<string, never>;
			"/pt/services": Record<string, never>;
			"/pt/solutions": Record<string, never>;
			"/[...legacy]": { legacy: string }
		};
		Pathname(): "/" | "/en" | "/en/about" | "/en/contact" | "/en/operations" | "/en/services" | "/en/solutions" | "/it" | "/it/about" | "/it/contact" | "/it/operations" | "/it/services" | "/it/solutions" | "/pt" | "/pt/about" | "/pt/contact" | "/pt/operations" | "/pt/services" | "/pt/solutions" | `/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/assets/css/style.css" | "/assets/images/bms-logo.jpeg" | "/assets/js/main.js" | string & {};
	}
}