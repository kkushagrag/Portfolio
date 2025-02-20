import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Github,
  ExternalLink,
  Code,
  Calendar,
  User,
  CheckCircle2,
  Trophy,
  Target,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import FerrariImage from "../assets/2025-Formula1-Ferrari-SF-25-003-1600.jpg";
import Purosangue from "../assets/2023-Ferrari-Purosangue-001-1080w.jpg";
import SuperGains1 from "../assets/supergains1 (1).png";
import SuperGains2 from "../assets/supergains1 (2).png";
import SuperGains3 from "../assets/supergains1 (3).png";
import SuperGains4 from "../assets/supergains1 (4).png";
import SuperGains5 from "../assets/supergains1 (5).png";
import SuperGains6 from "../assets/supergains1 (6).png";
import StockMarket1 from "../assets/stock-market-prediction (1).png";
import StockMarket2 from "../assets/stock-market-prediction (2).png";
import StockMarket3 from "../assets/stock-market-prediction (3).png";
import StockMarket4 from "../assets/stock-market-prediction (4).png";
import StockMarket5 from "../assets/stock-market-prediction (5).png";
import workoutTracker from "../assets/workout-tracker.jpg";
import WorkoutTracker1 from "../assets/workout-tracker (1).jpg";
import WorkoutTracker2 from "../assets/workout-tracker (2).jpg";
import WorkoutTracker3 from "../assets/workout-tracker (3).jpg";
import WorkoutTracker4 from "../assets/workout-tracker (4).jpg";
import WorkoutTracker5 from "../assets/workout-tracker (5).jpg";
import WorkoutTracker6 from "../assets/workout-tracker (6).jpg";
import carBuy from "../assets/carBuy.jpg";
import stockMarket from "../assets/stockMarket.png";

const projectsData = {
  supergains: {
    title: "SuperGains",
    description:
      "SuperGains is an e-commerce platform for fitness enthusiasts, offering a smooth shopping experience for premium supplements with secure payments and an admin dashboard.",
    longDescription:
      "SuperGains is a dedicated e-commerce platform tailored for fitness enthusiasts, offering a seamless and efficient shopping experience for high-quality supplements and fitness products. With a user-friendly interface, secure payment options, and a well-organized catalog, customers can easily find and purchase products that support their health and fitness goals. The platform also includes an intuitive admin dashboard for efficient product management, order tracking, and user support. Designed with performance and scalability in mind, SuperGains ensures smooth navigation and responsiveness across all devices, making it an ideal destination for fitness-conscious individuals.",
    githubLink: "https://github.com/kkushagrag/SuperGains",
    liveLink: "https://supergains.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "MySQL", ,],
    features: [
      "User authentication",
      "Shopping cart",
      "Secure payment processing",
      "Admin dashboard",
      "Responsive design",
    ],
    timeline: "3 months",
    team: "Team project",
    screenshots: [
      SuperGains6,
      SuperGains1,
      SuperGains2,
      SuperGains3,
      SuperGains4,
      SuperGains5,
    ],
  },
  carbuy: {
    title: "CarBuy",
    description:
      "A Java-based console application that simplifies car buying, management, and tracking for buyers and sellers. Users can browse cars, compare specifications, check prices, and make purchases through an interactive interface.",
    longDescription:
      "CarBuy is a console-based application developed in Java, designed to simplify the car purchasing and management process. It provides users with a seamless experience to browse, compare, and select vehicles based on their preferences. The application includes features such as inventory management, price filtering, and a structured database for efficient car listings. With a user-friendly interface and optimized performance, CarBuy ensures a smooth and reliable car-buying journey.",
    githubLink: "https://github.com/kkushagrag/CarBuy",
    techStack: [
      "Java",
      "JDBC",
      "MySQL",
      "OOP Principles",
      "File Handling",
      "Multithreading",
    ],
    features: [
      "User authentication & role management",
      "Car search and filtering",
      "Car purchasing & EMI calculations",
      "Ownership tracking & service reminders",
      "Used car resale & trade-in system",
    ],
    timeline: "2 months",
    team: "Team project",
    screenshots: [carBuy],
  },
  "workout-tracker": {
    title: "Workout Tracker",
    description:
      "A comprehensive fitness tracking application designed for Android devices, empowering users to monitor workouts, track progress, and visualize body metrics over time.",
    longDescription:
      "Workout Tracker is a comprehensive fitness tracking application designed for Android devices. It empowers users to monitor their workouts, track progress, and visualize changes in body weight and body fat percentage over time. The app caters to individuals of all fitness levels, from beginners starting their journey to experienced athletes seeking to optimize their routines.",
    githubLink: "https://github.com/kkushagrag/Workout-Tracker",
    liveLink: "https://fittrack-demo.vercel.app",
    techStack: [
      "Java",
      "Android Studio",
      "SQLite",
      "Material Design",
      "Chart Libraries",
      "Room Database",
    ],
    features: [
      "Predefined exercise lists for calisthenics, weight lifting, and cardio",
      "Custom exercises to personalize workouts",
      "Favorite exercises for quick access",
      "Workout logging and body metric tracking",
      "Visual graphs for progress analysis",
      "Calendar view for reviewing workout history",
    ],
    timeline: "2 months",
    team: "Solo project",
    screenshots: [
      workoutTracker,
      WorkoutTracker1,
      WorkoutTracker2,
      WorkoutTracker3,
      WorkoutTracker4,
      WorkoutTracker5,
      WorkoutTracker6,
    ],
  },
  "stock-market-prediction": {
    title: "Stock Market Prediction System",
    description:
      "The Stock Market Prediction System leverages AI and machine learning models to predict stock prices using LSTM, ARIMA, and sentiment analysis. It integrates historical stock data with real-time news and social media sentiment to provide actionable insights for investors.",
    longDescription:
      "The Stock Market Prediction System is an AI-powered forecasting tool that analyzes stock price trends using a hybrid approach. By combining LSTM for deep learning, ARIMA for statistical analysis, and VADER for sentiment analysis, it provides a comprehensive prediction model. The system fetches real-time stock data from Yahoo Finance and evaluates market sentiment through financial news and social media, helping investors make data-driven decisions.",
    githubLink: "https://github.com/kkushagrag/stock-market-prediction",
    techStack: ["Python", "Machine Learning", "Streamlit", "Yahoo Finance API"],
    features: [
      "Hybrid stock price prediction using LSTM and ARIMA",
      "Sentiment analysis of financial news and social media",
      "Correlation analysis between market sentiment and price trends",
      "Real-time stock data integration from Yahoo Finance",
      "Interactive dashboard for visualizing trends and predictions",
      "Comparison of LSTM and ARIMA forecasts over different time intervals",
    ],
    timeline: "2 months",
    team: "Solo project",
    screenshots: [
      stockMarket,
      StockMarket5,
      StockMarket1,
      StockMarket2,
      StockMarket3,
      StockMarket4,
    ],
  },
};

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Project not found
        </motion.h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <header className="text-black py-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black-50 to-indigo-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 text-center relative mt-8">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-serif mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {project.title}
            <span className="text-zinc-900">.</span>
          </motion.h1>
          <motion.p
            className="text-lg text-zinc-800 max-w-3xl font-serif mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {project.description}
          </motion.p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2 space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Project Preview
            </h2>
            <CCarousel
              controls
              interval={2000}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-xl"
              indicators
              dark
              pause="hover"
            >
              {project.screenshots.map((screenshot, index) => (
                <CCarouselItem
                  key={index}
                  className="transition-transform duration-500 ease-in-out"
                >
                  <CImage
                    className="d-block w-100 rounded-lg"
                    src={screenshot}
                    alt={`${project.title} preview ${index + 1}`}
                  />
                </CCarouselItem>
              ))}
            </CCarousel>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-8 text-gray-800">
              About the Project
            </h2>
            <div className="space-y-10">
              <motion.div variants={slideInLeft}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-600">
                  <Target className="h-5 w-5" /> Project Overview
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {project.longDescription}
                </p>
              </motion.div>

              <motion.div variants={slideInLeft}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-600">
                  <Trophy className="h-5 w-5" /> Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                      whileHover={{ scale: 1.02, backgroundColor: "#f0f9ff" }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-justify">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg"
            variants={scaleIn}
          >
            <h2 className="text-xl font-bold mb-6 text-gray-800">
              Project Links
            </h2>
            <div className="space-y-4">
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                whileHover={{ x: 5 }}
              >
                <Github className="h-5 w-5" /> View Source Code
              </motion.a>
              {project.liveLink && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink className="h-5 w-5" /> Visit Live Site
                </motion.a>
              )}
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg"
            variants={scaleIn}
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Technical Details
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <motion.div
                className="flex items-center gap-2 text-gray-600 p-2 py-0 rounded-lg hover:bg-gray-50"
                whileHover={{ x: 5 }}
              >
                <Calendar className="h-4 w-4" />
                <span>Timeline: {project.timeline}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-gray-600 p-2 py-0 rounded-lg hover:bg-gray-50"
                whileHover={{ x: 5 }}
              >
                <User className="h-4 w-4" />
                <span>Team: {project.team}</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectDetailsPage;
