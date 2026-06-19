export const forestWeatherIndex = {
  slug: "forest-weather-index",

  featured: false,

  title: "Forest Weather Index Prediction System",

  shortTitle: "FWI Prediction using Machine Learning",

  category: "Machine Learning",

  year: "2025",

  status: "ML Deployment Project",

  tagline:
    "Predicting forest fire intensity and risk using weather parameters and machine learning models.",

  oneLiner:
    "A machine learning-powered web application that predicts the Forest Weather Index (FWI) using meteorological data and regression models.",

  description:
    "The Forest Weather Index Prediction System is an end-to-end machine learning project focused on predicting forest fire risk using environmental and weather-related parameters. Multiple regression models were evaluated, and the best-performing Ridge Regression model was deployed through a Flask web application for real-time predictions.",

  coverImage: "/projects/fwi/cover.png",

  heroImage: "/projects/fwi/hero.png",

  gallery: [
    "/projects/fwi/1.png",
    "/projects/fwi/2.png",
    "/projects/fwi/3.png",
    "/projects/fwi/4.png",
  ],

  github: {
    repository:
      "https://github.com/ved-2/Forest-Weather-Index-Prediction-System",
  },

  liveDemo: null,

  team: {
    name: "Personal Project",

    members: [
      "Vedant Kolte",
    ],
  },

  duration: "Machine Learning Project",

  problem: {
    title: "The Problem",

    description:
      "Forest fires are heavily influenced by weather conditions such as temperature, humidity, rainfall, and wind speed. Predicting fire risk accurately is essential for preventing environmental damage and supporting early intervention efforts.",

    challenges: [
      "Unpredictable weather patterns",
      "Complex environmental relationships",
      "Multiple influencing variables",
      "Need for accurate risk assessment",
      "Real-time prediction requirements",
    ],
  },

  solution: {
    title: "The Solution",

    description:
      "The system uses supervised machine learning regression models to estimate the Forest Weather Index based on environmental conditions. By comparing multiple algorithms and deploying the best-performing model, the platform provides reliable fire risk predictions through a web interface.",

    keyPoints: [
      "FWI prediction",
      "Regression modeling",
      "Model comparison",
      "Feature scaling",
      "Real-time prediction",
      "Flask deployment",
    ],
  },

  features: [
    {
      title: "FWI Prediction",
      icon: "🌲",
      description:
        "Predicts Forest Weather Index values based on environmental inputs.",
    },

    {
      title: "Model Comparison",
      icon: "📊",
      description:
        "Evaluates multiple regression algorithms and compares performance metrics.",
    },

    {
      title: "Feature Scaling",
      icon: "⚙️",
      description:
        "Uses StandardScaler to normalize input data and improve model accuracy.",
    },

    {
      title: "Real-Time Predictions",
      icon: "⚡",
      description:
        "Allows users to generate instant FWI predictions through a web interface.",
    },

    {
      title: "Performance Evaluation",
      icon: "📈",
      description:
        "Measures accuracy and model quality using standard regression metrics.",
    },

    {
      title: "Flask Web Application",
      icon: "🌐",
      description:
        "Provides a simple and interactive user interface for predictions.",
    },
  ],

  architecture: {
    title: "System Architecture",

    flow: [
      "User Input",
      "Feature Scaling",
      "Trained Ridge Model",
      "Prediction Engine",
      "Flask Web Interface",
    ],

    description:
      "Weather parameters are processed through a scaling pipeline before being passed into the trained Ridge Regression model for prediction.",
  },

  techStack: {
    frontend: [
      "HTML",
      "CSS",
      "Flask Templates",
    ],

    backend: [
      "Python",
      "Flask",
    ],

    ai: [
      "Linear Regression",
      "Ridge Regression",
      "Lasso Regression",
      "ElasticNet",
      "RidgeCV",
      "LassoCV",
    ],

    tools: [
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "Pickle",
      "Jupyter Notebook",
    ],
  },

  responsibilities: [
    "Data Preprocessing",
    "Feature Engineering",
    "Model Training",
    "Model Evaluation",
    "Model Selection",
    "Flask Deployment",
    "Web Application Development",
  ],

  challengesFaced: [
    {
      title: "Model Selection",

      description:
        "Comparing multiple regression algorithms to identify the most accurate and stable model.",
    },

    {
      title: "Data Normalization",

      description:
        "Ensuring environmental features were scaled correctly to improve model performance.",
    },

    {
      title: "Generalization",

      description:
        "Avoiding overfitting while maintaining prediction accuracy on unseen data.",
    },

    {
      title: "Deployment",

      description:
        "Integrating trained machine learning models into a production-ready Flask application.",
    },
  ],

  achievements: [
    {
      title: "End-to-End ML Deployment",
      event: "Machine Learning Project",
    },

    {
      title: "Regression Model Benchmarking",
      event: "Portfolio Showcase",
    },
  ],

  impact: {
    title: "Impact",

    points: [
      "Supports forest fire risk assessment",
      "Demonstrates regression model deployment",
      "Provides real-time predictive analytics",
      "Improves understanding of environmental ML applications",
      "Showcases end-to-end ML workflow",
    ],
  },

  futureScope: [
    "Satellite Data Integration",
    "Deep Learning Models",
    "Wildfire Risk Mapping",
    "GIS Visualization",
    "Real-Time Weather Feeds",
    "National Forest Monitoring Systems",
  ],

  metrics: [
    {
      label: "Domain",
      value: "Environmental AI",
    },

    {
      label: "Models Evaluated",
      value: "6",
    },

    {
      label: "Final Model",
      value: "Ridge Regression",
    },

    {
      label: "Project Type",
      value: "Regression",
    },
  ],

  seo: {
    title:
      "Forest Weather Index Prediction System - Machine Learning Regression Project",

    description:
      "Machine learning-based Forest Weather Index prediction system using multiple regression models and Flask deployment for real-time environmental risk assessment.",
  },
};