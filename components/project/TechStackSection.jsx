"use client";

export default function TechStackSection({ project }) {
  const defaultTechStack = [
    "Python",
    "Java",
    "LangChain",
    "LangGraph",
    "RAG",
    "Prompt Engineering",
    "LLM Applications",
    "Multi-Agent Systems",
    "Machine Learning",
    "NLP",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "Hugging Face",
    "ChromaDB",
    "Groq",
    "Tavily",
    "Streamlit",
    "Git",
    "GitHub",
    "Linux",
    "Jupyter Notebook",
    "VS Code",
    "Vercel",
  ];

  const techStack = project?.techStack || defaultTechStack;

  return (
    <section className="relative py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-400 uppercase tracking-[0.3em] text-xs">
            Technology Stack
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Built With AI & Data Tools
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            My projects are built using modern AI, Machine Learning, Data
            Analytics, and Generative AI technologies.
          </p>
        </div>

        <div className="mt-16 rounded-[32px] border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl p-12">
          <h3 className="text-2xl font-bold text-white mb-8">
            Complete Stack
          </h3>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
              >
                {tech}
              </div>
            ))}
          </div>

          <p className="mt-8 text-zinc-400 leading-relaxed">
            This stack supports end-to-end AI development, from data cleaning
            and machine learning workflows to RAG systems, multi-agent AI
            applications, dashboards, and deployment-ready project prototypes.
          </p>
        </div>
      </div>
    </section>
  );
}