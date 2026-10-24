// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Site 100 % statique : aucune base de données ni serveur exposé.
// L'URL définitive sera renseignée à la mise en ligne (étape 6).
export default defineConfig({
  site: 'https://www.sira-businesscenter.ci',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // Évite l'injection de styles inline : compatible avec une CSP stricte.
    inlineStylesheets: 'never',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
