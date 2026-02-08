
import React from 'react';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  // Fix: Use the correctly typed skills array from RESUME_DATA
  const skillsList = RESUME_DATA.skills;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillsList.map((skillGroup, idx) => (
        <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg hover:border-indigo-100 transition-colors">
          <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
              {/* Fix: Use label property instead of non-existent category */}
              <i className={`fas ${
                skillGroup.label.includes('Languages') ? 'fa-code' : 
                skillGroup.label.includes('Frameworks') ? 'fa-layer-group' : 
                skillGroup.label.includes('Databases') ? 'fa-database' : 
                skillGroup.label.includes('Tools') ? 'fa-tools' : 
                skillGroup.label.includes('Certifications') ? 'fa-certificate' : 'fa-trophy'
              }`}></i>
            </div>
            {skillGroup.label}
          </h3>
          <div className="flex flex-wrap gap-3">
            {/* Fix: items is a string in SkillCategory, split it by comma for mapping */}
            {skillGroup.items.split(', ').map((skill, sIdx) => (
              <span 
                key={sIdx} 
                className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
