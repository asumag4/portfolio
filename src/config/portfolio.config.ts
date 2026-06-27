import type { PortfolioConfig } from '../types/portfolio.types';

/**
 * ==================================================================
 *  MASTER CONFIG — edit this file (and themes.ts) and nothing else.
 * ==================================================================
 *  Every section of the site renders from this object. Add a project,
 *  an experience entry, or a skill by appending to the arrays below.
 *  Items marked [EDIT] are placeholders waiting for your real info.
 */

export const portfolio: PortfolioConfig = {
  meta: {
    title: 'Arthur Sumague — Data Analytics Developer',
    description:
      'Portfolio of Arthur Sumague — data engineering, analytics, and quantitative systems.',
  },

  /* ----------------------------------------------------------------
   * HERO
   * ---------------------------------------------------------------- */
  hero: {
    eyebrow: '// hello, world — calgary, ab',
    name: 'Arthur Sumague',
    typedRoles: [
      'Data & Analytics Developer',
      'Data Architect',
      'Pipeline Builder',
      'Application Builder',
      'Upstream & Downstream Oil and Gas Analysis',
      'AI and ML Integration',
      'Business Intelligence',
    ],
    tagline:
      "I create production-ready scalable data solutions. Always ready to learn more about how data and tech improves business processes.",
    ctas: [
      { label: 'View projects', href: '#projects', variant: 'primary' },
      { label: 'Get in touch', href: '#contact', variant: 'ghost' },
    ],
    scrollHint: 'scroll to explore',
  },

  socials: [
    { id: 'github', label: 'GitHub', url: 'https://github.com/asumag4', icon: 'github' }, // [EDIT]
    { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/your-handle', icon: 'linkedin' }, // [EDIT]
    { id: 'leetcode', label: 'LeetCode', url: 'https://leetcode.com/u/your-username/', icon: 'code' }, // [EDIT]
    { id: 'mail', label: 'Email', url: 'mailto:you@example.com', icon: 'mail' }, // [EDIT]
  ],

  /* ----------------------------------------------------------------
   * EXPERIENCE TIMELINE — newest first. Append objects as you go.
   * ---------------------------------------------------------------- */
  experiences: [
    {
      id: 'exp-current',
      logoUrl: 'https://d2q79iu7y748jz.cloudfront.net/s/_logo/2cbc5f225ada76ac7b5c520707bf11ef',
      role: 'Data Analytics Developer I', 
      company: 'Dakota Analytics', 
      companyUrl: 'https://dakotaanalytics.com/',
      start: 'Jul 2025',
      end: null, // null = Present
      location: 'Calgary, AB',
      summary:
        'Developer consultant on Database Warehousing, Data Serving (ETL) and BI Reporting',
      bullets: [
          {
            text: 'Data Analyst & Architect for major O&G Producer',
            sub: [
              'Scope and assessment of +2000 reports and +20 data sources — understanding relevance on current business operations on O&G distribution and future solutions to be made from them',
              'Implementation of robotics process automation on in-house file system directory — potential to automate 900 hours of engineer work for major O&G producer',
              'Data modelling and incremental history-archiving process development of emissions data for major O&G producer',
            ],
          },
          {
            text: 'Report Developer for major O&G distributor',
            sub: [
              'Maintenance and improvements to web application for division orders creation to land-rights co-owners for major O&G producer - encompassing well land rights for more than 100+ co-owners',
              'Established documentation site format of data-product for major O&G distributor',
              'Developed a data-quality integrity platform to check if data is correctly synced throughout the pipeline, across 3 different databases',
            ]
          },
          {
            text: 'Custom Data and Software Solutions',
            sub: [
              'Developed 3 demo Power Apps to manage division orders for to minerals producer',
              'Developed Hubspot data ingestion and ETL for in-house marketing and operations reporting',
              'Developing tenant-based access role to in-house-made apps-suite - shipping to 2 clients',
              'Developed warehousing and serving financial data model for O&G producer - currently used by 2 finance executives',
            ]
          },
          { 
            text: 'Modelling & Reporting for O&G Business Intelligence',
            sub: [
              'Developed production reports for oil and gas (O&G) exploration & producer - providing insight into daily production & sales volumes per well',
              'Sustainment of Financial / Accounting reporting for major O&G producer - providing high-level detail to international O&G operations',
              'ETL and data modelling of 5 production data-sources for O&G producer for operational and production reporting',
            ]
          },
      ],
      tech: ['Upstream Oil and Gas', 'Downstream Oil and Gas', 'Business Intelligence', 'Data Engineering & ETL', 'Databricks', 'Azure', 'Amazon Web Services', 'Microsoft Power Platform / BI'],
    },
    {
      id: 'exp-intern',
      role: 'Data Analytics Developer (Intern)', // [EDIT]
      company: 'Dakota Analytics', // [EDIT — placeholder employer]
      start: 'April 2025',
      end: 'Jul 2025',
      location: 'Calgary, AB',
      summary: 'Analytics and reporting for operational, production and finance teams.',
      bullets: [
          'Developed production reports for oil and gas (O&G) exploration & producer - providing insight into daily production & sales volumes per well',
          'Sustainment of Financial / Accounting reporting for major O&G producer - providing high-level detail to international O&G operations',
          'Developed 3 demo Power Apps to manage division orders for to minerals producer',
      ],
      tech: ['Azure', 'Microsoft Power Platform / BI'],
    },
  ],

  /* ----------------------------------------------------------------
   * EDUCATION — panels with notable works / clubs / projects inside.
   * Add a new object to the array for each degree or institution.
   * ---------------------------------------------------------------- */
  education: [
    {
      id: 'edu-example',
      icon: 'ti ti-school',
      education_title: 'Bachelor of Science', // [EDIT]
      major: 'Data Analytics / Computer Science', // [EDIT]
      school: 'University of Calgary', // [EDIT]
      start: 'Sep 2019', // [EDIT]
      end: 'Apr 2023', // [EDIT — null = Present]
      description: 'Focused on statistical modelling, data systems, and quantitative methods.', // [EDIT]
      notable_works: [
        {
          name: 'Capstone Project — Supply Chain Forecasting', // [EDIT]
          description: [
            'Built a time-series demand model using ARIMA and XGBoost',
            'Reduced forecast error by 18% vs the baseline model',
            'Presented findings to a panel of industry judges',
          ],
        },
        {
          name: 'Data Science Club', // [EDIT]
          description: [
            'Led weekly workshops on pandas and SQL fundamentals',
            'Organized the annual data hackathon with 60+ participants',
          ],
        },
      ],
    },
  ],

  /* ----------------------------------------------------------------
   * PROJECTS — carousel cards; clicking opens the modal with
   * description, tech stack, and an optional architecture diagram
   * (image OR ascii). Append objects to add projects.
   * ---------------------------------------------------------------- */
  projects: [
    {
      id: 'ensemble-bot',
      title: 'Ensemble Trading System',
      tagline: 'Six-sleeve systematic portfolio engine with a full backtesting stack',
      emoji: '📈',
      accent: '#8b7cff',
      description: [
        'A multi-sleeve ensemble trading system spanning crypto trend, ETF trend, FX carry, commodity carry-momentum, covered calls, and a cash residual sleeve — gated by capital thresholds so the portfolio scales sensibly as the account grows.',
        'Signals are generated by TSMOM, Donchian breakout, and carry forecasters, combined with a forecast diversification multiplier (FDM), then sized with volatility targeting. Exits use a Wilder-ATR trailing ratchet, and the whole L1–L6 stack runs through a unified backtester.',
        'Ten unit tests pin the key mathematical invariants (scaling, FDM rescale, stop ratchets) to hand-verifiable expected values.',
      ],
      highlights: [
        'Volatility-targeted position sizing with FDM rescaling',
        'ATR trailing-stop ratchet for exits',
        'Order-sheet generation for manual venues; Kraken automatable',
      ],
      tech: ['Python', 'pandas', 'NumPy', 'Kraken API', 'Questrade API', 'pytest'],
      links: [
        { label: 'Repository', url: 'https://github.com/your-username/ensemble_bot', icon: 'github' }, // [EDIT]
      ],
      architecture: {
        caption: 'Signal-to-order pipeline (L1–L6)',
        ascii: `┌────────────────────────────────────┐
│  L1 · Data Ingestion               │
│  Kraken · Questrade · FX feeds     │
└─────────────────┬──────────────────┘
                  ▼
┌────────────────────────────────────┐
│  L2 · Forecast Engines             │
│  TSMOM · Donchian · Carry          │
└─────────────────┬──────────────────┘
                  ▼
┌────────────────────────────────────┐
│  L3 · Scoring + FDM Rescale        │
└─────────────────┬──────────────────┘
                  ▼
┌────────────────────────────────────┐
│  L4 · Vol-Targeted Position Sizing │
└─────────────────┬──────────────────┘
                  ▼
┌────────────────────────────────────┐
│  L5 · ATR Trailing Stops           │
└─────────────────┬──────────────────┘
                  ▼
┌────────────────────────────────────┐
│  L6 · Order Sheets + Backtester    │
└────────────────────────────────────┘`,
      },
    },
    {
      id: 'emissions-platform',
      title: 'Regulatory Emissions Platform',
      tagline: 'Immutable submission snapshots with amendment lineage for AMD5/AMD10 reporting',
      emoji: '🏭',
      accent: '#2dd4ff',
      description: [
        'A data platform for an Alberta industrial facility that treats regulatory reporting the way it deserves: operational data evolves, but submitted numbers must never change.',
        'The design separates a mutable working layer from frozen snapshot tables, with an approval state machine and amendment lineage so every revision (A0 → A1 → A2) is preserved and auditable rather than overwritten.',
        'The working table is grained at source / hour / pollutant / amendment with soft deletes, provenance foreign keys, and a filtered unique index enforcing a single current row.',
      ],
      highlights: [
        'Draft → Validating → Approved → Submitted → Superseded state machine',
        'Frozen snapshots alongside literal submitted artifacts',
        'Defensible audit trail by construction',
      ],
      tech: ['SQL Server', 'Python', 'dbt', 'Airflow'],
      architecture: {
        caption: 'Mutable working layer vs. immutable submission layer',
        ascii: `┌──────────────────────────┐      ┌──────────────────────────┐
│  emissions_hourly_working│      │  amd5_snapshot_detail    │
│  (mutable, soft-delete)  │ ───▶ │  (frozen, append-only)   │
│  grain: src/hr/pollutant │      │  + submitted artifacts   │
└────────────┬─────────────┘      └────────────┬─────────────┘
             │                                  │
             ▼                                  ▼
   approval state machine            amendment lineage
   Draft→Validating→Approved          A0 → A1 → A2
   →Submitted→Superseded              (never overwrite)`,
      },
    },
    {
      id: 'storm-leads',
      title: 'Storm Roofing Lead Pipeline',
      tagline: 'Geospatial pipeline matching hail alerts to commercial rooftops in Calgary',
      emoji: '⛈️',
      accent: '#ff7ac6',
      description: [
        'An end-to-end Python pipeline that identifies storm-affected commercial properties for roofing companies — turning public weather and parcel data into a ranked lead list.',
        'It ingests historical CAP severe-weather alerts from the ECCC MSC GeoMet API and commercial property parcels from the Calgary SODA API, lands them in Supabase (PostgreSQL), and intersects alert polygons with parcels to surface affected buildings.',
      ],
      highlights: [
        'End-to-end ingestion of CAP alerts and parcel data',
        'Supabase/PostgreSQL storage layer',
        'Built to be re-run after every storm event',
      ],
      tech: ['Python', 'Supabase', 'PostgreSQL', 'ECCC GeoMet API', 'Calgary SODA API'],
      links: [
        { label: 'Repository', url: 'https://github.com/your-username/storm-leads', icon: 'github' }, // [EDIT]
      ],
    },
    {
      id: 'well-intel',
      title: 'Permian Well Intelligence',
      tagline: 'Decline curves, EUR modelling, and frac-hit anomaly detection (in progress)',
      emoji: '🛢️',
      accent: '#ffd166',
      description: [
        'A personal energy-analytics build: decline curve fitting and EUR modelling on public well data, anomaly detection for frac hits, and operator benchmarking across the Permian Basin.',
        'Data sources: Texas RRC, the EIA API, and EPA GHGRP. Planned as a phased eight-week build with testable milestones.',
      ],
      tech: ['Python', 'DuckDB', 'scikit-learn', 'Plotly Dash', 'EIA API'],
    },
  ],

  /* ----------------------------------------------------------------
   * SKILLS — category cards with pill tags, ordered by importance.
   * accent options: blue | teal | purple | amber | coral | green | gray | pink
   * iconClass: any Tabler icon class, e.g. 'ti ti-database'
   * ---------------------------------------------------------------- */
  skills: [
    {
      category: 'Languages & Query',
      iconClass: 'ti ti-database',
      accent: 'blue',
      items: ['Python', 'SQL', 'T-SQL', 'PostgreSQL', 'JavaScript', 'TypeScript', 'R', 'M (Power Query)', 'DAX'],
    },
    {
      category: 'Data Engineering & ETL',
      iconClass: 'ti ti-brand-databricks',
      accent: 'green',
      items: ['Databricks', 'PySpark', 'Apache Spark', 'SQL Server (MSSQL)', 'Data Build Tool (dbt)', 'Claude Code', 'DuckDB', 'DBeaver', 'SQL Server Integration Services (SSIS)', 'Dynamic SQL', 'Delta Lake', 'Visual Studio', 'Data Warehousing', 'Star Schema', 'Slowly Changing Dimensiosn (SCD)'],
    },
    {
      category: 'Amazon Web Services',
      iconClass: 'ti ti-cloud-computing',
      accent: 'orange',
      items: ['AWS EC2', 'AWS S3', 'AWS Athena', 'AWS RDS'],
    },
    {
      category: 'Azure',
      iconClass: 'ti ti-cloud-computing',
      accent: 'amber',
      items: ['Azure Databricks', 'Azure Virtual Machines', 'Azure DataFactory', 'Azure Key Vault', 'Power BI Gateway'],
    },
    {
      category: 'Microsoft Power Platform / BI',
      iconClass: 'ti ti-chart-bar',
      accent: 'teal',
      items: ['Power BI', 'Power Query', 'Power Apps', 'Tabular Editor 2', 'Power BI Report Server', 'Office Scripts', 'Excel (advanced formulas)'],
    },
    {
      category: 'Web Development',
      iconClass: 'ti ti-app-window',
      accent: 'coral',
      items: ['React', 'Vue.js', 'FastAPI', 'Pydantic', 'Uvicorn', 'REST APIs', 'Tailwind', 'HTML/CSS', 'Babel (standalone)', 'Python HTTP server'],
    },
    {
      category: 'AI / ML & Data Science',
      iconClass: 'ti ti-ai',
      accent: 'green',
      items: ['Anthropic API (Claude)', 'pandas', 'NumPy', 'scikit-learn', 'statsmodels', 'Plotly', 'ggplot2 (R)', 'LLM prompt engineering', 'RAG / web search tools'],
    },
    {
      category: 'Integrations & APIs',
      iconClass: 'ti ti-plug-connected',
      accent: 'gray',
      items: ['HubSpot (CRM data)', 'Microsoft Graph API', 'ODBC/JDBC', 'openpyxl', 'MSAL', 'requests'],
    },
    {
      category: 'Dev Environment & Tooling',
      iconClass: 'ti ti-terminal-2',
      accent: 'pink',
      items: ['Linux (Fedora)', 'pyenv', 'Git', 'Bash', 'uv', 'venv', 'pip / npm', 'LeetCode / DSA (Python)'],
    },
    {
      category: 'Robotics Process Automation',
      iconClass: 'ti ti-robot',
      accent: 'purple',
      items: ['Automation Anywhere'],
    },
  ],

  /* ----------------------------------------------------------------
   * CODE STATS — LeetCode card + DataLemur CSV tracker
   * ---------------------------------------------------------------- */
  stats: {
    leetcode: {
      username: 'your-username', // [EDIT]
      profileUrl: 'https://leetcode.com/u/your-username/', // [EDIT]
      showCard: true,
    },
    datalemur: {
      profileUrl: 'https://datalemur.com', // [EDIT — your profile URL if you want one linked]
      // [EDIT] Point this at the raw CSV in your repo, e.g.
      // 'https://raw.githubusercontent.com/<user>/<repo>/main/datalemur.csv'
      // A bundled sample lives at /sample-datalemur.csv so the section
      // works out of the box.
      csvUrl: '/sample-datalemur.csv',
      fallbackTotal: 85,
      note: 'Tracked manually in a CSV — fetched live from the repo.',
    },
    github: {
      username: 'your-username', // [EDIT]
      showCards: false, // flip to true once the username is real
    },
  },

  /* ----------------------------------------------------------------
   * ABOUT
   * ---------------------------------------------------------------- */
  about: {
    heading: 'Engineer first, analyst always.',
    portraitInitials: 'AS',
    paragraphs: [
      'I’m a Calgary-based data engineer with a graduate background in a quantitative field. My day job lives in the energy sector — building emissions data platforms where auditability isn’t a feature, it’s the whole point.',
      'Outside work I run a systematic trading project end-to-end: research, backtesting, position sizing, and execution plumbing. I care about the unglamorous parts — degrees of freedom, leakage, and tests with hand-verifiable expected values.',
      'I’d rather have an honest assessment than an optimistic one, and I build software the same way.',
    ], // [EDIT to taste]
    highlights: [
      { label: 'Based in', value: 'Calgary, AB' },
      { label: 'Focus', value: 'Data platforms & quant systems' },
      { label: 'Stack core', value: 'Python · SQL · Airflow · dbt' },
      { label: 'Background', value: 'Quantitative grad degree' },
    ],
    currently: [
      'reviewing ML fundamentals (StatQuest)',
      'designing a meta-labeling classifier for the trade log',
      'sketching the Permian well-intelligence build',
    ],
    funFacts: [
      'My backtests taught me humility before any market did.',
      'I keep a CSV for everything — including the questions I solve.',
      'Strong opinions on Bessel’s correction.', // [EDIT — make these yours]
    ],
  },

  /* ----------------------------------------------------------------
   * RESUME — drop your PDF into /public as resume.pdf
   * ---------------------------------------------------------------- */
  resume: {
    pdfPath: '/resume.pdf',
    downloadName: 'Arthur-Sumague-Resume.pdf',
    lastUpdated: 'June 2026', // [EDIT]
  },

  /* ----------------------------------------------------------------
   * CONTACT
   * ---------------------------------------------------------------- */
  contact: {
    heading: 'Let’s build something defensible.',
    blurb:
      'Whether it’s a data platform, a pipeline, or a hard modelling problem — I’d like to hear about it. The form below lands straight in my inbox.',
    email: 'you@example.com', // [EDIT]
    // [EDIT] Create a free form at https://formspree.io, paste the
    // endpoint here (e.g. 'https://formspree.io/f/abcdwxyz').
    // While null, the form falls back to opening the visitor's
    // mail client instead.
    formEndpoint: null,
    successMessage: 'Message sent — I’ll get back to you soon.',
    errorMessage: 'Something went wrong sending that. Email me directly instead?',
  },

  footer: {
    line: 'Designed & built by Arthur Sumague · powered by coffee and cron jobs',
  },
};
