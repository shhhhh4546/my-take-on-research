import { defineCollection, z } from "astro:content";

const critiques = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    dateRead: z.string().optional(),
    tags: z.array(z.string()).optional(),
    figures: z.array(z.object({
      src: z.string(),
      alt: z.string().optional(),
      caption: z.string().optional(),
    })).optional(),
  }),
});

export const collections = { critiques };
