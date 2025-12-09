import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  const strengths = [
    { icon: <Terminal size={20} />, text: 'Python & Data Structures' },
    { icon: <Cpu size={20} />, text: 'Deep Learning & CV' },
    { icon: <Database size={20} />, text: 'Model Benchmarking' },
    { icon: <Globe size={20} />, text: 'Production Pipelines' },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
             {/* Profile Image / Placeholder */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-primary-200 dark:bg-primary-900/50 rounded-2xl transform rotate-6 transition-transform hover:rotate-3"></div>
                <div className="absolute inset-0 bg-gray-200 dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
                   <img 
                    src="https://picsum.photos/id/1025/400/400" 
                    alt="Sakanth" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                   />
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I am a B.Tech student specializing in <strong className="text-primary-600 dark:text-primary-400">Artificial Intelligence & Machine Learning</strong>. 
                My focus lies in building end-to-end ML systems, from raw data preprocessing to deploying scalable inference services.
                With a strong foundation in Computer Vision pipelines and applied Data Science, I am actively seeking roles where I can 
                transform research concepts into reliable software solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {strengths.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
                    <div className="text-primary-500">{item.icon}</div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
