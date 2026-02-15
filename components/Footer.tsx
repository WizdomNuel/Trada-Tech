import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, COMPANY_NAME, TAGLINE } from '../constants';
import FooteLogo from '../assets/Logos/TRADA_H1.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-trada-dark text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <img src={FooteLogo} alt={COMPANY_NAME} className="h-10 md:h-12 lg:h-16 w-auto object-contain" />
            <p className="text-slate-400 leading-relaxed">
              {TAGLINE}. Building integrated digital infrastructure for Africa's growth.
            </p>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-trada-primary transition-colors">
                <Mail size={16} /> {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-trada-primary transition-colors">
                <Phone size={16} /> {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><NavLink to="/about" className="hover:text-trada-primary transition-colors">About Us</NavLink></li>
              <li><NavLink to="/stories" className="hover:text-trada-primary transition-colors">Success Stories</NavLink></li>
              <li><NavLink to="/philosophy" className="hover:text-trada-primary transition-colors">Our Philosophy</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-trada-primary transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><NavLink to="/solutions" className="hover:text-trada-primary transition-colors">Process Optimization</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-trada-primary transition-colors">Integrated Systems</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-trada-primary transition-colors">Data Analytics</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-trada-primary transition-colors">Automation</NavLink></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-white font-display font-semibold text-lg mb-2">Ready to integrate?</h3>
            <p className="text-sm text-slate-400 mb-4">Let's discuss how we can streamline your operations.</p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 text-trada-primary font-medium hover:gap-3 transition-all"
            >
              Get in touch <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
