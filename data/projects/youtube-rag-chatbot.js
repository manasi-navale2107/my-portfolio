export const youtubeRAGChatbot = {
  slug: "youtube-rag-chatbot",

  featured: true,

  title: "YouTube RAG Chatbot",

  shortTitle: "YouTube Video Q&A Assistant",

  category: "Generative AI",

  year: "2025",

  status: "RAG Application",

  tagline:
    "Ask questions about any YouTube video and get AI-powered answers using Retrieval-Augmented Generation.",

  oneLiner:
    "A RAG-based chatbot that analyzes YouTube video transcripts, retrieves relevant context, and generates intelligent answers using Gemini and FAISS.",

  description:
    "YouTube RAG Chatbot is an AI-powered application that enables users to interact with YouTube video content through natural language conversations. The system extracts video transcripts, converts them into embeddings, stores them in a FAISS vector database, and uses Retrieval-Augmented Generation (RAG) to answer user questions with contextual accuracy. Built using Streamlit, LangChain, Google Generative AI, and FAISS, the platform transforms long-form video content into an interactive knowledge assistant.",

  coverImage: "/projects/youtube-rag/cover.png",

  heroImage: "/projects/youtube-rag/hero.png",

  gallery: [
    "/projects/youtube-rag/1.png",
    "/projects/youtube-rag/2.png",
    "/projects/youtube-rag/3.png",
    "/projects/youtube-rag/4.png",
  ],

  github: {
    repository: "https://github.com/ved-2/yt-chatbot-rag",
  },

  liveDemo: null,

  team: {
    name: "Personal Project",

    members: ["Vedant Kolte"],
  },

  duration: "Self Learning + RAG Project",

  problem: {
    title: "The Problem",

    description:
      "YouTube videos often contain valuable educational and technical information, but users must watch lengthy videos to find specific answers. Searching through hours of content manually is inefficient and time-consuming.",

    challenges: [
      "Long video durations",
      "Difficulty locating specific information",
      "Unstructured video content",
      "Limited searchability within videos",
      "Manual content consumption",
      "Context retrieval from large transcripts",
    ],
  },

  solution: {
    title: "The Solution",

    description:
      "The application converts YouTube transcripts into searchable knowledge bases using vector embeddings and FAISS. Users can ask questions in natural language, and the system retrieves the most relevant transcript chunks before generating context-aware answers using Gemini.",

    keyPoints: [
      "Transcript-based knowledge extraction",
      "Retrieval-Augmented Generation",
      "Semantic search with embeddings",
      "FAISS vector storage",
      "Natural language question answering",
      "Interactive chat experience",
    ],
  },

  features: [
    {
      title: "YouTube Transcript Processing",
      icon: "🎬",
      description:
        "Automatically fetches and processes transcripts from YouTube videos.",
    },

    {
      title: "Semantic Search",
      icon: "🔍",
      description:
        "Uses vector embeddings and FAISS similarity search to retrieve relevant content.",
    },

    {
      title: "RAG Pipeline",
      icon: "🧠",
      description:
        "Combines retrieval and generation for context-aware responses.",
    },

    {
      title: "AI-Powered Answers",
      icon: "🤖",
      description:
        "Generates intelligent responses using Google's Gemini models.",
    },

    {
      title: "Interactive Chat Interface",
      icon: "💬",
      description:
        "Provides a user-friendly Streamlit chat experience for video exploration.",
    },

    {
      title: "Customizable Retrieval",
      icon: "⚙️",
      description:
        "Allows adjustment of chunk size, overlap, retrieval count, and temperature settings.",
    },

    {
      title: "Chat History",
      icon: "📜",
      description:
        "Maintains conversation context throughout the user session.",
    },

    {
      title: "Fast Vector Search",
      icon: "⚡",
      description:
        "Uses FAISS indexing for efficient retrieval from large transcripts.",
    },
  ],

  architecture: {
    title: "System Architecture",

    flow: [
      "YouTube Video",
      "Transcript Retrieval",
      "Text Chunking",
      "Embedding Generation",
      "FAISS Vector Store",
      "Semantic Retrieval",
      "Gemini LLM",
      "AI Response",
      "Streamlit Chat Interface",
    ],

    description:
      "The system extracts transcripts from YouTube videos, converts them into embeddings, stores them in a FAISS vector database, retrieves relevant context for user queries, and generates answers using a Gemini-powered RAG pipeline.",
  },

  techStack: {
    frontend: ["Streamlit"],

    backend: ["Python"],

    ai: [
      "LangChain",
      "Google Generative AI",
      "Gemini 2.5 Flash",
      "RAG Architecture",
      "Embeddings",
    ],

    tools: [
      "FAISS",
      "YouTube Transcript API",
      "Vector Database",
      "Text Splitters",
      "Prompt Engineering",
    ],
  },

  responsibilities: [
    "RAG Pipeline Development",
    "Transcript Processing",
    "Embedding Generation",
    "FAISS Integration",
    "LangChain Development",
    "Gemini Integration",
    "Frontend Development with Streamlit",
    "Testing & Optimization",
  ],

  challengesFaced: [
    {
      title: "Transcript Retrieval",

      description:
        "Handling videos with unavailable or incomplete captions while maintaining application reliability.",
    },

    {
      title: "Chunk Optimization",

      description:
        "Determining optimal chunk sizes and overlap values to improve retrieval quality.",
    },

    {
      title: "Retrieval Accuracy",

      description:
        "Ensuring the most relevant transcript segments are retrieved for user queries.",
    },

    {
      title: "Hallucination Reduction",

      description:
        "Designing the RAG workflow to ground responses in transcript-based context.",
    },
  ],

  achievements: [
    {
      title: "End-to-End YouTube RAG Application",
      event: "Generative AI Project",
    },

    {
      title: "Semantic Video Search Assistant",
      event: "Portfolio Showcase",
    },

    {
      title: "Transcript-Based Knowledge Retrieval System",
      event: "Personal Project",
    },
  ],

  impact: {
    title: "Impact",

    points: [
      "Makes video content searchable and interactive",
      "Reduces time spent watching long videos",
      "Improves knowledge extraction from educational content",
      "Demonstrates practical RAG implementation",
      "Provides an AI-powered learning assistant experience",
    ],
  },

  futureScope: [
    "Multi-Video Knowledge Base",
    "Video Summarization",
    "Timestamp-Based Answers",
    "PDF & Document Integration",
    "Persistent Chat History",
    "Voice-Based Queries",
    "Multi-Modal RAG",
    "Agentic Research Workflows",
  ],

  metrics: [
    {
      label: "Architecture",
      value: "RAG",
    },

    {
      label: "Vector Store",
      value: "FAISS",
    },

    {
      label: "LLM",
      value: "Gemini",
    },

    {
      label: "Domain",
      value: "Knowledge Retrieval",
    },
  ],

  seo: {
    title:
      "YouTube RAG Chatbot - AI-Powered YouTube Video Question Answering System",

    description:
      "A Retrieval-Augmented Generation chatbot built with LangChain, FAISS, Gemini, and Streamlit that allows users to ask questions about YouTube videos and receive context-aware answers.",
  },
};
