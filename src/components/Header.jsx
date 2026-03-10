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
    { name: 'About',    href: '#about',    delay: 0.1 },
    { name: 'Projects', href: '#projects', delay: 0.2 },
    { name: 'Skills',   href: '#skills',   delay: 0.3 },
    { name: 'Contact',  href: '#contact',  delay: 0.4 },
  ];

  const socialLinks = [
    { icon: <FaGithub size={15} />,   href: 'https://github.com/vanos0600', name: 'GitHub' },
    { icon: <FaLinkedin size={15} />, href: 'https://www.linkedin.com/in/oskar-david-vanegas-juarez-59301b322/', name: 'LinkedIn' },
    { icon: <FaEnvelope size={15} />, href: 'mailto:vanegaso045@gmail.com', name: 'Email' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // ── style helpers ────────────────────────────────────────────────────────────
  const headerStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    height: 64,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 40px',
    borderBottom: `1px solid ${isScrolled ? 'var(--border2)' : 'var(--border)'}`,
    background: 'rgba(7,8,10,0.88)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    transition: 'border-color 0.3s',
  };

  const logoStyle = {
    display: 'flex', alignItems: 'center', gap: 10,
    fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16,
    letterSpacing: '-0.02em', color: 'var(--white)',
    cursor: 'pointer', textDecoration: 'none',
  };

  const navLinkStyle = (isActive) => ({
    fontFamily: "'DM Mono', monospace",
    fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
    color: isActive ? 'var(--text)' : 'var(--muted)',
    background: isActive ? 'var(--surface)' : 'none',
    border: 'none', padding: '6px 14px', borderRadius: 4,
    cursor: 'pointer', textDecoration: 'none',
    transition: 'color 0.2s, background 0.2s',
  });

  const ctaStyle = {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'var(--accent)', border: '1px solid var(--accent)',
    padding: '6px 16px', borderRadius: 4,
    cursor: 'pointer', background: 'none', marginLeft: 8,
    transition: 'background 0.2s, color 0.2s',
  };

  const socialBtnStyle = {
    width: 34, height: 34,
    background: 'var(--surface)', border: '1px solid var(--border2)',
    borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--muted)', textDecoration: 'none', transition: 'all 0.2s',
  };

  return (
    <motion.header
      style={headerStyle}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      {/* Logo */}
      <motion.div
        style={logoStyle}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => scrollToSection('#about')}
      >
        <motion.div
          style={{ position: 'relative' }}
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div style={{
            width: 34, height: 34,
            background: 'var(--accent)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 16px rgba(30,111,255,0.4)',
          }}>
            <FaCode style={{ color: '#fff', fontSize: 14 }} />
          </div>
          <motion.div
            style={{
              position: 'absolute', inset: -3,
              background: 'rgba(30,111,255,0.15)',
              borderRadius: 10, filter: 'blur(4px)',
            }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1.1 }}>
            OSKAR VANEGAS
          </span>
          <motion.span
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase' }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            FULLSTACK DEV
          </motion.span>
        </div>
      </motion.div>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden lg:flex">
        {navLinks.map(link => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={e => { e.preventDefault(); scrollToSection(link.href); }}
            style={navLinkStyle(activeSection === link.href.substring(1))}
            whileHover={{ color: 'var(--text)', background: 'var(--surface)' }}
            whileTap={{ scale: 0.96 }}
          >
            {link.name}
          </motion.a>
        ))}

        {/* social icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 16, paddingLeft: 16, borderLeft: '1px solid var(--border2)' }}>
          {socialLinks.map(s => (
            <motion.a
              key={s.name} href={s.href} target="_blank" rel="noreferrer"
              style={socialBtnStyle}
              whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)', background: 'var(--glow)' }}
              whileTap={{ scale: 0.9 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={() => scrollToSection('#contact')}
          style={ctaStyle}
          whileHover={{ background: 'var(--accent)', color: '#fff' }}
          whileTap={{ scale: 0.96 }}
        >
          Hire Me
        </motion.button>
      </nav>

      {/* Mobile menu button */}
      <motion.button
        className="lg:hidden"
        style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', padding: 8 }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div animate={mobileMenuOpen ? 'open' : 'closed'} style={{ width: 22, height: 22, position: 'relative' }}>
          <motion.span style={{ position: 'absolute', width: 22, height: 2, background: 'var(--text)', borderRadius: 2 }}
            variants={{ closed: { top: '4px', rotate: 0 }, open: { top: '10px', rotate: 45 } }} />
          <motion.span style={{ position: 'absolute', width: 22, height: 2, background: 'var(--text)', borderRadius: 2, top: 10 }}
            variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} />
          <motion.span style={{ position: 'absolute', width: 22, height: 2, background: 'var(--text)', borderRadius: 2 }}
            variants={{ closed: { top: '16px', rotate: 0 }, open: { top: '10px', rotate: -45 } }} />
        </motion.div>
      </motion.button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(7,8,10,0.97)',
              backdropFilter: 'blur(24px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 8, zIndex: 90,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* social in mobile */}
            <motion.div
              style={{ display: 'flex', gap: 12, marginBottom: 40 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {socialLinks.map(s => (
                <motion.a
                  key={s.name} href={s.href} target="_blank" rel="noreferrer"
                  style={{ ...socialBtnStyle, width: 44, height: 44 }}
                  whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollToSection(link.href); }}
                style={{
                  fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800,
                  color: activeSection === link.href.substring(1) ? 'var(--accent)' : 'var(--text)',
                  textDecoration: 'none', letterSpacing: '-0.02em',
                  transition: 'color 0.2s',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                whileHover={{ color: 'var(--accent)', x: 8 }}
                whileTap={{ scale: 0.97 }}
              >
                {link.name}
              </motion.a>
            ))}

            <motion.button
              onClick={() => scrollToSection('#contact')}
              style={{
                marginTop: 32,
                fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.12em',
                textTransform: 'uppercase',
                background: 'var(--accent)', color: '#fff',
                border: 'none', padding: '13px 32px', borderRadius: 4, cursor: 'pointer',
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ boxShadow: '0 0 24px rgba(30,111,255,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>

            <motion.div
              style={{ position: 'absolute', bottom: 32, fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Scroll to Explore
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* scroll progress bar */}
      <motion.div
        style={{
          position: 'absolute', bottom: 0, left: 0, height: 1,
          background: 'var(--accent)',
          transformOrigin: 'left',
        }}
        animate={{
          width: `${typeof window !== 'undefined' ? Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100) : 0}%`,
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );
}