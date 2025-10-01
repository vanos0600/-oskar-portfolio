import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaChevronLeft, 
  FaChevronRight,
  FaCode,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaRocket
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';
import { tr } from 'framer-motion/client';

export default function Projects() {
  const [activeImages, setActiveImages] = useState([0, 0, 0, 0]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "PhysioApp - Management System",
      description: "Complete full-stack application for managing patients, appointments, and physiotherapy treatments with real-time updates and secure authentication system.",
      images: [
        "/screenshots/login.jpg",
        "/screenshots/patients.jpg",
        "/screenshots/register.jpg",
        "/screenshots/forgot-password.jpg"
      ],
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "JWT"],
      category: "fullstack",
      github: "https://github.com/vanos0600/physioapp",
      live: "https://physioapp-demo.vercel.app",
      featured: true
    },


    {
      title: "Personal Portfolio",
      description: "Modern, responsive web portfolio built with React and Tailwind CSS, featuring smooth animations and optimized performance for showcasing professional work.",
      images: [
        "/screenshots/personal.png",
        "/screenshots/info.png",
        "/screenshots/tech.png"
      ],
      tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript","Vite"],
      category: "frontend",
      github: "https://github.com/vanos0600/-oskar-portfolio",
      live: "https://oskar-portfolio-8d44.vercel.app/",
      featured: true
    },


    {
      title: "Crypto Mini Tracker",
      description: "Real-time cryptocurrency tracking application with beautiful data visualizations, price alerts, and portfolio management features built with Next.js and TypeScript.",
      images: [
        "/screenshots/crypto1.png",
        "/screenshots/crypto2.png",
      ],
      tech: ["Next.js", "TypeScript", "Firebase", "Chart.js"],
      category: "fullstack",
      github: "https://github.com/vanos0600/crypto-tracker",
      live: "https://crypto-tracker-demo.vercel.app",
      featured: false
    },


    {
      title: "Astorre Landing Page",
      description: "Modern landing page showcasing Astorre’s AI-powered staff management platform, featuring a clean two-column layout, benefits highlights, and a strong call-to-action.",
      images: [
        "/screenshots/Astorre1.png",
        "/screenshots/Astorre2.png",
        "/screenshots/Astorre3.png"
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/vanos0600/Astorre",
      live: "https://astorre.vercel.app/",
      featured: false
    },



    {
      title: "Ultimate Task Management Solution",
      description: "Are you tired of juggling multiple tasks without a clear overview? Meet TaskFlow, a sleek and intuitive task management app designed to keep you organized and boost your productivity!",
      images: [
        "/screenshots/Tasklow1.png",
        "/screenshots/Tasklow2.png",
        "/screenshots/Tasklow3.png"
      ],
      tech: ["HTML", "CSS","TypeScript", "Vite", "JavaScript"],
      category: "frontend",
      github: "https://github.com/vanos0600/react-task-app",
      live: "https://task-flow-delta-silk.vercel.app/",
      featured: false
    },

    {
      title: "Astorre Coming Soon Page",
      description: "A sleek and modern coming soon page for Astorre, an AI-powered staff management platform, featuring a countdown timer, email subscription form, and social media links.",
      images: [
        "/screenshots/Astorrecoming.png", 
       
      ],
      tech: ["HTML", "CSS"],
      category: "frontend",
      github: "https://github.com/vanos0600/astorre-coming-soon",
      live: "http://www.astorre.tech",
      featured: true
    }


    
  ];

  const techIcons = {
    'React': <FaCode className="text-cyan-400" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
    'Node.js': <FaCode className="text-green-400" />,
    'MongoDB': <SiMongodb className="text-green-400" />,
    'Express': <FaCode className="text-gray-400" />,
    'Framer Motion': <FaRocket className="text-purple-400" />,
    'Next.js': <SiNextdotjs className="text-white" />,
    'TypeScript': <SiTypescript className="text-blue-400" />,
    'Firebase': <SiFirebase className="text-orange-400" />,
    'JWT': <FaCloud className="text-pink-400" />,
    'Vite': <FaRocket className="text-yellow-400" />,
    'Chart.js': <FaCode className="text-red-400" />,
    'AI APIs': <FaRocket className="text-purple-400" />
  };

  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Featured', value: 'featured' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const nextImage = (index) => {
    setActiveImages((prev) => {
      const newImages = [...prev];
      newImages[index] = (newImages[index] + 1) % filteredProjects[index].images.length;
      return newImages;
    });
  };

  const prevImage = (index) => {
    setActiveImages((prev) => {
      const newImages = [...prev];
      newImages[index] =
        (newImages[index] - 1 + filteredProjects[index].images.length) % filteredProjects[index].images.length;
      return newImages;
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  };

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <div className="w-4 h-4 bg-cyan-400 rounded-full mr-3"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="w-4 h-4 bg-cyan-400 rounded-full ml-3"></div>
          </motion.div>

          <motion.div
            className="flex justify-center mb-8"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/30"></div>
          </motion.div>

          <motion.p
            className="text-blue-100 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A curated collection of my most impactful work, blending cutting-edge technology with elegant design solutions.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400/30 shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 text-blue-100 border-white/10 hover:bg-white/10 hover:border-cyan-400/20'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={item}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover="hover"
            >
              <motion.div
                className="bg-white/5 rounded-3xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
                variants={{
                  hover: {
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.25)"
                  }
                }}
              >
                {/* Image Carousel */}
                <div className="relative aspect-video overflow-hidden">
                  <AnimatePresence mode="wait" custom={activeImages[index]}>
                    <motion.img
                      key={activeImages[index]}
                      src={project.images[activeImages[index]]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      custom={activeImages[index]}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(index);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-xl p-3 shadow-2xl backdrop-blur-sm border border-white/20 z-20 hover:bg-cyan-500/80 hover:border-cyan-400 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronLeft className="h-4 w-4 text-white" />
                  </motion.button>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(index);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-xl p-3 shadow-2xl backdrop-blur-sm border border-white/20 z-20 hover:bg-cyan-500/80 hover:border-cyan-400 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronRight className="h-4 w-4 text-white" />
                  </motion.button>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    {project.images.map((_, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        onClick={() => {
                          setActiveImages((prev) => {
                            const newImages = [...prev];
                            newImages[index] = imgIndex;
                            return newImages;
                          });
                        }}
                        className={`w-3 h-3 rounded-full cursor-pointer backdrop-blur-sm border ${
                          imgIndex === activeImages[index] 
                            ? "bg-cyan-400 scale-125 border-cyan-400" 
                            : "bg-white/30 border-white/20 hover:bg-white/50"
                        } transition-all duration-300`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-20"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      ⭐ Featured
                    </motion.div>
                  )}

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-black/50 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-cyan-400/30 z-20"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-8 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4"></div>
                    <p className="text-blue-100 leading-relaxed">{project.description}</p>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-cyan-300 font-semibold mb-3 flex items-center">
                      <FaCode className="mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-blue-100 text-sm font-medium backdrop-blur-sm group/tech"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="mr-2">{techIcons[tech]}</span>
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-400 mr-3 shadow-lg shadow-green-400/30 animate-pulse"></div>
                      <span className="text-cyan-300 text-sm font-medium">Project Completed</span>
                    </div>
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-blue-100 hover:text-white hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="text-xl" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                variants={{
                  hover: {
                    opacity: 1
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-3xl"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.p
            className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Interested in working together? I'm always open to discussing new opportunities and innovative projects.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start a Project</span>
            <FaRocket className="ml-3 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}