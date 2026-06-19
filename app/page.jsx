"use client";
import Aboutme from "@/components/Aboutme";
import Achievements from "@/components/Achievements";
import ClickSpark from "@/components/bloc/Animations/ClickSpark/ClickSpark";
import Footer from "@/components/footer";
import GithubActivity from "@/components/GithubActivity";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills-tech";
import WhatIDo from "@/components/WhatIDo";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Hero />
        <Aboutme />
        <WhatIDo />
        <Skills />
        <Achievements />
        <GithubActivity />
        <Projects />
        <Footer />
      </ClickSpark>
    </div>
  );
}
