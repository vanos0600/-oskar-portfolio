import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaMapMarkerAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const infoRows = [
  { key: 'Name',     value: 'Oskar David Vanegas Juarez' },
  { key: 'Location', value: 'Prague, Czech Republic 🇨🇿' },
  { key: 'Origin',   value: 'Nicaragua 🇳🇮' },
  { key: 'Focus',    value: 'Fullstack + AI / RAG Systems' },
  { key: 'Status',   value: 'Open to opportunities', accent: true },
  { key: 'GitHub',   value: 'github.com/vanos0600', href: 'https://github.com/vanos0600' },
  { key: 'Email',    value: 'vanegaso045@gmail.com', href: 'mailto:vanegaso045@gmail.com' },
];

export default function About() {
  return (
    <section id="about" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '120px 40px' }}>

        {/* section label */}
        <motion.p
          style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 12,
          }}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          01 — About
          <span style={{ width: 40, height: 1, background: 'var(--accent)', opacity: 0.5, display: 'inline-block' }} />
        </motion.p>

        {/* two-column grid */}
        <motion.div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* LEFT — text */}
          <div>
            <motion.h2
              variants={itemVariants}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800, letterSpacing: '-0.02em',
                color: 'var(--white)', marginBottom: 28, lineHeight: 1.05,
              }}
            >
              From Managua<br />to Prague,<br />
              <span style={{ color: 'var(--accent)' }}>building</span> with purpose.
            </motion.h2>

            {[
              <>I'm a fullstack developer and AI engineer who moved from <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Nicaragua to Prague</strong> to study and build. My work lives at the intersection of <strong style={{ color: 'var(--text)', fontWeight: 500 }}>clean frontend engineering</strong> and <strong style={{ color: 'var(--text)', fontWeight: 500 }}>practical AI applications</strong>.</>,
              <>Every project I've built — ImmigraSmart, McD Guardian, the Voice Kiosk PoC — started with a real problem someone around me was facing. <strong style={{ color: 'var(--text)', fontWeight: 500 }}>That's the kind of engineer I want to be.</strong></>,
              <>Currently studying in Prague, open to <strong style={{ color: 'var(--text)', fontWeight: 500 }}>freelance work, internships, and junior roles</strong>. I work in English and Spanish.</>,
            ].map((text, i) => (
              <motion.p
                key={i}
                variants={itemVariants}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 13, color: 'var(--muted)',
                  lineHeight: 1.9, marginBottom: 16,
                }}
              >
                {text}
              </motion.p>
            ))}

            {/* social buttons */}
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: 10, marginTop: 32 }}>
              {[
                { icon: <FaGithub size={14} />,   label: 'GitHub',   href: 'https://github.com/vanos0600' },
                { icon: <FaLinkedin size={14} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/oskar-david-vanegas-juarez-59301b322/' },
                { icon: <FaEnvelope size={14} />, label: 'Email',    href: 'mailto:vanegaso045@gmail.com' },
              ].map(s => (
                <motion.a
                  key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    fontFamily: "'DM Mono', monospace", fontSize: 10,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--muted)', textDecoration: 'none',
                    border: '1px solid var(--border2)', padding: '8px 14px', borderRadius: 4,
                    transition: 'all 0.2s',
                  }}
                  whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)', background: 'var(--glow)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  {s.icon} {s.label}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — info card */}
          <motion.div variants={itemVariants}>
            <div style={{
              border: '1px solid var(--border)',
              borderRadius: 8, overflow: 'hidden',
              background: 'var(--card)',
            }}>
              {/* card header */}
              <div style={{
                padding: '16px 24px',
                borderBottom: '1px solid var(--border)',
                background: 'var(--surface)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', marginLeft: 4 }}>
                  info.json
                </span>
              </div>

              {/* info rows */}
              <div style={{ padding: '8px 0' }}>
                {infoRows.map((row, i) => (
                  <div
                    key={row.key}
                    style={{
                      display: 'flex', alignItems: 'baseline', gap: 16,
                      padding: '11px 24px',
                      borderBottom: i < infoRows.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <span style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 10,
                      color: 'var(--muted)', textTransform: 'uppercase',
                      letterSpacing: '0.08em', minWidth: 80, flexShrink: 0,
                    }}>
                      {row.key}
                    </span>
                    {row.href ? (
                      <a href={row.href} target="_blank" rel="noreferrer" style={{
                        fontFamily: "'DM Mono', monospace", fontSize: 12,
                        color: 'var(--accent)', textDecoration: 'none',
                        transition: 'opacity 0.2s',
                      }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span style={{
                        fontFamily: "'DM Mono', monospace", fontSize: 12,
                        color: row.accent ? 'var(--green)' : 'var(--text)',
                      }}>
                        {row.accent && (
                          <span style={{
                            display: 'inline-block', width: 7, height: 7,
                            borderRadius: '50%', background: 'var(--green)',
                            marginRight: 8, verticalAlign: 'middle',
                            boxShadow: '0 0 6px var(--green)',
                            animation: 'accentPulse 2s ease infinite',
                          }} />
                        )}
                        {row.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* mini stat strip */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1, marginTop: 16,
              border: '1px solid var(--border)', borderRadius: 8,
              overflow: 'hidden', background: 'var(--border)',
            }}>
              {[
                { n: '10+', l: 'Projects' },
                { n: '3',   l: 'AI Tools' },
                { n: '1+',  l: 'Yrs Exp.' },
              ].map(s => (
                <div key={s.l} style={{
                  background: 'var(--card)', padding: '20px 16px', textAlign: 'center',
                }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, fontWeight: 800, color: 'var(--white)', lineHeight: 1 }}>
                    {s.n}
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}