
import React from 'react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=gothwadtechnologies@gmail.com";

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Our Mission', id: 'aim' },
    { label: 'Global Trust', id: 'trust' },
    { label: 'Key Statistics', id: 'stats' },
    { label: 'Quality Manifesto', id: 'manifesto' },
    { label: 'Core Services', id: 'services' },
    { label: 'Direct Support', id: 'contact-email' },
    { label: 'Code Marketplace', id: 'code-marketplace' },
    { label: 'Custom Software', id: 'custom-software' },
    { label: 'Game Engine', id: 'game-engine' },
    { label: 'Development Process', id: 'process' },
    { label: 'Industry Solutions', id: 'industries' },
    { label: 'Project Showcase', id: 'project-showcase' },
    { label: 'Market Comparison', id: 'comparison' },
    { label: 'GTech Warehouse', id: 'app-store' },
    { label: 'Gothwad Studio', id: 'studio' },
    { label: 'Client Testimonials', id: 'testimonials' },
    { label: 'Leadership Team', id: 'leadership' },
    { label: 'FAQ Center', id: 'faq' },
    { label: 'Technology Stack', id: 'tech-matrix' },
    { label: 'Community Join Us', id: 'join-us' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[200] shadow-2xl flex flex-col border-l border-slate-100 animate-in slide-in-from-right duration-300">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-10">
          <div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">Navigation</h2>
            <p className="text-slate-400 font-bold text-[9px] uppercase tracking-[0.3em] mt-1">Gothwad Technologies</p>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto px-4 py-6 scrollbar-hide">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link, i) => (
              <button 
                key={i} 
                onClick={() => scrollToSection(link.id)}
                className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all text-left group border border-transparent hover:border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <span className="font-bold text-slate-700 text-sm group-hover:text-slate-900 tracking-tight transition-colors">
                    {link.label}
                  </span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 text-[#0056B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div className="p-8 bg-slate-900 text-white">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-[#0056B3] rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.2em] leading-none mb-2">Direct Dispatch</p>
              <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold hover:text-blue-300 transition-colors truncate block">gothwadtechnologies@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDrawer;
