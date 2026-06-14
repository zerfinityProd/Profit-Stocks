import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* Top Utility Bar */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <a href="tel:+919560531632">
              <Phone size={14} />
              <span>+91 9560531632</span>
            </a>
            <a href="mailto:info@profitandstocks.com">
              <Mail size={14} />
              <span>info@profitandstocks.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="main-header">
        <div className="container navbar">
          <Link to="/" className="logo" onClick={closeMenu} aria-label="Profit and Stocks Home">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Profit & Stocks Logo" />
          </Link>

          {/* Hamburger Menu Icon (Mobile) */}
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Nav Links (Desktop + Mobile) */}
          <nav>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>

              {/* Courses Dropdown */}
              <li className={`nav-item ${activeDropdown === 'courses' ? 'open' : ''}`}>
                <button 
                  className="nav-link" 
                  onClick={() => toggleDropdown('courses')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Our Courses <ChevronDown size={14} />
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/courses/financial-market-basic-course" onClick={closeMenu}>
                      Financial Market Basic Course
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/courses/pro-trader-course-from-confusion-to-clarity" onClick={closeMenu}>
                      Pro Trader Course (Confusion to Clarity)
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/courses/pro-trader-course-option-specific" onClick={closeMenu}>
                      Pro Trader Course (Options Specific)
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/courses/comprehensive-course" onClick={closeMenu}>
                      Comprehensive Course
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/courses/trade-with-me" onClick={closeMenu}>
                      Complete Trader Transformation (Trade With Me)
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/courses/advisory-services" onClick={closeMenu}>
                      Advisory Services
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/courses/mentorship" onClick={closeMenu}>
                      Mentorship
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/courses/nism-certification-program" onClick={closeMenu}>
                      NISM Certification Program
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Technical Analysis Dropdown */}
              <li className={`nav-item ${activeDropdown === 'ta' ? 'open' : ''}`}>
                <button 
                  className="nav-link" 
                  onClick={() => toggleDropdown('ta')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Technical Analysis <ChevronDown size={14} />
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/technical-analysis" onClick={closeMenu}>
                      Introduction
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/technical-analysis/understanding-candlesticks" onClick={closeMenu}>
                      Understanding Candlesticks
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/technical-analysis/concept-of-trend" onClick={closeMenu}>
                      Concept of Trend
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/technical-analysis/support-and-resistance" onClick={closeMenu}>
                      Support and Resistance
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/technical-analysis/chart-patterns" onClick={closeMenu}>
                      Chart Patterns
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/technical-analysis/harmonic-patterns" onClick={closeMenu}>
                      Harmonic Patterns
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/technical-analysis/technical-indicators" onClick={closeMenu}>
                      Technical Indicators
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/blogs" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMenu}
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
