// Les 7 environnements clients. Deviendront éditables dans Keystatic (étape 5).

export interface Secteur {
  slug: string;
  nom: string;
  intro: string;
  besoins: string[];
  pack: string;
  packTexte: string;
  expertises: string[]; // slugs d'expertises concernées
}

export const SECTEURS: Secteur[] = [
  {
    slug: 'entreprises-et-bureaux',
    nom: 'Entreprises & bureaux',
    intro: 'Des espaces de travail efficaces, connectés et sécurisés pour vos équipes.',
    besoins: ['Postes de travail et périphériques', 'Réseau et Wi-Fi fiables', 'Mobilier de bureau', 'Sauvegarde et sécurité des données'],
    pack: 'Pack Bureau Connecté',
    packTexte: 'Équipement, réseau, sécurité et maintenance réunis dans une seule offre.',
    expertises: ['fournitures-et-equipements', 'reseau-et-securite', 'logiciels-de-gestion'],
  },
  {
    slug: 'commerces',
    nom: 'Commerces & grandes surfaces',
    intro: 'Vendre plus, mieux gérer le stock et protéger le magasin.',
    besoins: ['Caisse et gestion de stock', 'Vidéosurveillance', 'Affichage promotionnel', 'Bornes de commande ou d’information'],
    pack: 'Pack Boutique Sécurisée',
    packTexte: 'Caisse, caméras et affichage dynamique, avec suivi à distance.',
    expertises: ['logiciels-de-gestion', 'reseau-et-securite', 'affichage-dynamique'],
  },
  {
    slug: 'banques-et-agences',
    nom: 'Banques & agences',
    intro: 'Fluidifier l’accueil et sécuriser les agences.',
    besoins: ['Gestion de file d’attente', 'Accueil et orientation des clients', 'Affichage d’information', 'Contrôle d’accès'],
    pack: 'Pack Agence Connectée',
    packTexte: 'Borne d’accueil, écrans et sécurité électronique coordonnés.',
    expertises: ['affichage-dynamique', 'reseau-et-securite'],
  },
  {
    slug: 'restaurants-et-hotels',
    nom: 'Restaurants & hôtels',
    intro: 'Une meilleure expérience client, du Wi-Fi au menu.',
    besoins: ['Wi-Fi clients', 'Menus et affichage dynamique', 'Commande sur borne', 'Vidéosurveillance'],
    pack: 'Pack Hôtel & Resto Connecté',
    packTexte: 'Wi-Fi, affichage et commande en libre-service.',
    expertises: ['affichage-dynamique', 'reseau-et-securite', 'logiciels-de-gestion'],
  },
  {
    slug: 'ecoles',
    nom: 'Écoles & centres de formation',
    intro: 'Des salles équipées pour enseigner avec le numérique.',
    besoins: ['Salles informatiques', 'Écrans interactifs', 'Réseau et Wi-Fi', 'Affichage d’information'],
    pack: 'Pack École Numérique',
    packTexte: 'Équipement des salles, réseau et prise en main par les enseignants.',
    expertises: ['fournitures-et-equipements', 'reseau-et-securite', 'affichage-dynamique'],
  },
  {
    slug: 'administrations',
    nom: 'Administrations & institutions',
    intro: 'Moderniser l’accueil des usagers et les services.',
    besoins: ['Équipement des services', 'Accueil et orientation des usagers', 'Applications métier', 'Sécurité des locaux'],
    pack: 'Solution sur mesure',
    packTexte: 'Étude du besoin et réponse adaptée, y compris sur appel d’offres.',
    expertises: ['logiciels-de-gestion', 'affichage-dynamique', 'reseau-et-securite'],
  },
  {
    slug: 'cliniques-et-sante',
    nom: 'Cliniques & santé',
    intro: 'Orienter les patients et sécuriser les établissements.',
    besoins: ['Orientation et enregistrement des patients', 'Gestion des files d’attente', 'Réseau fiable', 'Sécurité des locaux'],
    pack: 'Pack Clinique Connectée',
    packTexte: 'Bornes d’accueil, affichage et sécurité, avec maintenance prioritaire.',
    expertises: ['affichage-dynamique', 'reseau-et-securite'],
  },
];
