import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceSection } from './components/ServiceSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { WhyTNFlash } from './components/WhyTNFlash';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-bg text-body-primary font-sans flex flex-col selection:bg-brand-blue selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Landing Content */}
      <main className="flex-1">
        <Hero />
        <ServiceSection />
        <InfrastructureSection />
        <WhyTNFlash />
        <CTASection />
      </main>

      {/* Enterprise Footer */}
      <Footer />

      {/* Embedded Botpress Assistant Floating Widget */}
      <ChatbotWidget />
    </div>
  );
};

export default App;
