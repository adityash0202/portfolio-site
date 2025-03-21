import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPython, FaGithub, FaTable } from "react-icons/fa";
import { SiDatabricks, SiApacheairflow, SiApachespark, SiMysql } from "react-icons/si";

const projects = [
  {
    title: "Data Driven Customer Segmentation and Game Recommendations",
    description:
      "Developed an ETL pipeline for web scraping and storing gaming data, achieving 89% recommendation accuracy and 40% improved student engagement.",
    tools: "BigQuery, SQL, PCA, scikit-learn, Tableau, Python",
    link: "/projects",
    github: "https://github.com/adityash0202/game-recommendation",
  },
  {
    title: "Crypto Market Prediction with Sentiment Analysis",
    description:
      "Built ML model analyzing Twitter sentiment & historical data to predict crypto market trends.",
    tools: "PySpark, AWS S3, Athena, Twint, Tableau",
    link: "/projects",
    github: "https://github.com/adityash0202/crypto-market-prediction",
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 shadow-lg py-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-blue-400">With Data, I CAN!</h1>
          <div className="space-x-6">
            <Link href="/projects" className="text-white hover:text-blue-400 transition">Projects</Link>
            <Link href="/certifications" className="text-white hover:text-blue-400 transition">Certifications</Link>
            <a
              href="https://www.linkedin.com/in/adityasharma215/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pt-28 text-center"
      >
        <h1 className="text-6xl font-bold text-blue-400">Aditya Sharma</h1>
        <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto">
          I am a Data Engineer with expertise in building scalable ETL pipelines and optimizing big data workflows using Databricks Lakehouse, Apache Spark, and SQL. Passionate about transforming complex datasets into actionable insights with tools like PySpark, Airflow, and Tableau.
        </p>
        <a
          href="/Aditya_Sharma_DE_Spark_SQL.pdf"
          download
          className="mt-4 inline-block px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
  Download Resume
        </a>
      </motion.div>

      {/* Tech Stack Icons */}
      <motion.div
        className="flex justify-center space-x-6 mt-8 text-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <FaPython title="Python" />
        <SiMysql title="SQL" />
        <SiDatabricks title="Databricks" />
        <SiApachespark title="PySpark" />
        <FaTable title="Tableau" />
        <FaGithub title="GitHub" />
        <SiApacheairflow title="ETL & Orchestration" />
      </motion.div>

      {/* Sections Wrapper */}
      <div className="mt-16 flex flex-col items-center px-6">

        {/* Projects Section */}
        <motion.section
          className="text-center w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <p className="mt-2 text-sm text-gray-400">🛠 {project.tools}</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <Link
                    href={project.link}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition transform hover:scale-110"
                  >
                    Details
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition transform hover:scale-110"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <Link href="/projects">
            <motion.button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
              See All Projects →
            </motion.button>
          </Link>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Education</h2>
          <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
            {[
              { degree: "Master’s in Professional Computer Science", university: "Simon Fraser University", year: "Sep 2022 - Apr 2024" },
              { degree: "Bachelor’s in Computer Science", university: "SRM Institute of Science and Technology", year: "Jul 2018 - May 2022" }
            ].map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-blue-400">{edu.degree}</h3>
                <p className="text-gray-300">{edu.university}</p>
                <p className="text-gray-400">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievement Section */}
        <motion.section
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Achievement</h2>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-blue-400">
              First Place, Autonomous Obstacle Avoidance Rover Design
            </h3>
            <p className="text-gray-300 mt-2">
              Awarded by the Physics and Nanotechnology Department, SRM Institute of Science and Technology.
            </p>
          </motion.div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="mt-32 py-6 bg-gray-900 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Aditya Sharma. All rights reserved.
      </footer>
    </div>
  );
}
