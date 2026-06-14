import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import blogsData from '../data/blogs.json';

// Helper to determine category based on slug/title content
const getBlogCategory = (slug: string, title: string) => {
  const t = (slug + ' ' + title).toLowerCase();
  if (t.includes('invest') || t.includes('long-term')) return 'Investing';
  if (t.includes('psychology') || t.includes('mistake') || t.includes('lose')) return 'Psychology';
  return 'Trading';
};

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Trading', 'Investing', 'Psychology'];

  // Filter posts based on search query and active category tab
  const filteredBlogs = blogsData.filter(blog => {
    const category = getBlogCategory(blog.slug, blog.title);
    const matchesCategory = activeCategory === 'All' || category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.content.substring(0, 1000).toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main id="main-content">
      {/* Breadcrumb Page Header */}
      <section className="page-hero" aria-label="Blogs Breadcrumbs">
        <div className="container">
          <h1>Educational Blogs</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>&raquo;</span>
            <span aria-current="page">Blogs</span>
          </nav>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="page-content" aria-label="Search and read our trading blogs">
        <div className="container">
          
          {/* Search and Category Filter Toolbar */}
          <div className="blog-header">
            {/* Category tabs */}
            <div className="tabs-header" style={{ marginBottom: 0, borderBottom: 'none', paddingBottom: 0 }} role="tablist" aria-label="Blog categories">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input bar */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
              <input 
                type="text" 
                placeholder="Search blogs..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: '44px' }}
                aria-label="Search blogs"
              />
              <Search 
                size={18} 
                color="var(--text-muted)" 
                style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} 
              />
            </div>
          </div>

          {/* Blogs Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="blog-grid" style={{ marginTop: '40px' }}>
              {filteredBlogs.map(blog => {
                const category = getBlogCategory(blog.slug, blog.title);
                
                // Get clean text excerpt
                const paragraphs = blog.content.split('\n').filter(p => p.trim() && !p.startsWith('#'));
                const excerpt = paragraphs[0] || "Read details about trading strategy and market psychology...";

                // Select specific image based on slug, fallback to category
                let coverImg = '';
                if (blog.slug === 'buy-and-sell-traps') {
                  coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/04/BUY-SELL-Traps.png`;
                } else if (blog.slug === 'less-is-more-in-trading') {
                  coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/04/Less-is-more-in-Trading.png`;
                } else if (blog.slug === 'how-to-become-profitable-from-heavy-losses-in-stock-market') {
                  coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/04/Profitable-from-heavy-losses-in-Stock-Market.png`;
                } else if (blog.slug === 'how-do-you-make-a-financial-or-stock-market-study-interesting-and-effective') {
                  coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/04/Financial-or-stock-market-study.png`;
                } else if (blog.slug === 'stock-market-and-psychology') {
                  coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/04/Stock-market-and-psychology.png`;
                } else if (blog.slug === 'difference-between-investing-and-trading') {
                  coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/04/Investment-data-pana.svg`;
                } else {
                  coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/03/Site-Stats-amico.png`;
                  if (category === 'Investing') coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/03/Investment-data-amico.png`;
                  else if (category === 'Psychology') coverImg = `${import.meta.env.BASE_URL}wp-content/uploads/2025/03/Financial-data-amico.png`;
                }

                return (
                  <article className="blog-card fade-in" key={blog.slug}>
                    <div className="blog-card-img">
                      <img 
                        src={coverImg} 
                        alt={`Illustration for ${blog.title}`}
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400";
                        }}
                      />
                    </div>
                    <div className="blog-card-content">
                      <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{category}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={12} />
                          <span>Educational</span>
                        </span>
                      </div>
                      <h3>{blog.title}</h3>
                      <p className="blog-card-excerpt">{excerpt.substring(0, 110)}...</p>
                      <Link to={`/blogs/${blog.slug}`} className="blog-card-link">
                        Read Full Post <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <h3>No blog posts matched your search.</h3>
              <p style={{ marginTop: '8px' }}>Try searching using different keywords or resetting filters.</p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
