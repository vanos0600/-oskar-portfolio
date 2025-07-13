import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaGraduationCap, FaLightbulb, FaArrowRight,
  FaReact, FaJs, FaHtml5, FaFigma, FaNode, FaGitAlt
} from 'react-icons/fa';

export default function About() {
  const skills = [
    { name: 'React', level: 90, icon: <FaReact className="text-blue-600" /> },
    { name: 'JavaScript', level: 85, icon: <FaJs className="text-yellow-500" /> },
    { name: 'HTML/CSS', level: 95, icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'UI/UX Design', level: 75, icon: <FaFigma className="text-purple-600" /> },
    { name: 'Node.js', level: 70, icon: <FaNode className="text-green-600" /> },
    { name: 'Git & GitHub', level: 80, icon: <FaGitAlt className="text-red-600" /> },
  ];

  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Driven by <span className="text-blue-800">Passion</span>, Defined by <span className="text-blue-800">Persistence</span>
          </motion.h2>

          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full"></div>
          </div>

          <motion.p
            className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Transforming challenges into opportunities through code and determination
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Personal Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden border-4 border-blue-100">
                <div className="relative">
                  <div className="bg-gradient-to-b from-blue-50 to-blue-100 w-full h-96 flex items-center justify-center">
                    <div className="relative z-10">
                      <img
                        src="src/components/screenshots/logo.jpg"
                        alt="Oskar Vanegas"
                        className="w-64 h-64 rounded-full object-cover border-4 border-blue-300 shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-blue-900 rounded-xl shadow-2xl p-4 border border-blue-700">
              <div className="flex items-center">
                <div className="bg-blue-800 p-3 rounded-lg mr-3 border border-blue-700">
                  <FaCode className="text-blue-300 text-2xl" />
                </div>
                <div>
                  <p className="font-bold text-white">1+ Years</p>
                  <p className="text-sm text-blue-200">Coding Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              I'm <span className="text-blue-800">Oskar Vanegas</span>, a Fullstack Developer with relentless determination, combining frontend finesse with backend logic to build complete, user-focused web applications.
            </h3>

            <div className="space-y-8 mb-10">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="bg-blue-100 p-3 rounded-lg border border-blue-200">
                    <FaGraduationCap className="text-blue-800" size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Computer Science Student</h4>
                  <p className="text-gray-700">
                    Currently pursuing my degree while actively building real-world projects to expand my skills beyond the classroom.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="bg-blue-100 p-3 rounded-lg border border-blue-200">
                    <FaLightbulb className="text-blue-800" size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Frontend Focus</h4>
                  <p className="text-gray-700">
                    Specializing in creating responsive, accessible, and engaging user interfaces with React and modern JavaScript.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h4 className="font-bold text-blue-800 mb-6 text-xl">My Technical Skills</h4>
              <div className="grid grid-cols-2 gap-5">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="mr-3 text-lg">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-600">Proficiency</span>
                      <span className="text-sm font-semibold text-blue-800">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-700 to-blue-900"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="px-7 py-3.5 bg-gradient-to-r from-blue-800 to-blue-900 text-white font-bold rounded-xl shadow-lg flex items-center group hover:shadow-blue-900/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Connect With Me</span>
                <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#projects"
                className="px-7 py-3.5 bg-transparent text-blue-800 font-bold rounded-xl shadow-sm flex items-center group border-2 border-blue-800 hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Projects</span>
                <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Persistence Quote */}
        <motion.div
          className="mt-20 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl text-center border border-blue-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-blue-800 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 inline-block" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-800 font-light italic">
              "Persistence is not a long race; it's many short races one after another. In coding and in life, 
              I embrace each challenge with determination until the solution is found."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
