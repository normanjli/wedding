import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../components/GlobalStyle.styles';
import Header from '../components/header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kaitlin and Norman&apos;s Wedding</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
