import { hospiconnect as hospiconnectData } from "./projects/hospiconnect";
import { hostelnest as hostelnestData } from "./projects/hostelnest";
import { krishiMitra as krishiMitraData } from "./projects/krishi-mitra";
import { credify as credifyData } from "./projects/credify";
import { dprconnect as dprconnectData } from "./projects/dprconnect";
import { algoAnimate as algoAnimateData } from "./projects/algo-animate";
import { forestWeatherIndex as forestWeatherIndexData } from "./projects/forest-weather-index";
import { globeTrotter as globetrotterData } from "./projects/globetrotter";
import { movieBooking as movieBookingData } from "./projects/movie-booking";
import { networkIntrusionDetection as networkIntrusionDetectionData } from "./projects/network-intrusion-detection";
import { aurenixAI as aurenixAIData } from "./projects/aurenix-ai";

// New AI Projects
import { linkedinPostGeneratorAI as linkedinPostGeneratorAIData } from "./projects/linkedin-post-generator-ai-agent";
import { langgraphPersistentChatbot as langgraphPersistentChatbotData } from "./projects/chatbot";
import { youtubeRAGChatbot as youtubeRAGChatbotData } from "./projects/youtube-rag-chatbot";
import { multimodalRAGSystem as multimodalRAGSystemData } from "./projects/multimodal-rag-system";

// Gradient colors for each project
const gradients = {
  hospiconnect: "from-red-500 via-pink-500 to-rose-500",
  hostelnest: "from-orange-500 via-red-500 to-pink-500",
  "krishi-mitra": "from-green-500 via-emerald-500 to-lime-500",
  credify: "from-cyan-500 via-blue-500 to-indigo-500",
  dprconnect: "from-purple-500 via-violet-500 to-indigo-500",
  "algo-animate": "from-yellow-500 via-orange-500 to-red-500",
  "eco-guard": "from-teal-500 via-green-500 to-emerald-500",
  "forest-weather-index": "from-green-600 via-emerald-500 to-teal-500",
  globetrotter: "from-sky-500 via-blue-500 to-violet-500",
  "movie-booking": "from-fuchsia-500 via-pink-500 to-rose-500",
  "network-intrusion-detection": "from-red-600 via-orange-500 to-yellow-500",
  "aurenix-ai": "from-violet-500 via-fuchsia-500 to-pink-500",

  // New Projects
  "linkedin-post-generator-ai-agent": "from-blue-600 via-sky-500 to-cyan-500",

  "langgraph-persistent-chatbot":
    "from-indigo-600 via-violet-500 to-purple-500",

  "youtube-rag-chatbot": "from-red-600 via-pink-500 to-fuchsia-500",

  "multimodal-rag-system": "from-emerald-500 via-teal-500 to-cyan-500",
};

// Emojis for each project
const emojis = {
  hospiconnect: "🚑",
  hostelnest: "🏠",
  "krishi-mitra": "🌾",
  credify: "💳",
  dprconnect: "🏛️",
  "algo-animate": "🎯",
  "eco-guard": "🌍",
  "forest-weather-index": "🌲",
  globetrotter: "✈️",
  "movie-booking": "🎬",
  "network-intrusion-detection": "🔒",
  "aurenix-ai": "🚀",

  // New Projects
  "linkedin-post-generator-ai-agent": "✍️",
  "langgraph-persistent-chatbot": "🤖",
  "youtube-rag-chatbot": "🎥",
  "multimodal-rag-system": "🧠",
};

// Normalize project data to match the expected structure
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
      : projectData.github?.ambulanceApp ||
        projectData.github?.frontend ||
        projectData.github?.web ||
        projectData.github?.repository ||
        Object.values(projectData.github)[0] ||
        "#",

  demo: projectData.liveDemo || "#",

  gradient:
    gradients[projectData.slug] ||
    "from-violet-500 via-purple-500 to-indigo-500",

  // Flatten techStack into a single array
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

  // Map features
  features:
    projectData.features?.map((f) => ({
      title: f.title,
      description: f.description,
    })) || [],

  // Architecture Flow
  architecture: projectData.architecture?.flow || [],

  // Challenges
  challenges: projectData.challengesFaced?.map((c) => c.title) || [],

  // Impact
  impact:
    projectData.slug === "hospiconnect"
      ? projectData.achievements?.map((a) => `${a.title} — ${a.event}`) || []
      : [],

  // Screenshots
  screenshots: projectData.gallery || [],

  // Problem Section
  problem: {
    title: projectData.problem?.title || "The Problem",
    description: projectData.problem?.description || "",
  },

  // Solution Section
  solution: {
    title: projectData.solution?.title || "The Solution",
    description: projectData.solution?.description || "",
  },
});

export const projects = [
  normalizeProject(aurenixAIData),

  // AI / GenAI Projects
  normalizeProject(linkedinPostGeneratorAIData),
  normalizeProject(langgraphPersistentChatbotData),
  normalizeProject(youtubeRAGChatbotData),
  normalizeProject(multimodalRAGSystemData),

  // Existing Projects
  normalizeProject(hospiconnectData),
  normalizeProject(hostelnestData),
  normalizeProject(krishiMitraData),
  normalizeProject(credifyData),
  normalizeProject(dprconnectData),
  normalizeProject(algoAnimateData),
  normalizeProject(forestWeatherIndexData),
  normalizeProject(globetrotterData),
  normalizeProject(movieBookingData),
  normalizeProject(networkIntrusionDetectionData),
];
