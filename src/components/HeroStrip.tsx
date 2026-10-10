import React from 'react';
import { HERO_STRIP_ITEMS } from '../data/siteData';
import { CheckCircle, ShieldCheck } from 'lucide-react';

export const HeroStrip: React.FC = () => {
  return (
    <section className="bg-navy-deep py-6 border-y border-slate-800 relative z-20 text-white overflow-hidden">
      {/* Background Subtle Mesh Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#1769E0_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          
          {/* Tagline / Value Proposition */}
          <div className="flex items-center gap-2.5 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700/80 text-xs sm:text-sm font-semibold text-brand-cyan shadow-inner">
            <ShieldCheck className="w-4 h-4 text-brand-cyan flex-shrink-0" />
            <span>Ổn định – Bảo mật – Sẵn sàng mở rộng</span>
          </div>

          {/* Infrastructure Category Strip */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-3">
            {HERO_STRIP_ITEMS.map((item, index) => (
              <div key={item} className="flex items-center gap-2 group">
                <CheckCircle className="w-4 h-4 text-brand-blue group-hover:text-brand-cyan transition-colors" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                  {item}
                </span>
                {index < HERO_STRIP_ITEMS.length - 1 && (
                  <span className="hidden sm:inline-block ml-4 w-1.5 h-1.5 rounded-full bg-slate-700" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
