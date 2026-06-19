export const networkIntrusionDetection = {
  slug: "network-intrusion-detection",

  featured: false,

  title: "Network Intrusion Detection System",

  shortTitle: "ML-Based Cyber Threat Detection",

  category: "Cybersecurity",

  year: "2025",

  status: "Machine Learning Project",

  tagline:
    "Detecting malicious network activity using machine learning, ETL pipelines, and real-time threat classification.",

  oneLiner:
    "A machine learning-powered intrusion detection system that classifies network traffic as normal or malicious to improve cybersecurity monitoring.",

  description:
    "The Network Intrusion Detection System is an end-to-end machine learning project focused on identifying malicious network behavior. The system processes raw network traffic data through an ETL pipeline, performs feature engineering, trains multiple machine learning models, and classifies suspicious activities with high accuracy.",

  coverImage: "/projects/nids/cover.png",

  heroImage: "/projects/nids/hero.png",

  gallery: [
    "/projects/nids/1.png",
    "/projects/nids/2.png",
    "/projects/nids/3.png",
    "/projects/nids/4.png",
  ],

  github: {
    repository:
      "https://github.com/ved-2/networksecurity",
  },

  liveDemo: null,

  team: {
    name: "Personal Project",

    members: [
      "Vedant Kolte",
    ],
  },

  duration: "Academic + Self Learning Project",

  problem: {
    title: "The Problem",

    description:
      "Modern networks generate enormous amounts of traffic, making it difficult for security teams to manually identify malicious activities. Traditional rule-based systems often fail to detect evolving attack patterns and unknown threats.",

    challenges: [
      "Large network traffic volumes",
      "Manual threat monitoring",
      "Evolving attack patterns",
      "High false positives",
      "Complex feature relationships",
      "Real-time threat detection requirements",
    ],
  },

  solution: {
    title: "The Solution",

    description:
      "The system leverages machine learning models to automatically classify network traffic and identify potential threats. Through ETL pipelines, feature engineering, and model evaluation, the platform provides a scalable approach to intrusion detection.",

    keyPoints: [
      "Automated threat detection",
      "ETL data pipeline",
      "Feature engineering",
      "ML-based classification",
      "Model comparison",
      "Performance analytics",
    ],
  },

  features: [
    {
      title: "ETL Pipeline",
      icon: "⚙️",
      description:
        "Extracts, cleans, transforms, and loads network traffic data for analysis.",
    },

    {
      title: "Data Preprocessing",
      icon: "🧹",
      description:
        "Handles missing values, normalization, and feature selection for better model performance.",
    },

    {
      title: "Threat Classification",
      icon: "🛡️",
      description:
        "Classifies traffic as normal or malicious using machine learning algorithms.",
    },

    {
      title: "Model Evaluation",
      icon: "📊",
      description:
        "Compares multiple algorithms using accuracy, precision, recall, and F1-score.",
    },

    {
      title: "Feature Engineering",
      icon: "📈",
      description:
        "Identifies important traffic characteristics that improve prediction quality.",
    },

    {
      title: "Security Analytics",
      icon: "🔍",
      description:
        "Provides insights into detected threats and model behavior.",
    },
  ],

  architecture: {
    title: "System Architecture",

    flow: [
      "Raw Network Data",
      "ETL Pipeline",
      "Data Cleaning",
      "Feature Engineering",
      "ML Models",
      "Threat Classification",
      "Performance Evaluation",
    ],

    description:
      "Network traffic data passes through preprocessing and feature engineering stages before being used by machine learning models for intrusion detection and classification.",
  },

  techStack: {
    frontend: [
      "Flask",
      "HTML",
      "CSS",
    ],

    backend: [
      "Python",
    ],

    ai: [
      "Logistic Regression",
      "Random Forest",
      "SVM",
      "Classification Models",
    ],

    tools: [
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "Matplotlib",
      "Jupyter Notebook",
    ],
  },

  responsibilities: [
    "ETL Pipeline Development",
    "Data Cleaning",
    "Feature Engineering",
    "Model Training",
    "Model Evaluation",
    "Data Analysis",
    "Flask Deployment",
  ],

  challengesFaced: [
    {
      title: "Feature Selection",

      description:
        "Identifying the most relevant network features while reducing noise and redundancy.",
    },

    {
      title: "Class Imbalance",

      description:
        "Handling differences in the number of normal and malicious records.",
    },

    {
      title: "Model Comparison",

      description:
        "Evaluating multiple algorithms to select the best performing intrusion detection model.",
    },

    {
      title: "Data Quality",

      description:
        "Managing missing values and inconsistencies in network traffic datasets.",
    },
  ],

  achievements: [
    {
      title: "End-to-End ML Pipeline",
      event: "Machine Learning Project",
    },

    {
      title: "Cybersecurity Classification System",
      event: "Portfolio Showcase",
    },
  ],

  impact: {
    title: "Impact",

    points: [
      "Automates threat detection",
      "Improves network monitoring",
      "Reduces manual analysis effort",
      "Demonstrates practical ML application",
      "Strengthens cybersecurity awareness",
    ],
  },

  futureScope: [
    "Deep Learning Models",
    "Real-Time Detection",
    "SIEM Integration",
    "Anomaly Detection Systems",
    "Cloud Security Monitoring",
    "Zero-Day Threat Detection",
  ],

  metrics: [
    {
      label: "Domain",
      value: "Cybersecurity",
    },

    {
      label: "ML Models",
      value: "3+",
    },

    {
      label: "Pipeline",
      value: "ETL",
    },

    {
      label: "Project Type",
      value: "Classification",
    },
  ],

  seo: {
    title:
      "Network Intrusion Detection System - ML Based Cybersecurity Solution",

    description:
      "Machine learning-powered intrusion detection system using ETL pipelines, feature engineering, and classification models to detect malicious network activity.",
  },
};