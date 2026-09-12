import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PRICING_PLANS } from '../data';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-[#F4F5F8]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        
        {/* Section Head */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-['Space_Grotesk'] text-[12px] font-semibold text-[#FFB238] tracking-widest uppercase mb-2 block">
              INVESTMENT
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#0E1626] leading-tight max-w-[20ch]">
              Pricing.
            </h2>
          </div>
          <p className="max-w-[42ch] text-[15px] sm:text-[15.5px] leading-[1.6] text-[#5B6478]">
            Starting points for the most common projects. Every quote is fixed-scope before work begins.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2px] bg-[rgba(230,235,245,0.14)]">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.isFeatured;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`p-8 sm:p-9 flex flex-col justify-between transition-colors duration-200 relative ${
                  isFeatured 
                    ? 'bg-[#182545] border-t-2 border-[#FFB238]' 
                    : 'bg-[#0E1626]'
                }`}
              >
                {/* Popular badge */}
                {isFeatured && (
                  <div className="absolute top-4 right-4 bg-[#FFB238] text-[#0E1626] font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5">
                    Most Popular
                  </div>
                )}

                <div>
                  <span className="font-['Space_Grotesk'] text-[13px] font-bold text-[#5EEAD4] tracking-wider block">
                    {plan.name}
                  </span>

                  <div className="mt-3.5 flex items-baseline gap-1.5 font-['Space_Grotesk'] text-[36px] font-bold text-[#E9EDF5]">
                    {plan.price}
                    <span className="text-[14px] text-[#9AA6BC] font-sans font-normal">
                      /{plan.cadence}
                    </span>
                  </div>

                  <p className="mt-2.5 text-[13.5px] text-[#9AA6BC] leading-[1.55]">
                    {plan.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[rgba(230,235,245,0.1)] text-[12px] text-[#9AA6BC]">
                    <span className="text-[#5EEAD4] font-semibold">Best for:</span> {plan.recommendedFor}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-[13.5px] text-[#E9EDF5] flex items-start gap-2.5">
                        <span className="text-[#5EEAD4] font-bold select-none mt-0.5">—</span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    id={`plan-btn-${plan.id}`}
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full group cursor-pointer ${
                      isFeatured ? 'btn-amber' : 'btn-ghost-ink'
                    }`}
                  >
                    <span>Get this plan</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
