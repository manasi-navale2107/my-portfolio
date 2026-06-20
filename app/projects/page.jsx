"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />
          <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white">
              Featured Projects
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-zinc-400">
              A showcase of AI, Machine Learning, Generative AI, and Data
              Analytics projects I have built through real-world problem
              solving, research, and hands-on development.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950/50 transition-all duration-300 hover:border-violet-500/50 hover:bg-zinc-950/80 backdrop-blur-xl">
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${project.gradient}`}
                  />

                  <div className="relative p-8 h-full flex flex-col">
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

                    <p className="text-zinc-400 leading-relaxed text-sm mb-6 flex-grow">
                      {project.description.substring(0, 120)}...
                    </p>

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

                    <div className="pt-6 border-t border-zinc-800 flex items-center justify-end">
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

      <section className="relative py-20 border-t border-zinc-800">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] border border-zinc-800 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 backdrop-blur-xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to see more?
            </h2>

            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              From AI research systems and medical RAG applications to machine
              learning and data analytics projects, my GitHub showcases the
              technologies and solutions I enjoy building.
            </p>

            <a
              href="https://github.com/manasi-navale2107"
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