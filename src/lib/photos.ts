import type { ImageMetadata } from 'astro';

/**
 * Toutes les images du dossier img/ (à la racine du projet) sont importées
 * au moment de la génération du site, puis optimisées par Astro (WebP, tailles adaptées).
 * Une image référencée mais absente renvoie undefined : la page affiche alors
 * une illustration de remplacement au lieu d'une image cassée.
 */
const images = import.meta.glob<{ default: ImageMetadata }>('/img/*.{jpg,jpeg,png,webp}', { eager: true });

/** Accepte un nom ou une liste de noms : renvoie la première image trouvée. */
export function imageProjet(noms?: string | string[]): ImageMetadata | undefined {
  if (!noms) return undefined;
  for (const nom of Array.isArray(noms) ? noms : [noms]) {
    const trouvee = images[`/img/${nom}`]?.default;
    if (trouvee) return trouvee;
  }
  return undefined;
}
