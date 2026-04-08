<script lang="ts">
	import raw from '../../../../en/contact.html?raw';
	import { extractLegacyPage } from '$lib/legacy/legacy';

	const page = extractLegacyPage(raw, { lang: 'en' });
</script>

<svelte:head>
	<meta name="bms-page" content="contact" />
</svelte:head>

{@html page.main}

