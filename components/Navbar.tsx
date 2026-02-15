import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import LogoDark from '../assets/Logos/ICON_1.png';
import LogoLight from '../assets/Logos/ICON_2.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/80 dark:bg-[#151414]/80 backdrop-blur-xl shadow-sm py-3 border-b border-slate-200/50 dark:border-white/5'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center transition-colors duration-300 text-trada-dark dark:text-white">
        <NavLink to="/" className="flex items-center gap-2 group relative z-50">
          <motion.img
            src={theme === 'dark' ? LogoDark : LogoLight}
            alt="TRADA Logo"
            className="h-8 md:h-10 lg:h-12 w-auto object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-1 bg-slate-100/50 dark:bg-white/5 p-1.5 rounded-full border border-slate-200/50 dark:border-white/5 backdrop-blur-sm relative z-40">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setHoveredNav(item.label)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {item.children ? (
                  <>
                    <button
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full z-10 flex items-center gap-1 ${location.pathname.includes(item.path)
                        ? 'text-trada-dark dark:text-white font-bold'
                        : 'text-slate-600 hover:text-trada-dark dark:text-slate-300 dark:hover:text-white'
                        }`}
                    >
                      {item.label} <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredNav === item.label ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {hoveredNav === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-[#1a1818] rounded-xl shadow-xl border border-slate-100 dark:border-white/10 overflow-hidden py-1 z-50"
                        >
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-sm transition-colors hover:bg-slate-50 dark:hover:bg-white/5 ${isActive
                                  ? 'text-trada-secondary dark:text-trada-primary font-bold'
                                  : 'text-slate-600 dark:text-slate-300'
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full z-10 block ${isActive
                        ? 'text-white'
                        : 'text-slate-600 hover:text-trada-dark dark:text-slate-300 dark:hover:text-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="absolute inset-0 bg-trada-secondary dark:bg-trada-primary rounded-full -z-10"
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6
                            }}
                          />
                        )}
                        <span className={isActive ? "text-white dark:text-trada-dark" : ""}>{item.label}</span>
                      </>
                    )}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 15 }}
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 hover:text-trada-dark dark:text-slate-300 dark:hover:text-white"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <NavLink
            to="/contact"
            state={{ mode: 'booking' }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 text-sm font-semibold rounded-full shadow-lg shadow-trada-secondary/20 bg-trada-secondary text-white hover:bg-trada-accent dark:bg-white dark:text-trada-dark dark:hover:bg-slate-200"
            >
              Get Started
            </motion.button>
          </NavLink>
        </div>

        {/* Mobile Actions - Just Theme Toggle now */}
        <div className="flex items-center gap-4 lg:hidden relative z-50">
          <button
            onClick={toggleTheme}
            className="p-2 transition-colors text-trada-dark dark:text-white hover:opacity-80"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;