
import React from 'react';
import { RESUME_DATA } from './constants';

const App: React.FC = () => {
  const handleDownload = () => {
    window.print();
  };

  const formatLink = (url: string) => {
    if (url.startsWith('http')) return url;
    return `https://${url}`;
  };

  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center">
      {/* Header Actions */}
      <header className="w-full max-w-[850px] flex justify-end mb-6 no-print">
        <button 
          onClick={handleDownload}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/20 backdrop-blur-sm text-sm font-semibold shadow-xl group"
        >
          <i className="fas fa-download group-hover:bounce transition-transform"></i>
          Download PDF
        </button>
      </header>

      {/* Main Resume Paper */}
      <article className="resume-paper resume-font w-full max-w-[850px] bg-white text-black p-10 md:p-14 shadow-2xl relative leading-relaxed text-[10.5pt]">
        {/* Name Header */}
        <header className="text-center mb-4">
          <h1 className="text-3xl font-normal uppercase tracking-widest text-black mb-1">
            {RESUME_DATA.name}
          </h1>
          <div className="text-[9pt] mb-2">{RESUME_DATA.location}</div>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-[9pt]">
            <span className="flex items-center gap-1">
              <i className="fas fa-phone text-[8pt]"></i> {RESUME_DATA.phone}
            </span>
            <a 
              href={`mailto:${RESUME_DATA.email}`}
              className="flex items-center gap-1 hover:underline hover:text-blue-800 transition-colors"
            >
              <i className="fas fa-envelope text-[8pt]"></i> {RESUME_DATA.email}
            </a>
            <a 
              href={formatLink(RESUME_DATA.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline hover:text-blue-800 transition-colors"
            >
              <i className="fab fa-linkedin text-[8pt]"></i> {RESUME_DATA.linkedin}
            </a>
            <a 
              href={formatLink(RESUME_DATA.github)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline hover:text-blue-800 transition-colors"
            >
              <i className="fab fa-github text-[8pt]"></i> {RESUME_DATA.github}
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-[12pt] font-bold text-black uppercase tracking-tight">Professional Summary</h2>
          <div className="section-line"></div>
          <p className="text-justify">
            {RESUME_DATA.summary}
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-[12pt] font-bold text-black uppercase tracking-tight">Education</h2>
          <div className="section-line"></div>
          {RESUME_DATA.education.map((edu, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between font-bold">
                <span>{edu.institution}</span>
                <span>{edu.location}</span>
              </div>
              <div className="flex justify-between italic text-[10pt]">
                <span>{edu.degree} – CGPA: {edu.cgpa}</span>
                <span>{edu.expectedDate}</span>
              </div>
              <ul className="list-disc list-inside mt-1 ml-4">
                <li className="text-[10pt]">
                  <span className="font-bold">Relevant Coursework:</span> {edu.coursework.join(', ')}
                </li>
              </ul>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-[12pt] font-bold text-black uppercase tracking-tight">Technical Skills</h2>
          <div className="section-line"></div>
          <div className="space-y-0.5">
            {RESUME_DATA.skills.map((skill, idx) => (
              <p key={idx} className="text-[10pt]">
                <span className="font-bold">{skill.label}:</span> {skill.items}
              </p>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-[12pt] font-bold text-black uppercase tracking-tight">Experience</h2>
          <div className="section-line"></div>
          {RESUME_DATA.experience.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between font-bold">
                <span>{exp.role}</span>
                <span>{exp.period}</span>
              </div>
              <div className="flex justify-between italic text-[10pt] mb-1">
                <span>{exp.company}</span>
                <span>{exp.location}</span>
              </div>
              <ul className="list-disc ml-5 space-y-0.5">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="text-[10pt] text-justify">{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-[12pt] font-bold text-black uppercase tracking-tight">Projects</h2>
          <div className="section-line"></div>
          {RESUME_DATA.projects.map((proj, idx) => (
            <div key={idx} className="mb-4 last:mb-0">
              <div className="font-bold">
                {proj.title} <span className="font-normal italic text-[10pt]">| {proj.technologies}</span>
              </div>
              <ul className="list-disc ml-5 space-y-0.5">
                {proj.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="text-[10pt] text-justify">{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </article>

      <footer className="mt-12 text-slate-500 text-xs no-print font-medium tracking-widest uppercase opacity-50">
        &copy; {new Date().getFullYear()} JASH SANGHVI
      </footer>
    </div>
  );
};

export default App;
