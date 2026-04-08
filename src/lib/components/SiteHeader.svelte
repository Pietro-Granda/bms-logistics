<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { langFromPath, hrefWithBase, pageKeyFromPathname, ui, type Lang, type PageKey } from '$lib/site/i18n';

	const lang: Lang = $derived(langFromPath(page.url.pathname));

	const current: PageKey = $derived(pageKeyFromPathname(page.url.pathname));

	let navOpen = $state(false);
	let scrolled = $state(false);

	const closeNav = () => (navOpen = false);

	const onScroll = () => {
		scrolled = window.scrollY > 24;
	};

	const onKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') closeNav();
	};

	const onResize = () => {
		if (window.innerWidth >= 960) closeNav();
	};

	$effect(() => {
		// Close mobile nav when navigating to a new route.
		page.url.pathname;
		closeNav();
	});
</script>

<svelte:window onscroll={onScroll} onkeydown={onKeydown} onresize={onResize} />

<header class="site-header" class:is-scrolled={scrolled}>
	<div class="container header-bar">
		<a class="brand" href={hrefWithBase(base, lang, 'home')} aria-label="BMS Logistics">
			<img class="brand-logo" src="{base}/assets/images/bms-logo.jpeg" alt="BMS Logistics" />
		</a>

		<div class="header-tools">
			<div class="language-switcher" role="group" aria-label={ui[lang].langAria}>
				<a
					class="language-switcher__button"
					class:is-active={lang === 'it'}
					href={hrefWithBase(base, 'it', current)}
					aria-current={lang === 'it' ? 'page' : undefined}
					>IT</a
				>
				<a
					class="language-switcher__button"
					class:is-active={lang === 'en'}
					href={hrefWithBase(base, 'en', current)}
					aria-current={lang === 'en' ? 'page' : undefined}
					>EN</a
				>
				<a
					class="language-switcher__button"
					class:is-active={lang === 'pt'}
					href={hrefWithBase(base, 'pt', current)}
					aria-current={lang === 'pt' ? 'page' : undefined}
					>PT</a
				>
			</div>

			<button
				class="nav-toggle"
				type="button"
				aria-expanded={navOpen}
				aria-controls="site-navigation"
				aria-label={navOpen ? ui[lang].navToggleClose : ui[lang].navToggleOpen}
				onclick={() => (navOpen = !navOpen)}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>

		<nav
			class="site-nav"
			id="site-navigation"
			aria-label={ui[lang].navAria}
			style:opacity={navOpen || page.url.pathname.length ? undefined : undefined}
			data-nav
			class:is-open={navOpen}
		>
			<a class:is-current={current === 'home'} href={hrefWithBase(base, lang, 'home')}>{ui[lang].nav.home}</a>
			<a class:is-current={current === 'about'} href={hrefWithBase(base, lang, 'about')}>{ui[lang].nav.about}</a>
			<a class:is-current={current === 'services'} href={hrefWithBase(base, lang, 'services')}>{ui[lang].nav.services}</a>
			<a class:is-current={current === 'solutions'} href={hrefWithBase(base, lang, 'solutions')}>{ui[lang].nav.solutions}</a>
			<a class:is-current={current === 'operations'} href={hrefWithBase(base, lang, 'operations')}>{ui[lang].nav.operations}</a>
			<a class:is-current={current === 'contact'} href={hrefWithBase(base, lang, 'contact')}>{ui[lang].nav.contact}</a>
			<a class="button button--small button--accent nav-cta" href={hrefWithBase(base, lang, 'contact')}
				>{ui[lang].nav.cta}</a
			>
		</nav>
	</div>
</header>

<style>
	/* Reuse existing CSS behavior that relies on body.nav-open */
	:global(body.nav-open) .site-nav {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}
	:global(body.nav-open) {
		overflow: hidden;
	}
</style>

<svelte:body class:nav-open={navOpen} />

