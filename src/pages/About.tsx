import { Link } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import pagesData from '../data/pages.json';
import { Target, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const aboutPage = pagesData.find(page => page.slug === 'about');
  
  return (
    <main id="main-content">
      {/* Breadcrumb Page Header */}
      <section className="page-hero" aria-label="About Breadcrumbs">
        <div className="container">
          <h1>About Us</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>&raquo;</span>
            <span aria-current="page">About</span>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="page-content" aria-label="Company Overview">
        <div className="container">
          <div style={{ maxWidth: '920px', margin: '0 auto' }}>
            
            {/* Custom 2D Line Art Illustration */}
            <div style={{ 
              marginBottom: '40px', 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border)',
              background: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px'
            }}>
              <img 
                src={`${import.meta.env.BASE_URL}images/about-hero-line-art.png`} 
                alt="Stock Market Trading & Investment Growth 2D Line Art Illustration" 
                style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', display: 'block', borderRadius: 'var(--radius-md)' }}
              />
            </div>

            {/* Structured Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '40px' }}>
              <div className="feature-card" style={{ padding: '24px', background: 'var(--bg-alt)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <TrendingUp size={28} color="var(--primary)" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>12+ Years Expertise</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                  Led by <strong>Mr. S. Kumar</strong>, SEBI/NISM Certified Research Analyst with over a decade of market mastery.
                </p>
              </div>

              <div className="feature-card" style={{ padding: '24px', background: 'var(--bg-alt)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <Target size={28} color="var(--primary)" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Structure & Ratio System</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                  Proven back-tested methodology empowering struggling traders into consistent market participants.
                </p>
              </div>

              <div className="feature-card" style={{ padding: '24px', background: 'var(--bg-alt)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <Award size={28} color="var(--primary)" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>SEBI Certified Guidance</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                  Professional technical analysis courses tailored for both absolute beginners and seasoned traders.
                </p>
              </div>
            </div>

            {/* Markdown rendered body */}
            {aboutPage ? (
              <MarkdownRenderer content={aboutPage.content} />
            ) : (
              <p>About content loading...</p>
            )}

          </div>
        </div>
      </section>
    </main>
  );
}
