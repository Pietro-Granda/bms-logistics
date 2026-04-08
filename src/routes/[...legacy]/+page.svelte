<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	const pathname = $derived(page.url.pathname);

	function stripBase(path: string) {
		if (!base) return path;
		return path.startsWith(base) ? path.slice(base.length) || '/' : path;
	}

	function mapLegacyHtmlToRoute(path: string) {
		// expects a base-less path starting with '/'
		if (!path.endsWith('.html')) return null;

		// Normalize index pages
		if (path === '/index.html') return '/';
		if (path === '/en/index.html') return '/en';
		if (path === '/pt/index.html') return '/pt';

		// Language folders with .html pages -> same route without extension
		// e.g. /it/services.html -> /it/services
		// e.g. /en/contact.html -> /en/contact
		return path.replace(/\.html$/, '');
	}

	let target = $state<string | null>(null);

	onMount(async () => {
		const rel = stripBase(pathname);
		target = mapLegacyHtmlToRoute(rel);

		if (target) {
			await goto(`${base}${target === '/' ? '/' : target}`, { replaceState: true });
		}
	});
</script>

{#if target}
	<p class="container" style="padding: 3rem 0;">
		Reindirizzamento in corso…
	</p>
{:else}
	<p class="container" style="padding: 3rem 0;">
		Pagina non trovata.
	</p>
{/if}

