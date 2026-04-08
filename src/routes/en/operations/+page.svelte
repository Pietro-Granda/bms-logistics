<script lang="ts">
	import raw from '../../../../en/operations.html?raw';
	import { extractLegacyPage } from '$lib/legacy/legacy';

	const page = extractLegacyPage(raw, { lang: 'en' });
</script>

<svelte:head>
	<meta name="bms-page" content="operations" />
</svelte:head>

{@html page.header}
<main id="main-content">{@html page.main}</main>
{@html page.footer}
{@html page.whatsapp}

