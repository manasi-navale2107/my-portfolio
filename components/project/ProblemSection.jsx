"use client";

import { AlertTriangle, Target, TrendingDown } from "lucide-react";

export default function ProblemSection({ project }) {
  return (
    <section className="relative py-32">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="max-w-3xl">

          <span className="text-red-400 uppercase tracking-[0.3em] text-xs">
            The Problem
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Why This Project Exists
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Every great product starts with a problem worth solving.
            Before building <span className="text-white">{project.title}</span>,
            we identified a real-world challenge and designed a solution
            around it.
          </p>

        </div>

        {/* Main Problem Card */}
        <div
          className="
            mt-16
            rounded-[32px]
            border
            border-zinc-800
            bg-zinc-950/50
            backdrop-blur-xl
            p-10
          "
        >

          <div className="flex items-start gap-4">

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-red-500/10
                border
                border-red-500/20
              "
            >
              <AlertTriangle
                size={26}
                className="text-red-400"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold text-white">
                Problem Statement
              </h3>

              <p className="mt-5 text-zinc-400 leading-relaxed text-lg max-w-4xl">
                {project.problem.description}
              </p>

            </div>

          </div>

        </div>

        {/* Bento Grid */}
        <div className="mt-10 grid lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div
            className="
              rounded-[28px]
              border
              border-zinc-800
              bg-zinc-950/50
              p-8
              backdrop-blur-xl
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-orange-500/10
              "
            >
              <AlertTriangle
                className="text-orange-400"
              />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Existing Challenges
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Traditional systems often rely on manual workflows,
              fragmented information, and inefficient processes
              that create delays and poor user experiences.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              rounded-[28px]
              border
              border-zinc-800
              bg-zinc-950/50
              p-8
              backdrop-blur-xl
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-cyan-500/10
              "
            >
              <TrendingDown
                className="text-cyan-400"
              />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Impact
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              The lack of optimized systems leads to wasted
              resources, lower efficiency, poor decision-making,
              and reduced accessibility for end users.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
              rounded-[28px]
              border
              border-zinc-800
              bg-zinc-950/50
              p-8
              backdrop-blur-xl
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-violet-500/10
              "
            >
              <Target
                className="text-violet-400"
              />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Goal
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Build a scalable solution that leverages modern
              technologies and AI to solve the problem more
              efficiently while improving user experience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}