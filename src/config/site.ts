// Informations de l'entreprise, centralisées en un seul endroit.
// À l'étape 5, ces valeurs deviendront modifiables depuis l'administration Keystatic.

export const SITE = {
  nom: 'SIRA Business Center',
  slogan: 'Des solutions adaptées à vos besoins, pensées pour votre évolution.',
  description:
    "Solutions digitales, informatiques et équipements professionnels à Abidjan : logiciels de gestion, réseau et sécurité, affichage dynamique, fournitures de bureau et sites web.",
  telephone: '+225 05 56 43 20 20',
  telephoneLien: '+2250556432020',
  whatsapp: '2250556432020',
  email: 'businesscenter.sira@gmail.com',
  adresse: 'Avenue Tiémoko Meyliet Koné, Abidjan, Côte d’Ivoire',
  horaires: '8h00 – 17h00',
  reseaux: {
    instagram: 'sirabusinesscenter',
    linkedin: 'sirabusinesscenter',
    facebook: 'Sira Business Center',
  },
} as const;

/** Lien WhatsApp avec message pré-rempli (encodé pour éviter toute injection dans l'URL). */
export function lienWhatsApp(message = 'Bonjour SIRA Business Center, je souhaite des informations.'): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAVIGATION = [
  { libelle: 'Accueil', href: '/' },
  { libelle: 'Expertises', href: '/expertises' },
  { libelle: 'Secteurs', href: '/secteurs' },
  { libelle: 'Qui sommes-nous', href: '/qui-sommes-nous' },
  { libelle: 'Contact', href: '/contact' },
] as const;
