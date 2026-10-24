# SIRA Business Center — site vitrine

Site vitrine statique : **Astro** + **Tailwind CSS** + administration **Keystatic**, hébergé sur **Cloudflare Pages**.
Dossier d'architecture complet : onglet « Refonte du site – architecture » du document SIRA.

## Prérequis

- Node.js 20.3 ou plus récent (https://nodejs.org, version LTS)

## Démarrer

```bash
npm install      # installe les dépendances (une seule fois)
npm run dev      # site local sur http://localhost:4321
npm run build    # vérification TypeScript + génération du site dans dist/
npm run audit    # contrôle des vulnérabilités connues des dépendances
```

## Structure

```
public/            fichiers servis tels quels (favicon, robots.txt, _headers de sécurité)
src/config/        informations de l'entreprise et navigation (source unique)
src/styles/        charte graphique (couleurs, polices)
src/layouts/       gabarit commun (SEO, accessibilité, données structurées)
src/components/    composants réutilisables (étape 2)
src/pages/         une page = un fichier (étape 3)
```

## Avancement

- [x] Étape 1 — Socle : Astro, TypeScript strict, Tailwind, charte SIRA, SEO, en-têtes de sécurité
- [x] Étape 2 — Composants : en-tête, pied de page, boutons, cartes, WhatsApp flottant
- [x] Étape 3 — Pages : accueil, expertises (5), secteurs (7), qui sommes-nous, contact, mentions légales, 404
- [x] Étape 4 — Interactions : « Vous reconnaissez-vous ? », devis en 4 étapes, FAQ
- [ ] Étape 5 — Administration Keystatic + guide d'utilisation
- [ ] Étape 6 — Mise en ligne : GitHub, Cloudflare Pages, domaine, formulaire, tests

## Sécurité (règles du projet)

- Aucun secret dans le code : les clés vont dans les variables d'environnement Cloudflare (voir `.env.example`).
- En-têtes HTTP de sécurité (HSTS, CSP, anti-clickjacking) dans `public/_headers`.
- TypeScript strict et `astro check` avant chaque génération.
- `npm run audit` avant chaque mise en ligne.
