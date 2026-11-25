import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Une actualité = un fichier Markdown dans src/content/actualites/.
// Pour publier : copiez un fichier existant, changez le texte et la date. C'est tout.
const actualites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actualites' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tag: z.string(),
    summary: z.string().max(260),
    cta: z.string().default('Nous contacter'),
    /** Message prérempli pour WhatsApp ; numéro B-OIL si boil: true */
    whatsapp: z.string().optional(),
    boil: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { actualites };
