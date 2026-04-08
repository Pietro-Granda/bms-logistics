import { i as head } from "../../../chunks/root.js";
import { e as extractLegacyPage, h as html } from "../../../chunks/legacy.js";
const raw = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>BMS Logistics | Trasporto integrato, magazzino e last mile</title>
  <meta name="description" content="BMS Logistics struttura trasporto, magazzino, routing e last mile per aziende che cercano controllo operativo, velocita e supporto logistico scalabile.">
  <meta name="robots" content="index,follow">
  <meta name="theme-color" content="#111111">
  <meta property="og:type" content="website">
  <meta property="og:title" content="BMS Logistics | Trasporto integrato, magazzino e last mile">
  <meta property="og:description" content="Un sito logistico premium pensato per posizionare BMS Logistics come partner B2B solido, rapido e strutturato.">
  <meta property="og:locale" content="it_IT">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/jpeg" href="assets/images/bms-logo.jpeg">
  <link rel="stylesheet" href="assets/css/style.css">
  <script defer src="assets/js/main.js"><\/script>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BMS Logistics",
      "description": "Servizi integrati di trasporto, magazzino e last mile per operazioni logistiche B2B.",
      "email": "info@bmslogistics.it",
      "telephone": "+39 349 330 6316",
      "areaServed": ["Italia", "Europa"],
      "knowsAbout": ["Last mile delivery", "Trasporto", "Magazzino", "Routing", "Tracking"]
    }
  <\/script>
</head>
<body data-page="home">
  <a class="skip-link" href="#main-content">Vai al contenuto</a>

  <header class="site-header">
    <div class="container header-bar">
      <a class="brand" href="index.html" aria-label="Homepage BMS Logistics"><img class="brand-logo" src="assets/images/bms-logo.jpeg" alt="BMS Logistics"></a>

      <div class="header-tools">
        <div class="language-switcher" role="group" aria-label="Seleziona lingua"><a class="language-switcher__button is-active" href="index.html" aria-current="page">IT</a><a class="language-switcher__button" href="en/index.html">EN</a><a class="language-switcher__button" href="pt/index.html">PT</a></div>

        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="Apri navigazione" data-nav-toggle data-label-open="Apri navigazione" data-label-close="Chiudi navigazione">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav class="site-nav" id="site-navigation" aria-label="Navigazione principale" data-nav>
        <a href="index.html" data-nav-link="home">Home</a>
        <a href="it/about.html" data-nav-link="about">Chi siamo</a>
        <a href="it/services.html" data-nav-link="services">Servizi</a>
        <a href="it/solutions.html" data-nav-link="solutions">Soluzioni</a>
        <a href="it/operations.html" data-nav-link="operations">Operativita</a>
        <a href="it/contact.html" data-nav-link="contact">Contatti</a>
        <a class="button button--small button--accent nav-cta" href="it/contact.html">Richiedi un preventivo</a>
      </nav>
    </div>
  </header>

  <main id="main-content">
    <section class="hero hero--home">
      <div class="container hero-grid">
        <div class="hero-copy" data-reveal>
          <span class="eyebrow">Trasporto integrato, magazzino e last mile</span>
          <h1>Pensata per muovere la logistica B2B con velocita, controllo e visibilita sul campo.</h1>
          <p>BMS Logistics collega trasporto, warehousing, routing e consegna finale in un'unica catena operativa, aiutando brand e distributori a muoversi piu velocemente con piu struttura e meno attrito.</p>
          <div class="hero-actions">
            <a class="button button--accent" href="it/contact.html">Richiedi un preventivo</a>
            <a class="button button--ghost" href="it/operations.html">Scopri l'operativita</a>
          </div>
          <ul class="hero-tags" aria-label="Punti di forza principali">
            <li>Hub di Monza e Bernate</li>
            <li>Visibilita su routing e tracking</li>
            <li>Mentalita commerciale B2B</li>
          </ul>
        </div>

        <div class="hero-visual" data-reveal>
          <article class="visual-card visual-card--lead">
            <span class="panel-kicker">Control Tower</span>
            <h2>Un solo partner logistico per un'esecuzione leggibile, scalabile e responsabile.</h2>
            <p>Dal coordinamento di staging e dispatch alla pianificazione delle rotte e alla prova di consegna, ogni fase e progettata per sostenere la stabilita operativa.</p>
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
      </div>
    </section>

    <section class="metric-strip">
      <div class="container metric-grid">
        <article class="metric-card" data-reveal>
          <span>Esperienza</span>
          <strong>10+</strong>
          <p>Anni di focus logistico al servizio di trasporto e consegne operative.</p>
        </article>
        <article class="metric-card" data-reveal>
          <span>Copertura</span>
          <strong>Italia</strong>
          <p>Capacita operativa nazionale con struttura pronta a espandersi.</p>
        </article>
        <article class="metric-card" data-reveal>
          <span>Rete</span>
          <strong>2 hubs</strong>
          <p>Nodi operativi a Monza e Bernate per staging e dispatch.</p>
        </article>
        <article class="metric-card" data-reveal>
          <span>Approccio</span>
          <strong>B2B</strong>
          <p>Pensato per aziende che richiedono chiarezza, reattivita e controllo esecutivo.</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="container split-layout">
        <div class="section-intro" data-reveal>
          <span class="eyebrow">Profilo aziendale</span>
          <h2 class="section-title">Una struttura logistica pensata per aziende che non possono permettersi rumore operativo.</h2>
          <p class="section-copy">BMS Logistics posiziona la logistica come un sistema competitivo, non come una semplice linea di trasporto. L'obiettivo e semplice: esecuzione piu pulita, comunicazione piu chiara e una catena piu affidabile dall'ingresso alla consegna finale.</p>
        </div>

        <article class="detail-panel" data-reveal>
          <p>BMS Logistics supporta aziende che cercano un partner logistico capace di unire disciplina operativa e reattivita commerciale. Significa far lavorare magazzino, trasporto, logica di routing e visibilita della consegna in un solo modello invece che in silos separati.</p>
          <ul class="check-list">
            <li>Visione integrata tra trasporto, magazzino e ultimo miglio</li>
            <li>Workflow operativi costruiti su vincoli reali di esecuzione</li>
            <li>Comunicazione chiara per procurement, logistica e team commerciali</li>
            <li>Supporto flessibile per volumi ricorrenti, picchi e progetti custom</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section-intro section-intro--center" data-reveal>
          <span class="eyebrow">Servizi principali</span>
          <h2 class="section-title">Linee di servizio costruite intorno a controllo, velocita e coerenza.</h2>
          <p class="section-copy">Ogni servizio e pensato per collegarsi a un modello logistico piu ampio, cosi BMS Logistics puo offrire capacita esecutiva e logica operativa insieme.</p>
        </div>

        <div class="grid-cards grid-cards--4">
          <article class="card" data-reveal>
            <span class="card-icon" aria-hidden="true"></span>
            <h3>Last Mile Delivery</h3>
            <p>Esecuzione finale strutturata per finestre di consegna, esperienza cliente e visibilita quotidiana.</p>
          </article>
          <article class="card" data-reveal>
            <span class="card-icon" aria-hidden="true"></span>
            <h3>Trasporto</h3>
            <p>Flussi di trasporto affidabili allineati a dispatch, route planning e follow-up operativo.</p>
          </article>
          <article class="card" data-reveal>
            <span class="card-icon" aria-hidden="true"></span>
            <h3>Magazzino</h3>
            <p>Stoccaggio, staging e preparazione outbound progettati per sostenere throughput reale.</p>
          </article>
          <article class="card" data-reveal>
            <span class="card-icon" aria-hidden="true"></span>
            <h3>E-commerce Logistics</h3>
            <p>Supporto a volumi online dinamici, coordinamento ordini e affidabilita della catena di consegna.</p>
          </article>
        </div>

        <div class="section-actions" data-reveal>
          <a class="button" href="it/services.html">Esplora tutti i servizi</a>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container">
        <div class="section-intro section-intro--center" data-reveal>
          <span class="eyebrow">Perche BMS</span>
          <h2 class="section-title">Differenziali che rendono l'operazione piu strutturata fin dal primo giorno.</h2>
          <p class="section-copy">Il valore non sta solo nel muovere la merce, ma nel rendere l'operazione piu gestibile, piu scalabile e piu affidabile.</p>
        </div>

        <div class="grid-cards grid-cards--4">
          <article class="card" data-reveal>
            <span class="card-icon" aria-hidden="true"></span>
            <h3>Chiarezza operativa</h3>
            <p>Workflow che aiutano i team a capire dove si trova la merce, cosa parte dopo e cosa richiede attenzione.</p>
          </article>
          <article class="card" data-reveal>
            <span class="card-icon" aria-hidden="true"></span>
            <h3>Esecuzione guidata dal campo</h3>
            <p>Processi costruiti sulle realta vive di trasporto e consegna, non su ipotesi generiche.</p>
          </article>
          <article class="card" data-reveal>
            <span class="card-icon" aria-hidden="true"></span>
            <h3>Capacita flessibile</h3>
            <p>Supporto adattabile per flussi standard, pressione stagionale e domanda operativa variabile.</p>
          </article>
          <article class="card" data-reveal>
            <span class="card-icon" aria-hidden="true"></span>
            <h3>Logica custom</h3>
            <p>Soluzioni su misura per complessita di routing, handling, livelli di servizio e workflow specifici del cliente.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container proof-layout">
        <article class="proof-panel" data-reveal>
          <span class="eyebrow">Credibilita</span>
          <h2 class="section-title">Un'impronta logistica reale perche costruita sull'operativita, non sulla decorazione.</h2>
          <p class="section-copy">BMS Logistics dimostra credibilita attraverso la struttura: hub reali, servizi integrati, routing professionale, visibilita di tracking e un approccio commerciale allineato alle aspettative B2B.</p>

          <div class="ops-nodes">
            <div class="node-badge">
              <div>
                <span>Hub di Monza</span>
                <strong>Staging e coordinamento dispatch</strong>
              </div>
              <b>Nord Italia</b>
            </div>
            <div class="node-badge">
              <div>
                <span>Hub di Bernate</span>
                <strong>Supporto magazzino e route management</strong>
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
            <p>Trasporto, magazzino, routing e tracking sono progettati per lavorare come un unico modello operativo.</p>
            <ul>
              <li>Meno frammentazione tra fornitori</li>
              <li>Comunicazione piu pulita tra i team</li>
              <li>Maggiore controllo operativo</li>
            </ul>
          </article>
          <article class="card" data-reveal>
            <h3>Pensata per partnership</h3>
            <p>BMS Logistics si posiziona per relazioni B2B continuative, non per transazioni isolate.</p>
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
            <h2>Costruisci una logistica capace di sostenere la crescita senza perdere controllo.</h2>
            <p>Confrontati con BMS Logistics su trasporti ricorrenti, supporto magazzino, esecuzione last mile o un modello operativo personalizzato per il tuo business.</p>
          </div>
          <a class="button button--accent" href="it/contact.html">Inizia la conversazione</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a class="brand brand--footer" href="index.html" aria-label="Homepage BMS Logistics"><img class="brand-logo" src="assets/images/bms-logo.jpeg" alt="BMS Logistics"></a>
        <p>BMS Logistics costruisce operazioni di trasporto, magazzino e ultimo miglio con una struttura commerciale e operativa piu solida.</p>
      </div>
      <div>
        <h2 class="footer-title">Naviga</h2>
        <div class="footer-links">
          <a href="it/about.html">Chi siamo</a>
          <a href="it/services.html">Servizi</a>
          <a href="it/solutions.html">Soluzioni</a>
          <a href="it/operations.html">Operativita</a>
          <a href="it/contact.html">Contatti</a>
        </div>
      </div>
      <div>
        <h2 class="footer-title">Servizi chiave</h2>
        <div class="footer-links">
          <span>Last mile delivery</span>
          <span>Trasporto</span>
          <span>Magazzino</span>
          <span>Routing e tracking</span>
        </div>
      </div>
      <div>
        <h2 class="footer-title">Contatti</h2>
        <div class="footer-links">
          <a href="tel:+393493306316">+39 349 330 6316</a>
          <a href="mailto:info@bmslogistics.it">info@bmslogistics.it</a>
          <a href="mailto:supporto@bmslogistics.it">supporto@bmslogistics.it</a>
          <span>Hub di Monza, hub di Bernate, ufficio di Bolzano</span>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>&copy; <span data-current-year></span> BMS Logistics. Tutti i diritti riservati.</p>
      <p>Architettura statica pronta per cPanel, IONOS e rollout multilingua.</p>
    </div>
  </footer>

  <a class="floating-whatsapp" href="https://wa.me/393493306316" target="_blank" rel="noreferrer" aria-label="Chatta con BMS Logistics su WhatsApp">WhatsApp</a>
</body>
</html>
`;
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const page = extractLegacyPage(raw, { lang: "it" });
    head("ty5ak6", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<meta name="bms-page" content="home"/>`);
    });
    $$renderer2.push(`${html(page.header)} <main id="main-content">${html(page.main)}</main> ${html(page.footer)} ${html(page.whatsapp)}`);
  });
}
export {
  _page as default
};
