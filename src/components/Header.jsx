import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaEnvelope, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', delay: 0.1 },
    { name: 'Projects', href: '#projects', delay: 0.2 },
    { name: 'Skills', href: '#skills', delay: 0.3 },
    { name: 'Contact', href: '#contact', delay: 0.4 },
  ];

 const socialLinks = [
  { icon: <FaGithub className="text-lg" />, href: 'https://github.com/vanos0600', name: 'GitHub' },
  { icon: <FaLinkedin className="text-lg" />, href: 'https://www.linkedin.com/in/oskar-vanegas-59301b322/', name: 'LinkedIn' },
  { icon: <FaEnvelope className="text-lg" />, href: 'vanegaso045@gmail.com', name: 'Email' },
];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
   <motion.header 
  className="fixed w-full z-50 py-4 transition-all duration-500 
             bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-indigo-900/95 
             backdrop-blur-xl shadow-2xl shadow-blue-900/20 border-b border-white/10"
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ type: 'spring', stiffness: 120, damping: 20 }}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#about')}
          >
            <motion.div 
              className="relative mr-3"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-400/30">
                <FaCode className="text-white text-sm" />
              </div>
              <motion.div 
                className="absolute -inset-1 bg-cyan-400/20 rounded-xl blur-sm"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white tracking-tight">
                OSKAR VANEGAS
              </h1>
              <motion.span 
                className="text-cyan-300 text-xs font-light tracking-wider"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                FULLSTACK DEVELOPER
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden lg:flex items-center space-x-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative px-4 py-2 font-medium text-sm uppercase tracking-wider transition-all duration-300 group ${
                  activeSection === link.href.substring(1) 
                    ? 'text-cyan-400' 
                    : 'text-blue-100 hover:text-white'
                }`}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <motion.span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 ${
                    activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-4 ml-6 pl-6 border-l border-white/20"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-blue-100 hover:text-white hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                >
                  {social.icon}
                  <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {social.name}
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="ml-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Let's Connect</span>
            </motion.button>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              className="relative w-6 h-6"
            >
              <motion.span
                className="absolute block w-6 h-0.5 bg-white rounded-full"
                variants={{
                  closed: { top: '0.25rem', rotate: 0 },
                  open: { top: '0.75rem', rotate: 45 }
                }}
              />
              <motion.span
                className="absolute block w-6 h-0.5 bg-white rounded-full"
                variants={{
                  closed: { top: '0.75rem', opacity: 1 },
                  open: { top: '0.75rem', opacity: 0 }
                }}
              />
              <motion.span
                className="absolute block w-6 h-0.5 bg-white rounded-full"
                variants={{
                  closed: { top: '1.25rem', rotate: 0 },
                  open: { top: '0.75rem', rotate: -45 }
                }}
              />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            {/* Social Links in Mobile */}
            <motion.div 
              className="flex items-center space-x-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-cyan-500/30 border border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-2xl font-bold tracking-wide transition-all duration-300 ${
                  activeSection === link.href.substring(1) 
                    ? 'text-cyan-400' 
                    : 'text-white hover:text-cyan-300'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>

            {/* Decorative Elements */}
            <motion.div
              className="absolute bottom-10 text-blue-100/30 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Scroll to Explore
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"
        style={{ width: '0%' }}
        animate={{ 
          width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` 
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );
}