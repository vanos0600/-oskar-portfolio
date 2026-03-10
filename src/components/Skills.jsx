import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaCode,
  FaGraduationCap, FaChartLine, FaRocket, FaDatabase, FaServer,
  FaPalette, FaMobile, FaCloud, FaShieldAlt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiRedux, SiNodedotjs,
  SiMongodb, SiFigma, SiVite, SiExpress, SiJest, SiVercel, SiPostman
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'var(--accent)',
      skills: [
        { name: 'JavaScript',  icon: <FaJs />,         level: 88 },
        { name: 'React',       icon: <FaReact />,      level: 85 },
        { name: 'TypeScript',  icon: <SiTypescript />, level: 75 },
        { name: 'Next.js',     icon: <SiNextdotjs />,  level: 70 },
        { name: 'Redux',       icon: <SiRedux />,      level: 72 },
        { name: 'Vite',        icon: <SiVite />,       level: 80 },
      ],
    },
    {
      title: 'Styling & Design',
      color: '#e879f9',
      skills: [
        { name: 'HTML5',             icon: <FaHtml5 />,      level: 95 },
        { name: 'CSS3',              icon: <FaCss3Alt />,    level: 90 },
        { name: 'Tailwind CSS',      icon: <SiTailwindcss />,level: 88 },
        { name: 'Responsive Design', icon: <FaMobile />,     level: 92 },
        { name: 'Figma',             icon: <SiFigma />,      level: 70 },
      ],
    },
    {
      title: 'Dev Tools',
      color: '#22c55e',
      skills: [
        { name: 'Git',      icon: <FaGitAlt />,  level: 85 },
        { name: 'GitHub',   icon: <FaGithub />,  level: 88 },
        { name: 'VS Code',  icon: <FaCode />,    level: 95 },
        { name: 'Vercel',   icon: <SiVercel />,  level: 80 },
        { name: 'Postman',  icon: <SiPostman />, level: 75 },
        { name: 'Jest',     icon: <SiJest />,    level: 65 },
      ],
    },
    {
      title: 'Backend & DB',
      color: '#f97316',
      skills: [
        { name: 'Node.js',    icon: <SiNodedotjs />, level: 78 },
        { name: 'Express.js', icon: <SiExpress />,   level: 75 },
        { name: 'MongoDB',    icon: <SiMongodb />,   level: 72 },
        { name: 'REST APIs',  icon: <FaCloud />,     level: 80 },
        { name: 'JWT Auth',   icon: <FaShieldAlt />, level: 70 },
      ],
    },
  ];

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="skills" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '120px 40px' }}>

        {/* section label */}
        <motion.p
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}
          initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          03 — Stack
          <span style={{ width: 40, height: 1, background: 'var(--accent)', opacity: 0.5, display: 'inline-block' }} />
        </motion.p>

        <motion.h2
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--white)', marginBottom: 56, lineHeight: 1.05 }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          Technical<br />Proficiency.
        </motion.h2>

        {/* skills grid — same 4-col layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden', background: 'var(--border)' }}>
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              style={{ background: 'var(--card)', padding: '28px 24px' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: catIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ background: 'var(--surface)' }}
            >
              {/* column header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                marginBottom: 24, paddingBottom: 16,
                borderBottom: `1px solid var(--border)`,
              }}>
                <div style={{ width: 4, height: 20, background: cat.color, borderRadius: 2, boxShadow: `0 0 8px ${cat.color}66` }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>
                  {cat.title}
                </span>
              </div>

              {/* skill rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {cat.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    style={{
                      padding: '9px 0',
                      borderBottom: skillIndex < cat.skills.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + skillIndex * 0.06, duration: 0.4 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: cat.color, fontSize: 11, opacity: 0.8 }}>{skill.icon}</span>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--muted)' }}>{skill.name}</span>
                      </div>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: 'var(--dim)' }}>{skill.level}</span>
                    </div>
                    <div style={{ height: 2, background: 'var(--border2)', borderRadius: 99, overflow: 'hidden' }}>
                      <motion.div
                        style={{ height: '100%', background: cat.color, borderRadius: 99 }}
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={skill.level}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* growth mindset strip — same content, new design */}
        <motion.div
          style={{
            marginTop: 20, border: '1px solid var(--border)',
            borderRadius: 8, overflow: 'hidden', background: 'var(--card)',
          }}
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={{ padding: '32px 40px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--glow)', border: '1px solid rgba(30,111,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
              <FaGraduationCap size={16} />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>
                Continuous Growth Mindset
              </h3>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--muted)', fontStyle: 'italic' }}>
                "Each skill is not just learned but mastered through persistent practice and real-world application."
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, background: 'var(--border)' }}>
            {[
              { icon: <FaGraduationCap />, text: 'University Coursework',     desc: 'CS fundamentals' },
              { icon: <FaChartLine />,     text: 'Daily Coding Practice',     desc: 'Algorithms & DS' },
              { icon: <FaCode />,          text: 'Weekly Project Challenges', desc: 'Real applications' },
              { icon: <FaGithub />,        text: 'Real-world Application',    desc: 'Open source + projects' },
            ].map((item, i) => (
              <motion.div
                key={i}
                style={{ background: 'var(--card)', padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: 12 }}
                whileHover={{ background: 'var(--surface)' }}
              >
                <div style={{ color: 'var(--accent)', fontSize: 13, marginTop: 2, opacity: 0.8 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--text)', marginBottom: 3 }}>{item.text}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'var(--muted)' }}>{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* closing statement */}
        <motion.div
          style={{ marginTop: 56, textAlign: 'center' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={{ width: 48, height: 1, background: 'var(--accent)', margin: '0 auto 24px', opacity: 0.5 }} />
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.9 }}>
            Skills are not static markers of ability but dynamic capabilities cultivated through{' '}
            <span style={{ color: 'var(--accent)' }}>persistent effort</span>,{' '}
            <span style={{ color: 'var(--accent)' }}>real-world application</span>, and an{' '}
            <span style={{ color: 'var(--accent)' }}>unwavering commitment to growth</span>.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 20 }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
              <FaRocket style={{ color: 'var(--accent)', fontSize: 13 }} />
            </motion.div>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Always Learning, Always Growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}