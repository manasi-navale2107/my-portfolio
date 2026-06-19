"use client";

import { AlertCircle, Wrench, Lightbulb } from "lucide-react";

export default function ChallengesSection({ project }) {
  const icons = [AlertCircle, Wrench, Lightbulb];

  return (
    <section className="relative py-32">
      {/* Background Glow */}
      <div className="absolute right-1/2 top-1/2 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-orange-400 uppercase tracking-[0.3em] text-xs">
            Challenges
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Problems We Solved
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Building this solution came with technical and logistical
            challenges. Here's how we overcame them.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {project.challenges.map((challenge, index) => {
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
                      We implemented sophisticated solutions and best practices
                      to overcome this challenge and ensure optimal performance.
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
