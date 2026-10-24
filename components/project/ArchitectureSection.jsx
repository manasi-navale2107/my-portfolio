
"use client";

import React from "react";
import {
  Database,
  Cloud,
  Cpu,
  Search,
  Brain,
  FileText,
  ArrowRight,
  Workflow,
  Bot,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

// Project-specific architecture configurations
const projectArchitectures = {
  researchos: {
    description:
      "Multi-agent research architecture combining planning, real-time web search, LLM reasoning, and structured report generation.",

    steps: [
      "Research Query",
      "Planning Agent",
      "Tavily Web Search",
      "Groq LLM Reasoning",
      "Report Generation",
      "Final Research Report",
    ],

    focus: [
      "Multi-agent orchestration with LangChain and LangGraph",
      "Real-time information retrieval using Tavily",
      "Context-aware research and structured reporting",
    ],

    quality: [
      "Organized research workflows",
      "Context-aware response generation",
      "Structured research output",
    ],
  },

  querymind: {
    description:
      "Agentic Text-to-SQL architecture using specialized agents for schema understanding, SQL generation, validation, and database interaction.",

    steps: [
      "Natural Language Query",
      "FastAPI Backend",
      "Planning & Schema Agents",
      "SQL Generation",
      "SQL Validation & Correction",
      "MySQL Database",
      "Streaming Response",
    ],

    focus: [
      "Multi-agent workflows using LangGraph",
      "Schema understanding and dynamic SQL generation",
      "FastAPI, SQLAlchemy, and MySQL integration",
    ],

    quality: [
      "SQL validation and automatic query correction",
      "Context-aware follow-up queries",
      "Session management and real-time SSE streaming",
    ],
  },

  retailflow: {
    description:
      "End-to-end cloud data engineering pipeline for extracting, transforming, warehousing, and analyzing retail business data.",

    steps: [
      "Retail Data Sources",
      "Google Cloud Storage",
      "Python ETL Pipeline",
      "Data Cleaning & Validation",
      "BigQuery Data Warehouse",
      "SQL Views & RFM Analysis",
      "Power BI Dashboard",
    ],

    focus: [
      "Python and Pandas-based ETL processing",
      "Cloud-based data ingestion and transformation",
      "Fact and dimension tables in BigQuery",
    ],

    quality: [
      "Data quality checks and validation",
      "SQL views for business analytics",
      "RFM customer segmentation and Power BI reporting",
    ],
  },

  "living rag": {
    description:
      "Document-focused RAG architecture designed around document processing, embeddings, vector storage, and semantic retrieval.",

    steps: [
      "Document Upload",
      "Docling Processing",
      "Text Chunking",
      "Embedding Generation",
      "Pinecone Vector Store",
      "Semantic Retrieval",
      "LLM Response",
    ],

    focus: [
      "Document extraction and processing using Docling",
      "Background embedding generation architecture",
      "Vector storage and retrieval using Pinecone",
    ],

    quality: [
      "Document retrieval and contextual grounding",
      "Retrieval relevance and response-quality assessment",
      "Document-based question answering",
    ],
  },

  ridesense: {
    description:
      "End-to-end machine learning architecture for taxi trip duration prediction using large-scale trip data, feature engineering, and regression models.",

    steps: [
      "NYC Taxi Dataset",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
      "XGBoost Prediction",
      "Streamlit Interface",
    ],

    focus: [
      "Processing approximately 1.45 million trip records",
      "Temporal and geographical feature engineering",
      "Regression model training with Scikit-Learn and XGBoost",
    ],

    quality: [
      "Train, validation, and test evaluation",
      "Model comparison using MAE, RMSE, and R²",
      "Interactive Streamlit prediction interface",
    ],
  },

  galemed: {
    description:
      "Medical question-answering architecture using retrieval-augmented generation and semantic search.",

    steps: [
      "Medical Query",
      "Medical Knowledge Base",
      "Text Embeddings",
      "ChromaDB Vector Store",
      "Semantic Retrieval",
      "LLM Response",
    ],

    focus: [
      "Medical knowledge retrieval",
      "LangChain-based RAG integration",
      "Hugging Face embeddings and ChromaDB",
    ],

    quality: [
      "Context-grounded question answering",
      "Relevant knowledge retrieval",
      "Medical information response generation",
    ],
  },

  gaplens: {
    description:
      "AI-powered career preparation architecture for resume analysis, skill-gap identification, and personalized recommendations.",

    steps: [
      "Resume Upload",
      "Resume Analysis",
      "Skill Extraction",
      "Skill Gap Analysis",
      "AI Recommendations",
      "Learning Roadmap",
    ],

    focus: [
      "Resume-based skill analysis",
      "Identification of technical skill gaps",
      "AI-powered career preparation",
    ],

    quality: [
      "Personalized learning recommendations",
      "Structured skill-gap insights",
      "Career preparation support",
    ],
  },

  cropcare: {
    description:
      "Agricultural AI workflow for analyzing crop-related information and generating predictive insights.",

    steps: [
      "Crop Data",
      "Data Preprocessing",
      "Feature Analysis",
      "AI / ML Processing",
      "Predictive Insights",
      "Decision Support",
    ],

    focus: [
      "Crop-related data processing",
      "Machine learning-based analysis",
      "Agricultural decision-support workflows",
    ],

    quality: [
      "Data-driven crop insights",
      "Prediction-based recommendations",
      "Practical decision-support outputs",
    ],
  },

  green500: {
    description:
      "Data analytics workflow for collecting, preprocessing, analyzing, and visualizing Green500 and TOP500 supercomputing datasets.",

    steps: [
      "Green500 / TOP500 Data",
      "Data Collection",
      "Data Cleaning",
      "Missing Value Imputation",
      "EDA & ML Analysis",
      "Streamlit Dashboard",
    ],

    focus: [
      "Historical HPC dataset collection and preprocessing",
      "Feature engineering and missing-value imputation",
      "Performance and energy-efficiency analysis",
    ],

    quality: [
      "Data consistency and missing-value handling",
      "Statistical and ranking analysis",
      "Interactive analytical dashboards",
    ],
  },
};

// Default architecture for other projects
const defaultArchitecture = {
  description:
    "A modular workflow covering data ingestion, processing, storage, intelligent analysis, evaluation, and output delivery.",

  steps: [
    "Data Sources",
    "Data Processing",
    "Storage Layer",
    "AI / ML / Analytics",
    "Quality & Evaluation",
    "Final Output",
  ],

  focus: [
    "Python and SQL-based data processing",
    "Data engineering and intelligent application workflows",
    "Integration of storage, processing, and analytics",
  ],

  quality: [
    "Data cleaning and quality validation",
    "RAG evaluation and retrieval-quality assessment where applicable",
    "Model evaluation and imbalanced data handling for applicable ML tasks",
  ],
};

// Choose icon depending on architecture step
const getStepIcon = (step) => {
  const value = step.toLowerCase();

  if (/valid|evaluat|quality|correct|test/.test(value)) {
    return ShieldCheck;
  }

  if (/cloud|storage/.test(value)) {
    return Cloud;
  }

  if (/database|bigquery|warehouse|mysql|pinecone|chromadb|vector/.test(value)) {
    return Database;
  }

  if (/agent|planning|orchestrat/.test(value)) {
    return Bot;
  }

  if (/machine learning|model|predict|feature|training|xgboost/.test(value)) {
    return Brain;
  }

  if (/dashboard|power bi|streamlit|visual|report|insight/.test(value)) {
    return BarChart3;
  }

  if (/document|resume|chunk|file|knowledge/.test(value)) {
    return FileText;
  }

  if (/query|search|retriev/.test(value)) {
    return Search;
  }

  if (/etl|pipeline|process|transform|clean|embedding|analysis/.test(value)) {
    return Workflow;
  }

  return Cpu;
};

export default function ArchitectureSection({ project }) {
  // Identify project using title, name, or slug
  const projectName = String(
    project?.title || project?.name || project?.slug || ""
  )
    .toLowerCase()
    .replace(/[-_]/g, " ");

  const matchedKey = Object.keys(projectArchitectures).find(
    (key) => projectName.includes(key)
  );

  const selectedArchitecture = matchedKey
    ? projectArchitectures[matchedKey]
    : defaultArchitecture;

  // Preserve any architecture already supplied by the project
  const architecture =
    Array.isArray(project?.architecture) &&
    project.architecture.length > 0 &&
    project.architecture.every((step) => typeof step === "string")
      ? project.architecture
      : selectedArchitecture.steps;

  const description =
    project?.architectureDescription ||
    selectedArchitecture.description;

  const focusItems =
    project?.architectureFocus ||
    selectedArchitecture.focus;

  const qualityItems =
    project?.architectureQuality ||
    selectedArchitecture.quality;

  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute right-1/2 top-1/2 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-purple-400 uppercase tracking-[0.3em] text-xs">
            Technical Architecture
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            System Architecture
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="mt-20">
          <div className="rounded-[32px] border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl p-6 md:p-12 overflow-x-auto">

            <div className="flex items-start gap-4 min-w-max justify-start xl:justify-center">

              {architecture.map((component, index) => {
                const Icon = getStepIcon(component);

                return (
                  <React.Fragment key={`${component}-${index}`}>

                    {/* Architecture Node */}
                    <div className="flex flex-col items-center gap-4 w-[145px] shrink-0">

                      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 hover:border-purple-400/60 hover:bg-purple-500/20 transition-all duration-300">

                        <Icon
                          size={28}
                          className="text-purple-400"
                        />

                        {/* Step Number */}
                        <span className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center rounded-full bg-zinc-900 border border-purple-500/40 text-purple-300 text-xs">
                          {index + 1}
                        </span>

                      </div>

                      <p className="text-sm font-medium text-white text-center leading-relaxed">
                        {component}
                      </p>

                    </div>

                    {/* Connection Arrow */}
                    {index < architecture.length - 1 && (
                      <div className="flex items-center justify-center h-20 shrink-0">
                        <ArrowRight
                          size={22}
                          className="text-purple-400/70"
                        />
                      </div>
                    )}

                  </React.Fragment>
                );
              })}

            </div>

            <p className="mt-8 text-xs text-zinc-500 text-center">
              Scroll horizontally to explore the complete workflow
            </p>
          </div>
        </div>

        {/* Architecture Details */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">

          {/* Core Implementation */}
          <div className="group rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <Workflow
                  size={24}
                  className="text-purple-400"
                />
              </div>

              <h3 className="text-xl font-bold text-white">
                Core Implementation
              </h3>
            </div>

            <p className="text-zinc-400 leading-relaxed">
              Key technologies, processing components,
              and architectural capabilities used in
              this project.
            </p>

            <ul className="mt-6 space-y-4">
              {focusItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quality, Evaluation & Output */}
          <div className="group rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <ShieldCheck
                  size={24}
                  className="text-purple-400"
                />
              </div>

              <h3 className="text-xl font-bold text-white">
                Quality, Evaluation & Output
              </h3>
            </div>

            <p className="text-zinc-400 leading-relaxed">
              Validation, evaluation, and output delivery
              practices relevant to the project's
              architecture.
            </p>

            <ul className="mt-6 space-y-4">
              {qualityItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
