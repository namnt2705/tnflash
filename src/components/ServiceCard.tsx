import React from 'react';
import { Mail, Send, Monitor, Terminal, Server, HardDrive, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { ServiceItem } from '../data/siteData';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = () => {
    switch (service.iconName) {
      case 'Mail':
        return <Mail className="w-6 h-6 text-brand-blue" />;
      case 'Send':
        return <Send className="w-6 h-6 text-brand-cyan" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-sky-600" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-emerald-600" />;
      case 'Server':
        return <Server className="w-6 h-6 text-indigo-600" />;
      case 'HardDrive':
        return <HardDrive className="w-6 h-6 text-amber-600" />;
      default:
        return <Server className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <div className="group relative bg-white rounded-card p-6 sm:p-7 border border-slate-200/90 shadow-subtle hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      
      {/* Accent Corner Bar on Hover */}
      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header: Icon + Badge */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-brand-light group-hover:border-brand-blue/30 transition-colors duration-300">
            {getIcon()}
          </div>
          {service.badge && (
            <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-semibold text-slate-700 group-hover:bg-brand-light group-hover:text-brand-blue transition-colors">
              {service.badge}
            </span>
          )}
        </div>

        {/* Category & Title */}
        <div className="mb-3">
          <span className="text-[11px] font-bold text-brand-blue uppercase tracking-wider">
            {service.category}
          </span>
          <h3 className="text-xl font-bold text-navy-deep group-hover:text-brand-blue transition-colors mt-0.5">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-body-muted leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
          {service.features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-body-primary font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Footer */}
      <div className="pt-4 border-t border-slate-100/80 flex items-center justify-between">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue group-hover:text-brand-hover transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue rounded px-1"
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
        </a>
      </div>

    </div>
  );
};
