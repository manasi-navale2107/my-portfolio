
"use client";

import React from "react";
import {
  Trophy,
  Users,
  TrendingUp,
  Zap,
  Github,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

// =====================================
// PROJECT-SPECIFIC IMPACT
// =====================================

const projectImpacts = {
  // 1. RESEARCHOS
  researchos: {
    description:
      "A multi-agent research system combining automated planning, web search, reasoning, and structured report generation.",

    highlights: [
      {
        title: "Multi-Agent Research Automation",
        description:
          "Developed a coordinated AI research workflow using LangChain and LangGraph to automate planning, information retrieval, reasoning, and reporting.",
      },
      {
        title: "Real-Time Information Retrieval",
        description:
          "Integrated Tavily Search to retrieve relevant web information for context-aware research.",
      },
      {
        title: "Groq-Powered LLM Integration",
        description:
          "Integrated Groq-hosted language models to support research reasoning and structured response generation.",
      },
      {
        title: "Structured Research Reports",
        description:
          "Built a workflow that organizes research information into structured reports.",
      },
    ],
  },

  // 2. QUERYMIND AI
  querymind: {
    description:
      "An agentic Text-to-SQL assistant that simplifies database interaction through natural language and specialized AI agents.",

    highlights: [
      {
        title: "Natural Language Database Interaction",
        description:
          "Developed an AI assistant that translates natural language questions into SQL queries for relational databases.",
      },
      {
        title: "Specialized Agent Workflows",
        description:
          "Designed agents for query planning, schema understanding, SQL generation, validation, correction, and answer generation.",
      },
      {
        title: "SQL Validation & Correction",
        description:
          "Implemented query validation and automatic correction workflows to improve SQL query reliability.",
      },
      {
        title: "Real-Time Streaming & Conversations",
        description:
          "Built FastAPI services supporting conversation sessions, contextual follow-ups, and Server-Sent Events for real-time streaming.",
      },
    ],
  },

  // 3. RETAILFLOW
  retailflow: {
    description:
      "An end-to-end cloud data engineering pipeline transforming retail sales and payment data into structured analytics and reporting datasets.",

    highlights: [
      {
        title: "End-to-End Cloud ETL",
        description:
          "Built a Python and Pandas ETL pipeline to extract, clean, integrate, and load retail data using Google Cloud Storage and BigQuery.",
      },
      {
        title: "Cloud Data Warehousing",
        description:
          "Designed fact and dimension tables in BigQuery to organize retail datasets for analytical queries.",
      },
      {
        title: "Data Quality & Transformation",
        description:
          "Applied cleaning, transformation, and data-quality checks to prepare multi-channel sales and payment records for analysis.",
      },
      {
        title: "Customer Analytics & BI",
        description:
          "Implemented RFM customer segmentation and SQL views to support business analysis and Power BI reporting.",
      },
    ],
  },

  // 4. LIVING RAG
  livingrag: {
    description:
      "A document-focused Retrieval-Augmented Generation project designed around document ingestion, background embeddings, and semantic retrieval.",

    highlights: [
      {
        title: "Document Processing Architecture",
        description:
          "Designed a document-processing workflow using Docling to extract and organize information for retrieval.",
      },
      {
        title: "Background Embedding Workflow",
        description:
          "Planned asynchronous embedding generation to separate document indexing from user-facing queries.",
      },
      {
        title: "Semantic Retrieval Design",
        description:
          "Designed Pinecone vector storage integration for semantic search and document-based information retrieval.",
      },
      {
        title: "Retrieval Quality Considerations",
        description:
          "Incorporated retrieval relevance, response grounding, and RAG application evaluation into the system design.",
      },
    ],
  },

  // 5. RIDESENSE AI
  ridesense: {
    description:
      "A regression-based machine learning application for predicting NYC taxi trip duration using large-scale trip data.",

    highlights: [
      {
        title: "1.45 Million Trip Records",
        description:
          "Processed approximately 1.45 million NYC taxi trip records for exploratory analysis, preprocessing, and predictive modeling.",
      },
      {
        title: "19 Engineered Features",
        description:
          "Extracted 19 temporal and geographical features to represent important characteristics of taxi trips.",
      },
      {
        title: "R² Score of 0.7888",
        description:
          "Achieved an R² score of 0.7888 with XGBoost on held-out test data, with MAE of 177.85 seconds and RMSE of 305.94 seconds.",
      },
      {
        title: "Interactive ML Application",
        description:
          "Developed a Streamlit interface for interacting with the trained taxi trip duration prediction model.",
      },
    ],
  },

  // 6. GALEMED AI
  galemed: {
    description:
      "A medical knowledge assistant using Retrieval-Augmented Generation to support context-grounded question answering.",

    highlights: [
      {
        title: "Medical Knowledge Retrieval",
        description:
          "Built a RAG-based workflow to retrieve relevant information from a medical knowledge base.",
      },
      {
        title: "Vector-Based Semantic Search",
        description:
          "Used Hugging Face embeddings and ChromaDB to support similarity-based document retrieval.",
      },
      {
        title: "LangChain-Based Integration",
        description:
          "Connected retrieval and language model response generation through LangChain.",
      },
      {
        title: "Context-Grounded Answer Generation",
        description:
          "Designed the assistant to incorporate retrieved context into medical information responses.",
      },
    ],
  },

  // 7. GAPLENS AI
  gaplens: {
    description:
      "An AI-powered career preparation platform focused on resume analysis, skill-gap identification, and personalized learning guidance.",

    highlights: [
      {
        title: "AI Resume Analysis",
        description:
          "Developed resume analysis capabilities to identify candidate skills and organize career-related information.",
      },
      {
        title: "Skill Gap Identification",
        description:
          "Designed comparisons between candidate skills and technical role requirements to highlight learning gaps.",
      },
      {
        title: "Personalized Learning Guidance",
        description:
          "Built AI-driven recommendation workflows to suggest areas for technical improvement.",
      },
      {
        title: "Career Preparation Support",
        description:
          "Designed the platform to support interview preparation and structured technical learning.",
      },
    ],
  },

  // 8. CROPCARE AI
  cropcare: {
    description:
      "An agricultural AI project focused on crop-related data analysis, predictive insights, and decision support.",

    highlights: [
      {
        title: "Agricultural Data Processing",
        description:
          "Developed data-processing workflows for analyzing crop-related information.",
      },
      {
        title: "AI-Based Crop Analysis",
        description:
          "Applied machine learning-oriented approaches to derive predictive insights from agricultural data.",
      },
      {
        title: "Data-Driven Decision Support",
        description:
          "Designed analytical outputs to support better understanding of crop-related conditions.",
      },
      {
        title: "Practical AI Application",
        description:
          "Explored the application of AI and data analytics techniques to agricultural problems.",
      },
    ],
  },

  // 9. GREEN500 DASHBOARD
  green500: {
    description:
      "Supercomputing analytics developed during my C-DAC Pune internship using historical Green500 and TOP500 datasets.",

    highlights: [
      {
        title: "HPC Dataset Preparation",
        description:
          "Collected, cleaned, and preprocessed historical Green500 and TOP500 datasets for structured analytical workflows.",
      },
      {
        title: "Missing Value Imputation",
        description:
          "Applied feature engineering and machine learning-based imputation to handle incomplete supercomputing records.",
      },
      {
        title: "Performance & Efficiency Analysis",
        description:
          "Analyzed supercomputer rankings, computing performance, energy efficiency, and historical patterns.",
      },
      {
        title: "Interactive Analytics Dashboard",
        description:
          "Developed Streamlit visualizations to present supercomputing metrics, rankings, and analytical insights.",
      },
    ],
  },
};

// =====================================
// DEFAULT IMPACT
// =====================================

const defaultImpact = [
  {
    title: "Practical Engineering",
    description:
      "Applied software engineering, data processing, and AI techniques to develop practical technical solutions.",
  },
  {
    title: "Problem-Solving",
    description:
      "Focused on understanding technical challenges and developing structured approaches to address them.",
  },
  {
    title: "Evaluation & Improvement",
    description:
      "Used validation, testing, and iterative improvements where relevant to the project.",
  },
  {
    title: "Continuous Learning",
    description:
      "Explored tools and technologies through hands-on development and experimentation.",
  },
];

// =====================================
// VERIFIED PROFILE METRICS
// =====================================

const profileMetrics = [
  {
    value: "9",
    label: "Portfolio Projects",
  },
  {
    value: "300+",
    label: "LeetCode Problems Solved",
  },
  {
    value: "8.85",
    label: "CGPA / 10",
  },
  {
    value: "1",
    label: "C-DAC Internship",
  },
];

// =====================================
// PROJECT NAME NORMALIZATION
// =====================================

const normalizeProjectName = (value) => {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
};

// =====================================
// IMPACT COMPONENT
// =====================================

export default function ImpactSection({ project }) {
  const icons = [
    Trophy,
    TrendingUp,
    Users,
    Zap,
  ];

  // Identify project
  const projectName = normalizeProjectName(
    project?.title ||
    project?.name ||
    project?.slug ||
    project?.id ||
    ""
  );

  // Find matching configuration
  const matchedKey = Object.keys(projectImpacts).find(
    (key) => projectName.includes(key)
  );

  const selectedProject = matchedKey
    ? projectImpacts[matchedKey]
    : null;

  // Optional custom impact override
  const customImpact =
    Array.isArray(project?.impactDetails) &&
    project.impactDetails.length > 0
      ? project.impactDetails
      : null;

  // Support existing project.impact arrays
  const existingImpact =
    Array.isArray(project?.impact) &&
    project.impact.length > 0
      ? project.impact
      : null;

  // Priority:
  // 1. Explicit impactDetails
  // 2. Project-specific configuration
  // 3. Existing project impact
  // 4. Default

  const rawImpact =
    customImpact ||
    selectedProject?.highlights ||
    existingImpact ||
    defaultImpact;

  // Normalize strings and objects
  const impact = rawImpact.map((item) => {
    if (typeof item === "string") {
      return {
        title: item,
        description: "Project achievement and technical highlight.",
      };
    }

    return item;
  });

  const impactDescription =
    project?.impactDescription ||
    selectedProject?.description ||
    "A look at the technical outcomes, implementation highlights, and learning achieved through this project.";

  // Project links
  const githubLink =
    project?.github ||
    project?.githubUrl ||
    "https://github.com/manasi-navale2107";

  const demoLink =
    project?.demo ||
    project?.liveDemo ||
    null;

  const hasProjectGithub =
    Boolean(project?.github || project?.githubUrl);

  return (
    <section className="relative py-32 border-t border-zinc-800 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute right-1/2 top-1/2 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="text-amber-400 uppercase tracking-[0.3em] text-xs">
            Project Outcomes
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Impact & Achievements
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            {impactDescription}
          </p>

        </div>

        {/* Project Impact Cards */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">

          {impact.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={`${item.title}-${index}`}
                className="group relative overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/50 hover:bg-zinc-950/80 hover:-translate-y-1"
              >

                {/* Hover Glow */}
                <div className="absolute -top-20 -right-20 h-48 w-48 bg-amber-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex items-start gap-4">

                  {/* Icon */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/10 group-hover:bg-amber-500/20 transition-all">

                    <Icon
                      size={22}
                      className="text-amber-400"
                    />

                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <p className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-3">
                      Highlight {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="text-xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>

                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* Profile Metrics */}
        <div className="mt-20 rounded-[32px] border border-zinc-800 bg-gradient-to-br from-amber-500/5 to-transparent backdrop-blur-xl p-8 md:p-12">

          <div className="flex items-center gap-3 mb-10">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
              <TrendingUp
                size={24}
                className="text-amber-400"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Profile Metrics
            </h3>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {profileMetrics.map((metric, index) => (
              <div key={index}>

                <div className="text-4xl md:text-5xl font-bold text-amber-400">
                  {metric.value}
                </div>

                <p className="mt-3 text-zinc-400 text-sm md:text-base">
                  {metric.label}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* Engineering Approach */}
        <div className="mt-12 rounded-[28px] border border-amber-500/10 bg-amber-500/[0.03] p-8 md:p-10">

          <div className="flex flex-col md:flex-row gap-6 items-start">

            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-500/10">

              <CheckCircle2
                size={28}
                className="text-amber-400"
              />

            </div>

            <div>

              <h3 className="text-2xl font-bold text-white mb-4">
                From Learning to Building
              </h3>

              <p className="text-zinc-400 leading-relaxed max-w-4xl">
                My work combines Data Engineering,
                Machine Learning, and Agentic AI to
                transform technical concepts into practical
                applications. I focus on clean data,
                reliable workflows, thoughtful evaluation,
                and continuous improvement through
                hands-on experimentation.
              </p>

            </div>
          </div>
        </div>

        {/* GitHub & Live Demo */}
        <div className="mt-20 rounded-[32px] border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl p-8 md:p-12 text-center">

          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Explore the Project
          </h3>

          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Explore my GitHub for source code,
            implementation details, project documentation,
            and more work across Data Engineering,
            Machine Learning, and Agentic AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">

            {/* GitHub */}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-3 text-white transition-all duration-300 hover:border-amber-500 hover:scale-105"
            >
              <Github size={19} />

              {hasProjectGithub
                ? "View Source Code"
                : "View GitHub Profile"}

              <ArrowUpRight
                size={17}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>

            {/* Live Demo */}
            {demoLink && demoLink !== "#" && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-3 text-black font-medium transition-all duration-300 hover:scale-105"
              >
                View Live Demo

                <ArrowUpRight
                  size={17}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
