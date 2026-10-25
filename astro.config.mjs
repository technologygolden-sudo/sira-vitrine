import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Site 100 % statique : aucune base de données ni serveur exposé.
// SITE_URL et BASE_PATH sont fournis par la publication GitHub Pages
// (sous-dossier /sira-vitrine). En local ou sur un nom de domaine : valeurs par défaut.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.sira-businesscenter.ci',
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // Évite l'injection de styles inline : compatible avec une CSP stricte.
    inlineStylesheets: 'never',
  },
  vite: {
    // Conversion de type : Tailwind et Astro embarquent deux versions de Vite dont
    // les définitions TypeScript diffèrent légèrement. Sans effet à l'exécution.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
