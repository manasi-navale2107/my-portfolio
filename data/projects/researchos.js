export const researchOS = {
  slug: "researchos",

  featured: true,

  title: "ResearchOS",

  shortTitle: "Multi-Agent Research System",

  category: "Multi-Agent AI",

  year: "2026",

  status: "Completed",

  tagline:
    "A multi-agent AI research system that automates web search, information extraction, reasoning, and structured report generation.",

  oneLiner:
    "An AI-powered research assistant built with LangChain, LangGraph, Groq, and Tavily.",

  description:
    "ResearchOS is a Multi-Agent Research System designed to automate the research workflow. It uses AI agents to plan research, search the web, extract useful information, reason over collected content, and generate structured reports. The project focuses on reducing manual research effort and improving the quality of information synthesis using Generative AI.",

  coverImage: "/projects/researchos/cover.png",

  heroImage: "/projects/researchos/hero.png",

  gallery: [
    "/projects/researchos/1.png",
    "/projects/researchos/2.png",
    "/projects/researchos/3.png",
    "/projects/researchos/4.png",
  ],

  github: {
    repository: "https://github.com/manasi-navale2107/ResearchOS",
  },

  liveDemo: null,

  team: {
    name: "Personal Project",

    members: ["Manasi Navale"],
  },

  duration: "2026",

  problem: {
    title: "The Problem",

    description:
      "Manual research is time-consuming because users need to search across multiple sources, read long pages, compare information, filter useful points, and organize everything into a structured report. This process becomes inefficient when working on technical topics, academic research, or fast-changing domains.",

    challenges: [
      "Time-consuming manual research",
      "Scattered information across multiple sources",
      "Difficulty extracting relevant insights",
      "Lack of structured report generation",
      "Need for reliable source-aware responses",
      "Repeated effort in summarizing and organizing findings",
    ],
  },

  solution: {
    title: "The Solution",

    description:
      "ResearchOS solves this problem by using a multi-agent AI workflow. Different agents handle research planning, web search, information extraction, reasoning, and report generation. The system combines LangChain, LangGraph, Groq LLMs, and Tavily Search to produce structured and context-aware research outputs.",

    keyPoints: [
      "Multi-agent research workflow",
      "Automated web search",
      "Information extraction",
      "LLM-based reasoning",
      "Structured report generation",
      "Source-aware research output",
    ],
  },

  features: [
    {
      title: "Multi-Agent Workflow",
      icon: "🤖",
      description:
        "Uses multiple AI agents to divide research into planning, searching, reading, reasoning, and writing steps.",
    },
    {
      title: "Web Search Integration",
      icon: "🌐",
      description:
        "Integrates Tavily Search to collect relevant information from online sources based on the user query.",
    },
    {
      title: "Content Extraction",
      icon: "📄",
      description:
        "Extracts useful information from searched sources and prepares it for reasoning and report generation.",
    },
    {
      title: "LLM-Based Reasoning",
      icon: "🧠",
      description:
        "Uses Groq-powered LLMs to analyze gathered information and generate meaningful insights.",
    },
    {
      title: "Structured Report Generation",
      icon: "📝",
      description:
        "Generates organized reports with introduction, key findings, conclusion, and source references.",
    },
    {
      title: "Research Automation",
      icon: "⚡",
      description:
        "Reduces repetitive manual work by automating the complete research-to-report workflow.",
    },
  ],

  architecture: {
    title: "System Architecture",

    flow: [
      "User Query",
      "Research Planner",
      "Web Search Agent",
      "Content Extraction",
      "Reasoning Agent",
      "Report Generator",
      "Final Output",
    ],

    description:
      "ResearchOS follows a modular multi-agent architecture where each stage performs a specific research task. The workflow starts with a user query, performs search and extraction, reasons over collected information, and generates a structured research report.",
  },

  techStack: {
    frontend: ["Streamlit"],

    backend: ["Python"],

    ai: [
      "LangChain",
      "LangGraph",
      "Groq",
      "Tavily",
      "Prompt Engineering",
      "LLM Applications",
      "Multi-Agent Systems",
    ],

    tools: ["Git", "GitHub", "VS Code"],
  },

  responsibilities: [
    "Project Planning",
    "AI Workflow Design",
    "LangChain Integration",
    "LangGraph Workflow Development",
    "Tavily Search Integration",
    "Prompt Engineering",
    "Streamlit UI Development",
    "Testing and Debugging",
  ],

  challengesFaced: [
    {
      title: "Designing Multi-Agent Flow",

      description:
        "Creating a clear workflow where each AI agent performs a specific role without breaking the overall research pipeline.",
    },
    {
      title: "Improving Search Quality",

      description:
        "Ensuring that the search results were relevant and useful for generating meaningful research reports.",
    },
    {
      title: "Generating Structured Reports",

      description:
        "Designing prompts and logic to produce clean reports with proper sections and readable output.",
    },
    {
      title: "Handling LLM Responses",

      description:
        "Managing inconsistent LLM outputs and improving reliability through better prompts and workflow structure.",
    },
  ],

  achievements: [
    {
      title: "Multi-Agent AI System",
      event: "Portfolio Project",
    },
    {
      title: "Generative AI Research Automation",
      event: "LangChain + LangGraph Project",
    },
  ],

  impact: {
    title: "Impact",

    points: [
      "Reduces manual research effort",
      "Improves research organization",
      "Generates structured reports",
      "Demonstrates multi-agent AI workflow design",
      "Shows practical use of LangChain and LangGraph",
    ],
  },

  futureScope: [
    "PDF Research Support",
    "Citation-Based Report Generation",
    "Research History Saving",
    "Advanced RAG Integration",
    "Multiple Report Formats",
    "Team Collaboration Features",
  ],

  metrics: [
    {
      label: "Domain",
      value: "Generative AI",
    },
    {
      label: "Core Tech",
      value: "LangGraph",
    },
    {
      label: "Agents",
      value: "Multi-Agent",
    },
    {
      label: "Output",
      value: "Reports",
    },
  ],

  seo: {
    title: "ResearchOS - Multi-Agent Research System",

    description:
      "ResearchOS is a Multi-Agent Research System built using LangChain, LangGraph, Groq, Tavily, and Streamlit to automate web research, reasoning, and report generation.",
  },
};