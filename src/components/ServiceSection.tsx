import React from 'react';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceCard } from './ServiceCard';
import { Layers } from 'lucide-react';

export const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-surface-bg relative">
      {/* Background Subtle Watermark Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#1769E0_0.8px,transparent_0.8px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Danh mục dịch vụ</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight mb-4">
            Giải pháp hạ tầng số cho doanh nghiệp
          </h2>
          
          <p className="text-base sm:text-lg text-body-muted leading-relaxed">
            Từ email doanh nghiệp đến hệ thống máy chủ và lưu trữ dữ liệu, TN Flash cung cấp các giải pháp được thiết kế để doanh nghiệp vận hành hiệu quả và linh hoạt.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};
