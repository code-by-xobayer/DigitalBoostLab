import React, { useState } from 'react';
import { Check, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { PROCESS_STAGES } from '../data';

export const Process: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleStep = (step: number) => {
    setExpandedStep(expandedStep === step ? null : step);
  };

  return (
    <section id="process" className="py-20 md:py-24 bg-[#0E1626] text-[#E9EDF5]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-['Space_Grotesk'] text-[12px] font-semibold text-[#5EEAD4] tracking-widest uppercase mb-2 block">
              METHODOLOGY
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#E9EDF5] leading-tight max-w-[20ch]">
              How a project runs.
            </h2>
          </div>
          <p className="max-w-[42ch] text-[15px] sm:text-[15.5px] leading-[1.6] text-[#9AA6BC]">
            The same five stages, whether we're building a website, a brand, or an app — so you always know what's next.
          </p>
        </div>

        {/* 5 Steps Linear Grid */}
        <div className="relative">
          {/* Connecting Line across desktop steps */}
          <div 
            className="hidden lg:block absolute left-0 right-0 top-[11px] h-[1px] bg-[rgba(230,235,245,0.18)] z-0" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5 relative z-10">
            {PROCESS_STAGES.map((stage) => {
              const isExpanded = expandedStep === stage.step;

              return (
                <div 
                  key={stage.step}
                  id={`process-step-${stage.step}`}
                  className="flex flex-col"
                >
                  {/* Step Dot & Number */}
                  <div className="flex items-center gap-3 lg:block mb-4">
                    <div className="w-[24px] h-[24px] border-[1.5px] border-[#E9EDF5] bg-[#0E1626] flex items-center justify-center font-['Space_Grotesk'] text-[11px] font-bold text-[#FFB238] shadow-xs">
                      {stage.step}
                    </div>
                    <span className="lg:hidden text-xs font-mono text-[#5EEAD4]">
                      {stage.duration}
                    </span>
                  </div>

                  {/* Title & Timing */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-[17px] font-bold text-[#E9EDF5] leading-snug">
                      {stage.title}
                    </h3>
                    <span className="hidden lg:inline text-[11px] font-mono text-[#5EEAD4]">
                      {stage.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[#9AA6BC]">
                    {stage.summary}
                  </p>

                  {/* Accordion Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleStep(stage.step)}
                    className="mt-4 pt-2.5 border-t border-[rgba(230,235,245,0.12)] flex items-center justify-between text-[12px] font-['Space_Grotesk'] text-[#5EEAD4] hover:text-[#FFB238] transition-colors cursor-pointer text-left"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide phase details' : 'Phase deliverables'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Expanded Breakdown */}
                  {isExpanded && (
                    <ul className="mt-3 p-3 bg-[#141F35] border border-[rgba(230,235,245,0.1)] space-y-2 text-[12px] text-[#E9EDF5] animate-in fade-in duration-200">
                      {stage.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-[#5EEAD4] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
