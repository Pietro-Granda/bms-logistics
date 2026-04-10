<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>BMS Logistics | Trasporto integrato, magazzino e last mile</title>
	<meta
		name="description"
		content="BMS Logistics struttura trasporto, magazzino, routing e last mile per aziende che cercano controllo operativo, velocita e supporto logistico scalabile."
	/>
	<meta name="robots" content="index,follow" />
	<meta name="theme-color" content="#111111" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="BMS Logistics | Trasporto integrato, magazzino e last mile" />
	<meta
		property="og:description"
		content="Un sito logistico premium pensato per posizionare BMS Logistics come partner B2B solido, rapido e strutturato."
	/>
	<meta property="og:locale" content="it_IT" />
	<meta name="twitter:card" content="summary_large_image" />
	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'BMS Logistics',
			description: 'Servizi integrati di trasporto, magazzino e last mile per operazioni logistiche B2B.',
			email: 'info@bmslogistics.it',
			telephone: '+39 349 330 6316',
			areaServed: ['Italia', 'Europa'],
			knowsAbout: ['Last mile delivery', 'Trasporto', 'Magazzino', 'Routing', 'Tracking']
		})}
	</script>
</svelte:head>

<section class="hero hero--home">
	<div class="container hero-grid">
		<Reveal>
			<div class="hero-copy">
				<span class="eyebrow">Trasporto integrato, magazzino e last mile</span>
				<h1>Pensata per muovere la logistica B2B con velocita, controllo e visibilita sul campo.</h1>
				<p>
					BMS Logistics collega trasporto, warehousing, routing e consegna finale in un'unica catena operativa,
					aiutando brand e distributori a muoversi piu velocemente con piu struttura e meno attrito.
				</p>
				<div class="hero-actions">
					<a class="button button--accent" href="{base}/it/contact">Richiedi un preventivo</a>
					<a class="button button--ghost" href="{base}/it/operations">Scopri l'operativita</a>
				</div>
				<ul class="hero-tags" aria-label="Punti di forza principali">
					<li>Hub di Monza e Bernate</li>
					<li>Visibilita su routing e tracking</li>
					<li>Mentalita commerciale B2B</li>
				</ul>
			</div>
		</Reveal>

		<Reveal>
			<div class="hero-visual">
				<article class="visual-card visual-card--lead">
					<span class="panel-kicker">Control Tower</span>
					<h2>Un solo partner logistico per un'esecuzione leggibile, scalabile e responsabile.</h2>
					<p>
						Dal coordinamento di staging e dispatch alla pianificazione delle rotte e alla prova di consegna,
						ogni fase e progettata per sostenere la stabilita operativa.
					</p>
				</article>

				<div class="visual-stack">
					<article class="mini-card">
						<span>Trasporto</span>
						<strong>Movimentazione merci con coordinamento diretto e disciplina di servizio.</strong>
					</article>
					<article class="mini-card">
						<span>Last Mile</span>
						<strong>Flussi di consegna finale strutturati per esperienza cliente e timing.</strong>
					</article>
					<article class="mini-card">
						<span>Magazzino</span>
						<strong>Supporto operativo per staging, stoccaggio e uscita merce.</strong>
					</article>
					<article class="mini-card">
						<span>Tracking</span>
						<strong>Checkpoint chiari e visibilita della consegna lungo tutta l'operazione.</strong>
					</article>
				</div>
			</div>
		</Reveal>
	</div>
</section>

<section class="metric-strip">
	<div class="container metric-grid">
		<Reveal>
			<article class="metric-card">
				<span>Esperienza</span>
				<strong>10+</strong>
				<p>Anni di focus logistico al servizio di trasporto e consegne operative.</p>
			</article>
		</Reveal>
		<Reveal>
			<article class="metric-card">
				<span>Copertura</span>
				<strong>Italia</strong>
				<p>Capacita operativa nazionale con struttura pronta a espandersi.</p>
			</article>
		</Reveal>
		<Reveal>
			<article class="metric-card">
				<span>Rete</span>
				<strong>2 hubs</strong>
				<p>Nodi operativi a Monza e Bernate per staging e dispatch.</p>
			</article>
		</Reveal>
		<Reveal>
			<article class="metric-card">
				<span>Approccio</span>
				<strong>B2B</strong>
				<p>Pensato per aziende che richiedono chiarezza, reattivita e controllo esecutivo.</p>
			</article>
		</Reveal>
	</div>
</section>

<section class="section">
	<div class="container split-layout">
		<div class="section-intro" data-reveal>
			<span class="eyebrow">Profilo aziendale</span>
			<h2 class="section-title">
				Una struttura logistica pensata per aziende che non possono permettersi rumore operativo.
			</h2>
			<p class="section-copy">
				BMS Logistics tratta la logistica come un sistema competitivo, non come una semplice linea di trasporto.
				Il focus e diretto: esecuzione piu solida, comunicazione piu pulita e catena piu affidabile dall'inbound
				alla consegna finale.
			</p>
		</div>

		<article class="detail-panel" data-reveal>
			<p>
				BMS Logistics supporta aziende che cercano un partner capace di unire disciplina operativa e reattivita
				commerciale. Questo significa magazzino strutturato, trasporto affidabile, logica di routing e visibilita
				della consegna dentro un modello unico.
			</p>
			<ul class="check-list">
				<li>Visione integrata tra trasporto, magazzino e ultimo miglio</li>
				<li>Workflow disegnati sui vincoli reali dell'esecuzione</li>
				<li>Comunicazione chiara per team acquisti, logistica e commerciale</li>
				<li>Supporto flessibile per volumi ricorrenti, picchi e progetti custom</li>
			</ul>
		</article>
	</div>
</section>

<section class="section section--alt">
	<div class="container">
		<div class="section-intro section-intro--center" data-reveal>
			<span class="eyebrow">Servizi principali</span>
			<h2 class="section-title">Linee di servizio progettate per controllo, velocita e continuita.</h2>
			<p class="section-copy">
				Ogni servizio si inserisce in un modello logistico piu ampio, permettendo a BMS Logistics di sostenere i
				clienti con capacita operativa e logica esecutiva insieme.
			</p>
		</div>

		<div class="grid-cards grid-cards--4">
			<article class="card" data-reveal>
				<span class="card-icon" aria-hidden="true"></span>
				<h3>Last Mile Delivery</h3>
				<p>Consegna finale strutturata su finestre, puntualita e customer experience.</p>
			</article>
			<article class="card" data-reveal>
				<span class="card-icon" aria-hidden="true"></span>
				<h3>Trasporto</h3>
				<p>Movimentazione affidabile allineata a dispatch, route planning e follow-up operativo.</p>
			</article>
			<article class="card" data-reveal>
				<span class="card-icon" aria-hidden="true"></span>
				<h3>Magazzino</h3>
				<p>Supporto su stoccaggio, staging e preparazione outbound orientata al throughput.</p>
			</article>
			<article class="card" data-reveal>
				<span class="card-icon" aria-hidden="true"></span>
				<h3>Logistica e-commerce</h3>
				<p>Gestione dei flussi online con tempi rapidi e continuita di servizio anche sotto pressione.</p>
			</article>
		</div>

		<div class="section-actions" data-reveal>
			<a class="button" href="{base}/it/services">Esplora tutti i servizi</a>
		</div>
	</div>
</section>

<section class="section section--dark">
	<div class="container">
		<div class="section-intro section-intro--center" data-reveal>
			<span class="eyebrow">Perche BMS</span>
			<h2 class="section-title">
				Differenziali che rendono l'operazione piu leggibile e strutturata fin dal primo giorno.
			</h2>
			<p class="section-copy">
				Il valore non e solo muovere merce. E rendere la logistica piu gestibile, piu scalabile e piu affidabile.
			</p>
		</div>

		<div class="grid-cards grid-cards--4">
			<article class="card" data-reveal>
				<span class="card-icon" aria-hidden="true"></span>
				<h3>Chiarezza operativa</h3>
				<p>Workflow che aiutano i team a capire cosa sta succedendo e cosa va gestito subito.</p>
			</article>
			<article class="card" data-reveal>
				<span class="card-icon" aria-hidden="true"></span>
				<h3>Esecuzione sul campo</h3>
				<p>Processi costruiti su realta logistiche vive, non su modelli teorici.</p>
			</article>
			<article class="card" data-reveal>
				<span class="card-icon" aria-hidden="true"></span>
				<h3>Capacita flessibile</h3>
				<p>Supporto adattabile per flussi standard, stagionalita e variazioni operative rapide.</p>
			</article>
			<article class="card" data-reveal>
				<span class="card-icon" aria-hidden="true"></span>
				<h3>Logica custom</h3>
				<p>Soluzioni calibrate su complessita rotte, handling, SLA e processi cliente.</p>
			</article>
		</div>
	</div>
</section>

<section class="section">
	<div class="container proof-layout">
		<article class="proof-panel" data-reveal>
			<span class="eyebrow">Credibilita</span>
			<h2 class="section-title">Una presenza logistica concreta, costruita sull'operativita reale.</h2>
			<p class="section-copy">
				BMS Logistics mostra credibilita attraverso struttura: hub reali, servizi integrati, routing professionale,
				tracking e un approccio commerciale coerente con aspettative B2B.
			</p>

			<div class="ops-nodes">
				<div class="node-badge">
					<div>
						<span>Hub Monza</span>
						<strong>Staging e coordinamento dispatch</strong>
					</div>
					<b>Nord Italia</b>
				</div>
				<div class="node-badge">
					<div>
						<span>Hub Bernate</span>
						<strong>Supporto warehouse e rotte</strong>
					</div>
					<b>Operativo</b>
				</div>
				<div class="node-badge">
					<div>
						<span>Ufficio amministrativo</span>
						<strong>Via Copernico 4, Bolzano</strong>
					</div>
					<b>Italia</b>
				</div>
			</div>
		</article>

		<div class="grid-cards grid-cards--2">
			<article class="card" data-reveal>
				<h3>Mix servizi strutturato</h3>
				<p>Trasporto, magazzino, routing e tracking progettati per funzionare come modello unico.</p>
				<ul>
					<li>Meno frammentazione tra fornitori</li>
					<li>Comunicazione piu lineare tra team</li>
					<li>Controllo operativo piu forte</li>
				</ul>
			</article>
			<article class="card" data-reveal>
				<h3>Design per partnership</h3>
				<p>BMS Logistics e progettata per relazioni B2B continuative, non transazioni isolate.</p>
				<ul>
					<li>Risposta commerciale con profondita operativa</li>
					<li>Scope di servizio e rollout personalizzati</li>
					<li>Supporto scalabile nelle fasi di crescita</li>
				</ul>
			</article>
		</div>
	</div>
</section>

<section class="section section--tight">
	<div class="container">
		<div class="cta-band" data-reveal>
			<div>
				<span class="eyebrow">Prossimo passo</span>
				<h2>Costruisci una struttura logistica che cresce senza perdere controllo.</h2>
				<p>
					Confrontati con BMS Logistics su trasporto ricorrente, supporto magazzino, last mile o un modello
					operativo su misura per il tuo business.
				</p>
			</div>
			<a class="button button--accent" href="{base}/it/contact">Avvia la conversazione</a>
		</div>
	</div>
</section>

