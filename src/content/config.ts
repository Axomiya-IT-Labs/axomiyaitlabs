import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'as']),
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    cat: z.enum(['guide', 'tutorial', 'story', 'news']),
    catLabel: z.string(),
    readTime: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
