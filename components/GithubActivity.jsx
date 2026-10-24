
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Terminal } from "./ui/terminal";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  { ssr: false }
);

const GithubActivity = () => {
  return (
    <section className="relative min-h-screen bg-black py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#5227FF]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-20">
          <p className="uppercase tracking-[0.4em] text-violet-400 text-sm mb-4">
            GitHub Activity
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Code Never
            <br />
            Sleeps.
          </h2>

          <p className="mt-6 text-lg text-zinc-400 max-w-3xl">
            Exploring Data Engineering, Machine Learning,
            and Agentic AI through hands-on projects,
            continuous learning, and real-world
            problem-solving.
          </p>
        </div>

        {/* GitHub Snake Animation */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
          <img
            src="https://raw.githubusercontent.com/manasi-navale2107/my-portfolio/output/github-snake.svg"
            alt="GitHub Contribution Snake Animation"
            className="w-full"
            loading="lazy"
          />
        </div>

        {/* GitHub Stats and Terminal */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {/* Interactive Terminal */}
          <div className="rounded-3xl border border-white/10 bg-black overflow-hidden">
            <Terminal
              commands={[
                "whoami",
                "skills",
                "featured_projects",
                "achievements",
                "current_goal",
              ]}
              outputs={{
                0: [
                  "Manasi Navale",
                  "AI/ML | Data Engineering | Agentic AI",
                  "B.E. Artificial Intelligence & Data Science",
                  "Former Data Analyst Intern @ C-DAC Pune",
                ],

                1: [
                  "Python | Java | SQL",
                  "Data Engineering | ETL Pipelines",
                  "Data Warehousing | BigQuery | GCP",
                  "Apache Spark | PySpark",
                  "HDFS | Hive | MapReduce",
                  "Machine Learning | Scikit-Learn",
                  "Feature Engineering | Imbalanced Data",
                  "FastAPI | REST APIs | MySQL",
                  "LangChain | LangGraph | Multi-Agent AI",
                  "RAG | RAG Application Evals",
                  "Pinecone | SQLAlchemy | Docker",
                ],

                2: [
                  "🧠 QueryMind AI - Agentic Text-to-SQL",
                  "🔄 RetailFlow - Cloud Data Engineering",
                  "🤖 ResearchOS - Multi-Agent Research",
                  "📚 Living RAG - Knowledge Retrieval",
                  "🚕 RideSense AI - ML Regression",
                  "🖥️ Green500 - HPC Data Analytics",
                ],

                3: [
                  "🏢 Data Analyst Intern - C-DAC Pune",
                  "🧠 Built AI, ML & Data Engineering Projects",
                  "💻 Solved 300+ LeetCode Problems",
                  "☁️ Built Cloud-Based ETL Pipelines",
                  "🎓 B.E. AI & DS | CGPA: 8.85/10",
                  "🏅 Google Developer Student Clubs Certification",
                ],

                4: [
                  "Building intelligent AI applications",
                  "and reliable data engineering pipelines.",
                  "Exploring scalable data processing,",
                  "machine learning, and Agentic AI.",
                  "Target: Data Engineering | AI/ML Engineering",
                ],
              }}
              typingSpeed={35}
              delayBetweenCommands={1000}
            />
          </div>

          {/* GitHub Streak Stats */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-4 flex items-center justify-center">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=manasi-navale2107&theme=tokyonight&hide_border=true&background=000000"
              alt="Manasi Navale GitHub Streak Statistics"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8">

          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Contribution Graph
          </h3>

          <p className="text-zinc-400 text-center mb-8">
            Tracking my coding journey, open-source
            contributions, and continuous project development.
          </p>

          <div className="flex justify-center overflow-x-auto">
            <GitHubCalendar
              username="manasi-navale2107"
              colorScheme="dark"
              fontSize={15}
              blockSize={15}
              blockMargin={5}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default GithubActivity;
