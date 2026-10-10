import React from 'react';
import { Phone, Mail, Globe, Cpu, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-deep text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-brand-cyan" />
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1">
                  <span className="text-xl font-extrabold text-white tracking-tight">TN</span>
                  <span className="text-xl font-extrabold text-brand-blue tracking-tight">FLASH</span>
                </div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                  Enterprise Cloud Infrastructure
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-md">
              {COMPANY_INFO.tagline}
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-cyan" />
                <span className="font-semibold text-white">Hotline: {COMPANY_INFO.hotline}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-cyan" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  Email: {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-brand-cyan" />
                <a href={COMPANY_INFO.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Website: {COMPANY_INFO.website}
                </a>
              </div>
            </div>

          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Điều hướng
            </h4>
            <ul className="space-y-2.5 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-brand-cyan transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Dịch vụ hạ tầng
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Cloud Server Linux & Windows</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Email doanh nghiệp theo tên miền</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Giải pháp Email Marketing</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">IDC & Cho thuê hạ tầng máy chủ</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Lưu trữ dữ liệu Cloud Storage</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 TN Flash. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Cuộn lên đầu trang"
          >
            <span>Về đầu trang</span>
            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
