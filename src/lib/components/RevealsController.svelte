<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let observer: IntersectionObserver | undefined;

	onMount(() => {
		const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
		if (!elements.length) return;

		if (!('IntersectionObserver' in window)) {
			elements.forEach((el) => el.classList.add('is-visible'));
			return;
		}

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
	});

	onDestroy(() => observer?.disconnect());
</script>

