<script lang="ts">
	import raw from '../../../../en/solutions.html?raw';
	import { extractLegacyPage } from '$lib/legacy/legacy';

	const page = extractLegacyPage(raw, { lang: 'en' });
</script>

<svelte:head>
	<meta name="bms-page" content="solutions" />
</svelte:head>

{@html page.main}

