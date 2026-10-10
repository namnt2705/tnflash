import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, Cpu } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Placeholder: TN FLASH with Abstract Network Symbol */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg p-1"
            aria-label="TN Flash Trang chủ"
          >
            <div className="relative w-10 h-10 rounded-xl bg-navy-deep flex items-center justify-center shadow-md overflow-hidden group-hover:shadow-brand-blue/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 via-transparent to-brand-cyan/20" />
              {/* Abstract Network/Cloud Icon */}
              <div className="relative z-10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-brand-cyan rounded-full animate-ping opacity-75" />
            </div>
            
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1">
                <span className="text-xl font-extrabold tracking-tight text-navy-deep font-sans">TN</span>
                <span className="text-xl font-extrabold tracking-tight text-brand-blue font-sans">FLASH</span>
              </div>
              <span className="text-[10px] font-semibold text-body-muted uppercase tracking-wider mt-0.5">
                Digital Infrastructure
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigation chính">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-body-primary hover:text-brand-blue rounded-lg transition-colors hover:bg-slate-100/60 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-navy-deep hover:text-brand-blue transition-colors px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              <div className="w-7 h-7 rounded-full bg-brand-light flex items-center justify-center text-brand-blue">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{COMPANY_INFO.hotline}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-hover active:bg-navy transition-all duration-200 rounded-btn shadow-sm hover:shadow-brand-blue/30 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
            >
              <span>Tư vấn ngay</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-body-primary hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-body-primary hover:text-brand-blue hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 text-sm font-semibold text-navy-deep"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Hotline: {COMPANY_INFO.hotline}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-brand-blue hover:bg-brand-hover rounded-btn transition-colors shadow-sm"
              >
                Tư vấn ngay
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
