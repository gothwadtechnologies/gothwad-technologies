import React, { useState } from 'react';

interface ProjectInquiryViewProps {
  onBack: () => void;
}

const ProjectInquiryView: React.FC<ProjectInquiryViewProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone1: '',
    phone2: '',
    email: '',
    projectTitle: '',
    projectDetails: '',
    budget: '20k-30k'
  });

  const budgetOptions = [
    '20k to 30k',
    '30k to 40k',
    '40k to 50k',
    '50k to 60k',
    '60k to 70k',
    '70k to 80k',
    '80k to 90k',
    '90k to 1 Lakh',
    'Above 1 Lakh'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project Inquiry Submitted:', formData);
    alert('Thank you for your inquiry! Our team will contact you soon.');
    onBack();
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#001F3F] rounded-full flex items-center justify-center text-white font-black">G</div>
            <h1 className="text-xl font-black text-slate-900 tracking-tighter uppercase">Gothwad <span className="text-[#0056B3]">Technologies</span></h1>
          </div>
          <button 
            onClick={onBack}
            className="text-slate-500 hover:text-slate-900 font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">Project Initiation</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">Tell Us About Your <br /><span className="text-[#0056B3]">Next Big Venture.</span></h2>
            <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto">Fill out the form below and our engineering team will get back to you with a strategic blueprint and quote.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-[40px] border border-slate-100 shadow-2xl shadow-blue-500/5 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Phone 1 */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.phone1}
                  onChange={(e) => setFormData({...formData, phone1: e.target.value})}
                />
              </div>

              {/* Phone 2 */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Alternate Phone (Optional)</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.phone2}
                  onChange={(e) => setFormData({...formData, phone2: e.target.value})}
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Address / Location</label>
                <input 
                  required
                  type="text" 
                  placeholder="City, State, Country"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              {/* Project Title */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Project Title</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. E-commerce Platform, Mobile App, AI Integration"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.projectTitle}
                  onChange={(e) => setFormData({...formData, projectTitle: e.target.value})}
                />
              </div>

              {/* Project Details */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Project Details</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Describe your vision, key features, and goals..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                ></textarea>
              </div>

              {/* Budget */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Estimated Budget Range</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({...formData, budget: option})}
                      className={`px-4 py-3 rounded-xl text-xs font-bold transition-all border ${
                        formData.budget === option 
                        ? 'bg-[#0056B3] text-white border-transparent shadow-lg scale-105' 
                        : 'bg-white text-slate-600 border-slate-100 hover:border-blue-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#0056B3]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs text-slate-500 font-medium max-w-[200px]">Your data is encrypted and handled with corporate-level security.</p>
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto bg-[#0056B3] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-900 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
              >
                Submit Project Blueprint
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProjectInquiryView;
