import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'education': return <GraduationCap size={20} className="text-white" />;
      case 'achievement': return <Award size={20} className="text-white" />;
      default: return <Briefcase size={20} className="text-white" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-accent-500';
      case 'achievement': return 'bg-yellow-500';
      default: return 'bg-primary-500';
    }
  };

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Journey So Far</h2>
          <p className="text-gray-600 dark:text-gray-400">Education, experience, and key milestones.</p>
        </div>

        <div className="relative border-l-2 border-gray-200 dark:border-slate-700 ml-4 md:ml-0 space-y-12">
          {EXPERIENCE.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 ${getColor(item.type)}`} />
              
              <div className={`md:flex items-start justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12" /> {/* Spacer */}
                
                <div className="md:w-5/12 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`p-1.5 rounded-md ${getColor(item.type)}`}>
                      {getIcon(item.type)}
                    </span>
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{item.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.role}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4 mt-1">
                     <span className="font-medium">{item.organization}</span>
                     <span>{item.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
