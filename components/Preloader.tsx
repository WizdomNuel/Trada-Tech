import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_NAME, TAGLINE } from '../constants';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#151414]"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
           {/* Assuming logo.png is available in public folder as per previous context */}
           <img src="/logo.png" alt="TRADA Logo" className="w-24 md:w-32 h-auto object-contain" />
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl font-display font-bold text-trada-dark dark:text-white tracking-tight mb-2"
        >
            {COMPANY_NAME}
        </motion.h1>

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-light tracking-widest uppercase"
        >
            {TAGLINE}
        </motion.p>
      </div>
      
      {/* Loading Bar */}
      <div className="absolute bottom-20 w-64 h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
        <motion.div
            initial={{ width: 0, x: "-100%" }}
            animate={{ width: "100%", x: "0%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-trada-secondary to-trada-accent"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;