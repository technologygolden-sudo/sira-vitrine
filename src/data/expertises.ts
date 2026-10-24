// Contenus des 5 expertises. Deviendront éditables dans Keystatic (étape 5).

export interface Expertise {
  slug: string;
  titre: string;
  accroche: string;
  recommandation: string; // phrase courte qui oriente vers SIRA, affichée sous chaque problème
  resume: string;
  services: { titre: string; texte: string }[];
  illustration: string; // SVG statique, contenu de confiance (écrit par nous)
  photo?: string | string[]; // fichier(s) du dossier img/, par ordre de préférence ; remplace l'illustration si présent
  photoAlt?: string;
}

export const EXPERTISES: Expertise[] = [
  {
    slug: 'logiciels-de-gestion',
    titre: 'Logiciels de gestion & applications',
    // L'image « logiciels-de-gestion.jpg.jpeg » n'est pas utilisée : elle montre une marque concurrente (« ReBill POS »).
    photo: ['logiciels-de-gestion.jpg', 'WhatsApp Image 2026-10-17 at 22.48.35 (4).jpeg'],
    photoAlt: 'Un responsable d’entrepôt suit son stock en temps réel sur un tableau de bord',
    accroche: 'Moins de papier, moins d’erreurs, plus de visibilité.',
    recommandation: 'Simplifiez votre gestion avec SIRA : des outils pensés pour votre activité.',
    resume: 'Des outils sur mesure pour automatiser vos tâches et piloter votre activité en temps réel.',
    services: [
      { titre: 'Gestion commerciale', texte: 'Devis, factures, caisse et suivi des paiements au même endroit.' },
      { titre: 'Stock & achats', texte: 'Entrées, sorties, inventaires et alertes de réapprovisionnement.' },
      { titre: 'Comptabilité & RH', texte: 'Écritures, congés, présences : fini les tableurs dispersés.' },
      { titre: 'Tableaux de bord', texte: 'Ventes, marges et dépenses visibles en un coup d’œil.' },
      { titre: 'Applications sur mesure', texte: 'Applications métiers, web et mobiles adaptées à vos processus.' },
    ],
    illustration:
      '<svg viewBox="0 0 260 160" aria-hidden="true"><rect x="50" y="28" width="160" height="100" rx="8" fill="#1C2B4B"/><rect x="58" y="36" width="144" height="84" rx="4" fill="#fff"/><rect x="66" y="44" width="36" height="68" rx="3" fill="#FDD9C2"/><rect x="110" y="44" width="40" height="26" rx="3" fill="#F26A1B"/><rect x="156" y="44" width="38" height="26" rx="3" fill="#F7A673"/><path d="M112 106l18-14 16 8 22-22 22 10" fill="none" stroke="#1C2B4B" stroke-width="3"/><rect x="36" y="128" width="188" height="8" rx="4" fill="#9AA6B8"/></svg>',
  },
  {
    slug: 'reseau-et-securite',
    titre: 'Réseau, intégration & sécurité',
    photo: ['reseau-et-securite.jpg', 'reseau-et-securite.jpeg'],
    photoAlt: 'Un technicien installe une caméra de vidéosurveillance dans des locaux professionnels',
    accroche: 'Un réseau fiable, des locaux protégés.',
    recommandation: 'Confiez votre sécurité à SIRA : des installations professionnelles, sûres et suivies.',
    resume: 'Nous étudions vos locaux, installons des équipements adaptés et assurons leur suivi, de la visite technique à la maintenance.',
    services: [
      { titre: 'Réseau & Wi-Fi', texte: 'Câblage, baies de brassage, Wi-Fi professionnel séparé pour vos visiteurs.' },
      { titre: 'Vidéosurveillance', texte: 'Caméras installées dans les règles, accès sécurisés, consultation à distance.' },
      { titre: 'Contrôle d’accès & alarme', texte: 'Badges, codes, détection d’intrusion et alerte immédiate.' },
      { titre: 'Cybersécurité', texte: 'Pare-feu, antivirus, sauvegarde automatique de vos données.' },
      { titre: 'Protection électrique', texte: 'Onduleurs et protections contre les coupures et surtensions.' },
    ],
    illustration:
      '<svg viewBox="0 0 260 160" aria-hidden="true"><rect x="40" y="96" width="110" height="34" rx="6" fill="#1C2B4B"/><circle cx="58" cy="113" r="4" fill="#F26A1B"/><circle cx="72" cy="113" r="4" fill="#F26A1B"/><circle cx="86" cy="113" r="4" fill="#7FD1A0"/><path d="M95 96V70M120 96V60" stroke="#1C2B4B" stroke-width="3"/><path d="M84 62a16 16 0 0 1 22 0M78 54a26 26 0 0 1 34 0" fill="none" stroke="#F26A1B" stroke-width="4" stroke-linecap="round"/><rect x="160" y="40" width="60" height="26" rx="8" fill="#fff" stroke="#1C2B4B" stroke-width="4" transform="rotate(12 190 53)"/><circle cx="214" cy="60" r="6" fill="#F26A1B"/><path d="M180 66v40h-14" fill="none" stroke="#1C2B4B" stroke-width="4"/></svg>',
  },
  {
    slug: 'affichage-dynamique',
    titre: 'Affichage dynamique & bornes interactives',
    photo: ['affichage-dynamique.jpg', 'affichage-dynamique.jpeg', 'WhatsApp Image 2026-10-17 at 19.52.17.jpeg'],
    photoAlt: 'Un patient s’enregistre sur une borne tactile dans le hall d’accueil d’une clinique',
    accroche: 'Une borne peut faire bien plus qu’afficher.',
    recommandation: 'Avec SIRA, transformez vos espaces en points de contact modernes et efficaces.',
    resume: 'Écrans et bornes qui informent, accueillent, orientent et prennent des commandes, connectés à vos outils de gestion.',
    services: [
      { titre: 'Informer', texte: 'Promotions, tarifs, menus et annonces mis à jour à distance.' },
      { titre: 'Accueillir', texte: 'Enregistrement des visiteurs et orientation vers le bon service.' },
      { titre: 'Gérer la file d’attente', texte: 'Tickets et écrans d’appel : chacun sait quand c’est son tour.' },
      { titre: 'Commander', texte: 'Le client choisit et commande lui-même sur la borne.' },
      { titre: 'Orienter', texte: 'Plans interactifs pour trouver un service, un bureau ou un rayon.' },
    ],
    illustration:
      '<svg viewBox="0 0 260 160" aria-hidden="true"><rect x="100" y="16" width="64" height="104" rx="8" fill="#1C2B4B"/><rect x="107" y="24" width="50" height="78" rx="4" fill="#F26A1B"/><rect x="113" y="32" width="38" height="8" rx="2" fill="#fff"/><rect x="113" y="46" width="38" height="28" rx="3" fill="#FDD9C2"/><rect x="113" y="80" width="38" height="12" rx="6" fill="#fff"/><rect x="124" y="120" width="16" height="22" fill="#9AA6B8"/><rect x="104" y="142" width="56" height="6" rx="3" fill="#1C2B4B"/><circle cx="196" cy="82" r="14" fill="#fff" stroke="#F26A1B" stroke-width="3"/><path d="M190 82h12M196 76v12" stroke="#F26A1B" stroke-width="3"/></svg>',
  },
  {
    slug: 'fournitures-et-equipements',
    titre: 'Fournitures & équipements de bureau',
    photo: ['fournitures-et-equipements.jpg', 'fournitures-et-equipements.jpeg'],
    photoAlt: 'Une salle informatique équipée de postes de travail neufs prêts à l’emploi',
    accroche: 'Le bon matériel, au bon prix, sans rupture.',
    recommandation: 'Équipez-vous avec SIRA : du matériel fiable, choisi pour vos besoins.',
    resume: 'Matériel informatique, mobilier et consommables, du poste unique au parc complet, avec conseil avant l’achat.',
    services: [
      { titre: 'Informatique', texte: 'Ordinateurs, écrans, imprimantes, scanners, onduleurs, équipements réseau.' },
      { titre: 'Mobilier de bureau', texte: 'Bureaux, fauteuils, armoires, tables de réunion, aménagement d’accueil.' },
      { titre: 'Papeterie & consommables', texte: 'Papier, toners, cartouches, classement et fournitures du quotidien.' },
      { titre: 'Approvisionnement régulier', texte: 'Livraison mensuelle selon une liste convenue : plus de rupture.' },
      { titre: 'Cotation rapide', texte: 'Envoyez votre liste, recevez un devis clair.' },
    ],
    illustration:
      '<svg viewBox="0 0 260 160" aria-hidden="true"><rect x="30" y="104" width="200" height="8" rx="4" fill="#1C2B4B"/><rect x="44" y="112" width="8" height="34" fill="#1C2B4B"/><rect x="208" y="112" width="8" height="34" fill="#1C2B4B"/><rect x="70" y="44" width="80" height="50" rx="5" fill="#1C2B4B"/><rect x="76" y="50" width="68" height="38" rx="2" fill="#F7A673"/><rect x="106" y="94" width="8" height="10" fill="#1C2B4B"/><rect x="164" y="74" width="26" height="30" rx="3" fill="#F26A1B"/><rect x="194" y="80" width="18" height="24" rx="3" fill="#FDD9C2" stroke="#C2510F" stroke-width="2"/><path d="M48 104c0-16 6-24 10-24s6 8 6 24" fill="#7FD1A0"/></svg>',
  },
  {
    slug: 'solutions-web',
    titre: 'Solutions web professionnelles',
    photo: ['solutions-web.jpg', 'solutions-web.jpeg'],
    photoAlt: 'Une équipe travaille sur la maquette d’un site web autour d’une table de réunion',
    accroche: 'Vos clients vous cherchent en ligne. Soyez là.',
    recommandation: 'Avec SIRA, soyez visible et crédible en ligne.',
    resume: 'Sites vitrines, boutiques en ligne et référencement pour une présence à la hauteur de votre activité.',
    services: [
      { titre: 'Site vitrine', texte: 'Présentez votre entreprise, vos services et vos réalisations.' },
      { titre: 'Boutique en ligne', texte: 'Catalogue, commandes et paiement en ligne.' },
      { titre: 'Refonte', texte: 'Modernisation d’un site existant : image, ergonomie, efficacité.' },
      { titre: 'Référencement (SEO)', texte: 'Être trouvé sur Google par les clients de votre zone.' },
      { titre: 'Maintenance', texte: 'Mises à jour, sauvegardes, sécurité et évolutions.' },
    ],
    illustration:
      '<svg viewBox="0 0 260 160" aria-hidden="true"><rect x="40" y="26" width="150" height="104" rx="8" fill="#fff" stroke="#1C2B4B" stroke-width="4"/><rect x="40" y="26" width="150" height="16" rx="8" fill="#1C2B4B"/><circle cx="52" cy="34" r="3" fill="#F26A1B"/><rect x="52" y="52" width="70" height="10" rx="3" fill="#1C2B4B"/><rect x="52" y="68" width="56" height="6" rx="3" fill="#9AA6B8"/><rect x="52" y="82" width="40" height="12" rx="6" fill="#F26A1B"/><rect x="130" y="52" width="48" height="44" rx="4" fill="#FDD9C2"/><rect x="176" y="62" width="44" height="78" rx="8" fill="#1C2B4B"/><rect x="181" y="70" width="34" height="58" rx="3" fill="#F7A673"/></svg>',
  },
];

export const trouverExpertise = (slug: string) => EXPERTISES.find((e) => e.slug === slug);
