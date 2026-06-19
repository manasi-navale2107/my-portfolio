"use client";

import { Database, Cloud, Cpu, Users, Smartphone } from "lucide-react";
import { ArrowRight } from "lucide-react";

const iconMap = {
  "Citizen Mobile App": Smartphone,
  "Firebase Backend": Database,
  "AI Processing Layer": Cpu,
  "Hospital Dashboard": Users,
  "Ambulance Mobile App": Smartphone,
};

export default function ArchitectureSection({ project }) {
  return (
    <section className="relative py-32">
      {/* Background Glow */}
      <div className="absolute right-1/2 top-1/2 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-purple-400 uppercase tracking-[0.3em] text-xs">
            Technical Architecture
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            System Design
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Scalable, modular architecture designed for reliability,
            performance, and future extensibility.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mt-20">
          <div className="rounded-[32px] border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl p-12 overflow-x-auto">
            <div className="flex items-center gap-6 min-w-max justify-center flex-wrap md:flex-nowrap">
              {project.architecture.map((component, index) => {
                const Icon = iconMap[component] || Cloud;

                return (
                  <div key={index} className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20">
                        <Icon size={24} className="text-purple-400" />
                      </div>

                      <p className="text-sm font-medium text-white text-center max-w-[120px]">
                        {component}
                      </p>
                    </div>

                    {index < project.architecture.length - 1 && (
                      <div className="hidden md:flex items-center">
                        <ArrowRight size={20} className="text-zinc-600" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Architecture Details */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {/* Scalability */}
          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white">
              Scalable Infrastructure
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Cloud-native architecture with auto-scaling capabilities handles
              traffic spikes and grows with demand.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Load balancing across multiple servers
              </li>

              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Database sharding and replication
              </li>

              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Content delivery network integration
              </li>
            </ul>
          </div>

          {/* Security */}
          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white">
              Security & Compliance
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              End-to-end encryption, secure authentication, and compliance with
              industry standards and regulations.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                SSL/TLS encryption for data in transit
              </li>

              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                HIPAA and data protection compliance
              </li>

              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Regular security audits and penetration testing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
