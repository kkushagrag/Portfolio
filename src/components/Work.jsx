import React, { useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import rannlab from "../assets/rannlab.jpeg";
import automobile from "../assets/automobile.jpg";

const ExperienceSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "RannLabs Technologies",
      companyLogo: rannlab,
      duration: "Jun 2024 - Jul 2024",
      location: "Noida, India",
      description:
        "Led the development of scalable web applications using React.js and Node.js. Implemented microservices architecture and improved system performance by 40%.",
      skills: ["React.js", "Node.js", "JavaScript", "API Integration"],
    },
    {
      id: 2,
      role: "Content Head",
      company: "Automobile Club, BML Munjal University",
      companyLogo: automobile,
      duration: "Aug 2023 - May 2024",
      location: "Gurugram, India",
      description:
        "Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      skills: ["Leadership", "Content Writing", "Report Writing"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const experienceVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const timelineDotVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
  };

  return (
    <section id="work">
      <div className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <section className="relative w-full py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              className="text-7xl md:text-8xl lg:text-9xl font-serif mb-12 cursor-pointer"
              style={{ fontFamily: "serif" }}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              experience.
            </motion.h2>

            <motion.div
              className="relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Center line */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`mb-8 flex justify-center items-center w-full ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                  variants={experienceVariants}
                >
                  {/* Timeline content */}
                  <div className="w-5/12">
                    <motion.div
                      className="bg-white rounded-lg p-6 shadow-lg font-[Times New Roman]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="space-y-4">
                        {/* Header with Logo */}
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-50">
                            <img
                              src={exp.companyLogo}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex-grow">
                            <h3 className="text-2xl font-semibold text-gray-800 font-serif">
                              {exp.role}
                            </h3>
                            <p className="text-xl text-gray-600">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4 text-gray-600 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-justify text-lg">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <motion.span
                              key={skill}
                              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                      variants={timelineDotVariants}
                    />
                  </div>

                  <div className="w-5/12" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ExperienceSection;
