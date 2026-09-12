import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  const [activeNode, setActiveNode] = useState<'none' | 'web' | 'brand' | 'app' | 'lab'>('none');

  return (
    <section className="pt-16 pb-20 md:pt-22 md:pb-24 bg-[#F4F5F8] border-b border-[rgba(14,22,38,0.08)]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          
          {/* Hero Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 font-['Space_Grotesk'] text-[12.5px] font-semibold tracking-wider uppercase px-2.5 py-1 border border-[#0E1626]/20 text-[#0E1626] mb-6 bg-white/60">
              <span className="w-1.5 h-1.5 bg-[#FFB238] rounded-full animate-ping" />
              Full-Lifecycle Digital Engineering
            </div>

            <h1 className="text-[38px] sm:text-[48px] lg:text-[60px] font-bold text-[#0E1626] leading-[1.06] tracking-[-0.02em]">
              We engineer digital growth systems.
            </h1>

            <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-[#5B6478] max-w-[48ch]">
              DigitalBoostLab designs websites, builds digital brands, and ships Android apps for businesses that need their online presence to actually convert — not just look nice.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                type="button"
                id="hero-start-btn"
                onClick={onStartProject}
                className="btn-primary group"
              >
                <span>Start your project</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                id="hero-work-btn"
                onClick={onExploreWork}
                className="btn-ghost"
              >
                See the work
              </button>
            </div>

            {/* Metrics */}
            <div className="mt-12 pt-8 border-t border-[rgba(14,22,38,0.12)] flex flex-wrap gap-8 sm:gap-12">
              <div>
                <strong className="block font-['Space_Grotesk'] text-[28px] sm:text-[32px] text-[#0E1626] font-semibold leading-none">
                  60+
                </strong>
                <span className="text-[13.5px] text-[#5B6478] mt-1.5 block">
                  projects shipped
                </span>
              </div>

              <div>
                <strong className="block font-['Space_Grotesk'] text-[28px] sm:text-[32px] text-[#0E1626] font-semibold leading-none">
                  4.9/5
                </strong>
                <span className="text-[13.5px] text-[#5B6478] mt-1.5 block">
                  average client rating
                </span>
              </div>

              <div>
                <strong className="block font-['Space_Grotesk'] text-[28px] sm:text-[32px] text-[#0E1626] font-semibold leading-none">
                  3
                </strong>
                <span className="text-[13.5px] text-[#5B6478] mt-1.5 block">
                  disciplines under one roof
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right: Schematic Vector Diagram */}
          <div className="flex justify-center">
            <div 
              id="hero-schematic-box"
              className="relative w-full max-w-[400px] aspect-square panel-schematic p-4 bg-white/70 shadow-xs select-none"
            >
              {/* Corner label */}
              <div className="absolute top-2.5 right-3 text-[11px] font-['Space_Grotesk'] text-[#5B6478] tracking-wider uppercase">
                System Diagram v2.4
              </div>

              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full"
                aria-label="DigitalBoostLab architectural schematic diagram showing Web, Brand, and App disciplines coordinated through the central Lab"
              >
                {/* Connecting Grid Lines */}
                <line x1="200" y1="200" x2="90" y2="90" stroke="#0E1626" strokeWidth="1.2" opacity="0.35" strokeDasharray="3 3"/>
                <line x1="200" y1="200" x2="320" y2="95" stroke="#0E1626" strokeWidth="1.2" opacity="0.35" strokeDasharray="3 3"/>
                <line x1="200" y1="200" x2="200" y2="330" stroke="#0E1626" strokeWidth="1.2" opacity="0.35" strokeDasharray="3 3"/>
                
                <line x1="90" y1="90" x2="320" y2="95" stroke="#0E1626" strokeWidth="1" opacity="0.2"/>
                <line x1="320" y1="95" x2="200" y2="330" stroke="#0E1626" strokeWidth="1" opacity="0.2"/>
                <line x1="200" y1="330" x2="90" y2="90" stroke="#0E1626" strokeWidth="1" opacity="0.2"/>

                {/* Radar rings from center */}
                <circle cx="200" cy="200" r="70" fill="none" stroke="#0E1626" strokeWidth="0.75" opacity="0.12" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="#0E1626" strokeWidth="0.75" opacity="0.08" />

                {/* Central LAB Node */}
                <g 
                  className="cursor-pointer transition-transform duration-200 hover:scale-105"
                  onMouseEnter={() => setActiveNode('lab')}
                  onMouseLeave={() => setActiveNode('none')}
                >
                  <circle cx="200" cy="200" r="34" fill="#0E1626" />
                  <circle cx="200" cy="200" r="38" fill="none" stroke="#FFB238" strokeWidth="1.5" opacity={activeNode === 'lab' ? 1 : 0.4} />
                  <text 
                    x="200" 
                    y="204" 
                    textAnchor="middle" 
                    fill="#F4F5F8" 
                    fontFamily="Space Grotesk, sans-serif" 
                    fontSize="12" 
                    fontWeight="700" 
                    letterSpacing="0.05em"
                  >
                    LAB
                  </text>
                  <text 
                    x="200" 
                    y="218" 
                    textAnchor="middle" 
                    fill="#5EEAD4" 
                    fontFamily="Inter, sans-serif" 
                    fontSize="7" 
                    fontWeight="600"
                  >
                    CORE
                  </text>
                </g>

                {/* WEB Node */}
                <g 
                  className="cursor-pointer transition-transform duration-200 hover:scale-105"
                  onMouseEnter={() => setActiveNode('web')}
                  onMouseLeave={() => setActiveNode('none')}
                >
                  <rect 
                    x="56" 
                    y="62" 
                    width="68" 
                    height="54" 
                    fill={activeNode === 'web' ? '#0E1626' : '#FFFFFF'} 
                    stroke="#0E1626" 
                    strokeWidth="1.2"
                  />
                  <text 
                    x="90" 
                    y="86" 
                    textAnchor="middle" 
                    fill={activeNode === 'web' ? '#FFFFFF' : '#0E1626'} 
                    fontFamily="Space Grotesk, sans-serif" 
                    fontSize="12" 
                    fontWeight="700"
                  >
                    WEB
                  </text>
                  <text 
                    x="90" 
                    y="102" 
                    textAnchor="middle" 
                    fill={activeNode === 'web' ? '#9AA6BC' : '#5B6478'} 
                    fontFamily="Inter, sans-serif" 
                    fontSize="8.5"
                  >
                    design + dev
                  </text>
                  <circle cx="90" cy="90" r="3.5" fill="#FFB238" />
                </g>

                {/* BRAND Node */}
                <g 
                  className="cursor-pointer transition-transform duration-200 hover:scale-105"
                  onMouseEnter={() => setActiveNode('brand')}
                  onMouseLeave={() => setActiveNode('none')}
                >
                  <rect 
                    x="286" 
                    y="67" 
                    width="68" 
                    height="54" 
                    fill={activeNode === 'brand' ? '#0E1626' : '#FFFFFF'} 
                    stroke="#0E1626" 
                    strokeWidth="1.2"
                  />
                  <text 
                    x="320" 
                    y="91" 
                    textAnchor="middle" 
                    fill={activeNode === 'brand' ? '#FFFFFF' : '#0E1626'} 
                    fontFamily="Space Grotesk, sans-serif" 
                    fontSize="12" 
                    fontWeight="700"
                  >
                    BRAND
                  </text>
                  <text 
                    x="320" 
                    y="107" 
                    textAnchor="middle" 
                    fill={activeNode === 'brand' ? '#9AA6BC' : '#5B6478'} 
                    fontFamily="Inter, sans-serif" 
                    fontSize="8.5"
                  >
                    identity
                  </text>
                  <circle cx="320" cy="95" r="3.5" fill="#FFB238" />
                </g>

                {/* APP Node */}
                <g 
                  className="cursor-pointer transition-transform duration-200 hover:scale-105"
                  onMouseEnter={() => setActiveNode('app')}
                  onMouseLeave={() => setActiveNode('none')}
                >
                  <rect 
                    x="166" 
                    y="302" 
                    width="68" 
                    height="54" 
                    fill={activeNode === 'app' ? '#0E1626' : '#FFFFFF'} 
                    stroke="#0E1626" 
                    strokeWidth="1.2"
                  />
                  <text 
                    x="200" 
                    y="326" 
                    textAnchor="middle" 
                    fill={activeNode === 'app' ? '#FFFFFF' : '#0E1626'} 
                    fontFamily="Space Grotesk, sans-serif" 
                    fontSize="12" 
                    fontWeight="700"
                  >
                    APP
                  </text>
                  <text 
                    x="200" 
                    y="342" 
                    textAnchor="middle" 
                    fill={activeNode === 'app' ? '#9AA6BC' : '#5B6478'} 
                    fontFamily="Inter, sans-serif" 
                    fontSize="8.5"
                  >
                    android
                  </text>
                  <circle cx="200" cy="330" r="3.5" fill="#FFB238" />
                </g>
              </svg>

              {/* Schematic Status Bar */}
              <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#5B6478] pt-2 border-t border-[rgba(14,22,38,0.08)]">
                <span>STATUS: OPERATIONAL</span>
                <span className="text-[#0E1626] font-semibold">
                  {activeNode === 'web' && 'SECTOR: WEB FRONTEND'}
                  {activeNode === 'brand' && 'SECTOR: BRAND SYSTEM'}
                  {activeNode === 'app' && 'SECTOR: MOBILE NATIVE'}
                  {activeNode === 'lab' && 'ENGINE: UNIFIED CORE'}
                  {activeNode === 'none' && 'COORD: 3 IN 1'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
