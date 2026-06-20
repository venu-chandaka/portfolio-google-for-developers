'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const contactInfo = {
    email: 'venuchandaka513@gmail.com',
    phone: '+91 8499836938',
    location: 'Thangudubilli, Vizianagaram, Andhra Pradesh, India',
    linkedin: 'https://linkedin.com/in/venu-chandaka-147n513',
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000); // reset status after 5s
    }, 1500);
  };

  return (
    <section id="contact" className="container">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-wrapper">
        {/* Info Column */}
        <div className="contact-info-panel">
          <div>
            <h3 className="contact-intro-title">Let&apos;s discuss something great</h3>
            <p className="contact-intro-desc">
              I am open to software engineering internships and junior developer roles. If you have an exciting project, an internship opportunity, or simply want to chat about AI, ML, or web development, reach out!
            </p>
          </div>

          <div className="contact-methods">
            {/* Email */}
            <div className="glass-card contact-item">
              <div className="contact-item-icon">
                <Mail size={20} />
              </div>
              <div className="contact-item-details">
                <span className="contact-item-label">Email Me</span>
                <a href={`mailto:${contactInfo.email}`} className="contact-item-value">
                  {contactInfo.email}
                </a>
              </div>
              <button 
                onClick={() => handleCopy(contactInfo.email, 'email')} 
                className="contact-copy-btn"
                title="Copy to clipboard"
              >
                {copiedField === 'email' ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone */}
            <div className="glass-card contact-item">
              <div className="contact-item-icon">
                <Phone size={20} />
              </div>
              <div className="contact-item-details">
                <span className="contact-item-label">Call / WhatsApp</span>
                <a href={`tel:${contactInfo.phone}`} className="contact-item-value">
                  {contactInfo.phone}
                </a>
              </div>
              <button 
                onClick={() => handleCopy(contactInfo.phone, 'phone')} 
                className="contact-copy-btn"
                title="Copy to clipboard"
              >
                {copiedField === 'phone' ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location */}
            <div className="glass-card contact-item">
              <div className="contact-item-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-item-details">
                <span className="contact-item-label">Location</span>
                <span className="contact-item-value">{contactInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="glass-panel contact-form-panel" style={{ padding: '2.5rem' }}>
          <h3 className="contact-intro-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Send Message</h3>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', position: 'relative', flexDirection: 'column', gap: '1.2rem' }}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration opportunity" 
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..." 
                className="form-textarea"
                required
              ></textarea>
            </div>

            {/* Status Indicators */}
            {formStatus === 'success' && (
              <div className="form-status form-status-success">
                <Check size={18} /> Thank you! Your message has been sent successfully. I will get back to you soon.
              </div>
            )}

            {formStatus === 'error' && (
              <div className="form-status form-status-error">
                Please fill in all the required fields correctly.
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={formStatus === 'submitting'}
              style={{ width: 'fit-content', marginTop: '0.5rem', alignSelf: 'flex-start' }}
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
