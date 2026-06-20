"use client";

import { Check, Zap, Target, Shield, Gauge, Users } from "lucide-react";

const defaultFeatures = [
  {
    title: "RAG-Based Question Answering",
    description:
      "Built retrieval-augmented generation workflows using document chunking, embeddings, vector search, and LLM response generation.",
  },
  {
    title: "Multi-Agent Research Workflows",
    description:
      "Developed AI systems that automate research planning, web search, information extraction, reasoning, and structured report generation.",
  },
  {
    title: "Machine Learning Pipelines",
    description:
      "Applied classification, regression, NLP, feature engineering, and model evaluation techniques to build practical ML solutions.",
  },
  {
    title: "Data Cleaning & EDA",
    description:
      "Performed preprocessing, missing value handling, exploratory analysis, and visualization on real-world datasets including Green500 and TOP500.",
  },
  {
    title: "Interactive Dashboards",
    description:
      "Created data analytics dashboards using Streamlit to present insights clearly through KPIs, charts, trends, and visual analysis.",
  },
  {
    title: "AI Project Development",
    description:
      "Built end-to-end AI applications such as ResearchOS, GaleMed AI, GapLens AI, and CropCare AI using modern AI tools and frameworks.",
  },
];

export default function FeaturesSection({ project }) {
  const features = project?.features || defaultFeatures;

  return (
    <section className="relative py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
            Core Capabilities
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            What Makes My Work Strong
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            A combination of Generative AI, Machine Learning, Data Analytics,
            and project-building skills applied across real-world AI systems.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const icons = [Zap, Target, Gauge, Shield, Users, Check];
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/50 hover:bg-zinc-950/80"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all">
                    <Icon size={20} className="text-cyan-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[32px] border border-zinc-800 bg-gradient-to-br from-cyan-500/5 to-transparent backdrop-blur-xl p-12">
          <h3 className="text-3xl font-bold text-white">
            AI-Driven Development Approach
          </h3>

          <p className="mt-4 text-zinc-400 leading-relaxed max-w-3xl">
            My projects combine problem understanding, data preparation,
            machine learning, retrieval-based AI, and clean implementation to
            build useful AI-powered applications from idea to working prototype.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2"
              >
                <Check size={14} className="text-cyan-400" />
                <span className="text-sm text-cyan-300">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}