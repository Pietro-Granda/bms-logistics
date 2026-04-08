<script lang="ts">
	import raw from '../../../../en/about.html?raw';
	import { extractLegacyPage } from '$lib/legacy/legacy';

	const page = extractLegacyPage(raw, { lang: 'en' });
</script>

<svelte:head>
	<meta name="bms-page" content="about" />
</svelte:head>

{@html page.main}

