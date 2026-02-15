import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section, { FadeIn, RevealText, StaggerContainer, StaggerItem } from '../components/Section';
import { PROJECTS } from '../constants';
import { ProjectStatus, Project } from '../types';
import { CheckCircle2, Clock, Calendar, ArrowRight, X, Layers, Code, Quote } from 'lucide-react';
import { useScroll } from 'framer-motion';

// --- Badge Components with Special Animations ---

const OngoingBadge = () => (
  <span className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm border border-amber-200 dark:border-amber-900/50">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
    </span>
    Live Progress
  </span>
);

const UpcomingBadge = () => (
  <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm border border-slate-200 dark:border-white/10 relative overflow-hidden">
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent skew-x-12"
    />
    Coming Soon
  </span>
);

const CompletedBadge = () => (
  <span className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider rounded-full border border-green-200 dark:border-green-900/50">
    <CheckCircle2 size={12} /> Delivered
  </span>
);

// --- Modal Component ---

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  // Prevent body scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 md:pb-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
      />
      <motion.div 
        layoutId={`project-card-${project.id}`}
        className="relative w-full max-w-4xl bg-white dark:bg-[#1a1818] rounded-[2rem] overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh] md:max-h-[90vh]"
      >
        {/* Modal Header Image */}
        <div className="relative h-56 sm:h-80 shrink-0">
          <motion.img 
            layoutId={`project-image-${project.id}`}
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1818] via-[#1a1818]/40 to-transparent opacity-90" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md flex items-center justify-center text-white transition-colors border border-white/10 z-20"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
             <div className="mb-3 sm:mb-4">
                {project.status === 'ongoing' ? <OngoingBadge /> : project.status === 'upcoming' ? <UpcomingBadge /> : <CompletedBadge />}
             </div>
             <motion.h2 
               layoutId={`project-title-${project.id}`}
               className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-1 sm:mb-2"
             >
               {project.title}
             </motion.h2>
             <p className="text-lg sm:text-xl text-trada-secondary dark:text-trada-primary font-medium">{project.client}</p>
          </div>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-12 custom-scrollbar">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-8">
                 <div>
                    <h3 className="text-xl font-bold text-trada-dark dark:text-white mb-4 flex items-center gap-2">
                       <Layers size={20} className="text-trada-secondary" /> Overview
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                       {project.longDescription}
                    </p>
                 </div>
                 
                 <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
                    <h3 className="text-lg font-bold text-trada-dark dark:text-white mb-3">The Challenge</h3>
                    <p className="text-slate-600 dark:text-slate-400 italic">
                       "{project.challenge}"
                    </p>
                 </div>

                 {project.testimonial && (
                    <div className="relative pl-6 border-l-4 border-trada-secondary dark:border-trada-primary">
                       <Quote size={24} className="text-slate-300 dark:text-slate-600 absolute -top-2 -left-3 bg-white dark:bg-[#1a1818] rounded-full" />
                       <p className="text-lg font-medium text-slate-800 dark:text-white mb-4 italic">
                          "{project.testimonial.quote}"
                       </p>
                       <div>
                          <p className="font-bold text-trada-dark dark:text-slate-200">{project.testimonial.author}</p>
                          <p className="text-sm text-slate-500 uppercase tracking-wide">{project.testimonial.role}</p>
                       </div>
                    </div>
                 )}
              </div>

              <div className="space-y-8">
                 <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                       <Code size={16} /> Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                       {project.techStack.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-white/5">
                             {tech}
                          </span>
                       ))}
                    </div>
                 </div>

                 <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Domain</h3>
                    <div className="flex flex-wrap gap-2">
                       {project.tags.map((tag, i) => (
                          <span key={i} className="text-sm font-medium text-trada-secondary dark:text-trada-primary block w-full border-b border-slate-100 dark:border-white/5 pb-2">
                             # {tag}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main Page Component ---

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectStatus>('completed');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(p => p.status === activeTab);

  const tabs: { id: ProjectStatus; label: string; icon: any }[] = [
    { id: 'completed', label: 'Done', icon: CheckCircle2 },
    { id: 'ongoing', label: 'Ongoing', icon: Clock },
    { id: 'upcoming', label: 'Planned', icon: Calendar },
  ];

  return (
    <div className="pt-20 min-h-screen relative">
      
      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <Section className="pb-16 bg-white dark:bg-trada-dark transition-colors duration-700">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-trada-dark dark:text-white">
              <RevealText text="Our Work" />
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Real world solutions. From integrated government registries to private sector automation.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section className="-mt-10 pt-0 bg-transparent">
        {/* Tabs */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-2 p-1 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300
                  ${activeTab === tab.id ? 'text-white dark:text-trada-dark' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}
                `}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="portfolio-tab"
                    className="absolute inset-0 bg-trada-dark dark:bg-white rounded-full shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <tab.icon size={16} /> {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div 
           layout
           className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence mode='popLayout' initial={false}>
            {filteredProjects.map((project) => (
              <motion.div
                layoutId={`project-card-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => setSelectedProject(project)}
                className={`
                  relative rounded-[2rem] border overflow-hidden cursor-pointer group flex flex-col h-full bg-white dark:bg-[#1f1d1d]
                  ${project.status === 'completed' 
                    ? 'border-slate-100 dark:border-white/10 hover:shadow-2xl' 
                    : project.status === 'ongoing'
                    ? 'border-amber-200 dark:border-amber-900/30 ring-1 ring-amber-100 dark:ring-amber-900/20 hover:shadow-2xl hover:shadow-amber-500/10'
                    : 'border-slate-200 dark:border-white/20 hover:shadow-xl'
                  }
                  transition-all duration-300
                `}
              >
                {/* Card Image Header */}
                <div className="relative h-64 overflow-hidden">
                   <motion.img 
                      layoutId={`project-image-${project.id}`}
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1f1d1d] via-transparent to-transparent opacity-90" />
                   
                   <div className="absolute top-6 right-6 z-10">
                      {project.status === 'ongoing' ? <OngoingBadge /> : project.status === 'upcoming' ? <UpcomingBadge /> : <CompletedBadge />}
                   </div>
                </div>

                {/* Card Content */}
                <div className="p-8 md:p-10 pt-2 flex flex-col flex-grow">
                   <div className="mb-auto">
                      <div className="flex gap-2 flex-wrap mb-4">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs font-bold uppercase tracking-wider text-trada-secondary dark:text-trada-primary">
                                #{tag}
                            </span>
                        ))}
                      </div>

                      <motion.h3 
                        layoutId={`project-title-${project.id}`}
                        className="text-2xl sm:text-3xl font-display font-bold text-trada-dark dark:text-white mb-2 group-hover:text-trada-secondary dark:group-hover:text-trada-primary transition-colors"
                      >
                        {project.title}
                      </motion.h3>
                      
                      <p className="text-sm font-semibold text-slate-400 mb-4 sm:mb-6">
                         Client: {project.client}
                      </p>
                      
                      <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>
                   </div>

                   <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between mt-4">
                         <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-trada-dark dark:group-hover:text-white transition-colors">
                             View Details
                         </span>
                         <motion.div 
                           whileHover={{ x: 5 }}
                           className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${project.status === 'upcoming' ? 'bg-slate-100 dark:bg-white/10 text-slate-400' : 'bg-slate-100 dark:bg-white/10 text-trada-dark dark:text-white group-hover:bg-trada-dark group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-trada-dark'}`}
                         >
                            <ArrowRight size={18} />
                         </motion.div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </div>
  );
};

export default Portfolio;