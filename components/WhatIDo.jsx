
import React from "react";
import {
  Brain,
  BarChart3,
  Bot,
  ArrowUpRight,
  Database,
} from "lucide-react";

const WhatIDo = () => {
  return (
    <section className="relative min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-20">
          <p className="uppercase tracking-[0.4em] text-violet-400 text-sm mb-4">
            What I Do
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Building intelligent
            <br />
            AI, ML & Data Engineering solutions.
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl">
            I work across Agentic AI, Machine Learning,
            Data Engineering, and Data Analytics to build
            intelligent applications, scalable data pipelines,
            and practical data-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* AGENTIC AI & GENERATIVE AI */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:col-span-2 min-h-[350px] hover:-translate-y-2 transition-all duration-500">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
              <div className="absolute -top-24 -left-24 h-72 w-72 bg-violet-500/20 rounded-full blur-3xl" />
            </div>

            <Brain className="w-12 h-12 text-violet-400 mb-6" />

            <p className="text-sm uppercase tracking-[0.3em] text-violet-400 mb-2">
              Think & Reason
            </p>

            <h3 className="text-4xl font-bold mb-4">
              Agentic AI & Generative AI
            </h3>

            <p className="text-gray-400 mb-8">
              Building multi-agent AI systems, RAG-powered
              applications, and intelligent Text-to-SQL
              assistants. Working with LLM orchestration,
              semantic retrieval, RAG application evaluation,
              and retrieval-quality assessment to develop
              reliable AI workflows.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "LangChain",
                "LangGraph",
                "Multi-Agent Systems",
                "RAG",
                "RAG Application Evals",
                "Retrieval Evaluation",
                "Text-to-SQL",
                "Pinecone",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-violet-500/30 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* MACHINE LEARNING */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:col-span-2 min-h-[350px] hover:-translate-y-2 transition-all duration-500">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
              <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-pink-500/20 rounded-full blur-3xl" />
            </div>

            <Bot className="w-12 h-12 text-pink-400 mb-6" />

            <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-2">
              Learn & Predict
            </p>

            <h3 className="text-4xl font-bold mb-4">
              Machine Learning
            </h3>

            <p className="text-gray-400 mb-8">
              Developing end-to-end machine learning
              solutions using classification, regression,
              bagging, and boosting algorithms.
              Experienced in data preprocessing, feature
              engineering, imbalanced data handling,
              model evaluation, and predictive analytics.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Scikit-Learn",
                "Classification",
                "Regression",
                "Bagging & Boosting",
                "XGBoost",
                "Feature Engineering",
                "Imbalanced Data Handling",
                "Model Evaluation",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-pink-500/30 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* DATA ENGINEERING */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:col-span-2 min-h-[350px] hover:-translate-y-2 transition-all duration-500">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
              <div className="absolute -top-24 -right-24 h-72 w-72 bg-cyan-500/20 rounded-full blur-3xl" />
            </div>

            <Database className="w-12 h-12 text-cyan-400 mb-6" />

            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-2">
              Build & Transform
            </p>

            <h3 className="text-4xl font-bold mb-4">
              Data Engineering
            </h3>

            <p className="text-gray-400 mb-8">
              Building end-to-end ETL pipelines for data
              extraction, cleaning, transformation, and
              loading. Working with Python, SQL, cloud
              storage, BigQuery, and data warehousing,
              while expanding my knowledge of distributed
              data processing using Hadoop and PySpark.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "SQL",
                "ETL Pipelines",
                "Data Warehousing",
                "BigQuery",
                "Google Cloud Storage",
                "Apache Spark",
                "PySpark",
                "HDFS",
                "Hive",
                "MapReduce",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-cyan-500/30 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* DATA ANALYTICS */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:col-span-2 min-h-[350px] hover:-translate-y-2 transition-all duration-500">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
              <div className="absolute top-0 left-1/2 h-72 w-72 bg-blue-500/20 rounded-full blur-3xl" />
            </div>

            <BarChart3 className="w-12 h-12 text-blue-400 mb-6" />

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-2">
              Analyze & Discover
            </p>

            <h3 className="text-4xl font-bold mb-4">
              Data Analytics & Visualization
            </h3>

            <p className="text-gray-400 mb-8">
              Transforming raw datasets into meaningful
              insights through data collection, cleaning,
              exploratory analysis, visualization, and
              statistical analysis. Applied these skills
              during my C-DAC Pune internship while
              analyzing historical Green500 and TOP500
              supercomputing datasets.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Pandas",
                "NumPy",
                "EDA",
                "Data Cleaning",
                "Data Visualization",
                "Streamlit",
                "SQL Analytics",
                "Green500 / TOP500",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-blue-500/30 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* MISSION */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:col-span-4 min-h-[180px] flex flex-col md:flex-row md:items-center justify-between gap-8 hover:-translate-y-2 transition-all duration-500">

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-400 mb-3">
                My Mission
              </p>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Turning Data into Intelligence,
                <br />
                and Ideas into Impact.
              </h3>

              <p className="text-gray-400 mt-4 max-w-2xl">
                Bridging Data Engineering, Machine Learning,
                and Agentic AI to build meaningful,
                real-world solutions.
              </p>
            </div>

            <ArrowUpRight className="w-12 h-12 text-violet-400 shrink-0" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
