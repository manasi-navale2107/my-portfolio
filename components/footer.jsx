"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-900 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 pb-16 border-b border-zinc-900">
          <div>
            <span className="text-violet-400 uppercase tracking-[0.3em] text-xs">
              Let's Build Something Amazing
            </span>

            <h2 className="mt-4 text-5xl md:text-6xl font-black">
              Manasi Navale
            </h2>

            <p className="mt-4 text-lg text-zinc-400 max-w-xl">
              AI/ML Engineer and Product Builder creating
              intelligent solutions across Healthcare, AgriTech,
              Research, and Career-Tech.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/manasi-navale2107"
                target="_blank"
                className="p-3 rounded-xl border border-zinc-800 hover:border-violet-500 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/manasinavale07"
                target="_blank"
                className="p-3 rounded-xl border border-zinc-800 hover:border-violet-500 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:navalemanasi@gmail.com"
                className="p-3 rounded-xl border border-zinc-800 hover:border-violet-500 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <div className="text-right">
              <h3 className="text-2xl font-bold">Open for Opportunities</h3>

              <p className="mt-3 text-zinc-400">
                Internships • Freelance • AI Projects • Machine Learning Models
              </p>

              <a
                href="mailto:navalemanasi@gmail.com"
                className="inline-flex items-center gap-2 mt-6 text-violet-400 hover:text-violet-300"
              >
                Get in touch
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="grid md:grid-cols-3 gap-12 py-16">
          <div>
            <h4 className="font-bold mb-5 text-white">Navigation</h4>

            <div className="space-y-3 text-zinc-400">
              <Link href="#about">About</Link>
              <br />
              <Link href="#projects">Projects</Link>
              <br />
              <Link href="#skills">Skills</Link>
              <br />
              <Link href="#achievements">Achievements</Link>
              <br />
              <Link href="#contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-white">Featured Projects</h4>

            <div className="space-y-3 text-zinc-400">
              <div className="space-y-2">
                <Link
                  href="/projects/hospiconnect"
                  className="block hover:text-red-400 transition"
                >
                  🔬 ResearchOS
                </Link>

                <Link
                  href="/projects/credify"
                  className="block hover:text-cyan-400 transition"
                >
                  🏥 GaleMed AI
                </Link>

                <Link
                  href="/projects/algo-animate"
                  className="block hover:text-yellow-400 transition"
                >
                  🎯 GapLens AI
                </Link>

                <Link
                  href="/projects/linkedin-post-generator-ai-agent"
                  className="block hover:text-sky-400 transition"
                >
                  🌾 CropCare AI
                </Link>

                <Link
                  href="/projects/langgraph-persistent-chatbot"
                  className="block hover:text-violet-400 transition"
                >
                  🤖 LangGraph Persistent Chatbot
                </Link>

                <Link
                  href="/projects/youtube-rag-chatbot"
                  className="block hover:text-pink-400 transition"
                >
                  🎥 YouTube RAG Chatbot
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-white">Contact</h4>

            <div className="space-y-3 text-zinc-400">
              <p>📍 Pune, Maharashtra</p>
              <p>📧 navalemanasi@gmail.com</p>
              <p>🤝 Open to Collaboration</p>
              <p>🚀 Looking for AI Opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500">
            © Manasi Navale. All rights reserved.
          </p>

          <p className="text-zinc-600 italic">"From ideas to impact."</p>
        </div>
      </div>
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
