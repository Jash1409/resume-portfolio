
import React from 'react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-indigo-50 to-transparent opacity-50 blur-3xl"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
            Hi, I'm <span className="text-indigo-600">{RESUME_DATA.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
            {RESUME_DATA.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            {/* Fix: Access github directly from RESUME_DATA as per interface definition */}
            <a 
              href={RESUME_DATA.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all shadow-xl"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
            {/* Fix: Access linkedin directly from RESUME_DATA as per interface definition */}
            <a 
              href={RESUME_DATA.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-xl"
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a 
              href={`mailto:${RESUME_DATA.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm"
            >
              <i className="fas fa-envelope text-indigo-500"></i>
              Email
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <i className="fas fa-location-dot text-indigo-600 text-xl mb-4"></i>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Location</h3>
              <p className="text-slate-800 font-semibold">{RESUME_DATA.location}</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <i className="fas fa-graduation-cap text-indigo-600 text-xl mb-4"></i>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Education</h3>
              <p className="text-slate-800 font-semibold">{RESUME_DATA.education[0]?.institution}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
