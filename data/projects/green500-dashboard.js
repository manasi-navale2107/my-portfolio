export const green500Dashboard = {
  slug: "green500-dashboard",

  featured: true,

  title: "Green500 Dashboard",

  shortTitle: "HPC Data Analytics Dashboard",

  category: "Data Analytics",

  year: "2026",

  status: "C-DAC Internship Project",

  tagline:
    "An interactive analytics dashboard for exploring Green500 and TOP500 supercomputing datasets.",

  oneLiner:
    "A Streamlit dashboard built to analyze supercomputer performance, efficiency, hardware trends, and ranking patterns.",

  description:
    "Green500 Dashboard is a data analytics project developed during my C-DAC Pune internship in the HPC Tech Group. The project focuses on cleaning, preprocessing, analyzing, and visualizing Green500 and TOP500 supercomputer datasets. It includes KPI cards, trend analysis, country-wise insights, hardware evolution, performance analysis, efficiency trends, and machine learning-based missing value handling.",

  coverImage: "/projects/green500-dashboard/cover.png",

  heroImage: "/projects/green500-dashboard/hero.png",

  gallery: [
    "/projects/green500-dashboard/1.png",
    "/projects/green500-dashboard/2.png",
    "/projects/green500-dashboard/3.png",
    "/projects/green500-dashboard/4.png",
  ],

  github: {
    repository: "https://github.com/manasi-navale2107",
  },

  liveDemo: null,

  team: {
    name: "C-DAC Pune Internship",

    members: ["Manasi Navale"],
  },

  duration: "May 2026 - Present",

  problem: {
    title: "The Problem",

    description:
      "Green500 and TOP500 supercomputing datasets contain valuable information about energy efficiency, system performance, ranking, countries, processors, accelerators, and hardware evolution. However, the data requires cleaning, preprocessing, missing value handling, and visual analysis before meaningful insights can be extracted.",

    challenges: [
      "Inconsistent scraped data",
      "Missing values in key fields",
      "Multiple measurement units",
      "Complex ranking relationships",
      "Large categorical hardware information",
      "Need for clear interactive visualizations",
    ],
  },

  solution: {
    title: "The Solution",

    description:
      "The dashboard transforms raw Green500 and TOP500 data into clean, structured, and interactive insights. It uses preprocessing, feature engineering, machine learning-based imputation, and Streamlit visualizations to help users explore supercomputing trends across performance, power, efficiency, countries, manufacturers, and hardware components.",

    keyPoints: [
      "Data cleaning and preprocessing",
      "EDA and visualization",
      "Machine learning-based imputation",
      "Interactive Streamlit dashboard",
      "Ranking and efficiency analysis",
      "HPC hardware trend insights",
    ],
  },

  features: [
    {
      title: "Interactive KPI Cards",
      icon: "📌",
      description:
        "Displays total systems, countries, manufacturers, peak performance, and peak efficiency in a clean dashboard format.",
    },

    {
      title: "Performance Trend Analysis",
      icon: "📈",
      description:
        "Analyzes Rmax, energy efficiency, and power consumption trends across Green500 list years.",
    },

    {
      title: "Green500 vs TOP500 Ranking",
      icon: "🏆",
      description:
        "Compares energy-efficient ranking with performance-based ranking to understand trade-offs between speed and efficiency.",
    },

    {
      title: "Hardware Evolution",
      icon: "🖥️",
      description:
        "Explores processor models, accelerator models, and hardware diversity across supercomputing systems.",
    },

    {
      title: "Country & Manufacturer Insights",
      icon: "🌍",
      description:
        "Visualizes country-wise and manufacturer-wise presence in Green500 systems.",
    },

    {
      title: "ML-Based Missing Value Handling",
      icon: "🤖",
      description:
        "Applies machine learning techniques to estimate missing ranking values and improve dataset completeness.",
    },
  ],

  architecture: {
    title: "System Architecture",

    flow: [
      "Raw Green500 Data",
      "Data Cleaning",
      "Preprocessing",
      "Feature Engineering",
      "ML Imputation",
      "EDA",
      "Streamlit Dashboard",
      "Insights",
    ],

    description:
      "The project follows a data analytics pipeline where scraped Green500 and TOP500 data is cleaned, transformed, analyzed, and visualized through an interactive Streamlit dashboard.",
  },

  techStack: {
    frontend: ["Streamlit"],

    backend: ["Python"],

    ai: [
      "Machine Learning",
      "Random Forest",
      "Feature Engineering",
      "Model Evaluation",
    ],

    tools: [
      "Pandas",
      "NumPy",
      "Plotly",
      "Scikit-Learn",
      "Git",
      "GitHub",
      "VS Code",
    ],
  },

  responsibilities: [
    "Web Scraping",
    "Data Cleaning",
    "Preprocessing",
    "EDA",
    "Feature Engineering",
    "Missing Value Handling",
    "Machine Learning Imputation",
    "Dashboard Development",
    "Visualization Design",
  ],

  challengesFaced: [
    {
      title: "Handling Missing Values",

      description:
        "Some important fields such as TOP500 rank and performance values were missing and required careful preprocessing and ML-based estimation.",
    },

    {
      title: "Unit Normalization",

      description:
        "Performance values were available in different units and needed to be converted into a consistent format for analysis.",
    },

    {
      title: "Dashboard Readability",

      description:
        "Designing visualizations that clearly explain HPC performance, efficiency, ranking, and hardware trends.",
    },

    {
      title: "Interpreting Rank Relationships",

      description:
        "Understanding the relationship between Green500 rank, TOP500 rank, Rmax, power, and energy efficiency.",
    },
  ],

  achievements: [
    {
      title: "C-DAC Pune Internship Project",
      event: "HPC Tech Group",
    },

    {
      title: "Green500 + TOP500 Analytics Dashboard",
      event: "Data Analytics Project",
    },
  ],

  impact: {
    title: "Impact",

    points: [
      "Improves understanding of supercomputing efficiency trends",
      "Provides interactive analysis of Green500 and TOP500 systems",
      "Demonstrates data cleaning, EDA, and dashboarding skills",
      "Applies ML for missing value imputation",
      "Connects AI/Data Science with HPC domain knowledge",
    ],
  },

  futureScope: [
    "Advanced forecasting",
    "Automated yearly data scraping",
    "Country-wise HPC growth prediction",
    "Hardware recommendation insights",
    "RAG-based dashboard explanation assistant",
    "Deployment for public exploration",
  ],

  metrics: [
    {
      label: "Domain",
      value: "HPC Analytics",
    },

    {
      label: "Dataset",
      value: "Green500",
    },

    {
      label: "Dashboard",
      value: "Streamlit",
    },

    {
      label: "Focus",
      value: "Efficiency",
    },
  ],

  seo: {
    title: "Green500 Dashboard - HPC Data Analytics Project",

    description:
      "Interactive Streamlit dashboard for analyzing Green500 and TOP500 supercomputing datasets using Python, Pandas, Plotly, Scikit-Learn, EDA, and Machine Learning.",
  },
};