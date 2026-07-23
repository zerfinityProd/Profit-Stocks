import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import blogsData from '../data/blogs.json';
import { getBlogImage } from '../utils/blogImages';

// Helper to strip WordPress comments/sidebar junk from content
const cleanBlogContent = (content: string) => {
  if (!content) return '';
  const markers = [
    '### Leave a Reply',
    'Leave a Reply',
    'Post Tags :',
    'SearchSearch',
    '###  Recent Post',
    'Prev Post'
  ];
  let cutIndex = content.length;
  for (const marker of markers) {
    const idx = content.indexOf(marker);
    if (idx !== -1 && idx < cutIndex) {
      cutIndex = idx;
    }
  }
  return content.substring(0, cutIndex).trim();
};

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
    const cleanedContent = cleanBlogContent(blog.content);
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cleanedContent.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main id="main-content">
      {/* Breadcrumb Page Header */}
      <section className="page-hero" aria-label="Blogs Breadcrumbs">
        <div className="container">
          <h1>Blogs</h1>
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
                style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} 
              />
            </div>
          </div>

          {/* Blogs Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="blog-grid" style={{ marginTop: '40px' }}>
              {filteredBlogs.map(blog => {
                const category = getBlogCategory(blog.slug, blog.title);
                
                // Extract actual publication date
                const dateMatch = blog.content.match(/(?:[A-Z][a-z]+\s+\d{1,2},\s+\d{4})/);
                const publishDate = dateMatch ? dateMatch[0] : "Educational";

                // Get clean text excerpt (excluding subheadings like [Profit and Stocks] and # Heading)
                const cleanParagraphs = blog.content
                  .split('\n')
                  .map(p => p.trim())
                  .filter(p => p && !p.startsWith('#') && !p.startsWith('[Profit and Stocks]') && !p.includes('profitandstocks.com/author'));
                const excerpt = cleanParagraphs[0] || "Read details about trading strategy and market psychology...";

                // Select specific unique image for this blog post
                const coverImg = getBlogImage(blog.slug);

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
                          <span>{publishDate}</span>
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
