// Public summaries only. Employer records and private project material stay outside the site.
export const experience = {
  employer: 'RxSense',
  title: 'Production Support Engineer',
  start: { date: '2022-08', label: 'Aug 2022' },
  end: { date: '2026-01', label: 'Jan 2026' },
  overview:
    'Supported production software and investigated complex technical issues across applications, APIs, databases, and environment configuration. Developed internal software and automation while applying systems and IT-oriented problem-solving.',
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
