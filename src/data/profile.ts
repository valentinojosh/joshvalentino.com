// Public summaries only. Keep employer source material and implementation details private.
export const experience = {
  employer: 'RxSense',
  title: 'Production Support Engineer',
  start: { date: '2022-08', label: 'Aug 2022' },
  end: { date: '2026-01', label: 'Jan 2026' },
  overview:
    'Developed internal software and automation, maintained SQL data workflows, and investigated application behavior in sensitive production healthcare systems. The work connected backend development, data integrity, API debugging, testing, and technical operations.',
  stories: [
    {
      number: '01',
      title: 'From scripts to a transformation application',
      tools: 'Python / ETL / Git',
      summary:
        'Contributed backend Python code to a team-built application for turning inconsistent CSV, Excel, and JSON inputs into reusable internal formats.',
      contributions: [
        'Implemented parsing, field mapping, normalization, and reusable object-oriented modules.',
        'Helped restructure an informal script collection into a modular application and establish branching, peer review, and development planning.',
      ],
    },
    {
      number: '02',
      title: 'SQL workflows and purpose-built C# tools',
      tools: 'SQL Server / C# / Validation',
      summary:
        'Maintained and extended supervisor-authored migration templates across related member and group records, including specialized input handling, reject checks, and conditional batches.',
      contributions: [
        'Independently built C# utilities for extracting structured inputs and generating populated SQL script packages; teammates used the tooling.',
        'Tested changes in lower environments and prepared validation details for DBA execution. Production SQL access was read-only.',
      ],
    },
    {
      number: '03',
      title: 'Following a problem across application layers',
      tools: 'DevTools / Postman / C# / SQL',
      summary:
        'Used a recurring diagnostic workflow to connect browser behavior with API requests, backend execution, database state, and environment configuration.',
      contributions: [
        'Reproduced failures with browser Developer Tools, Swagger and Postman; used C# breakpoints, logs, and SQL to narrow the cause.',
        'Documented reproducible defects for the owning engineers and retested fixes, including input, permission, and release-related behavior.',
      ],
    },
  ],
} as const;

export const expertise = [
  {
    title: 'Backend software & tooling',
    description: 'Reusable components, modular architecture, internal applications, and automation for recurring technical work.',
    tools: ['Python', 'C#', 'Java', 'Spring Boot', 'Git & code review'],
  },
  {
    title: 'Data & integration',
    description: 'Relational investigation, multi-stage SQL workflows, file ingestion, mapping, and data-quality checks.',
    tools: ['SQL Server / T-SQL', 'ETL', 'CSV / Excel / JSON', 'REST APIs'],
  },
  {
    title: 'Application investigation',
    description: 'Trace behavior from a reproducible symptom to requests, code paths, data, and configuration; verify the result.',
    tools: ['Postman', 'Swagger', 'Browser DevTools', 'C# debugging', 'Test scenarios'],
  },
  {
    title: 'Systems & reliable operations',
    description: 'Hands-on service administration, network isolation, recovery, and deliberate validation of technical changes.',
    tools: ['Windows', 'Linux recovery tools', 'Networking', 'Backup & restoration', 'Sensitive-data handling'],
  },
] as const;

export const additionalProjects = [
  {
    title: 'SAP Achievement Tracker',
    type: 'C# / Unity / MelonLoader',
    description: 'A read-only game mod that surfaces existing achievement progress through event-driven UI overlays, without changing progression or gameplay.',
  },
  {
    title: 'BetterDates.ai',
    type: 'Python / SQLite / Local-first application',
    description: 'An activity discovery application with explainable person and group recommendations, private local profiles, and a human review step for research proposals.',
  },
] as const;
