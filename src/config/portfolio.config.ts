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
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/arthur-sumague-7b1930207/', icon: 'linkedin' }, // [EDIT]
    { id: 'leetcode', label: 'LeetCode', url: 'https://leetcode.com/asumag4', icon: 'code' }, // [EDIT]
    { id: 'mail', label: 'Email', url: 'sumaguearthur@outlook.com', icon: 'mail' }, // [EDIT]
  ],

  /* ----------------------------------------------------------------
   * EXPERIENCE TIMELINE — newest first. Append objects as you go.
   * ---------------------------------------------------------------- */
  experiences: [
    {
      id: 'exp-current',
      role: 'Data Analytics Developer I', 
      company: 'Dakota Analytics', 
      companyUrl: 'https://dakotaanalytics.com/',
      start: 'Jul 2025',
      end: null, // null = Present
      location: 'Calgary, AB',
      summary:
        'Consultant / contractor for Database Warehousing, Data Serving (ETL), BI Reporting and Data Processes Engineering',
      bullets: [
          {
            text: 'Data Analyst & Architect for major Oil and Gas Producer',
            sub: [
              'Scope and assessment of +2000 reports and +20 data sources — understanding relevance on current business operations on O&G distribution and future solutions to be made from them',
              'Implementation of robotics process automation on in-house file system directory — potential to automate 900 hours of engineer work for major O&G producer',
              'Data modelling and incremental history-archiving process development of emissions data for major O&G producer',
            ],
          },
          {
            text: 'Report Developer for major Oil and Gas distributor',
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
            text: 'Modelling & Reporting for Oil and Gas Business Intelligence',
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
      companyUrl: 'https://dakotaanalytics.com/',
      start: 'Apr 2025',
      end: 'Jul 2025',
      location: 'Calgary, AB',
      summary: 'Analytics and reporting for operations, production and finance teams.',
      bullets: [
          'Developed production reports for oil and gas (O&G) exploration & producer - providing insight into daily production & sales volumes per well',
          'Sustainment of Financial / Accounting reporting for major O&G producer - providing high-level detail to international O&G operations',
          'Developed 3 demo Power Apps to manage division orders for to minerals producer',
      ],
      tech: ['Azure', 'Microsoft Power Platform / BI'],
    },
    {
      id: 'exp-research2',
      role: 'Summer Research Student',
      company: 'APACE Laboratory',
      companyUrl: 'https://www.structurems.ca/',
      start: 'May 2023',
      end: 'Aug 2023',
      location: 'Calgary, AB',
      summary: 'Undergraduate Researcher',
      bullets: [
        'Applying scientific method in designing and testing novel methodology of protein structure analysis'
      ],
      tech: ['Scientific Research'],
    },
    {
      id: 'exp-research1',
      role: 'Part-time Associate Researcher',
      company: 'APACE Laboratory',
      companyUrl: 'https://www.structurems.ca/',
      start: 'Sep 2022',
      end: 'May 2023',
      location: 'Calgary, AB',
      summary: 'Undergraduate Researcher',
      bullets: [
        'Production of Nepenthesin 2 Protease'
      ],
      tech: ['Scientific Research'],
    },
    {
      id: 'exp-research',
      role: 'Summer Research Student',
      company: 'APACE Laboratory',
      companyUrl: 'https://www.structurems.ca/',
      start: 'May 2022',
      end: 'Aug 2022',
      location: 'Calgary, AB',
      summary: 'Undergraduate Researcher',
      bullets: [
        'Revitalizing production of Nepenthesin 2 via Escherichia coli host for Hydrogen-Deuterium Exchange Mass Spectrometry protein structural analysis'
      ],
      tech: ['Scientific Research'],
    }
  ],

  /* ----------------------------------------------------------------
   * EDUCATION — panels with notable works / clubs / projects inside.
   * Add a new object to the array for each degree or institution.
   * ---------------------------------------------------------------- */
  education: [
    {
      id: 'edu-masters',
      icon: 'ti ti-school',
      education_title: 'Masters in Data Science & Analytics', // [EDIT]
      major: 'Data Science', // [EDIT]
      school: 'University of Calgary', // [EDIT]
      start: 'Sep 2024', // [EDIT]
      end: 'Aug 2025', // [EDIT — null = Present]
      description: 'Focus on statistical modelling, data systems, and quantitative methods.', // [EDIT]
      notable_works: [
      ],
    },
    {
      id: 'edu-bachelors',
      icon: 'ti ti-school',
      education_title: 'Bachelors of Science (Honours)', // [EDIT]
      major: 'Biochemistry', // [EDIT]
      school: 'University of Calgary', // [EDIT]
      start: 'Sep 2020', // [EDIT]
      end: 'Apr 2024', // [EDIT — null = Present]
      description: 'Focus on natural sciences - biochemistry + additional statistics and economics sources', // [EDIT]
      notable_works: [
        {
          name: 'Honours Thesis', // [EDIT]
          description: [
            'HDX-MS of GFP-tagged proteins isolated from mammalian cell culture'
          ],
        },
        {
          name: 'Canadian Organization of Undergraduate Research', // [EDIT]
          description: [
            'Raised +$2500 through grants and fund-raising efforts',
            'Organized and hosted 3 research-training workshops for ~60 students across Canada',
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
  id: 'energy-dbt-ai',
  title: 'Energy Analytics & Drilling Forecast Platform',
  tagline: 'Production-grade ML pipeline forecasting oil & gas rig activity from 26 years of EIA data',
  emoji: '⚡',
  accent: '#00b4a0',
  link: 'https://github.com/asumag4/energy_analytics',
  description: [
    'An end-to-end data engineering and ML platform that ingests U.S. Energy Information Administration (EIA) API v2 data across crude oil, natural gas, spot prices, and inventory — persisting 294,000+ records spanning 2000–2025 into a medallion-architecture PostgreSQL warehouse (bronze → silver → gold).',
    'Two OOP classes — IngestEIA and DBLoader — form the production data layer. IngestEIA handles paginated facet-chunked API fetching to stay within URL-length limits, while DBLoader drives dynamic table creation and upsert semantics via SQLAlchemy. dbt Core owns the silver-layer transformations: deduplication, wide pivots, and ML feature views.',
    'SARIMAX models (auto-tuned via pmdarima AICc) forecast monthly oil and gas rig counts using statistically validated feature sets. Candidate features pass a rigorous pipeline: ADF stationarity testing, Granger causality filtering, and collinearity pruning — narrowing 100+ raw EIA series down to the predictors that actually move the needle.',
  ],
  highlights: [
    'IngestEIA class: facet-chunked pagination solves EIA URL-length limits transparently',
    'DBLoader class: schema-dict-driven dynamic table creation with ON CONFLICT upsert',
    'SARIMAX(1,1,1)(0,0,1)[12] fit on oil rig counts; 10-fold TimeSeriesSplit CV',
    'Granger causality + ADF stationarity gate for rigorous feature selection',
    'dbt medallion architecture: bronze raw → silver views → gold ML sets',
    'MLflow experiment tracking wired for model registry integration',
  ],
  tech: [
    'Python 3.12', 'pandas', 'NumPy', 'statsmodels', 'pmdarima', 'scikit-learn',
    'DuckDB', 'PostgreSQL', 'SQLAlchemy', 'dbt Core', 'MLflow', 'PyArrow',
    'EIA API v2', 'FRED API', 'uv',
  ],
  links: [
    { label: 'Repository', url: 'https://github.com/asumag4/energy_analytics', icon: 'github' },
  ],
  architecture: {
    caption: 'Ingestion-to-forecast pipeline (medallion + ML)',
    ascii: `┌─────────────────────────────────────────┐
│  EIA API v2  ·  FRED  ·  US Census      │
│  294k+ records · 26 years · 8 routes    │
└──────────────────┬──────────────────────┘
                   ▼
┌─────────────────────────────────────────┐
│  IngestEIA  (OOP)                       │
│  · Facet-chunked paginated fetching     │
│  · V1→V2 series ID translation          │
│  · DuckDB + PyArrow normalization       │
└──────────────────┬──────────────────────┘
                   ▼
┌─────────────────────────────────────────┐
│  DBLoader  (OOP)                        │
│  · Schema-dict dynamic table creation   │
│  · ON CONFLICT upsert via SQLAlchemy    │
│  BRONZE  ·  PostgreSQL raw schema       │
└──────────────────┬──────────────────────┘
                   ▼
┌─────────────────────────────────────────┐
│  dbt Core transformation layer          │
│  · Deduplication & wide pivot views     │
│  · v_ml_drilling_set feature view       │
│  SILVER  ·  PostgreSQL clean schema     │
└──────────────────┬──────────────────────┘
                   ▼
┌─────────────────────────────────────────┐
│  Feature Engineering                    │
│  · ADF stationarity gating (d=2)        │
│  · Granger causality filtering (lag=5)  │
│  · Collinearity pruning                 │
│  44 oil features · 48 gas features      │
└──────────────────┬──────────────────────┘
                   ▼
┌─────────────────────────────────────────┐
│  SARIMAX Forecasting  +  MLflow         │
│  · pmdarima auto-ARIMA (AICc)           │
│  · 10-fold TimeSeriesSplit CV           │
│  · Ljung-Box · Jarque-Bera diagnostics  │
│  GOLD  ·  12-month rig count forecasts  │
└─────────────────────────────────────────┘`,
  },
},
  {
    id: 'skill-sync-rag',
    title: 'SkillSyncRAG',
    tagline: 'Job market intelligence tool powered by a LangChain ReAct agent and live job postings',
    emoji: '🧠',
    accent: '#4f8ef7',
    link: 'https://github.com/Ikeora/SkillSyncRAG',
    description: [
      'A RAG-powered job market intelligence tool that scrapes live job postings via the RapidAPI Jobs API, chunks and embeds them with a HuggingFace sentence-transformer model, and persists them in a local ChromaDB vector store — all during an offline ingestion pipeline so query-time retrieval stays fast.',
      'At query time, a LangChain ReAct agent orchestrates two tools: a semantic similarity search over the vector store (score-threshold filtered, not blind top-k), and a GPT-4o skill-ranking tool that extracts and scores skills 1–100 from the retrieved postings.',
      'Results surface as an interactive Plotly horizontal bar chart alongside a plain-text ranking, rendered inside a Streamlit chat interface. Supports natural-language queries like "What skills do I need for a machine learning role?"',
    ],
    highlights: [
      'Embeddings computed once at ingest; only the query is embedded at runtime',
      'Similarity score threshold (0.25) filters irrelevant documents instead of blind top-k',
      'ReAct agent handles varied query phrasing robustly by deciding when to search vs. rank',
      'Dual output: Plotly chart + plain-text skill ranking in a single agent response',
    ],
    tech: ['Python', 'LangChain', 'OpenAI GPT-4o', 'ChromaDB', 'HuggingFace sentence-transformers', 'Streamlit', 'Plotly', 'RapidAPI Jobs API', 'Pandas', 'uv'],
    links: [
      { label: 'Repository', url: 'https://github.com/Ikeora/SkillSyncRAG', icon: 'github' },
    ],
    architecture: {
      caption: 'Ingest-once, query-fast RAG pipeline',
      ascii: `┌────────────────────────────────────────┐
│  Ingestion Pipeline (offline)          │
│  RapidAPI Jobs API → chunk → embed     │
│  sentence-transformers/all-mpnet-base  │
└──────────────────┬─────────────────────┘
                  │ persist
                  ▼
┌────────────────────────────────────────┐
│  ChromaDB Vector Store                 │
│  (jobs_collection, local persistent)   │
└──────────────────┬─────────────────────┘
                  │ similarity search
                  ▼
┌────────────────────────────────────────┐
│  LangChain ReAct Agent                 │
│  Tool 1: ChromaDBQueryJobsTool         │
│  Tool 2: SkillRankingTool (GPT-4o)     │
└──────────────────┬─────────────────────┘
                  │
                  ▼
┌────────────────────────────────────────┐
│  Streamlit Chat Frontend               │
│  Plotly bar chart + text ranking       │
└────────────────────────────────────────┘`,
    },
  },
{
  id: 'fx-ticker-predict',
  title: 'FX Ticker Predictor',
  tagline: 'Multi-EC2 NLP + time-series pipeline that forecasts daily forex ranges on AWS',
  emoji: '💱',
  accent: '#00c896',
  link: 'https://github.com/asumag4/fxTickerPredict',
  description: [
    'An end-to-end deployed forex forecasting system covering EUR/USD, GBP/USD, and JPY/USD. News articles are scraped daily from FXStreet with Selenium, scored for sentiment by finBERT, joined with OHLC data from Yahoo Finance, and fed into a Facebook Prophet regressor that outputs 7-day High/Low price bands — all orchestrated across three purpose-built AWS EC2 instances.',
    'The NLP layer runs finBERT (ProsusAI) on a t3.large to produce article-level polarity scores, which are aggregated to daily averages and smoothed with 20-day SMAs before entering the Prophet model. Two forecast variants are maintained per pair — one with sentiment regressors and one without — so users can isolate the marginal signal from news versus pure price history.',
    'A Streamlit dashboard hosted on a dedicated t2.micro reads Parquet files from S3 to render interactive candlestick-band charts, per-pair BUY/SELL/HOLD action cards, and historical RMSE tables. The ETL log system prevents re-processing already-scored articles, keeping daily refreshes fast and idempotent.',
  ],
  highlights: [
    'Three-tier AWS deployment: scraper EC2 → ML EC2 → app EC2, all wired through S3',
    'finBERT sentiment scores fused with Yahoo Finance OHLC as Prophet regressors',
    'Toggleable sentiment layer so users can compare news-augmented vs. price-only forecasts',
    'Incremental ETL log prevents duplicate finBERT scoring across daily pipeline runs',
    'RMSE tracked historically per pair and surface in the dashboard',
  ],
  tech: [
    'Python', 'Streamlit', 'Prophet', 'finBERT', 'PyTorch', 'HuggingFace Transformers',
    'Selenium', 'BeautifulSoup', 'yfinance', 'pandas', 'NumPy', 'Plotly',
    'AWS EC2', 'AWS S3', 'Parquet',
  ],
  links: [
    { label: 'Repository', url: 'https://github.com/asumag4/fxTickerPredict', icon: 'github' },
  ],
  architecture: {
    caption: 'Three-EC2 AWS pipeline: scrape → NLP → forecast → serve',
    ascii: `┌──────────────────────────────────────────┐
│  EC2 t2.micro  ·  Scraper                │
│  Selenium → FXStreet news articles       │
│  daily_update_table() per ticker         │
└────────────────────┬─────────────────────┘
                     │  raw parquet
                     ▼
              ┌─────────────┐
              │  AWS S3     │
              │  raw_data/  │
              └──────┬──────┘
                     │
                     ▼
┌──────────────────────────────────────────┐
│  EC2 t3.large  ·  ML Engine              │
│  finBERT → polarity scores               │
│  20-day SMA feature engineering          │
│  Prophet  → High / Low 7-day forecasts   │
│  Dual mode: w/ sentiment / w/o sentiment │
└────────────────────┬─────────────────────┘
                     │  prediction + error parquets
                     ▼
              ┌─────────────────────┐
              │  AWS S3             │
              │  modelling_dataset/ │
              │  prediction_data/   │
              │  error_data/        │
              └──────────┬──────────┘
                         │
                         ▼
┌──────────────────────────────────────────┐
│  EC2 t2.micro  ·  Streamlit App          │
│  Forecast band charts (Plotly)           │
│  BUY / SELL / HOLD action cards          │
│  RMSE dashboard  ·  EUR USD GBP tabs     │
└──────────────────────────────────────────┘`,
  },
},
    // 3. EIA Well Testing 
    // 4. Beacons
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
      items: ['Azure Databricks', 'Azure Virtual Machines', 'Azure Synapse', 'Azure Key Vault', 'Power BI Gateway'],
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
      username: 'asumag4', // [EDIT]
      profileUrl: 'https://leetcode.com/u/asumag4/', // [EDIT]
      showCard: true,
    },
    datalemur: {
      profileUrl: 'https://datalemur.com/profile/asumag4',
      csvUrl: 'https://raw.githubusercontent.com/asumag4/practice/main/DataLemur/questions1.csv',
      fallbackTotal: 35,
      note: 'Solved count tallied live from my practice CSV.',
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
    heading: 'Pipelines and Software for Analytics',
    portraitInitials: 'AS',
    paragraphs: [
      'I’m a Calgary-based data & analytics developer with a graduate background in data science & analytics. My day job lives in the energy sector — building on production, sales, operational and financial data models.',
      'Outside work I am always self-educating on statistics and its application in different fields. I am always pushing my programming abilities through coding performance platforms.',
      'I’d rather have an honest assessment than an optimistic one, and I build software the same way.',
    ], // [EDIT to taste]
    highlights: [
      { label: 'Based in', value: 'Calgary, AB' },
      { label: 'Focus', value: 'Data platforms & quant systems' },
      { label: 'Stack core', value: 'Python · SQL · Databricks · Azure · dbt' },
      { label: 'Background', value: 'Science and Research' },
    ],
    currently: [
      'reviewing ML & statistical fundamentals through StatQuest!',
      'trying to figure out if I can do my job without Claude (impossible)',
      'Weekly PR bench press & squat by +5lbs',
    ],
    funFacts: [
      'Love trying all food cuisines - the food scene in Calgary is diverse and of high-standards',
      "I'll use the free Google Search AI to debug code lmao - it works well for small code snipets"
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
    heading: "Got an idea? Let's work together!",
    blurb:
      'If its an application requiring backend-services, data pipelining, warehousing or statstical modelling, lets see what I can do for you!',
    email: 'sumaguearthur@outlook.com', // [EDIT]
    // [EDIT] Create a free form at https://formspree.io, paste the
    // endpoint here (e.g. 'https://formspree.io/f/abcdwxyz').
    // While null, the form falls back to opening the visitor's
    // mail client instead.
    formEndpoint: "https://formspree.io/f/xgojydbd",
    successMessage: 'Message sent — I’ll get back to you soon.',
    errorMessage: 'Something went wrong sending that. Email me directly instead?',
  },

  footer: {
    line: 'Designed & built by Arthur Sumague · powered by coffee and cron jobs',
  },
};
