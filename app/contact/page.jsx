"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfileCard from "@/components/bloc/Components/ProfileCard/ProfileCard";
import Footer from "@/components/footer";
import SoftAurora from "@/components/SoftAurora";

const Page = () => {
  const handleConnectClick = () => {
    window.open("https://www.linkedin.com/in/vedant-kolte/", "_blank");
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Contact Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center">
        {/* Aurora Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={1}
            color1="#f7f7f7"
            color2="#e100ff"
            noiseFrequency={2.5}
            noiseAmplitude={1}
            bandHeight={0.5}
            bandSpread={1}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1}
            enableMouseInteraction
            mouseInfluence={0.25}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-30 text-white max-w-6xl mx-auto">
          {/* Profile Card */}
          <div className="flex-shrink-0">
            <ProfileCard
              name="Vedant"
              title="Web Developer & AI Enthusiast"
              handle="vedant-kolte"
              status="Available"
              contactText="Let's Connect"
              avatarUrl="/ved.png"
              showUserInfo={true}
              enableTilt={false}
              enableMobileTilt={false}
              innerGradient={false}
              behindGradient={false}
              className="filter-none"
              onContactClick={handleConnectClick}
            />
          </div>

          {/* Contact Info */}
          <div className="text-left max-w-md">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>

            <p className="text-gray-300 leading-relaxed text-base mb-6">
              I'm always open to new opportunities, collaborations, freelance
              projects, or just a good tech conversation. Feel free to reach out
              and let's build something amazing together.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/ved-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors text-3xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/vedant-kolte/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors text-3xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
