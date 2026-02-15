import React from 'react';
import Section, { FadeIn, StaggerContainer, StaggerItem, RevealText } from '../components/Section';
import { Smartphone, Lock, Wifi, Users, Layers, Shield, ShieldCheck, Database, Server, Smartphone as MobileIcon, Cpu } from 'lucide-react';
import { TECH_STACK } from '../constants';

const Approach: React.FC = () => {
  return (
    <div className="pt-20">
      <Section className="text-center bg-white dark:bg-trada-dark transition-colors duration-500">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-trada-dark dark:text-white">
            <RevealText text="Our Philosophy" />
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We treat technology as quiet infrastructure: reliable, supportive, and almost invisible when it works well.
          </p>
        </FadeIn>
      </Section>

      {/* Core Principles Grid */}
      <Section className="bg-slate-50 dark:bg-[#1a1818]">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { icon: Smartphone, title: "Mobile-First", desc: "Designed for the devices people actually use to run their businesses. We prioritize responsive layouts and touch-friendly interfaces." },
            { icon: Wifi, title: "Low-Bandwidth", desc: "Optimized for environments where internet connectivity fluctuates. We use local caching, background syncing, and lightweight assets." },
            { icon: Layers, title: "Integration Focused", desc: "We don't create silos. We connect existing tools and workflows. If you use Excel, we integrate with Excel. If you use WhatsApp, we integrate with WhatsApp." },
            { icon: Users, title: "Human Centric", desc: "Technology fitting real African business realities, not the other way around. We design for the literacy levels and habits of the actual users." },
            { icon: Lock, title: "Secure by Design", desc: "Data protection and privacy principles embedded from day one. Role-based access control, encryption at rest, and audit logs are standard." },
            { icon: Shield, title: "AI-Assisted", desc: "AI is a support layer, not a replacement for sound processes. We use AI for predictive analytics and fraud detection, not just for chatbots." },
          ].map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-slate-100 dark:bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-trada-secondary group-hover:text-white dark:group-hover:bg-trada-primary dark:group-hover:text-trada-dark transition-colors">
                  <item.icon className="w-6 h-6 text-trada-secondary dark:text-trada-primary group-hover:text-white dark:group-hover:text-trada-dark" />
                </div>
                <h3 className="text-xl font-bold text-trada-dark dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-white dark:bg-trada-dark transition-colors duration-500">
          <div className="mb-12 md:mb-16 text-center">
             <FadeIn>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-trada-dark dark:text-white mb-4">Our Technology Stack</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">We choose boring, battle-tested technologies that are easy to maintain and cheap to scale.</p>
             </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TECH_STACK.map((tech, idx) => {
                 const icons = { Smartphone: MobileIcon, Server, Database, Cpu };
                 const Icon = (icons as any)[tech.icon];
                 
                 return (
                     <StaggerItem key={idx}>
                         <div className="bg-slate-50 dark:bg-[#1a1818] rounded-3xl p-6 md:p-8 border border-slate-100 dark:border-white/5 h-full">
                             <div className="flex items-center gap-3 mb-6">
                                 <Icon className="text-trada-secondary dark:text-trada-primary" size={24} />
                                 <h3 className="font-bold text-lg text-trada-dark dark:text-white">{tech.category}</h3>
                             </div>
                             <div className="flex flex-wrap gap-2">
                                 {tech.items.map((item, i) => (
                                     <span key={i} className="px-3 py-1 bg-white dark:bg-white/10 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                                         {item}
                                     </span>
                                 ))}
                             </div>
                         </div>
                     </StaggerItem>
                 );
              })}
          </StaggerContainer>
      </Section>

      {/* Ethics & Security */}
      <Section className="bg-slate-50 dark:bg-[#1a1818] transition-colors duration-500">
        <div className="max-w-5xl mx-auto bg-white dark:bg-white/5 rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-transparent dark:border-white/10">
          <FadeIn>
            <div className="text-center mb-10">
                 <h2 className="text-3xl font-display font-bold text-trada-dark dark:text-white mb-4">Data Protection & Ethics</h2>
                 <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    Trust is central to everything we do. TRADA is committed to the ethical and responsible use of data and AI.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
               <div className="space-y-4">
                  <h3 className="font-bold text-trada-secondary dark:text-trada-primary uppercase tracking-wider text-sm">Security Protocols</h3>
                  <ul className="space-y-3">
                      {[
                        "End-to-end encryption for sensitive data",
                        "Regular vulnerability scanning and penetration testing",
                        "Role-based access control (RBAC) implementation",
                        "Automated backups and disaster recovery planning"
                      ].map((li, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <ShieldCheck size={18} className="text-slate-400 mt-0.5 shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 text-sm">{li}</span>
                        </li>
                      ))}
                  </ul>
               </div>
               
               <div className="space-y-4">
                  <h3 className="font-bold text-trada-secondary dark:text-trada-primary uppercase tracking-wider text-sm">Compliance & Ethics</h3>
                  <ul className="space-y-3">
                      {[
                        "Full compliance with NDPR (Nigeria Data Protection Regulation)",
                        "Transparent AI usage: We tell you when algorithms are making decisions",
                        "Data Sovereignty: Hosting critical data within jurisdiction when required",
                        "Ethical sourcing of data for market intelligence"
                      ].map((li, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <ShieldCheck size={18} className="text-slate-400 mt-0.5 shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 text-sm">{li}</span>
                        </li>
                      ))}
                  </ul>
               </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Approach;