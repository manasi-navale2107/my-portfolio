export const multimodalRAGSystem = {
  slug: "multimodal-rag-system",

  featured: true,

  title: "Multimodal RAG System",

  shortTitle: "Text & Image RAG Assistant",

  category: "Generative AI",

  year: "2025",

  status: "Multimodal AI Project",

  tagline:
    "A Retrieval-Augmented Generation system capable of understanding and reasoning over both text and image documents.",

  oneLiner:
    "An AI-powered multimodal RAG application that retrieves information from text and image documents and generates context-aware responses using vector search and large language models.",

  description:
    "The Multimodal RAG System is an advanced Generative AI application that extends traditional Retrieval-Augmented Generation by incorporating both textual and visual information. The system processes text documents and images, generates embeddings, stores them in a vector database, retrieves relevant context based on user queries, and leverages a large language model to perform multimodal reasoning and answer generation. This enables users to interact with diverse knowledge sources through a single conversational interface.",

  coverImage: "/projects/multimodal-rag/cover.png",

  heroImage: "/projects/multimodal-rag/hero.png",

  gallery: [
    "/projects/multimodal-rag/1.png",
    "/projects/multimodal-rag/2.png",
    "/projects/multimodal-rag/3.png",
    "/projects/multimodal-rag/4.png",
  ],

  github: {
    repository: "https://github.com/ved-2/Multimodal-rag",
  },

  liveDemo: null,

  team: {
    name: "Personal Project",

    members: ["Vedant Kolte"],
  },

  duration: "Self Learning + Generative AI Project",

  problem: {
    title: "The Problem",

    description:
      "Most traditional RAG systems operate only on text documents, limiting their ability to retrieve and reason over visual information. Real-world knowledge often exists in a combination of text, diagrams, screenshots, charts, and images, making multimodal understanding essential.",

    challenges: [
      "Handling multiple data modalities",
      "Retrieving relevant image context",
      "Combining text and visual reasoning",
      "Efficient embedding generation",
      "Accurate semantic retrieval",
      "Maintaining response grounding",
    ],
  },

  solution: {
    title: "The Solution",

    description:
      "The system combines vector-based retrieval with multimodal reasoning capabilities. Text and image documents are converted into embeddings and indexed in a vector database. When a query is received, the most relevant content is retrieved and passed to a large language model, enabling contextual responses across both textual and visual information sources.",

    keyPoints: [
      "Multimodal document processing",
      "Text and image embeddings",
      "Vector similarity retrieval",
      "Context-aware answer generation",
      "Cross-modal reasoning",
      "Scalable RAG architecture",
    ],
  },

  features: [
    {
      title: "Multimodal Retrieval",
      icon: "🖼️",
      description:
        "Retrieves relevant information from both image and text documents.",
    },

    {
      title: "Vector-Based Search",
      icon: "🔍",
      description:
        "Uses embedding similarity search for accurate context retrieval.",
    },

    {
      title: "Image Understanding",
      icon: "📷",
      description:
        "Processes visual content and incorporates it into the reasoning pipeline.",
    },

    {
      title: "Text Knowledge Extraction",
      icon: "📄",
      description:
        "Indexes and retrieves information from textual documents efficiently.",
    },

    {
      title: "LLM-Powered Reasoning",
      icon: "🧠",
      description:
        "Combines retrieved context with user queries to generate intelligent responses.",
    },

    {
      title: "Unified Query Interface",
      icon: "💬",
      description:
        "Allows users to ask questions naturally across multiple content types.",
    },
  ],

  architecture: {
    title: "System Architecture",

    flow: [
      "Text Documents",
      "Image Documents",
      "Preprocessing",
      "Embedding Generation",
      "Vector Database",
      "Semantic Retrieval",
      "Context Aggregation",
      "Groq LLM",
      "Multimodal Response",
    ],

    description:
      "Text and image data are converted into embeddings and stored within a vector database. Relevant content is retrieved through similarity search and combined into a contextual prompt, enabling the LLM to generate grounded multimodal responses.",
  },

  techStack: {
    frontend: ["Python UI"],

    backend: ["Python"],

    ai: [
      "LangChain",
      "Groq LLM",
      "Multimodal RAG",
      "Embeddings",
      "Semantic Search",
    ],

    tools: [
      "PIL",
      "Vector Databases",
      "Document Loaders",
      "Text Splitters",
      "Prompt Engineering",
    ],
  },

  responsibilities: [
    "Multimodal Pipeline Design",
    "Image Processing",
    "Text Processing",
    "Embedding Generation",
    "Vector Database Integration",
    "Semantic Retrieval Implementation",
    "LLM Integration",
    "RAG Workflow Development",
  ],

  challengesFaced: [
    {
      title: "Cross-Modal Retrieval",

      description:
        "Ensuring relevant information is retrieved effectively from both text and image sources.",
    },

    {
      title: "Embedding Consistency",

      description:
        "Maintaining meaningful representations across different content modalities.",
    },

    {
      title: "Context Fusion",

      description:
        "Combining retrieved visual and textual information into a coherent prompt for the LLM.",
    },

    {
      title: "Response Grounding",

      description:
        "Reducing hallucinations by ensuring generated answers remain grounded in retrieved context.",
    },
  ],

  achievements: [
    {
      title: "Multimodal Retrieval-Augmented Generation System",
      event: "Generative AI Project",
    },

    {
      title: "Cross-Modal Question Answering Platform",
      event: "Portfolio Showcase",
    },

    {
      title: "Text & Image Knowledge Retrieval Engine",
      event: "Personal Project",
    },
  ],

  impact: {
    title: "Impact",

    points: [
      "Enables knowledge retrieval beyond text-only systems",
      "Improves understanding of image-rich documents",
      "Demonstrates practical multimodal AI capabilities",
      "Reduces information search effort",
      "Showcases advanced RAG architecture implementation",
    ],
  },

  futureScope: [
    "PDF + Image Hybrid Retrieval",
    "Video Understanding",
    "Multi-Modal Agent Workflows",
    "Enterprise Knowledge Bases",
    "Document Intelligence Systems",
    "Voice-Based Query Support",
    "Advanced Visual Reasoning",
    "Multi-Vector Retrieval Strategies",
  ],

  metrics: [
    {
      label: "Architecture",
      value: "Multimodal RAG",
    },

    {
      label: "Modalities",
      value: "Text + Images",
    },

    {
      label: "Retrieval",
      value: "Vector Search",
    },

    {
      label: "Domain",
      value: "Generative AI",
    },
  ],

  seo: {
    title: "Multimodal RAG System - AI Retrieval Across Text and Images",

    description:
      "A multimodal Retrieval-Augmented Generation system built using LangChain, Groq LLM, vector databases, and image processing techniques to answer questions using both text and image documents.",
  },
};
