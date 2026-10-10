import React from 'react';
import { ArrowRight, MessageSquare, Check } from 'lucide-react';
import { ServerNetworkAnimation } from './ServerNetworkAnimation';
import { HeroStrip } from './HeroStrip';

export const Hero: React.FC = () => {
  return (
    <>
      <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-surface-bg overflow-hidden">
        
        {/* Abstract Background Watermarks: Network Lines, Nodes & Subtle Data Flow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Light Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          {/* Subtle Watermark Network SVG Connections */}
          <svg className="absolute w-full h-full opacity-20" viewBox="0 0 1200 800" fill="none">
            <path
              d="M -100 200 Q 300 100 600 350 T 1300 200"
              stroke="#1769E0"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />
            <path
              d="M -50 450 Q 400 300 800 550 T 1350 400"
              stroke="#00B8D9"
              strokeWidth="1.5"
              strokeDasharray="6 12"
            />
            <circle cx="300" cy="135" r="4" fill="#1769E0" />
            <circle cx="600" cy="350" r="5" fill="#00B8D9" />
            <circle cx="800" cy="550" r="4" fill="#1769E0" />
          </svg>

          {/* Soft Glow Radial Orbs */}
          <div className="absolute top-12 left-1/4 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline + Subheadline + CTAs */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              
              {/* Enterprise Badge Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-navy-deep mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <span>Giải pháp Hạ tầng Số & Cloud Doanh nghiệp</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-deep leading-[1.18] mb-6">
                Hạ tầng số mạnh mẽ.{' '}
                <span className="bg-gradient-to-r from-brand-blue via-brand-blue to-brand-cyan bg-clip-text text-transparent">
                  Nền tảng cho doanh nghiệp bứt phá.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-body-muted font-normal leading-relaxed mb-8 max-w-2xl">
                TN Flash cung cấp giải pháp Cloud, Email doanh nghiệp, máy chủ và lưu trữ dữ liệu giúp doanh nghiệp vận hành ổn định, bảo mật và sẵn sàng phát triển.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-brand-blue hover:bg-brand-hover active:bg-navy transition-all duration-200 rounded-btn shadow-md hover:shadow-brand-blue/25 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 group"
                >
                  <span>Khám phá dịch vụ</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-navy-deep bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all duration-200 rounded-btn shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  <MessageSquare className="w-4 h-4 text-brand-blue" />
                  <span>Liên hệ tư vấn</span>
                </a>
              </div>

              {/* Enterprise Features Reassurance */}
              <div className="pt-6 border-t border-slate-200/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-body-primary">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Khởi tạo nhanh chóng</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-body-primary">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>An toàn dữ liệu</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-body-primary">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Đồng hành kỹ thuật</span>
                </div>
              </div>

            </div>

            {/* Right Column: Server Infrastructure Interactive Visualization */}
            <div className="lg:col-span-6 w-full">
              <ServerNetworkAnimation />
            </div>

          </div>
        </div>
      </section>

      {/* Hero Sub-strip */}
      <HeroStrip />
    </>
  );
};
