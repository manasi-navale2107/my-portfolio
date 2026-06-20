"use client";

import { AlertTriangle, Target, TrendingDown } from "lucide-react";

export default function ProblemSection({ project }) {
  const title = project?.title || "AI & Data Science Projects";

  const problemDescription =
    project?.problem?.description ||
    "Many real-world domains generate large amounts of data and information, but users often struggle to extract useful insights, get reliable answers, or make faster decisions. My projects focus on solving this gap using AI, Machine Learning, RAG, and Data Analytics.";

  return (
    <section className="relative py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-red-400 uppercase tracking-[0.3em] text-xs">
            The Problem
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Why This Project Exists
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Every project begins with a problem worth solving. Before building{" "}
            <span className="text-white">{title}</span>, I focused on
            understanding the challenge and designing an AI-driven solution
            around it.
          </p>
        </div>

        <div className="mt-16 rounded-[32px] border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/20">
              <AlertTriangle size={26} className="text-red-400" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                Problem Statement
              </h3>

              <p className="mt-5 text-zinc-400 leading-relaxed text-lg max-w-4xl">
                {problemDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
              <AlertTriangle className="text-orange-400" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Existing Challenges
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Traditional systems often depend on manual data handling,
              scattered information, unstructured documents, and limited
              automation, making analysis and decision-making slower.
            </p>
          </div>

          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
              <TrendingDown className="text-cyan-400" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">Impact</h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Without intelligent workflows, users may face inaccurate answers,
              poor insights, delayed analysis, missing patterns, and reduced
              productivity while working with complex data or documents.
            </p>
          </div>

          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
              <Target className="text-violet-400" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">Goal</h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Build AI-powered solutions using RAG, Machine Learning, Data
              Analytics, and Multi-Agent Systems to turn raw information into
              useful, reliable, and actionable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}