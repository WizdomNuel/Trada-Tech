import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Section, { FadeIn, RevealText, StaggerContainer, StaggerItem } from '../components/Section';
import { Mail, Phone, MapPin, Send, Calendar, Check } from 'lucide-react';
import { CONTACT_INFO, CONSULTING_SERVICES } from '../constants';

const Contact: React.FC = () => {
  const location = useLocation();
  const [formType, setFormType] = useState<'general' | 'booking'>('general');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    if ((location.state as any)?.mode === 'booking') {
      setFormType('booking');
    }
  }, [location.state]);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="pt-20">
      <Section className="bg-white dark:bg-trada-dark text-trada-dark dark:text-white min-h-[40vh] flex flex-col justify-center transition-colors duration-700">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6">
              <RevealText text={formType === 'general' ? "Let's Connect" : "Book Session"} />
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light mb-8 px-4">
              {formType === 'general' 
                ? "Have a question? Send us a message and we'll get back to you." 
                : "Ready to work? Select your needs and schedule a consultation."}
            </p>

            {/* Form Toggle */}
            <div className="inline-flex bg-slate-100 dark:bg-white/10 p-1.5 rounded-full border border-slate-200 dark:border-white/5 relative mx-auto">
               <button
                 onClick={() => setFormType('general')}
                 className={`relative z-10 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors ${formType === 'general' ? 'text-white dark:text-trada-dark' : 'text-slate-500 dark:text-slate-300'}`}
               >
                 General
               </button>
               <button
                 onClick={() => setFormType('booking')}
                 className={`relative z-10 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors ${formType === 'booking' ? 'text-white dark:text-trada-dark' : 'text-slate-500 dark:text-slate-300'}`}
               >
                 Book Session
               </button>
               <motion.div 
                 layout
                 className="absolute top-1.5 bottom-1.5 bg-trada-secondary dark:bg-white rounded-full"
                 initial={false}
                 animate={{ 
                   left: formType === 'general' ? '6px' : '50%', 
                   width: formType === 'general' ? 'calc(50% - 9px)' : 'calc(50% - 9px)',
                   x: formType === 'general' ? 0 : 3
                 }}
                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
               />
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="-mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Info Card */}
          <FadeIn className="lg:col-span-1">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-trada-secondary text-white p-8 sm:p-12 rounded-[2rem] h-full shadow-2xl relative overflow-hidden"
            >
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
               <div className="absolute top-10 right-10 w-20 h-20 bg-trada-accent rounded-full blur-xl opacity-50"></div>
               
              <h3 className="text-2xl font-bold mb-8 sm:mb-10 relative z-10">Reach Out</h3>
              
              <div className="space-y-8 sm:space-y-10 relative z-10">
                <div className="group">
                  <h4 className="text-xs font-bold opacity-70 uppercase mb-2 tracking-wider">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-base sm:text-lg hover:underline group-hover:translate-x-1 transition-transform break-all">
                    <Mail size={20} className="shrink-0" /> {CONTACT_INFO.email}
                  </a>
                </div>

                <div className="group">
                  <h4 className="text-xs font-bold opacity-70 uppercase mb-2 tracking-wider">Phone</h4>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-base sm:text-lg hover:underline group-hover:translate-x-1 transition-transform">
                    <Phone size={20} className="shrink-0" /> {CONTACT_INFO.phone}
                  </a>
                </div>

                <div className="group">
                  <h4 className="text-xs font-bold opacity-70 uppercase mb-2 tracking-wider">Location</h4>
                  <p className="flex items-center gap-3 text-base sm:text-lg group-hover:translate-x-1 transition-transform">
                    <MapPin size={20} className="shrink-0" /> {CONTACT_INFO.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Form Area */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="bg-white dark:bg-[#1a1818] p-6 sm:p-10 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 dark:border-white/10 min-h-full">
              <form onSubmit={(e) => e.preventDefault()}>
                <StaggerContainer className="space-y-6 sm:space-y-8">
                    {/* Common Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      <StaggerItem className="space-y-2 group">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                        <input type="text" className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/20 dark:text-white focus:border-trada-secondary dark:focus:border-trada-secondary focus:bg-white dark:focus:bg-black/40 outline-none transition-all duration-300 placeholder:text-slate-400" placeholder="John Doe" />
                      </StaggerItem>
                      <StaggerItem className="space-y-2 group">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                        <input type="email" className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/20 dark:text-white focus:border-trada-secondary dark:focus:border-trada-secondary focus:bg-white dark:focus:bg-black/40 outline-none transition-all duration-300 placeholder:text-slate-400" placeholder="john@company.com" />
                      </StaggerItem>
                    </div>

                    <AnimatePresence mode="wait">
                      {formType === 'booking' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden space-y-6 sm:space-y-8"
                        >
                           {/* Service Selection */}
                           <div className="space-y-4">
                             <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Select Services Required</label>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                               {CONSULTING_SERVICES.map((service) => (
                                 <div 
                                    key={service.id}
                                    onClick={() => toggleService(service.id)}
                                    className={`
                                      flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                                      ${selectedServices.includes(service.id) 
                                        ? 'border-trada-secondary bg-trada-secondary/5 dark:bg-trada-primary/10 dark:border-trada-primary' 
                                        : 'border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 hover:border-slate-300 dark:hover:border-white/20'}
                                    `}
                                 >
                                   <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors shrink-0 ${selectedServices.includes(service.id) ? 'bg-trada-secondary border-trada-secondary dark:bg-trada-primary dark:border-trada-primary' : 'border-slate-300 dark:border-slate-500'}`}>
                                      {selectedServices.includes(service.id) && <Check size={14} className="text-white dark:text-trada-dark" />}
                                   </div>
                                   <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{service.label}</span>
                                 </div>
                               ))}
                             </div>
                           </div>

                           {/* Date Selection */}
                           <div className="space-y-2 group">
                              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Preferred Consultation Date</label>
                              <div className="relative">
                                <input type="date" className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/20 dark:text-white focus:border-trada-secondary dark:focus:border-trada-secondary focus:bg-white dark:focus:bg-black/40 outline-none transition-all duration-300 text-slate-600 dark:text-slate-300" />
                                <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                              </div>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {formType === 'general' && (
                      <StaggerItem className="space-y-2 group">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                        <div className="relative">
                          <select className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/20 dark:text-white focus:border-trada-secondary dark:focus:border-trada-secondary focus:bg-white dark:focus:bg-black/40 outline-none transition-all duration-300 appearance-none cursor-pointer">
                              <option>General Inquiry</option>
                              <option>Partnership Proposal</option>
                              <option>Media & Press</option>
                              <option>Other</option>
                          </select>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                          </div>
                        </div>
                      </StaggerItem>
                    )}

                    <StaggerItem className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                        {formType === 'booking' ? 'Additional Details / Specific Requirements' : 'Message'}
                      </label>
                      <textarea rows={4} className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/20 dark:text-white focus:border-trada-secondary dark:focus:border-trada-secondary focus:bg-white dark:focus:bg-black/40 outline-none transition-all duration-300 placeholder:text-slate-400 resize-none" placeholder={formType === 'booking' ? "Tell us a bit about your organization and current challenges..." : "How can we help you?"}></textarea>
                    </StaggerItem>

                    <StaggerItem>
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full sm:w-auto px-10 py-5 bg-trada-secondary text-white dark:bg-white dark:text-trada-dark font-bold rounded-full hover:bg-trada-accent dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg"
                        >
                          {formType === 'booking' ? 'Book Session' : 'Send Message'} <Send size={20} />
                        </motion.button>
                    </StaggerItem>
                </StaggerContainer>
              </form>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Contact;