import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticlesBg from "../components/ParticlesBg";

const projects = [
  {
    title: "Analytical Study of Mental Well-being",
    description: "Analyzed university students' mental well-being using OLS regression and Mixed Linear Models. Identified factors improving mental health outcomes by 15% and reducing stress levels.",
    tools: "Python, Pandas, Tableau, OLS Regression, Mixed Linear Models",
    link: "#", // Update with GitHub link later
  },
  {
    title: "Data Driven Customer Segmentation and Game Recommendations",
    description: "Developed an ETL pipeline for web scraping and storing gaming data, achieving 89% recommendation accuracy and 40% improved student engagement.",
    tools: "BigQuery, SQL, PCA, scikit-learn, Tableau, Python",
    link: "#",
  },
  {
    title: "Crypto Market Prediction with Sentiment Analysis",
    description: "Built ML model analyzing Twitter sentiment and historical data to predict crypto market trends. Implemented using PySpark and AWS.",
    tools: "PySpark, AWS S3, Athena, Twint, Tableau",
    link: "#",
  },
  {
    title: "Social Media Sentiment Analysis Using ML",
    description: "Developed a sentiment analysis engine for tweets using feature extraction techniques and ML models like logistic regression and decision trees.",
    tools: "Python, scikit-learn, TF-IDF, Logistic Regression, Decision Trees",
    link: "#",
  }
];

export default function Projects() {
  return (
    <div className="relative min-h-screen flex flex-col items-center px-6 py-12 text-white">
      <ParticlesBg />
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-6"
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
            <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <p className="mt-2 text-sm text-gray-400">🛠 {project.tools}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition transform hover:scale-110"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>

      <Link href="/" passHref>
        <motion.button
          className="mt-8 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-110"
        >
          ← Back to Home
        </motion.button>
      </Link>
    </div>
  );
}
