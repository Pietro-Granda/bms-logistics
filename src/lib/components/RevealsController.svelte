<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { onDestroy, onMount } from 'svelte';

	let observer: IntersectionObserver | undefined;
	let unsubscribeAfterNavigate: (() => void) | undefined;

	function scan() {
		const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]')).filter(
			(el) => !el.classList.contains('is-visible')
		);
		if (!elements.length) return;

		if (!('IntersectionObserver' in window)) {
			elements.forEach((el) => el.classList.add('is-visible'));
			return;
		}

		observer?.disconnect();
		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					(entry.target as HTMLElement).classList.add('is-visible');
					observer?.unobserve(entry.target);
				}
			},
			{ threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
		);

		elements.forEach((el) => observer?.observe(el));
	}

	onMount(() => {
		// Initial scan + rescan after every client-side navigation.
		scan();
		unsubscribeAfterNavigate = afterNavigate(() => scan());

		// Also rescan when URL changes (covers some edge cases).
		// Accessing page.url.pathname makes this reactive in Svelte 5.
		$effect(() => {
			page.url.pathname;
			queueMicrotask(() => scan());
		});
	});

	onDestroy(() => {
		unsubscribeAfterNavigate?.();
		observer?.disconnect();
	});
</script>

