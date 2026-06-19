"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />
          <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          

          {/* Heading */}
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white">
              Featured Projects
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
              A showcase of AI-powered platforms and full-stack solutions I've
              built. Each project represents a unique challenge solved through
              innovative technology and thoughtful design.
            </p>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-12">
              <div>
                <h3 className="text-3xl font-bold text-white">
                  {projects.length}
                </h3>
                <p className="text-sm text-zinc-500 mt-2">Projects Built</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  {new Set(projects.flatMap((p) => p.techStack)).size}+
                </h3>
                <p className="text-sm text-zinc-500 mt-2">Technologies Used</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  {projects.reduce((acc, p) => acc + p.impact.length, 0)}
                </h3>
                <p className="text-sm text-zinc-500 mt-2">
                  Awards & Recognition
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Projects Grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950/50 transition-all duration-300 hover:border-violet-500/50 hover:bg-zinc-950/80 backdrop-blur-xl">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${project.gradient}`}
                  />

                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{project.emoji}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {project.title}
                          </h3>
                          <p className="text-sm text-violet-400">
                            {project.category}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="text-zinc-600 group-hover:text-violet-400 transition-colors"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed text-sm mb-6 flex-grow">
                      {project.description.substring(0, 120)}...
                    </p>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-300">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
                      <div className="text-xs text-zinc-500">
                        {project.impact.length} Awards
                      </div>

                      <div className="flex items-center gap-2 text-violet-400 group-hover:gap-3 transition-all">
                        <span className="text-sm font-medium">Explore</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-400 text-lg">No projects found.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 border-t border-zinc-800">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] border border-zinc-800 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 backdrop-blur-xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to see more?
            </h2>

            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Check out my GitHub for more projects, open-source contributions,
              and experimental work.
            </p>

            <a
              href="https://github.com/ved-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-black font-medium transition-all hover:scale-105"
            >
              <Sparkles size={18} />
              Visit GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
