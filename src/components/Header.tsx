import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        scrolled 
          ? 'bg-[#F4F5F8]/95 backdrop-blur-md shadow-xs border-[rgba(14,22,38,0.12)]' 
          : 'bg-[#F4F5F8]/90 backdrop-blur-xs border-[rgba(14,22,38,0.08)]'
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 h-[76px] flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          id="brand-logo"
          className="flex items-center gap-2.5 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span 
            className="w-[11px] h-[11px] bg-[#FFB238] transition-transform duration-200 group-hover:scale-125"
            aria-hidden="true" 
          />
          <span className="font-['Space_Grotesk'] font-bold text-[19px] tracking-tight text-[#0E1626]">
            DigitalBoostLab
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#141B2B]" aria-label="Main Navigation">
          <a 
            href="#services" 
            className="relative py-1 transition-colors hover:text-[#0E1626] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-[#FFB238] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
          >
            Services
          </a>
          <a 
            href="#work" 
            className="relative py-1 transition-colors hover:text-[#0E1626] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-[#FFB238] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
          >
            Work
          </a>
          <a 
            href="#process" 
            className="relative py-1 transition-colors hover:text-[#0E1626] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-[#FFB238] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
          >
            Process
          </a>
          <a 
            href="#pricing" 
            className="relative py-1 transition-colors hover:text-[#0E1626] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-[#FFB238] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            className="relative py-1 transition-colors hover:text-[#0E1626] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-[#FFB238] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
          >
            Contact
          </a>

          <a 
            href="#contact" 
            id="nav-cta-btn"
            className="btn-primary ml-2 group"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          id="mobile-menu-btn"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#0E1626] hover:text-[#FFB238] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-panel"
          className="md:hidden border-b border-[rgba(14,22,38,0.12)] bg-[#F4F5F8] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-3 font-medium text-[16px] text-[#141B2B]">
            <a 
              href="#services" 
              onClick={closeMenu}
              className="py-2 border-b border-[rgba(14,22,38,0.06)] hover:text-[#FFB238] transition-colors"
            >
              Services
            </a>
            <a 
              href="#work" 
              onClick={closeMenu}
              className="py-2 border-b border-[rgba(14,22,38,0.06)] hover:text-[#FFB238] transition-colors"
            >
              Work
            </a>
            <a 
              href="#process" 
              onClick={closeMenu}
              className="py-2 border-b border-[rgba(14,22,38,0.06)] hover:text-[#FFB238] transition-colors"
            >
              Process
            </a>
            <a 
              href="#pricing" 
              onClick={closeMenu}
              className="py-2 border-b border-[rgba(14,22,38,0.06)] hover:text-[#FFB238] transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="py-2 border-b border-[rgba(14,22,38,0.06)] hover:text-[#FFB238] transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="pt-2">
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="btn-primary w-full text-center"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
