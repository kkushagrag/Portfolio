import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import node from "../assets/node.png";
import androidstudio from "../assets/androidstudio.png";
import git from "../assets/git.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import express from "../assets/express.png";

const SkillsSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { name: "Java", level: "Advanced", logo: java },
    { name: "JavaScript", level: "Intermediate", logo: javascript },
    { name: "MongoDB", level: "Beginner", logo: mongodb },
    { name: "Express.js", level: "Intermediate", logo: express },
    { name: "React.js", level: "Intermediate", logo: react },
    { name: "Node.js", level: "Intermediate", logo: node },
    { name: "Python", level: "Intermediate", logo: python },
    { name: "MySQL", level: "Intermediate", logo: mysql },
    { name: "Tailwind CSS", level: "Intermediate", logo: tailwind },
    { name: "Android Studio", level: "Advanced", logo: androidstudio },
    { name: "Git", level: "Advanced", logo: git },
    { name: "Figma", level: "Intermediate", logo: figma }
  ];

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for individual skill cards
  const skillCardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Hover animation for skill cards
  const skillCardHover = {
    scale: 1.05,
    rotateZ: 1,
    transition: {
      type: "spring",
      stiffness: 300
    }
  };

  return (
    <section id="skills">
      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <section className="relative w-full py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              className="text-7xl md:text-8xl lg:text-9xl font-serif mb-12 cursor-pointer"
              style={{ fontFamily: "serif" }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2 
              }}
              whileHover={{ 
                scale: 1.05,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut"
                }
              }}
            >
              skills.
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
                  variants={skillCardVariants}
                  whileHover={skillCardHover}
                  custom={index}
                >
                  <motion.img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-16 h-16 rounded-lg shadow-sm mb-4"
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.8 }
                    }}
                  />
                  <motion.h4 
                    className="text-lg font-semibold text-gray-800 text-center mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {skill.name}
                  </motion.h4>
                  <motion.span 
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {skill.level}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SkillsSection;