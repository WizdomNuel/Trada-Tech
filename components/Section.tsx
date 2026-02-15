import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = "", dark = false, id, noPadding = false }) => {
  return (
    <section 
      id={id}
      className={`
        ${noPadding ? '' : 'py-16 md:py-24 lg:py-32'} 
        px-4 sm:px-6 lg:px-8 transition-colors duration-700
        ${dark 
          ? 'bg-trada-dark text-white' 
          : 'bg-slate-50 dark:bg-trada-dark dark:text-white text-slate-900'
        } 
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

// --- Animations ---

export const FadeIn: React.FC<{ 
  children: ReactNode; 
  delay?: number; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
}> = ({ children, delay = 0, className = "", direction = 'up', duration = 0.6, threshold = 0.2 }) => {
  
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      filter: "blur(0px)",
      transition: { 
        duration, 
        delay, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number] // Custom ease curve (cubic-bezier) for premium feel
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px", amount: threshold }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealText: React.FC<{ 
  text: string; 
  className?: string; 
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}> = ({ text, className = "", delay = 0, tag = 'h2' }) => {
  const words = text.split(" ");
  const Tag = motion[tag] as any;
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay }
    }
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 20, rotateX: 40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <Tag 
      className={`perspective-[1000px] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <motion.span 
          key={index} 
          variants={child} 
          className="inline-block mr-[0.25em] origin-bottom"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

export const StaggerContainer: React.FC<{
  children: ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px", amount: 0.1 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(2px)" },
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: { 
            type: "spring",
            damping: 20,
            stiffness: 100
          } 
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Section;