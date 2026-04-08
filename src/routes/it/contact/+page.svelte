<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import GmailProtocolButton from '$lib/components/GmailProtocolButton.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Contatti | BMS Logistics Preventivi, supporto e WhatsApp</title>
	<meta
		name="description"
		content="Contatta BMS Logistics per trasporto, magazzino, routing e supporto last mile. Richiedi un preventivo, scrivi al team via email, telefono o WhatsApp e consulta la mappa operativa."
	/>
</svelte:head>

<section class="page-hero">
	<div class="container hero-grid">
		<Reveal>
			<div>
				<nav class="breadcrumbs" aria-label="Percorso">
					<a href="{base}/">Home</a>
					<span class="separator" aria-hidden="true"></span>
					<span>Contatti</span>
				</nav>
				<span class="eyebrow">Contatta BMS Logistics</span>
				<h1>Avvia una conversazione logistica costruita su esigenze operative reali.</h1>
				<p>
					Usa il modulo qui sotto per richiedere un preventivo, discutere l'ambito del servizio o iniziare una
					conversazione di partnership logistica. Per un contatto immediato, raggiungi il team direttamente via
					telefono, email o WhatsApp.
				</p>
			</div>
		</Reveal>
		<Reveal>
			<aside class="hero-panel">
				<span class="panel-kicker">Accesso rapido</span>
				<h2>Canali diretti per contatto commerciale e operativo.</h2>
				<ul class="hero-panel-list">
					<li><strong>Telefono</strong><span>+39 349 330 6316</span></li>
					<li><strong>Email</strong><span>info@bmslogistics.it</span></li>
					<li><strong>WhatsApp</strong><span>Canale diretto a risposta rapida</span></li>
				</ul>
			</aside>
		</Reveal>
	</div>
</section>

<section class="section">
	<div class="container contact-layout">
		<Reveal>
			<aside class="contact-panel">
				<span class="eyebrow">Contatto diretto</span>
				<h2>Raggiungi il canale giusto per preventivi, supporto o allineamento operativo.</h2>
				<div class="contact-list">
					<div class="contact-item"><span>Linea commerciale</span><a href="tel:+393493306316">+39 349 330 6316</a></div>
					<div class="contact-item"><span>WhatsApp</span><a href="https://wa.me/393493306316" target="_blank" rel="noreferrer">Apri chat WhatsApp</a></div>
					<div class="contact-item"><span>Email commerciale</span><a href="mailto:gustavo@bmslogistics.it">gustavo@bmslogistics.it</a></div>
					<div class="contact-item"><span>Email principale</span><a href="mailto:info@bmslogistics.it">info@bmslogistics.it</a></div>
					<div class="contact-item"><span>Email supporto</span><a href="mailto:supporto@bmslogistics.it">supporto@bmslogistics.it</a></div>
					<div class="contact-item"><span>PEC</span><a href="mailto:bmslogistics@pec-mail.it">bmslogistics@pec-mail.it</a></div>
					<div class="contact-item"><span>Partita IVA</span><p>03295030211</p></div>
					<div class="contact-item"><span>Ufficio amministrativo</span><p>Via Copernico 4, 39100 Bolzano, Italia</p></div>
					<div class="contact-item"><span>Hub operativi</span><p>Hub di Monza e Hub di Bernate Ticino</p></div>
				</div>
			</aside>
		</Reveal>

		<Reveal>
			<div class="form-card">
				<span class="eyebrow">Modulo richiesta</span>
				<h2>Raccontaci di cosa ha bisogno la tua operazione.</h2>
				<ContactForm lang="it" />
				<GmailProtocolButton />
			</div>
		</Reveal>
	</div>
</section>

<section class="section section--alt">
	<div class="container network-layout">
		<Reveal>
			<div class="section-intro">
				<span class="eyebrow">Mappa e presenza</span>
				<h2 class="section-title">
					Una mappa reale per il punto amministrativo e una vista strutturata dei nodi operativi BMS.
				</h2>
				<p class="section-copy">
					L'ufficio amministrativo di Bolzano e il riferimento principale per i contatti. Il diagramma operativo
					continua a mostrare come la struttura si estende anche verso Monza e Bernate Ticino.
				</p>
			</div>
		</Reveal>
		<Reveal>
			<div class="map-layout map-layout--stacked">
				<div class="map-embed">
					<iframe
						title="Mappa ufficio BMS Logistics Bolzano"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						src="https://www.google.com/maps?q=Via%20Copernico%204%2C%2039100%20Bolzano%2C%20Italy&output=embed"
					></iframe>
				</div>
				<div class="location-grid">
					<article class="location-card">
						<small>Ufficio amministrativo</small>
						<strong>Bolzano</strong>
						<p>Via Copernico 4, 39100 Bolzano, Italia.</p>
						<a
							href="https://www.google.com/maps/search/?api=1&query=Via+Copernico+4%2C+39100+Bolzano%2C+Italy"
							target="_blank"
							rel="noreferrer"
							>Apri in Google Maps</a
						>
					</article>
					<article class="location-card">
						<small>Hub operativo</small>
						<strong>Monza Brianza</strong>
						<p>Presidio operativo per staging, dispatch e rilascio rotte.</p>
					</article>
					<article class="location-card">
						<small>Hub operativo</small>
						<strong>Bernate Ticino</strong>
						<p>Supporto warehouse e continuita per la catena logistica.</p>
					</article>
				</div>
				<div class="network-board" aria-label="Mappa contatti BMS Logistics">
					<span class="network-line line--1" aria-hidden="true"></span>
					<span class="network-line line--2" aria-hidden="true"></span>
					<article class="network-node node--bolzano"><small>Ufficio</small><strong>Bolzano</strong><p>Ufficio amministrativo e contatto centrale.</p></article>
					<article class="network-node node--monza"><small>Hub</small><strong>Monza</strong><p>Nodo operativo per dispatch e rilascio rotte.</p></article>
					<article class="network-node node--bernate"><small>Hub</small><strong>Bernate Ticino</strong><p>Supporto di magazzino e continuita per la catena.</p></article>
				</div>
			</div>
		</Reveal>
	</div>
</section>

