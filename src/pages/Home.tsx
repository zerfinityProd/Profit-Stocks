import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, TrendingUp, Users, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import coursesData from '../data/courses.json';

const MOTTO_TITLES = [
  "Giving direction Inspiring the trader",
  "Trade what you see, Not what you think",
  "Less is more in Trading",
  "Practical approach to market understanding",
  "Options are optional"
];

const TESTIMONIALS = [
  {
    name: "Alka Mehta",
    text: "It was more than worth for the money you spend on training. Learning technical analysis from “Profit and Stocks” is most interesting and fascinating thing it made it easy for me to understand really impressed with his knowledge and skills."
  },
  {
    name: "Sunil Sangwan",
    text: "As a Trainer he have Excellent Technical Expertise & Knowledge.I learned a lot of Technical things from his training and I am sure with continuous practicing it will improve my performance. Looking forward for a great association with you."
  },
  {
    name: "Dr Rohit Rathee",
    text: "Profit and Stocks is one of the best place to learn about the Technical Analysis of any market be it stocks, Future, Options, Commodity or currency. Profit and stocks, Mr. Kumar has provided me thru guidance and right approach."
  },
  {
    name: "Saurabh Sharma",
    text: "Thanks to the Sushil sir. ..Now can say that I have much clearer understandings of technical and fundamental analysis. and I feel more confident navigating the stock market. Highly recommended for anyone who is looking to improve their trading skills."
  },
  {
    name: "Shushanto Peter Mondal",
    text: "Very good training and it gave me true insight about market movement. I can trade confidently as i trade with Trade plan which tells me when to enter and when to exit. Thanks profit and stocks for this training."
  }
];

export default function Home() {
  const [activeMottoIdx, setActiveMottoIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [reviewIdx, setReviewIdx] = useState(0);

  // Rotate hero motto headings every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMottoIdx((prev) => (prev + 1) % MOTTO_TITLES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Filter courses by category
  const filteredCourses = coursesData.filter(course => {
    if (activeTab === 'all') return true;
    if (activeTab === 'basic') return course.slug.includes('basic');
    if (activeTab === 'pro') return course.slug.includes('pro') || course.slug.includes('comprehensive');
    if (activeTab === 'services') return course.slug.includes('advisory') || course.slug.includes('mentorship') || course.slug.includes('nism');
    return true;
  });

  const nextReview = () => {
    setReviewIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setReviewIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero" aria-label="Hero Banner">
        <div className="container">
          <div className="hero-content">
            <h1 className="fade-in" key={activeMottoIdx}>
              {MOTTO_TITLES[activeMottoIdx]}
            </h1>
            <p>
              Nifty, Stocks, Futures, Options, and Commodities. Learn Technical Analysis 
              from SEBI &amp; NISM certified industry experts.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">
                Learn More <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Highlights Grid */}
      <section className="section" aria-label="Core Benefits">
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <div className="card-icon" aria-hidden="true">
                <ShieldCheck />
              </div>
              <h3>SEBI Certified Mentors</h3>
              <p>Gain knowledge backed by SEBI/NISM Certified Research Analyst Mr. S. Kumar, with zero reliance on external tips.</p>
            </div>
            <div className="card">
              <div className="card-icon" aria-hidden="true">
                <Users />
              </div>
              <h3>Practice Based Training</h3>
              <p>Understanding and correcting your market approach through gap-filling techniques and review of trading records.</p>
            </div>
            <div className="card">
              <div className="card-icon" aria-hidden="true">
                <HeartHandshake />
              </div>
              <h3>Doubts Clearing</h3>
              <p>Direct query clearing and continuous review of your trade executions post-training to build real confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-alt" id="about-section" aria-label="About Profit and Stocks">
        <div className="container">
          <h2 className="section-title">About Profit and Stocks</h2>
          <div className="founder-profile">
            <div className="founder-img">
              <img 
                src={`${import.meta.env.BASE_URL}wp-content/uploads/2025/03/cropped-image-businessman-sitting-by-table-cafe-analyzing-indicators-laptop-computer_171337-5598.jpg`} 
                alt="Profit and Stocks market analysis"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600";
                }}
              />
            </div>
            <div className="founder-info">
              <h2>Profit and Stocks</h2>
              <div className="founder-tag">(SEBI/NISM Certified Research Analyst)</div>
              <p>
                <strong>Profit and Stocks</strong> is an exceptional team of market traders with over 12+ years of combined trading experience. Profitandstocks.com is a full-service trading training, education, and mentoring company managed by Mr. S. Kumar, a passionately curious and independent trader in the financial markets for the last decade.
              </p>
              <p>
                Our broad and global mission is to provide the right approach, training, and guidance to struggling traders and investors so they can learn, practice, and succeed independently without relying on tips or advisory services.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '16px' }}>
                Read Full About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section with Tabs */}
      <section className="section" id="courses" aria-label="Our Training Courses">
        <div className="container">
          <h2 className="section-title">Our Courses &amp; Programs</h2>
          
          {/* Tabs header */}
          <div className="tabs-header" role="tablist" aria-label="Course categories">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
              role="tab"
              aria-selected={activeTab === 'all'}
            >
              All Programs
            </button>
            <button 
              className={`tab-btn ${activeTab === 'basic' ? 'active' : ''}`}
              onClick={() => setActiveTab('basic')}
              role="tab"
              aria-selected={activeTab === 'basic'}
            >
              Basic Courses
            </button>
            <button 
              className={`tab-btn ${activeTab === 'pro' ? 'active' : ''}`}
              onClick={() => setActiveTab('pro')}
              role="tab"
              aria-selected={activeTab === 'pro'}
            >
              Pro / Advanced
            </button>
            <button 
              className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
              role="tab"
              aria-selected={activeTab === 'services'}
            >
              Services &amp; Exams
            </button>
          </div>

          {/* Course card grid */}
          <div className="course-grid">
            {filteredCourses.map(course => {
              // Extract pricing details dynamically if available
              const feeMatch = course.content.match(/(?:fee|program fee is)\s+₹\s*(\d+\/?-?)/i) || 
                               course.content.match(/INR\s*(\d+\s*-\s*\d+)/i) || 
                               course.content.match(/(?:payment term|fee is)\s*(\d+\/?-?)/i);
              const feeText = feeMatch ? `₹ ${feeMatch[1]}` : "Custom Pricing";

              // Find cover image dynamically based on slug
              let coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/03/Investment-data-amico.png`;
              if (course.slug === 'financial-market-basic-course') {
                coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/elementor/thumbs/Financial-Market-Basic-Course-r4cbxtm4wotpb68u6p060ghzpe5erzcvd15b65vkm6.jpg`;
              } else if (course.slug === 'market-basic-course') {
                coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/04/Financial-or-stock-market-study.png`;
              } else if (course.slug === 'pro-trader-course-from-confusion-to-clarity') {
                coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/03/cropped-image-businessman-sitting-by-table-cafe-analyzing-indicators-laptop-computer_171337-5598.jpg`;
              } else if (course.slug === 'pro-trader-course-option-specific') {
                coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/03/person-office-analyzing-checking-finance-graphs_23-2150377129.jpg`;
              } else if (course.slug === 'comprehensive-course') {
                coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/04/Bullish-Trend-Impulses-vs-Corrections-1024x390-1.png`;
              } else if (course.slug === 'mentorship') {
                coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/elementor/thumbs/Mentorship-Service-whom-r4cedmpdcj04s6c9gilz2ljj9k40hxjkvxxptm5u0e.jpg`;
              } else if (course.slug === 'nism-certification-program') {
                coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/elementor/thumbs/NISM-Certification-Program-whom-r4ceb887vrprbf0488m7zh4ff1qhjfq6psdfahl7aw.jpg`;
              } else if (course.slug === 'advisory-services') {
                coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/04/man-trading-browsing-online-stock-investments-night_169016-47425.jpg`;
              }

              // Create short description from content
              const desc = course.content.split('\n')[2] || "Learn structured trading strategies...";

              return (
                <article className="course-card fade-in" key={course.slug}>
                  <div className="course-card-img">
                    <img 
                      src={coverImg} 
                      alt={`Cover for ${course.title}`}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400";
                      }}
                    />
                    <div className="course-badge">SEBI / NISM Verified</div>
                  </div>
                  <div className="course-card-content">
                    <h3>{course.title}</h3>
                    <p>{desc.substring(0, 140)}...</p>
                    <div className="course-price-row">
                      <div className="course-price">{feeText}</div>
                      <Link to={`/courses/${course.slug}`} className="course-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="section-alt" aria-label="Why Choose Us">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="grid-3" style={{ marginTop: '40px' }}>
            <div className="card">
              <div className="card-icon" style={{ backgroundColor: 'rgba(35, 72, 146, 0.1)', color: 'var(--secondary)' }} aria-hidden="true">
                <Award />
              </div>
              <h3>Expert-Led Training</h3>
              <p>Learn from SEBI/NISM Certified Research Analyst Mr. S. Kumar, utilizing proven trading strategies for consistent success.</p>
            </div>
            <div className="card">
              <div className="card-icon" style={{ backgroundColor: 'rgba(35, 72, 146, 0.1)', color: 'var(--secondary)' }} aria-hidden="true">
                <BookOpen />
              </div>
              <h3>Courses for All Levels</h3>
              <p>From beginners to advanced traders, our structured programs ensure independent trading with zero reliance on tips.</p>
            </div>
            <div className="card">
              <div className="card-icon" style={{ backgroundColor: 'rgba(35, 72, 146, 0.1)', color: 'var(--secondary)' }} aria-hidden="true">
                <TrendingUp />
              </div>
              <h3>Live Market Training</h3>
              <p>Gain real-time experience in intraday and positional trading across stocks, futures, options, currency, and commodities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial reviews carousel */}
      <section className="section" id="reviews" aria-label="Customer Reviews">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          
          <div className="reviews-container" style={{ marginTop: '48px' }}>
            <div className="reviews-grid">
              {[0, 1, 2].map((offset) => {
                const idx = (reviewIdx + offset) % TESTIMONIALS.length;
                const item = TESTIMONIALS[idx];
                return (
                  <div className="review-card fade-in" key={idx}>
                    <p className="review-text">“{item.text}”</p>
                    <div className="review-author">— {item.name}</div>
                  </div>
                );
              })}
            </div>
            
            <div className="reviews-nav">
              <button 
                className="review-nav-btn" 
                onClick={prevReview}
                aria-label="Previous Review"
              >
                &larr;
              </button>
              <button 
                className="review-nav-btn" 
                onClick={nextReview}
                aria-label="Next Review"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
