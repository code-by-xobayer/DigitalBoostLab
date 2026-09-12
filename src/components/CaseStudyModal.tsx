import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Globe, Palette, Smartphone, Award } from 'lucide-react';
import { WorkProject } from '../types';

interface CaseStudyModalProps {
  project: WorkProject | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0E1626]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div 
        className="bg-white max-w-2xl w-full panel-schematic max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 text-[#5B6478] hover:text-[#0E1626] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex items-center gap-3">
          <span className="font-['Space_Grotesk'] text-[12px] font-bold text-[#FFB238] border border-[#FFB238] px-2 py-0.5 tracking-wider uppercase">
            {project.categoryLabel}
          </span>
          <span className="text-xs font-mono text-[#5B6478]">
            {project.client} • {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 id="case-study-title" className="text-2xl sm:text-3xl font-bold text-[#0E1626] mt-3 font-['Space_Grotesk']">
          {project.title}
        </h3>

        {/* Impact metric highlight banner */}
        <div className="mt-4 p-3.5 bg-[#F4F5F8] border border-[rgba(14,22,38,0.1)] flex items-center gap-2.5">
          <Award className="w-4 h-4 text-[#0E1626]" />
          <span className="text-sm font-semibold text-[#0E1626]">
            Key Metric: <span className="font-normal text-[#5B6478]">{project.impactMetric}</span>
          </span>
        </div>

        {/* Story */}
        <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-[#141B2B]">
          <h4 className="font-['Space_Grotesk'] font-bold text-sm uppercase text-[#5B6478] tracking-wider">
            Case Overview
          </h4>
          <p>{project.fullStory}</p>
        </div>

        {/* Key Deliverables */}
        <div className="mt-6 pt-6 border-t border-[rgba(14,22,38,0.1)]">
          <h4 className="font-['Space_Grotesk'] font-bold text-sm uppercase text-[#5B6478] tracking-wider mb-3">
            Engineered Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[13.5px] text-[#141B2B]">
                <CheckCircle2 className="w-4 h-4 text-[#FFB238] shrink-0" />
                <span>{item}</span>
              </div>
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
            Close preview
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onInquire(`Inquiry regarding project similar to ${project.title}`);
            }}
            className="btn-primary text-xs w-full sm:w-auto group"
          >
            <span>Discuss a similar build</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </div>
  );
};
