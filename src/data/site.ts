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
  { href: '/b-oil/', label: 'B-OIL' },
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

export const doors = [
  {
    num: '01', title: 'Commander', text: 'Huile rouge B-OIL, plants de cacao et de palmier : demandez les disponibilités.',
    cta: 'Voir B-OIL', href: '/b-oil/',
  },
  {
    num: '02', title: 'Planter', text: 'Une pépinière de palmiers à huile et de cacaoyers pour préparer votre prochaine saison.',
    cta: 'Demander des plants', href: '/?sujet=commande-plants-palmier#contact',
  },
  {
    num: '03', title: 'Rejoindre', text: 'Produire avec nous : intrants, formation, pressoir et débouchés équitables.',
    cta: 'Devenir membre', href: '/?sujet=adhesion#contact',
  },
];

export const faq = [
  {
    q: 'Comment passer commande ?',
    a: `Par WhatsApp au +237 678 607 540 (ou au 689 588 586 pour B-OIL), par téléphone ou avec le formulaire de contact. Nous confirmons les disponibilités avant toute commande.`,
  },
  {
    q: 'Quels produits sont disponibles en ce moment ?',
    a: 'L’huile rouge B-OIL est disponible, ainsi que des plants de cacao et de palmier à huile à la pépinière. Les stocks évoluent avec les saisons : écrivez-nous pour une réponse à jour.',
  },
  {
    q: 'Comment rejoindre la coopérative ?',
    a: 'Choisissez « Adhésion à la coopérative » dans le formulaire de contact, ou appelez-nous. Nous vous recontactons pour échanger sur votre exploitation et les modalités d’entrée.',
  },
  {
    q: 'Peut-on faire presser ses régimes de palme chez vous ?',
    a: 'Oui, la coopérative dispose d’un pressoir communautaire. Choisissez « Réserver le service de pressoir » dans le formulaire pour convenir d’une date.',
  },
  {
    q: 'Où êtes-vous et quand répondez-vous ?',
    a: 'Nous sommes à Koukoué, dans la Région du Littoral. L’équipe répond du lundi au vendredi, de 8h00 à 17h00 (heure de Douala), et les messages WhatsApp sont lus dès que possible.',
  },
];

export const boilFaq = [
  {
    q: 'Qu’est-ce que B-OIL ?',
    a: 'B-OIL est l’huile de palme rouge de SOCOOCA PK : 100 % naturelle, sans additifs, pressée par la coopérative à Koukoué selon des méthodes traditionnelles.',
  },
  {
    q: 'Quel est le prix ?',
    a: 'Le litre est proposé à 1 250 FCFA. Utilisez le calculateur ci-dessus pour préparer votre commande, nous confirmons le montant et les disponibilités sur WhatsApp.',
  },
  {
    q: 'Livrez-vous ?',
    a: 'Oui, la livraison et l’expédition sont possibles. Les modalités et les frais dépendent de votre localisation : indiquez-la dans votre message.',
  },
  {
    q: 'Comment payer ?',
    a: 'Le mode de paiement est convenu directement avec nous lors de la confirmation de commande, par WhatsApp ou par téléphone.',
  },
];
