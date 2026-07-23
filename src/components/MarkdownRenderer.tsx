import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) return null;

  // Pre-process images that might have WordPress URLs, pointing them to our local copy
  let processedContent = content
    .replace(/https:\/\/profitandstocks\.com\/wp-content/g, 'WP_CONTENT_PLACEHOLDER')
    .replace(/\/wp-content/g, 'WP_CONTENT_PLACEHOLDER')
    .replace(/WP_CONTENT_PLACEHOLDER/g, `${import.meta.env.BASE_URL}wp-content`);

  // Parse and group blocks line by line to separate headings, lists, images, and paragraphs properly
  const lines = processedContent.split('\n');
  const blocks: string[] = [];
  let currentBlock: string[] = [];
  let currentBlockType: 'p' | 'list-bullet' | 'list-number' | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    if (trimmedLine === '') {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock.join('\n'));
        currentBlock = [];
        currentBlockType = null;
      }
      continue;
    }

    const isHeading = /^#{1,6}\s+/.test(trimmedLine);
    const isBullet = /^-\s+/.test(trimmedLine);
    const isNumber = /^\d+\.\s+/.test(trimmedLine);
    const isImg = /^!\[/.test(trimmedLine);

    if (isHeading || isImg) {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock.join('\n'));
        currentBlock = [];
      }
      blocks.push(line);
      currentBlockType = null;
    } else if (isBullet) {
      if (currentBlockType !== 'list-bullet') {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock.join('\n'));
          currentBlock = [];
        }
        currentBlockType = 'list-bullet';
      }
      currentBlock.push(line);
    } else if (isNumber) {
      if (currentBlockType !== 'list-number') {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock.join('\n'));
          currentBlock = [];
        }
        currentBlockType = 'list-number';
      }
      currentBlock.push(line);
    } else {
      if (currentBlockType !== 'p' && currentBlockType !== null) {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock.join('\n'));
          currentBlock = [];
        }
      }
      currentBlockType = 'p';
      currentBlock.push(line);
    }
  }

  if (currentBlock.length > 0) {
    blocks.push(currentBlock.join('\n'));
  }

  const renderInlineStyles = (text: string): React.ReactNode => {
    if (!text) return text;

    // Process markdown tokens: bold **text** and links [label](url)
    const tokenRegex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
    const parts: React.ReactNode[] = [];
    let lastIdx = 0;
    let match: RegExpExecArray | null;

    while ((match = tokenRegex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        parts.push(text.substring(lastIdx, match.index));
      }

      const matchStr = match[0];
      if (matchStr.startsWith('**') && matchStr.endsWith('**')) {
        const boldText = matchStr.slice(2, -2);
        parts.push(<strong key={match.index}>{boldText}</strong>);
      } else if (matchStr.startsWith('[')) {
        const linkMatch = matchStr.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, label, url] = linkMatch;
          const isInternal = url.startsWith('/') || url.includes('localhost') || url.includes('profitandstocks.com');
          const cleanUrl = url.replace('https://profitandstocks.com', '');
          if (isInternal) {
            parts.push(
              <a key={match.index} href={cleanUrl}>
                {label}
              </a>
            );
          } else {
            parts.push(
              <a key={match.index} href={url} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            );
          }
        } else {
          parts.push(matchStr);
        }
      }

      lastIdx = match.index + matchStr.length;
    }

    if (lastIdx < text.length) {
      parts.push(text.substring(lastIdx));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="rich-text">
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Headers
        if (trimmed.startsWith('# ')) {
          return <h1 key={index} className="fade-in">{renderInlineStyles(trimmed.substring(2))}</h1>;
        }
        if (trimmed.startsWith('## ')) {
          return <h2 key={index} className="fade-in">{renderInlineStyles(trimmed.substring(3))}</h2>;
        }
        if (trimmed.startsWith('### ')) {
          return <h3 key={index} className="fade-in">{renderInlineStyles(trimmed.substring(4))}</h3>;
        }
        if (trimmed.startsWith('#### ')) {
          return <h4 key={index} className="fade-in">{renderInlineStyles(trimmed.substring(5))}</h4>;
        }
        if (trimmed.startsWith('##### ')) {
          return <h5 key={index} className="fade-in">{renderInlineStyles(trimmed.substring(6))}</h5>;
        }
        if (trimmed.startsWith('###### ')) {
          return <h6 key={index} className="fade-in">{renderInlineStyles(trimmed.substring(7))}</h6>;
        }

        // Bullet lists
        if (trimmed.startsWith('- ')) {
          const items = trimmed.split('\n').map((line: string) => line.replace(/^-\s+/, '').trim());
          return (
            <ul key={index} className="fade-in">
              {items.map((item: string, i: number) => <li key={i}>{renderInlineStyles(item)}</li>)}
            </ul>
          );
        }

        // Numbered lists
        if (/^\d+\.\s+/.test(trimmed)) {
          const items = trimmed.split('\n').map((line: string) => line.replace(/^\d+\.\s+/, '').trim());
          return (
            <ol key={index} className="fade-in">
              {items.map((item: string, i: number) => <li key={i}>{renderInlineStyles(item)}</li>)}
            </ol>
          );
        }

        // Check for images
        // Format: ![alt](url)
        const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (imgMatch) {
          const [, alt, url] = imgMatch;
          return (
            <div key={index} className="rich-text-img-container fade-in" style={{ margin: '24px 0' }}>
              <img 
                src={url} 
                alt={alt || "Illustration"} 
                style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', width: '100%' }} 
              />
            </div>
          );
        }

        // Normal paragraph
        return <p key={index} className="fade-in">{renderInlineStyles(trimmed)}</p>;
      })}
    </div>
  );
}
