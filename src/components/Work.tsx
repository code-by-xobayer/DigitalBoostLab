import React, { useState } from 'react';
import { ArrowUpRight, Smartphone, Globe, Palette } from 'lucide-react';
import { WorkProject } from '../types';
import { WORK_PROJECTS } from '../data';

interface WorkProps {
  onSelectProject: (project: WorkProject) => void;
}

export const Work: React.FC<WorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'branding' | 'app'>('all');

  const filteredProjects = WORK_PROJECTS.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="work" className="py-20 md:py-24 bg-[#F4F5F8]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-['Space_Grotesk'] text-[12px] font-semibold text-[#FFB238] tracking-widest uppercase mb-2 block">
              PORTFOLIO
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#0E1626] leading-tight max-w-[20ch]">
              Recent work.
            </h2>
          </div>
          <p className="max-w-[42ch] text-[15px] sm:text-[15.5px] leading-[1.6] text-[#5B6478]">
            A sample of websites, brand systems, and apps we've shipped for clients across retail, hospitality, and services.
          </p>
        </div>

        {/* Filter Pills */}
        <div 
          className="flex gap-2.5 mb-10 flex-wrap" 
          role="tablist" 
          aria-label="Filter work by category"
        >
          {(['all', 'web', 'branding', 'app'] as const).map((cat) => {
            const labels: Record<string, string> = {
              all: 'All Projects',
              web: 'Web Development',
              branding: 'Branding Systems',
              app: 'Android Apps'
            };
            const isActive = activeFilter === cat;

            return (
              <button
                key={cat}
                type="button"
                id={`filter-btn-${cat}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(cat)}
                className={`font-['Space_Grotesk'] text-[13.5px] font-semibold px-4 py-2 border transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'border-[#0E1626] bg-[#0E1626] text-white shadow-xs'
                    : 'border-[rgba(14,22,38,0.15)] bg-white/70 text-[#5B6478] hover:border-[#0E1626] hover:text-[#0E1626]'
                }`}
              >
                {labels[cat]}
              </button>
            );
          })}
        </div>

        {/* 3-Column Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" id="workGrid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`work-card-${project.id}`}
              className="panel-schematic overflow-hidden flex flex-col group cursor-pointer transition-transform duration-200 hover:-translate-y-1"
              onClick={() => onSelectProject(project)}
            >
              {/* Visual Thumbnail / Schematic Mockup */}
              <div className="h-[185px] bg-[#141F35] relative overflow-hidden flex items-center justify-center p-4 border-b border-[rgba(230,235,245,0.14)]">
                
                {/* Visual schematic representation based on project type */}
                {project.mockupType === 'browser' && (
                  <div className="w-full max-w-[280px] bg-[#0E1626] rounded-t border border-[rgba(230,235,245,0.2)] p-2 shadow-lg">
                    <div className="flex items-center gap-1.5 pb-2 border-b border-white/10">
                      <div className="w-2 h-2 rounded-full bg-red-400/80" />
                      <div className="w-2 h-2 rounded-full bg-amber-400/80" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
                      <div className="ml-2 flex-1 h-3 bg-white/10 rounded-xs text-[7px] text-white/50 px-2 flex items-center">
                        https://{project.id}.com
                      </div>
                    </div>
                    <div className="pt-2 space-y-1.5">
                      <div className="h-3 w-3/4 bg-white/20 rounded-xs" />
                      <div className="h-2 w-1/2 bg-white/10 rounded-xs" />
                      <div className="grid grid-cols-3 gap-1 pt-1">
                        <div className="h-10 bg-white/5 border border-white/10 rounded-xs flex items-center justify-center">
                          <Globe className="w-3.5 h-3.5 text-[#5EEAD4]" />
                        </div>
                        <div className="h-10 bg-white/5 border border-white/10 rounded-xs" />
                        <div className="h-10 bg-white/5 border border-white/10 rounded-xs" />
                      </div>
                    </div>
                  </div>
                )}

                {project.mockupType === 'brand-guideline' && (
                  <div className="w-full max-w-[260px] bg-[#0E1626] border border-white/15 p-3 relative shadow-lg">
                    <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                      <span className="font-['Space_Grotesk'] text-[10px] font-bold text-[#FFB238] uppercase tracking-wider">
                        {project.title.split(' ')[0]} / SPEC
                      </span>
                      <Palette className="w-3 h-3 text-[#FFB238]" />
                    </div>
                    <div className="flex gap-2 my-2.5 items-center">
                      <div className="w-9 h-9 rounded-xs bg-[#FFB238] flex items-center justify-center text-[#0E1626] font-bold font-['Space_Grotesk'] text-sm">
                        {project.title.charAt(0)}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="h-2.5 w-full bg-white/20 rounded-xs" />
                        <div className="h-2 w-2/3 bg-white/10 rounded-xs" />
                      </div>
                    </div>
                    <div className="flex gap-1.5 pt-1">
                      <div className="flex-1 h-3.5 bg-[#0E1626] border border-white/30 rounded-2xs text-[8px] text-white/70 flex items-center justify-center font-mono">0E1626</div>
                      <div className="flex-1 h-3.5 bg-[#FFB238] rounded-2xs text-[8px] text-[#0E1626] flex items-center justify-center font-mono font-bold">FFB238</div>
                      <div className="flex-1 h-3.5 bg-[#5EEAD4] rounded-2xs text-[8px] text-[#0E1626] flex items-center justify-center font-mono font-bold">5EEAD4</div>
                    </div>
                  </div>
                )}

                {project.mockupType === 'android-phone' && (
                  <div className="w-[150px] bg-[#0E1626] border border-white/20 rounded-t-xl p-2 shadow-lg relative">
                    <div className="w-8 h-1 bg-white/20 rounded-full mx-auto mb-1.5" />
                    <div className="bg-[#141F35] border border-white/10 p-2 rounded-md space-y-1.5">
                      <div className="flex justify-between items-center text-[8px] text-white/50">
                        <span>9:41</span>
                        <Smartphone className="w-2.5 h-2.5 text-[#5EEAD4]" />
                      </div>
                      <div className="h-2 w-3/4 bg-[#5EEAD4]/60 rounded-2xs" />
                      <div className="h-6 bg-white/5 border border-white/10 rounded-xs p-1 flex items-center gap-1">
                        <div className="w-4 h-4 rounded-2xs bg-[#FFB238]/40" />
                        <div className="h-1.5 w-10 bg-white/20" />
                      </div>
                      <div className="h-4 bg-white/5 border border-white/10 rounded-xs" />
                    </div>
                  </div>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#0E1626]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-white font-['Space_Grotesk'] text-sm font-semibold">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFB238]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <span className="font-['Space_Grotesk'] text-[12.5px] font-semibold text-[#FFB238] block tracking-wide">
                    {project.categoryLabel}
                  </span>
                  <h3 className="mt-2 text-[18px] font-bold text-[#0E1626] leading-snug group-hover:text-[#0E1626]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-[#5B6478] leading-[1.55]">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[rgba(14,22,38,0.08)] flex items-center justify-between text-[12px] font-mono text-[#5B6478]">
                  <span>{project.impactMetric}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0E1626] group-hover:text-[#FFB238] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
