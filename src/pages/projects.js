import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Bank Marketing Campaign Optimization",
    description:
      "Built a full-stack ML and BI solution to optimize term deposit marketing. Trained a GBT model (AUC = 0.864) using Databricks, and created an interactive Power BI dashboard with dynamic conversion funnels and role-based targeting.",
    tools: "Databricks, PySpark, MLlib, Power BI, DAX, Medallion Architecture",
    github: "https://github.com/adityash0202/bank-marketing-ml-project",
  },
  {
    title: "Data Driven Customer Segmentation and Game Recommendations",
    description:
      "Developed an ETL pipeline for web scraping and storing gaming data, achieving 89% recommendation accuracy and 40% improved student engagement.",
    tools: "BigQuery, SQL, PCA, scikit-learn, Tableau, Python",
    github: "https://github.com/adityash0202/game-recommendation",
  },
  {
    title: "Crypto Market Prediction with Sentiment Analysis",
    description:
      "Built ML model analyzing Twitter sentiment and historical data to predict crypto market trends. Implemented using PySpark and AWS.",
    tools: "PySpark, AWS S3, Athena, Twint, Tableau",
    github: "https://github.com/adityash0202/crypto-market-prediction",
  },
  {
    title: "Analytical Study of Mental Well-being",
    description:
      "Analyzed university students' mental well-being using OLS regression and Mixed Linear Models. Identified factors improving mental health outcomes by 15% and reducing stress levels.",
    tools: "Python, Pandas, Tableau, OLS Regression, Mixed Linear Models",
    github: "https://github.com/adityash0202/mental-wellbeing-analysis",
  },
  {
    title: "Microservices: Serverless vs Serverful Performance",
    description:
      "Evaluated and compared performance of Django-based microservices deployed using Docker (serverful) and Google Cloud Endpoints (serverless), achieving lower latency and response time for serverless setup.",
    tools: "Django, PostgreSQL, Docker, GCP Endpoints, Grafana",
    github: "https://github.com/adityash0202/microservices-performance",
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center px-6 py-12">
      <motion.h2
        className="text-4xl font-bold text-neonBlue mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-blue-400">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <p className="mt-2 text-sm text-gray-400">🛠 {project.tools}</p>
            <div className="mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition transform hover:scale-110"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <Link href="/">
        <motion.button className="mt-8 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-110">
          ← Back to Home
        </motion.button>
      </Link>
    </div>
  );
}
