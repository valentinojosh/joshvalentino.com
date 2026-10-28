// Public summaries only. Employer records and private project material stay outside the site.
export const experience = {
  employer: 'RxSense',
  title: 'Production Support Engineer',
  start: { date: '2022-08', label: 'Aug 2022' },
  end: { date: '2026-01', label: 'Jan 2026' },
  overview:
    'Developed internal applications and automation, improved data workflows, and investigated production software across code, APIs, databases, and environment configuration.',
  practices: ['Git & peer review', 'CI/CD', 'Testing & validation', 'Technical documentation'],
  stories: [
    {
      number: '01',
      title: 'Internal data-transformation software',
      tools: 'Python / ETL / Application architecture',
      summary:
        'Developed backend components for a team-built application that parsed CSV, Excel, and JSON, mapped fields, and normalized inconsistent inputs.',
      contribution:
        'Helped turn an informal script collection into reusable object-oriented modules and establish reviewed Git collaboration and development planning.',
    },
    {
      number: '02',
      title: 'SQL workflows & C# automation',
      tools: 'SQL Server / C# / Data integrity',
      summary:
        'Extended established, multi-stage migration workflows with specialized input handling, reject checks, relational dependency management, and performance-conscious batches.',
      contribution:
        'Independently built C# preprocessing and script-generation tools, validated changes in lower environments, and prepared tested packages for DBA-controlled production execution.',
    },
    {
      number: '03',
      title: 'Cross-layer application investigation',
      tools: 'DevTools / APIs / C# debugging / SQL',
      summary:
        'Connected browser symptoms with API requests, backend execution, SQL state, and configuration to distinguish input, access, application, and environment issues.',
      contribution:
        'Used reproducible test cases, logs, Swagger, Postman, and debugger traces to document actionable findings and verify fixes with the responsible engineers.',
    },
  ],
} as const;

export const expertise = [
  {
    title: 'Software & applications',
    context: 'Professional development + independent projects',
    description: 'Backend components, full-stack applications, modular architecture, and tools built around real workflows.',
    tools: ['Python', 'C#', 'Java / Spring Boot', 'React / Node.js'],
  },
  {
    title: 'Data, integration & automation',
    context: 'Professional engineering',
    description: 'Complex relational workflows, file transformation, data-quality checks, and utilities that reduce repeated manual work.',
    tools: ['SQL Server / T-SQL', 'ETL & field mapping', 'REST APIs', 'C# / Python tooling'],
  },
  {
    title: 'Systems & IT',
    context: 'Professional support + independent systems',
    description: 'Application and access troubleshooting, Windows deployment, local service administration, and tested backup and recovery.',
    tools: ['Windows', 'Self-hosted services', 'Deployment & drivers', 'Backup / restoration'],
  },
  {
    title: 'Networking & infrastructure',
    context: 'Independent systems work',
    description: 'Practical network boundaries, reliable wired connectivity, and local services designed around household requirements.',
    tools: ['OpenWrt-based routing', 'Managed switching', 'IoT isolation', 'DNS filtering'],
  },
  {
    title: 'Hardware & diagnostics',
    context: 'Independent builds, repair & recovery',
    description: 'PC integration, firmware and thermal validation, component repair, and source-preserving storage investigation.',
    tools: ['PC commissioning', 'Firmware / telemetry', 'Windows / macOS recovery', 'Bootable Linux tools'],
  },
  {
    title: 'Security-aware practices',
    context: 'Applied within engineering & operations',
    description: 'Access-control investigation and reviews, sensitive-data handling, and deliberate validation of permission boundaries.',
    tools: ['Permissions & access logs', 'Access reviews', 'Protected test data', 'Controlled changes'],
  },
] as const;

interface AdditionalProject {
  title: string;
  type: string;
  description: string;
  href?: string;
  status?: string;
}

export const additionalProjects: readonly AdditionalProject[] = [
  {
    title: 'SAP Achievement Tracker',
    type: 'C# / Unity / MelonLoader',
    description: 'An event-driven, read-only game overlay that shows existing achievement progress without changing gameplay.',
    href: 'https://github.com/valentinojosh/SAP-achievement-tracker',
  },
  {
    title: 'BetterDates.ai',
    type: 'Local-first application / Optional AI',
    description: 'A local-first date and activity discovery project combining structured venue research, preference-based recommendations, and optional AI-assisted research.',
    status: 'Private · In development',
  },
];
