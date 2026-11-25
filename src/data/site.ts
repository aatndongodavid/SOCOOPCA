// Source unique des informations de la coopérative : modifiez ici, tout le site suit.

export const site = {
  name: 'SOCOOCA PK',
  fullName: 'Société Coopérative avec Conseil d’Administration des Producteurs de Koukoué',
  url: 'https://socoocapk.org',
  tagline: 'Coopérative agricole de Koukoué',
  description:
    'SOCOOCA PK est une coopérative agricole de Koukoué (Cameroun) : huile rouge B-OIL, plants de cacao et de palmier à huile, gingembre, curcuma, cultures vivrières et élevage.',
  email: 'socoocapk@gmail.com',
  address: 'Koukoué, Région du Littoral, Cameroun',
  hours: 'Lundi – Vendredi · 8h00 – 17h00 (heure de Douala)',
  phones: [
    { label: 'Principal', display: '+237 678 607 540', tel: '+237678607540' },
    { label: 'Secondaire', display: '+237 693 112 796', tel: '+237693112796' },
    { label: 'Tertiaire', display: '+237 696 653 822', tel: '+237696653822' },
  ],
  whatsapp: '237678607540',
  boilWhatsapp: '237689588586',
  boilPhones: ['689 588 586', '656 102 652'],
};

export const wa = (message: string, number = site.whatsapp) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const nav = [
  { href: '/#cooperative', label: 'La coopérative' },
  { href: '/#b-oil', label: 'B-OIL' },
  { href: '/#productions', label: 'Productions' },
  { href: '/#parcours', label: 'Parcours' },
  { href: '/#actualites', label: 'Actualités' },
  { href: '/#galerie', label: 'Galerie' },
  { href: '/#contact', label: 'Contact' },
];

export const values = [
  { title: 'Durabilité', text: 'Des pratiques agroécologiques qui respectent la terre que nous léguons.' },
  { title: 'Solidarité', text: 'Un soutien mutuel et un accès équitable aux ressources, pour chaque membre.' },
  { title: 'Transparence', text: 'Une gouvernance ouverte et la traçabilité de chaque opération.' },
  { title: 'Innovation', text: 'Les meilleures pratiques agricoles, adoptées avec nos réalités de terrain.' },
];

export const stats = [
  { value: 50, suffix: '+', label: 'producteurs membres' },
  { value: 12, suffix: '', label: 'années d’engagement' },
  { value: 4, suffix: '', label: 'pôles de production' },
];

export const ticker = [
  'Huile rouge B-OIL', 'Cacao', 'Palmier à huile', 'Gingembre', 'Curcuma', 'Igname',
  'Macabo', 'Ananas', 'Banane-plantain', 'Canards', 'Escargots',
];

export const news = [
  {
    date: '2026-09-23',
    tag: 'Nouveau produit',
    title: 'B-OIL : l’authenticité au cœur de votre cuisine',
    text: 'Une huile rouge 100 % naturelle et bio, extraite selon des méthodes traditionnelles pour préserver sa richesse, sa saveur unique et sa belle couleur dorée. Disponible dès maintenant.',
    cta: 'Commander ma bouteille',
    wa: wa('Bonjour, j’ai vu l’annonce du nouveau produit B-OIL et je souhaite en savoir plus.', site.boilWhatsapp),
  },
  {
    date: '2026-05-12',
    tag: 'Campagne 2026',
    title: 'Ouverture de la campagne de collecte des régimes de palme',
    text: 'La campagne annuelle de collecte des régimes de noix de palme a officiellement démarré à Koukoué. Les membres sont invités à se rapprocher des points de collecte dès le 12 mai 2026.',
    cta: 'En savoir plus',
    wa: wa('Bonjour, j’ai vu l’actualité sur la campagne de collecte 2026 chez SOCOOCA PK.'),
  },
  {
    date: '2026-04-28',
    tag: 'Pépinière',
    title: 'Nouveau stock de plants de cacao disponibles',
    text: 'Un nouveau lot de plants de cacao sélectionnés est disponible à la pépinière. Commandez dès maintenant pour préparer la prochaine saison de plantation.',
    cta: 'Commander des plants',
    wa: wa('Bonjour, je voudrais des informations sur les plants de cacao disponibles chez SOCOOCA PK.'),
  },
  {
    date: '2026-04-15',
    tag: 'Assemblée',
    title: 'Assemblée Générale ordinaire : compte-rendu',
    text: 'L’Assemblée Générale ordinaire du deuxième trimestre 2026 a eu lieu le 15 avril à Koukoué. Les membres ont validé le plan de campagne et élu les représentants des sous-groupes de production.',
    cta: 'Nous contacter',
    wa: wa('Bonjour, je voudrais le compte-rendu de l’Assemblée Générale de SOCOOCA PK d’avril 2026.'),
  },
];

export const subjects = [
  ['adhesion', 'Adhésion à la coopérative'],
  ['commande-plants-cacao', 'Commander des plants de cacao'],
  ['commande-plants-palmier', 'Commander des plants de palmier'],
  ['commande-huile-palme', 'Commander de l’huile rouge B-OIL'],
  ['service-pressoir', 'Réserver le service de pressoir'],
  ['partenariat', 'Partenariat commercial'],
  ['information', 'Demande d’information'],
  ['autre', 'Autre'],
];
