import React from 'react';
import { PhoneCall, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-gradient-to-br from-navy-deep via-navy to-navy-slate text-white relative overflow-hidden">
      
      {/* Background Animated Subtle Network Mesh */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#00B8D9_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-brand-cyan text-xs font-semibold mb-6 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-brand-cyan" />
          <span>Tư vấn hạ tầng chuyên sâu & Giải pháp tối ưu</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Sẵn sàng nâng cấp hạ tầng số?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Trao đổi với TN Flash để tìm giải pháp phù hợp cho doanh nghiệp của bạn.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <a
            href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-navy-deep bg-brand-cyan hover:bg-brand-accent transition-all duration-200 rounded-btn shadow-lg hover:shadow-brand-cyan/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan group"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Tư vấn ngay: {COMPANY_INFO.hotline}</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-600 transition-all duration-200 rounded-btn focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            <Mail className="w-4 h-4 text-brand-blue" />
            <span>Liên hệ TN Flash</span>
          </a>
        </div>

        {/* Support note */}
        <div className="inline-flex items-center gap-2 text-xs text-slate-400 border-t border-slate-800/80 pt-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Đội ngũ kỹ thuật hỗ trợ trực tiếp 24/7 – Email: {COMPANY_INFO.email}</span>
        </div>

      </div>
    </section>
  );
};
