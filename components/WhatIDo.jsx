import React from "react";
import { Brain, BarChart3, Bot, ArrowUpRight } from "lucide-react";

const WhatIDo = () => {
  return (
    <section className="relative min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="uppercase tracking-[0.4em] text-violet-400 text-sm mb-4">
            What I Do
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Building intelligent
            <br />
            AI, ML & data-driven solutions.
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl">
            I work across Generative AI, Machine Learning, Data Analytics, and
            research-oriented systems to solve real-world problems with practical
            AI applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* AI */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:col-span-2 min-h-[350px] hover:-translate-y-2 transition-all duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -top-24 -left-24 h-72 w-72 bg-violet-500/20 rounded-full blur-3xl" />
            </div>

            <Brain className="w-12 h-12 text-violet-400 mb-6" />

            <p className="text-sm uppercase tracking-[0.3em] text-violet-400 mb-2">
              Think
            </p>

            <h3 className="text-4xl font-bold mb-4">
              Generative AI & RAG
            </h3>

            <p className="text-gray-400 mb-8">
              Building LLM-powered applications, RAG systems, and AI workflows
              that retrieve, reason, and generate useful responses.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "LangChain",
                "LangGraph",
                "RAG",
                "LLM Apps",
                "Prompt Engineering",
                "Vector Search",
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

          {/* ML */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:col-span-2 min-h-[350px] hover:-translate-y-2 transition-all duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-pink-500/20 rounded-full blur-3xl" />
            </div>

            <Bot className="w-12 h-12 text-pink-400 mb-6" />

            <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-2">
              Learn
            </p>

            <h3 className="text-4xl font-bold mb-4">
              Machine Learning
            </h3>

            <p className="text-gray-400 mb-8">
              Applying ML techniques for classification, regression, NLP,
              feature engineering, model evaluation, and prediction-based
              systems.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Scikit-Learn",
                "NLP",
                "Classification",
                "Regression",
                "Feature Engineering",
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

          {/* DATA */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:col-span-3 min-h-[280px] hover:-translate-y-2 transition-all duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute top-0 left-1/2 h-72 w-72 bg-blue-500/20 rounded-full blur-3xl" />
            </div>

            <BarChart3 className="w-12 h-12 text-blue-400 mb-6" />

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-2">
              Analyze
            </p>

            <h3 className="text-4xl font-bold mb-4">
              Data Analytics & Visualization
            </h3>

            <p className="text-gray-400 mb-8 max-w-3xl">
              Cleaning, analyzing, and visualizing datasets to extract insights.
              Currently applying this through Green500 and TOP500
              supercomputing analytics at C-DAC Pune.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Pandas",
                "NumPy",
                "EDA",
                "Data Cleaning",
                "Visualization",
                "Streamlit",
                "Green500",
                "TOP500",
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

          {/* Mission */}
          <div className="group rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 min-h-[280px] flex flex-col justify-between hover:-translate-y-2 transition-all duration-500">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">
                Mission
              </p>

              <h3 className="text-3xl font-bold leading-tight">
                Turning
                <br />
                Data into
                <br />
                Intelligence.
              </h3>
            </div>

            <ArrowUpRight className="w-10 h-10 text-violet-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;