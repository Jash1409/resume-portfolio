
import React from 'react';
import { RESUME_DATA } from '../constants';

const Education: React.FC = () => {
  const { education } = RESUME_DATA;
  return (
    <div className="grid grid-cols-1 gap-10">
      {/* Fix: Map over the education array since it's not a single object */}
      {education.map((edu, index) => (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-8 last:mb-0">
          <div className="lg:col-span-1">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500 opacity-50"></div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{edu.institution}</h3>
              <p className="text-indigo-600 font-bold mb-4">{edu.degree}</p>
              
              {edu.cgpa && (
                <div className="flex justify-between items-center py-4 border-y border-slate-50 mb-4">
                  <span className="text-slate-500 font-medium">CGPA</span>
                  <span className="text-slate-900 font-black text-xl">{edu.cgpa}</span>
                </div>
              )}
              
              {edu.expectedDate && (
                <>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Expected Graduation</div>
                  <p className="text-slate-800 font-semibold">{edu.expectedDate}</p>
                </>
              )}
            </div>
          </div>
          
          {edu.coursework && edu.coursework.length > 0 && (
            <div className="lg:col-span-2">
              <div className="h-full p-8 bg-slate-50 rounded-3xl border border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <i className="fas fa-book-open text-indigo-600"></i>
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {edu.coursework.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <span className="text-slate-700 font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Education;
