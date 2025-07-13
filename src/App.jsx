import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Header />
      <main className="max-w-4xl mx-auto p-6 space-y-20">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-6 text-gray-600 text-sm">
        © 2025 Oskar Vanegas. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
