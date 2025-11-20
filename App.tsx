
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-950">
      {/* Static Gradient Background - Clean & Professional */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black"></div>
      
      {/* Subtle Noise Overlay for Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-200">
      <BackgroundAnimation />
      <Header />
      <main className="px-4 sm:px-8 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
