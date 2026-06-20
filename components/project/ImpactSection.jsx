"use client";

import { Trophy, Users, TrendingUp, Zap } from "lucide-react";

const defaultImpact = [
  "Published Research Paper in IJARESM",
  "Data Analyst Intern at C-DAC Pune",
  "Built 4+ AI & Generative AI Projects",
  "Solved 200+ DSA Problems on LeetCode",
];

export default function ImpactSection({ project }) {
  const impact = project?.impact || defaultImpact;
  const techStack = project?.techStack || [
    "Python",
    "LangChain",
    "LangGraph",
    "RAG",
    "Machine Learning",
    "Data Analytics",
  ];
  const features = project?.features || [
    "RAG Workflows",
    "ML Pipelines",
    "Data Cleaning",
    "EDA",
    "Dashboards",
    "AI Applications",
  ];
  const architecture = project?.architecture || [
    "Data Collection",
    "Preprocessing",
    "Model / Retrieval Layer",
    "AI Processing",
    "Output Generation",
  ];

  return (
    <section className="relative py-32 border-t border-zinc-800">
      <div className="absolute right-1/2 top-1/2 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-amber-400 uppercase tracking-[0.3em] text-xs">
            Recognition
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Impact & Achievements
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            A snapshot of my academic achievements, internship experience,
            research publication, and AI project-building journey.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {impact.map((item, index) => {
            const icons = [Trophy, TrendingUp, Users, Zap];
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl transition-all hover:border-amber-500/50 hover:bg-zinc-950/80"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-all">
                    <Icon size={20} className="text-amber-400" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">{item}</h3>

                    <p className="mt-2 text-sm text-zinc-400">
                      Portfolio highlight
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[32px] border border-zinc-800 bg-gradient-to-br from-amber-500/5 to-transparent backdrop-blur-xl p-12">
          <h3 className="text-2xl font-bold text-white mb-10">
            Profile Metrics
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-amber-400">
                {techStack.length}+
              </div>

              <p className="mt-2 text-zinc-400">Technologies Used</p>
            </div>

            <div>
              <div className="text-4xl font-bold text-amber-400">
                4+
              </div>

              <p className="mt-2 text-zinc-400">AI Projects Built</p>
            </div>

            <div>
              <div className="text-4xl font-bold text-amber-400">
                200+
              </div>

              <p className="mt-2 text-zinc-400">DSA Problems Solved</p>
            </div>

            <div>
              <div className="text-4xl font-bold text-amber-400">
                9.28
              </div>

              <p className="mt-2 text-zinc-400">Current SGPA</p>
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-[32px] border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-white">
            Want to explore my work?
          </h3>

          <p className="mt-4 text-zinc-400 text-lg">
            Explore my GitHub to see AI projects, RAG applications, data
            analytics work, and machine learning experiments.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href={project?.github || "https://github.com/manasi-navale2107"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-3 text-white transition-all hover:border-amber-500 hover:scale-105"
            >
              View GitHub
            </a>

            {project?.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-8 py-3 text-black font-medium transition-all hover:scale-105"
              >
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}