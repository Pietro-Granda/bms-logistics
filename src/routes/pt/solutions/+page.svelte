<script lang="ts">
	import raw from '../../../../pt/solutions.html?raw';
	import { extractLegacyPage } from '$lib/legacy/legacy';

	const page = extractLegacyPage(raw, { lang: 'pt' });
</script>

<svelte:head>
	<meta name="bms-page" content="solutions" />
</svelte:head>

{@html page.main}

