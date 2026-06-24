import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      {/* Call To Action Banner */}
      <div className="footer-cta">
        <div className="container">
          <h2>Learn, practice, and succeed with zero reliance on external tips</h2>
          <Link to="/contact" className="btn btn-secondary">
            Contact Now & Master the Markets
          </Link>
        </div>
      </div>

      {/* Main Footer Details */}
      <div className="main-footer">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-col">
              <h3>Profit and Stocks</h3>
              <p style={{ marginTop: '16px', lineHeight: '1.7', fontSize: '15px' }}>
                Profit and Stocks, led by SEBI/NISM Certified Analyst Mr. S. Kumar, 
                is an exceptional team of market traders with 12+ years of combined expertise, 
                dedicated to providing the right approach, training, and guidance to struggling 
                traders and investors.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul style={{ marginTop: '16px' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Contact Information Column */}
            <div className="footer-col">
              <h3>Contact Information</h3>
              <ul className="footer-contact-info" style={{ marginTop: '16px' }}>
                <li>
                  <Phone size={18} />
                  <a href="tel:+919560531632" style={{ color: 'inherit' }}>+91 9560531632</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:info@profitandstocks.com" style={{ color: 'inherit' }}>info@profitandstocks.com</a>
                </li>
                <li>
                  <MapPin size={24} style={{ flexShrink: 0 }} />
                  <span>2006, SVH Metro Street, Sector 83, Gurgaon. Haryana 122004</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="footer-bottom">
            <p>
              Copyright © 2025 Profit and Stocks.. All Rights Reserved | Made With{' '}
              <Heart 
                size={14} 
                fill="#ef4444" 
                color="#ef4444" 
                style={{ display: 'inline-block', verticalAlign: '-1px', margin: '0 4px' }} 
                aria-hidden="true" 
              />{' '}
              by Zerfinity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
