<script lang="ts">
	import { page } from '$app/state';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import WhatsAppLink from '$lib/components/WhatsAppLink.svelte';
	import RevealsController from '$lib/components/RevealsController.svelte';
	import { langFromPath } from '$lib/site/i18n';

	let { children } = $props();

	const lang = $derived(langFromPath(page.url.pathname));
	const skipText = $derived(
		lang === 'en' ? 'Skip to content' : lang === 'pt' ? 'Ir para o conteudo' : 'Vai al contenuto'
	);
</script>

<a class="skip-link" href="#main-content">{skipText}</a>

<SiteHeader />
<RevealsController />

<main id="main-content">
	{@render children()}
</main>

<SiteFooter />
<WhatsAppLink {lang} />

