import { researchOS as researchOSData } from "./projects/researchos";
import { galeMedAI as galeMedAIData } from "./projects/galemed-ai";
import { gapLensAI as gapLensAIData } from "./projects/gaplens-ai";
import { cropCareAI as cropCareAIData } from "./projects/cropcare-ai";
import { green500Dashboard as green500DashboardData } from "./projects/green500-dashboard";

const gradients = {
  researchos: "from-violet-500 via-purple-500 to-fuchsia-500",
  "galemed-ai": "from-red-500 via-pink-500 to-rose-500",
  "gaplens-ai": "from-cyan-500 via-blue-500 to-indigo-500",
  "cropcare-ai": "from-green-500 via-emerald-500 to-lime-500",
  "green500-dashboard": "from-emerald-500 via-teal-500 to-cyan-500",
};

const emojis = {
  researchos: "🤖",
  "galemed-ai": "🩺",
  "gaplens-ai": "📊",
  "cropcare-ai": "🌱",
  "green500-dashboard": "🖥️",
};

const normalizeProject = (projectData) => ({
  slug: projectData.slug,
  title: projectData.title,
  category: projectData.category,
  emoji: emojis[projectData.slug] || "✨",
  tagline: projectData.tagline,
  description: projectData.description,
  heroImage: projectData.heroImage,

  github:
    typeof projectData.github === "string"
      ? projectData.github
      : projectData.github?.repository || "#",

  demo: projectData.liveDemo || projectData.demo || "#",

  gradient:
    gradients[projectData.slug] ||
    "from-violet-500 via-purple-500 to-indigo-500",

  techStack: projectData.techStack?.frontend
    ? [
        ...(Array.isArray(projectData.techStack.frontend)
          ? projectData.techStack.frontend
          : []),
        ...(Array.isArray(projectData.techStack.backend)
          ? projectData.techStack.backend
          : []),
        ...(Array.isArray(projectData.techStack.ai)
          ? projectData.techStack.ai
          : []),
        ...(Array.isArray(projectData.techStack.tools)
          ? projectData.techStack.tools
          : []),
      ]
    : Array.isArray(projectData.techStack)
      ? projectData.techStack
      : [],

  features:
    projectData.features?.map((f) => ({
      title: f.title,
      description: f.description,
    })) || [],

  architecture: projectData.architecture?.flow || projectData.architecture || [],

  challenges: projectData.challengesFaced?.map((c) => c.title) || [],

  impact:
    projectData.achievements?.map((a) =>
      a.event ? `${a.title} — ${a.event}` : a.title
    ) || [],

  screenshots: projectData.gallery || projectData.screenshots || [],

  problem: {
    title: projectData.problem?.title || "The Problem",
    description: projectData.problem?.description || "",
  },

  solution: {
    title: projectData.solution?.title || "The Solution",
    description: projectData.solution?.description || "",
  },
});

export const projects = [
  normalizeProject(researchOSData),
  normalizeProject(galeMedAIData),
  normalizeProject(gapLensAIData),
  normalizeProject(cropCareAIData),
  normalizeProject(green500DashboardData),
];

export default projects;