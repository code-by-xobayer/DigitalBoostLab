import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface CtaBannerProps {
  onConsultClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onConsultClick }) => {
  return (
    <div className="bg-[#FFB238] py-14 sm:py-16 text-[#0E1626] border-y border-[rgba(14,22,38,0.1)]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase mb-2 text-[#0E1626]/80">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Access to Senior Engineers
          </div>
          <h2 className="text-[26px] sm:text-[34px] lg:text-[36px] font-bold text-[#0E1626] leading-tight max-w-[18ch]">
            Ready to boost your digital presence?
          </h2>
        </div>

        <div>
          <button
            type="button"
            id="cta-banner-btn"
            onClick={onConsultClick}
            className="btn-primary bg-[#0E1626] text-white border-[#0E1626] hover:bg-transparent hover:text-[#0E1626] group px-7 py-3.5 text-[15px]"
          >
            <span>Book a free consult</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
