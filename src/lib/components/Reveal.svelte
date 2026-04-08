<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let el: HTMLElement | null = null;
	let visible = false;
	let observer: IntersectionObserver | undefined;

	onMount(() => {
		if (!el) return;
		if (!('IntersectionObserver' in window)) {
			visible = true;
			return;
		}

		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					visible = true;
					observer?.disconnect();
					break;
				}
			},
			{ threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
		);

		observer.observe(el);
	});

	onDestroy(() => observer?.disconnect());
</script>

<div bind:this={el} data-reveal class:is-visible={visible}>
	<slot />
</div>

