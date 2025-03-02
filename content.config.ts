import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
    }),
    portfolio: defineCollection({
      type: "data",
      source: "portfolio/**.yml",
      schema: z.object({
        title: z.string(),
        location: z.string(),
        cover: z.string(),
      }),
    }),
  },
});
