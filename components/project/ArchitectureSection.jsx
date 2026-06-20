"use client";

import { Database, Cloud, Cpu, Search, Brain, FileText } from "lucide-react";
import { ArrowRight } from "lucide-react";

const iconMap = {
  "User Query": Search,
  "Data Collection": Database,
  "Document Processing": FileText,
  "Embedding & Vector Store": Database,
  "AI / ML Processing": Brain,
  "LLM Response Layer": Cpu,
  "Analytics Dashboard": Cloud,
  "Final Output": FileText,
};

export default function ArchitectureSection({ project }) {
  const architecture =
    project?.architecture || [
      "User Query",
      "Data Collection",
      "Document Processing",
      "Embedding & Vector Store",
      "AI / ML Processing",
      "LLM Response Layer",
      "Final Output",
    ];

  return (
    <section className="relative py-32">
      <div className="absolute right-1/2 top-1/2 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-purple-400 uppercase tracking-[0.3em] text-xs">
            Technical Architecture
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            AI System Design
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Modular architecture focused on data processing, retrieval,
            machine learning workflows, and AI-powered response generation.
          </p>
        </div>

        <div className="mt-20">
          <div className="rounded-[32px] border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl p-12 overflow-x-auto">
            <div className="flex items-center gap-6 min-w-max justify-center flex-wrap md:flex-nowrap">
              {architecture.map((component, index) => {
                const Icon = iconMap[component] || Cloud;

                return (
                  <div key={index} className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20">
                        <Icon size={24} className="text-purple-400" />
                      </div>

                      <p className="text-sm font-medium text-white text-center max-w-[120px]">
                        {component}
                      </p>
                    </div>

                    {index < architecture.length - 1 && (
                      <div className="hidden md:flex items-center">
                        <ArrowRight size={20} className="text-zinc-600" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white">
              AI Workflow Architecture
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Designed to support Retrieval-Augmented Generation, semantic
              search, machine learning pipelines, and structured AI outputs.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Document processing and chunking for RAG systems
              </li>

              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Vector embeddings and semantic retrieval
              </li>

              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                LLM-powered reasoning and response generation
              </li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white">
              Data & ML Processing
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Built around clean data pipelines, exploratory analysis, feature
              engineering, model evaluation, and visual insights.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Data cleaning, preprocessing, and EDA
              </li>

              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Machine learning-based prediction and analysis
              </li>

              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Interactive dashboards for insights and presentation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}