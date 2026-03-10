import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight,
  FaCode, FaMobile, FaDatabase, FaCloud, FaRocket
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';

export default function Projects() {
  const [activeImages, setActiveImages] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'ImmigraSmart AI',
      description: 'RAG-powered immigration consultant for international students in Czech Republic. Uses official Ministry of Interior documents to provide accurate, hallucination-free answers about visas, residence permits, and post-arrival obligations — with conversation memory and confidence guards.',
      images: ['/screenshots/immigrasmart1.png', '/screenshots/immigrasmart2.png'],
      tech: ['Python', 'LangChain', 'ChromaDB', 'Gemini 2.5', 'Streamlit'],
      category: 'ai',
      github: 'https://github.com/vanos0600/ImmigraSmart',
      live: 'https://lnkd.in/dfWfdMza',
      featured: true,
    },
    {
      title: 'McD SOP Guardian',
      description: "AI assistant transforming how McDonald's operations teams in León, Nicaragua interact with Standard Operating Procedures. Instant RAG-based answers from 100+ page manuals. Custom-branded interface with McDonald's corporate identity.",
      images: ['/screenshots/mcd1.png', '/screenshots/mcd2.png'],
      tech: ['Python', 'LangChain', 'ChromaDB', 'Gemini 1.5', 'Streamlit'],
      category: 'ai',
      github: 'https://github.com/vanos0600/MCD-Guardian-',
      live: 'https://mcdguardian.streamlit.app/',
      featured: true,
    },
    {
      title: 'Voice-Aware Kiosk PoC',
      description: 'Kiosk assistant that adapts dynamically to user intent — distinguishing confusion from data input. Three-layer architecture with ASR, Google Gemini, and Docker containerization, designed for unattended biometric environments.',
      images: ['/screenshots/kiosk1.png'],
      tech: ['Python', 'Streamlit', 'Gemini 2.5', 'Docker', 'Speech Recognition'],
      category: 'ai',
      github: '#',
      live: 'https://2gppeqgafazftptkdsuvbz.streamlit.app/',
      featured: false,
    },
    {
      title: 'PhysioApp — Management System',
      description: 'Complete full-stack application for managing patients, appointments, and physiotherapy treatments with real-time updates and secure JWT authentication system.',
      images: [
        '/screenshots/login.jpg', '/screenshots/patients.jpg',
        '/screenshots/register.jpg', '/screenshots/forgot-password.jpg',
      ],
      tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      category: 'fullstack',
      github: 'https://github.com/vanos0600/physioapp',
      live: 'https://physioapp-demo.vercel.app',
      featured: true,
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern, responsive web portfolio built with React and Tailwind CSS, featuring smooth animations and optimized performance for showcasing professional work.',
      images: ['/screenshots/personal.png', '/screenshots/info.png', '/screenshots/tech.png'],
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'Vite'],
      category: 'frontend',
      github: 'https://github.com/vanos0600/-oskar-portfolio',
      live: 'https://oskar-portfolio-8d44.vercel.app/',
      featured: true,
    },
    {
      title: 'Crypto Mini Tracker',
      description: 'Real-time cryptocurrency tracking with beautiful data visualizations, price alerts, and portfolio management features built with Next.js and TypeScript.',
      images: ['/screenshots/crypto1.png', '/screenshots/crypto2.png'],
      tech: ['Next.js', 'TypeScript', 'Firebase', 'Chart.js'],
      category: 'fullstack',
      github: 'https://github.com/vanos0600/crypto-tracker',
      live: 'https://crypto-tracker-demo.vercel.app',
      featured: false,
    },
    {
      title: 'Astorre Landing Page',
      description: 'Modern landing page showcasing an AI-powered staff management platform. Clean two-column layout, benefits highlights, and a strong call-to-action.',
      images: ['/screenshots/Astorre1.png', '/screenshots/Astorre2.png', '/screenshots/Astorre3.png'],
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com/vanos0600/Astorre',
      live: 'https://astorre.vercel.app/',
      featured: false,
    },
  ];

  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'AI / RAG',     value: 'ai' },
    { name: 'Full Stack',   value: 'fullstack' },
    { name: 'Frontend',     value: 'frontend' },
    { name: 'Featured',     value: 'featured' },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const nextImage = (index) => {
    setActiveImages(prev => {
      const n = [...prev];
      n[index] = (n[index] + 1) % filteredProjects[index].images.length;
      return n;
    });
  };
  const prevImage = (index) => {
    setActiveImages(prev => {
      const n = [...prev];
      n[index] = (n[index] - 1 + filteredProjects[index].images.length) % filteredProjects[index].images.length;
      return n;
    });
  };

  const imageVariants = {
    enter: dir => ({ x: dir > 0 ? 600 : -600, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: dir => ({ zIndex: 0, x: dir < 0 ? 600 : -600, opacity: 0 }),
  };

  // category colour dots
  const catColor = { ai: 'var(--accent)', fullstack: '#a855f7', frontend: '#22c55e' };

  return (
    <section id="projects" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '120px 40px' }}>

        {/* section label */}
        <motion.p
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}
          initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          02 — Work
          <span style={{ width: 40, height: 1, background: 'var(--accent)', opacity: 0.5, display: 'inline-block' }} />
        </motion.p>

        {/* header row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, gap: 24, flexWrap: 'wrap' }}>
          <motion.h2
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Selected<br />Projects.
          </motion.h2>

          {/* filter pills */}
          <motion.div
            style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            {filters.map(f => (
              <motion.button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.12em',
                  textTransform: 'uppercase', background: activeFilter === f.value ? 'var(--glow)' : 'none',
                  border: `1px solid ${activeFilter === f.value ? 'var(--accent)' : 'var(--border2)'}`,
                  color: activeFilter === f.value ? 'var(--accent)' : 'var(--muted)',
                  padding: '7px 14px', borderRadius: 3, cursor: 'pointer', transition: 'all 0.2s',
                }}
                whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                whileTap={{ scale: 0.95 }}
              >
                {f.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* project grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              style={{ position: 'relative' }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: 8, overflow: 'hidden',
                  background: 'var(--card)',
                  display: 'flex', flexDirection: 'column',
                  height: '100%',
                  transition: 'border-color 0.3s',
                }}
                whileHover={{
                  borderColor: 'var(--border2)',
                  y: -5,
                  boxShadow: '0 24px 48px rgba(0,0,0,0.6)',
                }}
              >
                {/* ── image carousel ── */}
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface)', position: 'relative' }}>
                  <AnimatePresence mode="wait" custom={activeImages[index]}>
                    <motion.img
                      key={activeImages[index]}
                      src={project.images[activeImages[index]]}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                      custom={activeImages[index]}
                      variants={imageVariants}
                      initial="enter" animate="center" exit="exit"
                      transition={{ x: { type: 'spring', stiffness: 280, damping: 28 }, opacity: { duration: 0.2 } }}
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                  </AnimatePresence>

                  {/* image fallback label */}
                  <div style={{
                    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Syne', sans-serif", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'var(--dim)', pointerEvents: 'none', zIndex: 0,
                  }}>
                    {project.title}
                  </div>

                  {/* nav arrows */}
                  {project.images.length > 1 && (
                    <>
                      <motion.button
                        onClick={e => { e.stopPropagation(); prevImage(index); }}
                        style={{
                          position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
                          background: 'rgba(7,8,10,0.7)', border: '1px solid var(--border2)',
                          borderRadius: 6, width: 30, height: 30,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'var(--text)', cursor: 'pointer', zIndex: 10,
                          backdropFilter: 'blur(8px)',
                        }}
                        whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaChevronLeft size={10} />
                      </motion.button>
                      <motion.button
                        onClick={e => { e.stopPropagation(); nextImage(index); }}
                        style={{
                          position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                          background: 'rgba(7,8,10,0.7)', border: '1px solid var(--border2)',
                          borderRadius: 6, width: 30, height: 30,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'var(--text)', cursor: 'pointer', zIndex: 10,
                          backdropFilter: 'blur(8px)',
                        }}
                        whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaChevronRight size={10} />
                      </motion.button>
                    </>
                  )}

                  {/* dot indicators */}
                  {project.images.length > 1 && (
                    <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 5, zIndex: 10 }}>
                      {project.images.map((_, imgIdx) => (
                        <div
                          key={imgIdx}
                          onClick={() => {
                            setActiveImages(prev => { const n = [...prev]; n[index] = imgIdx; return n; });
                          }}
                          style={{
                            width: imgIdx === activeImages[index] ? 16 : 5,
                            height: 5, borderRadius: 99, cursor: 'pointer',
                            background: imgIdx === activeImages[index] ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                            transition: 'all 0.3s',
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* featured badge */}
                  {project.featured && (
                    <motion.div
                      style={{
                        position: 'absolute', top: 10, left: 10, zIndex: 10,
                        fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: '0.12em',
                        textTransform: 'uppercase', background: 'var(--accent)', color: '#fff',
                        padding: '3px 10px', borderRadius: 2,
                      }}
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.05, type: 'spring', stiffness: 200 }}
                    >
                      Featured
                    </motion.div>
                  )}

                  {/* category badge */}
                  <div style={{
                    position: 'absolute', top: 10, right: 10, zIndex: 10,
                    fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: '0.1em',
                    textTransform: 'uppercase', background: 'rgba(7,8,10,0.75)',
                    color: 'var(--muted)', border: '1px solid var(--border2)',
                    padding: '3px 10px', borderRadius: 2, backdropFilter: 'blur(8px)',
                    display: 'flex', alignItems: 'center', gap: 5,
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: catColor[project.category] || 'var(--muted)', display: 'inline-block' }} />
                    {project.category}
                  </div>
                </div>

                {/* ── project body ── */}
                <div style={{ padding: '24px 24px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: 'var(--white)', marginBottom: 8, letterSpacing: '-0.01em' }}>
                    {project.title}
                  </h3>
                  <div style={{ width: 24, height: 1, background: 'var(--accent)', marginBottom: 12 }} />
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 18, flex: 1 }}>
                    {project.description}
                  </p>

                  {/* tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 20 }}>
                    {project.tech.map(t => (
                      <span key={t} style={{
                        fontFamily: "'DM Mono', monospace", fontSize: 9,
                        letterSpacing: '0.06em', textTransform: 'uppercase',
                        color: 'var(--muted)', border: '1px solid var(--border2)',
                        padding: '3px 9px', borderRadius: 2,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* action buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 6px var(--green)' }} />
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Completed
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <motion.a
                        href={project.github} target="_blank" rel="noreferrer"
                        style={{
                          width: 34, height: 34, borderRadius: 6,
                          border: '1px solid var(--border2)', background: 'var(--surface)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'var(--muted)', textDecoration: 'none',
                        }}
                        whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)', background: 'var(--glow)' }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub size={13} />
                      </motion.a>
                      <motion.a
                        href={project.live} target="_blank" rel="noreferrer"
                        style={{
                          height: 34, padding: '0 14px', borderRadius: 6,
                          background: 'var(--accent)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', textDecoration: 'none',
                          fontFamily: "'DM Mono', monospace", fontSize: 9,
                          letterSpacing: '0.1em', textTransform: 'uppercase', gap: 6,
                        }}
                        whileHover={{ boxShadow: '0 0 16px rgba(30,111,255,0.5)' }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Live <FaExternalLinkAlt size={9} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* bottom CTA */}
        <motion.div
          style={{ marginTop: 80, textAlign: 'center' }}
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: 'var(--muted)', marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
            Interested in working together? I'm always open to new opportunities and innovative projects.
          </p>
          <motion.a
            href="#contact"
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
              background: 'var(--accent)', color: '#fff', border: 'none',
              padding: '13px 28px', borderRadius: 4, cursor: 'pointer', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}
            whileHover={{ boxShadow: '0 0 28px rgba(30,111,255,0.5)', y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a Project <FaRocket size={11} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}