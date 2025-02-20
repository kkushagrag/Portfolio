import React from "react";
import { ExternalLink, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import carBuy from "../assets/carBuy.jpg";
import stockMarket from "../assets/stockMarket.png";
import SuperGains6 from "../assets/supergains1 (6).png";
import workoutTracker from "../assets/workout-tracker.jpg";

const ProjectsSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "stock-market-prediction",
      title: "Stock Market Prediction",
      description:
        "The Stock Market Prediction System leverages AI and machine learning models to predict stock prices using LSTM, ARIMA, and sentiment analysis. It integrates historical stock data with real-time news and social media sentiment to provide actionable insights for investors.",
      link: "https://github.com/kkushagrag/stock-market-prediction",
      image: stockMarket,
      techUsed: [
        "Python",
        "Streamlit",
        "Machine Learning",
        "Yahoo Finance API",
      ],
    },
    {
      id: "carbuy",
      title: "CarBuy",
      description:
        "A Java-based console application that simplifies car buying, management, and tracking for buyers and sellers. Users can browse cars, compare specs, check prices, and make purchases through an interactive interface.",
      link: "https://github.com/kkushagrag/CarBuy",
      image: carBuy,
      techUsed: ["Java", "MySQL", "OOPS", "File Handling", "Text Handling"],
    },
    {
      id: "workout-tracker",
      title: "Workout Tracker",
      description:
        "A comprehensive fitness tracking application designed for Android devices, empowering users to monitor workouts, track progress, and visualize body metrics over time.",
      link: "https://github.com/kkushagrag/Workout-Tracker",
      image: workoutTracker,
      techUsed: ["Java", "Android Studio", "SQLite"],
    },
    {
      id: "supergains",
      title: "SuperGains: E-Commerce Website",
      description:
        "SuperGains is a premium online supplement retailer for athletes, offering high-quality products.",
      link: "https://github.com/kkushagrag/SuperGains",
      image: SuperGains6,
      techUsed: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "MySQL",
        "MongoDB",
      ],
    },
  ];

  return (
    <section id="projects">
      <div className="relative w-full overflow-hidden">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <section className="relative w-full py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Animated Heading */}
            <motion.h2
              className="text-7xl md:text-8xl lg:text-9xl font-serif mb-12 cursor-pointer"
              style={{ fontFamily: "serif" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            >
              projects.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer font-[Times New Roman]"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  {/* Project Image */}
                  <div className="relative h-72 md:h-80 overflow-hidden group block">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition font-serif">
                          {project.title}
                        </h3>
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                        onClick={(e) => e.stopPropagation()} // Prevent div click propagation
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-justify">
                      {project.description}
                    </p>

                    {/* Tech Stack Used */}
                    <div className="flex flex-wrap gap-2">
                      {project.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        >
                          <Code className="h-3 w-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProjectsSection;
