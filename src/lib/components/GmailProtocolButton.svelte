<script lang="ts">
	let state: 'idle' | 'ok' | 'error' = 'idle';
	let message = '';

	function enableGmailHandler() {
		try {
			if (!('registerProtocolHandler' in navigator)) {
				state = 'error';
				message = 'Questo browser non supporta registerProtocolHandler.';
				return;
			}

			// Chrome will show a permission prompt after this user gesture.
			// Gmail expects the mailto URL in the `url` query param.
			navigator.registerProtocolHandler(
				'mailto',
				'https://mail.google.com/mail/?extsrc=mailto&url=%s',
				'Gmail'
			);

			state = 'ok';
			message = 'Fatto: ora conferma su Chrome “Consenti”.';
		} catch (err) {
			state = 'error';
			message = err instanceof Error ? err.message : 'Errore durante la registrazione.';
		}
	}
</script>

<div style="display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap; margin-top:0.75rem;">
	<button class="button button--ghost" type="button" onclick={enableGmailHandler}>
		Usa Gmail per i link email
	</button>
	{#if state !== 'idle'}
		<small style="color: var(--gray-500);">{message}</small>
	{/if}
</div>

