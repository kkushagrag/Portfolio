import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Work";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/Projects";
import ProjectDetailsPage from "./components/ProjectDetailsPage";
import FooterSection from "./components/Footer";

// Main layout component that includes the common elements
const Layout = ({ children }) => {
  const location = useLocation();
  const isProjectDetails = location.pathname.includes('/projects/');

  return (
    <div>
      <Navbar />
      {children}
      <FooterSection />
    </div>
  );
};

// Home page component that combines all sections
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main home page route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Individual section routes */}
          <Route path="/about" element={<AboutSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          
          {/* Project details route */}
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          
          {/* 404 route */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                <p className="mb-8">The page you're looking for doesn't exist.</p>
                <a 
                  href="/"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Return Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;