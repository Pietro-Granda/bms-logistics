# BMS Logistics - Deploy su cPanel / IONOS

Questa guida permette una pubblicazione semplice del sito SvelteKit statico su hosting condiviso.

## 1) Build produzione

Eseguire in locale:

```bash
npm install
npm run build
```

Output pronto: cartella `build/`.

## 2) Upload su cPanel / IONOS

1. Apri File Manager.
2. Vai in `public_html/` (o nella root del dominio assegnato).
3. Carica **tutto il contenuto** di `build/`.
4. Verifica che `index.html` sia in root dominio.

## 3) Routing e pagine

Il progetto usa pagine statiche prerenderizzate:
- IT root: `/`
- EN: `/en`
- PT: `/pt`

Pagine interne (esempio): `/en/services`, `/pt/contact`, `/it/operations`.

## 4) Modulo contatti

Attualmente il modulo apre una email precompilata verso `gustavo@bmslogistics.it` (approccio static hosting-friendly).

Se vuoi invio server-side:
- collega un endpoint backend (PHP/Node),
- aggiorna `src/lib/components/ContactForm.svelte`,
- rifai build e upload.

## 5) Ottimizzazione e verifica

Dopo deploy:
- controlla tutte le pagine in mobile e desktop,
- verifica i meta title/description,
- testa WhatsApp, telefono, email e mappa,
- esegui PageSpeed Insights per Core Web Vitals.

## 6) Sicurezza base consigliata

- abilita HTTPS (certificato SSL),
- forza redirect HTTP -> HTTPS,
- imposta protezioni base nel pannello hosting.

## 7) Aggiornamenti contenuti rapidi

Per evoluzione futura e contenuti manuali:
- pannello base disponibile in `/admin` (salvataggio locale + export JSON),
- consigliato step successivo: collegamento a CMS o API privata.
