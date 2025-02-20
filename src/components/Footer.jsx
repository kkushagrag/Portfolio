import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaCopy,
} from "react-icons/fa";
import { motion } from "framer-motion";

const FooterSection = () => {
  const [copyNotification, setCopyNotification] = useState({
    show: false,
    text: "",
  });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopyNotification({ show: true, text: `${type} copied!` });

    setTimeout(() => {
      setCopyNotification({ show: false, text: "" });
    }, 2000);
  };

  return (
    <footer className="relative w-full py-16 bg-gray-900 text-gray-300 font-times">
      <section id="connect">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

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
            connect.
          </motion.h2>

          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a
            query, or simply want to connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <div className="group relative flex items-center gap-2 bg-gray-800 px-4 py-3 rounded-lg transition-transform hover:scale-105">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kushagragangwar05@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:underline"
              >
                kushagragangwar05@gmail.com
              </a>
              <button
                onClick={() =>
                  copyToClipboard("kushagragangwar05@gmail.com", "Email")
                }
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Copy email"
              >
                <FaCopy />
              </button>
            </div>

            <div className="group relative flex items-center gap-2 bg-gray-800 px-4 py-3 rounded-lg transition-transform hover:scale-105">
              <FaPhone className="text-blue-400 text-2xl" />
              <a
                href="tel:+917534960915"
                className="text-white text-xl hover:underline"
              >
                +91 7534960915
              </a>
              <button
                onClick={() =>
                  copyToClipboard("+91 7534960915", "Phone number")
                }
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Copy phone number"
              >
                <FaCopy />
              </button>
            </div>
          </div>

          {copyNotification.show && (
            <div className="fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg animate-fadeIn">
              {copyNotification.text}
            </div>
          )}

          <p className="mb-8 text-lg">Connect with me on these platforms</p>

          <div className="flex justify-center flex-wrap gap-6 mb-16">
            <a
              href="https://linkedin.com/in/kkushagrag"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full text-3xl text-blue-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 focus:ring-4 focus:ring-blue-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/kkushagrag"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full text-3xl text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 focus:ring-4 focus:ring-blue-500"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com/kushagrag_"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full text-3xl text-pink-400 hover:text-white hover:bg-gradient-to-br from-purple-600 to-pink-500 transition-all duration-300 transform hover:scale-110 focus:ring-4 focus:ring-blue-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com/kkushagrag"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full text-3xl text-blue-400 hover:text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 focus:ring-4 focus:ring-blue-500"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            {/* <a
              href="https://youtube.com/kkushagrag"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full text-3xl text-red-400 hover:text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110 focus:ring-4 focus:ring-blue-500"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a> */}
          </div>

          <div className="text-sm text-gray-500 border-t border-gray-800 pt-6">
            <p>
              © {new Date().getFullYear()} Kushagra Gangwar. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;
