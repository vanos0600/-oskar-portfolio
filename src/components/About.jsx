import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaArrowRight, FaStar, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-5 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-5 sm:right-10 w-60 h-60 sm:w-80 sm:h-80 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Code Elements */}
      <motion.div
        className="absolute top-16 left-6 sm:left-20 text-cyan-400/20 text-2xl sm:text-4xl"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCode />
      </motion.div>
      <motion.div
        className="absolute top-32 right-8 sm:right-32 text-blue-400/20 text-xl sm:text-3xl"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <FaLaptopCode />
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-8 sm:left-32 text-indigo-400/20 text-3xl sm:text-5xl"
        animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <FaRocket />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 flex items-center justify-center min-h-[80vh]">
        <div className="w-full">
          {/* Main Content - Centered */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center w-full mx-auto"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-8"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-cyan-300 text-sm font-medium">Fullstack Developer</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              variants={itemVariants}
            >
              Hi, I'm{' '}
              <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Oskar Vanegas
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight"
              variants={itemVariants}
            >
              Building Digital{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 leading-relaxed max-w-4xl mx-auto px-4"
              variants={itemVariants}
            >
              Passionate fullstack developer crafting beautiful, functional web applications 
              with modern technologies. Turning ideas into reality through clean code and 
              innovative solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">10+</div>
                <div className="text-blue-200 text-sm sm:text-base lg:text-lg">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">1+</div>
                <div className="text-blue-200 text-sm sm:text-base lg:text-lg">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">100%</div>
                <div className="text-blue-200 text-sm sm:text-base lg:text-lg">Dedication</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl flex items-center justify-center group hover:shadow-cyan-500/30 transition-all duration-300 relative overflow-hidden text-lg sm:text-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">View My Work</span>
                <FaArrowRight className="ml-3 relative transition-transform group-hover:translate-x-1" size={18} />
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 sm:px-10 py-4 sm:py-5 bg-transparent text-cyan-400 font-bold rounded-2xl flex items-center justify-center group border-2 border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm text-lg sm:text-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get In Touch</span>
                <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" size={18} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-4 sm:space-x-6 mb-12 sm:mb-16"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-blue-200 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/oskar-david-vanegas-juarez-59301b322/"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-blue-200 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Code Preview Section - Ahora ocupa toda la página */}
      <motion.div
        className="w-full bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-indigo-600/10 border-t border-b border-white/10 py-12 lg:py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative w-full"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Code Editor Style Preview - Sin fondo blanco */}
            <div className="bg-gradient-to-br from-blue-800/20 to-indigo-900/20 rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-2xl backdrop-blur-sm border border-white/10">
              <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-white/10">
                {/* Editor Header */}
                <div className="flex items-center justify-between mb-6 lg:mb-8">
                  <div className="flex space-x-2 lg:space-x-3">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm lg:text-base text-cyan-300 font-mono">portfolio.jsx</div>
                </div>
                
                {/* Code Content - Con colores que contrasten con el fondo azul */}
                <div className="font-mono text-sm lg:text-base xl:text-lg space-y-3 lg:space-y-4">
                  <div className="flex items-center">
                    <span className="text-purple-300 mr-4 lg:mr-6 w-8 text-right">1</span>
                    <span className="text-blue-300">function</span>
                    <span className="text-cyan-300 ml-2 lg:ml-3">Portfolio</span>
                    <span className="text-white">() {`{`}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-300 mr-4 lg:mr-6 w-8 text-right">2</span>
                    <span className="text-gray-300 ml-4 lg:ml-6">return</span>
                    <span className="text-white ml-2 lg:ml-3">(</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-300 mr-4 lg:mr-6 w-8 text-right">3</span>
                    <span className="text-yellow-300 ml-8 lg:ml-12">{`<`}</span>
                    <span className="text-cyan-300">div</span>
                    <span className="text-yellow-300">{`>`}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-300 mr-4 lg:mr-6 w-8 text-right">4</span>
                    <span className="text-yellow-300 ml-12 lg:ml-16">{`<`}</span>
                    <span className="text-cyan-300">Hero</span>
                    <span className="text-white ml-2 lg:ml-3">section</span>
                    <span className="text-yellow-300">{`/>`}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-300 mr-4 lg:mr-6 w-8 text-right">5</span>
                    <span className="text-yellow-300 ml-8 lg:ml-12">{`</`}</span>
                    <span className="text-cyan-300">div</span>
                    <span className="text-yellow-300">{`>`}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-300 mr-4 lg:mr-6 w-8 text-right">6</span>
                    <span className="text-white">)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-300 mr-4 lg:mr-6 w-8 text-right">7</span>
                    <span className="text-white">{`}`}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-300 mr-4 lg:mr-6 w-8 text-right">8</span>
                    <span className="text-gray-400">// Build with React & Next.js</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-300 mr-4 lg:mr-6 w-8 text-right">9</span>
                    <span className="text-gray-400">// Deployed on Vercel</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-300 mr-4 lg:mr-6 w-8 text-right">10</span>
                    <span className="text-gray-400">// Passionate about clean code</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Actualizados para el nuevo diseño */}
            <motion.div
              className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl p-3 lg:p-4 border border-cyan-400/30"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-lg lg:rounded-xl mr-2 lg:mr-3 border border-white/20 backdrop-blur-sm">
                  <FaStar className="text-cyan-300 w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm lg:text-base">React</p>
                  <p className="text-cyan-100 text-xs lg:text-sm">Expert</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl p-3 lg:p-4 border border-purple-400/30"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-lg lg:rounded-xl mr-2 lg:mr-3 border border-white/20 backdrop-blur-sm">
                  <FaCode className="text-purple-300 w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm lg:text-base">Fullstack</p>
                  <p className="text-purple-100 text-xs lg:text-sm">Developer</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl p-3 lg:p-4 border border-green-400/30"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-lg lg:rounded-xl mr-2 lg:mr-3 border border-white/20 backdrop-blur-sm">
                  <FaRocket className="text-green-300 w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm lg:text-base">Fast</p>
                  <p className="text-green-100 text-xs lg:text-sm">Delivery</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 sm:h-3 bg-cyan-400 rounded-full mt-1 sm:mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}