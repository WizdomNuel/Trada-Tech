import React, { useRef, useState, useEffect } from 'react';
import Section, { FadeIn, StaggerContainer, StaggerItem, RevealText } from '../components/Section';
import { CASE_STUDIES } from '../constants';
import * as Icons from 'lucide-react';
import { ArrowUpRight, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const SocialShare: React.FC<{ title: string }> = ({ title }) => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`Check out this success story from TRADA: ${title}`);

  const shareLinks = [
    { 
      icon: Linkedin, 
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      label: "LinkedIn",
      color: "hover:bg-[#0077b5] hover:text-white"
    },
    { 
      icon: Twitter, 
      href: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      label: "Twitter",
      color: "hover:bg-black hover:text-white dark:hover:bg-slate-700"
    },
    { 
      icon: Mail, 
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${text}%0A%0A${url}`,
      label: "Email",
      color: "hover:bg-trada-secondary hover:text-white"
    }
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline-block">Share:</span>
      {shareLinks.map((link, idx) => (
        <a 
          key={idx} 
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-all duration-300 ${link.color}`}
          aria-label={`Share on ${link.label}`}
        >
          <link.icon size={15} />
        </a>
      ))}
    </div>
  );
};

const ImpactChart: React.FC<{ label: string; value: number; displayValue: string; index: number }> = ({ label, value, displayValue, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-5 last:mb-0"
    >
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{label}</span>
        <span className="text-sm font-bold text-trada-dark dark:text-white">{displayValue}</span>
      </div>
      <div className="h-3 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: (index * 0.1) + 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-trada-secondary to-trada-accent dark:from-trada-primary dark:to-teal-400 rounded-full relative"
        >
          {/* Shimmer effect overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-white/30 animate-[pulse_2s_infinite]"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const CaseStudySkeleton = () => (
  <div className="bg-white dark:bg-[#1a1818] rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 dark:border-white/10 min-h-[450px] animate-pulse relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
      <div className="lg:col-span-5 bg-slate-100 dark:bg-white/5 p-8 md:p-12 flex flex-col justify-between">
        <div>
          <div className="w-16 h-16 bg-slate-200 dark:bg-white/10 rounded-2xl mb-10"></div>
          <div className="w-24 h-6 bg-slate-200 dark:bg-white/10 rounded-full mb-6"></div>
          <div className="w-3/4 h-10 bg-slate-200 dark:bg-white/10 rounded-lg mb-3"></div>
          <div className="w-1/2 h-6 bg-slate-200 dark:bg-white/10 rounded-lg"></div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
           <div className="w-full h-12 bg-slate-200 dark:bg-white/10 rounded-lg"></div>
        </div>
      </div>
      <div className="lg:col-span-7 p-8 md:p-12 bg-white dark:bg-[#1e1c1c]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
           <div className="space-y-4">
             <div className="w-32 h-6 bg-slate-100 dark:bg-white/5 rounded"></div>
             <div className="w-full h-24 bg-slate-100 dark:bg-white/5 rounded"></div>
           </div>
           <div className="space-y-4">
             <div className="w-32 h-6 bg-slate-100 dark:bg-white/5 rounded"></div>
             <div className="w-full h-24 bg-slate-100 dark:bg-white/5 rounded"></div>
           </div>
        </div>
        <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-8 h-64 border border-slate-100 dark:border-white/5"></div>
      </div>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [visibleStudies, setVisibleStudies] = useState(CASE_STUDIES);

  const industries = ['All', ...Array.from(new Set(CASE_STUDIES.map(s => s.industry)))];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (filter === 'All') {
        setVisibleStudies(CASE_STUDIES);
      } else {
        setVisibleStudies(CASE_STUDIES.filter(s => s.industry === filter));
      }
      setLoading(false);
    }, 1200); // Simulated loading delay

    return () => clearTimeout(timer);
  }, [filter]);

  // Parallax calculations
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]); 
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="pt-20 relative overflow-hidden min-h-screen" ref={containerRef}>
      
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-trada-secondary/10 to-transparent dark:from-trada-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-sky-200/30 to-transparent dark:from-sky-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"
      />

      {/* Hero */}
      <Section className="pb-24 md:pb-32 bg-transparent transition-colors duration-700 relative z-10">
        <FadeIn>
          <motion.div style={{ y: textY, opacity }}>
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
              <div className="max-w-3xl">
                <span className="text-trada-secondary dark:text-trada-primary font-bold tracking-wider uppercase mb-4 block">Client Success Stories</span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-trada-dark dark:text-white">
                  <RevealText text="From Friction to Flow." />
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                  See how we help businesses and institutions transform chaotic workflows into streamlined, data-driven engines of growth.
                </p>
              </div>
              
              <div className="hidden md:block">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-white dark:border-trada-dark bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-white shadow-lg relative z-10 hover:z-20 transition-all hover:scale-110">
                      {i === 3 ? '50+' : ''}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 font-medium">Trusted Partners</p>
              </div>
            </div>

            {/* Filter Tabs - Wrapped for Mobile */}
            <div className="flex flex-wrap gap-2 md:gap-4 relative z-50">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setFilter(ind)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border ${
                    filter === ind
                      ? 'bg-trada-dark text-white border-trada-dark dark:bg-white dark:text-trada-dark dark:border-white shadow-lg transform scale-105'
                      : 'bg-white/50 dark:bg-white/5 backdrop-blur-sm text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </motion.div>
        </FadeIn>
      </Section>

      {/* Case Studies List */}
      <Section className="-mt-16 pt-0 bg-transparent relative z-20 min-h-[600px]">
        {loading ? (
          <div className="space-y-12 md:space-y-20">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CaseStudySkeleton />
              </motion.div>
            ))}
          </div>
        ) : (
          <StaggerContainer className="space-y-12 md:space-y-20">
            <AnimatePresence mode='popLayout'>
              {visibleStudies.length > 0 ? (
                visibleStudies.map((study) => {
                  const IconComponent = (Icons as any)[study.icon] || Icons.Briefcase;
                  
                  return (
                    <StaggerItem key={study.id}>
                      <motion.div 
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white dark:bg-[#1a1818] rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 dark:border-white/10 group hover:shadow-2xl transition-all duration-500"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[450px]">
                          
                          {/* Visual Header / Sidebar */}
                          <div className="lg:col-span-5 bg-trada-dark p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
                            {/* Decorative bg */}
                            <motion.div 
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 5 }}
                              className="absolute top-0 right-0 w-96 h-96 bg-trada-secondary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"
                            />
                            
                            <div className="relative z-10">
                              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-8 md:mb-10 border border-white/10">
                                <IconComponent size={32} />
                              </div>
                              <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/90 text-xs font-bold mb-4 md:mb-6 uppercase tracking-wide">
                                {study.industry}
                              </div>
                              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 leading-tight">
                                {study.title}
                              </h2>
                              <p className="text-slate-400 font-medium text-lg">{study.clientType}</p>
                            </div>

                            <div className="relative z-10 mt-8 md:mt-12 pt-8 border-t border-white/10">
                              <div className="flex items-end gap-3 text-white">
                                <span className="text-5xl font-bold text-trada-secondary">{study.keyMetric.split(' ')[0]}</span>
                                <span className="text-base font-medium pb-2 text-slate-300">{study.keyMetric.split(' ').slice(1).join(' ')}</span>
                              </div>
                            </div>
                          </div>

                          {/* Content Body */}
                          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-[#1e1c1c]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
                              <div>
                                <h3 className="flex items-center gap-2 font-bold text-trada-dark dark:text-white mb-4 text-lg">
                                  <Icons.AlertCircle className="w-5 h-5 text-red-500" />
                                  The Challenge
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                                  {study.challenge}
                                </p>
                              </div>
                              <div>
                                <h3 className="flex items-center gap-2 font-bold text-trada-dark dark:text-white mb-4 text-lg">
                                  <Icons.Zap className="w-5 h-5 text-trada-secondary dark:text-trada-primary" />
                                  The Integration
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                                  {study.solution}
                                </p>
                              </div>
                            </div>

                            <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-white/5 shadow-inner">
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
                                <h3 className="font-bold text-trada-dark dark:text-white flex items-center gap-2 text-lg">
                                  <Icons.TrendingUp className="w-5 h-5 text-green-500" />
                                  Measurable Impact
                                </h3>
                                <SocialShare title={study.title} />
                              </div>
                              
                              {/* Visual Charts */}
                              {study.metricsData && (
                                <div className="mb-8 md:mb-10 p-4 md:p-6 bg-white dark:bg-black/20 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
                                  {study.metricsData.map((metric, i) => (
                                    <ImpactChart 
                                      key={i} 
                                      label={metric.label} 
                                      value={metric.value} 
                                      displayValue={metric.displayValue}
                                      index={i} 
                                    />
                                  ))}
                                </div>
                              )}

                              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Detailed Results</h4>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {study.results.map((result, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <Icons.CheckCircle2 className="w-5 h-5 text-trada-secondary dark:text-trada-primary shrink-0 mt-0.5" />
                                    <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    </StaggerItem>
                  );
                })
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">No case studies found for this category.</p>
                  <button onClick={() => setFilter('All')} className="mt-4 text-trada-secondary hover:underline">Clear Filters</button>
                </div>
              )}
            </AnimatePresence>
          </StaggerContainer>
        )}
      </Section>
      
      {/* Footer CTA */}
      <Section className="bg-slate-50 dark:bg-[#151414] transition-colors duration-700 relative z-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-trada-dark dark:text-white mb-6">Become our next success story.</h2>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-trada-secondary text-white rounded-full font-bold shadow-lg hover:bg-trada-accent transition-all"
          >
            Start your project <ArrowUpRight />
          </motion.a>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudies;