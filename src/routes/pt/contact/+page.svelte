<script lang="ts">
	import raw from '../../../../pt/contact.html?raw';
	import { extractLegacyPage } from '$lib/legacy/legacy';

	const page = extractLegacyPage(raw, { lang: 'pt' });
</script>

<svelte:head>
	<meta name="bms-page" content="contact" />
</svelte:head>

{@html page.header}
<main id="main-content">{@html page.main}</main>
{@html page.footer}
{@html page.whatsapp}

