"use client";

import React from "react";
import Link from "next/link";
import { PinContainer } from "./ui/3d-pin";

const projects = [
  {
    title: "ResearchOS",
    emoji: "🤖",
    category: "Multi-Agent AI",
    description:
      "A multi-agent research system using LangChain, LangGraph, Groq, and Tavily for web search, reasoning, and report generation.",
    href: "/projects/researchos",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
  },
  {
    title: "GaleMed AI",
    emoji: "🩺",
    category: "Medical RAG",
    description:
      "A medical knowledge assistant using RAG, LangChain, ChromaDB, and Hugging Face embeddings for grounded medical question answering.",
    href: "/projects/galemed-ai",
    gradient: "from-red-500 via-pink-500 to-rose-500",
  },
  {
    title: "GapLens AI",
    emoji: "📊",
    category: "AI Career Platform",
    description:
      "An AI interview preparation platform that analyzes resumes, identifies skill gaps, and gives personalized learning recommendations.",
    href: "/projects/gaplens-ai",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    title: "CropCare AI",
    emoji: "🌱",
    category: "Agricultural AI",
    description:
      "A smart agriculture assistant that analyzes crop-related data and provides predictive insights for crop health and decision support.",
    href: "/projects/cropcare-ai",
    gradient: "from-green-500 via-emerald-500 to-lime-500",
  },
  {
    title: "Green500 Dashboard",
    emoji: "🖥️",
    category: "Data Analytics",
    description:
      "A Streamlit dashboard built during my C-DAC internship to analyze Green500 and TOP500 supercomputing datasets using EDA and ML.",
    href: "/projects/green500-dashboard",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-violet-400 uppercase tracking-[0.3em] text-sm">
          Featured Projects
        </span>

        <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">
          AI & Data Science Portfolio
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-zinc-400 text-lg">
          A collection of AI, Machine Learning, Data Analytics, Research, and
          Generative AI projects built using LangChain, LangGraph, RAG, Machine
          Learning, and modern AI technologies.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-12 gap-y-32 justify-items-center">
        {projects.map((project) => (
          <PinContainer
            key={project.title}
            title={project.category}
            href={project.href}
          >
            <div className="flex flex-col p-5 w-[22rem] h-[22rem] bg-black border border-zinc-800 rounded-2xl backdrop-blur-xl">
              <div className="text-5xl mb-4">{project.emoji}</div>

              <h3 className="text-white text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-violet-400 text-sm mt-1">
                {project.category}
              </p>

              <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div
                className={`h-60 rounded-xl mt-6 bg-gradient-to-br ${project.gradient} opacity-90`}
              />

              <div className="mt-4 text-white text-sm font-medium">
                View Project →
              </div>
            </div>
          </PinContainer>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <Link
          href="/projects"
          className="px-8 py-4 rounded-full border border-zinc-700 hover:border-violet-500 transition-all duration-300 text-white"
        >
          Explore All Projects →
        </Link>
      </div>
    </section>
  );
}