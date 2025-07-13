import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaCode, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiRedux, SiNodedotjs, SiMongodb, SiFigma } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Expertise",
      icon: <FaCode className="text-blue-700 text-xl" />,
      skills: [
        { name: "React", icon: <FaReact className="text-blue-600 text-xl" />, level: 75 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-xl" />, level: 80 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-700 text-xl" />, level: 65 },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 text-xl" />, level: 60 },
        { name: "Redux", icon: <SiRedux className="text-purple-600 text-xl" />, level: 65 },
      ]
    },
    {
      title: "Styling & Markup",
      icon: <FaCss3Alt className="text-blue-700 text-xl" />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-xl" />, level: 90 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-xl" />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-xl" />, level: 80 },
        { name: "Responsive Design", icon: <div className="text-blue-700 font-bold text-sm">RWD</div>, level: 85 },
      ]
    },
    {
      title: "Development Tools",
      icon: <FaGitAlt className="text-blue-700 text-xl" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600 text-xl" />, level: 80 },
        { name: "GitHub", icon: <FaGithub className="text-gray-900 text-xl" />, level: 85 },
        { name: "VS Code", icon: <div className="text-blue-600 font-bold text-sm">VS</div>, level: 95 },
        { name: "Figma", icon: <SiFigma className="text-purple-600 text-xl" />, level: 65 },
      ]
    },
    {
      title: "Backend & Database",
      icon: <SiNodedotjs className="text-blue-700 text-xl" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-xl" />, level: 70 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-xl" />, level: 65 },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">Proficiency</span>
          </motion.h2>
          
          <div className="flex justify-center mb-6">
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ delay: 0.2, duration: 0.8 }}
            ></motion.div>
          </div>
          
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Continuously expanding my skill set through dedicated practice and real-world application
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="relative group"
              variants={item}
            >
              <div className="bg-white rounded-2xl shadow-xl h-full border border-gray-200 overflow-hidden transition-all duration-500 group-hover:border-blue-300 group-hover:shadow-2xl">
                <div className="p-6 pb-4 flex items-center border-b border-gray-100">
                  <div className="mr-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center border border-blue-200">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 border border-blue-100">
                              {skill.icon}
                            </div>
                            <span className="font-medium text-gray-800 text-sm">{skill.name}</span>
                          </div>
                          <span className="text-blue-800 font-bold text-sm">{skill.level}%</span>
                        </div>
                        
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-700 to-blue-900 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: 0.2 + (skillIndex * 0.1),
                              ease: [0.16, 1, 0.3, 1]
                            }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 -z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 to-blue-200/40 rounded-2xl blur-lg opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-blue-100/30 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Continuous Improvement Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-4 border border-blue-200">
                <FaGraduationCap className="text-blue-800 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center">Continuous Growth Mindset</h3>
            </div>
            
            <motion.blockquote 
              className="text-gray-700 text-center text-lg italic mb-8 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              "I approach learning with relentless determination. Each skill is not just learned but mastered through persistent practice and real-world application."
            </motion.blockquote>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: <FaGraduationCap className="text-blue-700" />, text: "University Coursework" },
                { icon: <FaChartLine className="text-blue-700" />, text: "Daily Coding Practice" },
                { icon: <FaCode className="text-blue-700" />, text: "Weekly Project Challenges" },
                { icon: <FaGithub className="text-blue-700" />, text: "Real-world Application" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2.5 bg-blue-50 text-blue-800 rounded-xl border border-blue-200 shadow-sm flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                >
                  <div className="mr-2">
                    {item.icon}
                  </div>
                  <span className="font-medium text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex justify-center mb-8">
            <div className="w-64 h-0.5 bg-gradient-to-r from-transparent via-blue-700 to-transparent"></div>
          </div>
          
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto text-lg"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.1 }}
          >
            Skills are not static - they're cultivated through persistent effort and real-world application
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}