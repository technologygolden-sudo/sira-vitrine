// « Vous reconnaissez-vous ? » : problème → risque, classés par domaine.
// Chaque problème a une illustration (src/data/illustrations-situations.ts),
// remplaçable par une photo réaliste : déposer img/probleme-<id>.jpg (ex. img/probleme-camera.jpg).

export interface Situation {
  id: string; // clé de l'illustration et nom de la photo optionnelle
  question: string;
  risque: string;
  expertise: string; // slug de l'expertise qui répond au problème
}

export interface Domaine {
  id: string;
  nom: string;
  recommandation: string; // message unique affiché sous tous les problèmes du domaine
  situations: Situation[];
}

export const DOMAINES: Domaine[] = [
  {
    id: 'securite',
    nom: 'Sécurité & vidéosurveillance',
    recommandation: 'Confiez votre sécurité à SIRA : des installations professionnelles, sûres et suivies.',
    situations: [
      { id: 'camera', question: 'Vos caméras vous protègent… ou vous exposent ?', risque: 'Avec une configuration inappropriée, une caméra devient une porte d’entrée : mot de passe d’usine jamais changé, accès ouvert sur Internet, angles morts, enregistrements perdus au mauvais moment.', expertise: 'reseau-et-securite' },
      { id: 'intrusion', question: 'Qui entre dans vos locaux quand vous n’êtes pas là ?', risque: 'Clés copiées, portes mal fermées, intrusions découvertes trop tard : vos biens et vos collaborateurs sont exposés.', expertise: 'reseau-et-securite' },
      { id: 'usb', question: 'Une simple clé USB peut paralyser votre entreprise', risque: 'Virus, piratage, rançon : les attaques visent aussi les petites structures, souvent moins protégées.', expertise: 'reseau-et-securite' },
      { id: 'panne', question: 'Si votre ordinateur tombait en panne ce soir ?', risque: 'Factures, contacts clients, comptabilité : souvent sur une seule machine, sans aucune copie.', expertise: 'reseau-et-securite' },
    ],
  },
  {
    id: 'reseau',
    nom: 'Réseau & équipements',
    recommandation: 'Avec SIRA, un réseau fiable et des équipements qui suivent votre rythme.',
    situations: [
      { id: 'wifi', question: 'Votre Wi-Fi est partagé avec vos clients ?', risque: 'Le même réseau pour vos visiteurs et vos ordinateurs, c’est laisser la porte de votre bureau entrouverte. Sans compter les coupures au pire moment.', expertise: 'reseau-et-securite' },
      { id: 'courant', question: 'Une coupure de courant peut griller votre matériel', risque: 'Délestages et surtensions abîment ordinateurs, serveurs et caméras, et effacent le travail en cours.', expertise: 'reseau-et-securite' },
      { id: 'lent', question: 'Vos équipements ralentissent vos équipes ?', risque: 'Achats au coup par coup, matériel incompatible ou de mauvaise qualité : chaque jour, vous perdez du temps et de l’argent.', expertise: 'fournitures-et-equipements' },
    ],
  },
  {
    id: 'gestion',
    nom: 'Gestion & productivité',
    recommandation: 'Simplifiez votre gestion avec SIRA : des outils pensés pour votre activité.',
    situations: [
      { id: 'papier', question: 'Trop d’heures perdues sur Excel et le papier ?', risque: 'Saisies en double, erreurs de calcul, documents introuvables : vos équipes s’épuisent sur des tâches sans valeur.', expertise: 'logiciels-de-gestion' },
      { id: 'stock', question: 'Savez-vous ce qu’il reste en stock, maintenant ?', risque: 'Ruptures, pertes, vols invisibles : sans suivi en temps réel, votre marge s’évapore.', expertise: 'logiciels-de-gestion' },
      { id: 'argent', question: 'Savez-vous si vous gagnez de l’argent ce mois-ci ?', risque: 'Sans chiffres à jour, vous décidez à l’instinct et découvrez les problèmes trop tard.', expertise: 'logiciels-de-gestion' },
    ],
  },
  {
    id: 'vente',
    nom: 'Vente & prospection',
    recommandation: 'Avec SIRA, attirez plus de clients et vendez plus efficacement.',
    situations: [
      { id: 'enligne', question: 'Vos clients vous cherchent en ligne… et trouvent vos concurrents ?', risque: 'Pas de site, une page Facebook oubliée : pour beaucoup de clients, vous n’existez pas.', expertise: 'solutions-web' },
      { id: 'devis', question: 'Vos devis mettent des jours à partir ?', risque: 'Pendant que vous préparez votre devis, le client signe ailleurs.', expertise: 'logiciels-de-gestion' },
      { id: 'relance', question: 'Vous oubliez de relancer vos prospects ?', risque: 'Contacts notés sur des bouts de papier, rappels oubliés : des ventes vous échappent chaque semaine.', expertise: 'logiciels-de-gestion' },
      { id: 'promo', question: 'Vos promotions passent inaperçues ?', risque: 'Affiches papier délavées, informations dépassées : vos offres ne vendent pas.', expertise: 'affichage-dynamique' },
      { id: 'attente', question: 'Vos clients repartent avant d’être servis ?', risque: 'File d’attente désorganisée, accueil débordé : l’image de votre structure en souffre.', expertise: 'affichage-dynamique' },
    ],
  },
];

export const situationsDeLExpertise = (slug: string) =>
  DOMAINES.flatMap((d) => d.situations).filter((s) => s.expertise === slug);
