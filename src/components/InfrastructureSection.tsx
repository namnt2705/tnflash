import React, { useState } from 'react';
import { INFRA_FEATURES } from '../data/siteData';
import { ServerNetworkAnimation } from './ServerNetworkAnimation';
import { Server, Cpu, CheckCircle } from 'lucide-react';

export const InfrastructureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="infrastructure" className="py-20 lg:py-28 bg-white relative border-t border-slate-200/80 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-navy-deep text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            <Cpu className="w-3.5 h-3.5 text-brand-blue" />
            <span>Kiến trúc Kỹ thuật</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight mb-4">
            Hạ tầng Cloud được xây dựng cho hiệu suất
          </h2>

          <p className="text-base sm:text-lg text-body-muted leading-relaxed">
            Hệ thống máy chủ ảo hóa chất lượng cao kết hợp đường truyền băng thông lớn và hạ tầng lưu trữ tốc độ cao, đáp ứng các tiêu chuẩn khắt khe của doanh nghiệp.
          </p>
        </div>

        {/* 2 Column Layout: Left Infrastructure Visualization, Right 4 Feature Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Interactive Visual Infrastructure Cluster */}
          <div className="lg:col-span-6 w-full">
            <div className="relative">
              <ServerNetworkAnimation compact />
              
              {/* Overlay Stat Badge */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center text-brand-blue">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-navy-deep block">Enterprise Hardware Architecture</span>
                    <span className="text-[11px] text-body-muted">Multi-layered RAID & High Bandwidth Routing</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Ready
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Feature Items */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {INFRA_FEATURES.map((feat, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={feat.number}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                    isActive
                      ? 'bg-navy-deep text-white border-navy-deep shadow-xl shadow-navy-deep/10'
                      : 'bg-white text-navy-deep border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/80 shadow-xs'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    
                    {/* Number Badge */}
                    <div
                      className={`text-lg font-black font-mono px-3 py-1.5 rounded-xl flex-shrink-0 ${
                        isActive ? 'bg-brand-blue text-white' : 'bg-slate-100 text-brand-blue'
                      }`}
                    >
                      {feat.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className={`text-lg font-bold ${isActive ? 'text-white' : 'text-navy-deep'}`}>
                          {feat.title}
                        </h3>
                        <span
                          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                            isActive
                              ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30'
                              : 'bg-slate-100 text-body-muted'
                          }`}
                        >
                          {feat.tag}
                        </span>
                      </div>

                      <p
                        className={`text-sm leading-relaxed ${
                          isActive ? 'text-slate-300' : 'text-body-muted'
                        }`}
                      >
                        {feat.description}
                      </p>

                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-slate-700/80 flex items-center gap-2 text-xs font-semibold text-brand-cyan">
                          <CheckCircle className="w-4 h-4" />
                          <span>Hỗ trợ tư vấn trực tiếp theo mô hình kinh doanh</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
