<script lang="ts">
	import { ui, type Lang } from '$lib/site/i18n';

	export let lang: Lang;

	type Service =
		| ''
		| 'last-mile'
		| 'transport'
		| 'warehousing'
		| 'routing-tracking'
		| 'custom-solution';
	type Volume = '' | 'pilot' | 'small' | 'medium' | 'high';

	let full_name = '';
	let company = '';
	let email = '';
	let phone = '';
	let service: Service = '';
	let volume: Volume = '';
	let message = '';
	let consent = false;

	let feedback: { state: 'idle' | 'error' | 'success'; message: string } = { state: 'idle', message: '' };

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	const phonePattern = /^[+()0-9\s-]{7,}$/;

	function required(label: string, value: string) {
		return value.trim() ? '' : `${label} ${lang === 'en' ? 'is required.' : lang === 'pt' ? 'e obrigatorio.' : 'e obbligatorio.'}`;
	}

	function validate() {
		if (required(lang === 'en' ? 'Full name' : lang === 'pt' ? 'Nome completo' : 'Nome e cognome', full_name))
			return false;
		if (required(lang === 'en' ? 'Company' : lang === 'pt' ? 'Empresa' : 'Azienda', company)) return false;
		if (!emailPattern.test(email.trim())) return false;
		if (!phonePattern.test(phone.trim())) return false;
		if (!service) return false;
		if (!volume) return false;
		if (message.trim().length < 20) return false;
		if (!consent) return false;
		return true;
	}

	function onSubmit(event: SubmitEvent) {
		event.preventDefault();

		if (!validate()) {
			feedback = {
				state: 'error',
				message:
					lang === 'en'
						? 'Please review the highlighted fields before sending your request.'
						: lang === 'pt'
							? 'Revise os campos destacados antes de enviar a solicitacao.'
							: 'Controlla i campi evidenziati prima di inviare la richiesta.'
			};
			return;
		}

		const subject = `BMS Logistics - ${company || (lang === 'en' ? 'Request' : lang === 'pt' ? 'Solicitacao' : 'Richiesta')}`;
		const bodyLines = [
			`${lang === 'en' ? 'Name' : lang === 'pt' ? 'Nome' : 'Nome'}: ${full_name}`,
			`${lang === 'en' ? 'Company' : lang === 'pt' ? 'Empresa' : 'Azienda'}: ${company}`,
			`Email: ${email}`,
			`${lang === 'en' ? 'Phone' : lang === 'pt' ? 'Telefone' : 'Telefono'}: ${phone}`,
			`${lang === 'en' ? 'Service' : lang === 'pt' ? 'Servico' : 'Servizio'}: ${service}`,
			`${lang === 'en' ? 'Volume' : lang === 'pt' ? 'Volume' : 'Volume'}: ${volume}`,
			'',
			message
		];

		const mailto = `mailto:info@bmslogistics.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
			bodyLines.join('\n')
		)}`;

		feedback = {
			state: 'success',
			message:
				lang === 'en'
					? 'Opening your email client with a pre-filled request...'
					: lang === 'pt'
						? 'Abrindo seu email com a solicitacao pre-preenchida...'
						: "Apro il tuo client email con la richiesta precompilata..."
		};

		window.location.href = mailto;
	}
</script>

<form novalidate onsubmit={onSubmit}>
	<div class="field-grid">
		<div class="field">
			<label for="full-name">{lang === 'en' ? 'Full name' : lang === 'pt' ? 'Nome completo' : 'Nome e cognome'}</label>
			<input id="full-name" bind:value={full_name} type="text" autocomplete="name" required />
			<p class="field-message" aria-live="polite"></p>
		</div>
		<div class="field">
			<label for="company">{lang === 'en' ? 'Company' : lang === 'pt' ? 'Empresa' : 'Azienda'}</label>
			<input id="company" bind:value={company} type="text" autocomplete="organization" required />
			<p class="field-message" aria-live="polite"></p>
		</div>
		<div class="field">
			<label for="email">{lang === 'en' ? 'Business email' : lang === 'pt' ? 'Email corporativo' : 'Email aziendale'}</label>
			<input id="email" bind:value={email} type="email" autocomplete="email" required />
			<p class="field-message" aria-live="polite"></p>
		</div>
		<div class="field">
			<label for="phone">{lang === 'en' ? 'Phone number' : lang === 'pt' ? 'Telefone' : 'Numero di telefono'}</label>
			<input id="phone" bind:value={phone} type="tel" autocomplete="tel" required />
			<p class="field-message" aria-live="polite"></p>
		</div>
		<div class="field">
			<label for="service">{lang === 'en' ? 'Service interest' : lang === 'pt' ? 'Servico de interesse' : 'Interesse di servizio'}</label>
			<select id="service" bind:value={service} required>
				<option value="">{lang === 'en' ? 'Select a service' : lang === 'pt' ? 'Selecione um servico' : 'Seleziona un servizio'}</option>
				<option value="last-mile">Last mile delivery</option>
				<option value="transport">{lang === 'en' ? 'Transport' : lang === 'pt' ? 'Transporte' : 'Trasporto'}</option>
				<option value="warehousing">{lang === 'en' ? 'Warehousing' : lang === 'pt' ? 'Armazenagem' : 'Magazzino'}</option>
				<option value="routing-tracking">{lang === 'en' ? 'Routing and tracking' : lang === 'pt' ? 'Roteirizacao e tracking' : 'Routing e tracking'}</option>
				<option value="custom-solution">{lang === 'en' ? 'Custom solution' : lang === 'pt' ? 'Solucao personalizada' : 'Soluzione personalizzata'}</option>
			</select>
			<p class="field-message" aria-live="polite"></p>
		</div>
		<div class="field">
			<label for="volume">{lang === 'en' ? 'Monthly logistics volume' : lang === 'pt' ? 'Volume logistico mensal' : 'Volume logistico mensile'}</label>
			<select id="volume" bind:value={volume} required>
				<option value="">{lang === 'en' ? 'Select volume' : lang === 'pt' ? 'Selecione o volume' : 'Seleziona il volume'}</option>
				<option value="pilot">{lang === 'en' ? 'Pilot or project-based' : lang === 'pt' ? 'Piloto ou projeto pontual' : 'Pilot o progetto singolo'}</option>
				<option value="small">{lang === 'en' ? 'Regular low volume' : lang === 'pt' ? 'Volume regular baixo' : 'Volume regolare contenuto'}</option>
				<option value="medium">{lang === 'en' ? 'Structured recurring volume' : lang === 'pt' ? 'Volume recorrente estruturado' : 'Volume ricorrente strutturato'}</option>
				<option value="high">{lang === 'en' ? 'High volume or multi-site need' : lang === 'pt' ? 'Alto volume ou operacao multi-site' : 'Alto volume o esigenza multi-sito'}</option>
			</select>
			<p class="field-message" aria-live="polite"></p>
		</div>
		<div class="field field--full">
			<label for="message">{lang === 'en' ? 'Project details' : lang === 'pt' ? 'Detalhes do projeto' : 'Dettagli del progetto'}</label>
			<textarea
				id="message"
				bind:value={message}
				rows="6"
				required
				placeholder={lang === 'en'
					? 'Describe routes, geography, warehousing needs, expected delivery model or operational challenge.'
					: lang === 'pt'
						? 'Descreva rotas, geografia, necessidades de armazenagem, modelo de entrega ou desafio operacional.'
						: 'Descrivi rotte, geografia, esigenze di magazzino, modello di consegna atteso o sfida operativa.'}
			></textarea>
			<p class="field-message" aria-live="polite"></p>
		</div>
		<div class="field field--full">
			<label class="checkbox-row" for="consent">
				<input id="consent" bind:checked={consent} name="consent" type="checkbox" required />
				<span>
					{lang === 'en'
						? 'I confirm that the information provided can be used to respond to this logistics request.'
						: lang === 'pt'
							? 'Confirmo que as informacoes fornecidas podem ser usadas para responder a esta solicitacao logistica.'
							: 'Confermo che le informazioni fornite possono essere utilizzate per rispondere a questa richiesta logistica.'}
				</span>
			</label>
			<p class="field-message" aria-live="polite"></p>
		</div>
	</div>

	<button class="button button--accent" type="submit">
		{lang === 'en' ? 'Send Request' : lang === 'pt' ? 'Enviar solicitacao' : 'Invia richiesta'}
	</button>

	{#if feedback.state !== 'idle'}
		<div class="form-feedback is-visible" data-state={feedback.state} aria-live="polite">
			{feedback.message}
		</div>
	{/if}
</form>

