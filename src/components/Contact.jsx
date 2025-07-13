import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactItems = [
    { 
      icon: <FaEnvelope className="text-blue-800 text-xl" />, 
      text: 'vanegaso045@gmail.com',
      link: 'mailto:vanegaso045@gmail.com'
    },
    { 
      icon: <FaLinkedin className="text-blue-800 text-xl" />, 
      text: 'linkedin.com/in/oskar-vanegas',
      link: 'https://www.linkedin.com/in/oskar-vanegas-59301b322/'
    },
    { 
      icon: <FaGithub className="text-blue-800 text-xl" />, 
      text: 'github.com/vanos0600',
      link: 'https://github.com/vanos0600'
    },
    { 
      icon: <FaPhone className="text-blue-800 text-xl" />, 
      text: '+420 774 057 431',
      link: 'tel:+420774057431'
    },
    { 
      icon: <FaMapMarkerAlt className="text-blue-800 text-xl" />, 
      text: 'Prague, Czech Republic',
      link: 'https://maps.google.com/?q=Prague,Czech+Republic'
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-white">
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
            Let's <span className="text-blue-800">Connect</span>
          </motion.h2>
          
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full"></div>
          </div>
          
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I'm currently available for new opportunities. Whether you have a question or just want to say hi, 
            I'll get back to you as soon as possible!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 border border-blue-200">
                  <FaEnvelope className="text-blue-800" />
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="mt-1 mr-4">{item.icon}</div>
                    <div className="border-l-2 border-blue-200 pl-4 py-1">
                      <p className="text-gray-700 group-hover:text-blue-800 transition-colors font-medium">
                        {item.text}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-10 pt-6 border-t border-blue-100">
                <h4 className="font-bold text-blue-800 mb-4 flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 border border-blue-200">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                  Availability
                </h4>
                <div className="flex items-center">
                  <p className="text-gray-700">Currently accepting new projects and opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 border border-blue-200">
                  <FaPaperPlane className="text-blue-800" />
                </div>
                Send Me a Message
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="mt-1">I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-3">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-3">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-3">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                      placeholder="I'd like to discuss a project opportunity..."
                      required
                    ></textarea>
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white font-bold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center group"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(30, 58, 138, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-3">Send Message</span>
                  <FaPaperPlane className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.h3 
            className="text-xl font-bold text-gray-900 mb-4"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Let's Build Something <span className="text-blue-800">Great Together</span>
          </motion.h3>
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8 }}
          >
            I approach every project with determination and persistence. No challenge is too great when we work together.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}