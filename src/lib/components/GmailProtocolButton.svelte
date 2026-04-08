<script lang="ts">
	// Nota: per sicurezza, Chrome permette `registerProtocolHandler` solo se l’URL handler
	// è nello STESSO origin della pagina che lo registra. Quindi non possiamo registrare
	// Gmail (mail.google.com) direttamente dal tuo sito.
</script>

<div class="gmail-helper">
	<a class="button button--ghost" href="https://mail.google.com/" target="_blank" rel="noreferrer">Apri Gmail</a>
	<p class="form-note gmail-helper__note">
		Per usare Gmail come gestore dei link email in Chrome, abilitalo da Gmail (icona “gestori protocollo” nella barra
		indirizzi). In alternativa, il form apre direttamente la schermata di composizione Gmail.
	</p>
</div>

<style>
	.gmail-helper {
		display: flex;
		gap: 0.75rem;
		align-items: flex-start;
		flex-wrap: wrap;
		margin-top: 0.75rem;
	}

	.gmail-helper__note {
		margin-top: 0;
		max-width: 70ch;
	}
</style>

