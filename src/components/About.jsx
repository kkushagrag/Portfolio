import React, { useEffect } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about" className="relative w-full overflow-hidden">
      {/* Background Pattern */}
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
            about.
          </motion.h2>

          {/* Description with Staggered Animations */}
          <motion.p
            className="text-gray-600 text-xl md:text-xl max-w-7xl mx-auto leading-relaxed text-justify"
            style={{ fontFamily: "Times New Roman, serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I am a motivated full-stack developer and Java enthusiast,
            currently in my third year of B.Tech in Computer Science
            Engineering. I specialize in frontend and backend technologies
            like React.js, Node.js, Java, and modern tools such as Next.js,
            TypeScript, and Socket.io. Passionate about innovation and
            user-centric design, I thrive in taking projects from ideation to
            deployment, ensuring performance and seamless user experiences.
            <br />
            <br />
            Since starting my development journey two years ago, I’ve embraced
            challenges, continuously evolving with the latest technologies. As
            a full-time freelancer, I’m open to collaborations and exciting
            opportunities. Feel free to connect with me on
            <motion.a
              href="https://instagram.com/kushagrag_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mx-1"
              whileHover={{ scale: 1.1, color: "#2563eb" }}
            >
              Instagram
            </motion.a>
            ,
            <motion.a
              href="https://github.com/kkushagrag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mx-1"
              whileHover={{ scale: 1.1, color: "#2563eb" }}
            >
              GitHub
            </motion.a>
            , or
            <motion.a
              href="https://linkedin.com/in/kkushagrag"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mx-1"
              whileHover={{ scale: 1.1, color: "#2563eb" }}
            >
              LinkedIn
            </motion.a>
            . Let’s build something great together! 🚀
          </motion.p>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
