import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-gradient-to-b from-white to-blue-50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-blue-700 w-3 h-3 rounded-full mr-2 animate-pulse" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            OSKAR VANEGAS
          </h1>
          <span className="ml-2 text-blue-700 text-sm font-light">| Developer</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-800 font-medium text-sm uppercase tracking-wider relative group"
              whileHover={{ y: -2 }}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
          <motion.button
            className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-800 to-blue-900 text-white font-bold rounded-md shadow-lg transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-gray-800 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <div className={`w-6 h-0.5 bg-blue-800 mb-1.5 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-blue-800 mb-1.5 transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-blue-800 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-2xl text-gray-800 font-bold hover:text-blue-800"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-900 text-white font-bold rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      )}
    </motion.header>
  );
}