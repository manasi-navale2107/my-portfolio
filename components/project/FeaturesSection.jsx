
"use client";

import React from "react";
import {
  Check,
  Zap,
  Target,
  Shield,
  Gauge,
  Users,
} from "lucide-react";

// =======================================
// PROJECT-SPECIFIC FEATURES
// =======================================

const projectFeatures = {
  // 1. RESEARCHOS
  researchos: [
    {
      title: "Multi-Agent Research System",
      description:
        "Uses LangChain and LangGraph to coordinate specialized AI workflows for research planning, information retrieval, reasoning, and report generation.",
    },
    {
      title: "Real-Time Web Search",
      description:
        "Integrates Tavily Search to retrieve relevant web information and provide external context for research tasks.",
    },
    {
      title: "LLM-Powered Reasoning",
      description:
        "Uses Groq-hosted language models to process retrieved information and generate context-aware research responses.",
    },
    {
      title: "Automated Report Generation",
      description:
        "Transforms research findings into structured reports through a coordinated multi-agent workflow.",
    },
  ],

  // 2. QUERYMIND AI
  querymind: [
    {
      title: "Agentic Text-to-SQL",
      description:
        "Converts natural language questions into SQL queries using specialized AI agents built with LangChain and LangGraph.",
    },
    {
      title: "Multi-Agent SQL Workflow",
      description:
        "Coordinates query planning, schema understanding, SQL generation, validation, correction, and answer generation.",
    },
    {
      title: "SQL Validation & Auto-Correction",
      description:
        "Includes query validation and automatic correction mechanisms to improve SQL generation reliability.",
    },
    {
      title: "Context-Aware Conversations",
      description:
        "Supports conversation sessions, persistent context, and follow-up questions for more natural database interactions.",
    },
    {
      title: "Real-Time Response Streaming",
      description:
        "Uses FastAPI, SQLAlchemy, MySQL, and Server-Sent Events for database interaction and streaming AI responses.",
    },
  ],

  // 3. RETAILFLOW
  retailflow: [
    {
      title: "End-to-End Cloud ETL Pipeline",
      description:
        "Extracts, cleans, transforms, and loads multi-channel retail sales and payment data using Python, Pandas, Google Cloud Storage, and BigQuery.",
    },
    {
      title: "Data Cleaning & Quality Checks",
      description:
        "Applies preprocessing, data transformation, and quality validation to prepare retail datasets for reliable analytical processing.",
    },
    {
      title: "Cloud Data Warehousing",
      description:
        "Organizes retail datasets into fact and dimension tables in BigQuery to enable structured SQL analytics and reporting.",
    },
    {
      title: "Customer RFM Segmentation",
      description:
        "Uses Recency, Frequency, and Monetary analysis to segment customers and generate meaningful retail business insights.",
    },
    {
      title: "SQL Analytics & Power BI",
      description:
        "Creates SQL views and reporting datasets for interactive business intelligence and retail performance analysis.",
    },
  ],

  // 4. LIVING RAG
  livingrag: [
    {
      title: "Intelligent Document Processing",
      description:
        "Designed around Docling for extracting and structuring document content before retrieval-augmented generation.",
    },
    {
      title: "Background Embedding Generation",
      description:
        "Designed to process document embeddings separately from user queries, supporting a responsive document retrieval workflow.",
    },
    {
      title: "Pinecone Vector Storage",
      description:
        "Uses a Pinecone-based architecture for storing document embeddings and supporting semantic similarity search.",
    },
    {
      title: "Context-Aware Document Retrieval",
      description:
        "Designed to retrieve relevant document passages and supply contextual information to an LLM for question answering.",
    },
    {
      title: "RAG Evaluation & Retrieval Quality",
      description:
        "Includes retrieval relevance, contextual grounding, and response quality as important evaluation areas for the RAG workflow.",
    },
  ],

  // 5. RIDESENSE AI
  ridesense: [
    {
      title: "Large-Scale Data Processing",
      description:
        "Processes approximately 1.45 million NYC taxi trip records using Python, Pandas, and NumPy for predictive modeling.",
    },
    {
      title: "Advanced Feature Engineering",
      description:
        "Extracts 19 temporal and geographical features to capture trip characteristics and improve regression model inputs.",
    },
    {
      title: "Multiple Regression Algorithms",
      description:
        "Compares Linear Regression, Decision Tree, Random Forest, and XGBoost for taxi trip duration prediction.",
    },
    {
      title: "Model Performance Evaluation",
      description:
        "Uses MAE, RMSE, and R² to evaluate regression models. XGBoost achieved an R² score of 0.7888 on the held-out test set.",
    },
    {
      title: "Interactive Prediction Interface",
      description:
        "Provides a Streamlit-based application for interacting with the trained taxi trip duration prediction model.",
    },
  ],

  // 6. GALEMED AI
  galemed: [
    {
      title: "Medical RAG Assistant",
      description:
        "Uses retrieval-augmented generation to support document-grounded responses to medical knowledge questions.",
    },
    {
      title: "Semantic Knowledge Retrieval",
      description:
        "Uses ChromaDB and Hugging Face embeddings to retrieve relevant information from a medical knowledge base.",
    },
    {
      title: "LangChain Integration",
      description:
        "Connects document retrieval and language model response generation through a LangChain-based workflow.",
    },
    {
      title: "Context-Grounded Responses",
      description:
        "Uses retrieved document context to support more relevant medical information responses without replacing professional medical judgment.",
    },
  ],

  // 7. GAPLENS AI
  gaplens: [
    {
      title: "AI-Powered Resume Analysis",
      description:
        "Analyzes resumes to identify technical skills and organize candidate information for career preparation.",
    },
    {
      title: "Technical Skill Gap Detection",
      description:
        "Compares candidate skills against job-related requirements to identify potential learning gaps.",
    },
    {
      title: "Personalized Recommendations",
      description:
        "Provides AI-driven recommendations for improving technical knowledge and preparing for relevant career opportunities.",
    },
    {
      title: "Interview Preparation Support",
      description:
        "Supports career-focused learning through skill analysis and targeted preparation recommendations.",
    },
  ],

  // 8. CROPCARE AI
  cropcare: [
    {
      title: "Agricultural Data Analysis",
      description:
        "Processes crop-related information to support AI-based agricultural analysis and decision-making.",
    },
    {
      title: "Predictive Crop Insights",
      description:
        "Uses machine learning-oriented workflows to generate insights from relevant agricultural data.",
    },
    {
      title: "Data Preprocessing",
      description:
        "Prepares and transforms agricultural inputs for analytical and predictive processing.",
    },
    {
      title: "Decision Support",
      description:
        "Presents data-driven insights intended to help users better understand crop conditions and agricultural decisions.",
    },
  ],

  // 9. GREEN500 DASHBOARD
  green500: [
    {
      title: "Historical HPC Data Analytics",
      description:
        "Analyzes historical Green500 and TOP500 supercomputing datasets to explore computing performance and energy efficiency.",
    },
    {
      title: "Data Cleaning & Missing Value Handling",
      description:
        "Performs preprocessing, data consistency checks, feature engineering, and missing-value imputation on historical HPC records.",
    },
    {
      title: "Performance & Efficiency Analysis",
      description:
        "Examines supercomputer rankings, system performance, hardware characteristics, and energy-efficiency trends.",
    },
    {
      title: "Machine Learning-Based Analysis",
      description:
        "Applies machine learning techniques, including Random Forest-based imputation, to support analysis of incomplete historical data.",
    },
    {
      title: "Interactive Streamlit Dashboard",
      description:
        "Visualizes supercomputing data through KPIs, charts, rankings, comparisons, and analytical dashboards.",
    },
  ],
};

// =======================================
// DEFAULT FEATURES
// =======================================

const defaultFeatures = [
  {
    title: "Data Engineering & Processing",
    description:
      "Building data processing workflows using Python, SQL, ETL techniques, and data warehousing concepts.",
  },
  {
    title: "Agentic AI & RAG",
    description:
      "Developing intelligent applications using LangChain, LangGraph, multi-agent systems, and retrieval-augmented generation.",
  },
  {
    title: "Machine Learning",
    description:
      "Applying classification, regression, feature engineering, imbalanced data handling, and model evaluation techniques.",
  },
  {
    title: "RAG Application Evaluation",
    description:
      "Exploring retrieval relevance, contextual grounding, and response quality assessment in RAG applications.",
  },
  {
    title: "Data Analytics",
    description:
      "Transforming raw datasets into useful insights through data cleaning, exploratory analysis, and visualization.",
  },
  {
    title: "Backend Development",
    description:
      "Building Python-based APIs and database-connected applications using FastAPI, SQLAlchemy, and MySQL.",
  },
];

// =======================================
// PROJECT NAME NORMALIZATION
// =======================================

const normalizeProjectName = (value) => {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
};

// =======================================
// FEATURES COMPONENT
// =======================================

export default function FeaturesSection({ project }) {
  const icons = [
    Zap,
    Target,
    Gauge,
    Shield,
    Users,
    Check,
  ];

  // Identify project by title, name, slug, or id
  const projectName = normalizeProjectName(
    project?.title ||
    project?.name ||
    project?.slug ||
    project?.id ||
    ""
  );

  // Find matching project
  const matchedKey = Object.keys(projectFeatures).find(
    (key) => projectName.includes(key)
  );

  // Optional explicit custom feature override
  const customFeatures =
    Array.isArray(project?.featureDetails) &&
    project.featureDetails.length > 0
      ? project.featureDetails
      : null;

  // Existing project features
  const existingFeatures =
    Array.isArray(project?.features) &&
    project.features.length > 0
      ? project.features
      : null;

  // Priority:
  // 1. Explicit featureDetails override
  // 2. Features for the 9 known projects
  // 3. Existing project features
  // 4. Default features

  const features =
    customFeatures ||
    (matchedKey ? projectFeatures[matchedKey] : null) ||
    existingFeatures ||
    defaultFeatures;

  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
            Core Capabilities
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Key Features & Capabilities
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Exploring the technical capabilities, engineering
            approaches, and technologies behind this project,
            from data processing and intelligent workflows
            to evaluation and practical applications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">

          {features.map((feature, index) => {
            const Icon = icons[index % icons.length];

            const title =
              typeof feature === "string"
                ? feature
                : feature.title;

            const description =
              typeof feature === "string"
                ? ""
                : feature.description;

            return (
              <div
                key={`${title}-${index}`}
                className="group relative overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-950/80 hover:-translate-y-1"
              >

                {/* Card Hover Glow */}
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex items-start gap-4">

                  {/* Feature Icon */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/10 group-hover:bg-cyan-500/20 transition-all">

                    <Icon
                      size={22}
                      className="text-cyan-400"
                    />
                  </div>

                  {/* Feature Content */}
                  <div className="flex-1">

                    {/* Feature Number */}
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-3">
                      Feature {String(index + 1).padStart(2, "0")}
                    </p>

                    {/* Feature Title */}
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {title}
                    </h3>

                    {/* Feature Description */}
                    <p className="mt-3 text-zinc-400 leading-relaxed">
                      {description}
                    </p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Development Approach */}
        <div className="mt-20 rounded-[32px] border border-zinc-800 bg-gradient-to-br from-cyan-500/5 to-transparent backdrop-blur-xl p-8 md:p-12">

          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
              <Target
                size={24}
                className="text-cyan-400"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Engineering & Development Approach
            </h3>
          </div>

          <p className="mt-4 text-zinc-400 leading-relaxed max-w-3xl">
            I focus on understanding the problem,
            selecting suitable technologies, building
            structured workflows, and validating results.
            My approach brings together software
            engineering, data processing, machine learning,
            and AI techniques depending on each project's
            requirements.
          </p>

          {/* Feature Tags */}
          <div className="mt-8 flex flex-wrap gap-3">

            {features.map((feature, index) => {
              const title =
                typeof feature === "string"
                  ? feature
                  : feature.title;

              return (
                <div
                  key={`${title}-${index}`}
                  className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2"
                >
                  <Check
                    size={14}
                    className="text-cyan-400 shrink-0"
                  />

                  <span className="text-sm text-cyan-300">
                    {title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
