import { useEffect, useRef, memo } from 'react';
import tickerConfig from '../config/tickerStocks.json';

interface TickerTapeProps {
  customSymbols?: Array<{ proName: string; title: string }>;
}

function TickerTapeComponent({ customSymbols }: TickerTapeProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container__widget';
    containerRef.current.appendChild(widgetContainer);

    const symbolsToDisplay = customSymbols && customSymbols.length > 0 
      ? customSymbols 
      : tickerConfig.symbols;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: symbolsToDisplay,
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'adaptive',
      colorTheme: 'light',
      locale: 'en'
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [customSymbols]);

  return (
    <div 
      className="ticker-tape-wrapper"
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        height: '36px',
        maxHeight: '36px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)'
      }}
    >
      <div 
        ref={containerRef} 
        className="tradingview-widget-container" 
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default memo(TickerTapeComponent);
