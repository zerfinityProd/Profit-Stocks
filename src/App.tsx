import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import CourseDetail from './pages/CourseDetail';
import TechnicalAnalysis from './pages/TechnicalAnalysis';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import EnrollNow from './pages/EnrollNow';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      {/* Automatically scrolls page to top on routing shifts */}
      <ScrollToTop />
      
      {/* Accessible header */}
      <Header />
      
      {/* Route Switchboard */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/technical-analysis" element={<TechnicalAnalysis />} />
        <Route path="/technical-analysis/:slug" element={<TechnicalAnalysis />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/enroll-now" element={<EnrollNow />} />
        <Route path="/enroll-now/" element={<EnrollNow />} />
        
        {/* Wildcard fallback */}
        <Route path="*" element={
          <main id="main-content" style={{ padding: '80px 0', textAlign: 'center' }}>
            <div className="container">
              <h2>Page Not Found (404)</h2>
              <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>
                The link you followed may be broken or the page may have been removed.
              </p>
              <a href="/" className="btn btn-primary" style={{ marginTop: '24px' }}>
                Go back to Homepage
              </a>
            </div>
          </main>
        } />
      </Routes>
      
      {/* Global footer */}
      <Footer />
    </Router>
  );
}
