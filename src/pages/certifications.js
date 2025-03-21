import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const certifications = [
  {
    title: "Databricks Data Engineer Associate",
    issued: "March 2025",
    link: "https://credentials.databricks.com/fc963e94-760d-4b28-9cd5-ac965c84f6d6#acc.ZjSGcLlA",
  }
];

export default function Certifications() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center px-6 py-12">
      <motion.h2
        className="text-4xl font-bold text-neonBlue mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Certifications
      </motion.h2>

      <div className="w-full max-w-3xl">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4 hover:shadow-xl transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-lg font-semibold text-blue-400">{cert.title}</h3>
            <p className="text-gray-300 mb-2">Issued: {cert.issued}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition transform hover:scale-105"
            >
              Show Credential
            </a>
          </motion.div>
        ))}
      </div>

      <Link href="/">
        <motion.button
          className="mt-8 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-110"
        >
          ← Back to Home
        </motion.button>
      </Link>
    </div>
  );
}
