import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#0E1626] border-t border-[rgba(230,235,245,0.14)] text-[#E9EDF5] pt-16 pb-8">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 pb-12 border-b border-[rgba(230,235,245,0.1)]">
          
          {/* Col 1: About */}
          <div className="space-y-4">
            <a 
              href="#" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2.5 font-['Space_Grotesk'] font-bold text-[19px] text-[#E9EDF5]"
            >
              <span className="w-[11px] h-[11px] bg-[#FFB238]" aria-hidden="true" />
              DigitalBoostLab
            </a>
            <p className="text-[14px] leading-[1.65] text-[#9AA6BC] max-w-[32ch]">
              A small studio building websites, brands, and Android apps for businesses that want their online presence to do real work.
            </p>
            <div className="text-[12px] font-mono text-[#5EEAD4]">
              PORTLAND, OR — ENGINEERING & DESIGN
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-[13px] font-bold text-[#9AA6BC] uppercase tracking-wider mb-4">
              Quick links
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#E9EDF5]">
              <li>
                <a href="#services" className="hover:text-[#5EEAD4] transition-colors">Services</a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#5EEAD4] transition-colors">Work</a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#5EEAD4] transition-colors">Process</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#5EEAD4] transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#5EEAD4] transition-colors">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-[13px] font-bold text-[#9AA6BC] uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#E9EDF5]">
              <li>
                <a href="#services" className="hover:text-[#5EEAD4] transition-colors">Website design &amp; dev</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#5EEAD4] transition-colors">Digital branding</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#5EEAD4] transition-colors">Android app development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#5EEAD4] transition-colors">Growth &amp; SEO audits</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-[13px] font-bold text-[#9AA6BC] uppercase tracking-wider mb-2">
              Stay in touch
            </h4>
            <p className="text-[13.5px] text-[#9AA6BC] mb-4 leading-relaxed">
              One email a month, notes on web and app trends worth knowing. No marketing noise.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#141F35] border border-[#5EEAD4]/30 text-xs text-[#5EEAD4] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#5EEAD4]" />
                <span>Subscribed! Welcome to the monthly briefing.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex border border-[rgba(230,235,245,0.18)] focus-within:border-[#5EEAD4] transition-colors">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  aria-label="Email for newsletter subscription"
                  className="bg-transparent text-sm py-2.5 px-3 text-[#E9EDF5] placeholder-[#5B6478] focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-[#5EEAD4] text-[#0E1626] font-['Space_Grotesk'] font-bold text-[13px] px-4 py-2.5 hover:bg-[#FFB238] transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#9AA6BC]">
          <div>
            © 2026 DigitalBoostLab. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>digitalboostlab.com</span>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Privacy & Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
