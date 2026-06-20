export const galeMedAI = {
  slug: "galemed-ai",

  featured: true,

  title: "GaleMed AI",

  shortTitle: "Medical Knowledge Assistant",

  category: "Medical RAG",

  year: "2026",

  status: "Completed",

  tagline:
    "A Retrieval-Augmented Generation based medical knowledge assistant that answers questions using trusted medical encyclopedia content.",

  oneLiner:
    "A medical RAG chatbot built using LangChain, ChromaDB, Hugging Face embeddings, and Groq LLM.",

  description:
    "GaleMed AI is a medical knowledge assistant powered by Retrieval-Augmented Generation. The system uses The Gale Encyclopedia of Medicine as its knowledge source, retrieves relevant medical context using vector search, and generates grounded answers using an LLM. Instead of relying only on model knowledge, the application improves response reliability by grounding answers in retrieved document content.",

  coverImage: "/projects/galemed-ai/cover.png",

  heroImage: "/projects/galemed-ai/hero.png",

  gallery: [
    "/projects/galemed-ai/1.png",
    "/projects/galemed-ai/2.png",
    "/projects/galemed-ai/3.png",
  ],

  github: {
    repository: "https://github.com/manasi-navale2107/Medical_Bot",
  },

  liveDemo: null,

  team: {
    name: "Personal Project",

    members: ["Manasi Navale"],
  },

  duration: "2026",

  problem: {
    title: "The Problem",

    description:
      "Medical information is often scattered across large documents, articles, and online sources. Users may find it difficult to quickly retrieve accurate and relevant explanations from trusted medical content. General LLMs can also generate answers without proper grounding, which may reduce reliability in knowledge-sensitive domains.",

    challenges: [
      "Large medical documents are difficult to search manually",
      "Need for grounded and context-aware answers",
      "Risk of generic LLM responses without source context",
      "Requirement for semantic document retrieval",
      "Maintaining answer relevance and clarity",
    ],
  },

  solution: {
    title: "The Solution",

    description:
      "GaleMed AI solves this by using a RAG pipeline. The medical PDF is processed into chunks, converted into embeddings using Hugging Face models, stored in ChromaDB, and retrieved semantically based on the user query. The retrieved context is then passed to the LLM to generate a more grounded and useful response.",

    keyPoints: [
      "PDF-based knowledge ingestion",
      "Document chunking",
      "Vector embeddings",
      "Semantic retrieval",
      "Context-aware answer generation",
      "Grounded medical responses",
    ],
  },

  features: [
    {
      title: "Medical Question Answering",
      icon: "🩺",
      description:
        "Allows users to ask medical-related questions and receive answers based on retrieved encyclopedia content.",
    },

    {
      title: "RAG Pipeline",
      icon: "🧠",
      description:
        "Uses Retrieval-Augmented Generation to combine document retrieval with LLM-based answer generation.",
    },

    {
      title: "Semantic Search",
      icon: "🔍",
      description:
        "Retrieves relevant chunks from the medical knowledge base using vector similarity search.",
    },

    {
      title: "ChromaDB Vector Store",
      icon: "🗄️",
      description:
        "Stores document embeddings and enables efficient retrieval of relevant medical information.",
    },

    {
      title: "Hugging Face Embeddings",
      icon: "🤗",
      description:
        "Converts medical text chunks into embeddings for semantic search and retrieval.",
    },

    {
      title: "Grounded AI Responses",
      icon: "✅",
      description:
        "Improves answer reliability by generating responses from retrieved medical context instead of only model memory.",
    },
  ],

  architecture: {
    title: "System Architecture",

    flow: [
      "Medical PDF",
      "Text Extraction",
      "Document Chunking",
      "Hugging Face Embeddings",
      "ChromaDB Vector Store",
      "User Query",
      "Semantic Retrieval",
      "LLM Response",
    ],

    description:
      "GaleMed AI follows a RAG architecture where medical documents are processed into chunks, embedded into vectors, stored in ChromaDB, retrieved based on the query, and passed to an LLM for grounded response generation.",
  },

  techStack: {
    frontend: ["HTML", "CSS", "JavaScript"],

    backend: ["Flask", "Python"],

    ai: [
      "LangChain",
      "RAG",
      "ChromaDB",
      "Hugging Face Embeddings",
      "Groq LLM",
      "Prompt Engineering",
    ],

    tools: ["Git", "GitHub", "VS Code"],
  },

  responsibilities: [
    "RAG Pipeline Development",
    "PDF Processing",
    "Document Chunking",
    "Embedding Generation",
    "Vector Database Integration",
    "LangChain Workflow Design",
    "Backend Development",
    "Frontend Integration",
  ],

  challengesFaced: [
    {
      title: "Processing Large Medical PDF",

      description:
        "Splitting a large medical encyclopedia into meaningful chunks while preserving context for retrieval.",
    },

    {
      title: "Improving Retrieval Quality",

      description:
        "Using semantic search and embeddings to retrieve the most relevant medical information for each query.",
    },

    {
      title: "Generating Grounded Answers",

      description:
        "Ensuring that responses are based on retrieved context instead of unsupported LLM generation.",
    },

    {
      title: "Building End-to-End Flow",

      description:
        "Connecting document loading, chunking, embeddings, vector search, LLM generation, and UI into one working system.",
    },
  ],

  achievements: [
    {
      title: "End-to-End Medical RAG Application",
      event: "Portfolio Project",
    },

    {
      title: "Grounded Medical Knowledge Assistant",
      event: "LangChain + ChromaDB Project",
    },
  ],

  impact: {
    title: "Impact",

    points: [
      "Makes large medical content easier to search",
      "Improves answer reliability using retrieved context",
      "Demonstrates practical RAG implementation",
      "Shows strong LangChain and vector database skills",
    ],
  },

  futureScope: [
    "Source citation support",
    "Multi-document medical knowledge base",
    "Chat history",
    "Doctor-friendly summary mode",
    "Medical glossary support",
    "Deployment with authentication",
  ],

  metrics: [
    {
      label: "Domain",
      value: "Medical AI",
    },

    {
      label: "Architecture",
      value: "RAG",
    },

    {
      label: "Vector DB",
      value: "ChromaDB",
    },

    {
      label: "Knowledge Source",
      value: "Medical PDF",
    },
  ],

  seo: {
    title: "GaleMed AI - Medical RAG Knowledge Assistant",

    description:
      "GaleMed AI is a medical knowledge assistant built using LangChain, ChromaDB, Hugging Face embeddings, Groq LLM, Flask, and Retrieval-Augmented Generation.",
  },
};