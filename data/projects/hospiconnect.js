export const hospiconnect = {
  slug: "hospiconnect",

  featured: true,

  title: "HospiConnect",

  shortTitle: "Emergency Healthcare Coordination Platform",

  category: "HealthTech",

  year: "2025",

  status: "Hackathon Project",

  tagline:
    "Connecting patients, ambulances, and hospitals through real-time emergency coordination.",

  oneLiner:
    "An AI-powered healthcare platform that reduces emergency response time by intelligently connecting citizens, ambulances, and hospitals.",

  description:
    "HospiConnect is a real-time emergency healthcare coordination platform designed to solve one of the biggest challenges in healthcare emergencies: delayed response time. The platform creates a seamless ecosystem where patients, ambulances, and hospitals communicate through a unified network, ensuring faster treatment and better resource utilization during critical situations.",

  coverImage: "/projects/hospiconnect/cover.png",

  heroImage: "/projects/hospiconnect/hero.png",

  gallery: [
    "/projects/hospiconnect/1.png",
    "/projects/hospiconnect/2.png",
    "/projects/hospiconnect/3.png",
    "/projects/hospiconnect/4.png",
  ],

  github: {
    hospitalDashboard: "https://github.com/ved-2/Prayatna-3.0",

    citizenApp: "https://github.com/ved-2/Citizen-Mobile",

    ambulanceApp: "https://github.com/ved-2/hospi-connect",
  },

  liveDemo: "https://prayatna-3-0.vercel.app/",

  team: {
    name: "Neural Ninjas",

    members: [
      "Vedant Kolte",
      "Mansi Madgule",
      "Rohan Prajapati",
      "Soumitra Kharate",
    ],
  },

  duration: "36 Hour National Level Hackathon",

  problem: {
    title: "The Problem",

    description:
      "During medical emergencies, patients often lose valuable time searching for hospitals with available ICU beds or emergency facilities. Ambulances operate independently, hospitals lack visibility into incoming patients, and there is no centralized communication system connecting all stakeholders.",

    challenges: [
      "No centralized emergency response system",
      "Lack of real-time ICU bed visibility",
      "Poor communication between hospitals",
      "Manual ambulance dispatch process",
      "Delayed patient admissions",
      "Critical loss of response time",
    ],
  },

  solution: {
    title: "The Solution",

    description:
      "HospiConnect creates a connected healthcare ecosystem where patients can instantly trigger emergency requests, hospitals can monitor resources in real time, and ambulances receive intelligent dispatch instructions. The platform leverages AI to analyze symptoms and identify the most suitable healthcare facility.",

    keyPoints: [
      "One-tap SOS emergency requests",
      "Real-time ambulance coordination",
      "AI-powered symptom analysis",
      "Hospital resource monitoring",
      "Live ambulance tracking",
      "Inter-hospital transfer system",
    ],
  },

  features: [
    {
      title: "SOS Emergency System",
      icon: "🚨",
      description:
        "Users can instantly trigger an emergency request and share their location with nearby hospitals and ambulance providers.",
    },

    {
      title: "Smart Hospital Selection",
      icon: "🏥",
      description:
        "Automatically identifies the most suitable hospital based on availability, distance, and medical requirements.",
    },

    {
      title: "Live Ambulance Tracking",
      icon: "🚑",
      description:
        "Track ambulance location and ETA in real time from request to arrival.",
    },

    {
      title: "AI Symptom Analysis",
      icon: "🤖",
      description:
        "Gemini AI analyzes symptoms and helps determine treatment priority and department routing.",
    },

    {
      title: "Hospital Resource Dashboard",
      icon: "📊",
      description:
        "Hospitals can manage ICU beds, emergency resources, and incoming patients from a centralized dashboard.",
    },

    {
      title: "Hospital-to-Hospital Transfer",
      icon: "🔄",
      description:
        "Facilitates seamless patient transfer between hospitals when specialized care is required.",
    },
  ],

  architecture: {
    title: "System Architecture",

    flow: [
      "Citizen Mobile App",
      "Firebase Backend",
      "AI Processing Layer",
      "Hospital Dashboard",
      "Ambulance Mobile App",
    ],

    description:
      "The architecture consists of three interconnected applications: a citizen-facing mobile application, a hospital management dashboard, and an ambulance driver application. Firebase serves as the real-time communication layer, while AI services assist in symptom analysis and intelligent hospital routing.",
  },

  techStack: {
    frontend: ["Flutter", "Next.js", "Tailwind CSS"],

    backend: ["Firebase", "Cloud Functions", "Firestore"],

    ai: ["Gemini AI"],

    tools: ["Google Maps", "Firebase Auth", "Firebase Storage"],
  },

  responsibilities: [
    "System Architecture Design",
    "Frontend Development",
    "Backend Integration",
    "Firebase Database Design",
    "AI Feature Integration",
    "Emergency Workflow Design",
    "Project Presentation",
  ],

  challengesFaced: [
    {
      title: "Real-Time Ambulance Tracking",

      description:
        "Building a reliable tracking system capable of continuously updating ambulance locations with minimal latency.",
    },

    {
      title: "Healthcare Workflow Design",

      description:
        "Designing emergency workflows that accurately reflect real-world healthcare operations.",
    },

    {
      title: "Hospital Resource Synchronization",

      description:
        "Ensuring hospitals could update resource availability instantly without conflicts.",
    },

    {
      title: "Hackathon Time Constraints",

      description:
        "Building three interconnected applications within a 36-hour hackathon environment.",
    },
  ],

  achievements: [
    {
      title: "Wangoes Excellence Award",
      event: "Prayatna 3.0",
    },

    {
      title: "1st Runner-Up",
      event: "Vyoma National Level Prototype Competition",
    },

    {
      title: "2nd Prize",
      event: "5th Regional Conclave",
    },
  ],

  impact: {
    title: "Impact",

    points: [
      "Reduces emergency response time",
      "Improves ICU resource utilization",
      "Enhances hospital coordination",
      "Provides transparency for patients",
      "Improves healthcare accessibility",
    ],
  },

  futureScope: [
    "Government Healthcare Integration",
    "Multi-City Deployment",
    "Voice-Based SOS Activation",
    "Advanced AI Emergency Predictions",
    "National Emergency Response Network",
  ],

  metrics: [
    {
      label: "Hackathon Duration",
      value: "36 Hours",
    },

    {
      label: "Apps Built",
      value: "3",
    },

    {
      label: "Awards Won",
      value: "3",
    },

    {
      label: "Category",
      value: "HealthTech",
    },
  ],

  seo: {
    title: "HospiConnect - Emergency Healthcare Coordination Platform",

    description:
      "AI-powered healthcare coordination platform connecting patients, ambulances, and hospitals through real-time communication and emergency response systems.",
  },
};
