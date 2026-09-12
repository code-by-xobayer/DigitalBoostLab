import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Work } from './components/Work';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServiceModal } from './components/ServiceModal';
import { WorkProject, ServiceItem, PricingPlan } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const [contactPreselectedService, setContactPreselectedService] = useState<string>('');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setContactPreselectedService(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    scrollToContact(`${plan.name} Plan (${plan.price})`);
  };

  return (
    <div className="min-h-screen bg-[#F4F5F8] text-[#141B2B] flex flex-col font-sans selection:bg-[#FFB238] selection:text-[#0E1626]">
      {/* Top sticky navigation */}
      <Header />

      <main className="flex-1">
        {/* Hero with schematic vector animation */}
        <Hero 
          onStartProject={() => scrollToContact()}
          onExploreWork={scrollToWork}
        />

        {/* 4 Capabilities Grid */}
        <Services 
          onSelectService={(service) => setSelectedServiceModal(service)}
        />

        {/* Ink contrast section: Why Us */}
        <WhyUs />

        {/* Filterable Portfolio Grid with Schematic Visualizations */}
        <Work 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Ink contrast section: 5-Step Process Timeline */}
        <Process />

        {/* Investment & Transparent Pricing Tiers */}
        <Pricing 
          onSelectPlan={handleSelectPlan}
        />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Amber Callout Banner */}
        <CtaBanner 
          onConsultClick={() => scrollToContact()}
        />

        {/* Contact Form & Studio Details */}
        <Contact 
          initialService={contactPreselectedService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study Detail Modal */}
      <CaseStudyModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(detail) => scrollToContact(detail)}
      />

      {/* Interactive Service Breakdown Modal */}
      <ServiceModal 
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onSelectServiceForContact={(title) => scrollToContact(title)}
      />
    </div>
  );
}
