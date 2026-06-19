"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md px-6 py-4 flex items-center justify-between w-[90%] max-w-3xl shadow-md">
      <div className="text-white font-semibold flex items-center gap-2">
        <span className="text-lg">
          <a href="/" className="hover:text-white transition">
            Portfolio
          </a>
        </span>
      </div>
      <nav className="flex items-center gap-6 text-sm text-white/80">
        <a href="/" className="hover:text-white transition">
          Home
        </a>
        <a href="/projects" className="hover:text-white transition">
          Projects
        </a>
        {/* <a
          href="https://drive.google.com/file/d/180xk-AXkxQDwd1_CV_fAsDImGbYka4td/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Resume
        </a> */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 hover:text-white transition"
          >
            Resume
            <ChevronDown size={16} />
          </button>

          {open && (
            <div className="absolute top-10 right-0 w-56 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-2">
              <a
                href="/resume/Vedant_Kolte_Resume_AI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl px-4 py-3 hover:bg-white/10 transition"
              >
                AI Engineer Resume
              </a>
              <a
                href="/resume/Vedant_Kolte_Resume_Web_Dev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl px-4 py-3 hover:bg-white/10 transition"
              >
                Full Stack Resume
              </a>
            </div>
          )}
        </div>
        <a href="/contact" className="hover:text-white transition">
          Contact
        </a>
      </nav>
    </header>
  );
}
