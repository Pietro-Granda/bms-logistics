<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { langFromPath, hrefWithBase, ui, type Lang } from '$lib/site/i18n';

	const lang: Lang = langFromPath(page.url.pathname);
	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="container footer-grid">
		<div class="footer-brand">
			<a class="brand brand--footer" href={hrefWithBase(base, lang, 'home')} aria-label="BMS Logistics">
				<img class="brand-logo" src="{base}/assets/images/bms-logo.jpeg" alt="BMS Logistics" />
			</a>
			<p>
				{#if lang === 'it'}
					BMS Logistics costruisce operazioni di trasporto, magazzino e ultimo miglio con una struttura
					commerciale e operativa piu solida.
				{:else if lang === 'en'}
					BMS Logistics builds transport, warehousing and final-mile operations with a sharper commercial and
					operational structure.
				{:else}
					A BMS Logistics estrutura operacoes de transporte, armazenagem e last mile com uma base comercial e
					operacional mais forte.
				{/if}
			</p>
		</div>

		<div>
			<h2 class="footer-title">{ui[lang].footer.navigate}</h2>
			<div class="footer-links">
				<a href={hrefWithBase(base, lang, 'about')}>{ui[lang].nav.about}</a>
				<a href={hrefWithBase(base, lang, 'services')}>{ui[lang].nav.services}</a>
				<a href={hrefWithBase(base, lang, 'solutions')}>{ui[lang].nav.solutions}</a>
				<a href={hrefWithBase(base, lang, 'operations')}>{ui[lang].nav.operations}</a>
				<a href={hrefWithBase(base, lang, 'contact')}>{ui[lang].nav.contact}</a>
			</div>
		</div>

		<div>
			<h2 class="footer-title">{ui[lang].footer.core}</h2>
			<div class="footer-links">
				<span>Last mile delivery</span>
				<span>{lang === 'en' ? 'Transport' : lang === 'pt' ? 'Transporte' : 'Trasporto'}</span>
				<span>{lang === 'en' ? 'Warehousing' : lang === 'pt' ? 'Armazenagem' : 'Magazzino'}</span>
				<span>{lang === 'en' ? 'Routing and tracking' : lang === 'pt' ? 'Roteirizacao e tracking' : 'Routing e tracking'}</span>
			</div>
		</div>

		<div>
			<h2 class="footer-title">{ui[lang].footer.contact}</h2>
			<div class="footer-links">
				<a href="tel:+393493306316">+39 349 330 6316</a>
				<a href="mailto:info@bmslogistics.it">info@bmslogistics.it</a>
				<a href="mailto:supporto@bmslogistics.it">supporto@bmslogistics.it</a>
				<span>
					{#if lang === 'en'}
						Monza Hub, Bernate Hub, Bolzano office
					{:else if lang === 'pt'}
						Hub de Monza, hub de Bernate, escritorio de Bolzano
					{:else}
						Hub di Monza, hub di Bernate, ufficio di Bolzano
					{/if}
				</span>
			</div>
		</div>
	</div>

	<div class="container footer-bottom">
		<p>&copy; {year} BMS Logistics. {ui[lang].footer.rights}</p>
		<p>{ui[lang].footer.strap}</p>
	</div>
</footer>

