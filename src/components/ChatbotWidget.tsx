import React, { useState } from 'react';
import { Minus, X, Terminal, ExternalLink, Bot, Sparkles, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [iframeError, setIframeError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setIsLoading(false);
  };

  return (
    <aside className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Floating Chat Modal Window */}
      {isOpen && (
        <div
          className="pointer-events-auto mb-4 w-[calc(100vw-24px)] sm:w-[380px] h-[calc(100vh-120px)] sm:h-[600px] max-h-[650px] bg-white rounded-[18px] border border-slate-200/90 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
          role="dialog"
          aria-label="TN Flash Assistant Chatbot"
        >
          {/* Header */}
          <div className="bg-navy-deep text-white px-4 py-3.5 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              
              {/* Launcher / Tux Linux Style Icon */}
              <div className="relative w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-cyan">
                <Terminal className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-navy-deep" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold leading-tight">TN Flash Assistant</h3>
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Online</span>
                </div>
              </div>

            </div>

            {/* Header Controls: Minimize (-) & Close (X) */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition-colors focus:outline-none"
                aria-label="Minimize Chat Assistant"
                title="Thu nhỏ"
              >
                <Minus className="w-4 h-4" />
              </button>
              
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition-colors focus:outline-none"
                aria-label="Close Chat Assistant"
                title="Đóng"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body: Embedded Botpress Webchat Iframe */}
          <div className="relative flex-1 bg-slate-50 w-full overflow-hidden">
            
            {/* Loading Indicator */}
            {isLoading && !iframeError && (
              <div className="absolute inset-0 bg-white/90 z-10 flex flex-col items-center justify-center p-6 text-center">
                <RefreshCw className="w-8 h-8 text-brand-blue animate-spin mb-3" />
                <p className="text-xs font-semibold text-navy-deep">Đang tải trợ lý TN Flash...</p>
                <span className="text-[11px] text-body-muted mt-1">Vui lòng chờ trong giây lát</span>
              </div>
            )}

            {/* Fallback Display if Iframe loading fails / CSP restriction occurs */}
            {iframeError ? (
              <div className="absolute inset-0 bg-white p-6 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-blue flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-navy-deep mb-2">Trợ lý TN Flash</h4>
                <p className="text-xs text-body-muted leading-relaxed mb-6">
                  Để trải nghiệm hỗ trợ tốt nhất, bạn có thể mở giao diện chat trực tiếp trong cửa sổ chuyên dụng.
                </p>
                <a
                  href={COMPANY_INFO.chatbotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-brand-blue hover:bg-brand-hover rounded-btn shadow-md transition-all"
                >
                  <span>Mở Trợ Lý Botpress</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <iframe
                src={COMPANY_INFO.chatbotUrl}
                title="TN Flash Botpress Chatbot"
                className="w-full h-full border-none"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            )}
          </div>

          {/* Footer note */}
          <div className="px-3 py-2 bg-slate-100 border-t border-slate-200 text-[10px] text-slate-500 text-center">
            Hạ tầng Cloud & Support do TN Flash vận hành
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        type="button"
        onClick={toggleWidget}
        className="pointer-events-auto relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-navy-deep hover:bg-navy text-white shadow-xl hover:shadow-brand-blue/30 border-2 border-brand-cyan/60 flex items-center justify-center transition-all duration-300 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2"
        aria-label="Mở Trợ lý Chatbot TN Flash"
      >
        {/* Subtle Outer Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-brand-cyan/30 animate-ping opacity-60 pointer-events-none" />

        {/* Tux Linux Style Icon */}
        <div className="relative z-10 flex items-center justify-center">
          {isOpen ? (
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          ) : (
            <div className="relative">
              <Terminal className="w-6 h-6 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-navy-deep" />
            </div>
          )}
        </div>

        {/* Hover Tooltip if closed */}
        {!isOpen && (
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-navy-deep text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700">
            Hỗ trợ tư vấn TN Flash
          </span>
        )}
      </button>

    </aside>
  );
};
