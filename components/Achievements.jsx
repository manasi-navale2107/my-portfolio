"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Achievements = () => {
  const data = [
    {
      title: "Coding platform",
      content: (
        <div className="rounded-3xl border border-[#5227FF]/20 bg-[#5227FF]/5 p-6 backdrop-blur-sm">
          <p className="text-white font-bold text-2xl mb-4">
             🧠200+ LeetCode Problems
          </p>

          <p className="mb-6 text-neutral-400 leading-relaxed">
            Solved 200+ Data Structures and Algorithms problems across arrays, linked lists, 
            trees, graphs, dynamic programming, and advanced problem-solving topics to strengthen coding and analytical skills.
          </p>
        </div>
      ),
    },

    {
      title: "Work Experience",
      content: (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
          <p className="text-white font-bold text-2xl mb-4">
            🏢 C-DAC Pune Internship
          </p>

          <p className="mb-6 text-neutral-400 leading-relaxed">
            Working as a Data Analyst Intern in the HPC Tech Group, contributing to Green500 and TOP500 supercomputing analytics, 
            machine learning-based data processing, and AI-driven research workflows.
          </p>
        </div>
      ),
    },

    {
      title: "Projects",
      content: (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
          <p className="text-white font-bold text-2xl mb-4">
            🤖 4+ AI Projects Built
          </p>

          <p className="mb-6 text-neutral-400 leading-relaxed">
            Designed and developed multiple AI-powered applications including ResearchOS, GaleMed AI, GapLens AI, and CropCare AI 
            using Machine Learning, RAG, LangChain, LangGraph, and LLM technologies
          </p>
        </div>
      ),
    },

    {
      title: "Academic Progress",
      content: (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
          <p className="text-white font-bold text-2xl mb-4">
            🎓 9.28 SGPA
          </p>

          <p className="mb-6 text-neutral-400 leading-relaxed">
            Maintained a consistent academic record with a 9.28 SGPA while actively participating in AI projects, 
            technical competitions, and industry-oriented learning.
          </p>
        </div>
      ),
    },

    {
      title: "Publication",
      content: (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
          <p className="text-white font-bold text-2xl mb-4">
            📄 Research Paper Publication
          </p>

          <p className="mb-6 text-neutral-400 leading-relaxed">
            Published a research paper titled 'Design and Development of a Low-Cost Self-Driving Car Platform for Educational and Experimental Applications'
             in IJARESM (International Journal of All Research Education & Scientific Methods), Volume 14, Issue 4, April 2026.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white">
          Built.
          <br />
          Competed.
          <br />
          Won.
        </h2>

        <p className="mt-6 text-neutral-500 text-lg max-w-2xl">
         A timeline of projects, internships, and milestones — from
          multi-agent research systems to RAG-based assistants — that
          shaped my path as an aspiring AI/ML Engineer.
        </p>
      </div>

      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Achievements;
