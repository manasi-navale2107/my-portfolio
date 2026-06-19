"use client";

import React from "react";
import CardSwap, { Card } from "./bloc/Components/CardSwap/CardSwap";
import LogoLoop from "./(components)/LogoLoop";

// Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCube,
} from "react-icons/fa";

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiStrapi,
  SiPython,
  SiVite,
  SiFigma,
  SiPostgresql,
  SiOpenai,
  SiGithub,
  SiVercel,
  SiNodedotjs,
} from "react-icons/si";

const skillGroups = [
  {
    category: "AI & LLM Engineering",
    items: ["LangChain", "RAG", "AI Agents", "Prompt Engineering", "Python"],
  },
  {
    category: "Frontend Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express", "REST APIs", "Prisma", "Strapi"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    category: "Design & Tools",
    items: ["Figma", "Git", "GitHub", "Vercel", "Vite", "Spline"],
  },
];

const techLogos = [
  { node: <SiReact className="text-cyan-400" />, title: "React" },
  { node: <SiNextdotjs className="text-white" />, title: "Next.js" },
  { node: <SiTypescript className="text-blue-500" />, title: "TypeScript" },
  { node: <SiTailwindcss className="text-cyan-400" />, title: "Tailwind CSS" },
  { node: <SiNodedotjs className="text-green-500" />, title: "Node.js" },
  { node: <SiMongodb className="text-green-600" />, title: "MongoDB" },
  { node: <SiPostgresql className="text-blue-400" />, title: "PostgreSQL" },
  { node: <SiPrisma className="text-white" />, title: "Prisma" },
  { node: <SiOpenai className="text-green-400" />, title: "OpenAI" },
  { node: <SiPython className="text-yellow-400" />, title: "Python" },
  { node: <SiGithub className="text-white" />, title: "GitHub" },
  { node: <SiVercel className="text-white" />, title: "Vercel" },
];

const iconMap = {
  // Frontend
  HTML: <FaHtml5 className="text-orange-400" />,
  CSS: <FaCss3Alt className="text-blue-400" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  React: <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "Shadcn UI": <span className="text-white">🎨</span>,

  // Backend
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <span className="text-white">⚡</span>,
  Strapi: <SiStrapi className="text-indigo-400" />,
  "REST APIs": <span className="text-orange-400">🔗</span>,

  // Databases
  MongoDB: <SiMongodb className="text-green-600" />,
  PostgreSQL: <SiPostgresql className="text-blue-400" />,
  Prisma: <SiPrisma className="text-white" />,

  // AI
  Python: <SiPython className="text-yellow-400" />,
  LangChain: <span className="text-green-400">🦜</span>,
  RAG: <span className="text-violet-400">🧠</span>,
  "AI Agents": <span className="text-cyan-400">🤖</span>,
  "Prompt Engineering": <span className="text-yellow-400">✨</span>,
  "Gemini API": <span className="text-blue-400">♊</span>,
  "OpenAI API": <SiOpenai className="text-green-400" />,

  // Tools
  Git: <FaGitAlt className="text-red-500" />,
  GitHub: <SiGithub className="text-white" />,
  Vercel: <SiVercel className="text-white" />,
  Vite: <SiVite className="text-purple-400" />,
  Figma: <SiFigma className="text-pink-400" />,
  Spline: <FaCube className="text-blue-300" />,
};

const Skills = () => {
  return (
    <section className="min-h-screen py-20 px-6 text-white mb-10">
      {/* Logo Loop */}
      <div className="max-w-7xl mx-auto mb-24">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={50}
          gap={60}
          hoverSpeed={20}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Tech Stack"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <p className="uppercase tracking-[0.4em] text-violet-400 text-sm">
            Tech Stack
          </p>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Technologies I Use
            <br />
            To Bring Ideas
            <br />
            To Life.
          </h2>

          <p className="text-gray-400 text-lg max-w-xl">
            From AI-powered applications to scalable full-stack products, these
            are the technologies I use to build, deploy and innovate.
          </p>
        </div>

        {/* Right Side */}
        <div className="h-[600px] relative">
          <CardSwap
            cardDistance={80}
            verticalDistance={90}
            delay={5000}
            pauseOnHover={false}
          >
            {skillGroups.map((group, index) => (
              <Card key={index}>
                <div className="py-2">
                  <h3 className="text-xl font-semibold mb-2 text-white py-1 px-3">
                    {group.category}
                  </h3>

                  <hr className="border-t border-gray-600" />

                  <ul className="space-y-3 text-sm py-4 px-3">
                    {group.items.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <span className="text-lg">
                          {iconMap[skill] || "📦"}
                        </span>

                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Skills;
