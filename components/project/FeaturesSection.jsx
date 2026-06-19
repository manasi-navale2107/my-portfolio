"use client";

import { Check, Zap, Target, Shield, Gauge, Users } from "lucide-react";

const iconMap = {
  sos: Zap,
  hospital: Target,
  tracking: Gauge,
  ai: Shield,
  dashboard: Users,
  transfer: Check,
};

export default function FeaturesSection({ project }) {
  return (
    <section className="relative py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
            Core Features
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            What Makes It Powerful
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Packed with intelligent features designed to solve every aspect of
            the problem and deliver exceptional user experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {project.features.map((feature, index) => {
            const icons = [Zap, Target, Gauge, Shield, Users, Check];
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/50 hover:bg-zinc-950/80"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all">
                    <Icon size={20} className="text-cyan-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Showcase */}
        <div className="mt-20 rounded-[32px] border border-zinc-800 bg-gradient-to-br from-cyan-500/5 to-transparent backdrop-blur-xl p-12">
          <h3 className="text-3xl font-bold text-white">
            Integrated Ecosystem
          </h3>

          <p className="mt-4 text-zinc-400 leading-relaxed max-w-3xl">
            All features work together seamlessly, creating a cohesive
            experience that's greater than the sum of its parts. From initial
            contact to resolution, every touchpoint is optimized for efficiency
            and user satisfaction.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2"
              >
                <Check size={14} className="text-cyan-400" />
                <span className="text-sm text-cyan-300">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
