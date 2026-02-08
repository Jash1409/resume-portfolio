
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
      <div className="p-8 flex-grow">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
            <i className={`fas ${
              project.title === 'Job Pilot' ? 'fa-id-card' : 
              project.title === 'Work from Cafe' ? 'fa-mug-hot' : 'fa-robot'
            }`}></i>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
              <i className="fab fa-github"></i>
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
              <i className="fas fa-external-link-alt"></i>
            </button>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {/* Fix: Split technologies string into array as it is defined as string in Project interface */}
          {project.technologies.split(', ').map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-100">
              {tech}
            </span>
          ))}
        </div>

        <ul className="space-y-3">
          {project.highlights.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <i className="fas fa-angle-right mt-1 text-indigo-500 text-sm"></i>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">{bullet}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Case Study</span>
        <i className="fas fa-arrow-right text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all"></i>
      </div>
    </div>
  );
};

export default ProjectCard;
