<script lang="ts">
	import raw from '../../../../en/services.html?raw';
	import { extractLegacyPage } from '$lib/legacy/legacy';

	const page = extractLegacyPage(raw, { lang: 'en' });
</script>

<svelte:head>
	<meta name="bms-page" content="services" />
</svelte:head>

{@html page.header}
<main id="main-content">{@html page.main}</main>
{@html page.footer}
{@html page.whatsapp}

