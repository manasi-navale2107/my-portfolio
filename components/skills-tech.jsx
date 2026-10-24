
"use client";

import React from "react";
import CardSwap, { Card } from "./bloc/Components/CardSwap/CardSwap";
import LogoLoop from "./(components)/LogoLoop";

import {
  FaJava,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiPython,
  SiGithub,
  SiJupyter,
  SiMysql,
  SiDocker,
  SiApachespark,
  SiGooglecloud,
  SiFastapi,
  SiPandas,
} from "react-icons/si";

// ================= SKILL GROUPS =================

const skillGroups = [
  {
    category: "Data Engineering",
    items: [
      "SQL",
      "ETL Pipelines",
      "Data Warehousing",
      "HDFS",
      "MapReduce",
      "Apache Hive",
      "Apache Spark",
      "PySpark",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Google Cloud Storage",
      "BigQuery",
      "Docker",
      "Linux",
    ],
  },
  {
    category: "Agentic AI & Generative AI",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Multi-Agent Systems",
      "Text-to-SQL",
      "RAG Evaluation",
      "LLM Applications",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "Scikit-Learn",
      "Classification",
      "Regression",
      "XGBoost",
      "Feature Engineering",
      "Imbalanced Data Handling",
      "Model Evaluation",
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      "FastAPI",
      "REST APIs",
      "SQLAlchemy",
      "MySQL",
      "Pinecone",
      "ChromaDB",
    ],
  },
  {
    category: "Data Analytics",
    items: [
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "EDA",
      "Power BI",
      "Streamlit",
    ],
  },
  {
    category: "Programming",
    items: [
      "Python",
      "Java",
      "Data Structures & Algorithms",
      "OOP",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Groq",
      "Tavily",
      "Hugging Face",
    ],
  },
];

// ================= TECH LOGOS =================

const techLogos = [
  {
    node: <SiPython className="text-yellow-400" />,
    title: "Python",
  },
  {
    node: <FaJava className="text-red-400" />,
    title: "Java",
  },
  {
    node: <SiMysql className="text-blue-400" />,
    title: "MySQL",
  },
  {
    node: <SiApachespark className="text-orange-400" />,
    title: "Apache Spark",
  },
  {
    node: <span className="text-orange-400 text-5xl">⚡</span>,
    title: "PySpark",
  },
  {
    node: <span className="text-yellow-400 text-5xl">🐘</span>,
    title: "Hadoop",
  },
  {
    node: <SiGooglecloud className="text-blue-400" />,
    title: "Google Cloud",
  },
  {
    node: <span className="text-cyan-400 text-5xl">📊</span>,
    title: "BigQuery",
  },
  {
    node: <SiDocker className="text-blue-400" />,
    title: "Docker",
  },
  {
    node: <SiFastapi className="text-teal-400" />,
    title: "FastAPI",
  },
  {
    node: <span className="text-green-400 text-5xl">🦜</span>,
    title: "LangChain",
  },
  {
    node: <span className="text-emerald-400 text-5xl">🕸️</span>,
    title: "LangGraph",
  },
  {
    node: <span className="text-violet-400 text-5xl">🧠</span>,
    title: "RAG",
  },
  {
    node: <span className="text-cyan-400 text-5xl">🤖</span>,
    title: "AI Agents",
  },
  {
    node: <SiPandas className="text-purple-400" />,
    title: "Pandas",
  },
  {
    node: <SiJupyter className="text-orange-400" />,
    title: "Jupyter Notebook",
  },
  {
    node: <FaLinux className="text-white" />,
    title: "Linux",
  },
  {
    node: <SiGithub className="text-white" />,
    title: "GitHub",
  },
];

// ================= SKILL ICON MAP =================

const iconMap = {
  // Data Engineering
  SQL: <span className="text-blue-400">🗄️</span>,
  "ETL Pipelines": <span className="text-cyan-400">🔄</span>,
  "Data Warehousing": <span className="text-purple-400">🏢</span>,
  HDFS: <span className="text-yellow-400">🐘</span>,
  MapReduce: <span className="text-orange-400">⚙️</span>,
  "Apache Hive": <span className="text-yellow-400">🐝</span>,
  "Apache Spark": (
    <SiApachespark className="text-orange-400" />
  ),
  PySpark: <span className="text-orange-400">⚡</span>,

  // Cloud & DevOps
  AWS: <span className="text-orange-400">☁️</span>,
  "Google Cloud Storage": (
    <SiGooglecloud className="text-blue-400" />
  ),
  BigQuery: <span className="text-cyan-400">📊</span>,
  Docker: <SiDocker className="text-blue-400" />,
  Linux: <FaLinux className="text-white" />,

  // Agentic AI & Generative AI
  LangChain: <span className="text-green-400">🦜</span>,
  LangGraph: <span className="text-emerald-400">🕸️</span>,
  RAG: <span className="text-violet-400">🧠</span>,
  "Multi-Agent Systems": (
    <span className="text-cyan-400">🤖</span>
  ),
  "Text-to-SQL": <span className="text-blue-400">💬</span>,
  "RAG Evaluation": <span className="text-green-400">✅</span>,
  "LLM Applications": <span className="text-purple-400">✨</span>,

  // Machine Learning
  "Scikit-Learn": <span className="text-orange-400">📊</span>,
  Classification: <span className="text-blue-400">📌</span>,
  Regression: <span className="text-purple-400">📈</span>,
  XGBoost: <span className="text-yellow-400">🚀</span>,
  "Feature Engineering": (
    <span className="text-yellow-400">🛠️</span>
  ),
  "Imbalanced Data Handling": (
    <span className="text-pink-400">⚖️</span>
  ),
  "Model Evaluation": (
    <span className="text-green-400">✅</span>
  ),

  // Backend & Databases
  FastAPI: <SiFastapi className="text-teal-400" />,
  "REST APIs": <span className="text-orange-400">🔗</span>,
  SQLAlchemy: <span className="text-red-400">🔧</span>,
  MySQL: <SiMysql className="text-blue-400" />,
  Pinecone: <span className="text-green-400">🌲</span>,
  ChromaDB: <span className="text-violet-400">🗄️</span>,

  // Data Analytics
  Pandas: <SiPandas className="text-purple-400" />,
  NumPy: <span className="text-blue-400">🔢</span>,
  "Data Cleaning": <span className="text-cyan-400">🧹</span>,
  EDA: <span className="text-orange-400">🔍</span>,
  "Power BI": <span className="text-yellow-400">📊</span>,
  Streamlit: <span className="text-red-400">🎈</span>,

  // Programming
  Python: <SiPython className="text-yellow-400" />,
  Java: <FaJava className="text-red-400" />,
  "Data Structures & Algorithms": (
    <span className="text-blue-400">🧩</span>
  ),
  OOP: <span className="text-purple-400">🏗️</span>,

  // Tools & Platforms
  Git: <FaGitAlt className="text-red-500" />,
  GitHub: <SiGithub className="text-white" />,
  "VS Code": <span className="text-blue-400">💻</span>,
  "Jupyter Notebook": (
    <SiJupyter className="text-orange-400" />
  ),
  Groq: <span className="text-orange-400">⚡</span>,
  Tavily: <span className="text-cyan-400">🌐</span>,
  "Hugging Face": <span className="text-yellow-400">🤗</span>,
};

// ================= SKILLS COMPONENT =================

const Skills = () => {
  return (
    <section className="min-h-screen py-20 px-6 text-white mb-10">

      {/* Scrolling Technology Logos */}
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
          ariaLabel="AI ML and Data Engineering Tech Stack"
        />
      </div>

      {/* Main Skills Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="space-y-6">
          <p className="uppercase tracking-[0.4em] text-violet-400 text-sm">
            Tech Stack
          </p>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            AI, ML & Data
            <br />
            Engineering
            <br />
            Technologies.
          </h2>

          <p className="text-gray-400 text-lg max-w-xl">
            My technical expertise spans Data Engineering,
            Machine Learning, and Agentic AI. From building
            cloud-based ETL pipelines and working with SQL,
            BigQuery, and PySpark to developing multi-agent
            AI systems, RAG applications, and predictive
            machine learning models, I enjoy transforming
            raw data and complex ideas into practical,
            real-world solutions.
          </p>
        </div>

        {/* Right Side - Animated Skill Cards */}
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

                  {/* Card Heading */}
                  <h3 className="text-xl font-semibold mb-2 text-white py-1 px-3">
                    {group.category}
                  </h3>

                  <hr className="border-t border-gray-600" />

                  {/* Skills List */}
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
