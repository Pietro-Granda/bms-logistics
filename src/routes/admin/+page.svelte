<script lang="ts">
	type EditableContent = {
		heroTitle: string;
		heroSubtitle: string;
		contactEmail: string;
		contactPhone: string;
		ctaLabel: string;
	};

	const storageKey = 'bms-admin-content-v1';

	let content: EditableContent = {
		heroTitle: 'BMS Logistics',
		heroSubtitle: 'Integrated transport, warehousing and last mile.',
		contactEmail: 'info@bmslogistics.it',
		contactPhone: '+39 349 330 6316',
		ctaLabel: 'Request a quote'
	};

	let status = '';

	if (typeof window !== 'undefined') {
		const saved = window.localStorage.getItem(storageKey);
		if (saved) {
			try {
				content = JSON.parse(saved) as EditableContent;
			} catch {
				// Keep defaults if local data is malformed.
			}
		}
	}

	function saveLocal() {
		window.localStorage.setItem(storageKey, JSON.stringify(content, null, 2));
		status = 'Saved locally in this browser.';
	}

	function resetDefaults() {
		window.localStorage.removeItem(storageKey);
		content = {
			heroTitle: 'BMS Logistics',
			heroSubtitle: 'Integrated transport, warehousing and last mile.',
			contactEmail: 'info@bmslogistics.it',
			contactPhone: '+39 349 330 6316',
			ctaLabel: 'Request a quote'
		};
		status = 'Reset to defaults.';
	}

	function downloadJson() {
		const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
		const href = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = href;
		a.download = 'bms-content.json';
		document.body.appendChild(a);
		a.click();
		a.remove();
		URL.revokeObjectURL(href);
		status = 'Exported bms-content.json.';
	}
</script>

<svelte:head>
	<title>Admin | BMS Logistics Simple Content Panel</title>
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

<section class="admin-shell">
	<div class="container admin-grid">
		<div class="section-intro">
			<span class="eyebrow">Simple Content Panel</span>
			<h1 class="section-title">Basic content editing for future expansions</h1>
			<p class="section-copy">
				This panel is static and client-side. It is designed as a lightweight base for future server-backed CMS
				integration.
			</p>
		</div>

		<div class="admin-panel-grid">
			<article class="card admin-card admin-card--narrow">
				<h2>Editable fields</h2>
				<div class="field-grid">
					<div class="field field--full">
						<label for="hero-title">Hero title</label>
						<input id="hero-title" bind:value={content.heroTitle} />
					</div>
					<div class="field field--full">
						<label for="hero-subtitle">Hero subtitle</label>
						<input id="hero-subtitle" bind:value={content.heroSubtitle} />
					</div>
					<div class="field">
						<label for="contact-email">Contact email</label>
						<input id="contact-email" type="email" bind:value={content.contactEmail} />
					</div>
					<div class="field">
						<label for="contact-phone">Contact phone</label>
						<input id="contact-phone" bind:value={content.contactPhone} />
					</div>
					<div class="field field--full">
						<label for="cta-label">CTA label</label>
						<input id="cta-label" bind:value={content.ctaLabel} />
					</div>
				</div>

				<div class="admin-actions">
					<button class="button button--accent" type="button" on:click={saveLocal}>Save Local</button>
					<button class="button button--ghost" type="button" on:click={downloadJson}>Export JSON</button>
					<button class="button button--ghost" type="button" on:click={resetDefaults}>Reset</button>
				</div>
				{#if status}
					<p class="form-note">{status}</p>
				{/if}
			</article>

			<article class="card admin-card">
				<h2>Live JSON preview</h2>
				<pre>{JSON.stringify(content, null, 2)}</pre>
			</article>
		</div>
	</div>
</section>
