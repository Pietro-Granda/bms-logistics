# BMS Logistics (SvelteKit static)

Questo progetto ora usa **SvelteKit** in modalità **static + prerender**, compatibile con **GitHub Pages**.

## Requisiti

- Node.js **20+**
- npm (incluso con Node.js)

## Sviluppo locale

```bash
npm install
npm run dev
```

## Build static

```bash
npm run build
```

L’output viene generato nella cartella `build/`.

## GitHub Pages

- Se il repository è un **user/org site** (es. `BMS-Logistics.github.io`), `BASE_PATH` deve restare vuoto.
- Se il repository è un **project site** (es. `https://<user>.github.io/<repo>/`), imposta `BASE_PATH` a `/<repo>`.

La workflow è in `.github/workflows/deploy-pages.yml`.

## Nota form contatti

GitHub Pages **non esegue PHP**, quindi l’invio del form non può andare su `api/contact.php`.
La versione static apre un’email pre-compilata (fallback `mailto:`) dopo la validazione.

