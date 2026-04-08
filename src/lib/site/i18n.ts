export type Lang = 'it' | 'en' | 'pt';
export type PageKey = 'home' | 'about' | 'services' | 'solutions' | 'operations' | 'contact';

export function langFromPath(pathname: string): Lang {
	if (pathname.startsWith('/en')) return 'en';
	if (pathname.startsWith('/pt')) return 'pt';
	// Default language for root and /it/*
	return 'it';
}

export function hrefFor(lang: Lang, page: PageKey) {
	if (page === 'home') return lang === 'it' ? '/' : `/${lang}`;
	return `${lang === 'it' ? '/it' : `/${lang}`}/${page}`;
}

export function hrefWithBase(base: string, lang: Lang, page: PageKey) {
	const path = hrefFor(lang, page);
	if (!base) return path;
	if (path === '/') return `${base}/`;
	return `${base}${path}`;
}

export const ui = {
	it: {
		skip: 'Vai al contenuto',
		navAria: 'Navigazione principale',
		langAria: 'Seleziona lingua',
		navToggleOpen: 'Apri navigazione',
		navToggleClose: 'Chiudi navigazione',
		nav: {
			home: 'Home',
			about: 'Chi siamo',
			services: 'Servizi',
			solutions: 'Soluzioni',
			operations: 'Operativita',
			contact: 'Contatti',
			cta: 'Richiedi un preventivo'
		},
		footer: {
			navigate: 'Naviga',
			core: 'Servizi chiave',
			contact: 'Contatti',
			rights: 'Tutti i diritti riservati.',
			strap: 'Architettura statica pronta per GitHub Pages.'
		},
		whatsapp: 'Chatta con BMS Logistics su WhatsApp'
	},
	en: {
		skip: 'Skip to content',
		navAria: 'Primary navigation',
		langAria: 'Select language',
		navToggleOpen: 'Open navigation',
		navToggleClose: 'Close navigation',
		nav: {
			home: 'Home',
			about: 'About',
			services: 'Services',
			solutions: 'Solutions',
			operations: 'Operations',
			contact: 'Contact',
			cta: 'Request a Quote'
		},
		footer: {
			navigate: 'Navigate',
			core: 'Core Services',
			contact: 'Contact',
			rights: 'All rights reserved.',
			strap: 'Static architecture ready for GitHub Pages.'
		},
		whatsapp: 'Chat with BMS Logistics on WhatsApp'
	},
	pt: {
		skip: 'Ir para o conteudo',
		navAria: 'Navegacao principal',
		langAria: 'Selecionar idioma',
		navToggleOpen: 'Abrir navegacao',
		navToggleClose: 'Fechar navegacao',
		nav: {
			home: 'Home',
			about: 'Quem somos',
			services: 'Servicos',
			solutions: 'Solucoes',
			operations: 'Operacoes',
			contact: 'Contato',
			cta: 'Solicitar proposta'
		},
		footer: {
			navigate: 'Navegacao',
			core: 'Servicos principais',
			contact: 'Contato',
			rights: 'Todos os direitos reservados.',
			strap: 'Arquitetura estatica pronta para GitHub Pages.'
		},
		whatsapp: 'Conversar com a BMS Logistics no WhatsApp'
	}
} as const;

