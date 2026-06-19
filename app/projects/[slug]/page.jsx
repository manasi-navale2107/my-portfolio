"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectHero from "@/components/project/ProjectHero";
import ProblemSection from "@/components/project/ProblemSection";
import SolutionSection from "@/components/project/SolutionSection";
import FeaturesSection from "@/components/project/FeaturesSection";
import ArchitectureSection from "@/components/project/ArchitectureSection";
import TechStackSection from "@/components/project/TechStackSection";
import ChallengesSection from "@/components/project/ChallengesSection";
import ScreenshotsSection from "@/components/project/ScreenshotsSection";
import ImpactSection from "@/components/project/ImpactSection";

export default function ProjectPage({ params }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ProjectHero project={project} />
      <ProblemSection project={project} />
      <SolutionSection project={project} />
      <FeaturesSection project={project} />
      <ArchitectureSection project={project} />
      <TechStackSection project={project} />
      <ChallengesSection project={project} />
    </main>
  );
}
