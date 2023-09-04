import { defineCollection, z } from "astro:content";

export const collection = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: z.string(),
      author: z.string(),
    }),
  }),
};
