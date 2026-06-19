"use client";

import Image from "next/image";
import { useState } from "react";

export default function ScreenshotsSection({ project }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="relative py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-pink-400 uppercase tracking-[0.3em] text-xs">
            Visual Tour
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            See It In Action
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Explore the interface and experience how the application delivers on
            its promises.
          </p>
        </div>

        {/* Screenshot Gallery */}
        <div className="mt-20">
          {/* Main Screenshot */}
          <div className="rounded-[32px] border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl overflow-hidden">
            <div className="relative aspect-video bg-zinc-900 flex items-center justify-center">
              <Image
                src={
                  project.screenshots[selectedIndex] ||
                  "/projects/placeholder.png"
                }
                alt={`${project.title} screenshot ${selectedIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Thumbnail Navigation */}
          {project.screenshots.length > 1 && (
            <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
              {project.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedIndex === index
                      ? "border-pink-500 ring-2 ring-pink-500/50"
                      : "border-zinc-700 hover:border-zinc-600"
                  }`}
                >
                  <Image
                    src={screenshot}
                    alt={`Thumbnail ${index + 1}`}
                    width={120}
                    height={90}
                    className="object-cover w-[120px] h-[90px]"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white mb-3">Intuitive UI</h3>

            <p className="text-zinc-400 leading-relaxed">
              Clean, modern interface designed with user experience at its core.
              Every interaction is purposeful and efficient.
            </p>
          </div>

          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white mb-3">
              Real-time Updates
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Live data synchronization ensures users always see current
              information without manual refreshes.
            </p>
          </div>

          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white mb-3">
              Mobile Responsive
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Optimized for all devices—from smartphones to tablets to desktops.
              Seamless experience everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
