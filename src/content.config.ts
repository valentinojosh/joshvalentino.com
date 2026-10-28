import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectLink = z.object({
  label: z.string(),
  href: z.url({ protocol: /^https$/ }),
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
      imageAlt: z.string().min(1).optional(),
      mediaKind: z.enum(['interface', 'photograph']).default('interface'),
      nextStep: z.string().optional(),
    }).superRefine((project, context) => {
      if (project.image && !project.imageAlt) {
        context.addIssue({ code: 'custom', path: ['imageAlt'], message: 'Project images require descriptive alt text.' });
      }
      if (project.visible && !project.links.some((link) => link.kind === 'source')) {
        context.addIssue({ code: 'custom', path: ['links'], message: 'Published projects require a direct source destination.' });
      }
    }),
});

export const collections = { projects };
