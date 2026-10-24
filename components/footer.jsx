
"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-zinc-900 bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 pb-16 border-b border-zinc-900">

          {/* Personal Introduction */}
          <div>
            <span className="text-violet-400 uppercase tracking-[0.3em] text-xs">
              Let's Build Something Amazing
            </span>

            <h2 className="mt-4 text-5xl md:text-6xl font-black">
              Manasi Navale
            </h2>

            <p className="mt-4 text-lg text-zinc-400 max-w-xl">
              Artificial Intelligence & Data Science undergraduate
              passionate about Data Engineering, Machine Learning,
              and Agentic AI. Building intelligent applications,
              multi-agent systems, and end-to-end data pipelines
              that transform ideas and data into meaningful
              real-world solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/manasi-navale2107"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl border border-zinc-800 hover:border-violet-500 hover:text-violet-400 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/manasinavale07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl border border-zinc-800 hover:border-violet-500 hover:text-violet-400 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:navalemanasi@gmail.com"
                aria-label="Send Email"
                className="p-3 rounded-xl border border-zinc-800 hover:border-violet-500 hover:text-violet-400 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Opportunities */}
          <div className="flex items-center justify-start lg:justify-end">
            <div className="text-left lg:text-right">
              <h3 className="text-2xl font-bold">
                Open for Opportunities
              </h3>

              <p className="mt-3 text-zinc-400 max-w-md">
                Data Engineering • AI/ML Engineering •
                Generative AI • Agentic AI
              </p>

              <p className="mt-3 text-zinc-500 text-sm">
                Internships • Entry-Level Roles •
                Technical Collaborations
              </p>

              <a
                href="mailto:navalemanasi@gmail.com"
                className="inline-flex items-center gap-2 mt-6 text-violet-400 hover:text-violet-300 transition"
              >
                Get in Touch
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid md:grid-cols-3 gap-12 py-16">

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-5 text-white">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 text-zinc-400">
              <Link
                href="/#about"
                className="hover:text-violet-400 transition"
              >
                About
              </Link>

              <Link
                href="/#projects"
                className="hover:text-violet-400 transition"
              >
                Projects
              </Link>

              <Link
                href="/#skills"
                className="hover:text-violet-400 transition"
              >
                Skills
              </Link>

              <Link
                href="/#achievements"
                className="hover:text-violet-400 transition"
              >
                Achievements
              </Link>

              <Link
                href="/#contact"
                className="hover:text-violet-400 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="font-bold mb-5 text-white">
              Featured Projects
            </h4>

            <div className="flex flex-col gap-3 text-zinc-400">

              <Link
                href="/projects/querymind-ai"
                className="block hover:text-violet-400 transition"
              >
                🧠 QueryMind AI
              </Link>

              <Link
                href="/projects/retailflow"
                className="block hover:text-cyan-400 transition"
              >
                🔄 RetailFlow
              </Link>

              <Link
                href="/projects/researchos"
                className="block hover:text-purple-400 transition"
              >
                🤖 ResearchOS
              </Link>

              <Link
                href="/projects/living-rag"
                className="block hover:text-pink-400 transition"
              >
                📚 Living RAG
              </Link>

              <Link
                href="/projects/ridesense-ai"
                className="block hover:text-orange-400 transition"
              >
                🚕 RideSense AI
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 mt-3 text-violet-400 hover:text-violet-300 transition"
              >
                Explore All Projects
                <ArrowUpRight size={16} />
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-white">
              Contact & Collaboration
            </h4>

            <div className="space-y-4 text-zinc-400">
              <p>📍 Pune, Maharashtra, India</p>

              <a
                href="mailto:navalemanasi@gmail.com"
                className="block break-all hover:text-violet-400 transition"
              >
                📧 navalemanasi@gmail.com
              </a>

              <p>
                🎓 B.E. Artificial Intelligence &
                Data Science | 2027
              </p>

              <p>
                🤝 Open to Technical Collaboration
              </p>

              <p>
                🚀 Exploring Data Engineering,
                AI/ML & Agentic AI Opportunities
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Manasi Navale.
            All rights reserved.
          </p>

          <p className="text-zinc-600 italic text-sm">
            "Turning Data into Intelligence,
            and Ideas into Impact."
          </p>

        </div>
      </div>

      {/* Space for Background Text */}
      <div className="mb-60"></div>

      {/* Huge Background Text */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden">
        <h1
          className="
            text-center
            text-[18vw]
            font-black
            leading-none
            tracking-tight
            text-transparent
            bg-clip-text
            bg-gradient-to-b
            from-violet-500/20
            via-violet-500/10
            to-transparent
          "
        >
          Manasi
        </h1>
      </div>

    </footer>
  );
}
