export const caseStudies = [
  {
    id: "fintech",
    industry: "FINTECH",
    dealSize: "$55K",
    title: "Series A Payments Startup",
    summary:
      "Built a live AI analytics demo integrating two competing platforms. Won through a 2-hour hands-on lab that put AI directly in the customer's hands.",
    tags: ["AI Analytics", "Competitive Win", "Hands-On Lab"],
    challenge:
      "Fintech startup evaluating analytics platforms. The cloud provider's native tooling had the incumbent advantage.",
    whatIBuilt:
      "A 2-hour hands-on lab on Cortex Code (powered by Claude Code). The customer built alongside me, experiencing AI-powered analytics on their own data in real time.",
    outcome:
      "$55K closed. Beat the cloud-native pitch. The hands-on lab, not a slide deck, was the deciding factor.",
    saRelevance:
      "Putting AI directly in a customer's hands and letting them build. Exactly the work an SA does for startups adopting Claude.",
  },
  {
    id: "entertainment",
    industry: "ENTERTAINMENT",
    dealSize: "Mid-Mkt",
    title: "Ticketing Platform",
    summary:
      "Full 3-4 week cloud migration POC. Proved 67% faster data transformation builds.",
    tags: ["Migration", "dbt", "Competitive Win"],
    challenge:
      "Mid-market ticketing company locked into an aging cloud data warehouse. Needed proof that migration was worth the effort.",
    whatIBuilt:
      "End-to-end migration POC over 3-4 weeks. Replicated their existing pipelines and ran benchmarks head-to-head.",
    outcome:
      "67% faster dbt builds on the new platform. Migration greenlit based on POC results.",
    saRelevance:
      "Running a rigorous, evidence-based evaluation. The kind of technical depth that builds trust with engineering teams.",
  },
  {
    id: "insurance",
    industry: "INSURANCE",
    dealSize: "\u20ac170K",
    title: "French Enterprise Insurer",
    summary:
      'Customer 360 architecture design. Beat a major hyperscaler\'s analytics platform. Their Head of Data called the AI tooling a "game-changer."',
    tags: ["Customer 360", "Architecture", "AI"],
    challenge:
      "French insurer needed a unified customer view across multiple source systems. Evaluating two major platforms.",
    whatIBuilt:
      "Complete Customer 360 architecture: multi-source ingestion, identity resolution, governed analytics layer with AI capabilities.",
    outcome:
      "\u20ac170K closed. Beat the hyperscaler's platform on architecture quality and AI capabilities.",
    saRelevance:
      "Designing production architectures for enterprise customers. Bilingual delivery (English + French) across EMEA.",
  },
  {
    id: "saas",
    industry: "STARTUP",
    dealSize: "$125K",
    title: "Seed-Stage SaaS Company",
    summary:
      "Managed $25K to $125K expansion over 12 months. Grew alongside the customer from seed stage toward Series B.",
    tags: ["Expansion", "Land & Grow"],
    challenge:
      "Tiny initial deal with a seed-stage company. Needed to prove value fast and scale with their growth.",
    whatIBuilt:
      "Started with a focused analytics foundation, then expanded into ML pipelines and AI capabilities as the company grew.",
    outcome:
      "$25K to $125K in 12 months. The account grew 5x as the company approached Series B.",
    saRelevance:
      "Growing with startups from day one. Understanding their trajectory and scaling the technical relationship alongside the business.",
  },
];

export const skills = [
  {
    id: "pptx",
    name: "PPTX Generator",
    category: "presentation",
    flagship: true,
    description: "22 slide types. Visual variety enforcement. Full QA pipeline.",
    problem:
      "Creating customer-facing presentations took hours of manual work per deal.",
    solution:
      "Automated PowerPoint generation with 22 distinct slide types, visual variety rules to prevent monotony, and a multi-pass QA pipeline that checks content accuracy and design consistency.",
    codeSnippet: `rules:
  visual_variety:
    - "no two consecutive slides share the same layout"
    - "data slides must alternate between chart types"
  qa_pipeline:
    - pass_1: "content accuracy vs source transcript"
    - pass_2: "visual consistency and branding"
    - pass_3: "narrative flow and story arc"`,
    impact: "Hours of manual work reduced to minutes. Used across the UK SE team.",
  },
  {
    id: "sizing",
    name: "Sizing Agent",
    category: "workflow",
    flagship: true,
    description: "Automated solution sizing. Public on GitHub. Company-wide adoption.",
    problem:
      "Cost estimation across dozens of pricing dimensions. Manual process took 4-6 hours per customer.",
    solution:
      "9-section format with 7 anti-hallucination guardrails. Three-scenario output: Conservative, Expected, Aggressive. Every number traced to source or flagged as assumption.",
    codeSnippet: `guardrails:
  - SOURCE_OR_ASSUMPTION: "never present a number without origin"
  - WAREHOUSE_SIZING: "validate against benchmark table"
  - CREDIT_RATE: "verify region-specific pricing"
  - RUNTIME_VALIDATION: "cross-check against historical data"
  - CONSERVATIVE_DEFAULT: "when uncertain, round up"`,
    impact: "4-6 hours reduced to minutes. Now used company-wide. Public on GitHub.",
  },
  {
    id: "orchestrator",
    name: "Skill Orchestrator",
    category: "orchestration",
    flagship: true,
    description:
      "End-to-end pipeline: transcript to architecture diagram in one pass.",
    problem:
      "Running skills one at a time meant context was lost between steps.",
    solution:
      "Chains transcript extraction, current-state analysis, ingestion recommendations, future-state architecture, and diagram generation into a single orchestrated pipeline.",
    codeSnippet: `pipeline:
  1_extract: "transcript -> structured intelligence"
  2_analyze: "intelligence -> current-state diagram"
  3_recommend: "current-state -> ingestion patterns"
  4_architect: "patterns -> future-state design"
  5_visualize: "design -> draw.io XML diagram"`,
    impact:
      "Full pre-sales technical analysis from a single call recording. Minutes, not days.",
  },
  {
    id: "research",
    name: "Pre-Call Research",
    category: "workflow",
    flagship: false,
    description: "Decision-grade intelligence briefs with citations.",
    problem: "",
    solution: "",
    codeSnippet: "",
    impact: "",
  },
  {
    id: "current-state",
    name: "Current-State Analyzer",
    category: "architecture",
    flagship: false,
    description: "Mermaid diagrams from discovery transcripts.",
    problem: "",
    solution: "",
    codeSnippet: "",
    impact: "",
  },
  {
    id: "transcript",
    name: "Transcript Extractor",
    category: "workflow",
    flagship: false,
    description: "Call intelligence extraction. Distill, not summarize.",
    problem: "",
    solution: "",
    codeSnippet: "",
    impact: "",
  },
];

export type CaseStudy = (typeof caseStudies)[number];
export type Skill = (typeof skills)[number];
