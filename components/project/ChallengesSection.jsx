
"use client";

import React from "react";
import {
  AlertCircle,
  Wrench,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

// ==================================
// PROJECT-SPECIFIC CHALLENGES
// ==================================

const projectChallenges = {
  researchos: [
    {
      title: "Coordinating Multiple AI Agents",
      description:
        "Designed a structured multi-agent workflow using LangChain and LangGraph to coordinate research planning, web search, reasoning, and report generation.",
    },
    {
      title: "Retrieving Relevant Research Information",
      description:
        "Integrated Tavily Search to retrieve real-time web information and provide relevant context for research-oriented LLM workflows.",
    },
    {
      title: "Generating Structured Research Reports",
      description:
        "Used Groq-powered LLM reasoning to organize retrieved information and generate structured, context-aware research reports.",
    },
  ],

  querymind: [
    {
      title: "Converting Natural Language into SQL",
      description:
        "Developed specialized AI agents for understanding user questions, interpreting database schemas, and generating SQL queries through LangGraph-based workflows.",
    },
    {
      title: "Handling Invalid SQL Queries",
      description:
        "Designed SQL validation and automatic correction mechanisms to identify query issues and improve generated SQL before database execution.",
    },
    {
      title: "Managing Context-Aware Conversations",
      description:
        "Built conversation session management to support follow-up queries while retaining relevant context across interactions.",
    },
    {
      title: "Delivering Real-Time AI Responses",
      description:
        "Integrated FastAPI, SQLAlchemy, MySQL, and Server-Sent Events to support database interaction and streaming responses.",
    },
  ],

  retailflow: [
    {
      title: "Integrating Multiple Retail Data Sources",
      description:
        "Developed a Python and Pandas ETL pipeline to extract, clean, and combine multi-channel retail sales and payment data from Google Cloud Storage.",
    },
    {
      title: "Handling Data Quality Issues",
      description:
        "Applied data cleaning, transformation, and validation checks to improve consistency and prepare retail datasets for analytical processing.",
    },
    {
      title: "Designing a Cloud Data Warehouse",
      description:
        "Organized transformed data into fact and dimension tables in BigQuery to support structured SQL queries and business reporting.",
    },
    {
      title: "Transforming Raw Data into Business Insights",
      description:
        "Created SQL views and RFM customer segmentation to support customer behavior analysis and Power BI reporting.",
    },
  ],

  livingrag: [
    {
      title: "Processing Unstructured Documents",
      description:
        "Designed document ingestion around Docling to extract and structure information for downstream RAG processing.",
    },
    {
      title: "Managing Embedding Generation",
      description:
        "Planned background embedding generation to separate document processing from user-facing retrieval workflows.",
    },
    {
      title: "Building Semantic Knowledge Retrieval",
      description:
        "Designed integration with Pinecone for vector storage and similarity-based retrieval of relevant document information.",
    },
    {
      title: "Evaluating Retrieval Quality",
      description:
        "Focused on retrieval relevance, contextual grounding, and RAG application evaluation as key considerations for improving answer quality.",
    },
  ],

  ridesense: [
    {
      title: "Processing Large-Scale Trip Data",
      description:
        "Processed approximately 1.45 million NYC taxi trip records using Pandas and NumPy for data preparation, exploratory analysis, and model development.",
    },
    {
      title: "Extracting Meaningful Predictive Features",
      description:
        "Engineered 19 temporal and geographical features to capture relationships between pickup locations, travel patterns, and trip duration.",
    },
    {
      title: "Selecting an Effective Regression Model",
      description:
        "Compared Linear Regression, Decision Tree, Random Forest, and XGBoost using a train-validation-test split to evaluate predictive performance.",
    },
    {
      title: "Evaluating Prediction Accuracy",
      description:
        "Evaluated regression performance using MAE, RMSE, and R². XGBoost achieved an R² of 0.7888 on the held-out test set.",
    },
  ],

  galemed: [
    {
      title: "Retrieving Relevant Medical Knowledge",
      description:
        "Used a retrieval-augmented generation workflow with LangChain, ChromaDB, and Hugging Face embeddings to retrieve context for medical questions.",
    },
    {
      title: "Processing Documents for Semantic Search",
      description:
        "Organized medical knowledge into retrievable text representations using embeddings and vector-based similarity search.",
    },
    {
      title: "Reducing Unsupported AI Responses",
      description:
        "Focused on context-grounded response generation by providing retrieved knowledge to the language model. Medical answers still require independent verification.",
    },
  ],

  gaplens: [
    {
      title: "Extracting Skills from Resumes",
      description:
        "Designed resume analysis to identify technical skills and organize candidate information for career-oriented evaluation.",
    },
    {
      title: "Identifying Technical Skill Gaps",
      description:
        "Focused on comparing extracted candidate skills with role requirements to highlight areas where additional learning may be useful.",
    },
    {
      title: "Generating Personalized Learning Guidance",
      description:
        "Designed AI-driven recommendations to translate identified skill gaps into more actionable interview preparation and learning suggestions.",
    },
  ],

  cropcare: [
    {
      title: "Preparing Agricultural Data",
      description:
        "Focused on organizing and preprocessing crop-related information so it could be used in machine learning and analytical workflows.",
    },
    {
      title: "Generating Crop-Related Predictions",
      description:
        "Designed an AI-assisted analysis workflow to derive predictive insights from crop-related inputs and support agricultural decision-making.",
    },
    {
      title: "Presenting Actionable Insights",
      description:
        "Focused on translating analytical results into understandable information that could support crop-health monitoring and decision support.",
    },
  ],

  green500: [
    {
      title: "Handling Missing and Inconsistent HPC Data",
      description:
        "Performed data cleaning, preprocessing, and missing-value imputation on historical Green500 and TOP500 supercomputing datasets.",
    },
    {
      title: "Standardizing Historical Performance Data",
      description:
        "Handled differences in performance units and dataset formats to support consistent comparisons across historical supercomputing records.",
    },
    {
      title: "Analyzing Supercomputing Performance",
      description:
        "Applied exploratory data analysis, feature engineering, and machine learning to investigate system rankings, computing performance, and energy efficiency.",
    },
    {
      title: "Presenting Complex Analytical Results",
      description:
        "Developed interactive Streamlit dashboards to present supercomputing statistics, ranking comparisons, and data-driven insights.",
    },
  ],
};

// ==================================
// FALLBACK CHALLENGES
// ==================================

const defaultChallenges = [
  {
    title: "Data Processing & Preparation",
    description:
      "Focused on preparing and validating input data for reliable downstream processing.",
  },
  {
    title: "System Design & Integration",
    description:
      "Approached implementation through modular components and structured workflows.",
  },
  {
    title: "Evaluation & Improvement",
    description:
      "Considered validation, debugging, and evaluation as part of improving overall system quality.",
  },
];

// ==================================
// PROJECT NAME NORMALIZATION
// ==================================

const normalizeProjectName = (value) => {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
};

// ==================================
// CHALLENGES COMPONENT
// ==================================

export default function ChallengesSection({ project }) {
  const icons = [
    AlertCircle,
    Wrench,
    Lightbulb,
    ShieldCheck,
  ];

  // Identify project using title, name, or slug
  const projectName = normalizeProjectName(
    project?.title ||
    project?.name ||
    project?.slug ||
    ""
  );

  // Match project-specific challenge configuration
  const matchedKey = Object.keys(projectChallenges).find(
    (key) => projectName.includes(key)
  );

  // Optional custom override:
  // project.challengeDetails = [
  //   { title: "...", description: "..." }
  // ]

  const customDetails =
    Array.isArray(project?.challengeDetails) &&
    project.challengeDetails.length > 0
      ? project.challengeDetails
      : null;

  // Existing project.challenges objects are also supported
  const structuredChallenges =
    Array.isArray(project?.challenges) &&
    project.challenges.length > 0 &&
    project.challenges.every(
      (item) =>
        item &&
        typeof item === "object" &&
        typeof item.title === "string" &&
        typeof item.description === "string"
    )
      ? project.challenges
      : null;

  const legacyChallenges =
    Array.isArray(project?.challenges)
      ? project.challenges
          .filter((item) => typeof item === "string")
          .map((title) => ({
            title,
            description:
              "This challenge involved analysis, implementation, and iterative problem-solving within the project workflow.",
          }))
      : [];

  // Priority:
  // 1. Explicit custom challenge details
  // 2. Structured project challenges
  // 3. Matched architecture for the 9 projects
  // 4. Legacy challenge strings
  // 5. Generic fallback

  const challenges =
    customDetails ||
    structuredChallenges ||
    (matchedKey ? projectChallenges[matchedKey] : null) ||
    (legacyChallenges.length > 0
      ? legacyChallenges
      : defaultChallenges);

  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute right-1/2 top-1/2 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="max-w-3xl">
          <span className="text-orange-400 uppercase tracking-[0.3em] text-xs">
            Engineering Challenges
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Problems I Solved
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Every project comes with its own technical
            challenges. From building cloud data pipelines
            and handling complex datasets to developing
            multi-agent AI systems and evaluating machine
            learning models, here's how I approached
            real-world engineering problems.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">

          {challenges.map((challenge, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/50 hover:bg-zinc-950/80 hover:-translate-y-1"
              >

                {/* Hover Glow */}
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-orange-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex items-start gap-4">

                  {/* Challenge Icon */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/10 group-hover:bg-orange-500/20 transition-all">

                    <Icon
                      size={22}
                      className="text-orange-400"
                    />

                  </div>

                  {/* Challenge Information */}
                  <div className="flex-1">

                    {/* Challenge Number */}
                    <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-3">
                      Challenge {String(index + 1).padStart(2, "0")}
                    </p>

                    {/* Challenge Title */}
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {challenge.title}
                    </h3>

                    {/* Solution Label */}
                    <div className="mt-6 flex items-center gap-2">
                      <Wrench
                        size={15}
                        className="text-orange-400"
                      />

                      <span className="text-xs uppercase tracking-[0.2em] text-orange-400">
                        My Approach
                      </span>
                    </div>

                    {/* Solution Description */}
                    <p className="mt-3 text-zinc-400 leading-relaxed text-sm md:text-base">
                      {challenge.description}
                    </p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Engineering Philosophy */}
        <div className="mt-16 rounded-[28px] border border-orange-500/10 bg-orange-500/[0.03] p-8 md:p-10">

          <div className="flex flex-col md:flex-row md:items-center gap-6">

            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-500/10">
              <Lightbulb
                size={28}
                className="text-orange-400"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Learning Through Problem-Solving
              </h3>

              <p className="text-zinc-400 leading-relaxed max-w-4xl">
                My approach combines understanding the
                problem, designing practical solutions,
                testing assumptions, and improving results
                through experimentation and evaluation.
                I believe meaningful engineering comes
                from continuous learning and building.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
