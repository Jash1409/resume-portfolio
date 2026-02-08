
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '', dark = false }) => {
  return (
    <section id={id} className={`py-20 ${dark ? 'bg-slate-900 text-white' : 'bg-transparent'} ${className}`}>
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-black mb-4 inline-block relative">
            {title}
            <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-indigo-600 rounded-full"></span>
          </h2>
          {subtitle && <p className={`text-lg ${dark ? 'text-slate-400' : 'text-slate-600'} max-w-2xl`}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
