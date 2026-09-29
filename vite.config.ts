import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  // GitHub Pages serves this project from /PartnerHub/.
  // Vercel and local development serve it from /.
  base: isGitHubPages ? '/PartnerHub/' : '/',
  plugins: [react()],
});
