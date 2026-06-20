"use client";

import React from "react";
import CardSwap, { Card } from "./bloc/Components/CardSwap/CardSwap";
import LogoLoop from "./(components)/LogoLoop";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaLinux,
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
  SiJupyter,
} from "react-icons/si";

const skillGroups = [
  {
    category: "Generative AI",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Prompt Engineering",
      "LLM Applications",
      "Multi-Agent Systems",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "Scikit-Learn",
      "Classification",
      "Regression",
      "NLP",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    category: "Data Analytics",
    items: [
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "EDA",
      "Data Visualization",
      "Streamlit",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "Java", "Data Structures & Algorithms", "OOP"],
  },
  {
    category: "AI Libraries & Tools",
    items: ["Hugging Face", "ChromaDB", "Tavily", "Groq"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Linux", "Jupyter Notebook", "VS Code", "Vercel"],
  },
];

const techLogos = [
  { node: <SiPython className="text-yellow-400" />, title: "Python" },
  { node: <FaJava className="text-red-400" />, title: "Java" },
  { node: <SiOpenai className="text-green-400" />, title: "LLM Applications" },
  { node: <span className="text-green-400 text-5xl">🦜</span>, title: "LangChain" },
  { node: <span className="text-violet-400 text-5xl">🧠</span>, title: "RAG" },
  { node: <span className="text-cyan-400 text-5xl">🤖</span>, title: "AI Agents" },
  { node: <span className="text-orange-400 text-5xl">📊</span>, title: "Data Analytics" },
  { node: <SiJupyter className="text-orange-400" />, title: "Jupyter Notebook" },
  { node: <FaLinux className="text-white" />, title: "Linux" },
  { node: <SiGithub className="text-white" />, title: "GitHub" },
  { node: <SiVercel className="text-white" />, title: "Vercel" },
];

const iconMap = {
  HTML: <FaHtml5 className="text-orange-400" />,
  CSS: <FaCss3Alt className="text-blue-400" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  React: <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "Shadcn UI": <span className="text-white">🎨</span>,

  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <span className="text-white">⚡</span>,
  Strapi: <SiStrapi className="text-indigo-400" />,
  "REST APIs": <span className="text-orange-400">🔗</span>,

  MongoDB: <SiMongodb className="text-green-600" />,
  PostgreSQL: <SiPostgresql className="text-blue-400" />,
  Prisma: <SiPrisma className="text-white" />,

  Python: <SiPython className="text-yellow-400" />,
  Java: <FaJava className="text-red-400" />,
  LangChain: <span className="text-green-400">🦜</span>,
  LangGraph: <span className="text-emerald-400">🕸️</span>,
  RAG: <span className="text-violet-400">🧠</span>,
  "Prompt Engineering": <span className="text-yellow-400">✨</span>,
  "LLM Applications": <SiOpenai className="text-green-400" />,
  "Multi-Agent Systems": <span className="text-cyan-400">🤖</span>,

  "Scikit-Learn": <span className="text-orange-400">📊</span>,
  Classification: <span className="text-blue-400">📌</span>,
  Regression: <span className="text-purple-400">📈</span>,
  NLP: <span className="text-pink-400">💬</span>,
  "Feature Engineering": <span className="text-yellow-400">🛠️</span>,
  "Model Evaluation": <span className="text-green-400">✅</span>,

  Pandas: <span className="text-violet-400">🐼</span>,
  NumPy: <span className="text-blue-400">🔢</span>,
  "Data Cleaning": <span className="text-cyan-400">🧹</span>,
  EDA: <span className="text-orange-400">🔍</span>,
  "Data Visualization": <span className="text-pink-400">📊</span>,
  Streamlit: <span className="text-red-400">🎈</span>,

  "Data Structures & Algorithms": <span className="text-blue-400">🧩</span>,
  OOP: <span className="text-purple-400">🏗️</span>,

  "Hugging Face": <span className="text-yellow-400">🤗</span>,
  ChromaDB: <span className="text-violet-400">🗄️</span>,
  Tavily: <span className="text-cyan-400">🌐</span>,
  Groq: <span className="text-orange-400">⚡</span>,

  Git: <FaGitAlt className="text-red-500" />,
  GitHub: <SiGithub className="text-white" />,
  Linux: <FaLinux className="text-white" />,
  "Jupyter Notebook": <SiJupyter className="text-orange-400" />,
  "VS Code": <span className="text-blue-400">💻</span>,
  Vercel: <SiVercel className="text-white" />,
  Vite: <SiVite className="text-purple-400" />,
  Figma: <SiFigma className="text-pink-400" />,
};

const Skills = () => {
  return (
    <section className="min-h-screen py-20 px-6 text-white mb-10">
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
          ariaLabel="AI ML Tech Stack"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="uppercase tracking-[0.4em] text-violet-400 text-sm">
            Tech Stack
          </p>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            AI, ML & Data
            <br />
            Technologies
            <br />
            I Work With.
          </h2>

          <p className="text-gray-400 text-lg max-w-xl">
            From Generative AI and RAG systems to machine learning models,
            data analytics dashboards, and multi-agent AI workflows, these are
            the technologies I use to build practical AI-powered solutions.
          </p>
        </div>

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