import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-[#F4F5F8] border-t border-[rgba(14,22,38,0.08)]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        
        {/* Section Head */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-['Space_Grotesk'] text-[12px] font-semibold text-[#FFB238] tracking-widest uppercase mb-2 block">
              CLIENT EXPERIENCES
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#0E1626] leading-tight max-w-[20ch]">
              What clients say.
            </h2>
          </div>
          <p className="max-w-[42ch] text-[15px] sm:text-[15.5px] leading-[1.6] text-[#5B6478]">
            A few notes from teams we've recently shipped projects for.
          </p>
        </div>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              id={`testimonial-card-${testi.id}`}
              className="panel-schematic p-7 sm:p-8 flex flex-col justify-between bg-white"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#FFB238]" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-5 text-[15px] leading-[1.65] text-[#141B2B]">
                  "{testi.quote}"
                </blockquote>
              </div>

              {/* Author & Role */}
              <div className="mt-6 pt-4 border-t border-[rgba(14,22,38,0.1)] flex items-center justify-between">
                <div>
                  <div className="font-['Space_Grotesk'] font-bold text-[14.5px] text-[#0E1626]">
                    {testi.author}
                  </div>
                  <div className="text-[13px] text-[#5B6478] mt-0.5">
                    {testi.role}, {testi.company}
                  </div>
                </div>

                {testi.metric && (
                  <span className="text-[11px] font-mono text-[#0E1626] font-semibold bg-[#F4F5F8] px-2 py-0.5 border border-[rgba(14,22,38,0.1)]">
                    {testi.metric}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
