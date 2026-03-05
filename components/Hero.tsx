
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Shining Glow Background Elements */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px] opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[1000px] h-[1000px] bg-slate-200 rounded-full mix-blend-multiply filter blur-[150px] opacity-40 animate-pulse delay-1000"></div>

      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0056B3 0.5px, transparent 0.5px)', backgroundSize: '48px 48px' }}></div>

      <div className="container mx-auto px-6 relative z-10 text-center py-20">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 glass-card border border-white/80 rounded-full mb-12 group cursor-default shadow-sm transition-all hover:shadow-md">
          <div className="w-2 h-2 bg-[#0056B3] rounded-full animate-ping"></div>
          <span className="text-slate-900 text-[9px] font-black tracking-[0.3em] uppercase italic">India's Biggest Open Source Developer Community / Aiming for Tech Self-Reliance</span>
        </div>
        
        <h1 className="text-5xl md:text-[110px] font-black text-slate-900 leading-[0.9] mb-14 tracking-tighter">
          Building India's <br /> <span className="text-[#0056B3]">Self-Reliant Future.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 max-w-4xl mx-auto mb-20 leading-relaxed font-medium">
          Replacing foreign technology with indigenous innovation. <br className="hidden md:block" />
          <span className="text-slate-900 font-black">Smart Software & Custom Solutions</span> engineered for a digital-first India.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://gtechstore.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-900 text-white px-12 py-7 rounded-[28px] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#0056B3] transition-all shadow-2xl hover:-translate-y-1 active:scale-95 flex items-center gap-3"
          >
            Visit Gothwad Store
          </a>
          <a 
            href="https://github.com/gothwadtechnologies" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card text-[#0056B3] border border-white px-12 py-7 rounded-[28px] text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all active:scale-95 shadow-lg flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            Explore Projects
          </a>
        </div>

        <div className="mt-40 relative max-w-6xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0056B3] to-blue-300 rounded-[64px] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,86,179,0.1)] border-[1px] border-white/50 bg-white/40 backdrop-blur-md p-6">
             <div className="aspect-[21/9] bg-slate-50/50 rounded-[48px] overflow-hidden relative border border-white/50 shadow-inner">
               <img 
                 src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                 alt="Gothwad Engineering Center" 
                 className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[8s]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
               
               <div className="absolute bottom-10 left-10 flex gap-10">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-white leading-none">100%</span>
                    <span className="text-[9px] font-black text-blue-300 uppercase tracking-widest mt-2">Legal Security</span>
                  </div>
                  <div className="flex flex-col border-l border-white/20 pl-10">
                    <span className="text-4xl font-black text-white leading-none">24/7</span>
                    <span className="text-[9px] font-black text-blue-300 uppercase tracking-widest mt-2">Active Support</span>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
