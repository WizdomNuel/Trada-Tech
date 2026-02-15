import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Activity, ShieldCheck, Zap, ArrowUpRight, Search, PenTool, Code2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Section, { FadeIn, StaggerContainer, StaggerItem, RevealText } from '../components/Section';
import { PROCESS_STEPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-trada-dark text-trada-dark dark:text-white overflow-hidden transition-colors duration-700">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-[-10%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-trada-secondary/10 dark:bg-trada-secondary/20 rounded-full blur-[80px] md:blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, -50, 0]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-[-10%] left-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-sky-200/20 dark:bg-trada-secondary/5 rounded-full blur-[80px] md:blur-[100px]" 
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
          <FadeIn delay={0.1} direction="down">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-trada-secondary dark:text-trada-primary text-xs sm:text-sm font-semibold tracking-wide mb-6 sm:mb-8 backdrop-blur-sm">
              The Smart Business Integrator
            </span>
          </FadeIn>
          
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight text-trada-dark dark:text-white">
              <RevealText text="Work Better." delay={0.2} tag="span" className="block mb-2" />
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-trada-secondary to-trada-accent dark:from-trada-primary dark:to-teal-200 pb-2">
                 <RevealText text="Grow Faster." delay={0.4} tag="span" />
              </span>
            </h1>
          </div>

          <FadeIn delay={0.6}>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
              We build integrated digital infrastructure that helps African businesses and institutions clarify operations, earn trust, and access global opportunities.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <NavLink 
                to="/solutions"
                className="w-full sm:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-trada-secondary dark:bg-white text-white dark:text-trada-dark font-bold rounded-full transition-all flex items-center justify-center gap-2 group shadow-xl shadow-trada-secondary/20"
                >
                  Explore Solutions <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </NavLink>
              <NavLink 
                to="/about"
                className="w-full sm:w-auto"
              >
                 <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-200 dark:border-white/20 hover:border-trada-secondary dark:hover:border-white text-trada-dark dark:text-white font-semibold rounded-full transition-all hover:bg-slate-50 dark:hover:bg-white/5"
                >
                  Our Story
                </motion.button>
              </NavLink>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* The Problem / Reality Check */}
      <Section className="bg-slate-50 dark:bg-[#1a1818] transition-colors duration-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn direction="right">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-trada-dark dark:text-white leading-tight">
              Everyone is busy.<br/>But are they connected?
            </h2>
            <div className="prose prose-lg text-slate-600 dark:text-slate-400">
              <p className="mb-4">
                Across Nigeria and Africa, people work incredibly hard. Traders record sales in notebooks, manufacturers track inventory on WhatsApp, and regulators struggle with scattered data.
              </p>
              <p className="mb-4">
                Opportunities are missed not because of a lack of ability, but because the systems around them do not speak to each other. Information lives in silos, making decision-making slow and scalability impossible.
              </p>
              <p className="font-semibold text-trada-secondary dark:text-trada-primary text-xl mt-6">
                This gap creates friction. It reduces trust. It slows growth.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Activity, title: "Disconnected Tools", desc: "Fragmentation kills efficiency. When your finance software doesn't talk to your inventory, you lose money." },
              { icon: ShieldCheck, title: "Trust Deficit", desc: "Without verifiable data, it's hard to prove legitimacy to investors, banks, or international partners." },
              { icon: Zap, title: "Manual Processes", desc: "Human error is inevitable in manual entry. Automation frees your team for high-value work." },
            ].map((item, idx) => (
              <StaggerItem key={idx} className={`${idx === 2 ? 'sm:col-span-2' : ''}`}>
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                  className="h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm transition-all"
                >
                  <div className="w-12 h-12 bg-slate-100 dark:bg-white/10 rounded-xl flex items-center justify-center mb-6 text-trada-secondary dark:text-trada-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-trada-dark dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Value Prop */}
      <Section dark className="relative overflow-hidden bg-trada-dark text-white">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-trada-secondary/10 to-transparent pointer-events-none" />
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">TRADA was created to solve this quiet but costly problem.</h2>
            <p className="text-slate-400 text-lg md:text-xl font-light">
              Instead of building "another app," we focus on integration. Connecting tools, records, and processes into simple, trusted digital systems.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {[
            { title: "Clarify", desc: "We optimize processes before adding technology. We strip away the noise to find the signal in your operations." },
            { title: "Connect", desc: "We bridge fragmented tools into unified systems. APIs, middleware, and smart integrations are our specialty." },
            { title: "Scale", desc: "Data-driven growth for sustainable expansion. Once the foundation is solid, we help you step on the gas." }
          ].map((item, idx) => (
            <StaggerItem key={idx} className={idx === 2 ? "sm:col-span-2 md:col-span-1" : ""}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="h-full p-8 sm:p-10 rounded-3xl bg-slate-800/50 dark:bg-black/20 border border-slate-700/50 hover:border-trada-primary/50 transition-colors group backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-700/50 dark:bg-slate-800/50 flex items-center justify-center mb-8 group-hover:bg-trada-primary group-hover:text-trada-dark transition-all duration-300 text-trada-primary shadow-inner">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4 text-white group-hover:text-trada-primary transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-base sm:text-lg">{item.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Process Section */}
      <Section className="bg-white dark:bg-trada-dark transition-colors duration-700">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-trada-dark dark:text-white mb-6">How We Work</h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">Our methodology is designed to reduce risk and maximize adoption.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-200 dark:bg-white/10 -z-10" />

          {PROCESS_STEPS.map((step, idx) => {
            const icons = { Search, PenTool, Code2, Rocket };
            const Icon = (icons as any)[step.icon];

            return (
              <FadeIn key={step.id} delay={idx * 0.1}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-[#1a1818] border-4 border-slate-50 dark:border-white/5 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <Icon size={32} className="text-trada-secondary dark:text-trada-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-trada-dark dark:bg-white text-white dark:text-trada-dark flex items-center justify-center font-bold text-sm">
                      {step.id}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-trada-dark dark:text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">{step.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Success Stories Teaser */}
      <Section className="bg-slate-50 dark:bg-[#1a1818] transition-colors duration-700">
        <FadeIn>
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="max-w-2xl">
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-trada-dark dark:text-white mb-6">See Impact in Action</h2>
               <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">From local manufacturers to state chambers, we deliver measurable results.</p>
             </div>
             <NavLink to="/stories" className="hidden md:flex items-center gap-2 text-trada-secondary dark:text-trada-primary font-bold hover:gap-4 transition-all text-lg group">
               View All Stories <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </NavLink>
           </div>
        </FadeIn>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "The Production Pivot", metric: "22% Cost Savings", type: "Manufacturing" },
             { title: "Digitizing Institutional Trust", metric: "1.5k+ Members Verified", type: "Trade & Commerce" },
             { title: "Retail Without Leaks", metric: "2 New Branches", type: "Retail Expansion" }
           ].map((story, i) => (
             <StaggerItem key={i}>
               <NavLink to="/stories" className="block h-full">
                 <motion.div 
                    whileHover={{ y: -8 }}
                    className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:shadow-2xl hover:border-trada-secondary/30 dark:hover:border-trada-primary/50 transition-all duration-300 group h-full flex flex-col justify-between"
                  >
                   <div>
                     <span className="inline-block py-1 px-2 rounded-md bg-slate-100 dark:bg-white/10 text-xs font-bold text-trada-dark dark:text-white uppercase tracking-wider mb-4">{story.type}</span>
                     <h3 className="text-2xl font-bold text-trada-dark dark:text-white mb-4 group-hover:text-trada-secondary dark:group-hover:text-trada-primary transition-colors">{story.title}</h3>
                   </div>
                   <div className="flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-6 mt-6">
                     <span className="font-bold text-slate-900 dark:text-slate-200 text-lg">{story.metric}</span>
                     <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-400 dark:text-slate-300 group-hover:bg-trada-secondary group-hover:text-white dark:group-hover:bg-trada-primary dark:group-hover:text-trada-dark transition-colors duration-300">
                       <ArrowUpRight size={20} />
                     </div>
                   </div>
                 </motion.div>
               </NavLink>
             </StaggerItem>
           ))}
        </StaggerContainer>
        
        <div className="mt-12 text-center md:hidden">
          <NavLink to="/stories" className="inline-flex items-center gap-2 text-trada-secondary dark:text-trada-primary font-bold text-lg">
             View All Stories <ArrowRight size={20} />
           </NavLink>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white dark:bg-trada-dark transition-colors duration-700">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-trada-secondary rounded-[2.5rem] p-8 sm:p-10 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-trada-secondary/30"
        >
           {/* Abstract Background for CTA */}
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

           <div className="relative z-10 max-w-4xl mx-auto">
             <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-8 sm:mb-10 leading-tight">
               Ready to organize how work actually gets done?
             </h2>
             <NavLink 
                to="/contact" 
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-5 bg-white text-trada-secondary font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Start the Conversation
                </motion.button>
              </NavLink>
           </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Home;