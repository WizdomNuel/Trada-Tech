import React from 'react';
import { NavLink } from 'react-router-dom';
import { Info, Zap, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import LogoDark from '../assets/Logos/ICON_1.png';
import LogoLight from '../assets/Logos/ICON_2.png';

const LogoIcon = ({ size, className }: { size?: number | string; strokeWidth?: number; className?: string }) => {
  const { theme } = useTheme();
  return (
    <img
      src={theme === 'dark' ? LogoDark : LogoLight}
      alt="Home"
      style={{ width: size, height: size }}
      className={`${className} object-contain`}
    />
  );
};

const MobileNav: React.FC = () => {
  const navItems = [
    { label: 'Home', path: '/', icon: LogoIcon },
    { label: 'About', path: '/about', icon: Info },
    { label: 'Solutions', path: '/solutions', icon: Zap },
    { label: 'Portfolio', path: '/portfolio', icon: Briefcase },
    { label: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white/90 dark:bg-[#151414]/90 backdrop-blur-xl border-t border-slate-200 dark:border-white/5 pb-safe">
      <div className="flex justify-around items-center px-2 py-2 pb-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              relative flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-300 min-w-[64px]
              ${isActive ? 'text-trada-secondary dark:text-trada-primary' : 'text-slate-400 dark:text-slate-500'}
            `}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-active"
                    className="absolute inset-0 bg-trada-secondary/10 dark:bg-trada-primary/10 rounded-2xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} className="relative z-10" />
                <span className={`text-[10px] font-medium relative z-10 ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;