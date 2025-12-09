import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, FileText } from 'lucide-react';

const KEYWORDS = ["Fake News Detection", "3D Crime Scene Reconstruction", "Stock Risk Analysis", "Hackathon Builds"];

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % KEYWORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-accent-200/30 dark:bg-accent-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300 text-sm font-semibold tracking-wide mb-6">
            B.Tech — AI & Machine Learning Student
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-primary-500">Sakanth</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 h-16 md:h-12 flex flex-col items-center justify-center">
             <span className="mb-2">Building reliable AI systems.</span>
             <span className="block text-accent-600 dark:text-accent-400 font-semibold transition-all duration-500">
               {KEYWORDS[textIndex]}
             </span>
          </h2>
          
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-10 text-lg">
            From research prototypes to deployable software. Passionate about CV, NLP, and Data Science.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/25"
            >
              <FileText size={20} />
              Download Resume
            </a>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-800 dark:text-white border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 rounded-lg font-medium transition-colors"
            >
              View Projects
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-600">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
