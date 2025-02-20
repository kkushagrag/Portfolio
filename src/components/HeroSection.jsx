import React from "react";
import { MapPin } from "lucide-react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import faceImage from "../assets/IMG_3847.JPG";

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-40 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Image Section */}
          <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute -left-4 -top-4 h-full w-full bg-gray-200"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              />
              <motion.div
                className="absolute -right-4 -bottom-4 h-full w-full bg-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              />

              {/* Image Decorative Elements */}
              <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
                <div className="group relative">
                  {/* Image Decorative Elements */}
                  <div className="absolute -left-4 -top-4 h-full w-full bg-purple-500/20 backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2" />
                  <div className="absolute -right-4 -bottom-4 h-full w-full bg-pink-500/20 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />

                  {/* Main Image */}
                  <div className="relative h-[400px] w-[350px] overflow-hidden border-4 border-white/10 bg-gray-800/50 shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.02] md:h-[460px] md:w-[380px]">
                    <img
                      src={faceImage}
                      alt="Headshot of Kushagra"
                      className="h-full w-full object-cover opacity-90 transition-all duration-300 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
            {/* Greeting */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl font-medium text-blue-600">
                Welcome to my portfolio
              </p>
              <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl">
                Hi, I&apos;m Kushagra{" "}
                <motion.span
                  className="inline-block"
                  animate={{
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  👋
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-xl text-gray-600 text-justify"
              style={{ fontFamily: "Times New Roman, serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I&apos;m a full-stack developer (React.js & Node.js) with a focus
              on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              some time now, I still love it as if it was something new.
            </motion.p>

            {/* Location & Availability */}
            <motion.div
              className="space-y-3 font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Gurugram, India</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                <span>Available for new projects</span>
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {[
                { Icon: Github, href: "https://github.com/kkushagrag/" },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/kkushagrag/",
                },
                { Icon: Twitter, href: "https://twitter.com/kushagrag_/" },
                { Icon: Instagram, href: "https://instagram.com/kushagrag_/" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
