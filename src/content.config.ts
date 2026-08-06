import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectLink = z.object({
  label: z.string(),
  href: z.string(),
  kind: z.enum(['source', 'documentation', 'live']),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortDescription: z.string(),
      displayOrder: z.number().int().nonnegative(),
      prominence: z.enum(['standard', 'wide']).default('standard'),
      category: z.enum(['Software', 'Systems / Infrastructure', 'Professional Work', 'AI / Automation']),
      status: z.enum(['shipped', 'active', 'in-development', 'archived']),
      statusLabel: z.string(),
      visible: z.boolean().default(true),
      detailPage: z.boolean().default(false),
      provisionalNote: z.string().optional(),
      role: z.string(),
      technologies: z.array(z.string()).default([]),
      engineeringHighlights: z.array(z.string()).default([]),
      links: z.array(projectLink).default([]),
      deployment: z.enum(['live', 'retired', 'not-public', 'not-deployed']),
      deploymentNote: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      nextStep: z.string().optional(),
    }),
});

export const collections = { projects };
