import React from 'react';
import { BENEFITS_DATA } from '../data/siteData';
import { Activity, ShieldCheck, Sliders, Headphones, CheckCircle } from 'lucide-react';

export const WhyTNFlash: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-7 h-7 text-brand-blue" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-brand-cyan" />;
      case 'Sliders':
        return <Sliders className="w-7 h-7 text-indigo-600" />;
      case 'Headphones':
        return <Headphones className="w-7 h-7 text-emerald-600" />;
      default:
        return <Activity className="w-7 h-7 text-brand-blue" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-surface-bg relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Giá trị cốt lõi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight mb-4">
            Tập trung vào hạ tầng. Đồng hành cùng doanh nghiệp.
          </h2>

          <p className="text-base sm:text-lg text-body-muted leading-relaxed">
            Chúng tôi cam kết xây dựng giải pháp công nghệ vững chắc, coi sự ổn định và an toàn thông tin của khách hàng là ưu tiên hàng đầu.
          </p>
        </div>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {BENEFITS_DATA.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-card p-6 sm:p-7 border border-slate-200/90 shadow-subtle hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-2xs">
                  {getIcon(benefit.iconName)}
                </div>

                <h3 className="text-xl font-bold text-navy-deep mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm text-body-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-blue">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                <span>Tiêu chuẩn TN Flash</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
