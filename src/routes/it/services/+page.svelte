<script lang="ts">
	import raw from '../../../../it/services.html?raw';
	import { extractLegacyPage } from '$lib/legacy/legacy';

	const page = extractLegacyPage(raw, { lang: 'it' });
</script>

<svelte:head>
	<meta name="bms-page" content="services" />
</svelte:head>

{@html page.main}

