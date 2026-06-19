"use client";

import React from "react";
import Link from "next/link";
import { PinContainer } from "./ui/3d-pin";

const projects = [
  {
    title: "HospiConnect",
    emoji: "🚑",
    category: "HealthTech",
    description:
      "Real-time healthcare coordination platform connecting patients, ambulances, and hospitals.",
    href: "/projects/hospiconnect",
    gradient: "from-red-500 via-pink-500 to-rose-500",
  },
  {
    title: "Credify",
    emoji: "💳",
    category: "FinTech",
    description:
      "AI-powered financial health platform for debt optimization and tax planning.",
    href: "/projects/credify",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    title: "Algo Animate",
    emoji: "🎯",
    category: "EdTech",
    description:
      "AI-powered DSA learning platform with optimized solutions and visual explanations.",
    href: "/projects/algo-animate",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
  },
  {
    title: "LinkedIn Post Generator AI Agent",
    emoji: "✍️",
    category: "Generative AI",
    description:
      "Multi-agent AI system that generates, evaluates, and optimizes LinkedIn posts using human feedback loops.",
    href: "/projects/linkedin-post-generator-ai-agent",
    gradient: "from-blue-600 via-sky-500 to-cyan-500",
  },
  {
    title: "LangGraph Persistent Chatbot",
    emoji: "🤖",
    category: "AI Agents",
    description:
      "Production-ready AI chatbot with persistent memory, multi-chat support, and resume conversation functionality.",
    href: "/projects/langgraph-persistent-chatbot",
    gradient: "from-indigo-600 via-violet-500 to-purple-500",
  },
  {
    title: "YouTube RAG Chatbot",
    emoji: "🎥",
    category: "Generative AI",
    description:
      "Ask questions about YouTube videos using transcript-based retrieval and AI-powered answer generation.",
    href: "/projects/youtube-rag-chatbot",
    gradient: "from-red-600 via-pink-500 to-fuchsia-500",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-20">
        <span className="text-violet-400 uppercase tracking-[0.3em] text-sm">
          Featured Work
        </span>

        <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">
          Products I've Built
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-zinc-400 text-lg">
          From AI-powered platforms and hackathon-winning solutions to products
          solving real-world problems across Healthcare, FinTech, AgriTech,
          GovTech, and Education.
        </p>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-12 gap-y-32 justify-items-center">
        {projects.map((project) => (
          <PinContainer
            key={project.title}
            title={project.category}
            href={project.href}
          >
            <div className="flex flex-col p-5 w-[22rem] h-[22rem] bg-black border border-zinc-800 rounded-2xl backdrop-blur-xl">
              {/* Emoji */}
              <div className="text-5xl mb-4">{project.emoji}</div>

              {/* Title */}
              <h3 className="text-white text-2xl font-bold">{project.title}</h3>

              {/* Category */}
              <p className="text-violet-400 text-sm mt-1">{project.category}</p>

              {/* Description */}
              <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Gradient Preview */}
              <div
                className={`h-60 rounded-xl mt-6 bg-gradient-to-br ${project.gradient} opacity-90`}
              />

              {/* Footer */}
              <div className="mt-4 text-white text-sm font-medium">
                View Project →
              </div>
            </div>
          </PinContainer>
        ))}
      </div>

      {/* CTA */}
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
