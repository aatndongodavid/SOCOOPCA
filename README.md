# SOCOOCA PK — site web

Site de la coopérative agricole de Koukoué (Cameroun), construit avec [Astro](https://astro.build).

## Développement

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère ./dist
npm run preview  # prévisualise le build
```

## Publier une actualité

Copiez un fichier de `src/content/actualites/`, changez le titre, la date, le texte : la page `/actualites/`,
l'accueil et le sitemap se mettent à jour seuls. `draft: true` masque une actualité.

## Contrôles qualité

```bash
npm run build && npx astro preview --port 4321 &
npm run check:links    # liens internes et ancres
npm run audit:a11y     # accessibilité WCAG 2.1 AA (axe-core + Chromium)
```

## Où modifier le contenu

- `src/data/site.ts` : coordonnées, téléphones, WhatsApp, valeurs, chiffres clés, FAQ, « trois portes ».
- `src/pages/b-oil/index.astro` : fiche produit B-OIL et calculateur de commande (prix dans `PRICE`).
- `src/pages/index.astro` : structure et textes de la page d'accueil.
- `src/assets/` : photos (optimisées automatiquement en WebP à la compilation).
- `src/styles/global.css` : design (couleurs et typographies en tête de fichier).
- `scripts/make-brand-assets.mjs` : régénère emblème, favicons et image de partage (`public/og-image.jpg`).

## Déploiement (Netlify)

`netlify.toml` configure le build (`npm run build`, dossier `dist`). Le formulaire de contact utilise
Netlify Forms : activez la détection des formulaires dans le tableau de bord Netlify pour recevoir les messages.
