import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budgetRange: '',
    message: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Enter your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Tell us a little about your project.';
    }
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const errs = validate();
    setErrors(errs);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setTouched({ name: true, email: true, message: true });
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      budgetRange: '',
      message: ''
    });
    setSubmitted(false);
    setTouched({});
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#0E1626] text-[#E9EDF5]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16">
          
          {/* Left: Contact Form */}
          <div>
            <div className="mb-8">
              <span className="font-['Space_Grotesk'] text-[12px] font-semibold text-[#5EEAD4] tracking-widest uppercase mb-2 block">
                GET IN TOUCH
              </span>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#E9EDF5] leading-tight">
                Tell us about your project.
              </h2>
              <p className="mt-3 text-[15px] sm:text-[15.5px] leading-[1.6] text-[#9AA6BC] max-w-[45ch]">
                Share a few details and we'll reply within one business day with a structured scoping plan and next steps.
              </p>
            </div>

            {submitted ? (
              <div 
                id="form-success-box"
                className="p-8 bg-[#141F35] border border-[#5EEAD4]/40 panel-schematic-ink text-left space-y-4 animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="flex items-center gap-3 text-[#5EEAD4]">
                  <CheckCircle2 className="w-7 h-7 shrink-0" />
                  <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#E9EDF5]">
                    Message Received
                  </h3>
                </div>
                <p className="text-[14.5px] leading-[1.6] text-[#9AA6BC]">
                  Thanks <strong className="text-white">{formData.name}</strong>. Your project brief has been logged with our senior team. We will review your specs and email you at <strong className="text-white">{formData.email}</strong> within one business day.
                </p>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="btn-ghost-ink text-xs px-4 py-2 mt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form id="contactForm" onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-[13px] font-semibold text-[#9AA6BC] font-['Space_Grotesk']">
                    Full name <span className="text-[#FFB238]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    placeholder="Jordan Lee"
                    required
                    className={`w-full bg-transparent border-b py-2.5 px-0.5 text-[15px] text-[#E9EDF5] placeholder-[#5B6478] focus:outline-none transition-colors ${
                      errors.name && touched.name
                        ? 'border-[#FFB238] focus:border-[#FFB238]'
                        : 'border-[rgba(230,235,245,0.18)] focus:border-[#5EEAD4]'
                    }`}
                  />
                  {errors.name && touched.name && (
                    <div className="text-[12.5px] text-[#FFB238] mt-1">
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[13px] font-semibold text-[#9AA6BC] font-['Space_Grotesk']">
                    Email address <span className="text-[#FFB238]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    placeholder="jordan@company.com"
                    required
                    className={`w-full bg-transparent border-b py-2.5 px-0.5 text-[15px] text-[#E9EDF5] placeholder-[#5B6478] focus:outline-none transition-colors ${
                      errors.email && touched.email
                        ? 'border-[#FFB238] focus:border-[#FFB238]'
                        : 'border-[rgba(230,235,245,0.18)] focus:border-[#5EEAD4]'
                    }`}
                  />
                  {errors.email && touched.email && (
                    <div className="text-[12.5px] text-[#FFB238] mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Phone field */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-[13px] font-semibold text-[#9AA6BC] font-['Space_Grotesk']">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 555 000 0000"
                    className="w-full bg-transparent border-b border-[rgba(230,235,245,0.18)] py-2.5 px-0.5 text-[15px] text-[#E9EDF5] placeholder-[#5B6478] focus:outline-none focus:border-[#5EEAD4] transition-colors"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-[13px] font-semibold text-[#9AA6BC] font-['Space_Grotesk']">
                    Service you're interested in
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#0E1626] border-b border-[rgba(230,235,245,0.18)] py-2.5 px-0.5 text-[15px] text-[#E9EDF5] focus:outline-none focus:border-[#5EEAD4] cursor-pointer"
                  >
                    <option value="" className="bg-[#0E1626] text-[#9AA6BC]">Select a service or plan</option>
                    <option value="Website design & development" className="bg-[#0E1626]">Website design &amp; development</option>
                    <option value="Digital branding" className="bg-[#0E1626]">Digital branding</option>
                    <option value="Android app development" className="bg-[#0E1626]">Android app development</option>
                    <option value="Full stack (web + brand + app)" className="bg-[#0E1626]">Full stack (web + brand + app)</option>
                    <option value="Starter Plan ($1,200)" className="bg-[#0E1626]">Starter Plan ($1,200)</option>
                    <option value="Growth Plan ($3,800)" className="bg-[#0E1626]">Growth Plan ($3,800)</option>
                    <option value="Full Stack Plan ($9,500+)" className="bg-[#0E1626]">Full Stack Plan ($9,500+)</option>
                    <option value="Not sure yet" className="bg-[#0E1626]">Not sure yet</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-[13px] font-semibold text-[#9AA6BC] font-['Space_Grotesk']">
                    Project details <span className="text-[#FFB238]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    placeholder="Tell us what you're building, target audience, and your rough timeline."
                    required
                    className={`w-full bg-transparent border-b py-2.5 px-0.5 text-[15px] text-[#E9EDF5] placeholder-[#5B6478] focus:outline-none transition-colors ${
                      errors.message && touched.message
                        ? 'border-[#FFB238] focus:border-[#FFB238]'
                        : 'border-[rgba(230,235,245,0.18)] focus:border-[#5EEAD4]'
                    }`}
                  />
                  {errors.message && touched.message && (
                    <div className="text-[12.5px] text-[#FFB238] mt-1">
                      {errors.message}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="btn-amber group"
                  >
                    <span>Send message</span>
                    <Send className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Studio & Contact Info */}
          <div className="lg:border-l lg:border-[rgba(230,235,245,0.1)] lg:pl-12 flex flex-col justify-between">
            <div className="space-y-7">
              <div>
                <span className="font-['Space_Grotesk'] text-[12.5px] font-semibold text-[#9AA6BC] uppercase tracking-wider block">
                  Direct Email
                </span>
                <a 
                  href="mailto:hello@digitalboostlab.com" 
                  className="text-[16px] text-[#E9EDF5] hover:text-[#5EEAD4] transition-colors mt-1.5 flex items-center gap-2 font-medium"
                >
                  <Mail className="w-4 h-4 text-[#FFB238]" />
                  hello@digitalboostlab.com
                </a>
              </div>

              <div>
                <span className="font-['Space_Grotesk'] text-[12.5px] font-semibold text-[#9AA6BC] uppercase tracking-wider block">
                  Studio Phone
                </span>
                <a 
                  href="tel:+15550001234" 
                  className="text-[16px] text-[#E9EDF5] hover:text-[#5EEAD4] transition-colors mt-1.5 flex items-center gap-2 font-medium"
                >
                  <Phone className="w-4 h-4 text-[#FFB238]" />
                  +1 (555) 000-1234
                </a>
              </div>

              <div>
                <span className="font-['Space_Grotesk'] text-[12.5px] font-semibold text-[#9AA6BC] uppercase tracking-wider block">
                  Physical Studio
                </span>
                <div className="text-[15px] text-[#E9EDF5] mt-1.5 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#FFB238] shrink-0 mt-1" />
                  <span>
                    142 Foundry Street, Suite 4B<br />
                    Portland, OR 97209
                  </span>
                </div>
              </div>

              <div>
                <span className="font-['Space_Grotesk'] text-[12.5px] font-semibold text-[#9AA6BC] uppercase tracking-wider block">
                  Operating Hours
                </span>
                <div className="text-[15px] text-[#E9EDF5] mt-1.5 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FFB238]" />
                  Mon–Fri, 9am–6pm PT
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-[rgba(230,235,245,0.1)]">
                <span className="font-['Space_Grotesk'] text-[12px] font-semibold text-[#9AA6BC] uppercase tracking-wider block mb-3">
                  Follow the lab
                </span>
                <div className="flex gap-2.5">
                  <a 
                    href="#" 
                    aria-label="DigitalBoostLab on LinkedIn" 
                    className="w-9 h-9 border border-[rgba(230,235,245,0.15)] flex items-center justify-center font-['Space_Grotesk'] text-xs font-bold text-[#E9EDF5] hover:border-[#5EEAD4] hover:text-[#5EEAD4] transition-colors"
                  >
                    in
                  </a>
                  <a 
                    href="#" 
                    aria-label="DigitalBoostLab on Instagram" 
                    className="w-9 h-9 border border-[rgba(230,235,245,0.15)] flex items-center justify-center font-['Space_Grotesk'] text-xs font-bold text-[#E9EDF5] hover:border-[#5EEAD4] hover:text-[#5EEAD4] transition-colors"
                  >
                    ig
                  </a>
                  <a 
                    href="#" 
                    aria-label="DigitalBoostLab on X" 
                    className="w-9 h-9 border border-[rgba(230,235,245,0.15)] flex items-center justify-center font-['Space_Grotesk'] text-xs font-bold text-[#E9EDF5] hover:border-[#5EEAD4] hover:text-[#5EEAD4] transition-colors"
                  >
                    x
                  </a>
                </div>
              </div>
            </div>

            {/* Quick response commitment notice */}
            <div className="mt-8 p-4 bg-[#141F35] border border-[rgba(230,235,245,0.08)] text-[12px] text-[#9AA6BC] font-mono">
              GUARANTEE: No spam. Direct response from a founding engineer within 24 business hours.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
