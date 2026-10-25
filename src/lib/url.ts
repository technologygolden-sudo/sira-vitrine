/**
 * Préfixe un lien interne avec le chemin de base du site.
 * - Sur GitHub Pages : base = /sira-vitrine  -> "/contact" devient "/sira-vitrine/contact"
 * - Sur un nom de domaine propre : base = /   -> lien inchangé
 * Les liens externes (https://, mailto:, tel:, #ancre) ne sont pas modifiés.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function url(chemin: string): string {
  if (!chemin.startsWith('/') || chemin.startsWith('//')) return chemin;
  return `${BASE}${chemin}` || '/';
}

/** Retire le chemin de base d'une URL de page (pour savoir quelle page est active). */
export function cheminSansBase(pathname: string): string {
  const sans = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  return sans.replace(/\/$/, '') || '/';
}
