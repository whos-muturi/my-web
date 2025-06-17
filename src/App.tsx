import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Main Content */}
          <div className="relative z-10">
            <Navigation />
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
}

export default App;