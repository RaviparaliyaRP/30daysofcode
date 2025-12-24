
import React from 'react';

interface LoaderCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  index: number;
}

export const LoaderCard: React.FC<LoaderCardProps> = ({ title, description, children, index }) => {
  return (
    <div 
      className="group relative bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-between min-h-[450px] transition-all duration-700 hover:bg-white/5 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 blur-[60px] group-hover:bg-purple-500/20 transition-all duration-700 pointer-events-none" />

      <div className="flex-1 flex items-center justify-center w-full relative z-10 scale-110 group-hover:scale-125 transition-transform duration-700">
        {children}
      </div>

      <div className="text-center w-full mt-10 space-y-3 relative z-10">
        <h3 className="text-2xl font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed max-w-[200px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
      </div>
    </div>
  );
};
