import React from 'react';
import { WHY_US } from '../data';

export const WhyUs: React.FC = () => {
  return (
    <section id="why" className="py-20 md:py-24 bg-[#0E1626] text-[#E9EDF5]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-['Space_Grotesk'] text-[12px] font-semibold text-[#5EEAD4] tracking-widest uppercase mb-2 block">
              OUR ADVANTAGE
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#E9EDF5] leading-tight max-w-[22ch]">
              Why teams build with us.
            </h2>
          </div>
          <p className="max-w-[42ch] text-[15px] sm:text-[15.5px] leading-[1.6] text-[#9AA6BC]">
            We keep engagements small and senior, so nothing gets lost between the brief and the build.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[rgba(230,235,245,0.14)]">
          {WHY_US.map((item, idx) => (
            <div
              key={idx}
              id={`why-card-${idx}`}
              className="bg-[#0E1626] p-7 sm:p-8 panel-schematic-ink transition-colors duration-200 hover:bg-[#131E35]"
            >
              <span className="font-['Space_Grotesk'] text-[12.5px] font-semibold text-[#5EEAD4] tracking-wide block">
                {item.tag}
              </span>

              <h3 className="mt-3.5 text-[18px] font-bold text-[#E9EDF5] leading-snug">
                {item.title}
              </h3>

              <p className="mt-2.5 text-[14px] leading-[1.6] text-[#9AA6BC]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
