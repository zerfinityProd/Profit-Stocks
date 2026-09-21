import { useParams, Link, NavLink } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import TechnicalAnalysisOverview from '../components/TechnicalAnalysisOverview';
import taData from '../data/technical_analysis.json';

const TOPICS = [
  { group: "Fundamentals", slug: "technical-analysis", title: "Introduction" },
  { group: "Fundamentals", slug: "understanding-candlesticks", title: "Understanding Candlesticks" },
  { group: "Fundamentals", slug: "concept-of-trend", title: "Concept of Trend" },
  { group: "Fundamentals", slug: "support-and-resistance", title: "Support and Resistance" },
  
  { group: "Reversal Chart Patterns", slug: "reversal-chart-patterns", title: "Overview" },
  { group: "Reversal Chart Patterns", slug: "head-and-shoulders-chart-pattern", title: "Head & Shoulders" },
  { group: "Reversal Chart Patterns", slug: "double-top-chart-pattern", title: "Double Top" },
  { group: "Reversal Chart Patterns", slug: "double-bottom-chart-pattern", title: "Double Bottom" },
  { group: "Reversal Chart Patterns", slug: "triple-top-chart-pattern", title: "Triple Top" },
  { group: "Reversal Chart Patterns", slug: "triple-bottom-chart-pattern", title: "Triple Bottom" },

  { group: "Continuation Chart Patterns", slug: "continuation-chart-patterns", title: "Overview" },
  { group: "Continuation Chart Patterns", slug: "symmetrical-triangle-chart-pattern", title: "Symmetrical Triangle" },
  { group: "Continuation Chart Patterns", slug: "ascending-triangle-chart-pattern", title: "Ascending Triangle" },
  { group: "Continuation Chart Patterns", slug: "descending-triangle-chart-pattern", title: "Descending Triangle" },
  { group: "Continuation Chart Patterns", slug: "rectangle-chart-pattern", title: "Rectangle" },
  { group: "Continuation Chart Patterns", slug: "flag-and-pennant-chart-pattern", title: "Flag & Pennant" },
  
  { group: "Advanced Patterns", slug: "harmonic-patterns", title: "Harmonic Patterns" },

  { group: "Technical Indicators", slug: "technical-indicators", title: "Overview" },
  { group: "Technical Indicators", slug: "moving-average-sma-and-ema", title: "Moving Average (SMA & EMA)" },
  { group: "Technical Indicators", slug: "bollinger-band-indicator", title: "Bollinger Band" },
  { group: "Technical Indicators", slug: "relative-strength-index-rsi", title: "Relative Strength Index (RSI)" }
];

export default function TechnicalAnalysis() {
  const { slug } = useParams<{ slug: string }>();
  
  // Default to main index page if no slug is provided
  const currentSlug = slug || 'technical-analysis';
  const topic = taData.find(t => t.slug === currentSlug);

  // Group topics for categorized sidebar rendering
  const groupedTopics = TOPICS.reduce((acc, curr) => {
    acc[curr.group] = acc[curr.group] || [];
    acc[curr.group].push(curr);
    return acc;
  }, {} as Record<string, typeof TOPICS>);

  return (
    <main id="main-content">
      {/* Breadcrumb Header */}
      <section className="page-hero" aria-label="Technical Analysis Breadcrumbs">
        <div className="container">
          <h1>Technical Analysis Guide</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>&raquo;</span>
            <Link to="/technical-analysis">Technical Analysis</Link>
            {slug && (
              <>
                <span>&raquo;</span>
                <span aria-current="page">{topic?.title || slug}</span>
              </>
            )}
          </nav>
        </div>
      </section>

      {/* Main Educational Portal Layout */}
      <section className="page-content" aria-label="Technical analysis syllabus sections">
        <div className="container">
          <div className="ta-layout">
            
            {/* Sidebar Navigation Panel */}
            <aside className="ta-sidebar" aria-label="Technical analysis index">
              {Object.entries(groupedTopics).map(([groupName, items]) => (
                <div key={groupName} style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '10px' }}>
                    {groupName}
                  </h3>
                  <ul className="ta-sidebar-links">
                    {items.map(item => (
                      <li key={item.slug}>
                        <NavLink 
                          to={`/technical-analysis/${item.slug}`} 
                          className={({ isActive }) => {
                            // Active status for the default main page as well
                            const isTopicActive = isActive || (item.slug === 'technical-analysis' && !slug);
                            return isTopicActive ? "active" : "";
                          }}
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </aside>

            {/* Content Pane */}
            <div style={{ minHeight: '500px' }}>
              {currentSlug === 'technical-analysis' ? (
                <TechnicalAnalysisOverview />
              ) : topic ? (
                <div className="fade-in" key={currentSlug}>
                  <MarkdownRenderer content={topic.content} />
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <h3>Educational Content Loading...</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                    Please select a topic from the sidebar index list.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
