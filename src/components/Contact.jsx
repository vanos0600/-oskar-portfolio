import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, 
  FaPaperPlane, FaGlobe, FaCalendarAlt, FaRocket, FaExclamationTriangle 
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Reemplaza con tu endpoint de Formspree
      const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT';

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name}`
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactItems = [
    { 
      icon: <FaEnvelope className="text-white text-lg md:text-xl" />, 
      text: 'vanegaso045@gmail.com',
      link: 'mailto:vanegaso045@gmail.com',
      color: "from-cyan-400 to-blue-500",
      delay: 0.1
    },
    { 
      icon: <FaLinkedin className="text-white text-lg md:text-xl" />, 
      text: 'linkedin.com/in/oskar-vanegas',
      link: 'https://www.linkedin.com/in/oskar-vanegas-59301b322/',
      color: "from-blue-400 to-blue-600",
      delay: 0.2
    },
    { 
      icon: <FaGithub className="text-white text-lg md:text-xl" />, 
      text: 'github.com/vanos0600',
      link: 'https://github.com/vanos0600',
      color: "from-purple-400 to-indigo-500",
      delay: 0.3
    },
    { 
      icon: <FaPhone className="text-white text-lg md:text-xl" />, 
      text: '+420 774 057 431',
      link: 'tel:+420774057431',
      color: "from-green-400 to-green-600",
      delay: 0.5
    },
    { 
      icon: <FaMapMarkerAlt className="text-white text-lg md:text-xl" />, 
      text: 'Prague, Czech Republic',
      link: 'https://maps.google.com/?q=Prague,Czech+Republic',
      color: "from-red-400 to-pink-500",
      delay: 0.6
    }
  ];

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

  const cardHoverVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons - Responsive */}
      <motion.div
        className="absolute top-10 right-4 md:top-20 md:right-20 text-cyan-400/20 text-2xl md:text-4xl"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaPaperPlane />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-4 md:bottom-40 md:left-20 text-blue-400/20 text-xl md:text-3xl"
        animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <FaEnvelope />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4 md:mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <div className="w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full mr-2 md:mr-3"></div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>
            <div className="w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full ml-2 md:ml-3"></div>
          </motion.div>
          
          <motion.div
            className="flex justify-center mb-6 md:mb-8"
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/30"></div>
          </motion.div>
          
          <motion.p 
            className="text-blue-100 max-w-2xl mx-auto text-sm md:text-lg lg:text-xl leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm currently available for new opportunities and collaborations. Whether you have a project in mind or just want to connect, 
            I'll get back to you as soon as possible!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Information - Mejorado para móviles */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-white/5 rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 h-full border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center">
                <motion.div 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-3 md:mr-4 border border-cyan-400/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaEnvelope className="text-white text-sm md:text-lg" />
                </motion.div>
                Contact Information
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                {contactItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-400/30 transition-all duration-300 w-full"
                    variants={cardHoverVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay, duration: 0.6 }}
                  >
                    <motion.div 
                      className={`p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r ${item.color} mr-3 md:mr-4 shadow-lg flex-shrink-0 min-w-[44px] md:min-w-[52px] flex items-center justify-center`}
                      variants={iconHoverVariants}
                      whileHover="hover"
                    >
                      {item.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium group-hover:text-cyan-100 transition-colors text-sm md:text-base truncate md:whitespace-normal">
                        {item.text}
                      </p>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 ml-2"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </motion.div>
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                className="mt-6 md:mt-10 pt-4 md:pt-6 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h4 className="font-bold text-cyan-400 mb-3 md:mb-4 flex items-center text-sm md:text-base">
                  <motion.div 
                    className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-cyan-500/20 flex items-center justify-center mr-2 md:mr-3 border border-cyan-400/30 flex-shrink-0"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  </motion.div>
                  Current Availability
                </h4>
                <div className="flex items-center justify-between">
                  <p className="text-blue-100 text-xs md:text-sm">Open to new projects and opportunities</p>
                  <motion.div
                    className="flex items-center text-cyan-400 text-xs md:text-sm"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaRocket className="mr-1 md:mr-2 text-xs md:text-sm" />
                    <span className="font-semibold">Available</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Mejorado para móviles */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-white/5 rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 h-full border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center">
                <motion.div 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-3 md:mr-4 border border-cyan-400/30"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <FaPaperPlane className="text-white text-sm md:text-lg" />
                </motion.div>
                Send Me a Message
              </h3>
              
              {isSubmitted && (
                <motion.div
                  className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30 text-green-100 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl mb-4 md:mb-6 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="flex items-center">
                    <motion.div
                      className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <FaPaperPlane className="text-white text-xs md:text-sm" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-sm md:text-base">Message sent successfully!</p>
                      <p className="text-green-200 text-xs md:text-sm mt-0.5">I'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {error && (
                <motion.div
                  className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 text-red-100 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl mb-4 md:mb-6 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                      <FaExclamationTriangle className="text-white text-xs md:text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base">{error}</p>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4 md:mb-6">
                  <label htmlFor="name" className="block text-cyan-100 font-medium mb-2 md:mb-3 text-sm md:text-lg">
                    Your Name
                  </label>
                  <div className="relative">
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 md:px-5 py-3 md:py-4 bg-white/10 border border-white/20 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 text-white placeholder-blue-200 backdrop-blur-sm transition-all duration-300 text-sm md:text-base"
                      placeholder="Enter your name"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.div
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <FaGlobe className="text-sm md:text-base" />
                    </motion.div>
                  </div>
                </div>
                
                <div className="mb-4 md:mb-6">
                  <label htmlFor="email" className="block text-cyan-100 font-medium mb-2 md:mb-3 text-sm md:text-lg">
                    Your Email
                  </label>
                  <div className="relative">
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 md:px-5 py-3 md:py-4 bg-white/10 border border-white/20 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 text-white placeholder-blue-200 backdrop-blur-sm transition-all duration-300 text-sm md:text-base"
                      placeholder="Enter your email"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.div
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaEnvelope className="text-sm md:text-base" />
                    </motion.div>
                  </div>
                </div>
                
                <div className="mb-6 md:mb-8">
                  <label htmlFor="message" className="block text-cyan-100 font-medium mb-2 md:mb-3 text-sm md:text-lg">
                    Your Message
                  </label>
                  <div className="relative">
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 md:px-5 py-3 md:py-4 bg-white/10 border border-white/20 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 text-white placeholder-blue-200 backdrop-blur-sm transition-all duration-300 resize-none text-sm md:text-base"
                      placeholder="Enter your message"
                      required
                      whileFocus={{ scale: 1.02 }}
                    ></motion.textarea>
                    <motion.div
                      className="absolute right-3 top-3 text-cyan-400"
                      animate={{ rotate: [0, 8, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <FaCalendarAlt className="text-sm md:text-base" />
                    </motion.div>
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                  whileHover={{ scale: isLoading ? 1 : 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {isLoading ? (
                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2 md:mr-3"></div>
                      <span>Sending...</span>
                    </motion.div>
                  ) : (
                    <>
                      <span className="mr-2 md:mr-3 relative">Send Message</span>
                      <motion.div
                        className="relative"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaPaperPlane className="text-xs md:text-sm transition-transform group-hover:translate-x-1" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 md:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.h3 
            className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Let's Build Something <span className="text-cyan-400">Extraordinary</span> Together
          </motion.h3>
          <motion.p 
            className="text-blue-100 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-4"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.0 }}
          >
            I approach every collaboration with passion and persistence. No challenge is too great when we combine 
            creativity with technical excellence to create remarkable digital experiences.
          </motion.p>
          
          <motion.div
            className="flex justify-center mt-6 md:mt-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
          >
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/30"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}