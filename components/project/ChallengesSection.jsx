"use client";

import { AlertCircle, Wrench, Lightbulb } from "lucide-react";

const defaultChallenges = [
  "Handling missing and inconsistent data in Green500 and TOP500 datasets",
  "Building reliable RAG workflows with accurate document retrieval",
  "Designing multi-agent AI workflows for research automation",
  "Improving model output quality through preprocessing and evaluation",
];

const descriptions = [
  "I worked on data cleaning, preprocessing, feature handling, and validation to make the dataset suitable for analysis and machine learning workflows.",
  "I used document chunking, embeddings, vector search, and grounded response generation to make answers more reliable and context-aware.",
  "I connected search, reasoning, extraction, and report generation steps to create structured AI workflows using LangChain and LangGraph.",
  "I focused on better input preparation, model evaluation, and result interpretation to improve the overall quality of AI and ML outputs.",
];

export default function ChallengesSection({ project }) {
  const icons = [AlertCircle, Wrench, Lightbulb];
  const challenges = project?.challenges || defaultChallenges;

  return (
    <section className="relative py-32">
      <div className="absolute right-1/2 top-1/2 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-orange-400 uppercase tracking-[0.3em] text-xs">
            Challenges
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Problems I Solved
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            My projects involved real challenges across data cleaning, machine
            learning, RAG systems, and AI workflow design. Here is how I
            approached and solved them.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl transition-all hover:border-orange-500/50 hover:bg-zinc-950/80"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-all">
                    <Icon size={20} className="text-orange-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {challenge}
                    </h3>

                    <p className="mt-3 text-zinc-400 leading-relaxed">
                      {descriptions[index] ||
                        "I applied structured problem-solving, debugging, and iterative improvement to build a more reliable and practical solution."}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}