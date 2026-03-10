import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

  :root {
    --bg:      #07080a;
    --surface: #0d0f12;
    --card:    #111316;
    --border:  #1a1d22;
    --border2: #252931;
    --accent:  #1e6fff;
    --accent2: #5294ff;
    --glow:    rgba(30,111,255,0.12);
    --text:    #dde1e7;
    --muted:   #5c6370;
    --dim:     #333844;
    --white:   #ffffff;
    --green:   #22c55e;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Mono', monospace;
    overflow-x: hidden;
    line-height: 1.6;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(30,111,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30,111,255,0.025) 1px, transparent 1px);
    background-size: 72px 72px;
    pointer-events: none;
    z-index: 0;
  }

  ::selection { background: var(--accent); color: #fff; }
  ::-webkit-scrollbar { width: 2px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--accent); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes accentPulse {
    0%,100% { opacity: 1; box-shadow: 0 0 6px var(--accent); }
    50%      { opacity: 0.5; box-shadow: 0 0 16px var(--accent); }
  }
`;

function App() {
  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <div className="text-gray-900 min-h-screen font-sans" style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: "'DM Mono', monospace" }}>
        <Header />

        <main style={{ position: 'relative', zIndex: 1, background: 'transparent', maxWidth: 'none', margin: 0, padding: 0 }}>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <footer style={{ borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <span style={{ fontSize: 11, color: 'var(--muted)' }}>
              © 2025 Oskar Vanegas. Built in Prague 🇨🇿
            </span>
            <div style={{ display: 'flex', gap: 24 }}>
              {[
                { label: 'GitHub', href: 'https://github.com/vanos0600' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oskar-david-vanegas-juarez-59301b322/' },
                { label: 'Email', href: 'mailto:vanegaso045@gmail.com' },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                  style={{ fontSize: 11, color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                >{l.label}</a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;