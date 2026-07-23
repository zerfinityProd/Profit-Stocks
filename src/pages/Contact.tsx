import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main id="main-content">
      {/* Breadcrumb Page Header */}
      <section className="page-hero" aria-label="Contact Breadcrumbs">
        <div className="container">
          <h1>Contact Us</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>&raquo;</span>
            <span aria-current="page">Contact</span>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="page-content" aria-label="Contact Details and Form">
        <div className="container">
          <div className="contact-layout">
            
            {/* Left Column: Office details */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
                Have questions about our training courses or SEBI advisory services? 
                Feel free to get in touch with our team.
              </p>

              {/* Registered Office */}
              <div className="contact-address-card">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={18} color="var(--primary)" />
                  Registered Office
                </h3>
                <p style={{ marginTop: '8px', fontSize: '15px' }}>
                  Flat-706, Tower Beauty, The Seven Lamps, Sector 82, Gurgaon.
                </p>
              </div>


              {/* Contact numbers */}
              <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone color="var(--primary)" />
                  <a href="tel:+919560531632" style={{ fontWeight: '600', color: 'inherit' }}>+91 9560531632</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail color="var(--primary)" />
                  <a href="mailto:info@profitandstocks.com" style={{ fontWeight: '600', color: 'inherit' }}>info@profitandstocks.com</a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="contact-form-card">
              {submitted ? (
                <div className="fade-in" style={{ textAlign: 'center', padding: '40px 0' }}>
                  <CheckCircle size={60} color="var(--primary)" style={{ margin: '0 auto 16px auto' }} />
                  <h3>Message Sent Successfully!</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                    Thank you for contacting us. Our team will get back to you shortly.
                  </p>
                  <button 
                    className="btn btn-primary" 
                    style={{ marginTop: '24px' }} 
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>Send a Message</h2>
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span style={{ color: 'red' }}>*</span></label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      className="form-control" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address <span style={{ color: 'red' }}>*</span></label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      className="form-control" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      className="form-control" 
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message <span style={{ color: 'red' }}>*</span></label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows={5} 
                      className="form-control" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Send your message
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Maps Section */}
          <div className="maps-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '60px auto 0 auto' }}>
            <div className="map-card">
              <h4>
                <MapPin size={18} />
                Registered Office Location (Sector 82, Gurgaon)
              </h4>
              <iframe 
                title="Registered Office location map"
                src="https://maps.google.com/maps?q=%20Flat-706%2C%20Tower%20Beauty%2C%20profit%20and%20stocks%2C%20Sector%2082%2C%20Gurgaon&t=m&z=11&output=embed&iwloc=near"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
