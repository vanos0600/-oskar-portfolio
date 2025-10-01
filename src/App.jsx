import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="text-gray-900 min-h-screen font-sans">
      <Header />
      <Hero />
      
      <main className="bg-white max-w-none mx-auto p-8 space-y-none">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-white text-center py-6 text-gray-600 text-sm">
        © 2025 Oskar Vanegas. All rights reserved.
      </footer>
    </div>
  );
}

export default App;