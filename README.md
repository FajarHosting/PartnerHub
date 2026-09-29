# PartnerHub Frontend

Frontend-first B2B reseller/partner SaaS UI prototype.

## Scope
- React + TypeScript + Vite
- Responsive desktop/tablet/mobile UI
- Partner portal + Admin console
- Mock data isolated under `src/data`
- Mock adapter isolated under `src/services/mockApi.ts`
- No supplier API integration
- No production authentication
- No real payment gateway
- No supplier credentials or production secrets

## Run
```bash
npm install
npm run dev
```

## Architecture note
The frontend is intentionally shaped for a later integration path:

`PartnerHub frontend → existing web backend → existing supplier adapter/services → supplier API`

Do not place supplier credentials in this repository. Replace the mock adapter with the existing backend contract during the integration phase without changing the supplier system itself.
