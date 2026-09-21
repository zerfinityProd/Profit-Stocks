import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TechnicalAnalysisOverview() {
  const [activePremise, setActivePremise] = useState<number>(1);
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="ta-overview fade-in">
      {/* 1. What is Technical Analysis? */}
      <section className="ta-section-block">
        <div className="ta-two-col">
          <div className="ta-text-col">
            <div className="ta-pre-title">What is</div>
            <h2 className="ta-heading">Technical Analysis?</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.7', marginTop: '16px', color: 'var(--text-main)' }}>
              John Murphy defines <strong>Technical Analysis</strong> as <span style={{ color: 'var(--primary)', fontWeight: 600 }}>“the study of market action, primarily through the use of charts, for the purpose of forecasting future price trends.”</span> Market action refers to price, volume, and open interest data.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', marginTop: '16px', color: 'var(--text-muted)' }}>
              While analysis of this data can’t make absolute predictions about the future, studying the past price movements on a chart can help technical analysts anticipate what is “likely” to happen to prices going forward.
            </p>
          </div>
          <div className="ta-img-col">
            <div className="ta-img-box">
              <img 
                src={`${baseUrl}wp-content/uploads/2025/03/Data-extraction-amico.svg`} 
                alt="Data extraction and chart analysis illustration" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Scope & Foundational Assumptions */}
      <section className="ta-section-block">
        <div className="ta-two-col reverse">
          <div className="ta-img-col">
            <div className="ta-img-box">
              <img 
                src={`${baseUrl}wp-content/uploads/2025/03/Online-world-amico.svg`} 
                alt="Financial markets across the global online world" 
                loading="lazy"
              />
            </div>
          </div>
          <div className="ta-text-col">
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '16px' }}>
              Technical analysis is applicable to stocks, indices, commodities, futures or any tradable instrument where the price is influenced by the forces of supply and demand. Price data refers to any combination of the open, high, low, close, volume, or open interest for a given security over a specific time frame. The time-frame can be based on intraday (1-minute, 5-minutes, 10-minutes, 15-minutes, 30-minutes or hourly), daily, weekly or monthly price data and last a few hours or many years.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              Technical analysis is based on the assumption that all information that can affect the performance of stock, company fundamentals, economic factors and market sentiments, is reflected already in its stock prices. Accordingly, technical analysts do not care to analyze the fundamentals of the business. Instead, the approach is to forecast the direction of prices through the study of patterns in historical market data – price and volume. Technicians believe that market activity will generate indicators in price trends that can be used to forecast the direction and magnitude of stock price movements in future.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Three Premises of Technical Analysis */}
      <section className="ta-section-block">
        <div className="ta-header-center" style={{ marginBottom: '24px' }}>
          <h2 className="ta-heading" style={{ fontSize: '26px' }}>Three Premises of Technical Analysis</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginTop: '6px' }}>
            There are three premises on which the technical approach is based:
          </p>
        </div>

        <div className="ta-premises-tabs" role="tablist">
          <button 
            role="tab"
            aria-selected={activePremise === 1}
            className={`ta-premise-tab-btn ${activePremise === 1 ? 'active' : ''}`}
            onClick={() => setActivePremise(1)}
          >
            1. Market action discounts everything.
          </button>
          <button 
            role="tab"
            aria-selected={activePremise === 2}
            className={`ta-premise-tab-btn ${activePremise === 2 ? 'active' : ''}`}
            onClick={() => setActivePremise(2)}
          >
            2. Prices move in trends.
          </button>
          <button 
            role="tab"
            aria-selected={activePremise === 3}
            className={`ta-premise-tab-btn ${activePremise === 3 ? 'active' : ''}`}
            onClick={() => setActivePremise(3)}
          >
            3. History repeats itself.
          </button>
        </div>

        <div className="ta-premise-content fade-in" key={activePremise}>
          {activePremise === 1 && (
            <div>
              <h3 style={{ fontSize: '18px', color: 'var(--secondary)', marginBottom: '12px' }}>
                Premise 1: Market Action Discounts Everything
              </h3>
              <p style={{ marginBottom: '14px' }}>
                The statement “market action discounts everything” forms what is probably the cornerstone of technical analysis. Unless the full significance of this first premise is fully understood and accepted, nothing else that follows makes much sense. Technical analysts believe that the current price fully reflects all information.
              </p>
              <p style={{ marginBottom: '14px' }}>
                Because all information is already reflected in the price, it represents the fair value, and should form the basis for analysis. After all, the market price reflects the sum knowledge of all participants, including traders, investors, portfolio managers, buy-side analysts, sell-side analysts, market strategist, technical analysts, fundamental analysts and many others. Technical analysis utilizes the information captured by the price to interpret what the market is saying with the purpose of forming a view on the future.
              </p>
              <p style={{ marginBottom: '14px' }}>
                The technician believes that anything that can possible affect the price-fundamentally, politically, psychologically, or otherwise-is actually reflected in the price of that market. It follows, therefore, that a study of price action is all that is required. The technician is claiming that price action should reflect shifts in supply and demand. If demand exceeds supply, prices should rise. If supply exceeds demand, prices should fall. This action is the basis of all economic and fundamental forecasting.
              </p>
              <p>
                The technician then turns this statement around to arrive at the conclusion that if prices are rising, for whatever specific reasons, demand must exceed supply and the fundamentals must be bullish. If prices fall, the fundamentals must be bearish.
              </p>
            </div>
          )}

          {activePremise === 2 && (
            <div>
              <h3 style={{ fontSize: '18px', color: 'var(--secondary)', marginBottom: '12px' }}>
                Premise 2: Prices Move in Trends
              </h3>
              <p style={{ marginBottom: '14px' }}>
                The concept of trend is absolutely essential to the technical approach. The whole purpose of charting the price action of a market is to identify trends in early stages of their development for the purpose of trading in the direction of those trends. In fact, most of the techniques used in this approach are trend-following in nature, meaning, that their intent is to identify and follow existing trends.
              </p>
              <p style={{ marginBottom: '14px' }}>
                There is a corollary to the premise that prices move in trends-a trend motion is more likely to continue than to reverse. This corollary is, of course, an adaption of Newton’s first law of motion.
              </p>
              <p>
                Another way to state this corollary is that a trend in motion will continue in the same direction until it reverses. The entire trend-following approach is predicated on riding existing trend until it shows signs of reversing.
              </p>
            </div>
          )}

          {activePremise === 3 && (
            <div>
              <h3 style={{ fontSize: '18px', color: 'var(--secondary)', marginBottom: '12px' }}>
                Premise 3: History Repeats Itself
              </h3>
              <p style={{ marginBottom: '14px' }}>
                Much of the body of technical analysis and the study of market action has to do with the study of human psychology. Chart patterns, for example, which have been identified and categorised over the past one hundred years, reflect certain pictures that appear on price charts.
              </p>
              <p style={{ marginBottom: '14px' }}>
                These pictures reveal the bullish or bearish psychology of the market. Since these patterns have worked well in the past, it is assumed that they will continue to work well in the future. They are based on the study of human psychology, which tends not to change.
              </p>
              <p>
                Another way of saying this last premise-that history repeats itself-is that the key to understanding the future lies in a study of the past, or that the future is just a repetition of the past.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Advantages of Technical Analysis? */}
      <section className="ta-section-block">
        <div className="ta-two-col reverse">
          <div className="ta-img-col">
            <div className="ta-img-box">
              <img 
                src={`${baseUrl}wp-content/uploads/2025/03/the-6-best-document-management-automation-tools-in-2024.webp`} 
                alt="Technical analysis tools and automation" 
                loading="lazy"
              />
            </div>
          </div>
          <div className="ta-text-col">
            <div className="ta-pre-title">Advantages of</div>
            <h2 className="ta-heading">Technical Analysis?</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.7', marginTop: '16px', color: 'var(--text-main)' }}>
              The advantages of technical analysis are that it can be applied to virtually any trading instrument and in any time frame. Technical analysis can be used to analyse anything from stocks, commodities, interest rates or Forex.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', marginTop: '14px', color: 'var(--text-muted)' }}>
              You can also apply technical analysis from a short term perspective to a longer term time frame. In fact it can be applied to a chart ranging from minutes on an intra-day time frame to weekly or even monthly time frames.
            </p>
          </div>
        </div>

        {/* 3 Core Methodology Feature Cards */}
        <div className="ta-feature-cards">
          <div className="ta-feature-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <CheckCircle2 size={20} color="var(--primary)" />
              <h4 style={{ fontSize: '16px', color: 'var(--secondary)' }}>Standalone &amp; Flexible</h4>
            </div>
            <p>
              It is important to understand that technical analysis can be used as a standalone method or it can be incorporated with other methods such as fundamental analysis or market timing methods.
            </p>
          </div>

          <div className="ta-feature-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <CheckCircle2 size={20} color="var(--primary)" />
              <h4 style={{ fontSize: '16px', color: 'var(--secondary)' }}>Clear Decision Rules</h4>
            </div>
            <p>
              Professional traders use technical analysis to create a set of clear rules and guidelines to assist in the decision making process of when, where and how to enter and exit a trade. For example, it can form part of your trading plan, establishing your rules for entering and exiting trades.
            </p>
          </div>

          <div className="ta-feature-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <CheckCircle2 size={20} color="var(--primary)" />
              <h4 style={{ fontSize: '16px', color: 'var(--secondary)' }}>Readily Available Tools</h4>
            </div>
            <p>
              Using popular technical Indicators and chart patterns, a trader can apply readily available tools and techniques to find potential trading opportunities in the global financial markets to assist in successful trading.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Why is Technical Analysis Important? */}
      <section className="ta-section-block">
        <div className="ta-two-col">
          <div className="ta-text-col">
            <div className="ta-pre-title">What is</div>
            <h2 className="ta-heading">Technical Analysis Important?</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.7', marginTop: '16px', color: 'var(--text-main)' }}>
              Many traders and investors use technical analysis to inform them of the direction of markets. Markets are not completely random and if you see a pattern emerging, the chances are many others can too.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', marginTop: '14px', color: 'var(--text-muted)' }}>
              This makes it almost a self-fulfilling trend. Traders and investors help to create the patterns we see in market prices.
            </p>
          </div>
          <div className="ta-img-col">
            <div className="ta-img-box">
              <img 
                src={`${baseUrl}wp-content/uploads/2025/03/Security-On-rafiki.svg`} 
                alt="Risk management and market security illustration" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Understanding Technical Charts */}
      <section className="ta-section-block">
        <div className="ta-header-center" style={{ marginBottom: '24px' }}>
          <h2 className="ta-heading" style={{ fontSize: '26px' }}>Understanding Technical Charts</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginTop: '8px', maxWidth: '800px', margin: '8px auto 0' }}>
            Charts are particularly important to Technical Analysts as they believe that past patterns are based on human behaviour and often repeat themselves. Technical Analysts use chart patterns to help predict where prices may move to in the future and they are used to spot trading opportunities. So what information is contained within these charts and how do you “read” them?
          </p>
          <p style={{ fontWeight: 600, color: 'var(--secondary)', marginTop: '8px', fontSize: '16px' }}>
            A trading chart is made up of three major components: Time, Price and Patterns.
          </p>
        </div>

        <div className="ta-chart-comp-grid">
          <div className="ta-chart-comp-card">
            <div className="ta-chart-comp-icon">
              <Clock size={24} />
            </div>
            <h3>Time</h3>
            <p style={{ marginBottom: '12px' }}>
              In this example we’re using a daily chart for the ICICI BANK and we can see the price displayed on the vertical or ‘y’ axis and time displayed on the horizontal or ‘x’ axis.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              If we want to find out more about how the price of ICICI BANK has changed over time, then we could use the drop down menu to choose a time frame from 1 minute to 1 year. Popular short-term time frames usually range from five to 60 minutes. If we want to hold positions for more than a few hours, we could look at daily charts for an intermediate time frame. Weekly and monthly charts on the other hand could be used for longer-term trades.
            </p>
          </div>

          <div className="ta-chart-comp-card">
            <div className="ta-chart-comp-icon">
              <TrendingUp size={24} />
            </div>
            <h3>Price</h3>
            <p style={{ marginBottom: '12px' }}>
              The second major component of a chart is the price. Price movements can be displayed in different ways on charts using lines or bars for example, but one of the most popular with traders are candlesticks.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              Candlesticks are very useful as they can help us to determine the direction of the market with just a glance. By looking at the colour and length of the candlestick, we can tell if the market is getting stronger or weaker, and whether that direction is a short-lived spike or a legitimate change in direction. Each candlestick shows key data for a specific period.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Example Section */}
      <section className="ta-section-block">
        <div className="ta-example-card">
          <div className="ta-two-col">
            <div className="ta-img-col">
              <div className="ta-img-box" style={{ background: '#ffffff' }}>
                <img 
                  src={`${baseUrl}wp-content/uploads/2025/03/ICICI-2.png`} 
                  alt="ICICI Bank Daily Candlestick Chart" 
                  loading="lazy"
                />
              </div>
            </div>
            <div className="ta-text-col">
              <h2 className="ta-heading" style={{ fontSize: '24px' }}>Example</h2>
              <p style={{ fontSize: '15px', lineHeight: '1.7', marginTop: '14px', color: 'var(--text-main)' }}>
                This ICICI BANK chart has a daily time scale, and each Candle represents the trading activity for a one day period.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.7', marginTop: '12px', color: 'var(--text-muted)' }}>
                The Candlestick Body is a rectangle that represents all of the trading activity for a specified period. When the price rises, the candle will be green, and when the price of that market drops, the candle will be red. This gives us a visual snapshot of price movement at any given moment.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.7', marginTop: '12px', color: 'var(--text-muted)' }}>
                On a green candle, the open price is represented at the bottom of the candle body and the top represents the close price. Generally speaking, the longer the body is, the more intense the buying or selling pressure is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Candlestick Body & Patterns */}
      <section className="ta-section-block">
        <div className="ta-two-col">
          <div className="ta-text-col">
            <h3 style={{ fontSize: '20px', color: 'var(--secondary)', marginBottom: '14px' }}>
              Candlestick Body &amp; Pressure Dynamics
            </h3>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '14px' }}>
              Long green candles are generally bullish and, after extended declines, might indicate a potential turning point in the trend, or a support level. Long red candles might indicate strong selling pressure as the close price is well below the open.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              If the market has been rallying for some time, a long red candle might indicate that the trend is coming to an end, or it could or mark a future resistance level. Candlestick shadows, sometimes called tails or wicks, are the thin lines that we see above and below the candle body.
            </p>
          </div>
          <div className="ta-img-col">
            <div className="ta-img-box" style={{ background: '#ffffff' }}>
              <img 
                src={`${baseUrl}wp-content/uploads/2025/03/candlestick-body.jpg`} 
                alt="Candlestick anatomy - Open, Close, High, Low, Shadows and Real Body" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Candlestick Shadows & Market Battle */}
      <section className="ta-section-block">
        <div className="ta-premise-content" style={{ background: '#ffffff', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '20px', color: 'var(--secondary)', marginBottom: '14px' }}>
            Shadows / Wicks &amp; The Buyer-Seller Battle
          </h3>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '14px' }}>
            An upper shadow displays the highest price that it traded during that particular session, while a lower shadow shows how low the price went. Candlesticks with a long upper shadow and short lower shadow indicate that buyers dominated the session but then sellers forced prices down from their highs.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '14px' }}>
            Conversely, candlesticks with long lower shadows and short upper shadows indicate that sellers dominated the session but buyers later came in and pushed prices higher at the end of the session.
          </p>
          <div style={{ background: 'rgba(var(--primary-rgb), 0.05)', borderLeft: '4px solid var(--primary)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--secondary)', fontWeight: 500, margin: 0 }}>
              Candlesticks are useful because they represent the battle between buyers and sellers over a given period of time. This can help traders to make a decision on whether the buyers or sellers have control. But, candlestick charts are best used in combination with other technical indicators such as support and resistance levels.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Call to Action Banner */}
      <section className="ta-cta-banner">
        <h3>Learn, practice, and succeed with zero reliance on external tips</h3>
        <p>
          Build real analytical mastery through structured back-tested strategies and dedicated market guidance.
        </p>
        <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          Contact Now &amp; Master the Markets <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
