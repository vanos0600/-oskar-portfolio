import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [activeImages, setActiveImages] = useState([0, 0, 0, 0]);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "PhysioApp - Management System",
      description: "Complete application for managing patients, appointments, and physiotherapy treatments with full-stack integration.",
      images: [
        "/screenshots/login.jpg",
        "/screenshots/patients.jpg",
        "/screenshots/register.jpg",
        "/screenshots/forgot-password.jpg"
      ],
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Personal Portfolio",
      description: "Web portfolio created with React and Tailwind CSS showcasing projects, skills, and professional experience.",
      images: [
        "public/screenshots/personal.png",
        "public/screenshots/info.png",
        "public/screenshots/tech.png"
      ],
      tech: ["React", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Crypto Mini Tracker",
      description: "stylish web application that displays real-time prices and 24h change for popular cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), and Ripple (XRP). ",
      images: [
        "public/screenshots/crypto1.png",
        "public/screenshots/crypto2.png",
      ],
      tech: ["Next.js", "TypeScript", "Firebase"]
    },
    {
      title: "AI-Generated Comics",
      description: "Innovative project to create comics with cyber warriors and magic wizards using AI to dynamically generate images and text.",
      images: [
        "/images/ai-comics-cover.jpg",
        "/images/ai-comics-panel1.jpg",
        "/images/ai-comics-panel2.jpg"
      ],
      tech: ["React", "AI APIs", "Tailwind CSS"]
    }
  ];

  const nextImage = (index) => {
    setActiveImages((prev) => {
      const newImages = [...prev];
      newImages[index] = (newImages[index] + 1) % projects[index].images.length;
      return newImages;
    });
  };

  const prevImage = (index) => {
    setActiveImages((prev) => {
      const newImages = [...prev];
      newImages[index] =
        (newImages[index] - 1 + projects[index].images.length) % projects[index].images.length;
      return newImages;
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">Projects</span>
          </motion.h2>
          <div className="flex justify-center mb-4">
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            A curated collection of my most impactful work, blending technical expertise with elegant design solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={item}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 group-hover:shadow-xl">
                {/* Image Carousel */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.images[activeImages[index]]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(index);
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg backdrop-blur-sm border border-gray-300 z-20 hover:bg-blue-100 hover:border-blue-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(index);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg backdrop-blur-sm border border-gray-300 z-20 hover:bg-blue-100 hover:border-blue-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20">
                    {project.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        onClick={() => {
                          setActiveImages((prev) => {
                            const newImages = [...prev];
                            newImages[index] = imgIndex;
                            return newImages;
                          });
                        }}
                        className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                          imgIndex === activeImages[index] ? "bg-blue-700 scale-125" : "bg-gray-300"
                        } transition-all`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 mt-2 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 mb-5 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                      <span className="text-blue-700 text-sm">Project Completed</span>
                    </div>
                    <button className="text-blue-700 hover:text-blue-900 text-sm font-medium flex items-center group">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              {hoveredProject === index && (
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 to-blue-100/40 rounded-xl blur-lg opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-blue-100/30 rounded-xl opacity-40"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
