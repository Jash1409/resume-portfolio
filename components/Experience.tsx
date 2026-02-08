
import React from 'react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  // Fix: Handle case where experience might be undefined or empty
  if (!RESUME_DATA.experience || RESUME_DATA.experience.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-slate-500 italic">Experience details coming soon...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {RESUME_DATA.experience.map((exp, idx) => (
        <div key={idx} className="relative pl-12 pb-12 border-l-2 border-indigo-100 last:border-l-0">
          <div className="absolute left-0 top-0 -ml-[11px] w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-black text-slate-900">{exp.role}</h3>
                <p className="text-indigo-600 font-bold text-lg">{exp.company}</p>
                <div className="flex items-center gap-4 mt-1 text-slate-500 font-medium text-sm">
                  <span><i className="fas fa-location-dot mr-2"></i>{exp.location}</span>
                  <span><i className="fas fa-calendar-days mr-2"></i>{exp.period}</span>
                </div>
              </div>
              <div className="px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest">
                Professional
              </div>
            </div>
            
            <ul className="space-y-4">
              {exp.highlights.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0"></div>
                  <p className="text-slate-600 leading-relaxed font-medium">{bullet}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
