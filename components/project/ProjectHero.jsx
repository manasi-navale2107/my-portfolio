"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Sparkles, ChevronRight } from "lucide-react";

export default function ProjectHero({ project }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

        <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Category */}
        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 backdrop-blur-md">
          <Sparkles size={14} />

          {project.category}
        </div>

        {/* Main Content */}
        <div className="mt-8 grid gap-16 lg:grid-cols-2 items-center">
          {/* Left */}
          <div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white">
              {project.title}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
              {project.tagline}
            </p>

            {/* Tech Pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {project.techStack.slice(0, 6).map((tech) => (
                <div
                  key={tech}
                  className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300 backdrop-blur-md"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                className="
                  flex items-center gap-2
                  rounded-xl
                  border border-zinc-800
                  bg-zinc-900
                  px-6 py-4
                  text-white
                  transition-all
                  hover:border-violet-500
                  hover:scale-105
                "
              >
                <Github size={18} />
                Source Code
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Huge Background Text */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          translate-y-1/3
          select-none
        "
      >
        <h2
          className="
            text-[18vw]
            font-black
            leading-none
            tracking-tight
            text-transparent
            bg-gradient-to-b
            from-white/[0.04]
            to-transparent
            bg-clip-text
          "
        >
          {project.title}
        </h2>
      </div>
    </section>
  );
}
