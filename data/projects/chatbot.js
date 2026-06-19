export const langgraphPersistentChatbot = {
  slug: "langgraph-persistent-chatbot",

  featured: true,

  title: "LangGraph Persistent Chatbot",

  shortTitle: "Persistent AI Chatbot",

  category: "AI Agents",

  year: "2025",

  status: "Conversational AI Project",

  tagline:
    "A production-ready conversational AI system with persistent memory, chat management, and streaming responses powered by LangGraph.",

  oneLiner:
    "An AI chatbot built using LangGraph, Groq, SQLite, and Streamlit that supports persistent conversation memory, resume chat functionality, and multi-session management.",

  description:
    "LangGraph Persistent Chatbot is a production-grade conversational AI application designed to provide seamless multi-chat experiences with long-term memory. Built using LangGraph, Groq's Llama 3.3 70B model, SQLite persistence, and Streamlit, the platform enables users to create multiple conversations, resume previous chats, and interact with an AI assistant that remembers context across sessions. The system leverages LangGraph's checkpointing architecture and SqliteSaver persistence to store conversation states, making it fault-tolerant, scalable, and extensible for future AI agent workflows.",

  coverImage: "/projects/langgraph-chatbot/cover.png",

  heroImage: "/projects/langgraph-chatbot/hero.png",

  gallery: [
    "/projects/langgraph-chatbot/1.png",
    "/projects/langgraph-chatbot/2.png",
    "/projects/langgraph-chatbot/3.png",
    "/projects/langgraph-chatbot/4.png",
  ],

  github: {
    repository: "https://github.com/ved-2/chattbot",
  },

  liveDemo: null,

  team: {
    name: "Personal Project",

    members: ["Vedant Kolte"],
  },

  duration: "Self Learning + Agentic AI Project",

  problem: {
    title: "The Problem",

    description:
      "Traditional chatbots often lose conversation history after application restarts and struggle to maintain long-term context. Users cannot easily continue previous discussions, leading to fragmented experiences and reduced productivity.",

    challenges: [
      "Lack of persistent conversation memory",
      "Difficulty resuming previous chats",
      "Managing multiple conversations",
      "Maintaining state across sessions",
      "Ensuring fault tolerance",
      "Providing real-time response streaming",
    ],
  },

  solution: {
    title: "The Solution",

    description:
      "The chatbot utilizes LangGraph's persistence layer and SQLite storage to save conversation states automatically. Users can create multiple chat sessions, resume conversations seamlessly, and experience ChatGPT-style streaming interactions while maintaining conversation context over time.",

    keyPoints: [
      "Persistent conversation memory",
      "Multi-chat session management",
      "Resume chat functionality",
      "SQLite-based storage",
      "Real-time response streaming",
      "LangGraph checkpointing",
    ],
  },

  features: [
    {
      title: "Multi-Chat Support",
      icon: "💬",
      description:
        "Create and manage unlimited conversations with unique LangGraph thread IDs.",
    },

    {
      title: "Resume Chat",
      icon: "🔄",
      description:
        "Continue previous conversations with automatically restored chat history.",
    },

    {
      title: "Persistent Memory",
      icon: "🧠",
      description:
        "Stores messages and workflow state using LangGraph's SqliteSaver persistence.",
    },

    {
      title: "Streaming Responses",
      icon: "⚡",
      description:
        "Provides token-by-token response generation for a real-time AI chat experience.",
    },

    {
      title: "Conversation Management",
      icon: "📂",
      description:
        "Manage and navigate conversations through a ChatGPT-style sidebar interface.",
    },

    {
      title: "SQLite Storage",
      icon: "💾",
      description:
        "Stores chat history, checkpoints, metadata, and thread information without requiring external databases.",
    },

    {
      title: "Automatic Chat Titles",
      icon: "🏷️",
      description:
        "Generates conversation titles automatically based on the first user message.",
    },

    {
      title: "LangGraph Checkpointing",
      icon: "🔐",
      description:
        "Ensures workflow state recovery and fault tolerance through automatic checkpoints.",
    },
  ],

  architecture: {
    title: "System Architecture",

    flow: [
      "User Input",
      "Streamlit Interface",
      "LangGraph Workflow",
      "Groq LLM",
      "AI Response",
      "Checkpoint Creation",
      "SQLite Persistence",
      "Sidebar Metadata Storage",
      "Resume Chat Retrieval",
    ],

    description:
      "The application processes user messages through a LangGraph workflow powered by Groq LLMs. Conversation state is automatically checkpointed and persisted using SQLite databases, enabling chat restoration and long-term memory retention.",
  },

  techStack: {
    frontend: ["Streamlit"],

    backend: ["Python", "SQLite"],

    ai: ["LangGraph", "LangChain", "Groq", "Llama 3.3 70B Versatile"],

    tools: [
      "SqliteSaver",
      "Python Dotenv",
      "Thread Management",
      "Checkpoint Persistence",
    ],
  },

  responsibilities: [
    "LangGraph Workflow Design",
    "Conversation State Management",
    "Persistent Memory Implementation",
    "Groq LLM Integration",
    "SQLite Database Design",
    "Streaming Response Development",
    "Multi-Chat Architecture",
    "Frontend Development with Streamlit",
    "Testing & Deployment",
  ],

  challengesFaced: [
    {
      title: "Persistent State Management",

      description:
        "Implementing reliable storage and restoration of conversation history across sessions.",
    },

    {
      title: "Thread-Based Architecture",

      description:
        "Managing multiple chat sessions while ensuring each conversation maintains its own context.",
    },

    {
      title: "Streaming Integration",

      description:
        "Delivering real-time token streaming while preserving workflow state and responsiveness.",
    },

    {
      title: "Conversation Recovery",

      description:
        "Restoring historical messages and workflow checkpoints seamlessly after application restarts.",
    },
  ],

  achievements: [
    {
      title: "Production-Ready Persistent AI Chatbot",
      event: "Agentic AI Project",
    },

    {
      title: "LangGraph Memory & Checkpointing Implementation",
      event: "Portfolio Showcase",
    },

    {
      title: "Multi-Session Conversational AI Platform",
      event: "Personal Project",
    },
  ],

  impact: {
    title: "Impact",

    points: [
      "Provides long-term conversational memory",
      "Enables seamless chat continuation",
      "Demonstrates production-grade LangGraph usage",
      "Reduces dependency on external databases",
      "Creates a scalable foundation for future AI agents",
    ],
  },

  futureScope: [
    "User Authentication",
    "Dark & Light Theme Support",
    "Chat Renaming",
    "Chat Deletion",
    "PDF Chat Export",
    "File Upload Support",
    "RAG Integration",
    "Voice Assistant Capabilities",
    "Image Generation",
    "Multi-Agent Workflows",
  ],

  metrics: [
    {
      label: "Memory",
      value: "Persistent",
    },

    {
      label: "Database",
      value: "SQLite",
    },

    {
      label: "Project Type",
      value: "Conversational AI",
    },

    {
      label: "Framework",
      value: "LangGraph",
    },
  ],

  seo: {
    title:
      "LangGraph Persistent Chatbot - AI Chatbot with Memory and Resume Chat",

    description:
      "Production-ready AI chatbot built using LangGraph, Groq, SQLite, and Streamlit featuring persistent memory, multi-chat support, checkpointing, and resume chat functionality.",
  },
};
