import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Check, CreditCard, Upload } from 'lucide-react';

export default function EnrollNow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'financial-market-basic-course',
    receipt: null as File | null,
    termsAccepted: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, receipt: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.termsAccepted) {
      setError('Please fill in all required fields and accept terms.');
      return;
    }
    if (!formData.receipt) {
      setError('Please upload your transaction/payment confirmation screenshot.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const COURSES = [
    { slug: 'financial-market-basic-course', name: 'Financial Market Basic Course' },
    { slug: 'pro-trader-course-from-confusion-to-clarity', name: 'Pro Trader Course-From Confusion to Clarity' },
    { slug: 'pro-trader-course-option-specific', name: 'Pro Trader Course- Option specific' },
    { slug: 'comprehensive-course', name: 'Pro Trader Course-Comprehensive Course' },
    { slug: 'mentorship', name: 'Mentorship-one to one' },
    { slug: 'nism-certification-program', name: 'NISM/SEBI certification course' },
    { slug: 'advisory-services', name: 'Advisory services' },
    { slug: 'market-basic-course', name: 'Basic Finance for Youngs' }
  ];

  return (
    <main id="main-content">
      {/* Page Hero Breadcrumb */}
      <section className="page-hero" aria-label="Enrollment Breadcrumbs">
        <div className="container">
          <h1>Enroll & Register Now</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>&raquo;</span>
            <span aria-current="page">Enroll Now</span>
          </nav>
        </div>
      </section>

      {/* Main Content Form Section */}
      <section className="page-content" aria-label="Registration form and bank instructions">
        <div className="container">
          {isSubmitted ? (
            <div className="contact-form-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '48px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#e6f4ea', color: '#137333', display: 'flex', alignItems: 'center', justifyItems: 'center', margin: '0 auto 24px auto', justifyContent: 'center' }}>
                <Check size={36} />
              </div>
              <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Registration Received!</h2>
              <p style={{ color: 'var(--text-main)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
                Thank you for enrolling, <strong>{formData.name}</strong>. Your payment reference and registration details have been submitted. Our team will verify your receipt and reach out to you within 24 hours to confirm your batch allocation.
              </p>
              <Link to="/" className="btn btn-primary">
                Return to Homepage
              </Link>
            </div>
          ) : (
            <div className="contact-layout">
              {/* Left Column: Bank Details */}
              <div className="contact-info-section">
                <h2>1. Transfer Program Fees</h2>
                <p style={{ marginBottom: '24px', color: 'var(--text-muted)' }}>
                  Please complete the payment transfer using the bank account details below, then proceed to fill the registration form on the right.
                </p>

                <div className="contact-address-card" style={{ borderLeft: '4px solid var(--primary)' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary)' }}>
                    <CreditCard size={20} color="var(--primary)" /> Bank Account Details
                  </h3>
                  <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '15px' }}>
                    <div><strong>Account Name:</strong></div>
                    <div>MONIKA</div>
                    <div><strong>Account Number:</strong></div>
                    <div style={{ fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold' }}>387501000785</div>
                    <div><strong>Account Type:</strong></div>
                    <div>Savings Account</div>
                    <div><strong>IFSC Code:</strong></div>
                    <div style={{ fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold' }}>ICIC0003875</div>
                    <div><strong>Branch:</strong></div>
                    <div>Gurgaon – Sector 82 (ICICI Bank)</div>
                  </div>
                </div>

                <div style={{ marginTop: '32px' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Enrollment Guidelines</h3>
                  <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                    <li>Please ensure the exact fee amount is transferred matching your chosen program/course.</li>
                    <li>Double check the IFSC Code and Account number prior to confirming transaction.</li>
                    <li>Ensure you capture a clear screenshot of the final transaction showing reference ID and date.</li>
                    <li>Trainee details must match the person attending course sessions.</li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Registration Form */}
              <div>
                <div className="contact-form-card">
                  <h2>2. Fill Out Form & Upload Receipt</h2>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    Provide your correct trainee details and upload your payment confirmation receipt.
                  </p>

                  {error && (
                    <div style={{ backgroundColor: '#fce8e6', color: '#c5221f', padding: '12px 16px', borderRadius: 'var(--radius-sm)', fontSize: '14px', marginBottom: '20px', fontWeight: '500' }}>
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@domain.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="course">Select Course / Program *</label>
                      <select
                        id="course"
                        name="course"
                        className="form-control"
                        required
                        value={formData.course}
                        onChange={handleChange}
                        style={{ height: '48px', appearance: 'none', backgroundPosition: 'right 16px center' }}
                      >
                        {COURSES.map(c => (
                          <option key={c.slug} value={c.slug}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="receipt">Upload Payment Screenshot *</label>
                      <div style={{ border: '2px dashed var(--border)', borderRadius: 'var(--radius-md)', padding: '20px', textAlign: 'center', cursor: 'pointer', backgroundColor: 'var(--bg-alt)', position: 'relative' }}>
                        <input
                          type="file"
                          id="receipt"
                          name="receipt"
                          accept="image/*"
                          required
                          onChange={handleFileChange}
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                        />
                        <Upload size={24} color="var(--primary)" style={{ margin: '0 auto 8px auto' }} />
                        <span style={{ fontSize: '14px', display: 'block', color: 'var(--text-main)' }}>
                          {formData.receipt ? formData.receipt.name : 'Click or Drag to Upload Payment Receipt'}
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                          Supports JPG, PNG, JPEG images
                        </span>
                      </div>
                    </div>

                    <div className="form-group" style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginTop: '24px' }}>
                      <input
                        type="checkbox"
                        id="termsAccepted"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        required
                        style={{ marginTop: '4px' }}
                      />
                      <label htmlFor="termsAccepted" style={{ fontWeight: 'normal', fontSize: '14px', cursor: 'pointer', userSelect: 'none' }}>
                        I accept the <Link to="/terms-conditions" target="_blank" style={{ textDecoration: 'underline' }}>Terms and Conditions</Link> of Profit and Stocks.
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                      Submit Registration
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
