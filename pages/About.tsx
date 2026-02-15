import React from 'react';
import { motion } from 'framer-motion';
import Section, { FadeIn, StaggerContainer, StaggerItem, RevealText } from '../components/Section';
import { Target, Lightbulb, Compass, Award, Globe, ShieldCheck, Users } from 'lucide-react';
import { TEAM_MEMBERS, CORE_VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <Section className="pb-24 md:pb-32 bg-white dark:bg-trada-dark transition-colors duration-500">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 text-trada-dark dark:text-white">
            <RevealText text="The Story Behind TRADA" />
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            We are not just a software company. We are a systems integrator for the African reality, bridging the gap between chaotic potential and structured growth.
          </p>
        </FadeIn>
      </Section>

      {/* Our Story Section */}
      <Section className="-mt-16 md:-mt-20 pt-0 bg-transparent">
        <FadeIn>
          <div className="bg-white dark:bg-[#1a1818] rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-slate-100 dark:border-white/10">
            <div className="mb-10">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-trada-dark dark:text-white mb-3">Our Story</h2>
               <div className="h-1.5 w-20 bg-trada-secondary rounded-full" />
            </div>

            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <StaggerItem className="prose prose-lg text-slate-600 dark:text-slate-300">
                <h3 className="text-xl sm:text-2xl font-bold text-trada-dark dark:text-white mb-4">A Familiar Observation</h3>
                <p>
                  TRADA began with a simple, familiar observation. Across Nigeria and much of Africa, people work incredibly hard to keep businesses running. A trader records sales in a notebook. A manufacturer tracks inventory through WhatsApp messages. A regulator requests reports that take weeks to assemble.
                </p>
                <p>
                  Everyone is busy. Everyone is trying. Yet very little is truly connected. Information is lost in transit, trust is hard to verify, and scalability remains a dream for many hardworking founders.
                </p>
              </StaggerItem>
              <StaggerItem className="prose prose-lg text-slate-600 dark:text-slate-300">
                <h3 className="text-xl sm:text-2xl font-bold text-trada-dark dark:text-white mb-4">The Solution</h3>
                <p>
                  TRADA exists to make business clearer and more connected, so that effort turns into growth, trust opens doors, and data becomes a help rather than a burden.
                </p>
                <p>
                  We work at the intersection of <strong className="text-trada-secondary dark:text-trada-primary">Technology, Research, Automation, Data, and Analytics</strong> (TRADA). We are the bridge between your current operational reality and your future digital potential.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </FadeIn>
      </Section>

      {/* V/M/P Grid */}
      <Section className="bg-slate-50 dark:bg-trada-dark transition-colors duration-500">
        <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl font-display font-bold text-trada-dark dark:text-white">Our North Star</h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { 
              icon: Target, 
              title: "Purpose", 
              text: "To help African businesses and institutions see clearly, work better, and grow by connecting technology, data, and people into simple, trusted digital systems."
            },
            { 
              icon: Compass, 
              title: "Vision", 
              text: "To become Africa’s trusted digital backbone for businesses and institutions, enabling seamless operations, credible visibility, and sustainable growth."
            },
            { 
              icon: Lightbulb, 
              title: "Mission", 
              text: "To design and deploy integrated digital platforms that simplify operations, improve transparency, and empower enterprises with reliable technology."
            }
          ].map((item, idx) => (
            <StaggerItem key={idx} className={idx === 2 ? "sm:col-span-2 md:col-span-1" : ""}>
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 hover:shadow-xl transition-all h-full"
              >
                <div className="w-12 h-12 bg-sky-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-trada-secondary dark:text-trada-primary mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-trada-dark dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Core Values */}
      <Section className="bg-white dark:bg-[#1a1818] transition-colors duration-500">
        <FadeIn className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-trada-dark dark:text-white mb-6">Our DNA</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Values aren't just posters on a wall. They are the decision-making framework we use when no one is watching.</p>
        </FadeIn>
        
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, idx) => {
                const icons = { Lightbulb, Globe, ShieldCheck, Users };
                const Icon = (icons as any)[value.icon];
                return (
                    <StaggerItem key={idx}>
                        <div className="h-full p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-trada-secondary/50 dark:hover:border-trada-primary/50 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-trada-dark dark:bg-white text-white dark:text-trada-dark flex items-center justify-center mb-6">
                                <Icon size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-trada-dark dark:text-white mb-3">{value.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
                        </div>
                    </StaggerItem>
                );
            })}
        </StaggerContainer>
      </Section>

      {/* Leadership */}
      <Section className="bg-slate-50 dark:bg-trada-dark transition-colors duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start lg:items-center">
             <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
                <FadeIn>
                    <div className="relative rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl">
                         <img src={TEAM_MEMBERS[0].image} alt={TEAM_MEMBERS[0].name} className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                         <div className="absolute bottom-8 left-8 text-white">
                             <p className="font-display font-bold text-xl sm:text-2xl">{TEAM_MEMBERS[0].name}</p>
                             <p className="opacity-80 text-sm sm:text-base">{TEAM_MEMBERS[0].role}</p>
                         </div>
                    </div>
                </FadeIn>
             </div>
             <div className="lg:col-span-7">
                <FadeIn delay={0.2}>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-trada-dark dark:text-white mb-6 lg:mb-8">Leadership</h2>
                    <div className="prose prose-lg md:prose-xl text-slate-600 dark:text-slate-400">
                        <p className="mb-4">{TEAM_MEMBERS[0].bio}</p>
                        <p className="italic font-medium text-slate-800 dark:text-slate-200 bg-white/50 dark:bg-white/5 p-6 rounded-2xl border-l-4 border-trada-secondary">
                           "At TRADA, we aren't interested in technology for technology's sake. We are interested in what technology allows a business to become. Can you serve more customers? Can you sleep better at night knowing your records are safe? That is what matters."
                        </p>
                    </div>
                </FadeIn>
             </div>
        </div>
      </Section>

      {/* Corporate Info */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
           <FadeIn direction="right">
             <h2 className="text-3xl font-display font-bold mb-6">Legal & Corporate</h2>
             <StaggerContainer className="space-y-6">
                <StaggerItem className="flex gap-4">
                  <Award className="text-trada-secondary dark:text-trada-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Registered Entity</h4>
                    <p className="text-slate-400 text-sm">Incorporated with the Corporate Affairs Commission (CAC), Nigeria.</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-4">
                  <Target className="text-trada-secondary dark:text-trada-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Focus Area</h4>
                    <p className="text-slate-400 text-sm">Technology development, systems integration, digital platforms, and business infrastructure.</p>
                  </div>
                </StaggerItem>
             </StaggerContainer>
           </FadeIn>
           <FadeIn delay={0.2} direction="left">
             <div className="bg-slate-800 dark:bg-slate-900 p-8 rounded-2xl border-l-4 border-trada-secondary dark:border-trada-primary">
               <h3 className="text-xl font-bold mb-4 text-white">Positioning Statement</h3>
               <p className="text-lg italic text-slate-300">"TRADA Technologies Limited — The Smart Business Integrator."</p>
             </div>
           </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default About;