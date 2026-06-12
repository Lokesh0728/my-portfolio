'use client';

import { motion, Variants } from 'framer-motion';
import { ExternalLink, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Projects() {
  
  // 1. Scroll reveal variant for the section headers
  const headerReveal: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  // 2. Staggered parent container variant for the project cards grid
  const gridContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delays the appearance of each subsequent card
        delayChildren: 0.1
      }
    }
  };

  // 3. Scroll reveal variant for individual project cards (slides up and fades in)
  const cardReveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15
      }
    }
  };

  return (
    <section className="py-12 md:py-24 px-6 md:px-8 lg:px-0 max-w-7xl mx-auto scroll-mt-20" id="projects">
      
      {/* SECTION HEADER WITH SCROLL REVEAL */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Triggers reveal when 100px into view
        variants={headerReveal}
        className="max-w-xl mx-auto text-center mb-20 space-y-3"
      >
        <h2 className="text-3xl font-extrabold tracking-wider sm:text-4xl text-slate-900 dark:text-zinc-50">
          Featured Productions
        </h2>
        <p className="text-slate-500 dark:text-zinc-400 text-sm sm:text-base">
          A showcase of full-stack ecosystems, dynamic application systems, and user interfaces I engineered from concept to code.
        </p>
      </motion.div>

      {/* PROJECTS GRID WITH STAGGERED SCROLL REVEAL */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Fires when container hits the view window
        variants={gridContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardReveal}
            whileHover={{ y: -8, transition: { duration: 0.2 } }} // Micro-interaction on desktop hover
            className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-slate-200/60 dark:border-zinc-800/60 shadow-xs hover:shadow-xl dark:hover:bg-zinc-900/90 transition-all duration-300 relative overflow-hidden"
          >
            <div>
              {/* Card Header Folder Accent */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-amber-400 transition-colors">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                {project.liveLink !== '#' && (
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Title & Description List */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-amber-400 transition-colors duration-200 mb-4">
                {project.title}
              </h3>

              <ul className="space-y-2 mb-6">
                {project.points.map((point, pointIndex) => (
                  <li 
                    key={pointIndex}
                    className="text-xs text-slate-600 dark:text-zinc-400 list-disc list-inside leading-relaxed"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags Bottom Row */}
            <div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-zinc-800/60">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-100/70 dark:bg-zinc-800/60 text-slate-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}