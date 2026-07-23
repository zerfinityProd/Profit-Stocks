export function getBlogImage(slug: string): string {
  const baseUrl = import.meta.env.BASE_URL;

  switch (slug) {
    case 'buy-and-sell-traps':
      return `${baseUrl}wp-content/uploads/2025/04/BUY-SELL-Traps.png`;
    case 'difference-between-investing-and-trading':
      return `${baseUrl}wp-content/uploads/2023/06/Difference-Between-Investing-and-Trading.png`;
    case 'how-do-you-make-a-financial-or-stock-market-study-interesting-and-effective':
      return `${baseUrl}wp-content/uploads/2025/04/Financial-or-stock-market-study.png`;
    case 'how-to-become-profitable-from-heavy-losses-in-stock-market':
      return `${baseUrl}wp-content/uploads/2025/04/Profitable-from-heavy-losses-in-Stock-Market.png`;
    case 'how-to-become-successful-professional-trader':
      return `${baseUrl}wp-content/uploads/2019/11/Successful-Professional-Trader.png`;
    case 'less-is-more-in-trading':
      return `${baseUrl}wp-content/uploads/2025/04/Less-is-more-in-Trading.png`;
    case 'long-terms-always-pay-is-myth-trade-invest-wisely':
      return `${baseUrl}wp-content/uploads/2021/02/myth-Trade_invest-wisely.png`;
    case 'mobile-trading-easy-way-to-loose-money':
      return `${baseUrl}wp-content/uploads/2020/05/Mobile-Trading-Easy-way-to-loose-money.png`;
    case 'stock-market-and-psychology':
      return `${baseUrl}wp-content/uploads/2025/04/Stock-market-and-psychology.png`;
    case 'the-most-common-mistakes-in-market-trading':
      return `${baseUrl}wp-content/uploads/2019/11/Mistakes-in-Market-Trading.png`;
    case 'trade-journey-a-practical-way':
      return `${baseUrl}wp-content/uploads/2020/05/Trade-Journey-A-practical-way.png`;
    case 'why-i-seriously-hate-candlesticks':
      return `${baseUrl}wp-content/uploads/2019/11/Candlesticks.png`;
    case 'why-intraday-is-more-complex-to-trade-than-positional':
      return `${baseUrl}wp-content/uploads/2023/03/Intraday-main-1.png`;
    case 'why-trader-lose-money-in-market':
      return `${baseUrl}wp-content/uploads/2020/03/Why-Trader-Lose-Money-in-Market.png`;
    case 'why-trading-breakouts-can-be-dangerous':
      return `${baseUrl}wp-content/uploads/2019/11/Trading-Breakouts-can-be-dangerous.png`;
    default:
      return `${baseUrl}wp-content/uploads/2025/04/Financial-or-stock-market-study.png`;
  }
}
