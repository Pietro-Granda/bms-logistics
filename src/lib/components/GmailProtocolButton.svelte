<script lang="ts">
	// Nota: per sicurezza, Chrome permette `registerProtocolHandler` solo se l’URL handler
	// è nello STESSO origin della pagina che lo registra. Quindi non possiamo registrare
	// Gmail (mail.google.com) direttamente dal tuo sito.
</script>

<div style="display:flex; gap:0.75rem; align-items:flex-start; flex-wrap:wrap; margin-top:0.75rem;">
	<a class="button button--ghost" href="https://mail.google.com/" target="_blank" rel="noreferrer">
		Apri Gmail
	</a>
	<small style="color: var(--gray-500); max-width: 70ch;">
		Per usare Gmail come gestore dei link email in Chrome, abilitalo da Gmail (icona “gestori protocollo” nella barra indirizzi) oppure usa il bottone di invio del form che apre direttamente la schermata di composizione Gmail.
	</small>
</div>

