import React from 'react';
import Section, { FadeIn, StaggerContainer, StaggerItem, RevealText } from '../components/Section';
import { SOLUTIONS, FAQS } from '../constants';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ item }: { item: any }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b border-slate-200 dark:border-white/10 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-6 text-left group"
            >
                <span className="text-lg font-bold text-trada-dark dark:text-white group-hover:text-trada-secondary dark:group-hover:text-trada-primary transition-colors pr-4">{item.question}</span>
                <span className={`p-2 rounded-full transition-colors flex-shrink-0 ${isOpen ? 'bg-trada-secondary text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-500'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <motion.div 
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <p className="pb-6 text-slate-600 dark:text-slate-400 leading-relaxed pr-8">
                    {item.answer}
                </p>
            </motion.div>
        </div>
    );
};

const Solutions: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <Section className="pb-24 md:pb-32 bg-white dark:bg-trada-dark transition-colors duration-700">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 text-trada-dark dark:text-white">
              <RevealText text="Sequential & Scalable Solutions" />
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed px-4">
              Structure → Integrate → Automate → Analyze → Scale. <br className="hidden md:block"/>We don't just dump software; we build infrastructure that grows with you.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Solutions List */}
      <Section className="-mt-16 md:-mt-20 pt-0 bg-transparent">
        <StaggerContainer className="space-y-12 md:space-y-20">
          {SOLUTIONS.map((solution, idx) => {
            // Dynamically get icon component
            const IconComponent = (Icons as any)[solution.icon] || Icons.HelpCircle;
            const isEven = idx % 2 === 0;

            return (
              <StaggerItem key={solution.id}>
                <motion.div 
                    whileHover={{ 
                        y: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white dark:bg-[#1f1d1d] rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 dark:border-white/5 perspective-1000 group`}
                >
                  
                  {/* Icon/Visual Side */}
                  <div className={`lg:w-2/5 p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden ${isEven ? 'bg-trada-dark text-white' : 'bg-trada-secondary text-white'}`}>
                    <motion.div 
                        initial={{ scale: 1, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: 0.1 }}
                        className="absolute inset-0 bg-white rounded-full blur-3xl"
                    ></motion.div>
                    
                    <div className="relative z-10 p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10 mb-6 md:mb-8">
                        <IconComponent size={48} strokeWidth={1.5} className="text-white md:w-16 md:h-16" />
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-display font-bold relative z-10 leading-tight">{solution.title}</h2>
                    <span className="text-[8rem] md:text-[10rem] font-bold opacity-5 absolute bottom-[-40px] right-[-20px] pointer-events-none select-none">0{solution.id}</span>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-3/5 p-6 sm:p-10 md:p-14 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-semibold text-trada-secondary dark:text-trada-primary mb-4">
                      {solution.shortDescription}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
                      {solution.fullDescription}
                    </p>

                    <div className="bg-slate-50 dark:bg-black/20 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-white/5">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 md:mb-6">Implementation Levels</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                        {solution.levels.map((level, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Icons.CheckCircle2 className="w-5 h-5 text-trada-secondary dark:text-trada-primary shrink-0 mt-0.5" />
                            <span className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-200">{level}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      {/* FAQs */}
      <Section className="bg-slate-50 dark:bg-[#1a1818] transition-colors duration-700">
        <div className="max-w-3xl mx-auto">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-trada-dark dark:text-white mb-8 md:mb-12 text-center">Common Questions</h2>
                <div className="bg-white dark:bg-white/5 rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-lg border border-slate-100 dark:border-white/10">
                    {FAQS.map((faq, idx) => (
                        <FAQItem key={idx} item={faq} />
                    ))}
                </div>
            </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Solutions;