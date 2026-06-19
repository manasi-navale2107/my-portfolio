"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Terminal } from "./ui/terminal";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

const GithubActivity = () => {
  return (
    <section className="relative min-h-screen bg-black py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#5227FF]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-20">
          <p className="uppercase tracking-[0.4em] text-violet-400 text-sm mb-4">
            GitHub Activity
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Code Never
            <br />
            Sleeps.
          </h2>
        </div>

        {/* Snake */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
          <img
            src="https://raw.githubusercontent.com/ved-2/portfolio/output/github-snake.svg"
            alt="GitHub Snake"
            className="w-full"
          />
        </div>

        {/* Github Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-3xl  border-white/10 bg-black overflow-hidden">
            <Terminal
              commands={[
                "whoami",
                "skills",
                "featured_projects",
                "achievements",
                "current_goal",
              ]}
              outputs={{
                0: ["Vedant Kolte", "AI Engineer • Full Stack Developer"],

                1: [
                  "Python",
                  "Java",
                  "JavaScript",
                  "Machine Learning",
                  "GenAI",
                  "RAG",
                  "LangChain",
                  "Next.js",
                  "Flutter",
                ],

                2: [
                  "🚀 Aurenix AI",
                  "🏠 HostelNest",
                  "🌾 Krishi Mitra",
                  "🚑 HospiConnect",
                  "💳 Credify",
                ],

                3: [
                  "🥇 AI Summit 2025 Winner",
                  "🏆 Prayatna 3.0 Excellence Award",
                  "🥈 Vyoma National Prototype Competition",
                  "🥈 5th Regional Project Conclave",
                ],

                4: ["Building AI products that solve real-world problems."],
              }}
              typingSpeed={35}
              delayBetweenCommands={1000}
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-4">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=ved-2&theme=tokyonight&hide_border=true&background=000000"
              alt="GitHub Streak"
              className="w-full"
            />
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Contribution Graph
          </h3>

          <div className="flex justify-center overflow-x-auto">
            <GitHubCalendar
              username="ved-2"
              colorScheme="dark"
              fontSize={15}
              blockSize={15}
              blockMargin={5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
