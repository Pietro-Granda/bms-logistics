<script lang="ts">
	import raw from '../../../index.html?raw';
	import { extractLegacyPage } from '$lib/legacy/legacy';

	const page = extractLegacyPage(raw, { lang: 'it' });
</script>

<svelte:head>
	<meta name="bms-page" content="home" />
</svelte:head>

{@html page.header}
<main id="main-content">{@html page.main}</main>
{@html page.footer}
{@html page.whatsapp}

