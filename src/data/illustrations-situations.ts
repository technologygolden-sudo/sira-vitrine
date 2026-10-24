// Mises en scène vectorielles des problèmes (couleurs SIRA + rouge = danger).
// Contenu statique écrit par nous : sûr à insérer avec set:html.
// viewBox commun 240 x 140.

const N = '#1C2B4B'; // bleu nuit
const O = '#F26A1B'; // orange
const C = '#FDD9C2'; // orange clair
const R = '#D92D20'; // rouge danger
const G = '#9AA6B8'; // gris
const W = '#FFFFFF';

const svg = (contenu: string) =>
  `<svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="240" height="140" fill="#FEF1E8"/>${contenu}</svg>`;

export const ILLUSTRATIONS: Record<string, string> = {
  // Caméra mal configurée : caméra + cadenas ouvert + silhouette qui observe
  camera: svg(`
    <rect x="20" y="22" width="8" height="40" fill="${G}"/><rect x="20" y="22" width="40" height="8" fill="${G}"/>
    <g transform="rotate(18 90 40)"><rect x="52" y="26" width="76" height="30" rx="8" fill="${W}" stroke="${N}" stroke-width="4"/><circle cx="118" cy="41" r="9" fill="${N}"/><circle cx="118" cy="41" r="4" fill="${O}"/></g>
    <path d="M110 70 L150 118 L70 118 Z" fill="${R}" opacity=".12"/>
    <rect x="160" y="78" width="40" height="32" rx="5" fill="${R}"/><path d="M168 78v-10a12 12 0 0 1 24 0" fill="none" stroke="${R}" stroke-width="5" transform="rotate(-25 180 70)"/>
    <circle cx="180" cy="94" r="4" fill="${W}"/><rect x="178" y="94" width="4" height="9" fill="${W}"/>
    <circle cx="40" cy="98" r="12" fill="${N}"/><path d="M22 132c2-16 10-22 18-22s16 6 18 22z" fill="${N}"/><rect x="31" y="94" width="18" height="5" rx="2" fill="${O}"/>`),

  // Intrusion : porte entrouverte la nuit
  intrusion: svg(`
    <rect width="240" height="140" fill="${N}"/><circle cx="200" cy="28" r="14" fill="${C}"/><circle cx="194" cy="24" r="12" fill="${N}"/>
    <rect x="70" y="30" width="80" height="104" fill="#2B3E66"/><rect x="74" y="34" width="72" height="100" fill="#0F1A30"/>
    <path d="M74 34 L118 44 L118 130 L74 134 Z" fill="${G}"/><circle cx="110" cy="88" r="3" fill="${N}"/>
    <path d="M146 134 L180 134 L170 120 L150 120 Z" fill="${O}" opacity=".35"/>
    <ellipse cx="170" cy="126" rx="6" ry="3" fill="${C}" opacity=".6"/><ellipse cx="186" cy="118" rx="6" ry="3" fill="${C}" opacity=".6"/><ellipse cx="200" cy="128" rx="6" ry="3" fill="${C}" opacity=".6"/>
    <text x="32" y="64" font-family="Arial" font-size="34" font-weight="700" fill="${R}">!</text>`),

  // Clé USB infectée
  usb: svg(`
    <rect x="40" y="26" width="120" height="78" rx="6" fill="${N}"/><rect x="47" y="33" width="106" height="64" rx="3" fill="${R}"/>
    <path d="M100 48 l14 24 h-28 z" fill="${W}"/><rect x="98" y="56" width="4" height="9" fill="${R}"/><circle cx="100" cy="68" r="2" fill="${R}"/>
    <rect x="28" y="104" width="144" height="8" rx="4" fill="${G}"/>
    <rect x="176" y="70" width="44" height="22" rx="4" fill="${O}"/><rect x="164" y="75" width="14" height="12" fill="${G}"/>
    <g fill="${N}"><circle cx="206" cy="48" r="9"/><path d="M197 48h-6M215 48h6M200 40l-4-5M212 40l4-5M200 56l-4 5M212 56l4 5" stroke="${N}" stroke-width="2.5"/></g>`),

  // Panne d'ordinateur sans sauvegarde
  panne: svg(`
    <rect x="50" y="24" width="110" height="72" rx="6" fill="${N}"/><rect x="57" y="31" width="96" height="58" fill="#0F1A30"/>
    <path d="M80 34 L96 58 L86 66 L104 88" fill="none" stroke="${G}" stroke-width="3"/>
    <path d="M100 18 q6 -8 0 -14 M112 20 q6 -8 0 -14" fill="none" stroke="${G}" stroke-width="3" stroke-linecap="round"/>
    <rect x="38" y="96" width="134" height="8" rx="4" fill="${G}"/>
    <g transform="rotate(-12 196 70)"><rect x="176" y="46" width="34" height="42" rx="3" fill="${W}" stroke="${N}" stroke-width="3"/><path d="M182 58h22M182 66h22M182 74h14" stroke="${G}" stroke-width="3"/></g>
    <path d="M176 104 l28 -28 M176 76 l28 28" stroke="${R}" stroke-width="5" stroke-linecap="round"/>`),

  // Wi-Fi partagé visiteurs / bureau
  wifi: svg(`
    <rect x="96" y="70" width="48" height="16" rx="5" fill="${N}"/><path d="M106 70v-14M134 70v-14" stroke="${N}" stroke-width="3"/>
    <path d="M104 52a22 22 0 0 1 32 0M96 44a34 34 0 0 1 48 0" fill="none" stroke="${O}" stroke-width="4" stroke-linecap="round"/>
    <rect x="24" y="92" width="44" height="30" rx="3" fill="${N}"/><rect x="28" y="96" width="36" height="20" fill="${C}"/><text x="30" y="88" font-family="Arial" font-size="10" font-weight="700" fill="${N}">BUREAU</text>
    <rect x="188" y="88" width="20" height="36" rx="4" fill="${N}"/><rect x="191" y="92" width="14" height="26" fill="${G}"/><text x="168" y="84" font-family="Arial" font-size="10" font-weight="700" fill="${N}">VISITEUR</text>
    <path d="M68 104 L104 82 M136 82 L188 104" stroke="${R}" stroke-width="3" stroke-dasharray="6 5"/>
    <circle cx="120" cy="112" r="11" fill="${R}"/><text x="116" y="118" font-family="Arial" font-size="16" font-weight="700" fill="${W}">!</text>`),

  // Coupure de courant
  courant: svg(`
    <rect x="30" y="30" width="100" height="66" rx="6" fill="${N}"/><rect x="37" y="37" width="86" height="52" fill="#0F1A30"/>
    <rect x="20" y="96" width="120" height="8" rx="4" fill="${G}"/>
    <path d="M176 18 L150 74 H172 L158 126 L204 58 H180 L196 18 Z" fill="${O}" stroke="${N}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M60 118 h30 M75 104 v14" stroke="${N}" stroke-width="4"/><rect x="88" y="110" width="16" height="16" rx="3" fill="${R}"/>`),

  // Équipements lents
  lent: svg(`
    <rect x="40" y="24" width="120" height="76" rx="6" fill="${N}"/><rect x="47" y="31" width="106" height="62" fill="${W}"/>
    <path d="M86 42 h28 l-10 16 10 16 h-28 l10 -16 z" fill="${C}" stroke="${N}" stroke-width="3"/><path d="M92 70 h16" stroke="${O}" stroke-width="4"/>
    <rect x="30" y="100" width="140" height="8" rx="4" fill="${G}"/>
    <circle cx="196" cy="66" r="26" fill="${W}" stroke="${N}" stroke-width="4"/><path d="M196 50v16l11 8" stroke="${R}" stroke-width="4" stroke-linecap="round"/>`),

  // Excel et papier
  papier: svg(`
    <g transform="rotate(-8 60 80)"><rect x="30" y="40" width="60" height="78" fill="${W}" stroke="${G}" stroke-width="2"/></g>
    <g transform="rotate(5 70 80)"><rect x="40" y="36" width="60" height="78" fill="${W}" stroke="${G}" stroke-width="2"/><path d="M50 52h40M50 62h40M50 72h30" stroke="${G}" stroke-width="3"/></g>
    <rect x="120" y="28" width="96" height="70" rx="4" fill="${W}" stroke="${N}" stroke-width="3"/>
    <path d="M120 44h96M120 60h96M120 76h96M152 28v70M184 28v70" stroke="${G}" stroke-width="2"/>
    <rect x="153" y="61" width="30" height="14" fill="${R}" opacity=".7"/><text x="160" y="72" font-family="Arial" font-size="11" font-weight="700" fill="${W}">#ERR</text>
    <circle cx="200" cy="116" r="14" fill="${O}"/><path d="M200 108v8l6 4" stroke="${W}" stroke-width="3" stroke-linecap="round"/>`),

  // Stock inconnu
  stock: svg(`
    <rect x="30" y="20" width="8" height="110" fill="${N}"/><rect x="150" y="20" width="8" height="110" fill="${N}"/>
    <rect x="30" y="50" width="128" height="6" fill="${N}"/><rect x="30" y="90" width="128" height="6" fill="${N}"/><rect x="30" y="124" width="128" height="6" fill="${N}"/>
    <rect x="44" y="28" width="26" height="22" fill="${O}"/><rect x="74" y="34" width="22" height="16" fill="${C}"/>
    <rect x="44" y="102" width="20" height="22" fill="${C}"/>
    <rect x="100" y="66" width="44" height="22" fill="none" stroke="${R}" stroke-width="2" stroke-dasharray="5 4"/>
    <circle cx="200" cy="70" r="28" fill="${W}" stroke="${N}" stroke-width="4"/><text x="189" y="84" font-family="Arial" font-size="38" font-weight="700" fill="${R}">?</text>`),

  // Rentabilité inconnue
  argent: svg(`
    <path d="M30 120 H200 M30 120 V24" stroke="${N}" stroke-width="3"/>
    <path d="M40 100 L80 80 L110 92 L150 54" fill="none" stroke="${O}" stroke-width="4"/>
    <path d="M150 54 L175 90" fill="none" stroke="${G}" stroke-width="4" stroke-dasharray="6 6"/>
    <circle cx="190" cy="44" r="24" fill="${W}" stroke="${N}" stroke-width="4"/><text x="179" y="58" font-family="Arial" font-size="36" font-weight="700" fill="${R}">?</text>
    <circle cx="56" cy="40" r="14" fill="${O}"/><text x="49" y="46" font-family="Arial" font-size="16" font-weight="700" fill="${W}">F</text>`),

  // Concurrents trouvés en ligne
  enligne: svg(`
    <rect x="70" y="10" width="100" height="124" rx="12" fill="${N}"/><rect x="77" y="22" width="86" height="100" rx="3" fill="${W}"/>
    <rect x="84" y="30" width="72" height="12" rx="6" fill="${C}"/><circle cx="92" cy="36" r="3" fill="${N}"/>
    <rect x="84" y="50" width="72" height="20" rx="3" fill="${O}"/><path d="M90 60h40" stroke="${W}" stroke-width="3"/><path d="M144 54l4 6-4 6" stroke="${W}" stroke-width="2"/>
    <rect x="84" y="76" width="72" height="14" rx="3" fill="${G}" opacity=".5"/><rect x="84" y="96" width="72" height="14" rx="3" fill="${G}" opacity=".5"/>
    <text x="180" y="62" font-family="Arial" font-size="11" font-weight="700" fill="${N}">Concurrent</text><path d="M178 58 h-18" stroke="${N}" stroke-width="2"/>
    <text x="16" y="108" font-family="Arial" font-size="11" font-weight="700" fill="${R}">Vous ?</text><path d="M58 104 h22" stroke="${R}" stroke-width="2" stroke-dasharray="4 3"/>`),

  // Devis lents
  devis: svg(`
    <rect x="28" y="24" width="96" height="96" rx="6" fill="${W}" stroke="${N}" stroke-width="3"/><rect x="28" y="24" width="96" height="20" rx="6" fill="${N}"/>
    <g fill="${G}"><rect x="38" y="54" width="14" height="12"/><rect x="58" y="54" width="14" height="12"/><rect x="78" y="54" width="14" height="12"/><rect x="98" y="54" width="14" height="12"/><rect x="38" y="74" width="14" height="12"/><rect x="58" y="74" width="14" height="12"/><rect x="78" y="74" width="14" height="12"/></g>
    <rect x="98" y="74" width="14" height="12" fill="${R}"/><rect x="38" y="94" width="14" height="12" fill="${R}"/>
    <g transform="rotate(8 180 76)"><rect x="150" y="40" width="58" height="72" fill="${W}" stroke="${G}" stroke-width="2"/><text x="158" y="60" font-family="Arial" font-size="11" font-weight="700" fill="${N}">DEVIS</text><path d="M158 72h40M158 82h40M158 92h26" stroke="${G}" stroke-width="3"/></g>
    <circle cx="196" cy="118" r="14" fill="${O}"/><path d="M196 110v8l6 4" stroke="${W}" stroke-width="3" stroke-linecap="round"/>`),

  // Relances oubliées
  relance: svg(`
    <g transform="rotate(-10 60 60)"><rect x="36" y="30" width="48" height="44" fill="#FFE27A"/><path d="M42 44h34M42 54h28" stroke="${G}" stroke-width="3"/></g>
    <g transform="rotate(14 80 100)"><rect x="60" y="80" width="44" height="40" fill="${C}"/><path d="M66 92h30M66 102h22" stroke="${G}" stroke-width="3"/></g>
    <g transform="rotate(32 40 118)"><rect x="18" y="100" width="40" height="34" fill="#FFE27A" opacity=".7"/></g>
    <rect x="140" y="20" width="62" height="110" rx="10" fill="${N}"/><rect x="146" y="32" width="50" height="86" rx="3" fill="${W}"/>
    <circle cx="171" cy="62" r="16" fill="${R}"/><path d="M164 58 q7 12 14 0" fill="none" stroke="${W}" stroke-width="3"/>
    <text x="150" y="98" font-family="Arial" font-size="9" font-weight="700" fill="${R}">3 appels</text><text x="150" y="110" font-family="Arial" font-size="9" font-weight="700" fill="${R}">manqués</text>`),

  // Promotions invisibles
  promo: svg(`
    <rect x="30" y="20" width="80" height="104" fill="${W}" stroke="${G}" stroke-width="3" opacity=".7"/>
    <text x="40" y="52" font-family="Arial" font-size="18" font-weight="700" fill="${G}">PROMO</text><path d="M40 66h60M40 78h46M40 90h52" stroke="${G}" stroke-width="4" opacity=".6"/>
    <path d="M30 20 l18 18" stroke="#FEF1E8" stroke-width="6"/>
    <circle cx="170" cy="58" r="12" fill="${N}"/><path d="M152 124c2-30 8-48 18-48s16 18 18 48z" fill="${N}"/>
    <path d="M190 50 l26 -10 M190 60 l28 2" stroke="${G}" stroke-width="3" stroke-dasharray="5 4"/>
    <circle cx="208" cy="100" r="14" fill="${R}"/><path d="M200 92 l16 16 M216 92 l-16 16" stroke="${W}" stroke-width="3"/>`),

  // File d'attente
  attente: svg(`
    <rect x="18" y="20" width="56" height="30" rx="4" fill="${N}"/><text x="28" y="41" font-family="Arial" font-size="16" font-weight="700" fill="${R}">N°?</text>
    <g fill="${N}"><circle cx="100" cy="66" r="10"/><path d="M86 126c1-26 6-40 14-40s13 14 14 40z"/></g>
    <g fill="${G}"><circle cx="136" cy="66" r="10"/><path d="M122 126c1-26 6-40 14-40s13 14 14 40z"/></g>
    <g fill="${N}"><circle cx="172" cy="66" r="10"/><path d="M158 126c1-26 6-40 14-40s13 14 14 40z"/></g>
    <g fill="${G}" opacity=".6"><circle cx="208" cy="66" r="10"/><path d="M194 126c1-26 6-40 14-40s13 14 14 40z"/></g>
    <path d="M216 40 l14 -12 M226 46 l12 -4" stroke="${R}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="46" cy="98" r="18" fill="${W}" stroke="${N}" stroke-width="3"/><path d="M46 86v12l8 6" stroke="${O}" stroke-width="3" stroke-linecap="round"/>`),
};
