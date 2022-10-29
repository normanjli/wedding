import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../components/GlobalStyle.styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kaitlin and Norman&apos;s Wedding</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
