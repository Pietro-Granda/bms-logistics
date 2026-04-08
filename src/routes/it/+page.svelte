<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	onMount(() => {
		// Italian home is the root route. Keep /it as a convenience redirect.
		goto(`${base}/`, { replaceState: true });
	});
</script>

<svelte:head>
	<title>BMS Logistics | Trasporto, Magazzino e Last Mile</title>
	<meta name="robots" content="noindex,follow" />
</svelte:head>

<p class="sr-only">Redirecting…</p>

