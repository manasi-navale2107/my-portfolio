"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Achievements = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div className="rounded-3xl border border-[#5227FF]/20 bg-[#5227FF]/5 p-6 backdrop-blur-sm">
          <p className="text-white font-bold text-2xl mb-4">
            🥇 AI Summit 2025 Project Showcase
          </p>

          <p className="mb-6 text-neutral-400 leading-relaxed">
            Secured 1st Place and received a cash prize of ₹10,000 for building
            an innovative AI solution. This achievement marked our first project
            funding and recognition at the AI Summit organized by the AI & DS
            Department, AISSMS IOIT Pune.
          </p>

          <div className="space-y-3">
            <div className="text-neutral-300">✓ 1st Place Winner</div>

            <div className="text-neutral-300">✓ ₹10,000 Prize Money</div>

            <div className="text-neutral-300">✓ First Project Funding</div>
          </div>
        </div>
      ),
    },

    {
      title: "2025",
      content: (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
          <p className="text-white font-bold text-2xl mb-4">
            🥈 Vyoma National Level Prototype Competition
          </p>

          <p className="mb-6 text-neutral-400 leading-relaxed">
            Awarded 1st Runner-Up in the Software Category for developing
            HospiConnect — an Emergency Healthcare Coordination Platform
            connecting patients, ambulances, and hospitals in real-time.
          </p>

          <div className="space-y-3">
            <div className="text-neutral-300">✓ 1st Runner-Up</div>

            <div className="text-neutral-300">✓ Software Category Award</div>

            <div className="text-neutral-300">✓ HospiConnect Platform</div>
          </div>
        </div>
      ),
    },

    {
      title: "2025",
      content: (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
          <p className="text-white font-bold text-2xl mb-4">
            🥈 5th Regional Conclave
          </p>

          <p className="mb-6 text-neutral-400 leading-relaxed">
            Recognized for innovation and impactful problem-solving through
            healthcare technology solutions. Presented HospiConnect among
            competing student projects and prototypes.
          </p>

          <div className="space-y-3">
            <div className="text-neutral-300">✓ 2nd Prize Winner</div>

            <div className="text-neutral-300">✓ Healthcare Innovation</div>

            <div className="text-neutral-300">✓ Regional Recognition</div>
          </div>
        </div>
      ),
    },

    {
      title: "2025",
      content: (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
          <p className="text-white font-bold text-2xl mb-4">
            🏅 Wangoes Excellence Award
          </p>

          <p className="mb-6 text-neutral-400 leading-relaxed">
            Selected among the top teams from 1661+ registrations at Prayatna
            3.0 National Hackathon. Developed HospiConnect during a 36-hour
            hackathon with applications for citizens, ambulance drivers, and
            hospitals.
          </p>

          <div className="space-y-3">
            <div className="text-neutral-300">✓ Top Team Recognition</div>

            <div className="text-neutral-300">✓ 1661+ Registrations</div>

            <div className="text-neutral-300">✓ 36-Hour Product Build</div>
          </div>
        </div>
      ),
    },

    {
      title: "Leadership",
      content: (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
          <p className="text-white font-bold text-2xl mb-4">
            👨‍💻 Joint Technical Secretary
          </p>

          <p className="mb-6 text-neutral-400 leading-relaxed">
            Contributing to technical initiatives, coordinating events,
            supporting student innovation, and helping organize technical
            activities within the department.
          </p>

          <div className="space-y-3">
            <div className="text-neutral-300">✓ Technical Leadership</div>

            <div className="text-neutral-300">✓ Event Coordination</div>

            <div className="text-neutral-300">✓ Community Contribution</div>
          </div>
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
          A timeline of milestones, competitions, leadership experiences, and
          products that shaped my journey as a developer and aspiring AI
          engineer.
        </p>
      </div>

      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Achievements;
