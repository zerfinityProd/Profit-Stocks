import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import blogsData from '../data/blogs.json';
import { getBlogImage } from '../utils/blogImages';

// Helper to strip WordPress comments/sidebar junk and author headers from content
const cleanBlogContent = (content: string) => {
  if (!content) return '';
  // Remove author header lines like "[Profit and Stocks](https://profitandstocks.com/author/protrader/) November 22, 2019"
  let cleaned = content.replace(/^\[Profit and Stocks\]\(https:\/\/profitandstocks\.com\/author\/protrader\/\)\s+[A-Z][a-z]+\s+\d{1,2},\s+\d{4}\s*/i, '');
  
  const markers = [
    '### Leave a Reply',
    'Leave a Reply',
    'Post Tags :',
    'SearchSearch',
    '###  Recent Post',
    'Prev Post'
  ];
  let cutIndex = cleaned.length;
  for (const marker of markers) {
    const idx = cleaned.indexOf(marker);
    if (idx !== -1 && idx < cutIndex) {
      cutIndex = idx;
    }
  }
  return cleaned.substring(0, cutIndex).trim();
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogsData.find(b => b.slug === slug);

  if (!post) {
    return (
      <main id="main-content">
        <section className="page-hero">
          <div className="container">
            <h1>Blog Post Not Found</h1>
            <p>The post you are looking for does not exist or has been removed.</p>
            <Link to="/blogs" className="btn btn-primary" style={{ marginTop: '16px' }}>
              Back to Blogs
            </Link>
          </div>
        </section>
      </main>
    );
  }

  // Determine category and publication date based on content
  const t = (post.slug + ' ' + post.title).toLowerCase();
  let category = 'Trading';
  if (t.includes('invest') || t.includes('long-term')) category = 'Investing';
  else if (t.includes('psychology') || t.includes('mistake') || t.includes('lose')) category = 'Psychology';

  const dateMatch = post.content.match(/(?:[A-Z][a-z]+\s+\d{1,2},\s+\d{4})/);
  const publishDate = dateMatch ? dateMatch[0] : "Educational Article";

  return (
    <main id="main-content">
      {/* Breadcrumbs Page Header */}
      <section className="page-hero" aria-label="Blog post Breadcrumbs">
        <div className="container">
          <Link to="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', marginBottom: '12px' }}>
            <ArrowLeft size={14} /> Back to Blogs
          </Link>
          <h1 style={{ fontSize: '36px', lineHeight: '1.2' }}>{post.title}</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>&raquo;</span>
            <Link to="/blogs">Blogs</Link>
            <span>&raquo;</span>
            <span aria-current="page">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Main post body */}
      <section className="page-content" aria-label="Blog post reading content">
        <div className="container">
          <article style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* Meta details header */}
            <div style={{ display: 'flex', gap: '24px', paddingBottom: '24px', marginBottom: '36px', borderBottom: '1px solid var(--border)', fontSize: '14px', color: 'var(--text-muted)' }}>
              <span>Category: <strong style={{ color: 'var(--primary)' }}>{category}</strong></span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} />
                <span>{publishDate}</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <User size={14} />
                <span>By <strong>Mr. S. Kumar</strong></span>
              </span>
            </div>

            {/* Featured Article Banner Image */}
            <div style={{ marginBottom: '32px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', maxHeight: '420px' }}>
              <img 
                src={getBlogImage(post.slug)} 
                alt={post.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Markdown rendered body */}
            <MarkdownRenderer content={cleanBlogContent(post.content)} />
            
          </article>
        </div>
      </section>
    </main>
  );
}
