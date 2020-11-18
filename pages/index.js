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
          content='Online Converters, Calculator, free, converter, profit calculator, converters alculators, online converters, online measurements, Adjusted Cost Base, Compound Interest calculator, pnl, profit, loss, gain, calculator, invest, investment, percent, percentage, stocks, cryptocurrency, bitcon, btc, eth, ethereum'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='Free PNL gain calculator' />
        <meta property='og:description' content='Calculate your profit gains' />
        <meta property='og:image' content='/og.png' />
        <meta property='og:url' content='https://pnl-calculator.vercel.app/' />

        <meta name='twitter:title' content='Free PNL gain calculator' />
        <meta
          name='twitter:description'
          content='Calculate your profit gains'
        />
        <meta name='twitter:image' content='/og.png' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Home />
    </>
  );
}
