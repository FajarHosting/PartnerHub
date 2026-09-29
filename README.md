# PartnerHub Frontend

Professional B2B digital-product reseller/partner SaaS frontend prototype.

## Scope

This repository is frontend-first. It contains UI/UX, reusable components, responsive layouts, mock data, and placeholder integration surfaces only.

It does **not** contain a production supplier API, payment gateway, supplier credentials, production authentication, or real transaction processing.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

- **Vercel/local:** Vite uses `/` as the base path.
- **GitHub Pages:** GitHub Actions sets the Vite base path to `/PartnerHub/` automatically.

This keeps the same repository deployable to both Vercel and `https://fajarhosting.github.io/PartnerHub/`.

## Architecture

Mock data lives under `src/data/` and the mock service layer under `src/services/`. The intended next phase is to replace that service boundary with calls to the existing backend/supplier adapter without redesigning the frontend.
