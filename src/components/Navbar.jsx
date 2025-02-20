import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import resume from "../assets/Kushagra_Resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    // { name: "Connect", path: "/contact" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { ease: "easeInOut", duration: 0.3 },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { ease: "easeInOut", duration: 0.3 },
    },
  };

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname === path) return true;
    return false;
  };

  return (
    <header className="bg-white dark:bg-gray-800 py-4 px-6 fixed top-0 left-0 w-full z-20 shadow-md">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto"
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-3xl font-bold font-serif text-gray-800 dark:text-white cursor-pointer"
            >
              &lt;Kushagra /&gt;
            </motion.div>
          </Link>

          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, color: "#4F46E5" }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-gray-800 dark:text-white text-lg font-medium relative ${
                      isActive(item.path) ? "text-indigo-600" : ""
                    }`}
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive(item.path) ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </Link>
              ))}
            </nav>

            {/* Download CV Button */}
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#4338CA" }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              <span>Download CV</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-gray-800 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col gap-4 bg-white dark:bg-gray-800 rounded-lg p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className={`font-medium py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-right ${
                        isActive(item.path)
                          ? "text-indigo-600 bg-indigo-50 dark:bg-gray-700"
                          : "text-gray-800 dark:text-white"
                      }`}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
                <motion.a
                  href="/Kushagra_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-end gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg"
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText size={18} />
                  <span>Download CV</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;
