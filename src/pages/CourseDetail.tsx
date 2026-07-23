import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, CreditCard, AlertCircle, ArrowRight } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Accordion from '../components/Accordion';
import coursesData from '../data/courses.json';
import { getCourseImage } from '../utils/courseImages';

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = coursesData.find(c => c.slug === slug);

  if (!course) {
    return (
      <main id="main-content">
        <section className="page-hero">
          <div className="container">
            <h1>Course Not Found</h1>
            <p>The requested course program does not exist or has been moved.</p>
            <Link to="/" className="btn btn-primary" style={{ marginTop: '16px' }}>
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    );
  }

  // Helper function to extract metadata from course content via Regex
  const extractMeta = (marker: string, defaultValue: string) => {
    const regex = new RegExp(`###\\s+${marker}\\s*\\n\\n([^\\n#]+)`, 'i');
    const match = course.content.match(regex);
    return match ? match[1].trim() : defaultValue;
  };

  const duration = extractMeta("Our Duration", "2-4 Weeks");
  const schedule = extractMeta("Training Schedule", "Weekend Batch");
  const paymentTerm = extractMeta("Payment Term", "Non-Negotiable");

  // Extract price
  const priceMatch = course.content.match(/(?:fee|program fee is)\s+₹\s*([0-9,/-]+)/i) || 
                     course.content.match(/INR\s*([0-9,\s*-]+)/i);
  const price = priceMatch ? `₹ ${priceMatch[1]}` : "Contact for Fee";

  // Clean up content to remove inline fee sentences, Register Now links, and metadata section from showing twice
  let cleanContent = course.content
    .replace(/(?:The program fee is|Per month fee is)\s+₹\s*[\d,/ -]+(?:\s*per\s+(?:hour|month|course))?/gi, '')
    .replace(/\[Register Now\]\([^)]+\)/gi, '')
    .replace(/What we Offer/gi, '')
    .replace(/## Key Details of[\s\S]*?(?=For Whom|$)/i, '')
    .trim();

  // Split "For Whom", "Benefits", "Why" if possible, or render them under accordions
  const extractSection = (headerName: string) => {
    const regex = new RegExp(`\\b${headerName}\\b\\s*\\n\\n([\\s\\S]*?)(?=\\b(?:Benefits|Why|###|##)\\b|$)`, 'i');
    const match = course.content.match(regex);
    return match ? match[1].trim() : null;
  };

  const forWhom = extractSection("For Whom");
  const benefits = extractSection("Benefits");
  const why = extractSection("Why");

  // Remove these sections from the clean content to prevent double display
  if (forWhom) cleanContent = cleanContent.replace(new RegExp(`For Whom\\s*\\n\\n[\\s\\S]*?(?=\\b(?:Benefits|Why|###|##)\\b|$)`, 'i'), '');
  if (benefits) cleanContent = cleanContent.replace(new RegExp(`Benefits\\s*\\n\\n[\\s\\S]*?(?=\\b(?:Why|###|##)\\b|$)`, 'i'), '');
  if (why) cleanContent = cleanContent.replace(new RegExp(`Why\\s*\\n\\n[\\s\\S]*?(?=\\b(?:###|##)\\b|$)`, 'i'), '');

  return (
    <main id="main-content">
      {/* Breadcrumb Header */}
      <section className="page-hero" aria-label="Course Breadcrumbs">
        <div className="container">
          <h1>{course.title}</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>&raquo;</span>
            <Link to="/">Our Courses</Link>
            <span>&raquo;</span>
            <span aria-current="page">{course.title}</span>
          </nav>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="page-content" aria-label="Course syllabus and pricing options">
        <div className="container">
          <div className="course-detail-layout">
            
            {/* Left Content Column */}
            <div>
              {/* Course Banner Image */}
              <div style={{ marginBottom: '24px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', maxHeight: '360px', boxShadow: 'var(--shadow-md)' }}>
                <img 
                  src={getCourseImage(course.slug)} 
                  alt={course.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Metadata Cards */}
              <div className="course-meta-cards" aria-label="Course quick details">
                <div className="course-meta-card">
                  <Clock size={24} color="var(--primary)" style={{ margin: '0 auto 8px auto' }} />
                  <h4>Duration</h4>
                  <p>{duration}</p>
                </div>
                <div className="course-meta-card">
                  <Calendar size={24} color="var(--primary)" style={{ margin: '0 auto 8px auto' }} />
                  <h4>Schedule</h4>
                  <p>{schedule}</p>
                </div>
                <div className="course-meta-card">
                  <CreditCard size={24} color="var(--primary)" style={{ margin: '0 auto 8px auto' }} />
                  <h4>Payment Term</h4>
                  <p>{paymentTerm}</p>
                </div>
              </div>

              {/* Main descriptive markdown content */}
              <MarkdownRenderer content={cleanContent} />

              {/* Syllabus Accordions (interactive and accessible) */}
              <div className="course-syllabus-section" aria-label="Additional course details">
                {forWhom && (
                  <Accordion title="Who Should Attend this Program?">
                    <MarkdownRenderer content={forWhom} />
                  </Accordion>
                )}
                {benefits && (
                  <Accordion title="What are the Benefits?">
                    <MarkdownRenderer content={benefits} />
                  </Accordion>
                )}
                {why && (
                  <Accordion title="Why Choose Us?">
                    <MarkdownRenderer content={why} />
                  </Accordion>
                )}
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div>
              <aside className="course-sidebar-card" aria-label="Purchase course information">
                <div style={{ textTransform: 'uppercase', fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', fontWeight: '600', letterSpacing: '0.05em' }}>
                  Program Fee
                </div>
                <div className="course-sidebar-price">{price}</div>
                
                <Link to="/enroll-now" className="btn btn-primary course-sidebar-btn">
                  Enroll / Register Now <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                </Link>

                <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--primary)' }} />
                    <span>SEBI / NISM Certified trainers ensure professional, high-standard curriculum.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '14px', color: 'var(--text-muted)' }}>
                    <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--primary)' }} />
                    <span>Free post-training consultation and live market practice included.</span>
                  </div>
                </div>
              </aside>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
