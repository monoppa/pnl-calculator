import Home from 'containers/Home';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Gain PNL Calculator</title>
        <meta name='description' content='Percent Gain Calculator' />
        <meta
          name='keywords'
          content='Online Converters, Calculator, converter, profit calculator, converters alculators, online converters, online measurements, Adjusted Cost Base, Compound Interest calculator, pnl, profit, loss, gain, calculator, invest, investment, percent, percentage, stocks, cryptocurrency, bitcon, btc, eth, ethereum'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='PNL gain calculator' />
        <meta property='og:description' content='Calculate your profit gains' />
        <meta property='og:image' content='/og.png' />
        <meta property='og:url' content='https://pnl-calculator.vercel.app/' />
      </Head>
      <Home />
    </>
  );
}
