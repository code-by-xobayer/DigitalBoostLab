import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES } from '../data';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-24 bg-[#F4F5F8]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-['Space_Grotesk'] text-[12px] font-semibold text-[#FFB238] tracking-widest uppercase mb-2 block">
              CAPABILITIES
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#0E1626] leading-tight max-w-[22ch]">
              Four disciplines, one build process.
            </h2>
          </div>
          <p className="max-w-[42ch] text-[15px] sm:text-[15.5px] leading-[1.6] text-[#5B6478]">
            Every engagement draws on the same team, so your website, brand, and app never feel like they came from three different vendors.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[rgba(14,22,38,0.12)] border border-[rgba(14,22,38,0.12)]">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white p-7 sm:p-8 flex flex-col justify-between min-h-[320px] transition-all duration-200 hover:bg-[#FAFBFD] group cursor-pointer"
              onClick={() => onSelectService(service)}
            >
              <div>
                <span className="inline-block font-['Space_Grotesk'] text-[13px] font-semibold text-[#FFB238] border border-current px-2 py-0.5 tracking-wider">
                  {service.code}
                </span>

                <h3 className="mt-4 text-[19px] font-bold text-[#0E1626] leading-snug group-hover:text-[#0E1626] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#5B6478]">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[rgba(14,22,38,0.12)] flex items-center justify-between">
                <span className="text-[13.5px] font-semibold font-['Space_Grotesk'] text-[#0E1626] flex items-center gap-1.5 group-hover:text-[#FFB238] transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <span className="text-[12px] font-mono text-[#9AA6BC]">
                  {service.timeline}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
