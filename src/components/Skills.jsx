import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaCode, 
  FaGraduationCap, FaChartLine, FaRocket, FaDatabase, FaServer,
  FaPalette, FaMobile, FaCloud, FaShieldAlt
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiTypescript, SiNextdotjs, SiRedux, SiNodedotjs, 
  SiMongodb, SiFigma, SiVite, SiExpress, SiJest, SiVercel, SiPostman
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Expertise",
      icon: <FaCode className="text-cyan-400 text-lg sm:text-xl" />,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400 text-lg sm:text-xl" />, level: 85, color: "from-cyan-400 to-blue-500" },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-lg sm:text-xl" />, level: 88, color: "from-yellow-400 to-orange-500" },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-lg sm:text-xl" />, level: 75, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", icon: <SiNextdotjs className="text-white text-lg sm:text-xl" />, level: 70, color: "from-gray-400 to-gray-700" },
        { name: "Redux", icon: <SiRedux className="text-purple-400 text-lg sm:text-xl" />, level: 72, color: "from-purple-400 to-purple-600" },
        { name: "Vite", icon: <SiVite className="text-yellow-400 text-lg sm:text-xl" />, level: 80, color: "from-yellow-400 to-purple-500" },
      ]
    },
    {
      title: "Styling & Design",
      icon: <FaPalette className="text-cyan-400 text-lg sm:text-xl" />,
      color: "from-pink-500 to-purple-600",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-400 text-lg sm:text-xl" />, level: 95, color: "from-orange-400 to-red-500" },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400 text-lg sm:text-xl" />, level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-lg sm:text-xl" />, level: 88, color: "from-cyan-400 to-teal-500" },
        { name: "Responsive Design", icon: <FaMobile className="text-green-400 text-lg sm:text-xl" />, level: 92, color: "from-green-400 to-green-600" },
        { name: "Figma", icon: <SiFigma className="text-purple-400 text-lg sm:text-xl" />, level: 70, color: "from-purple-400 to-pink-500" },
      ]
    },
    {
      title: "Development Tools",
      icon: <FaRocket className="text-cyan-400 text-lg sm:text-xl" />,
      color: "from-green-500 to-cyan-600",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-400 text-lg sm:text-xl" />, level: 85, color: "from-orange-400 to-red-500" },
        { name: "GitHub", icon: <FaGithub className="text-white text-lg sm:text-xl" />, level: 88, color: "from-gray-400 to-gray-700" },
        { name: "VS Code", icon: <FaCode className="text-blue-400 text-lg sm:text-xl" />, level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Vercel", icon: <SiVercel className="text-white text-lg sm:text-xl" />, level: 80, color: "from-gray-400 to-gray-700" },
        { name: "Postman", icon: <SiPostman className="text-orange-400 text-lg sm:text-xl" />, level: 75, color: "from-orange-400 to-red-500" },
        { name: "Jest", icon: <SiJest className="text-red-400 text-lg sm:text-xl" />, level: 65, color: "from-red-400 to-red-600" },
      ]
    },
    {
      title: "Backend & Database",
      icon: <FaServer className="text-cyan-400 text-lg sm:text-xl" />,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-400 text-lg sm:text-xl" />, level: 78, color: "from-green-400 to-green-600" },
        { name: "Express.js", icon: <SiExpress className="text-gray-400 text-lg sm:text-xl" />, level: 75, color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-lg sm:text-xl" />, level: 72, color: "from-green-400 to-green-600" },
        { name: "REST APIs", icon: <FaCloud className="text-blue-400 text-lg sm:text-xl" />, level: 80, color: "from-blue-400 to-blue-600" },
        { name: "JWT Auth", icon: <FaShieldAlt className="text-purple-400 text-lg sm:text-xl" />, level: 70, color: "from-purple-400 to-purple-600" },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-5 sm:right-10 w-40 h-40 sm:w-96 sm:h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4 sm:mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full mr-2 sm:mr-3"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              Technical <span className="text-cyan-400">Proficiency</span>
            </h2>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full ml-2 sm:ml-3"></div>
          </motion.div>

          <motion.div
            className="flex justify-center mb-6 sm:mb-8"
            initial={{ width: 0 }}
            animate={{ width: "80px sm:100px lg:120px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-20 h-1 sm:w-24 lg:w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/30"></div>
          </motion.div>
          
          <motion.p 
            className="text-blue-100 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Continuously expanding my skill set through dedicated practice, real-world application, and relentless determination
          </motion.p>
        </motion.div>

        {/* Skills Grid - Mejorado para responsive */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="relative group"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-white/5 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl h-full border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(34, 211, 238, 0.25)"
                }}
              >
                {/* Category Header */}
                <div className="p-4 sm:p-6 pb-3 sm:pb-4 flex items-center border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
                  <motion.div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-3 sm:mr-4 border border-white/20 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{category.title}</h3>
                </div>
                
                {/* Skills List */}
                <div className="p-4 sm:p-6">
                  <div className="space-y-4 sm:space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex}
                        className="skill-item group/skill"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (skillIndex * 0.08) }}
                      >
                        <div className="flex justify-between items-center mb-2 sm:mb-3">
                          <div className="flex items-center">
                            <motion.div 
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center mr-3 sm:mr-4 border border-white/10 group-hover/skill:bg-white/10 transition-all duration-300"
                              whileHover={{ scale: 1.1, rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              {skill.icon}
                            </motion.div>
                            <span className="font-medium text-white text-sm group-hover/skill:text-cyan-100 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <motion.span 
                            className="text-cyan-300 font-bold text-xs sm:text-sm bg-white/5 px-2 py-1 rounded border border-white/10"
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                            variants={progressVariants}
                            initial="hidden"
                            animate="visible"
                            custom={skill.level}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Animated Background Effect */}
                <motion.div 
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl sm:rounded-3xl blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-2xl sm:rounded-3xl"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Continuous Improvement Section */}
        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-20 bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 backdrop-blur-sm shadow-xl sm:shadow-2xl mx-2 sm:mx-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 lg:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4 sm:mr-6 mb-3 sm:mb-0 border border-cyan-400/30 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaGraduationCap className="text-white text-lg sm:text-xl lg:text-2xl" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center sm:text-left">Continuous Growth Mindset</h3>
            </motion.div>
            
            <motion.blockquote 
              className="text-blue-100 text-center text-base sm:text-lg lg:text-xl italic mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              "I approach learning with relentless determination. Each skill is not just learned but mastered through persistent practice, real-world application, and an unwavering commitment to excellence."
            </motion.blockquote>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              {[
                { 
                  icon: <FaGraduationCap className="text-cyan-400 text-lg sm:text-xl" />, 
                  text: "University Coursework",
                  description: "Structured learning in computer science fundamentals"
                },
                { 
                  icon: <FaChartLine className="text-green-400 text-lg sm:text-xl" />, 
                  text: "Daily Coding Practice",
                  description: "Consistent hands-on coding and algorithm practice"
                },
                { 
                  icon: <FaCode className="text-purple-400 text-lg sm:text-xl" />, 
                  text: "Weekly Project Challenges",
                  description: "Building real applications to solve problems"
                },
                { 
                  icon: <FaGithub className="text-white text-lg sm:text-xl" />, 
                  text: "Real-world Application",
                  description: "Contributing to open source and personal projects"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="px-4 sm:px-6 py-4 sm:py-5 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group hover:bg-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + (index * 0.1) }}
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <div className="flex items-start">
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 flex items-center justify-center mr-3 sm:mr-4 border border-cyan-400/20 group-hover:border-cyan-400/40 transition-all"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base lg:text-lg group-hover:text-cyan-300 transition-colors leading-tight">
                        {item.text}
                      </h4>
                      <p className="text-blue-200 text-xs sm:text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="flex justify-center mb-6 sm:mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
          >
            <div className="w-32 h-1 sm:w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="text-cyan-100 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg font-light leading-relaxed"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.4 }}
          >
            Skills are not static markers of ability but dynamic capabilities cultivated through 
            <span className="text-cyan-400 font-semibold"> persistent effort</span>, 
            <span className="text-cyan-400 font-semibold"> real-world application</span>, and an 
            <span className="text-cyan-400 font-semibold"> unwavering commitment to growth</span>.
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <div className="flex items-center text-cyan-400 text-sm sm:text-base">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="mr-2 sm:mr-3"
              >
                <FaRocket className="text-lg sm:text-xl" />
              </motion.div>
              <span className="font-semibold">Always Learning, Always Growing</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
