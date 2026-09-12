import React, { useEffect } from 'react';
import { X, Check, ArrowRight, Layers, Clock, Cpu } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectServiceForContact
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0E1626]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div 
        className="bg-white max-w-2xl w-full panel-schematic max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 text-[#5B6478] hover:text-[#0E1626] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Code Badge */}
        <div className="flex items-center gap-3">
          <span className="font-['Space_Grotesk'] text-[13px] font-bold text-[#FFB238] border border-[#FFB238] px-2.5 py-0.5 tracking-wider">
            {service.code}
          </span>
          <span className="text-xs font-mono text-[#5B6478] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            Typical turnaround: {service.timeline}
          </span>
        </div>

        {/* Title */}
        <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-bold text-[#0E1626] mt-3 font-['Space_Grotesk']">
          {service.title}
        </h3>

        {/* Detailed Description */}
        <p className="mt-4 text-[15px] leading-relaxed text-[#141B2B]">
          {service.detailedDesc}
        </p>

        {/* Deliverables */}
        <div className="mt-6 pt-6 border-t border-[rgba(14,22,38,0.1)]">
          <h4 className="font-['Space_Grotesk'] font-bold text-sm uppercase text-[#5B6478] tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#0E1626]" />
            What is Included
          </h4>
          <div className="space-y-2">
            {service.deliverables.map((del, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-[14px] text-[#141B2B]">
                <span className="text-[#FFB238] font-bold shrink-0 mt-0.5">—</span>
                <span>{del}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 pt-6 border-t border-[rgba(14,22,38,0.1)]">
          <h4 className="font-['Space_Grotesk'] font-bold text-sm uppercase text-[#5B6478] tracking-wider mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#0E1626]" />
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech, idx) => (
              <span 
                key={idx}
                className="font-mono text-xs px-2.5 py-1 bg-[#F4F5F8] border border-[rgba(14,22,38,0.1)] text-[#0E1626]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-[rgba(14,22,38,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="btn-ghost text-xs w-full sm:w-auto"
          >
            Back to overview
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectServiceForContact(service.title);
            }}
            className="btn-primary text-xs w-full sm:w-auto group"
          >
            <span>Inquire about {service.code}</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </div>
  );
};
