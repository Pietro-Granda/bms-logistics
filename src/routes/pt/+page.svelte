<script lang="ts">
	import raw from '../../../pt/index.html?raw';
	import { extractLegacyPage } from '$lib/legacy/legacy';

	const page = extractLegacyPage(raw, { lang: 'pt' });
</script>

<svelte:head>
	<meta name="bms-page" content="home" />
</svelte:head>

{@html page.main}

